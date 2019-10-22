import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const ParticipationInterfaceAbi = [
  {
    constant: false,
    inputs: [
      {
        name: 'shareQuantity',
        type: 'uint256',
      },
      {
        name: 'requestedAssets',
        type: 'address[]',
      },
    ],
    name: 'redeemWithConstraints',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'requestedShares',
        type: 'uint256',
      },
      {
        name: 'investmentAmount',
        type: 'uint256',
      },
      {
        name: 'investmentAsset',
        type: 'address',
      },
    ],
    name: 'requestInvestment',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'requestOwner',
        type: 'address',
      },
    ],
    name: 'executeRequestFor',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'cancelRequest',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'redeem',
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
    name: 'hasRequest',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'asset',
        type: 'address[]',
      },
    ],
    name: 'EnableInvestment',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'assets',
        type: 'address[]',
      },
    ],
    name: 'DisableInvestment',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'requestOwner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'investmentAsset',
        type: 'address',
      },
      {
        indexed: false,
        name: 'requestedShares',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'investmentAmount',
        type: 'uint256',
      },
    ],
    name: 'InvestmentRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'requestOwner',
        type: 'address',
      },
      {
        indexed: true,
        name: 'executor',
        type: 'address',
      },
      {
        indexed: true,
        name: 'investmentAsset',
        type: 'address',
      },
      {
        indexed: false,
        name: 'investmentAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'requestedShares',
        type: 'uint256',
      },
    ],
    name: 'RequestExecution',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'requestOwner',
        type: 'address',
      },
    ],
    name: 'CancelRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'redeemer',
        type: 'address',
      },
      {
        indexed: false,
        name: 'assets',
        type: 'address[]',
      },
      {
        indexed: false,
        name: 'assetQuantities',
        type: 'uint256[]',
      },
      {
        indexed: false,
        name: 'redeemedShares',
        type: 'uint256',
      },
    ],
    name: 'Redemption',
    type: 'event',
  },
] as AbiItem[];
