import { BigInt } from "@graphprotocol/graph-ts"
import { Hit as HitEvent } from "../generated/checkin/checkin"
import { NFPEvent } from "../generated/schema"

export function handleHit(event: HitEvent): void {
  let entity = new NFPEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.type = "checkin"
  entity.source = event.params.addr
  entity.tokenId = BigInt.zero()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
