import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { applyMixins } from '../utils/applyMixins';
import { Policy } from './Policy';
import { AddressList } from './AddressList';
import { AssetWhitelistAbi } from '../abis/AssetWhitelist.abi';

export class AssetWhitelist extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(AssetWhitelistAbi, address));
  }

  /**
   * Gets the maximum number of positions.
   *
   * @param asset The address of the asset
   * @param block The block number to execute the call on.
   */
  public async getAssetIndex(asset: Address, block?: number) {
    const result = await this.makeCall<string>('getAssetIndex', [asset], block);
    return parseInt(result, 10);
  }
}

export interface AssetWhitelist extends Policy, AddressList {}
applyMixins(AssetWhitelist, [Policy, AddressList]);
