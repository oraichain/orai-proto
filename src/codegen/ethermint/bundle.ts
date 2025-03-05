import * as _120 from "./crypto/v1/ethsecp256k1/keys";
import * as _121 from "./evm/v1/events";
import * as _122 from "./evm/v1/evm";
import * as _123 from "./evm/v1/genesis";
import * as _124 from "./evm/v1/query";
import * as _125 from "./evm/v1/tx";
import * as _126 from "./feemarket/v1/events";
import * as _127 from "./feemarket/v1/feemarket";
import * as _128 from "./feemarket/v1/genesis";
import * as _129 from "./feemarket/v1/query";
import * as _130 from "./feemarket/v1/tx";
import * as _131 from "./types/v1/account";
import * as _132 from "./types/v1/dynamic_fee";
import * as _133 from "./types/v1/indexer";
import * as _134 from "./types/v1/web3";
import * as _259 from "./evm/v1/tx.amino";
import * as _260 from "./feemarket/v1/tx.amino";
import * as _261 from "./evm/v1/tx.registry";
import * as _262 from "./feemarket/v1/tx.registry";
import * as _263 from "./evm/v1/query.rpc.Query";
import * as _264 from "./feemarket/v1/query.rpc.Query";
import * as _265 from "./evm/v1/tx.rpc.msg";
import * as _266 from "./feemarket/v1/tx.rpc.msg";
import * as _299 from "./rpc.query";
import * as _300 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._120
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._259,
      ..._261,
      ..._263,
      ..._265
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._260,
      ..._262,
      ..._264,
      ..._266
    };
  }
  export namespace types {
    export const v1 = {
      ..._131,
      ..._132,
      ..._133,
      ..._134
    };
  }
  export const ClientFactory = {
    ..._299,
    ..._300
  };
}