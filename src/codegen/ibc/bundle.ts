import * as _105 from "./applications/interchain_accounts/controller/v1/controller";
import * as _106 from "./applications/interchain_accounts/controller/v1/query";
import * as _107 from "./applications/interchain_accounts/controller/v1/tx";
import * as _108 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _109 from "./applications/interchain_accounts/host/v1/host";
import * as _110 from "./applications/interchain_accounts/host/v1/query";
import * as _111 from "./applications/interchain_accounts/host/v1/tx";
import * as _112 from "./applications/interchain_accounts/v1/account";
import * as _113 from "./applications/interchain_accounts/v1/genesis";
import * as _114 from "./applications/interchain_accounts/v1/metadata";
import * as _115 from "./applications/interchain_accounts/v1/packet";
import * as _116 from "./applications/transfer/v1/authz";
import * as _117 from "./applications/transfer/v1/genesis";
import * as _118 from "./applications/transfer/v1/query";
import * as _119 from "./applications/transfer/v1/transfer";
import * as _120 from "./applications/transfer/v1/tx";
import * as _121 from "./applications/transfer/v2/packet";
import * as _122 from "./core/channel/v1/channel";
import * as _123 from "./core/channel/v1/genesis";
import * as _124 from "./core/channel/v1/query";
import * as _125 from "./core/channel/v1/tx";
import * as _126 from "./core/channel/v1/upgrade";
import * as _127 from "./core/client/v1/client";
import * as _128 from "./core/client/v1/genesis";
import * as _129 from "./core/client/v1/query";
import * as _130 from "./core/client/v1/tx";
import * as _131 from "./core/commitment/v1/commitment";
import * as _132 from "./core/connection/v1/connection";
import * as _133 from "./core/connection/v1/genesis";
import * as _134 from "./core/connection/v1/query";
import * as _135 from "./core/connection/v1/tx";
import * as _136 from "./lightclients/localhost/v1/localhost";
import * as _137 from "./lightclients/localhost/v2/localhost";
import * as _138 from "./lightclients/solomachine/v1/solomachine";
import * as _139 from "./lightclients/solomachine/v2/solomachine";
import * as _140 from "./lightclients/solomachine/v3/solomachine";
import * as _141 from "./lightclients/tendermint/v1/tendermint";
import * as _142 from "./lightclients/wasm/v1/genesis";
import * as _143 from "./lightclients/wasm/v1/query";
import * as _144 from "./lightclients/wasm/v1/tx";
import * as _145 from "./lightclients/wasm/v1/wasm";
import * as _224 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _225 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _226 from "./applications/transfer/v1/tx.amino";
import * as _227 from "./core/channel/v1/tx.amino";
import * as _228 from "./core/client/v1/tx.amino";
import * as _229 from "./core/connection/v1/tx.amino";
import * as _230 from "./lightclients/wasm/v1/tx.amino";
import * as _231 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _232 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _233 from "./applications/transfer/v1/tx.registry";
import * as _234 from "./core/channel/v1/tx.registry";
import * as _235 from "./core/client/v1/tx.registry";
import * as _236 from "./core/connection/v1/tx.registry";
import * as _237 from "./lightclients/wasm/v1/tx.registry";
import * as _238 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _239 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _240 from "./applications/transfer/v1/query.rpc.Query";
import * as _241 from "./core/channel/v1/query.rpc.Query";
import * as _242 from "./core/client/v1/query.rpc.Query";
import * as _243 from "./core/connection/v1/query.rpc.Query";
import * as _244 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _245 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _246 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _247 from "./applications/transfer/v1/tx.rpc.msg";
import * as _248 from "./core/channel/v1/tx.rpc.msg";
import * as _249 from "./core/client/v1/tx.rpc.msg";
import * as _250 from "./core/connection/v1/tx.rpc.msg";
import * as _251 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _256 from "./rpc.query";
import * as _257 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._105,
          ..._106,
          ..._107,
          ..._224,
          ..._231,
          ..._238,
          ..._245
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._108
        };
      }
      export namespace host {
        export const v1 = {
          ..._109,
          ..._110,
          ..._111,
          ..._225,
          ..._232,
          ..._239,
          ..._246
        };
      }
      export const v1 = {
        ..._112,
        ..._113,
        ..._114,
        ..._115
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._226,
        ..._233,
        ..._240,
        ..._247
      };
      export const v2 = {
        ..._121
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._126,
        ..._227,
        ..._234,
        ..._241,
        ..._248
      };
    }
    export namespace client {
      export const v1 = {
        ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._228,
        ..._235,
        ..._242,
        ..._249
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._131
      };
    }
    export namespace connection {
      export const v1 = {
        ..._132,
        ..._133,
        ..._134,
        ..._135,
        ..._229,
        ..._236,
        ..._243,
        ..._250
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._136
      };
      export const v2 = {
        ..._137
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._138
      };
      export const v2 = {
        ..._139
      };
      export const v3 = {
        ..._140
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._141
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._142,
        ..._143,
        ..._144,
        ..._145,
        ..._230,
        ..._237,
        ..._244,
        ..._251
      };
    }
  }
  export const ClientFactory = {
    ..._256,
    ..._257
  };
}