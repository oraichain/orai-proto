import * as _105 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _106 from "./tokenfactory/v1beta1/genesis";
import * as _107 from "./tokenfactory/v1beta1/params";
import * as _108 from "./tokenfactory/v1beta1/query";
import * as _109 from "./tokenfactory/v1beta1/tx";
import * as _110 from "./wasm/v1/authz";
import * as _111 from "./wasm/v1/genesis";
import * as _112 from "./wasm/v1/ibc";
import * as _113 from "./wasm/v1/proposal_legacy";
import * as _114 from "./wasm/v1/proposal";
import * as _115 from "./wasm/v1/query";
import * as _116 from "./wasm/v1/tx";
import * as _117 from "./wasm/v1/types";
import * as _118 from "./wasm/v1beta1/proposal_legacy_v1beta1";
import * as _262 from "./tokenfactory/v1beta1/tx.amino";
import * as _263 from "./wasm/v1/tx.amino";
import * as _264 from "./tokenfactory/v1beta1/tx.registry";
import * as _265 from "./wasm/v1/tx.registry";
import * as _266 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _267 from "./wasm/v1/query.rpc.Query";
import * as _268 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _269 from "./wasm/v1/tx.rpc.msg";
import * as _308 from "./rpc.query";
import * as _309 from "./rpc.tx";
export namespace cosmwasm {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._262,
      ..._264,
      ..._266,
      ..._268
    };
  }
  export namespace wasm {
    export const v1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._263,
      ..._265,
      ..._267,
      ..._269
    };
    export const v1beta1 = {
      ..._118
    };
  }
  export const ClientFactory = {
    ..._308,
    ..._309
  };
}