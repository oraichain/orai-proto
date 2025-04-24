import * as _125 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _126 from "./tokenfactory/v1beta1/genesis";
import * as _127 from "./tokenfactory/v1beta1/params";
import * as _128 from "./tokenfactory/v1beta1/query";
import * as _129 from "./tokenfactory/v1beta1/tx";
import * as _130 from "./wasm/v1/authz";
import * as _131 from "./wasm/v1/genesis";
import * as _132 from "./wasm/v1/ibc";
import * as _133 from "./wasm/v1/proposal_legacy";
import * as _134 from "./wasm/v1/proposal";
import * as _135 from "./wasm/v1/query";
import * as _136 from "./wasm/v1/tx";
import * as _137 from "./wasm/v1/types";
import * as _138 from "./wasm/v1beta1/proposal_legacy_v1beta1";
import * as _282 from "./tokenfactory/v1beta1/tx.amino";
import * as _283 from "./wasm/v1/tx.amino";
import * as _284 from "./tokenfactory/v1beta1/tx.registry";
import * as _285 from "./wasm/v1/tx.registry";
import * as _286 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _287 from "./wasm/v1/query.rpc.Query";
import * as _288 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _289 from "./wasm/v1/tx.rpc.msg";
import * as _328 from "./rpc.query";
import * as _329 from "./rpc.tx";
export namespace cosmwasm {
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._282,
      ..._284,
      ..._286,
      ..._288
    };
  }
  export namespace wasm {
    export const v1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._283,
      ..._285,
      ..._287,
      ..._289
    };
    export const v1beta1 = {
      ..._138
    };
  }
  export const ClientFactory = {
    ..._328,
    ..._329
  };
}