import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const CanonicalPriceFeedAbi = [
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
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'stake',
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
    name: 'stakedAmounts',
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
        name: 'ofAsset',
        type: 'address',
      },
    ],
    name: 'hasValidPrice',
    outputs: [
      {
        name: 'isValid',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'isStakingFeed',
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
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'isValidNode',
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
    constant: false,
    inputs: [],
    name: 'disableUpdates',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getValidity',
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
    name: 'VALIDITY',
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
    constant: false,
    inputs: [
      {
        name: 'newCount',
        type: 'uint256',
      },
    ],
    name: 'setMinimumPriceCount',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'totalStakedFor',
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
    name: 'getLastUpdate',
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
    inputs: [],
    name: 'getHistoryLength',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'numStakers',
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
        name: 'user',
        type: 'address',
      },
    ],
    name: 'isOperator',
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
    constant: true,
    inputs: [],
    name: 'stakingToken',
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
    inputs: [
      {
        name: 'fromAssetQuantity',
        type: 'uint256',
      },
      {
        name: 'fromAsset',
        type: 'address',
      },
      {
        name: 'toAsset',
        type: 'address',
      },
    ],
    name: 'convertQuantity',
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
    inputs: [],
    name: 'enableUpdates',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
    name: 'hasValidPrices',
    outputs: [
      {
        name: 'areRecent',
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
    name: 'getStakersAndAmounts',
    outputs: [
      {
        name: '',
        type: 'address[]',
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
    inputs: [],
    name: 'updatesAreAllowed',
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
    name: 'INTERVAL',
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
    inputs: [],
    name: 'setupStakingPriceFeed',
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
    inputs: [
      {
        name: 'ofAsset',
        type: 'address',
      },
    ],
    name: 'getPriceInfo',
    outputs: [
      {
        name: 'price',
        type: 'uint256',
      },
      {
        name: 'assetDecimals',
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
    inputs: [],
    name: 'getInterval',
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
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getPriceFeedsByOwner',
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
        name: 'ofAsset',
        type: 'address',
      },
    ],
    name: 'getInvertedPriceInfo',
    outputs: [
      {
        name: 'invertedPrice',
        type: 'uint256',
      },
      {
        name: 'assetDecimals',
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
        name: 'sellAsset',
        type: 'address',
      },
      {
        name: 'buyAsset',
        type: 'address',
      },
      {
        name: 'sellQuantity',
        type: 'uint256',
      },
      {
        name: 'buyQuantity',
        type: 'uint256',
      },
    ],
    name: 'getOrderPriceInfo',
    outputs: [
      {
        name: 'orderPrice',
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
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'searchNode',
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
        name: 'ofBase',
        type: 'address',
      },
      {
        name: 'ofQuote',
        type: 'address',
      },
    ],
    name: 'getReferencePriceInfo',
    outputs: [
      {
        name: 'referencePrice',
        type: 'uint256',
      },
      {
        name: 'decimal',
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
    constant: true,
    inputs: [],
    name: 'withdrawalDelay',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'stakeToWithdraw',
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
        name: '',
        type: 'uint256',
      },
    ],
    name: 'priceHistory',
    outputs: [
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
    name: 'numOperators',
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
        name: 'unsorted',
        type: 'uint256[]',
      },
    ],
    name: 'medianize',
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
    inputs: [],
    name: 'withdrawStake',
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
    name: 'lastUpdate',
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
    ],
    name: 'collectAndUpdate',
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
    constant: false,
    inputs: [
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'unstake',
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
    constant: false,
    inputs: [
      {
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getHistoryAt',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
        type: 'uint256',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'isRanked',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'latestUnstakeTime',
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
        name: 'sellAsset',
        type: 'address',
      },
      {
        name: 'buyAsset',
        type: 'address',
      },
    ],
    name: 'existsPriceOnAssetPair',
    outputs: [
      {
        name: 'isExistent',
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
    name: 'minimumPriceCount',
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
    inputs: [],
    name: 'minimumStake',
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
    constant: true,
    inputs: [
      {
        name: 'ofAssets',
        type: 'address[]',
      },
    ],
    name: 'pricesToCommit',
    outputs: [
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
    constant: false,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'burnStake',
    outputs: [],
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
    inputs: [
      {
        name: 'ofStakingAsset',
        type: 'address',
      },
      {
        name: 'ofQuoteAsset',
        type: 'address',
      },
      {
        name: 'quoteAssetName',
        type: 'bytes32',
      },
      {
        name: 'quoteAssetSymbol',
        type: 'bytes8',
      },
      {
        name: 'quoteAssetUrl',
        type: 'string',
      },
      {
        name: 'quoteAssetIpfsHash',
        type: 'string',
      },
      {
        name: 'quoteAssetBreakInBreakOut',
        type: 'address[2]',
      },
      {
        name: 'quoteAssetStandards',
        type: 'uint256[]',
      },
      {
        name: 'quoteAssetFunctionSignatures',
        type: 'bytes4[]',
      },
      {
        name: 'updateInfo',
        type: 'uint256[2]',
      },
      {
        name: 'stakingInfo',
        type: 'uint256[3]',
      },
      {
        name: 'ofGovernance',
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
        name: 'ofPriceFeed',
        type: 'address',
      },
    ],
    name: 'SetupPriceFeed',
    type: 'event',
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'total',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Staked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'total',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Unstaked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'StakeBurned',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'token',
        type: 'address[]',
      },
      {
        indexed: false,
        name: 'price',
        type: 'uint256[]',
      },
    ],
    name: 'PriceUpdate',
    type: 'event',
  },
] as AbiItem[];
