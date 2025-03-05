import * as _106 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _107 from "./tokenfactory/v1beta1/genesis";
import * as _108 from "./tokenfactory/v1beta1/params";
import * as _109 from "./tokenfactory/v1beta1/query";
import * as _110 from "./tokenfactory/v1beta1/tx";
import * as _111 from "./wasm/v1/authz";
import * as _112 from "./wasm/v1/genesis";
import * as _113 from "./wasm/v1/ibc";
import * as _114 from "./wasm/v1/proposal_legacy";
import * as _115 from "./wasm/v1/proposal";
import * as _116 from "./wasm/v1/query";
import * as _117 from "./wasm/v1/tx";
import * as _118 from "./wasm/v1/types";
import * as _119 from "./wasm/v1beta1/proposal_legacy_v1beta1";
import * as _251 from "./tokenfactory/v1beta1/tx.amino";
import * as _252 from "./wasm/v1/tx.amino";
import * as _253 from "./tokenfactory/v1beta1/tx.registry";
import * as _254 from "./wasm/v1/tx.registry";
import * as _255 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _256 from "./wasm/v1/query.rpc.Query";
import * as _257 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _258 from "./wasm/v1/tx.rpc.msg";
import * as _297 from "./rpc.query";
import * as _298 from "./rpc.tx";
export namespace cosmwasm {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._251,
      ..._253,
      ..._255,
      ..._257
    };
  }
  export namespace wasm {
    export const v1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._252,
      ..._254,
      ..._256,
      ..._258
    };
    export const v1beta1 = {
      ..._119
    };
  }
  export const ClientFactory = {
    ..._297,
    ..._298
  };
}