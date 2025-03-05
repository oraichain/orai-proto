import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgEthereumTx, MsgUpdateParams, MsgSetMappingEvmAddress } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ethermint.evm.v1.MsgEthereumTx", MsgEthereumTx], ["/ethermint.evm.v1.MsgUpdateParams", MsgUpdateParams], ["/ethermint.evm.v1.MsgSetMappingEvmAddress", MsgSetMappingEvmAddress]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
        value: MsgEthereumTx.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    setMappingEvmAddress(value: MsgSetMappingEvmAddress) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgSetMappingEvmAddress",
        value: MsgSetMappingEvmAddress.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
        value
      };
    },
    setMappingEvmAddress(value: MsgSetMappingEvmAddress) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgSetMappingEvmAddress",
        value
      };
    }
  },
  fromPartial: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
        value: MsgEthereumTx.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    setMappingEvmAddress(value: MsgSetMappingEvmAddress) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgSetMappingEvmAddress",
        value: MsgSetMappingEvmAddress.fromPartial(value)
      };
    }
  }
};