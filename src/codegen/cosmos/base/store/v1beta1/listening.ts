import { ResponseCommit, ResponseCommitAmino, ResponseCommitSDKType } from "../../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
  /** the store key for the KVStore this pair originates from */
  storeKey: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
export interface StoreKVPairProtoMsg {
  typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair";
  value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairAmino {
  /** the store key for the KVStore this pair originates from */
  store_key?: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete?: boolean;
  key?: string;
  value?: string;
}
export interface StoreKVPairAminoMsg {
  type: "cosmos-sdk/StoreKVPair";
  value: StoreKVPairAmino;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
  store_key: string;
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
  deliverTxs: BlockMetadata_DeliverTx[];
  responseCommit?: ResponseCommit;
}
export interface BlockMetadataProtoMsg {
  typeUrl: "/cosmos.base.store.v1beta1.BlockMetadata";
  value: Uint8Array;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataAmino {
  deliver_txs?: BlockMetadata_DeliverTxAmino[];
  response_commit?: ResponseCommitAmino;
}
export interface BlockMetadataAminoMsg {
  type: "cosmos-sdk/BlockMetadata";
  value: BlockMetadataAmino;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadataSDKType {
  deliver_txs: BlockMetadata_DeliverTxSDKType[];
  response_commit?: ResponseCommitSDKType;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTx {}
export interface BlockMetadata_DeliverTxProtoMsg {
  typeUrl: "/cosmos.base.store.v1beta1.DeliverTx";
  value: Uint8Array;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTxAmino {}
export interface BlockMetadata_DeliverTxAminoMsg {
  type: "cosmos-sdk/DeliverTx";
  value: BlockMetadata_DeliverTxAmino;
}
/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTxSDKType {}
function createBaseStoreKVPair(): StoreKVPair {
  return {
    storeKey: "",
    delete: false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const StoreKVPair = {
  typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
  encode(message: StoreKVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.delete = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.storeKey = object.storeKey ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StoreKVPairAmino): StoreKVPair {
    const message = createBaseStoreKVPair();
    if (object.store_key !== undefined && object.store_key !== null) {
      message.storeKey = object.store_key;
    }
    if (object.delete !== undefined && object.delete !== null) {
      message.delete = object.delete;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: StoreKVPair): StoreKVPairAmino {
    const obj: any = {};
    obj.store_key = message.storeKey === "" ? undefined : message.storeKey;
    obj.delete = message.delete === false ? undefined : message.delete;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: StoreKVPairAminoMsg): StoreKVPair {
    return StoreKVPair.fromAmino(object.value);
  },
  toAminoMsg(message: StoreKVPair): StoreKVPairAminoMsg {
    return {
      type: "cosmos-sdk/StoreKVPair",
      value: StoreKVPair.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreKVPairProtoMsg): StoreKVPair {
    return StoreKVPair.decode(message.value);
  },
  toProto(message: StoreKVPair): Uint8Array {
    return StoreKVPair.encode(message).finish();
  },
  toProtoMsg(message: StoreKVPair): StoreKVPairProtoMsg {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
      value: StoreKVPair.encode(message).finish()
    };
  }
};
function createBaseBlockMetadata(): BlockMetadata {
  return {
    deliverTxs: [],
    responseCommit: undefined
  };
}
export const BlockMetadata = {
  typeUrl: "/cosmos.base.store.v1beta1.BlockMetadata",
  encode(message: BlockMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deliverTxs) {
      BlockMetadata_DeliverTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.responseCommit !== undefined) {
      ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.deliverTxs.push(BlockMetadata_DeliverTx.decode(reader, reader.uint32()));
          break;
        case 6:
          message.responseCommit = ResponseCommit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlockMetadata>): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.deliverTxs = object.deliverTxs?.map(e => BlockMetadata_DeliverTx.fromPartial(e)) || [];
    message.responseCommit = object.responseCommit !== undefined && object.responseCommit !== null ? ResponseCommit.fromPartial(object.responseCommit) : undefined;
    return message;
  },
  fromAmino(object: BlockMetadataAmino): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.deliverTxs = object.deliver_txs?.map(e => BlockMetadata_DeliverTx.fromAmino(e)) || [];
    if (object.response_commit !== undefined && object.response_commit !== null) {
      message.responseCommit = ResponseCommit.fromAmino(object.response_commit);
    }
    return message;
  },
  toAmino(message: BlockMetadata): BlockMetadataAmino {
    const obj: any = {};
    if (message.deliverTxs) {
      obj.deliver_txs = message.deliverTxs.map(e => e ? BlockMetadata_DeliverTx.toAmino(e) : undefined);
    } else {
      obj.deliver_txs = message.deliverTxs;
    }
    obj.response_commit = message.responseCommit ? ResponseCommit.toAmino(message.responseCommit) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockMetadataAminoMsg): BlockMetadata {
    return BlockMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: BlockMetadata): BlockMetadataAminoMsg {
    return {
      type: "cosmos-sdk/BlockMetadata",
      value: BlockMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: BlockMetadataProtoMsg): BlockMetadata {
    return BlockMetadata.decode(message.value);
  },
  toProto(message: BlockMetadata): Uint8Array {
    return BlockMetadata.encode(message).finish();
  },
  toProtoMsg(message: BlockMetadata): BlockMetadataProtoMsg {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.BlockMetadata",
      value: BlockMetadata.encode(message).finish()
    };
  }
};
function createBaseBlockMetadata_DeliverTx(): BlockMetadata_DeliverTx {
  return {};
}
export const BlockMetadata_DeliverTx = {
  typeUrl: "/cosmos.base.store.v1beta1.DeliverTx",
  encode(_: BlockMetadata_DeliverTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockMetadata_DeliverTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata_DeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<BlockMetadata_DeliverTx>): BlockMetadata_DeliverTx {
    const message = createBaseBlockMetadata_DeliverTx();
    return message;
  },
  fromAmino(_: BlockMetadata_DeliverTxAmino): BlockMetadata_DeliverTx {
    const message = createBaseBlockMetadata_DeliverTx();
    return message;
  },
  toAmino(_: BlockMetadata_DeliverTx): BlockMetadata_DeliverTxAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: BlockMetadata_DeliverTxAminoMsg): BlockMetadata_DeliverTx {
    return BlockMetadata_DeliverTx.fromAmino(object.value);
  },
  toAminoMsg(message: BlockMetadata_DeliverTx): BlockMetadata_DeliverTxAminoMsg {
    return {
      type: "cosmos-sdk/DeliverTx",
      value: BlockMetadata_DeliverTx.toAmino(message)
    };
  },
  fromProtoMsg(message: BlockMetadata_DeliverTxProtoMsg): BlockMetadata_DeliverTx {
    return BlockMetadata_DeliverTx.decode(message.value);
  },
  toProto(message: BlockMetadata_DeliverTx): Uint8Array {
    return BlockMetadata_DeliverTx.encode(message).finish();
  },
  toProtoMsg(message: BlockMetadata_DeliverTx): BlockMetadata_DeliverTxProtoMsg {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.DeliverTx",
      value: BlockMetadata_DeliverTx.encode(message).finish()
    };
  }
};