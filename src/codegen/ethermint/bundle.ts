import * as _119 from "./crypto/v1/ethsecp256k1/keys";
import * as _120 from "./evm/v1/events";
import * as _121 from "./evm/v1/evm";
import * as _122 from "./evm/v1/genesis";
import * as _123 from "./evm/v1/query";
import * as _124 from "./evm/v1/tx";
import * as _125 from "./feemarket/v1/events";
import * as _126 from "./feemarket/v1/feemarket";
import * as _127 from "./feemarket/v1/genesis";
import * as _128 from "./feemarket/v1/query";
import * as _129 from "./feemarket/v1/tx";
import * as _130 from "./types/v1/account";
import * as _131 from "./types/v1/dynamic_fee";
import * as _132 from "./types/v1/indexer";
import * as _133 from "./types/v1/web3";
import * as _270 from "./evm/v1/tx.amino";
import * as _271 from "./feemarket/v1/tx.amino";
import * as _272 from "./evm/v1/tx.registry";
import * as _273 from "./feemarket/v1/tx.registry";
import * as _274 from "./evm/v1/query.rpc.Query";
import * as _275 from "./feemarket/v1/query.rpc.Query";
import * as _276 from "./evm/v1/tx.rpc.msg";
import * as _277 from "./feemarket/v1/tx.rpc.msg";
import * as _310 from "./rpc.query";
import * as _311 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._119
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._270,
      ..._272,
      ..._274,
      ..._276
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._271,
      ..._273,
      ..._275,
      ..._277
    };
  }
  export namespace types {
    export const v1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133
    };
  }
  export const ClientFactory = {
    ..._310,
    ..._311
  };
}