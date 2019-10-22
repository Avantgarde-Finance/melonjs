import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const DSGuardAbi = [
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
    constant: false,
    inputs: [
      {
        name: 'src',
        type: 'address',
      },
      {
        name: 'dst',
        type: 'address',
      },
      {
        name: 'sig',
        type: 'bytes32',
      },
    ],
    name: 'forbid',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'src',
        type: 'bytes32',
      },
      {
        name: 'dst',
        type: 'bytes32',
      },
      {
        name: 'sig',
        type: 'bytes32',
      },
    ],
    name: 'forbid',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
    name: 'ANY',
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
    constant: true,
    inputs: [
      {
        name: 'src_',
        type: 'address',
      },
      {
        name: 'dst_',
        type: 'address',
      },
      {
        name: 'sig',
        type: 'bytes4',
      },
    ],
    name: 'canCall',
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
    constant: false,
    inputs: [
      {
        name: 'src',
        type: 'address',
      },
      {
        name: 'dst',
        type: 'address',
      },
      {
        name: 'sig',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'src',
        type: 'bytes32',
      },
      {
        name: 'dst',
        type: 'bytes32',
      },
      {
        name: 'sig',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'src',
        type: 'bytes32',
      },
      {
        indexed: true,
        name: 'dst',
        type: 'bytes32',
      },
      {
        indexed: true,
        name: 'sig',
        type: 'bytes32',
      },
    ],
    name: 'LogPermit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'src',
        type: 'bytes32',
      },
      {
        indexed: true,
        name: 'dst',
        type: 'bytes32',
      },
      {
        indexed: true,
        name: 'sig',
        type: 'bytes32',
      },
    ],
    name: 'LogForbid',
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
