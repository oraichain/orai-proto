import * as _86 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _87 from "./tokenfactory/v1beta1/genesis";
import * as _88 from "./tokenfactory/v1beta1/params";
import * as _89 from "./tokenfactory/v1beta1/query";
import * as _90 from "./tokenfactory/v1beta1/tx";
import * as _91 from "./wasm/v1/authz";
import * as _92 from "./wasm/v1/genesis";
import * as _93 from "./wasm/v1/ibc";
import * as _94 from "./wasm/v1/proposal_legacy";
import * as _95 from "./wasm/v1/proposal";
import * as _96 from "./wasm/v1/query";
import * as _97 from "./wasm/v1/tx";
import * as _98 from "./wasm/v1/types";
import * as _99 from "./wasm/v1beta1/proposal_legacy_v1beta1";
import * as _216 from "./tokenfactory/v1beta1/tx.amino";
import * as _217 from "./wasm/v1/tx.amino";
import * as _218 from "./tokenfactory/v1beta1/tx.registry";
import * as _219 from "./wasm/v1/tx.registry";
import * as _220 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _221 from "./wasm/v1/query.rpc.Query";
import * as _222 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _223 from "./wasm/v1/tx.rpc.msg";
import * as _254 from "./rpc.query";
import * as _255 from "./rpc.tx";
export namespace cosmwasm {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._216,
      ..._218,
      ..._220,
      ..._222
    };
  }
  export namespace wasm {
    export const v1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._217,
      ..._219,
      ..._221,
      ..._223
    };
    export const v1beta1 = {
      ..._99
    };
  }
  export const ClientFactory = {
    ..._254,
    ..._255
  };
}