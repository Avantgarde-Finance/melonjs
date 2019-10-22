import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const ConversionRatesAbi = [
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
    constant: false,
    inputs: [
      {
        name: 'reserve',
        type: 'address',
      },
    ],
    name: 'setReserveAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'disableTokenTrade',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'validRateDurationInBlocks',
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
        name: 'tokens',
        type: 'address[]',
      },
      {
        name: 'baseBuy',
        type: 'uint256[]',
      },
      {
        name: 'baseSell',
        type: 'uint256[]',
      },
      {
        name: 'buy',
        type: 'bytes14[]',
      },
      {
        name: 'sell',
        type: 'bytes14[]',
      },
      {
        name: 'blockNumber',
        type: 'uint256',
      },
      {
        name: 'indices',
        type: 'uint256[]',
      },
    ],
    name: 'setBaseRate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'enableTokenTrade',
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
    constant: true,
    inputs: [],
    name: 'getListedTokens',
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
    constant: true,
    inputs: [],
    name: 'numTokensInCurrentCompactData',
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
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'command',
        type: 'uint256',
      },
      {
        name: 'param',
        type: 'uint256',
      },
    ],
    name: 'getStepFunctionData',
    outputs: [
      {
        name: '',
        type: 'int256',
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
        name: 'buy',
        type: 'bytes14[]',
      },
      {
        name: 'sell',
        type: 'bytes14[]',
      },
      {
        name: 'blockNumber',
        type: 'uint256',
      },
      {
        name: 'indices',
        type: 'uint256[]',
      },
    ],
    name: 'setCompactData',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'duration',
        type: 'uint256',
      },
    ],
    name: 'setValidRateDurationInBlocks',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getTokenBasicData',
    outputs: [
      {
        name: '',
        type: 'bool',
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
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getRateUpdateBlock',
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
        name: 'xBuy',
        type: 'int256[]',
      },
      {
        name: 'yBuy',
        type: 'int256[]',
      },
      {
        name: 'xSell',
        type: 'int256[]',
      },
      {
        name: 'ySell',
        type: 'int256[]',
      },
    ],
    name: 'setQtyStepFunction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
    constant: true,
    inputs: [],
    name: 'reserveContract',
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
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'tokenImbalanceData',
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
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'currentBlockNumber',
        type: 'uint256',
      },
      {
        name: 'buy',
        type: 'bool',
      },
      {
        name: 'qty',
        type: 'uint256',
      },
    ],
    name: 'getRate',
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
        name: 'xBuy',
        type: 'int256[]',
      },
      {
        name: 'yBuy',
        type: 'int256[]',
      },
      {
        name: 'xSell',
        type: 'int256[]',
      },
      {
        name: 'ySell',
        type: 'int256[]',
      },
    ],
    name: 'setImbalanceStepFunction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
        name: 'minimalRecordResolution',
        type: 'uint256',
      },
      {
        name: 'maxPerBlockImbalance',
        type: 'uint256',
      },
      {
        name: 'maxTotalImbalance',
        type: 'uint256',
      },
    ],
    name: 'setTokenControlInfo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
        name: 'buyAmount',
        type: 'int256',
      },
      {
        name: 'rateUpdateBlock',
        type: 'uint256',
      },
      {
        name: 'currentBlock',
        type: 'uint256',
      },
    ],
    name: 'recordImbalance',
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
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
      {
        name: 'buy',
        type: 'bool',
      },
    ],
    name: 'getBasicRate',
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
    ],
    name: 'addToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getCompactData',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'bytes1',
      },
      {
        name: '',
        type: 'bytes1',
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
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getTokenControlInfo',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
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
    inputs: [
      {
        name: '_admin',
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
