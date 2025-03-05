import * as _119 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _120 from "./tokenfactory/v1beta1/genesis";
import * as _121 from "./tokenfactory/v1beta1/params";
import * as _122 from "./tokenfactory/v1beta1/query";
import * as _123 from "./tokenfactory/v1beta1/tx";
import * as _124 from "./wasm/v1/authz";
import * as _125 from "./wasm/v1/genesis";
import * as _126 from "./wasm/v1/ibc";
import * as _127 from "./wasm/v1/proposal_legacy";
import * as _128 from "./wasm/v1/proposal";
import * as _129 from "./wasm/v1/query";
import * as _130 from "./wasm/v1/tx";
import * as _131 from "./wasm/v1/types";
import * as _132 from "./wasm/v1beta1/proposal_legacy_v1beta1";
import * as _312 from "./tokenfactory/v1beta1/tx.amino";
import * as _313 from "./wasm/v1/tx.amino";
import * as _314 from "./tokenfactory/v1beta1/tx.registry";
import * as _315 from "./wasm/v1/tx.registry";
import * as _316 from "./tokenfactory/v1beta1/query.lcd";
import * as _317 from "./wasm/v1/query.lcd";
import * as _318 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _319 from "./wasm/v1/query.rpc.Query";
import * as _320 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _321 from "./wasm/v1/tx.rpc.msg";
import * as _375 from "./lcd";
import * as _376 from "./rpc.query";
import * as _377 from "./rpc.tx";
export namespace cosmwasm {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._312,
      ..._314,
      ..._316,
      ..._318,
      ..._320
    };
  }
  export namespace wasm {
    export const v1 = {
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._313,
      ..._315,
      ..._317,
      ..._319,
      ..._321
    };
    export const v1beta1 = {
      ..._132
    };
  }
  export const ClientFactory = {
    ..._375,
    ..._376,
    ..._377
  };
}