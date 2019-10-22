import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const SimplePriceFeedAbi = [
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
    inputs: [],
    name: 'getLastUpdateId',
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
    constant: false,
    inputs: [
      {
        name: 'ofAssets',
        type: 'address[]',
      },
      {
        name: 'newPrices',
        type: 'uint256[]',
      },
    ],
    name: 'update',
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
    name: 'getPrice',
    outputs: [
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
    inputs: [],
    name: 'superFeed',
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
    constant: true,
    inputs: [],
    name: 'registry',
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
    constant: true,
    inputs: [
      {
        name: 'ofAssets',
        type: 'address[]',
      },
    ],
    name: 'getPrices',
    outputs: [
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
        type: 'uint256[]',
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
    name: 'assetsToPrices',
    outputs: [
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
    inputs: [],
    name: 'updateId',
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
    name: 'getQuoteAsset',
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
    inputs: [],
    name: 'QUOTE_ASSET',
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
    inputs: [
      {
        name: 'ofRegistrar',
        type: 'address',
      },
      {
        name: 'ofQuoteAsset',
        type: 'address',
      },
      {
        name: 'ofSuperFeed',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'hash',
        type: 'bytes32',
      },
    ],
    name: 'PriceUpdated',
    type: 'event',
  },
] as AbiItem[];
