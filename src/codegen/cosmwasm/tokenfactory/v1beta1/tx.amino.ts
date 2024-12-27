//@ts-nocheck
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgForceTransfer } from "./tx";
export const AminoConverter = {
  "/cosmwasm.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "wasm/MsgCreateDenom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/cosmwasm.tokenfactory.v1beta1.MsgMint": {
    aminoType: "wasm/MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/cosmwasm.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "wasm/MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/cosmwasm.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "wasm/MsgChangeAdmin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/cosmwasm.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "wasm/MsgSetDenomMetadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  },
  "/cosmwasm.tokenfactory.v1beta1.MsgForceTransfer": {
    aminoType: "wasm/MsgForceTransfer",
    toAmino: MsgForceTransfer.toAmino,
    fromAmino: MsgForceTransfer.fromAmino
  }
};