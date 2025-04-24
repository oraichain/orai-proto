import * as _159 from "./applications/interchain_accounts/controller/v1/controller";
import * as _160 from "./applications/interchain_accounts/controller/v1/query";
import * as _161 from "./applications/interchain_accounts/controller/v1/tx";
import * as _162 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _163 from "./applications/interchain_accounts/host/v1/host";
import * as _164 from "./applications/interchain_accounts/host/v1/query";
import * as _165 from "./applications/interchain_accounts/host/v1/tx";
import * as _166 from "./applications/interchain_accounts/v1/account";
import * as _167 from "./applications/interchain_accounts/v1/genesis";
import * as _168 from "./applications/interchain_accounts/v1/metadata";
import * as _169 from "./applications/interchain_accounts/v1/packet";
import * as _170 from "./applications/transfer/v1/authz";
import * as _171 from "./applications/transfer/v1/genesis";
import * as _172 from "./applications/transfer/v1/query";
import * as _173 from "./applications/transfer/v1/transfer";
import * as _174 from "./applications/transfer/v1/tx";
import * as _175 from "./applications/transfer/v2/packet";
import * as _176 from "./core/channel/v1/channel";
import * as _177 from "./core/channel/v1/genesis";
import * as _178 from "./core/channel/v1/query";
import * as _179 from "./core/channel/v1/tx";
import * as _180 from "./core/channel/v1/upgrade";
import * as _181 from "./core/client/v1/client";
import * as _182 from "./core/client/v1/genesis";
import * as _183 from "./core/client/v1/query";
import * as _184 from "./core/client/v1/tx";
import * as _185 from "./core/commitment/v1/commitment";
import * as _186 from "./core/connection/v1/connection";
import * as _187 from "./core/connection/v1/genesis";
import * as _188 from "./core/connection/v1/query";
import * as _189 from "./core/connection/v1/tx";
import * as _190 from "./lightclients/localhost/v1/localhost";
import * as _191 from "./lightclients/localhost/v2/localhost";
import * as _192 from "./lightclients/solomachine/v1/solomachine";
import * as _193 from "./lightclients/solomachine/v2/solomachine";
import * as _194 from "./lightclients/solomachine/v3/solomachine";
import * as _195 from "./lightclients/tendermint/v1/tendermint";
import * as _196 from "./lightclients/wasm/v1/genesis";
import * as _197 from "./lightclients/wasm/v1/query";
import * as _198 from "./lightclients/wasm/v1/tx";
import * as _199 from "./lightclients/wasm/v1/wasm";
import * as _298 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _299 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _300 from "./applications/transfer/v1/tx.amino";
import * as _301 from "./core/channel/v1/tx.amino";
import * as _302 from "./core/client/v1/tx.amino";
import * as _303 from "./core/connection/v1/tx.amino";
import * as _304 from "./lightclients/wasm/v1/tx.amino";
import * as _305 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _306 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _307 from "./applications/transfer/v1/tx.registry";
import * as _308 from "./core/channel/v1/tx.registry";
import * as _309 from "./core/client/v1/tx.registry";
import * as _310 from "./core/connection/v1/tx.registry";
import * as _311 from "./lightclients/wasm/v1/tx.registry";
import * as _312 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _313 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _314 from "./applications/transfer/v1/query.rpc.Query";
import * as _315 from "./core/channel/v1/query.rpc.Query";
import * as _316 from "./core/client/v1/query.rpc.Query";
import * as _317 from "./core/connection/v1/query.rpc.Query";
import * as _318 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _319 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _320 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _321 from "./applications/transfer/v1/tx.rpc.msg";
import * as _322 from "./core/channel/v1/tx.rpc.msg";
import * as _323 from "./core/client/v1/tx.rpc.msg";
import * as _324 from "./core/connection/v1/tx.rpc.msg";
import * as _325 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _332 from "./rpc.query";
import * as _333 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._159,
          ..._160,
          ..._161,
          ..._298,
          ..._305,
          ..._312,
          ..._319
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._162
        };
      }
      export namespace host {
        export const v1 = {
          ..._163,
          ..._164,
          ..._165,
          ..._299,
          ..._306,
          ..._313,
          ..._320
        };
      }
      export const v1 = {
        ..._166,
        ..._167,
        ..._168,
        ..._169
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._300,
        ..._307,
        ..._314,
        ..._321
      };
      export const v2 = {
        ..._175
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._176,
        ..._177,
        ..._178,
        ..._179,
        ..._180,
        ..._301,
        ..._308,
        ..._315,
        ..._322
      };
    }
    export namespace client {
      export const v1 = {
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._302,
        ..._309,
        ..._316,
        ..._323
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._185
      };
    }
    export namespace connection {
      export const v1 = {
        ..._186,
        ..._187,
        ..._188,
        ..._189,
        ..._303,
        ..._310,
        ..._317,
        ..._324
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._190
      };
      export const v2 = {
        ..._191
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._192
      };
      export const v2 = {
        ..._193
      };
      export const v3 = {
        ..._194
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._195
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._196,
        ..._197,
        ..._198,
        ..._199,
        ..._304,
        ..._311,
        ..._318,
        ..._325
      };
    }
  }
  export const ClientFactory = {
    ..._332,
    ..._333
  };
}