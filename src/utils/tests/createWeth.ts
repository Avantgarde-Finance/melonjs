import { Address } from '../../Address';
import { Weth } from '../../contracts/Weth';
import { WETHBytecode } from '../../abis/WETH.bin';
import { TestEnvironment } from './createTestEnvironment';

export async function createWeth(environment: TestEnvironment, creator: Address) {
  const deploy = Weth.deploy(environment, WETHBytecode, creator);
  return await deploy.send(await deploy.estimate());
}
