import { MsgEthereumTx, MsgUpdateParams, MsgSetMappingEvmAddress } from "./tx";
export const AminoConverter = {
  "/ethermint.evm.v1.MsgEthereumTx": {
    aminoType: "ethermint/MsgEthereumTx",
    toAmino: MsgEthereumTx.toAmino,
    fromAmino: MsgEthereumTx.fromAmino
  },
  "/ethermint.evm.v1.MsgUpdateParams": {
    aminoType: "ethermint/x/evm/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/ethermint.evm.v1.MsgSetMappingEvmAddress": {
    aminoType: "/ethermint.evm.v1.MsgSetMappingEvmAddress",
    toAmino: MsgSetMappingEvmAddress.toAmino,
    fromAmino: MsgSetMappingEvmAddress.fromAmino
  }
};