import * as _140 from "./applications/interchain_accounts/controller/v1/controller";
import * as _141 from "./applications/interchain_accounts/controller/v1/query";
import * as _142 from "./applications/interchain_accounts/controller/v1/tx";
import * as _143 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _144 from "./applications/interchain_accounts/host/v1/host";
import * as _145 from "./applications/interchain_accounts/host/v1/query";
import * as _146 from "./applications/interchain_accounts/host/v1/tx";
import * as _147 from "./applications/interchain_accounts/v1/account";
import * as _148 from "./applications/interchain_accounts/v1/genesis";
import * as _149 from "./applications/interchain_accounts/v1/metadata";
import * as _150 from "./applications/interchain_accounts/v1/packet";
import * as _151 from "./applications/transfer/v1/authz";
import * as _152 from "./applications/transfer/v1/genesis";
import * as _153 from "./applications/transfer/v1/query";
import * as _154 from "./applications/transfer/v1/transfer";
import * as _155 from "./applications/transfer/v1/tx";
import * as _156 from "./applications/transfer/v2/packet";
import * as _157 from "./core/channel/v1/channel";
import * as _158 from "./core/channel/v1/genesis";
import * as _159 from "./core/channel/v1/query";
import * as _160 from "./core/channel/v1/tx";
import * as _161 from "./core/channel/v1/upgrade";
import * as _162 from "./core/client/v1/client";
import * as _163 from "./core/client/v1/genesis";
import * as _164 from "./core/client/v1/query";
import * as _165 from "./core/client/v1/tx";
import * as _166 from "./core/commitment/v1/commitment";
import * as _167 from "./core/connection/v1/connection";
import * as _168 from "./core/connection/v1/genesis";
import * as _169 from "./core/connection/v1/query";
import * as _170 from "./core/connection/v1/tx";
import * as _171 from "./lightclients/localhost/v1/localhost";
import * as _172 from "./lightclients/localhost/v2/localhost";
import * as _173 from "./lightclients/solomachine/v1/solomachine";
import * as _174 from "./lightclients/solomachine/v2/solomachine";
import * as _175 from "./lightclients/solomachine/v3/solomachine";
import * as _176 from "./lightclients/tendermint/v1/tendermint";
import * as _177 from "./lightclients/wasm/v1/genesis";
import * as _178 from "./lightclients/wasm/v1/query";
import * as _179 from "./lightclients/wasm/v1/tx";
import * as _180 from "./lightclients/wasm/v1/wasm";
import * as _267 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _268 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _269 from "./applications/transfer/v1/tx.amino";
import * as _270 from "./core/channel/v1/tx.amino";
import * as _271 from "./core/client/v1/tx.amino";
import * as _272 from "./core/connection/v1/tx.amino";
import * as _273 from "./lightclients/wasm/v1/tx.amino";
import * as _274 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _275 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _276 from "./applications/transfer/v1/tx.registry";
import * as _277 from "./core/channel/v1/tx.registry";
import * as _278 from "./core/client/v1/tx.registry";
import * as _279 from "./core/connection/v1/tx.registry";
import * as _280 from "./lightclients/wasm/v1/tx.registry";
import * as _281 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _282 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _283 from "./applications/transfer/v1/query.rpc.Query";
import * as _284 from "./core/channel/v1/query.rpc.Query";
import * as _285 from "./core/client/v1/query.rpc.Query";
import * as _286 from "./core/connection/v1/query.rpc.Query";
import * as _287 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _288 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _289 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _290 from "./applications/transfer/v1/tx.rpc.msg";
import * as _291 from "./core/channel/v1/tx.rpc.msg";
import * as _292 from "./core/client/v1/tx.rpc.msg";
import * as _293 from "./core/connection/v1/tx.rpc.msg";
import * as _294 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _301 from "./rpc.query";
import * as _302 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._140,
          ..._141,
          ..._142,
          ..._267,
          ..._274,
          ..._281,
          ..._288
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._143
        };
      }
      export namespace host {
        export const v1 = {
          ..._144,
          ..._145,
          ..._146,
          ..._268,
          ..._275,
          ..._282,
          ..._289
        };
      }
      export const v1 = {
        ..._147,
        ..._148,
        ..._149,
        ..._150
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._269,
        ..._276,
        ..._283,
        ..._290
      };
      export const v2 = {
        ..._156
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._270,
        ..._277,
        ..._284,
        ..._291
      };
    }
    export namespace client {
      export const v1 = {
        ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._271,
        ..._278,
        ..._285,
        ..._292
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._166
      };
    }
    export namespace connection {
      export const v1 = {
        ..._167,
        ..._168,
        ..._169,
        ..._170,
        ..._272,
        ..._279,
        ..._286,
        ..._293
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._171
      };
      export const v2 = {
        ..._172
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._173
      };
      export const v2 = {
        ..._174
      };
      export const v3 = {
        ..._175
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._176
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._177,
        ..._178,
        ..._179,
        ..._180,
        ..._273,
        ..._280,
        ..._287,
        ..._294
      };
    }
  }
  export const ClientFactory = {
    ..._301,
    ..._302
  };
}