import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const FeeBurnerAbi = [
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
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'reserveKNCWallet',
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
        name: 'rate',
        type: 'uint256',
      },
    ],
    name: 'setKNCRate',
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
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'reserveFeeToWallet',
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
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'reserveFeeToBurn',
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
    name: 'taxWallet',
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
    name: 'reserveFeesInBps',
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
    name: 'taxFeeBps',
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
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'walletFeesInBps',
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
        name: 'reserve',
        type: 'address',
      },
      {
        name: 'feesInBps',
        type: 'uint256',
      },
      {
        name: 'kncWallet',
        type: 'address',
      },
    ],
    name: 'setReserveData',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'wallet',
        type: 'address',
      },
      {
        name: 'feesInBps',
        type: 'uint256',
      },
    ],
    name: 'setWalletFees',
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
    constant: true,
    inputs: [],
    name: 'kncPerETHRate',
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
        name: '_taxFeeBps',
        type: 'uint256',
      },
    ],
    name: 'setTaxInBps',
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
    constant: true,
    inputs: [],
    name: 'kyberNetwork',
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
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'feePayedPerReserve',
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
        name: 'wallet',
        type: 'address',
      },
      {
        name: 'reserve',
        type: 'address',
      },
    ],
    name: 'sendFeeToWallet',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'knc',
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
        name: '_taxWallet',
        type: 'address',
      },
    ],
    name: 'setTaxWallet',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'reserve',
        type: 'address',
      },
    ],
    name: 'burnReserveFees',
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
    constant: false,
    inputs: [
      {
        name: 'tradeWeiAmount',
        type: 'uint256',
      },
      {
        name: 'reserve',
        type: 'address',
      },
      {
        name: 'wallet',
        type: 'address',
      },
    ],
    name: 'handleFees',
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
    inputs: [
      {
        name: '_admin',
        type: 'address',
      },
      {
        name: 'kncToken',
        type: 'address',
      },
      {
        name: '_kyberNetwork',
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
        indexed: false,
        name: 'reserve',
        type: 'address',
      },
      {
        indexed: false,
        name: 'feeInBps',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'kncWallet',
        type: 'address',
      },
    ],
    name: 'ReserveDataSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'wallet',
        type: 'address',
      },
      {
        indexed: false,
        name: 'feesInBps',
        type: 'uint256',
      },
    ],
    name: 'WalletFeesSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'feesInBps',
        type: 'uint256',
      },
    ],
    name: 'TaxFeesSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'taxWallet',
        type: 'address',
      },
    ],
    name: 'TaxWalletSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'reserve',
        type: 'address',
      },
      {
        indexed: false,
        name: 'wallet',
        type: 'address',
      },
      {
        indexed: false,
        name: 'walletFee',
        type: 'uint256',
      },
    ],
    name: 'AssignFeeToWallet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'reserve',
        type: 'address',
      },
      {
        indexed: false,
        name: 'burnFee',
        type: 'uint256',
      },
    ],
    name: 'AssignBurnFees',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'reserve',
        type: 'address',
      },
      {
        indexed: false,
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        name: 'quantity',
        type: 'uint256',
      },
    ],
    name: 'BurnAssignedFees',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'reserve',
        type: 'address',
      },
      {
        indexed: false,
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        name: 'taxWallet',
        type: 'address',
      },
      {
        indexed: false,
        name: 'quantity',
        type: 'uint256',
      },
    ],
    name: 'SendTaxFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'wallet',
        type: 'address',
      },
      {
        indexed: false,
        name: 'reserve',
        type: 'address',
      },
      {
        indexed: false,
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'SendWalletFees',
    type: 'event',
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
