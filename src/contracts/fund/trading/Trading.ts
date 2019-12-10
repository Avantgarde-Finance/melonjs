import * as R from 'ramda';
import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { TradingAbi } from '../../../abis/Trading.abi';
import { Spoke } from '../hub/Spoke';
import { applyMixins } from '../../../utils/applyMixins';
import { toBigNumber } from '../../../utils/toBigNumber';
import BigNumber from 'bignumber.js';
import { Registry, AssetNotRegisteredError } from '../../version/Registry';
import { isZeroAddress } from '../../../utils/isZeroAddress';
import { hexToBytes } from 'web3-utils';
import { encodeFunctionSignature } from '../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../abis/ExchangeAdapter.abi';
import { AdapterMethodNotAllowedError } from './Trading.errors';

export interface ExchangeInfo {
  exchange: Address;
  adapter: Address;
  takesCustody: boolean;
}

export interface OpenMakeOrder {
  id: BigNumber;
  expiresAt: Date;
  orderIndex: BigNumber;
  buyAsset: Address;
}

export enum OrderUpdateType {
  make,
  take,
  cancel,
}

export interface Order {
  exchangeAddress: Address;
  orderId: number;
  updateType: OrderUpdateType;
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
  timestamp: Date;
  fillTakerQuantity: BigNumber;
}

export interface TradingDeployArguments {
  hub: Address;
  exchanges: Address[];
  adapters: Address[];
  registry: Address;
}

export interface CallOnExchangeArgs {
  exchangeIndex: number;
  methodSignature: string;
  orderAddresses: Address[]; // 6
  orderValues: BigNumber[]; // 8
  identifier: string; // bytes32
  makerAssetData: string; // bytes
  takerAssetData: string; // bytes
  signature: string; // bytes
}

export class Trading extends Contract {
  public static readonly abi = TradingAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: TradingDeployArguments) {
    return super.createDeployment<Trading>(environment, bytecode, from, [
      args.hub,
      args.exchanges,
      args.adapters,
      args.registry,
    ]);
  }

  /**
   * Gets information on all exchanges.
   *
   * @param block The block number to execute the call on.
   */
  public async getExchangeInfo(block?: number) {
    const { '0': ofExchanges, '1': ofAdapters, '2': takesCustody } = await this.makeCall<{
      '0': string[];
      '1': string[];
      '2': boolean[];
    }>('getExchangeInfo', undefined, block);

    const output = ofExchanges.map((_, index) => {
      return {
        exchange: ofExchanges[index],
        adapter: ofAdapters[index],
        takesCustody: takesCustody[index],
      };
    });

    return output as ExchangeInfo[];
  }

  /**
   * Gets information for a single exchange
   *
   * @param index The index of the exchange
   * @param block The block number to execute the call on.
   */
  public async getExchange(index: number, block?: number) {
    const { '0': exchange, '1': adapter, '2': takesCustody } = await this.makeCall<{
      '0': string;
      '1': string;
      '2': boolean;
    }>('exchanges', [index], block);

    return { exchange, adapter, takesCustody } as ExchangeInfo;
  }

  /**
   * Get the details of an open make order.
   *
   * @param exchange The address of the exchange
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public async getOpenMakeOrder(exchange: Address, asset: Address, block?: number) {
    const result = await this.makeCall<OpenMakeOrder>('exchangesToOpenMakeOrders', [exchange, asset], block);
    return {
      id: toBigNumber(result.id),
      expiresAt: new Date(parseInt(`${result.expiresAt}`, 10) * 1000),
      orderIndex: toBigNumber(result.orderIndex),
      buyAsset: result.buyAsset,
    };
  }

  /**
   * Get all open make orders.
   *
   * @param block The block number to execute the call on.
   */
  public async getOpenMakeOrders(block?: number) {
    const [exchangeInfo, registryAddress] = await Promise.all([this.getExchangeInfo(block), this.getRegistry(block)]);
    const registry = new Registry(this.environment, registryAddress);
    const assets = await registry.getRegisteredAssets(block);
    const exchanges = exchangeInfo.map(exchange => exchange.exchange);

    const possibilities = R.xprod(exchanges, assets);
    const openOrders = await Promise.all(
      possibilities.map(async ([exchange, asset]: [string, string]) => {
        const order = await this.getOpenMakeOrder(exchange, asset, block);
        return { ...order, exchange };
      }),
    );

    return openOrders.filter(o => !isZeroAddress(o.buyAsset));
  }

  /**
   * Get the details of an order.
   *
   * @param id The id of the order
   * @param block The block number to execute the call on.
   */
  public async getOrderDetails(id: BigNumber, block?: number) {
    const { '0': makerAsset, '1': takerAsset, '2': makerQuantity, '3': takerQuantity } = await this.makeCall<{
      0: string;
      1: string;
      2: string;
      3: string;
    }>('getOrderDetails', [id.toFixed(0)], block);

    return {
      makerAsset,
      takerAsset,
      makerQuantity: toBigNumber(makerQuantity),
      takerQuantity: toBigNumber(takerQuantity),
    };
  }

  /**
   * Checks if an order is expired.
   *
   * @param exchange The address of the exchange
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public isOrderExpired(exchange: Address, asset: Address, block?: number) {
    return this.makeCall<boolean>('isOrderExpired', [exchange, asset], block);
  }

  /**
   * Gets the order lifespan.
   *
   * @param block The block number to execute the call on.
   */
  public async getOrderLifespan(block?: number) {
    const result = await this.makeCall<string>('ORDER_LIFESPAN', undefined, block);
    return toBigNumber(result);
  }

  private async validateCallOnExchange(args: CallOnExchangeArgs) {
    const registry = new Registry(this.environment, await this.getRegistry());
    const exchange = await this.getExchange(args.exchangeIndex);

    const adapterMethodIsAllowed = await registry.isAdapterMethodAllowed(exchange.adapter, args.methodSignature);
    if (!adapterMethodIsAllowed) {
      throw new AdapterMethodNotAllowedError(exchange.adapter, args.methodSignature);
    }

    const makeOrderSignature = encodeFunctionSignature(ExchangeAdapterAbi, 'makeOrder');
    const takeOrderSignature = encodeFunctionSignature(ExchangeAdapterAbi, 'takeOrder');

    if (args.methodSignature === makeOrderSignature || args.methodSignature === takeOrderSignature) {
      const makerAssetIsRegistered = await registry.isAssetRegistered(args.orderAddresses[2]);
      if (!makerAssetIsRegistered) {
        throw new AssetNotRegisteredError(args.orderAddresses[2]);
      }

      const takerAssetIsRegistered = await registry.isAssetRegistered(args.orderAddresses[3]);
      if (!takerAssetIsRegistered) {
        throw new AssetNotRegisteredError(args.orderAddresses[3]);
      }
    }
  }

  /**
   * Call on exchange (all trading transactions go through this).
   *
   * @param from The address of the sender
   * @param args The arguments as [[CallOnExchangeArgs]]
   * @param validation An additional async validation function
   */
  public callOnExchange(from: Address, args: CallOnExchangeArgs, validationFunction?: () => Promise<void>) {
    const methodArgs = [
      args.exchangeIndex.toString(),
      args.methodSignature,
      args.orderAddresses,
      args.orderValues.map(orderValue => orderValue.toString()),
      args.identifier,
      hexToBytes(args.makerAssetData),
      hexToBytes(args.takerAssetData),
      hexToBytes(args.signature),
    ];

    const validate = async () => {
      await this.validateCallOnExchange(args);
      if (typeof validationFunction === 'function') {
        await validationFunction();
      }
    };

    return this.createTransaction({ from, method: 'callOnExchange', args: methodArgs, validate });
  }
}

export interface Trading extends Spoke {}
applyMixins(Trading, [Spoke]);
