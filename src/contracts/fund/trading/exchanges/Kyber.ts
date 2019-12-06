import BigNumber from 'bignumber.js';
import { Address } from '../../../../Address';
import { sameAddress } from '../../../../utils/sameAddress';
import { Trading } from '../Trading';
import { encodeFunctionSignature } from '../../../../utils/encodeFunctionSignature';
import { ExchangeAdapterAbi } from '../../../../abis/ExchangeAdapter.abi';
import { zeroAddress } from '../../../../utils/zeroAddress';
import { Hub } from '../../hub/Hub';
import { KyberNotRegisteredWithFundError, FundIsShutDownError, InsufficientBalanceError } from '../Trading.errors';
import { PreminedToken } from '../../../dependencies/token/PreminedToken';

export interface TakeOrderKyber {
  exchangeAddress: Address;
  makerAsset: Address;
  takerAsset: Address;
  makerQuantity: BigNumber;
  takerQuantity: BigNumber;
}

export class Kyber {
  constructor(public readonly trading: Trading) {}

  /**
   * Take order on Kyber
   *
   * @param from The address of the sender
   * @param args The arguments as [[TakeOrderKyber]]
   */
  public async takeOrder(from: Address, args: TakeOrderKyber) {
    const exchangeInfo = await this.trading.getExchangeInfo();
    const exchangeIndex = exchangeInfo.findIndex(exchange => sameAddress(exchange.exchange, args.exchangeAddress));

    if (exchangeIndex === -1) {
      throw new KyberNotRegisteredWithFundError(args.exchangeAddress);
    }

    const methodArgs = {
      exchangeIndex,
      methodSignature: encodeFunctionSignature(ExchangeAdapterAbi, 'takeOrder'),
      orderAddresses: [zeroAddress, zeroAddress, args.makerAsset, args.takerAsset, zeroAddress, zeroAddress],
      orderValues: [
        args.makerQuantity,
        args.takerQuantity,
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        new BigNumber(0),
        args.takerQuantity,
        new BigNumber(0),
      ],
      identifier: '0x0',
      makerAssetData: '0x0',
      takerAssetData: '0x0',
      signature: '0x0',
    };

    const validate = async () => {
      const vaultAddress = (await this.trading.getRoutes()).vault;
      const token = new PreminedToken(this.trading.environment, args.takerAsset);
      const vaultTokenBalance = await token.getBalanceOf(vaultAddress);
      if (vaultTokenBalance.isLessThan(args.takerQuantity)) {
        throw new InsufficientBalanceError(args.takerQuantity, vaultTokenBalance);
      }

      const hub = new Hub(this.trading.environment, await this.trading.getHub());
      const isShutDown = await hub.isShutDown();
      if (isShutDown) {
        throw new FundIsShutDownError(hub.contract.address);
      }
    };

    return this.trading.callOnExchange(from, methodArgs, validate);
  }
}
