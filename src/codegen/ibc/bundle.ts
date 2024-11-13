import * as _161 from "./applications/fee/v1/ack";
import * as _162 from "./applications/fee/v1/fee";
import * as _163 from "./applications/fee/v1/genesis";
import * as _164 from "./applications/fee/v1/metadata";
import * as _165 from "./applications/fee/v1/query";
import * as _166 from "./applications/fee/v1/tx";
import * as _167 from "./applications/interchain_accounts/controller/v1/controller";
import * as _168 from "./applications/interchain_accounts/controller/v1/query";
import * as _169 from "./applications/interchain_accounts/controller/v1/tx";
import * as _170 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _171 from "./applications/interchain_accounts/host/v1/host";
import * as _172 from "./applications/interchain_accounts/host/v1/query";
import * as _173 from "./applications/interchain_accounts/host/v1/tx";
import * as _174 from "./applications/interchain_accounts/v1/account";
import * as _175 from "./applications/interchain_accounts/v1/genesis";
import * as _176 from "./applications/interchain_accounts/v1/metadata";
import * as _177 from "./applications/interchain_accounts/v1/packet";
import * as _178 from "./applications/transfer/v1/authz";
import * as _179 from "./applications/transfer/v1/genesis";
import * as _180 from "./applications/transfer/v1/query";
import * as _181 from "./applications/transfer/v1/transfer";
import * as _182 from "./applications/transfer/v1/tx";
import * as _183 from "./applications/transfer/v2/packet";
import * as _184 from "./core/channel/v1/channel";
import * as _185 from "./core/channel/v1/genesis";
import * as _186 from "./core/channel/v1/query";
import * as _187 from "./core/channel/v1/tx";
import * as _188 from "./core/channel/v1/upgrade";
import * as _189 from "./core/client/v1/client";
import * as _190 from "./core/client/v1/genesis";
import * as _191 from "./core/client/v1/query";
import * as _192 from "./core/client/v1/tx";
import * as _193 from "./core/commitment/v1/commitment";
import * as _194 from "./core/connection/v1/connection";
import * as _195 from "./core/connection/v1/genesis";
import * as _196 from "./core/connection/v1/query";
import * as _197 from "./core/connection/v1/tx";
import * as _198 from "./core/types/v1/genesis";
import * as _199 from "./lightclients/localhost/v1/localhost";
import * as _200 from "./lightclients/localhost/v2/localhost";
import * as _201 from "./lightclients/solomachine/v1/solomachine";
import * as _202 from "./lightclients/solomachine/v2/solomachine";
import * as _203 from "./lightclients/solomachine/v3/solomachine";
import * as _204 from "./lightclients/tendermint/v1/tendermint";
import * as _205 from "./lightclients/wasm/v1/genesis";
import * as _206 from "./lightclients/wasm/v1/query";
import * as _207 from "./lightclients/wasm/v1/tx";
import * as _208 from "./lightclients/wasm/v1/wasm";
import * as _327 from "./applications/fee/v1/tx.amino";
import * as _328 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _329 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _330 from "./applications/transfer/v1/tx.amino";
import * as _331 from "./core/channel/v1/tx.amino";
import * as _332 from "./core/client/v1/tx.amino";
import * as _333 from "./core/connection/v1/tx.amino";
import * as _334 from "./lightclients/wasm/v1/tx.amino";
import * as _335 from "./applications/fee/v1/tx.registry";
import * as _336 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _337 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _338 from "./applications/transfer/v1/tx.registry";
import * as _339 from "./core/channel/v1/tx.registry";
import * as _340 from "./core/client/v1/tx.registry";
import * as _341 from "./core/connection/v1/tx.registry";
import * as _342 from "./lightclients/wasm/v1/tx.registry";
import * as _343 from "./applications/fee/v1/query.lcd";
import * as _344 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _345 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _346 from "./applications/transfer/v1/query.lcd";
import * as _347 from "./core/channel/v1/query.lcd";
import * as _348 from "./core/client/v1/query.lcd";
import * as _349 from "./core/connection/v1/query.lcd";
import * as _350 from "./lightclients/wasm/v1/query.lcd";
import * as _351 from "./applications/fee/v1/query.rpc.Query";
import * as _352 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _353 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _354 from "./applications/transfer/v1/query.rpc.Query";
import * as _355 from "./core/channel/v1/query.rpc.Query";
import * as _356 from "./core/client/v1/query.rpc.Query";
import * as _357 from "./core/connection/v1/query.rpc.Query";
import * as _358 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _359 from "./applications/fee/v1/tx.rpc.msg";
import * as _360 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _361 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _362 from "./applications/transfer/v1/tx.rpc.msg";
import * as _363 from "./core/channel/v1/tx.rpc.msg";
import * as _364 from "./core/client/v1/tx.rpc.msg";
import * as _365 from "./core/connection/v1/tx.rpc.msg";
import * as _366 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _373 from "./lcd";
import * as _374 from "./rpc.query";
import * as _375 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._166,
        ..._327,
        ..._335,
        ..._343,
        ..._351,
        ..._359
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._167,
          ..._168,
          ..._169,
          ..._328,
          ..._336,
          ..._344,
          ..._352,
          ..._360
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._170
        };
      }
      export namespace host {
        export const v1 = {
          ..._171,
          ..._172,
          ..._173,
          ..._329,
          ..._337,
          ..._345,
          ..._353,
          ..._361
        };
      }
      export const v1 = {
        ..._174,
        ..._175,
        ..._176,
        ..._177
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._178,
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._330,
        ..._338,
        ..._346,
        ..._354,
        ..._362
      };
      export const v2 = {
        ..._183
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._188,
        ..._331,
        ..._339,
        ..._347,
        ..._355,
        ..._363
      };
    }
    export namespace client {
      export const v1 = {
        ..._189,
        ..._190,
        ..._191,
        ..._192,
        ..._332,
        ..._340,
        ..._348,
        ..._356,
        ..._364
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._193
      };
    }
    export namespace connection {
      export const v1 = {
        ..._194,
        ..._195,
        ..._196,
        ..._197,
        ..._333,
        ..._341,
        ..._349,
        ..._357,
        ..._365
      };
    }
    export namespace types {
      export const v1 = {
        ..._198
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._199
      };
      export const v2 = {
        ..._200
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._201
      };
      export const v2 = {
        ..._202
      };
      export const v3 = {
        ..._203
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._204
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._205,
        ..._206,
        ..._207,
        ..._208,
        ..._334,
        ..._342,
        ..._350,
        ..._358,
        ..._366
      };
    }
  }
  export const ClientFactory = {
    ..._373,
    ..._374,
    ..._375
  };
}