import {
  ItemBought as ItemBoughtEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent
} from "../generated/nftmarketv2/nftmarketv2"
import { NFPEvent } from "../generated/schema"

export function handleItemBought(event: ItemBoughtEvent): void {
  let entity = new NFPEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.type = "item_bought"
  entity.source = event.params.buyer
  entity.destination = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemCanceled(event: ItemCanceledEvent): void {
  let entity = new NFPEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.type = "item_cancelled"
  entity.source = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemListed(event: ItemListedEvent): void {
  let entity = new NFPEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.type = "item_listed"
  entity.source = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
