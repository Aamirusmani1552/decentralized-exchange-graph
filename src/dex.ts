import { BigInt } from "@graphprotocol/graph-ts";
import {
  EthToTokenSwapSuccessfull,
  LiquidityWithdrawSuccessfull,
  TokenToEthSwapSuccessfull,
  poolCreated,
  tokenSwappedSuccessfully,
} from "../generated/DEX/DEX";

import {
  EthToTokenSwapSuccessfullEntity,
  LiquidityWithdrawSuccessfullEntity,
  TokenToEthSwapSuccessfullEntity,
  poolCreatedEntity,
  tokenSwappedSuccessfullyEntity,
  allTransaction,
} from "../generated/schema";

export function handleEthToTokenSwapSuccessfull(
  event: EthToTokenSwapSuccessfull
): void {
  let EthToToken = new EthToTokenSwapSuccessfullEntity(
    event.transaction.hash.toHex()
  );

  let allTx = new allTransaction(event.transaction.hash.toHex());

  EthToToken.ethSwapped = event.params.ethSwapped;
  EthToToken.tokenReceived = event.params.tokenReceived;
  EthToToken.transactionFee = event.params.transactionFee;
  EthToToken.user = event.params.user;

  allTx.tokenSwapped = event.params.ethSwapped;
  allTx.tokenReceived = event.params.tokenReceived;
  allTx.transactionFee = event.params.transactionFee;
  allTx.user = event.params.user;

  allTx.save();
  EthToToken.save();
}

export function handleLiquidityWithdrawSuccessfull(
  event: LiquidityWithdrawSuccessfull
): void {
  let poolWithdrew = poolCreatedEntity.load(event.params.poolId.toString());
  let removedPool = LiquidityWithdrawSuccessfullEntity.load(
    event.params.poolId.toString()
  );

  if (!removedPool) {
    removedPool = new LiquidityWithdrawSuccessfullEntity(
      event.params.poolId.toString()
    );
  }

  if (!poolWithdrew) {
    poolWithdrew = new poolCreatedEntity(event.params.poolId.toString());
  }

  poolWithdrew.active = false;

  removedPool.poolId = event.params.poolId;
  removedPool.token = event.params.token;
  removedPool.user = event.params.user;
  removedPool.totalInterestEarned = event.params.totalInterestEarned;
  removedPool.tokenToRecieve = event.params.tokenToRecieve;
  removedPool.tokenToReceiveWithInterest =
    event.params.tokenToReceiveWithInterest;

  removedPool.save();
  poolWithdrew.save();
}

export function handleTokenToEthSwapSuccessfull(
  event: TokenToEthSwapSuccessfull
): void {
  let tokenToEth = new TokenToEthSwapSuccessfullEntity(
    event.transaction.hash.toHex()
  );

  tokenToEth.tokenSwapped = event.params.tokenSwapped;
  tokenToEth.tokenReceived = event.params.tokenReceived;
  tokenToEth.transactionFee = event.params.transactionFee;
  tokenToEth.user = event.params.user;

  let allTx = new allTransaction(event.transaction.hash.toHex());
  allTx.tokenSwapped = event.params.tokenSwapped;
  allTx.tokenReceived = event.params.tokenReceived;
  allTx.transactionFee = event.params.transactionFee;
  allTx.user = event.params.user;

  allTx.save();
  tokenToEth.save();
}

export function handlepoolCreated(event: poolCreated): void {
  let pool = new poolCreatedEntity(event.params.poolId.toString());

  pool.id = event.transaction.hash.toHex();
  pool.active = event.params.active;
  pool.amount = event.params.amount;
  pool.poolId = event.params.poolId;
  pool.owner = event.params.owner;
  pool.token = event.params.token;
  pool.timestamp = event.params.timeStamp;
  pool.minLockPeriod = event.params.minLockPeriod;

  pool.save();
}

export function handletokenSwappedSuccessfully(
  event: tokenSwappedSuccessfully
): void {
  let tokenToToken = new tokenSwappedSuccessfullyEntity(
    event.transaction.hash.toHex()
  );

  tokenToToken.tokenSwapped = event.params.tokenSwapped;
  tokenToToken.tokenReceived = event.params.tokenReceived;
  tokenToToken.transactionFee = event.params.transactionFee;
  tokenToToken.user = event.params.user;

  let allTx = new allTransaction(event.transaction.hash.toHex());
  allTx.tokenSwapped = event.params.tokenReceived;
  allTx.tokenReceived = event.params.tokenReceived;
  allTx.transactionFee = event.params.transactionFee;
  allTx.user = event.params.user;

  allTx.save();
  tokenToToken.save();
}
