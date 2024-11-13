import * as _139 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _140 from "./tokenfactory/v1beta1/genesis";
import * as _141 from "./tokenfactory/v1beta1/params";
import * as _142 from "./tokenfactory/v1beta1/query";
import * as _143 from "./tokenfactory/v1beta1/tx";
import * as _144 from "./wasm/v1/authz";
import * as _145 from "./wasm/v1/genesis";
import * as _146 from "./wasm/v1/ibc";
import * as _147 from "./wasm/v1/proposal_legacy";
import * as _148 from "./wasm/v1/proposal";
import * as _149 from "./wasm/v1/query";
import * as _150 from "./wasm/v1/tx";
import * as _151 from "./wasm/v1/types";
import * as _152 from "./wasm/v1beta1/proposal_legacy_v1beta1";
import * as _317 from "./tokenfactory/v1beta1/tx.amino";
import * as _318 from "./wasm/v1/tx.amino";
import * as _319 from "./tokenfactory/v1beta1/tx.registry";
import * as _320 from "./wasm/v1/tx.registry";
import * as _321 from "./tokenfactory/v1beta1/query.lcd";
import * as _322 from "./wasm/v1/query.lcd";
import * as _323 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _324 from "./wasm/v1/query.rpc.Query";
import * as _325 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _326 from "./wasm/v1/tx.rpc.msg";
import * as _370 from "./lcd";
import * as _371 from "./rpc.query";
import * as _372 from "./rpc.tx";
export namespace cosmwasm {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._317,
      ..._319,
      ..._321,
      ..._323,
      ..._325
    };
  }
  export namespace wasm {
    export const v1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._318,
      ..._320,
      ..._322,
      ..._324,
      ..._326
    };
    export const v1beta1 = {
      ..._152
    };
  }
  export const ClientFactory = {
    ..._370,
    ..._371,
    ..._372
  };
}