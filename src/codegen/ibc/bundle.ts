import * as _87 from "./applications/fee/v1/ack";
import * as _88 from "./applications/fee/v1/fee";
import * as _89 from "./applications/fee/v1/genesis";
import * as _90 from "./applications/fee/v1/metadata";
import * as _91 from "./applications/fee/v1/query";
import * as _92 from "./applications/fee/v1/tx";
import * as _93 from "./applications/interchain_accounts/controller/v1/controller";
import * as _94 from "./applications/interchain_accounts/controller/v1/query";
import * as _95 from "./applications/interchain_accounts/host/v1/host";
import * as _96 from "./applications/interchain_accounts/host/v1/query";
import * as _97 from "./applications/interchain_accounts/v1/account";
import * as _98 from "./applications/interchain_accounts/v1/genesis";
import * as _99 from "./applications/interchain_accounts/v1/metadata";
import * as _100 from "./applications/interchain_accounts/v1/packet";
import * as _101 from "./applications/transfer/v1/genesis";
import * as _102 from "./applications/transfer/v1/query";
import * as _103 from "./applications/transfer/v1/transfer";
import * as _104 from "./applications/transfer/v1/tx";
import * as _105 from "./applications/transfer/v2/packet";
import * as _106 from "./core/channel/v1/channel";
import * as _107 from "./core/channel/v1/genesis";
import * as _108 from "./core/channel/v1/query";
import * as _109 from "./core/channel/v1/tx";
import * as _110 from "./core/client/v1/client";
import * as _111 from "./core/client/v1/genesis";
import * as _112 from "./core/client/v1/query";
import * as _113 from "./core/client/v1/tx";
import * as _114 from "./core/commitment/v1/commitment";
import * as _115 from "./core/connection/v1/connection";
import * as _116 from "./core/connection/v1/genesis";
import * as _117 from "./core/connection/v1/query";
import * as _118 from "./core/connection/v1/tx";
import * as _119 from "./core/types/v1/genesis";
import * as _120 from "./lightclients/localhost/v1/localhost";
import * as _121 from "./lightclients/solomachine/v1/solomachine";
import * as _122 from "./lightclients/solomachine/v2/solomachine";
import * as _123 from "./lightclients/tendermint/v1/tendermint";
import * as _201 from "./applications/fee/v1/tx.amino";
import * as _202 from "./applications/transfer/v1/tx.amino";
import * as _203 from "./core/channel/v1/tx.amino";
import * as _204 from "./core/client/v1/tx.amino";
import * as _205 from "./core/connection/v1/tx.amino";
import * as _206 from "./applications/fee/v1/tx.registry";
import * as _207 from "./applications/transfer/v1/tx.registry";
import * as _208 from "./core/channel/v1/tx.registry";
import * as _209 from "./core/client/v1/tx.registry";
import * as _210 from "./core/connection/v1/tx.registry";
import * as _211 from "./applications/fee/v1/query.lcd";
import * as _212 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _213 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _214 from "./applications/transfer/v1/query.lcd";
import * as _215 from "./core/channel/v1/query.lcd";
import * as _216 from "./core/client/v1/query.lcd";
import * as _217 from "./core/connection/v1/query.lcd";
import * as _218 from "./applications/fee/v1/query.rpc.Query";
import * as _219 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _220 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _221 from "./applications/transfer/v1/query.rpc.Query";
import * as _222 from "./core/channel/v1/query.rpc.Query";
import * as _223 from "./core/client/v1/query.rpc.Query";
import * as _224 from "./core/connection/v1/query.rpc.Query";
import * as _225 from "./applications/fee/v1/tx.rpc.msg";
import * as _226 from "./applications/transfer/v1/tx.rpc.msg";
import * as _227 from "./core/channel/v1/tx.rpc.msg";
import * as _228 from "./core/client/v1/tx.rpc.msg";
import * as _229 from "./core/connection/v1/tx.rpc.msg";
import * as _236 from "./lcd";
import * as _237 from "./rpc.query";
import * as _238 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._91,
        ..._92,
        ..._201,
        ..._206,
        ..._211,
        ..._218,
        ..._225
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._93,
          ..._94,
          ..._212,
          ..._219
        };
      }
      export namespace host {
        export const v1 = {
          ..._95,
          ..._96,
          ..._213,
          ..._220
        };
      }
      export const v1 = {
        ..._97,
        ..._98,
        ..._99,
        ..._100
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._101,
        ..._102,
        ..._103,
        ..._104,
        ..._202,
        ..._207,
        ..._214,
        ..._221,
        ..._226
      };
      export const v2 = {
        ..._105
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._203,
        ..._208,
        ..._215,
        ..._222,
        ..._227
      };
    }
    export namespace client {
      export const v1 = {
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._204,
        ..._209,
        ..._216,
        ..._223,
        ..._228
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._114
      };
    }
    export namespace connection {
      export const v1 = {
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._205,
        ..._210,
        ..._217,
        ..._224,
        ..._229
      };
    }
    export namespace types {
      export const v1 = {
        ..._119
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._120
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._121
      };
      export const v2 = {
        ..._122
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._123
      };
    }
  }
  export const ClientFactory = {
    ..._236,
    ..._237,
    ..._238
  };
}