import * as _156 from "./applications/fee/v1/ack";
import * as _157 from "./applications/fee/v1/fee";
import * as _158 from "./applications/fee/v1/genesis";
import * as _159 from "./applications/fee/v1/metadata";
import * as _160 from "./applications/fee/v1/query";
import * as _161 from "./applications/fee/v1/tx";
import * as _162 from "./applications/interchain_accounts/controller/v1/controller";
import * as _163 from "./applications/interchain_accounts/controller/v1/query";
import * as _164 from "./applications/interchain_accounts/controller/v1/tx";
import * as _165 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _166 from "./applications/interchain_accounts/host/v1/host";
import * as _167 from "./applications/interchain_accounts/host/v1/query";
import * as _168 from "./applications/interchain_accounts/host/v1/tx";
import * as _169 from "./applications/interchain_accounts/v1/account";
import * as _170 from "./applications/interchain_accounts/v1/genesis";
import * as _171 from "./applications/interchain_accounts/v1/metadata";
import * as _172 from "./applications/interchain_accounts/v1/packet";
import * as _173 from "./applications/transfer/v1/authz";
import * as _174 from "./applications/transfer/v1/genesis";
import * as _175 from "./applications/transfer/v1/query";
import * as _176 from "./applications/transfer/v1/transfer";
import * as _177 from "./applications/transfer/v1/tx";
import * as _178 from "./applications/transfer/v2/packet";
import * as _179 from "./core/channel/v1/channel";
import * as _180 from "./core/channel/v1/genesis";
import * as _181 from "./core/channel/v1/query";
import * as _182 from "./core/channel/v1/tx";
import * as _183 from "./core/channel/v1/upgrade";
import * as _184 from "./core/client/v1/client";
import * as _185 from "./core/client/v1/genesis";
import * as _186 from "./core/client/v1/query";
import * as _187 from "./core/client/v1/tx";
import * as _188 from "./core/commitment/v1/commitment";
import * as _189 from "./core/connection/v1/connection";
import * as _190 from "./core/connection/v1/genesis";
import * as _191 from "./core/connection/v1/query";
import * as _192 from "./core/connection/v1/tx";
import * as _193 from "./core/types/v1/genesis";
import * as _194 from "./lightclients/localhost/v1/localhost";
import * as _195 from "./lightclients/localhost/v2/localhost";
import * as _196 from "./lightclients/solomachine/v1/solomachine";
import * as _197 from "./lightclients/solomachine/v2/solomachine";
import * as _198 from "./lightclients/solomachine/v3/solomachine";
import * as _199 from "./lightclients/tendermint/v1/tendermint";
import * as _200 from "./lightclients/wasm/v1/genesis";
import * as _201 from "./lightclients/wasm/v1/query";
import * as _202 from "./lightclients/wasm/v1/tx";
import * as _203 from "./lightclients/wasm/v1/wasm";
import * as _332 from "./applications/fee/v1/tx.amino";
import * as _333 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _334 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _335 from "./applications/transfer/v1/tx.amino";
import * as _336 from "./core/channel/v1/tx.amino";
import * as _337 from "./core/client/v1/tx.amino";
import * as _338 from "./core/connection/v1/tx.amino";
import * as _339 from "./lightclients/wasm/v1/tx.amino";
import * as _340 from "./applications/fee/v1/tx.registry";
import * as _341 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _342 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _343 from "./applications/transfer/v1/tx.registry";
import * as _344 from "./core/channel/v1/tx.registry";
import * as _345 from "./core/client/v1/tx.registry";
import * as _346 from "./core/connection/v1/tx.registry";
import * as _347 from "./lightclients/wasm/v1/tx.registry";
import * as _348 from "./applications/fee/v1/query.lcd";
import * as _349 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _350 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _351 from "./applications/transfer/v1/query.lcd";
import * as _352 from "./core/channel/v1/query.lcd";
import * as _353 from "./core/client/v1/query.lcd";
import * as _354 from "./core/connection/v1/query.lcd";
import * as _355 from "./lightclients/wasm/v1/query.lcd";
import * as _356 from "./applications/fee/v1/query.rpc.Query";
import * as _357 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _358 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _359 from "./applications/transfer/v1/query.rpc.Query";
import * as _360 from "./core/channel/v1/query.rpc.Query";
import * as _361 from "./core/client/v1/query.rpc.Query";
import * as _362 from "./core/connection/v1/query.rpc.Query";
import * as _363 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _364 from "./applications/fee/v1/tx.rpc.msg";
import * as _365 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _366 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _367 from "./applications/transfer/v1/tx.rpc.msg";
import * as _368 from "./core/channel/v1/tx.rpc.msg";
import * as _369 from "./core/client/v1/tx.rpc.msg";
import * as _370 from "./core/connection/v1/tx.rpc.msg";
import * as _371 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _381 from "./lcd";
import * as _382 from "./rpc.query";
import * as _383 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._332,
        ..._340,
        ..._348,
        ..._356,
        ..._364
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._162,
          ..._163,
          ..._164,
          ..._333,
          ..._341,
          ..._349,
          ..._357,
          ..._365
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._165
        };
      }
      export namespace host {
        export const v1 = {
          ..._166,
          ..._167,
          ..._168,
          ..._334,
          ..._342,
          ..._350,
          ..._358,
          ..._366
        };
      }
      export const v1 = {
        ..._169,
        ..._170,
        ..._171,
        ..._172
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._177,
        ..._335,
        ..._343,
        ..._351,
        ..._359,
        ..._367
      };
      export const v2 = {
        ..._178
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._336,
        ..._344,
        ..._352,
        ..._360,
        ..._368
      };
    }
    export namespace client {
      export const v1 = {
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._337,
        ..._345,
        ..._353,
        ..._361,
        ..._369
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._188
      };
    }
    export namespace connection {
      export const v1 = {
        ..._189,
        ..._190,
        ..._191,
        ..._192,
        ..._338,
        ..._346,
        ..._354,
        ..._362,
        ..._370
      };
    }
    export namespace types {
      export const v1 = {
        ..._193
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._194
      };
      export const v2 = {
        ..._195
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._196
      };
      export const v2 = {
        ..._197
      };
      export const v3 = {
        ..._198
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._199
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._200,
        ..._201,
        ..._202,
        ..._203,
        ..._339,
        ..._347,
        ..._355,
        ..._363,
        ..._371
      };
    }
  }
  export const ClientFactory = {
    ..._381,
    ..._382,
    ..._383
  };
}