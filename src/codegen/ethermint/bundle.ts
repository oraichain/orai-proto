import * as _139 from "./crypto/v1/ethsecp256k1/keys";
import * as _140 from "./evm/v1/events";
import * as _141 from "./evm/v1/evm";
import * as _142 from "./evm/v1/genesis";
import * as _143 from "./evm/v1/query";
import * as _144 from "./evm/v1/tx";
import * as _145 from "./feemarket/v1/events";
import * as _146 from "./feemarket/v1/feemarket";
import * as _147 from "./feemarket/v1/genesis";
import * as _148 from "./feemarket/v1/query";
import * as _149 from "./feemarket/v1/tx";
import * as _150 from "./types/v1/account";
import * as _151 from "./types/v1/dynamic_fee";
import * as _152 from "./types/v1/indexer";
import * as _153 from "./types/v1/web3";
import * as _290 from "./evm/v1/tx.amino";
import * as _291 from "./feemarket/v1/tx.amino";
import * as _292 from "./evm/v1/tx.registry";
import * as _293 from "./feemarket/v1/tx.registry";
import * as _294 from "./evm/v1/query.rpc.Query";
import * as _295 from "./feemarket/v1/query.rpc.Query";
import * as _296 from "./evm/v1/tx.rpc.msg";
import * as _297 from "./feemarket/v1/tx.rpc.msg";
import * as _330 from "./rpc.query";
import * as _331 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._139
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._290,
      ..._292,
      ..._294,
      ..._296
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._291,
      ..._293,
      ..._295,
      ..._297
    };
  }
  export namespace types {
    export const v1 = {
      ..._150,
      ..._151,
      ..._152,
      ..._153
    };
  }
  export const ClientFactory = {
    ..._330,
    ..._331
  };
}