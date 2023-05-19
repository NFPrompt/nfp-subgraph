import { NFTCreated as NFTCreatedEvent } from "../generated/nft721/nft721"
import { NFPEvent } from "../generated/schema"

export function handleNFTCreated(event: NFTCreatedEvent): void {
  let entity = new NFPEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.type = "nft_created"
  entity.source = event.params.minter
  entity.tokenId = event.params.tokenId
  entity.db_id = event.params.db_id
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
