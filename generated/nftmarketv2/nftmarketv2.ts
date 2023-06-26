// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminModified extends ethereum.Event {
  get params(): AdminModified__Params {
    return new AdminModified__Params(this);
  }
}

export class AdminModified__Params {
  _event: AdminModified;

  constructor(event: AdminModified) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class BenificiaryModified extends ethereum.Event {
  get params(): BenificiaryModified__Params {
    return new BenificiaryModified__Params(this);
  }
}

export class BenificiaryModified__Params {
  _event: BenificiaryModified;

  constructor(event: BenificiaryModified) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldReceiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newReceiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class ItemBought extends ethereum.Event {
  get params(): ItemBought__Params {
    return new ItemBought__Params(this);
  }
}

export class ItemBought__Params {
  _event: ItemBought;

  constructor(event: ItemBought) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class ItemCanceled extends ethereum.Event {
  get params(): ItemCanceled__Params {
    return new ItemCanceled__Params(this);
  }
}

export class ItemCanceled__Params {
  _event: ItemCanceled;

  constructor(event: ItemCanceled) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ItemListed extends ethereum.Event {
  get params(): ItemListed__Params {
    return new ItemListed__Params(this);
  }
}

export class ItemListed__Params {
  _event: ItemListed;

  constructor(event: ItemListed) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MarkeFeeModified extends ethereum.Event {
  get params(): MarkeFeeModified__Params {
    return new MarkeFeeModified__Params(this);
  }
}

export class MarkeFeeModified__Params {
  _event: MarkeFeeModified;

  constructor(event: MarkeFeeModified) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MarkeStatusModified extends ethereum.Event {
  get params(): MarkeStatusModified__Params {
    return new MarkeStatusModified__Params(this);
  }
}

export class MarkeStatusModified__Params {
  _event: MarkeStatusModified;

  constructor(event: MarkeStatusModified) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldStatus(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get newStatus(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class nftmarketv2__getListingByNFTResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get seller(): Address {
    return this[1].toAddress();
  }

  get available(): boolean {
    return this[2].toBoolean();
  }
}

export class nftmarketv2 extends ethereum.SmartContract {
  static bind(address: Address): nftmarketv2 {
    return new nftmarketv2("nftmarketv2", address);
  }

  getListingByNFT(
    nftAddress: Address,
    tokenId: BigInt
  ): nftmarketv2__getListingByNFTResultValue0Struct {
    let result = super.call(
      "getListingByNFT",
      "getListingByNFT(address,uint256):((uint256,address,bool))",
      [
        ethereum.Value.fromAddress(nftAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return changetype<nftmarketv2__getListingByNFTResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getListingByNFT(
    nftAddress: Address,
    tokenId: BigInt
  ): ethereum.CallResult<nftmarketv2__getListingByNFTResultValue0Struct> {
    let result = super.tryCall(
      "getListingByNFT",
      "getListingByNFT(address,uint256):((uint256,address,bool))",
      [
        ethereum.Value.fromAddress(nftAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<nftmarketv2__getListingByNFTResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get marketFeeReceiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get marketFeeNum(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get administrator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ModifyAdminCall extends ethereum.Call {
  get inputs(): ModifyAdminCall__Inputs {
    return new ModifyAdminCall__Inputs(this);
  }

  get outputs(): ModifyAdminCall__Outputs {
    return new ModifyAdminCall__Outputs(this);
  }
}

export class ModifyAdminCall__Inputs {
  _call: ModifyAdminCall;

  constructor(call: ModifyAdminCall) {
    this._call = call;
  }

  get ad(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ModifyAdminCall__Outputs {
  _call: ModifyAdminCall;

  constructor(call: ModifyAdminCall) {
    this._call = call;
  }
}

export class ModifyMarketStatusCall extends ethereum.Call {
  get inputs(): ModifyMarketStatusCall__Inputs {
    return new ModifyMarketStatusCall__Inputs(this);
  }

  get outputs(): ModifyMarketStatusCall__Outputs {
    return new ModifyMarketStatusCall__Outputs(this);
  }
}

export class ModifyMarketStatusCall__Inputs {
  _call: ModifyMarketStatusCall;

  constructor(call: ModifyMarketStatusCall) {
    this._call = call;
  }

  get status(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class ModifyMarketStatusCall__Outputs {
  _call: ModifyMarketStatusCall;

  constructor(call: ModifyMarketStatusCall) {
    this._call = call;
  }
}

export class ModifyMarketFeeCall extends ethereum.Call {
  get inputs(): ModifyMarketFeeCall__Inputs {
    return new ModifyMarketFeeCall__Inputs(this);
  }

  get outputs(): ModifyMarketFeeCall__Outputs {
    return new ModifyMarketFeeCall__Outputs(this);
  }
}

export class ModifyMarketFeeCall__Inputs {
  _call: ModifyMarketFeeCall;

  constructor(call: ModifyMarketFeeCall) {
    this._call = call;
  }

  get feeNum(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ModifyMarketFeeCall__Outputs {
  _call: ModifyMarketFeeCall;

  constructor(call: ModifyMarketFeeCall) {
    this._call = call;
  }
}

export class ModifyBeneficiaryCall extends ethereum.Call {
  get inputs(): ModifyBeneficiaryCall__Inputs {
    return new ModifyBeneficiaryCall__Inputs(this);
  }

  get outputs(): ModifyBeneficiaryCall__Outputs {
    return new ModifyBeneficiaryCall__Outputs(this);
  }
}

export class ModifyBeneficiaryCall__Inputs {
  _call: ModifyBeneficiaryCall;

  constructor(call: ModifyBeneficiaryCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ModifyBeneficiaryCall__Outputs {
  _call: ModifyBeneficiaryCall;

  constructor(call: ModifyBeneficiaryCall) {
    this._call = call;
  }
}

export class ListItemCall extends ethereum.Call {
  get inputs(): ListItemCall__Inputs {
    return new ListItemCall__Inputs(this);
  }

  get outputs(): ListItemCall__Outputs {
    return new ListItemCall__Outputs(this);
  }
}

export class ListItemCall__Inputs {
  _call: ListItemCall;

  constructor(call: ListItemCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get seller(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ListItemCall__Outputs {
  _call: ListItemCall;

  constructor(call: ListItemCall) {
    this._call = call;
  }
}

export class CancelListingCall extends ethereum.Call {
  get inputs(): CancelListingCall__Inputs {
    return new CancelListingCall__Inputs(this);
  }

  get outputs(): CancelListingCall__Outputs {
    return new CancelListingCall__Outputs(this);
  }
}

export class CancelListingCall__Inputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelListingCall__Outputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }
}

export class BuyItemCall extends ethereum.Call {
  get inputs(): BuyItemCall__Inputs {
    return new BuyItemCall__Inputs(this);
  }

  get outputs(): BuyItemCall__Outputs {
    return new BuyItemCall__Outputs(this);
  }
}

export class BuyItemCall__Inputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyItemCall__Outputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }
}

export class UpdateListingCall extends ethereum.Call {
  get inputs(): UpdateListingCall__Inputs {
    return new UpdateListingCall__Inputs(this);
  }

  get outputs(): UpdateListingCall__Outputs {
    return new UpdateListingCall__Outputs(this);
  }
}

export class UpdateListingCall__Inputs {
  _call: UpdateListingCall;

  constructor(call: UpdateListingCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateListingCall__Outputs {
  _call: UpdateListingCall;

  constructor(call: UpdateListingCall) {
    this._call = call;
  }
}
