import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionSDKType, TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "./gov";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../distribution/v1beta1/distribution";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg, ParameterChangeProposalSDKType } from "../../params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../upgrade/v1beta1/upgrade";
import { StoreCodeProposal as StoreCodeProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreCodeProposalProtoMsg as StoreCodeProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreCodeProposalSDKType as StoreCodeProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContractProposal as InstantiateContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContractProposalProtoMsg as InstantiateContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContractProposalSDKType as InstantiateContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContract2Proposal as InstantiateContract2Proposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContract2ProposalProtoMsg as InstantiateContract2Proposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContract2ProposalSDKType as InstantiateContract2Proposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { MigrateContractProposal as MigrateContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { MigrateContractProposalProtoMsg as MigrateContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { MigrateContractProposalSDKType as MigrateContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { SudoContractProposal as SudoContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { SudoContractProposalProtoMsg as SudoContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { SudoContractProposalSDKType as SudoContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ExecuteContractProposal as ExecuteContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ExecuteContractProposalProtoMsg as ExecuteContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ExecuteContractProposalSDKType as ExecuteContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateAdminProposal as UpdateAdminProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateAdminProposalProtoMsg as UpdateAdminProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateAdminProposalSDKType as UpdateAdminProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ClearAdminProposal as ClearAdminProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ClearAdminProposalProtoMsg as ClearAdminProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ClearAdminProposalSDKType as ClearAdminProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { PinCodesProposal as PinCodesProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { PinCodesProposalProtoMsg as PinCodesProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { PinCodesProposalSDKType as PinCodesProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UnpinCodesProposal as UnpinCodesProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UnpinCodesProposalProtoMsg as UnpinCodesProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UnpinCodesProposalSDKType as UnpinCodesProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { SetGasLessContractsProposal as SetGasLessContractsProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { SetGasLessContractsProposalProtoMsg as SetGasLessContractsProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { SetGasLessContractsProposalSDKType as SetGasLessContractsProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UnsetGasLessContractsProposal as UnsetGasLessContractsProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UnsetGasLessContractsProposalProtoMsg as UnsetGasLessContractsProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UnsetGasLessContractsProposalSDKType as UnsetGasLessContractsProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateInstantiateConfigProposal as UpdateInstantiateConfigProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateInstantiateConfigProposalProtoMsg as UpdateInstantiateConfigProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateInstantiateConfigProposalSDKType as UpdateInstantiateConfigProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreAndInstantiateContractProposal as StoreAndInstantiateContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreAndInstantiateContractProposalProtoMsg as StoreAndInstantiateContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreAndInstantiateContractProposalSDKType as StoreAndInstantiateContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreCodeProposal as StoreCodeProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreCodeProposalProtoMsg as StoreCodeProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreCodeProposalSDKType as StoreCodeProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContractProposal as InstantiateContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContractProposalProtoMsg as InstantiateContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContractProposalSDKType as InstantiateContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContract2Proposal as InstantiateContract2Proposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContract2ProposalProtoMsg as InstantiateContract2Proposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContract2ProposalSDKType as InstantiateContract2Proposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { MigrateContractProposal as MigrateContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { MigrateContractProposalProtoMsg as MigrateContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { MigrateContractProposalSDKType as MigrateContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { SudoContractProposal as SudoContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { SudoContractProposalProtoMsg as SudoContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { SudoContractProposalSDKType as SudoContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { ExecuteContractProposal as ExecuteContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { ExecuteContractProposalProtoMsg as ExecuteContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { ExecuteContractProposalSDKType as ExecuteContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateAdminProposal as UpdateAdminProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateAdminProposalProtoMsg as UpdateAdminProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateAdminProposalSDKType as UpdateAdminProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { ClearAdminProposal as ClearAdminProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { ClearAdminProposalProtoMsg as ClearAdminProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { ClearAdminProposalSDKType as ClearAdminProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { PinCodesProposal as PinCodesProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { PinCodesProposalProtoMsg as PinCodesProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { PinCodesProposalSDKType as PinCodesProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { UnpinCodesProposal as UnpinCodesProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { UnpinCodesProposalProtoMsg as UnpinCodesProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { UnpinCodesProposalSDKType as UnpinCodesProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { SetGasLessContractsProposal as SetGasLessContractsProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { SetGasLessContractsProposalProtoMsg as SetGasLessContractsProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { SetGasLessContractsProposalSDKType as SetGasLessContractsProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { UnsetGasLessContractsProposal as UnsetGasLessContractsProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { UnsetGasLessContractsProposalProtoMsg as UnsetGasLessContractsProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { UnsetGasLessContractsProposalSDKType as UnsetGasLessContractsProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateInstantiateConfigProposal as UpdateInstantiateConfigProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateInstantiateConfigProposalProtoMsg as UpdateInstantiateConfigProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateInstantiateConfigProposalSDKType as UpdateInstantiateConfigProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreAndInstantiateContractProposal as StoreAndInstantiateContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreAndInstantiateContractProposalProtoMsg as StoreAndInstantiateContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreAndInstantiateContractProposalSDKType as StoreAndInstantiateContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreCodeProposal as StoreCodeProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { StoreCodeProposalProtoMsg as StoreCodeProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { StoreCodeProposalSDKType as StoreCodeProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { InstantiateContractProposal as InstantiateContractProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { InstantiateContractProposalProtoMsg as InstantiateContractProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { InstantiateContractProposalSDKType as InstantiateContractProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { InstantiateContract2Proposal as InstantiateContract2Proposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { InstantiateContract2ProposalProtoMsg as InstantiateContract2Proposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { InstantiateContract2ProposalSDKType as InstantiateContract2Proposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { MigrateContractProposal as MigrateContractProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { MigrateContractProposalProtoMsg as MigrateContractProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { MigrateContractProposalSDKType as MigrateContractProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { SudoContractProposal as SudoContractProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { SudoContractProposalProtoMsg as SudoContractProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { SudoContractProposalSDKType as SudoContractProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { ExecuteContractProposal as ExecuteContractProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { ExecuteContractProposalProtoMsg as ExecuteContractProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { ExecuteContractProposalSDKType as ExecuteContractProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { UpdateAdminProposal as UpdateAdminProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { UpdateAdminProposalProtoMsg as UpdateAdminProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { UpdateAdminProposalSDKType as UpdateAdminProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { ClearAdminProposal as ClearAdminProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { ClearAdminProposalProtoMsg as ClearAdminProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { ClearAdminProposalSDKType as ClearAdminProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { PinCodesProposal as PinCodesProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { PinCodesProposalProtoMsg as PinCodesProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { PinCodesProposalSDKType as PinCodesProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { UnpinCodesProposal as UnpinCodesProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { UnpinCodesProposalProtoMsg as UnpinCodesProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { UnpinCodesProposalSDKType as UnpinCodesProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { UpdateInstantiateConfigProposal as UpdateInstantiateConfigProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { UpdateInstantiateConfigProposalProtoMsg as UpdateInstantiateConfigProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { UpdateInstantiateConfigProposalSDKType as UpdateInstantiateConfigProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { StoreAndInstantiateContractProposal as StoreAndInstantiateContractProposal3 } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { StoreAndInstantiateContractProposalProtoMsg as StoreAndInstantiateContractProposal3ProtoMsg } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { StoreAndInstantiateContractProposalSDKType as StoreAndInstantiateContractProposal3SDKType } from "../../../cosmwasm/wasm/v1beta1/proposal_legacy_v1beta1";
import { ClientUpdateProposal, ClientUpdateProposalProtoMsg, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalProtoMsg, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
  /** content is the proposal's content. */
  content?: CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & TextProposal & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & StoreCodeProposal1 & InstantiateContractProposal1 & InstantiateContract2Proposal1 & MigrateContractProposal1 & SudoContractProposal1 & ExecuteContractProposal1 & UpdateAdminProposal1 & ClearAdminProposal1 & PinCodesProposal1 & UnpinCodesProposal1 & SetGasLessContractsProposal1 & UnsetGasLessContractsProposal1 & UpdateInstantiateConfigProposal1 & StoreAndInstantiateContractProposal1 & StoreCodeProposal2 & InstantiateContractProposal2 & InstantiateContract2Proposal2 & MigrateContractProposal2 & SudoContractProposal2 & ExecuteContractProposal2 & UpdateAdminProposal2 & ClearAdminProposal2 & PinCodesProposal2 & UnpinCodesProposal2 & SetGasLessContractsProposal2 & UnsetGasLessContractsProposal2 & UpdateInstantiateConfigProposal2 & StoreAndInstantiateContractProposal2 & StoreCodeProposal3 & InstantiateContractProposal3 & InstantiateContract2Proposal3 & MigrateContractProposal3 & SudoContractProposal3 & ExecuteContractProposal3 & UpdateAdminProposal3 & ClearAdminProposal3 & PinCodesProposal3 & UnpinCodesProposal3 & UpdateInstantiateConfigProposal3 & StoreAndInstantiateContractProposal3 & ClientUpdateProposal & UpgradeProposal & Any | undefined;
  /** initial_deposit is the deposit value that must be paid at proposal submission. */
  initialDeposit: Coin[];
  /** proposer is the account address of the proposer. */
  proposer: string;
}
export interface MsgSubmitProposalProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal";
  value: Uint8Array;
}
export type MsgSubmitProposalEncoded = Omit<MsgSubmitProposal, "content"> & {
  /** content is the proposal's content. */content?: CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | TextProposalProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | StoreCodeProposal1ProtoMsg | InstantiateContractProposal1ProtoMsg | InstantiateContract2Proposal1ProtoMsg | MigrateContractProposal1ProtoMsg | SudoContractProposal1ProtoMsg | ExecuteContractProposal1ProtoMsg | UpdateAdminProposal1ProtoMsg | ClearAdminProposal1ProtoMsg | PinCodesProposal1ProtoMsg | UnpinCodesProposal1ProtoMsg | SetGasLessContractsProposal1ProtoMsg | UnsetGasLessContractsProposal1ProtoMsg | UpdateInstantiateConfigProposal1ProtoMsg | StoreAndInstantiateContractProposal1ProtoMsg | StoreCodeProposal2ProtoMsg | InstantiateContractProposal2ProtoMsg | InstantiateContract2Proposal2ProtoMsg | MigrateContractProposal2ProtoMsg | SudoContractProposal2ProtoMsg | ExecuteContractProposal2ProtoMsg | UpdateAdminProposal2ProtoMsg | ClearAdminProposal2ProtoMsg | PinCodesProposal2ProtoMsg | UnpinCodesProposal2ProtoMsg | SetGasLessContractsProposal2ProtoMsg | UnsetGasLessContractsProposal2ProtoMsg | UpdateInstantiateConfigProposal2ProtoMsg | StoreAndInstantiateContractProposal2ProtoMsg | StoreCodeProposal3ProtoMsg | InstantiateContractProposal3ProtoMsg | InstantiateContract2Proposal3ProtoMsg | MigrateContractProposal3ProtoMsg | SudoContractProposal3ProtoMsg | ExecuteContractProposal3ProtoMsg | UpdateAdminProposal3ProtoMsg | ClearAdminProposal3ProtoMsg | PinCodesProposal3ProtoMsg | UnpinCodesProposal3ProtoMsg | UpdateInstantiateConfigProposal3ProtoMsg | StoreAndInstantiateContractProposal3ProtoMsg | ClientUpdateProposalProtoMsg | UpgradeProposalProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalAmino {
  /** content is the proposal's content. */
  content?: AnyAmino;
  /** initial_deposit is the deposit value that must be paid at proposal submission. */
  initial_deposit: CoinAmino[];
  /** proposer is the account address of the proposer. */
  proposer?: string;
}
export interface MsgSubmitProposalAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalSDKType {
  content?: CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | TextProposalSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | StoreCodeProposal1SDKType | InstantiateContractProposal1SDKType | InstantiateContract2Proposal1SDKType | MigrateContractProposal1SDKType | SudoContractProposal1SDKType | ExecuteContractProposal1SDKType | UpdateAdminProposal1SDKType | ClearAdminProposal1SDKType | PinCodesProposal1SDKType | UnpinCodesProposal1SDKType | SetGasLessContractsProposal1SDKType | UnsetGasLessContractsProposal1SDKType | UpdateInstantiateConfigProposal1SDKType | StoreAndInstantiateContractProposal1SDKType | StoreCodeProposal2SDKType | InstantiateContractProposal2SDKType | InstantiateContract2Proposal2SDKType | MigrateContractProposal2SDKType | SudoContractProposal2SDKType | ExecuteContractProposal2SDKType | UpdateAdminProposal2SDKType | ClearAdminProposal2SDKType | PinCodesProposal2SDKType | UnpinCodesProposal2SDKType | SetGasLessContractsProposal2SDKType | UnsetGasLessContractsProposal2SDKType | UpdateInstantiateConfigProposal2SDKType | StoreAndInstantiateContractProposal2SDKType | StoreCodeProposal3SDKType | InstantiateContractProposal3SDKType | InstantiateContract2Proposal3SDKType | MigrateContractProposal3SDKType | SudoContractProposal3SDKType | ExecuteContractProposal3SDKType | UpdateAdminProposal3SDKType | ClearAdminProposal3SDKType | PinCodesProposal3SDKType | UnpinCodesProposal3SDKType | UpdateInstantiateConfigProposal3SDKType | StoreAndInstantiateContractProposal3SDKType | ClientUpdateProposalSDKType | UpgradeProposalSDKType | AnySDKType | undefined;
  initial_deposit: CoinSDKType[];
  proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse";
  value: Uint8Array;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
  proposal_id: bigint;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** option defines the vote option. */
  option: VoteOption;
}
export interface MsgVoteProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote";
  value: Uint8Array;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
  /** voter is the voter address for the proposal. */
  voter?: string;
  /** option defines the vote option. */
  option?: VoteOption;
}
export interface MsgVoteAminoMsg {
  type: "cosmos-sdk/MsgVote";
  value: MsgVoteAmino;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteSDKType {
  proposal_id: bigint;
  voter: string;
  option: VoteOption;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse";
  value: Uint8Array;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeighted {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** options defines the weighted vote options. */
  options: WeightedVoteOption[];
}
export interface MsgVoteWeightedProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted";
  value: Uint8Array;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** voter is the voter address for the proposal. */
  voter?: string;
  /** options defines the weighted vote options. */
  options: WeightedVoteOptionAmino[];
}
export interface MsgVoteWeightedAminoMsg {
  type: "cosmos-sdk/MsgVoteWeighted";
  value: MsgVoteWeightedAmino;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedSDKType {
  proposal_id: bigint;
  voter: string;
  options: WeightedVoteOptionSDKType[];
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponse {}
export interface MsgVoteWeightedResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse";
  value: Uint8Array;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseAmino {}
export interface MsgVoteWeightedResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteWeightedResponse";
  value: MsgVoteWeightedResponseAmino;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseSDKType {}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
export interface MsgDepositProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit";
  value: Uint8Array;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor?: string;
  /** amount to be deposited by depositor. */
  amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
  type: "cosmos-sdk/MsgDeposit";
  value: MsgDepositAmino;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositSDKType {
  proposal_id: bigint;
  depositor: string;
  amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse";
  value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "cosmos-sdk/MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    content: undefined,
    initialDeposit: [],
    proposer: ""
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      Any.encode(message.content as Any, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Cosmos_govv1beta1Content_InterfaceDecoder(reader) as Any;
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    if (object.content !== undefined && object.content !== null) {
      message.content = Cosmos_govv1beta1Content_FromAmino(object.content);
    }
    message.initialDeposit = object.initial_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    return message;
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino(message.content as Any) : undefined;
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_deposit = message.initialDeposit;
    }
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0)
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0
  };
}
export const MsgVote = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote",
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    return message;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    const message = createBaseMsgVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    return message;
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.option = message.option === 0 ? undefined : message.option;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "cosmos-sdk/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
  fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeighted(): MsgVoteWeighted {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: []
  };
}
export const MsgVoteWeighted = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
  encode(message: MsgVoteWeighted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    message.options = object.options?.map(e => WeightedVoteOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.voter = message.voter === "" ? undefined : message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedAminoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteWeighted): MsgVoteWeightedAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteWeighted",
      value: MsgVoteWeighted.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteWeightedProtoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.decode(message.value);
  },
  toProto(message: MsgVoteWeighted): Uint8Array {
    return MsgVoteWeighted.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeighted): MsgVoteWeightedProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
  return {};
}
export const MsgVoteWeightedResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
  encode(_: MsgVoteWeightedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeightedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();
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
  fromPartial(_: Partial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedResponseAminoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteWeightedResponseProtoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.decode(message.value);
  },
  toProto(message: MsgVoteWeightedResponse): Uint8Array {
    return MsgVoteWeightedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
export const MsgDeposit = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeposit): MsgDepositAminoMsg {
    return {
      type: "cosmos-sdk/MsgDeposit",
      value: MsgDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositResponse): MsgDepositResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDepositResponse",
      value: MsgDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
export const Cosmos_govv1beta1Content_InterfaceDecoder = (input: BinaryReader | Uint8Array): CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | StoreCodeProposal1 | InstantiateContractProposal1 | InstantiateContract2Proposal1 | MigrateContractProposal1 | SudoContractProposal1 | ExecuteContractProposal1 | UpdateAdminProposal1 | ClearAdminProposal1 | PinCodesProposal1 | UnpinCodesProposal1 | SetGasLessContractsProposal1 | UnsetGasLessContractsProposal1 | UpdateInstantiateConfigProposal1 | StoreAndInstantiateContractProposal1 | StoreCodeProposal2 | InstantiateContractProposal2 | InstantiateContract2Proposal2 | MigrateContractProposal2 | SudoContractProposal2 | ExecuteContractProposal2 | UpdateAdminProposal2 | ClearAdminProposal2 | PinCodesProposal2 | UnpinCodesProposal2 | SetGasLessContractsProposal2 | UnsetGasLessContractsProposal2 | UpdateInstantiateConfigProposal2 | StoreAndInstantiateContractProposal2 | StoreCodeProposal3 | InstantiateContractProposal3 | InstantiateContract2Proposal3 | MigrateContractProposal3 | SudoContractProposal3 | ExecuteContractProposal3 | UpdateAdminProposal3 | ClearAdminProposal3 | PinCodesProposal3 | UnpinCodesProposal3 | UpdateInstantiateConfigProposal3 | StoreAndInstantiateContractProposal3 | ClientUpdateProposal | UpgradeProposal | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return CommunityPoolSpendProposal.decode(data.value);
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return CommunityPoolSpendProposalWithDeposit.decode(data.value);
    case "/cosmos.gov.v1beta1.TextProposal":
      return TextProposal.decode(data.value);
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return ParameterChangeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return SoftwareUpgradeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return CancelSoftwareUpgradeProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return StoreCodeProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return InstantiateContractProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return InstantiateContract2Proposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return MigrateContractProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return SudoContractProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return ExecuteContractProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return UpdateAdminProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return ClearAdminProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return PinCodesProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return UnpinCodesProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.SetGasLessContractsProposal":
      return SetGasLessContractsProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.UnsetGasLessContractsProposal":
      return UnsetGasLessContractsProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return UpdateInstantiateConfigProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return StoreAndInstantiateContractProposal1.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return StoreCodeProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return InstantiateContractProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return InstantiateContract2Proposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return MigrateContractProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return SudoContractProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return ExecuteContractProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return UpdateAdminProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return ClearAdminProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return PinCodesProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return UnpinCodesProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.SetGasLessContractsProposal":
      return SetGasLessContractsProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.UnsetGasLessContractsProposal":
      return UnsetGasLessContractsProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return UpdateInstantiateConfigProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return StoreAndInstantiateContractProposal2.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.StoreCodeProposal":
      return StoreCodeProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.InstantiateContractProposal":
      return InstantiateContractProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.InstantiateContract2Proposal":
      return InstantiateContract2Proposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.MigrateContractProposal":
      return MigrateContractProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.SudoContractProposal":
      return SudoContractProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.ExecuteContractProposal":
      return ExecuteContractProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.UpdateAdminProposal":
      return UpdateAdminProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.ClearAdminProposal":
      return ClearAdminProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.PinCodesProposal":
      return PinCodesProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.UnpinCodesProposal":
      return UnpinCodesProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.UpdateInstantiateConfigProposal":
      return UpdateInstantiateConfigProposal3.decode(data.value);
    case "/cosmwasm.wasm.v1beta1.StoreAndInstantiateContractProposal":
      return StoreAndInstantiateContractProposal3.decode(data.value);
    case "/ibc.core.client.v1.ClientUpdateProposal":
      return ClientUpdateProposal.decode(data.value);
    case "/ibc.core.client.v1.UpgradeProposal":
      return UpgradeProposal.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_govv1beta1Content_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "cosmos-sdk/CommunityPoolSpendProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.encode(CommunityPoolSpendProposal.fromPartial(CommunityPoolSpendProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CommunityPoolSpendProposalWithDeposit":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.encode(CommunityPoolSpendProposalWithDeposit.fromPartial(CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/TextProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode(TextProposal.fromPartial(TextProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ParameterChangeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        value: ParameterChangeProposal.encode(ParameterChangeProposal.fromPartial(ParameterChangeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/SoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.encode(SoftwareUpgradeProposal.fromPartial(SoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CancelSoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.encode(CancelSoftwareUpgradeProposal.fromPartial(CancelSoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    case "wasm/StoreCodeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        value: StoreCodeProposal1.encode(StoreCodeProposal1.fromPartial(StoreCodeProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
        value: InstantiateContractProposal1.encode(InstantiateContractProposal1.fromPartial(InstantiateContractProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContract2Proposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
        value: InstantiateContract2Proposal1.encode(InstantiateContract2Proposal1.fromPartial(InstantiateContract2Proposal1.fromAmino(content.value))).finish()
      });
    case "wasm/MigrateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
        value: MigrateContractProposal1.encode(MigrateContractProposal1.fromPartial(MigrateContractProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/SudoContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
        value: SudoContractProposal1.encode(SudoContractProposal1.fromPartial(SudoContractProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/ExecuteContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
        value: ExecuteContractProposal1.encode(ExecuteContractProposal1.fromPartial(ExecuteContractProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
        value: UpdateAdminProposal1.encode(UpdateAdminProposal1.fromPartial(UpdateAdminProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/ClearAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
        value: ClearAdminProposal1.encode(ClearAdminProposal1.fromPartial(ClearAdminProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/PinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
        value: PinCodesProposal1.encode(PinCodesProposal1.fromPartial(PinCodesProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/UnpinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
        value: UnpinCodesProposal1.encode(UnpinCodesProposal1.fromPartial(UnpinCodesProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/SetGasLessContractsProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.SetGasLessContractsProposal",
        value: SetGasLessContractsProposal1.encode(SetGasLessContractsProposal1.fromPartial(SetGasLessContractsProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/UnsetGasLessContractsProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UnsetGasLessContractsProposal",
        value: UnsetGasLessContractsProposal1.encode(UnsetGasLessContractsProposal1.fromPartial(UnsetGasLessContractsProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateInstantiateConfigProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal1.encode(UpdateInstantiateConfigProposal1.fromPartial(UpdateInstantiateConfigProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/StoreAndInstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal1.encode(StoreAndInstantiateContractProposal1.fromPartial(StoreAndInstantiateContractProposal1.fromAmino(content.value))).finish()
      });
    case "wasm/StoreCodeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        value: StoreCodeProposal2.encode(StoreCodeProposal2.fromPartial(StoreCodeProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
        value: InstantiateContractProposal2.encode(InstantiateContractProposal2.fromPartial(InstantiateContractProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContract2Proposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
        value: InstantiateContract2Proposal2.encode(InstantiateContract2Proposal2.fromPartial(InstantiateContract2Proposal2.fromAmino(content.value))).finish()
      });
    case "wasm/MigrateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
        value: MigrateContractProposal2.encode(MigrateContractProposal2.fromPartial(MigrateContractProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/SudoContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
        value: SudoContractProposal2.encode(SudoContractProposal2.fromPartial(SudoContractProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/ExecuteContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
        value: ExecuteContractProposal2.encode(ExecuteContractProposal2.fromPartial(ExecuteContractProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
        value: UpdateAdminProposal2.encode(UpdateAdminProposal2.fromPartial(UpdateAdminProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/ClearAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
        value: ClearAdminProposal2.encode(ClearAdminProposal2.fromPartial(ClearAdminProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/PinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
        value: PinCodesProposal2.encode(PinCodesProposal2.fromPartial(PinCodesProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/UnpinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
        value: UnpinCodesProposal2.encode(UnpinCodesProposal2.fromPartial(UnpinCodesProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/SetGasLessContractsProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.SetGasLessContractsProposal",
        value: SetGasLessContractsProposal2.encode(SetGasLessContractsProposal2.fromPartial(SetGasLessContractsProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/UnsetGasLessContractsProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UnsetGasLessContractsProposal",
        value: UnsetGasLessContractsProposal2.encode(UnsetGasLessContractsProposal2.fromPartial(UnsetGasLessContractsProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateInstantiateConfigProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal2.encode(UpdateInstantiateConfigProposal2.fromPartial(UpdateInstantiateConfigProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/StoreAndInstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal2.encode(StoreAndInstantiateContractProposal2.fromPartial(StoreAndInstantiateContractProposal2.fromAmino(content.value))).finish()
      });
    case "wasm/StoreCodeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.StoreCodeProposal",
        value: StoreCodeProposal3.encode(StoreCodeProposal3.fromPartial(StoreCodeProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.InstantiateContractProposal",
        value: InstantiateContractProposal3.encode(InstantiateContractProposal3.fromPartial(InstantiateContractProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContract2Proposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.InstantiateContract2Proposal",
        value: InstantiateContract2Proposal3.encode(InstantiateContract2Proposal3.fromPartial(InstantiateContract2Proposal3.fromAmino(content.value))).finish()
      });
    case "wasm/MigrateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.MigrateContractProposal",
        value: MigrateContractProposal3.encode(MigrateContractProposal3.fromPartial(MigrateContractProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/SudoContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.SudoContractProposal",
        value: SudoContractProposal3.encode(SudoContractProposal3.fromPartial(SudoContractProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/ExecuteContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.ExecuteContractProposal",
        value: ExecuteContractProposal3.encode(ExecuteContractProposal3.fromPartial(ExecuteContractProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.UpdateAdminProposal",
        value: UpdateAdminProposal3.encode(UpdateAdminProposal3.fromPartial(UpdateAdminProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/ClearAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.ClearAdminProposal",
        value: ClearAdminProposal3.encode(ClearAdminProposal3.fromPartial(ClearAdminProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/PinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.PinCodesProposal",
        value: PinCodesProposal3.encode(PinCodesProposal3.fromPartial(PinCodesProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/UnpinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.UnpinCodesProposal",
        value: UnpinCodesProposal3.encode(UnpinCodesProposal3.fromPartial(UnpinCodesProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateInstantiateConfigProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal3.encode(UpdateInstantiateConfigProposal3.fromPartial(UpdateInstantiateConfigProposal3.fromAmino(content.value))).finish()
      });
    case "wasm/StoreAndInstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1beta1.StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal3.encode(StoreAndInstantiateContractProposal3.fromPartial(StoreAndInstantiateContractProposal3.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ClientUpdateProposal":
      return Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
        value: ClientUpdateProposal.encode(ClientUpdateProposal.fromPartial(ClientUpdateProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/UpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.UpgradeProposal",
        value: UpgradeProposal.encode(UpgradeProposal.fromPartial(UpgradeProposal.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_govv1beta1Content_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.toAmino(CommunityPoolSpendProposal.decode(content.value, undefined))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.toAmino(CommunityPoolSpendProposalWithDeposit.decode(content.value, undefined))
      };
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: TextProposal.toAmino(TextProposal.decode(content.value, undefined))
      };
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return {
        type: "cosmos-sdk/ParameterChangeProposal",
        value: ParameterChangeProposal.toAmino(ParameterChangeProposal.decode(content.value, undefined))
      };
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.toAmino(SoftwareUpgradeProposal.decode(content.value, undefined))
      };
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.toAmino(CancelSoftwareUpgradeProposal.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return {
        type: "wasm/StoreCodeProposal",
        value: StoreCodeProposal1.toAmino(StoreCodeProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return {
        type: "wasm/InstantiateContractProposal",
        value: InstantiateContractProposal1.toAmino(InstantiateContractProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return {
        type: "wasm/InstantiateContract2Proposal",
        value: InstantiateContract2Proposal1.toAmino(InstantiateContract2Proposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return {
        type: "wasm/MigrateContractProposal",
        value: MigrateContractProposal1.toAmino(MigrateContractProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return {
        type: "wasm/SudoContractProposal",
        value: SudoContractProposal1.toAmino(SudoContractProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return {
        type: "wasm/ExecuteContractProposal",
        value: ExecuteContractProposal1.toAmino(ExecuteContractProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return {
        type: "wasm/UpdateAdminProposal",
        value: UpdateAdminProposal1.toAmino(UpdateAdminProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return {
        type: "wasm/ClearAdminProposal",
        value: ClearAdminProposal1.toAmino(ClearAdminProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return {
        type: "wasm/PinCodesProposal",
        value: PinCodesProposal1.toAmino(PinCodesProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return {
        type: "wasm/UnpinCodesProposal",
        value: UnpinCodesProposal1.toAmino(UnpinCodesProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.SetGasLessContractsProposal":
      return {
        type: "wasm/SetGasLessContractsProposal",
        value: SetGasLessContractsProposal1.toAmino(SetGasLessContractsProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.UnsetGasLessContractsProposal":
      return {
        type: "wasm/UnsetGasLessContractsProposal",
        value: UnsetGasLessContractsProposal1.toAmino(UnsetGasLessContractsProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return {
        type: "wasm/UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal1.toAmino(UpdateInstantiateConfigProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return {
        type: "wasm/StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal1.toAmino(StoreAndInstantiateContractProposal1.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return {
        type: "wasm/StoreCodeProposal",
        value: StoreCodeProposal2.toAmino(StoreCodeProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return {
        type: "wasm/InstantiateContractProposal",
        value: InstantiateContractProposal2.toAmino(InstantiateContractProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return {
        type: "wasm/InstantiateContract2Proposal",
        value: InstantiateContract2Proposal2.toAmino(InstantiateContract2Proposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return {
        type: "wasm/MigrateContractProposal",
        value: MigrateContractProposal2.toAmino(MigrateContractProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return {
        type: "wasm/SudoContractProposal",
        value: SudoContractProposal2.toAmino(SudoContractProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return {
        type: "wasm/ExecuteContractProposal",
        value: ExecuteContractProposal2.toAmino(ExecuteContractProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return {
        type: "wasm/UpdateAdminProposal",
        value: UpdateAdminProposal2.toAmino(UpdateAdminProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return {
        type: "wasm/ClearAdminProposal",
        value: ClearAdminProposal2.toAmino(ClearAdminProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return {
        type: "wasm/PinCodesProposal",
        value: PinCodesProposal2.toAmino(PinCodesProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return {
        type: "wasm/UnpinCodesProposal",
        value: UnpinCodesProposal2.toAmino(UnpinCodesProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.SetGasLessContractsProposal":
      return {
        type: "wasm/SetGasLessContractsProposal",
        value: SetGasLessContractsProposal2.toAmino(SetGasLessContractsProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.UnsetGasLessContractsProposal":
      return {
        type: "wasm/UnsetGasLessContractsProposal",
        value: UnsetGasLessContractsProposal2.toAmino(UnsetGasLessContractsProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return {
        type: "wasm/UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal2.toAmino(UpdateInstantiateConfigProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return {
        type: "wasm/StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal2.toAmino(StoreAndInstantiateContractProposal2.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.StoreCodeProposal":
      return {
        type: "wasm/StoreCodeProposal",
        value: StoreCodeProposal3.toAmino(StoreCodeProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.InstantiateContractProposal":
      return {
        type: "wasm/InstantiateContractProposal",
        value: InstantiateContractProposal3.toAmino(InstantiateContractProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.InstantiateContract2Proposal":
      return {
        type: "wasm/InstantiateContract2Proposal",
        value: InstantiateContract2Proposal3.toAmino(InstantiateContract2Proposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.MigrateContractProposal":
      return {
        type: "wasm/MigrateContractProposal",
        value: MigrateContractProposal3.toAmino(MigrateContractProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.SudoContractProposal":
      return {
        type: "wasm/SudoContractProposal",
        value: SudoContractProposal3.toAmino(SudoContractProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.ExecuteContractProposal":
      return {
        type: "wasm/ExecuteContractProposal",
        value: ExecuteContractProposal3.toAmino(ExecuteContractProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.UpdateAdminProposal":
      return {
        type: "wasm/UpdateAdminProposal",
        value: UpdateAdminProposal3.toAmino(UpdateAdminProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.ClearAdminProposal":
      return {
        type: "wasm/ClearAdminProposal",
        value: ClearAdminProposal3.toAmino(ClearAdminProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.PinCodesProposal":
      return {
        type: "wasm/PinCodesProposal",
        value: PinCodesProposal3.toAmino(PinCodesProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.UnpinCodesProposal":
      return {
        type: "wasm/UnpinCodesProposal",
        value: UnpinCodesProposal3.toAmino(UnpinCodesProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.UpdateInstantiateConfigProposal":
      return {
        type: "wasm/UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal3.toAmino(UpdateInstantiateConfigProposal3.decode(content.value, undefined))
      };
    case "/cosmwasm.wasm.v1beta1.StoreAndInstantiateContractProposal":
      return {
        type: "wasm/StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal3.toAmino(StoreAndInstantiateContractProposal3.decode(content.value, undefined))
      };
    case "/ibc.core.client.v1.ClientUpdateProposal":
      return {
        type: "cosmos-sdk/ClientUpdateProposal",
        value: ClientUpdateProposal.toAmino(ClientUpdateProposal.decode(content.value, undefined))
      };
    case "/ibc.core.client.v1.UpgradeProposal":
      return {
        type: "cosmos-sdk/UpgradeProposal",
        value: UpgradeProposal.toAmino(UpgradeProposal.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};