import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const WithdrawableAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'alerter',
        type: 'address',
      },
    ],
    name: 'removeAlerter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'pendingAdmin',
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
    name: 'getOperators',
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
        name: 'token',
        type: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'sendTo',
        type: 'address',
      },
    ],
    name: 'withdrawToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newAlerter',
        type: 'address',
      },
    ],
    name: 'addAlerter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'transferAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'claimAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'transferAdminQuickly',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getAlerters',
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
        name: 'newOperator',
        type: 'address',
      },
    ],
    name: 'addOperator',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'removeOperator',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'sendTo',
        type: 'address',
      },
    ],
    name: 'withdrawEther',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'admin',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'sendTo',
        type: 'address',
      },
    ],
    name: 'TokenWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'sendTo',
        type: 'address',
      },
    ],
    name: 'EtherWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'pendingAdmin',
        type: 'address',
      },
    ],
    name: 'TransferAdminPending',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'newAdmin',
        type: 'address',
      },
      {
        indexed: false,
        name: 'previousAdmin',
        type: 'address',
      },
    ],
    name: 'AdminClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'newAlerter',
        type: 'address',
      },
      {
        indexed: false,
        name: 'isAdd',
        type: 'bool',
      },
    ],
    name: 'AlerterAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'newOperator',
        type: 'address',
      },
      {
        indexed: false,
        name: 'isAdd',
        type: 'bool',
      },
    ],
    name: 'OperatorAdded',
    type: 'event',
  },
] as AbiItem[];
