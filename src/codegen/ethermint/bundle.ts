import * as _133 from "./crypto/v1/ethsecp256k1/keys";
import * as _134 from "./evm/v1/events";
import * as _135 from "./evm/v1/evm";
import * as _136 from "./evm/v1/genesis";
import * as _137 from "./evm/v1/query";
import * as _138 from "./evm/v1/tx";
import * as _139 from "./feemarket/v1/events";
import * as _140 from "./feemarket/v1/feemarket";
import * as _141 from "./feemarket/v1/genesis";
import * as _142 from "./feemarket/v1/query";
import * as _143 from "./feemarket/v1/tx";
import * as _144 from "./types/v1/account";
import * as _145 from "./types/v1/dynamic_fee";
import * as _146 from "./types/v1/indexer";
import * as _147 from "./types/v1/web3";
import * as _322 from "./evm/v1/tx.amino";
import * as _323 from "./feemarket/v1/tx.amino";
import * as _324 from "./evm/v1/tx.registry";
import * as _325 from "./feemarket/v1/tx.registry";
import * as _326 from "./evm/v1/query.lcd";
import * as _327 from "./feemarket/v1/query.lcd";
import * as _328 from "./evm/v1/query.rpc.Query";
import * as _329 from "./feemarket/v1/query.rpc.Query";
import * as _330 from "./evm/v1/tx.rpc.msg";
import * as _331 from "./feemarket/v1/tx.rpc.msg";
import * as _378 from "./lcd";
import * as _379 from "./rpc.query";
import * as _380 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._133
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._322,
      ..._324,
      ..._326,
      ..._328,
      ..._330
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._323,
      ..._325,
      ..._327,
      ..._329,
      ..._331
    };
  }
  export namespace types {
    export const v1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._147
    };
  }
  export const ClientFactory = {
    ..._378,
    ..._379,
    ..._380
  };
}