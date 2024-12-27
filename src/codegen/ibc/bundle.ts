import * as _125 from "./applications/interchain_accounts/controller/v1/controller";
import * as _126 from "./applications/interchain_accounts/controller/v1/query";
import * as _127 from "./applications/interchain_accounts/controller/v1/tx";
import * as _128 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _129 from "./applications/interchain_accounts/host/v1/host";
import * as _130 from "./applications/interchain_accounts/host/v1/query";
import * as _131 from "./applications/interchain_accounts/host/v1/tx";
import * as _132 from "./applications/interchain_accounts/v1/account";
import * as _133 from "./applications/interchain_accounts/v1/genesis";
import * as _134 from "./applications/interchain_accounts/v1/metadata";
import * as _135 from "./applications/interchain_accounts/v1/packet";
import * as _136 from "./applications/transfer/v1/authz";
import * as _137 from "./applications/transfer/v1/genesis";
import * as _138 from "./applications/transfer/v1/query";
import * as _139 from "./applications/transfer/v1/transfer";
import * as _140 from "./applications/transfer/v1/tx";
import * as _141 from "./applications/transfer/v2/packet";
import * as _142 from "./core/channel/v1/channel";
import * as _143 from "./core/channel/v1/genesis";
import * as _144 from "./core/channel/v1/query";
import * as _145 from "./core/channel/v1/tx";
import * as _146 from "./core/channel/v1/upgrade";
import * as _147 from "./core/client/v1/client";
import * as _148 from "./core/client/v1/genesis";
import * as _149 from "./core/client/v1/query";
import * as _150 from "./core/client/v1/tx";
import * as _151 from "./core/commitment/v1/commitment";
import * as _152 from "./core/connection/v1/connection";
import * as _153 from "./core/connection/v1/genesis";
import * as _154 from "./core/connection/v1/query";
import * as _155 from "./core/connection/v1/tx";
import * as _156 from "./lightclients/localhost/v1/localhost";
import * as _157 from "./lightclients/localhost/v2/localhost";
import * as _158 from "./lightclients/solomachine/v1/solomachine";
import * as _159 from "./lightclients/solomachine/v2/solomachine";
import * as _160 from "./lightclients/solomachine/v3/solomachine";
import * as _161 from "./lightclients/tendermint/v1/tendermint";
import * as _162 from "./lightclients/wasm/v1/genesis";
import * as _163 from "./lightclients/wasm/v1/query";
import * as _164 from "./lightclients/wasm/v1/tx";
import * as _165 from "./lightclients/wasm/v1/wasm";
import * as _244 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _245 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _246 from "./applications/transfer/v1/tx.amino";
import * as _247 from "./core/channel/v1/tx.amino";
import * as _248 from "./core/client/v1/tx.amino";
import * as _249 from "./core/connection/v1/tx.amino";
import * as _250 from "./lightclients/wasm/v1/tx.amino";
import * as _251 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _252 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _253 from "./applications/transfer/v1/tx.registry";
import * as _254 from "./core/channel/v1/tx.registry";
import * as _255 from "./core/client/v1/tx.registry";
import * as _256 from "./core/connection/v1/tx.registry";
import * as _257 from "./lightclients/wasm/v1/tx.registry";
import * as _258 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _259 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _260 from "./applications/transfer/v1/query.rpc.Query";
import * as _261 from "./core/channel/v1/query.rpc.Query";
import * as _262 from "./core/client/v1/query.rpc.Query";
import * as _263 from "./core/connection/v1/query.rpc.Query";
import * as _264 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _265 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _266 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _267 from "./applications/transfer/v1/tx.rpc.msg";
import * as _268 from "./core/channel/v1/tx.rpc.msg";
import * as _269 from "./core/client/v1/tx.rpc.msg";
import * as _270 from "./core/connection/v1/tx.rpc.msg";
import * as _271 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _276 from "./rpc.query";
import * as _277 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._125,
          ..._126,
          ..._127,
          ..._244,
          ..._251,
          ..._258,
          ..._265
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._128
        };
      }
      export namespace host {
        export const v1 = {
          ..._129,
          ..._130,
          ..._131,
          ..._245,
          ..._252,
          ..._259,
          ..._266
        };
      }
      export const v1 = {
        ..._132,
        ..._133,
        ..._134,
        ..._135
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._246,
        ..._253,
        ..._260,
        ..._267
      };
      export const v2 = {
        ..._141
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._142,
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._247,
        ..._254,
        ..._261,
        ..._268
      };
    }
    export namespace client {
      export const v1 = {
        ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._248,
        ..._255,
        ..._262,
        ..._269
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._151
      };
    }
    export namespace connection {
      export const v1 = {
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._249,
        ..._256,
        ..._263,
        ..._270
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._156
      };
      export const v2 = {
        ..._157
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._158
      };
      export const v2 = {
        ..._159
      };
      export const v3 = {
        ..._160
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._161
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._250,
        ..._257,
        ..._264,
        ..._271
      };
    }
  }
  export const ClientFactory = {
    ..._276,
    ..._277
  };
}