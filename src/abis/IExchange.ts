import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const IExchangeAbi = [
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmounts',
        type: 'uint256[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'batchFillOrders',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'hash',
        type: 'bytes32',
      },
      {
        name: 'signerAddress',
        type: 'address',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'preSign',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'leftOrder',
        type: 'tuple',
      },
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'rightOrder',
        type: 'tuple',
      },
      {
        name: 'leftSignature',
        type: 'bytes',
      },
      {
        name: 'rightSignature',
        type: 'bytes',
      },
    ],
    name: 'matchOrders',
    outputs: [
      {
        components: [
          {
            components: [
              {
                name: 'makerAssetFilledAmount',
                type: 'uint256',
              },
              {
                name: 'takerAssetFilledAmount',
                type: 'uint256',
              },
              {
                name: 'makerFeePaid',
                type: 'uint256',
              },
              {
                name: 'takerFeePaid',
                type: 'uint256',
              },
            ],
            name: 'left',
            type: 'tuple',
          },
          {
            components: [
              {
                name: 'makerAssetFilledAmount',
                type: 'uint256',
              },
              {
                name: 'takerAssetFilledAmount',
                type: 'uint256',
              },
              {
                name: 'makerFeePaid',
                type: 'uint256',
              },
              {
                name: 'takerFeePaid',
                type: 'uint256',
              },
            ],
            name: 'right',
            type: 'tuple',
          },
          {
            name: 'leftMakerAssetSpreadAmount',
            type: 'uint256',
          },
        ],
        name: 'matchedFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrderNoThrow',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'fillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
    ],
    name: 'batchCancelOrders',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmounts',
        type: 'uint256[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'batchFillOrKillOrders',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'targetOrderEpoch',
        type: 'uint256',
      },
    ],
    name: 'cancelOrdersUpTo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmounts',
        type: 'uint256[]',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'batchFillOrdersNoThrow',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
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
        name: 'assetProxyId',
        type: 'bytes4',
      },
    ],
    name: 'getAssetProxy',
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
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrKillOrder',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'fillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'validatorAddress',
        type: 'address',
      },
      {
        name: 'approval',
        type: 'bool',
      },
    ],
    name: 'setSignatureValidatorApproval',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'marketSellOrders',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
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
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
    ],
    name: 'getOrdersInfo',
    outputs: [
      {
        components: [
          {
            name: 'orderStatus',
            type: 'uint8',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
          },
          {
            name: 'orderTakerAssetFilledAmount',
            type: 'uint256',
          },
        ],
        name: '',
        type: 'tuple[]',
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
        name: 'hash',
        type: 'bytes32',
      },
      {
        name: 'signerAddress',
        type: 'address',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'isValidSignature',
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
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'makerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'marketBuyOrdersNoThrow',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'fillOrder',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'fillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'salt',
        type: 'uint256',
      },
      {
        name: 'signerAddress',
        type: 'address',
      },
      {
        name: 'data',
        type: 'bytes',
      },
      {
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'executeTransaction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'assetProxy',
        type: 'address',
      },
    ],
    name: 'registerAssetProxy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
    ],
    name: 'getOrderInfo',
    outputs: [
      {
        components: [
          {
            name: 'orderStatus',
            type: 'uint8',
          },
          {
            name: 'orderHash',
            type: 'bytes32',
          },
          {
            name: 'orderTakerAssetFilledAmount',
            type: 'uint256',
          },
        ],
        name: 'orderInfo',
        type: 'tuple',
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
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'order',
        type: 'tuple',
      },
    ],
    name: 'cancelOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'takerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'marketSellOrdersNoThrow',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: 'makerAddress',
            type: 'address',
          },
          {
            name: 'takerAddress',
            type: 'address',
          },
          {
            name: 'feeRecipientAddress',
            type: 'address',
          },
          {
            name: 'senderAddress',
            type: 'address',
          },
          {
            name: 'makerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetAmount',
            type: 'uint256',
          },
          {
            name: 'makerFee',
            type: 'uint256',
          },
          {
            name: 'takerFee',
            type: 'uint256',
          },
          {
            name: 'expirationTimeSeconds',
            type: 'uint256',
          },
          {
            name: 'salt',
            type: 'uint256',
          },
          {
            name: 'makerAssetData',
            type: 'bytes',
          },
          {
            name: 'takerAssetData',
            type: 'bytes',
          },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      {
        name: 'makerAssetFillAmount',
        type: 'uint256',
      },
      {
        name: 'signatures',
        type: 'bytes[]',
      },
    ],
    name: 'marketBuyOrders',
    outputs: [
      {
        components: [
          {
            name: 'makerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'takerAssetFilledAmount',
            type: 'uint256',
          },
          {
            name: 'makerFeePaid',
            type: 'uint256',
          },
          {
            name: 'takerFeePaid',
            type: 'uint256',
          },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
