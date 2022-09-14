import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  EthToTokenSwapSuccessfull,
  LiquidityWithdrawSuccessfull,
  OwnershipTransferred,
  TokenAddressesSet,
  TokenToEthSwapSuccessfull,
  TokensAdded,
  TokensRemvod,
  chainLinkPriceFeedAdded,
  poolCreated,
  tokenSwappedSuccessfully
} from "../generated/DEX/DEX"

export function createEthToTokenSwapSuccessfullEvent(
  ethSwapped: BigInt,
  tokenReceived: BigInt,
  transactionFee: BigInt,
  user: Address
): EthToTokenSwapSuccessfull {
  let ethToTokenSwapSuccessfullEvent = changetype<EthToTokenSwapSuccessfull>(
    newMockEvent()
  )

  ethToTokenSwapSuccessfullEvent.parameters = new Array()

  ethToTokenSwapSuccessfullEvent.parameters.push(
    new ethereum.EventParam(
      "ethSwapped",
      ethereum.Value.fromUnsignedBigInt(ethSwapped)
    )
  )
  ethToTokenSwapSuccessfullEvent.parameters.push(
    new ethereum.EventParam(
      "tokenReceived",
      ethereum.Value.fromSignedBigInt(tokenReceived)
    )
  )
  ethToTokenSwapSuccessfullEvent.parameters.push(
    new ethereum.EventParam(
      "transactionFee",
      ethereum.Value.fromSignedBigInt(transactionFee)
    )
  )
  ethToTokenSwapSuccessfullEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return ethToTokenSwapSuccessfullEvent
}

export function createLiquidityWithdrawSuccessfullEvent(
  poolId: BigInt,
  tokenToRecieve: BigInt,
  tokenToReceiveWithInterest: BigInt,
  totalInterestEarned: BigInt,
  user: Address,
  token: Address
): LiquidityWithdrawSuccessfull {
  let liquidityWithdrawSuccessfullEvent = changetype<
    LiquidityWithdrawSuccessfull
  >(newMockEvent())

  liquidityWithdrawSuccessfullEvent.parameters = new Array()

  liquidityWithdrawSuccessfullEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  liquidityWithdrawSuccessfullEvent.parameters.push(
    new ethereum.EventParam(
      "tokenToRecieve",
      ethereum.Value.fromUnsignedBigInt(tokenToRecieve)
    )
  )
  liquidityWithdrawSuccessfullEvent.parameters.push(
    new ethereum.EventParam(
      "tokenToReceiveWithInterest",
      ethereum.Value.fromUnsignedBigInt(tokenToReceiveWithInterest)
    )
  )
  liquidityWithdrawSuccessfullEvent.parameters.push(
    new ethereum.EventParam(
      "totalInterestEarned",
      ethereum.Value.fromUnsignedBigInt(totalInterestEarned)
    )
  )
  liquidityWithdrawSuccessfullEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  liquidityWithdrawSuccessfullEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return liquidityWithdrawSuccessfullEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokenAddressesSetEvent(
  param0: Array<Address>,
  param1: Address
): TokenAddressesSet {
  let tokenAddressesSetEvent = changetype<TokenAddressesSet>(newMockEvent())

  tokenAddressesSetEvent.parameters = new Array()

  tokenAddressesSetEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddressArray(param0))
  )
  tokenAddressesSetEvent.parameters.push(
    new ethereum.EventParam("param1", ethereum.Value.fromAddress(param1))
  )

  return tokenAddressesSetEvent
}

export function createTokenToEthSwapSuccessfullEvent(
  tokenSwapped: BigInt,
  tokenReceived: BigInt,
  transactionFee: BigInt,
  user: Address
): TokenToEthSwapSuccessfull {
  let tokenToEthSwapSuccessfullEvent = changetype<TokenToEthSwapSuccessfull>(
    newMockEvent()
  )

  tokenToEthSwapSuccessfullEvent.parameters = new Array()

  tokenToEthSwapSuccessfullEvent.parameters.push(
    new ethereum.EventParam(
      "tokenSwapped",
      ethereum.Value.fromUnsignedBigInt(tokenSwapped)
    )
  )
  tokenToEthSwapSuccessfullEvent.parameters.push(
    new ethereum.EventParam(
      "tokenReceived",
      ethereum.Value.fromSignedBigInt(tokenReceived)
    )
  )
  tokenToEthSwapSuccessfullEvent.parameters.push(
    new ethereum.EventParam(
      "transactionFee",
      ethereum.Value.fromSignedBigInt(transactionFee)
    )
  )
  tokenToEthSwapSuccessfullEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return tokenToEthSwapSuccessfullEvent
}

export function createTokensAddedEvent(
  param0: Array<Address>,
  param1: Address
): TokensAdded {
  let tokensAddedEvent = changetype<TokensAdded>(newMockEvent())

  tokensAddedEvent.parameters = new Array()

  tokensAddedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddressArray(param0))
  )
  tokensAddedEvent.parameters.push(
    new ethereum.EventParam("param1", ethereum.Value.fromAddress(param1))
  )

  return tokensAddedEvent
}

export function createTokensRemvodEvent(
  param0: Array<Address>,
  param1: Address
): TokensRemvod {
  let tokensRemvodEvent = changetype<TokensRemvod>(newMockEvent())

  tokensRemvodEvent.parameters = new Array()

  tokensRemvodEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddressArray(param0))
  )
  tokensRemvodEvent.parameters.push(
    new ethereum.EventParam("param1", ethereum.Value.fromAddress(param1))
  )

  return tokensRemvodEvent
}

export function createchainLinkPriceFeedAddedEvent(
  tokenAddresses: Array<Address>,
  contractAddresses: Array<Address>,
  owner: Address
): chainLinkPriceFeedAdded {
  let chainLinkPriceFeedAddedEvent = changetype<chainLinkPriceFeedAdded>(
    newMockEvent()
  )

  chainLinkPriceFeedAddedEvent.parameters = new Array()

  chainLinkPriceFeedAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddresses",
      ethereum.Value.fromAddressArray(tokenAddresses)
    )
  )
  chainLinkPriceFeedAddedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddresses",
      ethereum.Value.fromAddressArray(contractAddresses)
    )
  )
  chainLinkPriceFeedAddedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return chainLinkPriceFeedAddedEvent
}

export function createpoolCreatedEvent(
  poolId: BigInt,
  token: Address,
  amount: BigInt,
  owner: Address,
  timeStamp: BigInt,
  minLockPeriod: BigInt,
  active: boolean
): poolCreated {
  let poolCreatedEvent = changetype<poolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "minLockPeriod",
      ethereum.Value.fromUnsignedBigInt(minLockPeriod)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("active", ethereum.Value.fromBoolean(active))
  )

  return poolCreatedEvent
}

export function createtokenSwappedSuccessfullyEvent(
  tokenSwapped: BigInt,
  tokenReceived: BigInt,
  transactionFee: BigInt,
  user: Address
): tokenSwappedSuccessfully {
  let tokenSwappedSuccessfullyEvent = changetype<tokenSwappedSuccessfully>(
    newMockEvent()
  )

  tokenSwappedSuccessfullyEvent.parameters = new Array()

  tokenSwappedSuccessfullyEvent.parameters.push(
    new ethereum.EventParam(
      "tokenSwapped",
      ethereum.Value.fromUnsignedBigInt(tokenSwapped)
    )
  )
  tokenSwappedSuccessfullyEvent.parameters.push(
    new ethereum.EventParam(
      "tokenReceived",
      ethereum.Value.fromSignedBigInt(tokenReceived)
    )
  )
  tokenSwappedSuccessfullyEvent.parameters.push(
    new ethereum.EventParam(
      "transactionFee",
      ethereum.Value.fromSignedBigInt(transactionFee)
    )
  )
  tokenSwappedSuccessfullyEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return tokenSwappedSuccessfullyEvent
}
