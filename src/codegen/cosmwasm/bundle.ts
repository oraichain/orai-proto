import * as _71 from "./wasm/v1/authz";
import * as _72 from "./wasm/v1/genesis";
import * as _73 from "./wasm/v1/ibc";
import * as _74 from "./wasm/v1/proposal";
import * as _75 from "./wasm/v1/query";
import * as _76 from "./wasm/v1/tx";
import * as _77 from "./wasm/v1/types";
import * as _196 from "./wasm/v1/tx.amino";
import * as _197 from "./wasm/v1/tx.registry";
import * as _198 from "./wasm/v1/query.lcd";
import * as _199 from "./wasm/v1/query.rpc.Query";
import * as _200 from "./wasm/v1/tx.rpc.msg";
import * as _233 from "./lcd";
import * as _234 from "./rpc.query";
import * as _235 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200
    };
  }
  export const ClientFactory = {
    ..._233,
    ..._234,
    ..._235
  };
}