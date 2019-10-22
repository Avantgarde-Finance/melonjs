import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const CanonicalRegistrarAbi = [
  {
    constant: true,
    inputs: [
      {
        name: 'ofExchange',
        type: 'address',
      },
      {
        name: 'querySignature',
        type: 'bytes4',
      },
    ],
    name: 'exchangeMethodIsAllowed',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'owner_',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
    ],
    name: 'assetIsRegistered',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
      {
        name: 'assetIndex',
        type: 'uint256',
      },
    ],
    name: 'removeAsset',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
    ],
    name: 'getName',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
      {
        name: 'querySignature',
        type: 'bytes4',
      },
    ],
    name: 'assetMethodIsAllowed',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ofExchange',
        type: 'address',
      },
    ],
    name: 'getExchangeFunctionSignatures',
    outputs: [
      {
        name: '',
        type: 'bytes4[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'authority_',
        type: 'address',
      },
    ],
    name: 'setAuthority',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'ofExchange',
        type: 'address',
      },
      {
        name: 'ofExchangeAdapter',
        type: 'address',
      },
      {
        name: 'inputTakesCustody',
        type: 'bool',
      },
      {
        name: 'inputFunctionSignatures',
        type: 'bytes4[]',
      },
    ],
    name: 'registerExchange',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'ofExchange',
        type: 'address',
      },
      {
        name: 'ofExchangeAdapter',
        type: 'address',
      },
      {
        name: 'inputTakesCustody',
        type: 'bool',
      },
      {
        name: 'inputFunctionSignatures',
        type: 'bytes4[]',
      },
    ],
    name: 'updateExchange',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'registeredAssets',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'exchangeInformation',
    outputs: [
      {
        name: 'exists',
        type: 'bool',
      },
      {
        name: 'adapter',
        type: 'address',
      },
      {
        name: 'takesCustody',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getRegisteredExchanges',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'ofExchange',
        type: 'address',
      },
      {
        name: 'exchangeIndex',
        type: 'uint256',
      },
    ],
    name: 'removeExchange',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'authority',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'registeredExchanges',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
    ],
    name: 'getSymbol',
    outputs: [
      {
        name: '',
        type: 'bytes8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
      {
        name: 'inputName',
        type: 'bytes32',
      },
      {
        name: 'inputSymbol',
        type: 'bytes8',
      },
      {
        name: 'inputUrl',
        type: 'string',
      },
      {
        name: 'inputIpfsHash',
        type: 'string',
      },
      {
        name: 'ofBreakInBreakOut',
        type: 'address[2]',
      },
      {
        name: 'inputStandards',
        type: 'uint256[]',
      },
      {
        name: 'inputFunctionSignatures',
        type: 'bytes4[]',
      },
    ],
    name: 'updateAsset',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
    ],
    name: 'getDecimals',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getRegisteredAssets',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
      {
        name: 'inputName',
        type: 'bytes32',
      },
      {
        name: 'inputSymbol',
        type: 'bytes8',
      },
      {
        name: 'inputUrl',
        type: 'string',
      },
      {
        name: 'inputIpfsHash',
        type: 'string',
      },
      {
        name: 'breakInBreakOut',
        type: 'address[2]',
      },
      {
        name: 'inputStandards',
        type: 'uint256[]',
      },
      {
        name: 'inputFunctionSignatures',
        type: 'bytes4[]',
      },
    ],
    name: 'registerAsset',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'assetInformation',
    outputs: [
      {
        name: 'exists',
        type: 'bool',
      },
      {
        name: 'name',
        type: 'bytes32',
      },
      {
        name: 'symbol',
        type: 'bytes8',
      },
      {
        name: 'decimals',
        type: 'uint256',
      },
      {
        name: 'url',
        type: 'string',
      },
      {
        name: 'ipfsHash',
        type: 'string',
      },
      {
        name: 'breakIn',
        type: 'address',
      },
      {
        name: 'breakOut',
        type: 'address',
      },
      {
        name: 'price',
        type: 'uint256',
      },
      {
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ofExchange',
        type: 'address',
      },
    ],
    name: 'exchangeIsRegistered',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'ofExchange',
        type: 'address',
      },
    ],
    name: 'getExchangeInformation',
    outputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        name: 'sig',
        type: 'bytes4',
      },
      {
        indexed: true,
        name: 'guy',
        type: 'address',
      },
      {
        indexed: true,
        name: 'foo',
        type: 'bytes32',
      },
      {
        indexed: true,
        name: 'bar',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'wad',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'fax',
        type: 'bytes',
      },
    ],
    name: 'LogNote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'authority',
        type: 'address',
      },
    ],
    name: 'LogSetAuthority',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'LogSetOwner',
    type: 'event',
  },
] as AbiItem[];
