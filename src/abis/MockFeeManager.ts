import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MockFeeManagerAbi = [
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
    name: 'initialized',
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
    inputs: [],
    name: 'priceSource',
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
    name: 'performanceFeeAmount',
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
    name: 'hub',
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
    name: 'version',
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
    constant: false,
    inputs: [
      {
        name: '_spokes',
        type: 'address[12]',
      },
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'mlnToken',
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
    inputs: [],
    name: 'totalFeeAmount',
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
    name: 'routes',
    outputs: [
      {
        name: 'accounting',
        type: 'address',
      },
      {
        name: 'feeManager',
        type: 'address',
      },
      {
        name: 'participation',
        type: 'address',
      },
      {
        name: 'policyManager',
        type: 'address',
      },
      {
        name: 'shares',
        type: 'address',
      },
      {
        name: 'trading',
        type: 'address',
      },
      {
        name: 'vault',
        type: 'address',
      },
      {
        name: 'priceSource',
        type: 'address',
      },
      {
        name: 'registry',
        type: 'address',
      },
      {
        name: 'version',
        type: 'address',
      },
      {
        name: 'engine',
        type: 'address',
      },
      {
        name: 'mlnToken',
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
    name: 'engine',
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
    inputs: [],
    name: 'rewardManagementFee',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_amt',
        type: 'uint256',
      },
    ],
    name: 'setTotalFeeAmount',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_amt',
        type: 'uint256',
      },
    ],
    name: 'setPerformanceFeeAmount',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_hub',
        type: 'address',
      },
      {
        name: '_denominationAsset',
        type: 'address',
      },
      {
        name: '_fees',
        type: 'address[]',
      },
      {
        name: '_periods',
        type: 'uint256[]',
      },
      {
        name: '_rates',
        type: 'uint256',
      },
      {
        name: 'registry',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
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
