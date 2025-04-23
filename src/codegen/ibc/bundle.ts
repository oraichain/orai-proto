import * as _139 from "./applications/interchain_accounts/controller/v1/controller";
import * as _140 from "./applications/interchain_accounts/controller/v1/query";
import * as _141 from "./applications/interchain_accounts/controller/v1/tx";
import * as _142 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _143 from "./applications/interchain_accounts/host/v1/host";
import * as _144 from "./applications/interchain_accounts/host/v1/query";
import * as _145 from "./applications/interchain_accounts/host/v1/tx";
import * as _146 from "./applications/interchain_accounts/v1/account";
import * as _147 from "./applications/interchain_accounts/v1/genesis";
import * as _148 from "./applications/interchain_accounts/v1/metadata";
import * as _149 from "./applications/interchain_accounts/v1/packet";
import * as _150 from "./applications/transfer/v1/authz";
import * as _151 from "./applications/transfer/v1/genesis";
import * as _152 from "./applications/transfer/v1/query";
import * as _153 from "./applications/transfer/v1/transfer";
import * as _154 from "./applications/transfer/v1/tx";
import * as _155 from "./applications/transfer/v2/packet";
import * as _156 from "./core/channel/v1/channel";
import * as _157 from "./core/channel/v1/genesis";
import * as _158 from "./core/channel/v1/query";
import * as _159 from "./core/channel/v1/tx";
import * as _160 from "./core/channel/v1/upgrade";
import * as _161 from "./core/client/v1/client";
import * as _162 from "./core/client/v1/genesis";
import * as _163 from "./core/client/v1/query";
import * as _164 from "./core/client/v1/tx";
import * as _165 from "./core/commitment/v1/commitment";
import * as _166 from "./core/connection/v1/connection";
import * as _167 from "./core/connection/v1/genesis";
import * as _168 from "./core/connection/v1/query";
import * as _169 from "./core/connection/v1/tx";
import * as _170 from "./lightclients/localhost/v1/localhost";
import * as _171 from "./lightclients/localhost/v2/localhost";
import * as _172 from "./lightclients/solomachine/v1/solomachine";
import * as _173 from "./lightclients/solomachine/v2/solomachine";
import * as _174 from "./lightclients/solomachine/v3/solomachine";
import * as _175 from "./lightclients/tendermint/v1/tendermint";
import * as _176 from "./lightclients/wasm/v1/genesis";
import * as _177 from "./lightclients/wasm/v1/query";
import * as _178 from "./lightclients/wasm/v1/tx";
import * as _179 from "./lightclients/wasm/v1/wasm";
import * as _278 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _279 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _280 from "./applications/transfer/v1/tx.amino";
import * as _281 from "./core/channel/v1/tx.amino";
import * as _282 from "./core/client/v1/tx.amino";
import * as _283 from "./core/connection/v1/tx.amino";
import * as _284 from "./lightclients/wasm/v1/tx.amino";
import * as _285 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _286 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _287 from "./applications/transfer/v1/tx.registry";
import * as _288 from "./core/channel/v1/tx.registry";
import * as _289 from "./core/client/v1/tx.registry";
import * as _290 from "./core/connection/v1/tx.registry";
import * as _291 from "./lightclients/wasm/v1/tx.registry";
import * as _292 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _293 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _294 from "./applications/transfer/v1/query.rpc.Query";
import * as _295 from "./core/channel/v1/query.rpc.Query";
import * as _296 from "./core/client/v1/query.rpc.Query";
import * as _297 from "./core/connection/v1/query.rpc.Query";
import * as _298 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _299 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _300 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _301 from "./applications/transfer/v1/tx.rpc.msg";
import * as _302 from "./core/channel/v1/tx.rpc.msg";
import * as _303 from "./core/client/v1/tx.rpc.msg";
import * as _304 from "./core/connection/v1/tx.rpc.msg";
import * as _305 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _312 from "./rpc.query";
import * as _313 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._139,
          ..._140,
          ..._141,
          ..._278,
          ..._285,
          ..._292,
          ..._299
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._142
        };
      }
      export namespace host {
        export const v1 = {
          ..._143,
          ..._144,
          ..._145,
          ..._279,
          ..._286,
          ..._293,
          ..._300
        };
      }
      export const v1 = {
        ..._146,
        ..._147,
        ..._148,
        ..._149
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._150,
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._280,
        ..._287,
        ..._294,
        ..._301
      };
      export const v2 = {
        ..._155
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._281,
        ..._288,
        ..._295,
        ..._302
      };
    }
    export namespace client {
      export const v1 = {
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._282,
        ..._289,
        ..._296,
        ..._303
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._165
      };
    }
    export namespace connection {
      export const v1 = {
        ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._283,
        ..._290,
        ..._297,
        ..._304
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._170
      };
      export const v2 = {
        ..._171
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._172
      };
      export const v2 = {
        ..._173
      };
      export const v3 = {
        ..._174
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._175
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._176,
        ..._177,
        ..._178,
        ..._179,
        ..._284,
        ..._291,
        ..._298,
        ..._305
      };
    }
  }
  export const ClientFactory = {
    ..._312,
    ..._313
  };
}