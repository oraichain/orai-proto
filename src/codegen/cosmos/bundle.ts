import * as _4 from "./app/runtime/v1alpha1/module";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./auth/v1beta1/tx";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/node/v1beta1/query";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/v1beta1/coin";
import * as _24 from "./circuit/v1/query";
import * as _25 from "./circuit/v1/tx";
import * as _26 from "./circuit/v1/types";
import * as _27 from "./consensus/v1/query";
import * as _28 from "./consensus/v1/tx";
import * as _29 from "./crypto/ed25519/keys";
import * as _30 from "./crypto/hd/v1/hd";
import * as _31 from "./crypto/keyring/v1/record";
import * as _32 from "./crypto/multisig/keys";
import * as _33 from "./crypto/secp256k1/keys";
import * as _34 from "./crypto/secp256r1/keys";
import * as _35 from "./distribution/v1beta1/distribution";
import * as _36 from "./distribution/v1beta1/genesis";
import * as _37 from "./distribution/v1beta1/query";
import * as _38 from "./distribution/v1beta1/tx";
import * as _39 from "./feegrant/v1beta1/feegrant";
import * as _40 from "./feegrant/v1beta1/genesis";
import * as _41 from "./feegrant/v1beta1/query";
import * as _42 from "./feegrant/v1beta1/tx";
import * as _43 from "./gov/v1/genesis";
import * as _44 from "./gov/v1/gov";
import * as _45 from "./gov/v1/query";
import * as _46 from "./gov/v1/tx";
import * as _47 from "./gov/v1beta1/genesis";
import * as _48 from "./gov/v1beta1/gov";
import * as _49 from "./gov/v1beta1/query";
import * as _50 from "./gov/v1beta1/tx";
import * as _51 from "./group/v1/events";
import * as _52 from "./group/v1/genesis";
import * as _53 from "./group/v1/query";
import * as _54 from "./group/v1/tx";
import * as _55 from "./group/v1/types";
import * as _56 from "./ics23/v1/proofs";
import * as _57 from "./mint/v1beta1/genesis";
import * as _58 from "./mint/v1beta1/mint";
import * as _59 from "./mint/v1beta1/query";
import * as _60 from "./mint/v1beta1/tx";
import * as _61 from "./msg/textual/v1/textual";
import * as _62 from "./orm/query/v1alpha1/query";
import * as _63 from "./params/v1beta1/params";
import * as _64 from "./params/v1beta1/query";
import * as _65 from "./query/v1/query";
import * as _66 from "./reflection/v1/reflection";
import * as _67 from "./staking/v1beta1/authz";
import * as _68 from "./staking/v1beta1/genesis";
import * as _69 from "./staking/v1beta1/query";
import * as _70 from "./staking/v1beta1/staking";
import * as _71 from "./staking/v1beta1/tx";
import * as _72 from "./store/internal/kv/v1beta1/kv";
import * as _73 from "./store/snapshots/v1/snapshot";
import * as _74 from "./store/streaming/abci/grpc";
import * as _75 from "./store/v1beta1/commit_info";
import * as _76 from "./store/v1beta1/listening";
import * as _77 from "./tx/config/v1/config";
import * as _78 from "./tx/signing/v1beta1/signing";
import * as _79 from "./tx/v1beta1/service";
import * as _80 from "./tx/v1beta1/tx";
import * as _81 from "./upgrade/v1beta1/query";
import * as _82 from "./upgrade/v1beta1/tx";
import * as _83 from "./upgrade/v1beta1/upgrade";
import * as _84 from "./vesting/v1beta1/tx";
import * as _85 from "./vesting/v1beta1/vesting";
import * as _157 from "./auth/v1beta1/tx.amino";
import * as _158 from "./authz/v1beta1/tx.amino";
import * as _159 from "./bank/v1beta1/tx.amino";
import * as _160 from "./circuit/v1/tx.amino";
import * as _161 from "./consensus/v1/tx.amino";
import * as _162 from "./distribution/v1beta1/tx.amino";
import * as _163 from "./feegrant/v1beta1/tx.amino";
import * as _164 from "./gov/v1/tx.amino";
import * as _165 from "./gov/v1beta1/tx.amino";
import * as _166 from "./group/v1/tx.amino";
import * as _167 from "./mint/v1beta1/tx.amino";
import * as _168 from "./staking/v1beta1/tx.amino";
import * as _169 from "./upgrade/v1beta1/tx.amino";
import * as _170 from "./vesting/v1beta1/tx.amino";
import * as _171 from "./auth/v1beta1/tx.registry";
import * as _172 from "./authz/v1beta1/tx.registry";
import * as _173 from "./bank/v1beta1/tx.registry";
import * as _174 from "./circuit/v1/tx.registry";
import * as _175 from "./consensus/v1/tx.registry";
import * as _176 from "./distribution/v1beta1/tx.registry";
import * as _177 from "./feegrant/v1beta1/tx.registry";
import * as _178 from "./gov/v1/tx.registry";
import * as _179 from "./gov/v1beta1/tx.registry";
import * as _180 from "./group/v1/tx.registry";
import * as _181 from "./mint/v1beta1/tx.registry";
import * as _182 from "./staking/v1beta1/tx.registry";
import * as _183 from "./upgrade/v1beta1/tx.registry";
import * as _184 from "./vesting/v1beta1/tx.registry";
import * as _185 from "./auth/v1beta1/query.rpc.Query";
import * as _186 from "./authz/v1beta1/query.rpc.Query";
import * as _187 from "./bank/v1beta1/query.rpc.Query";
import * as _188 from "./base/node/v1beta1/query.rpc.Service";
import * as _189 from "./circuit/v1/query.rpc.Query";
import * as _190 from "./consensus/v1/query.rpc.Query";
import * as _191 from "./distribution/v1beta1/query.rpc.Query";
import * as _192 from "./feegrant/v1beta1/query.rpc.Query";
import * as _193 from "./gov/v1/query.rpc.Query";
import * as _194 from "./gov/v1beta1/query.rpc.Query";
import * as _195 from "./group/v1/query.rpc.Query";
import * as _196 from "./mint/v1beta1/query.rpc.Query";
import * as _197 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _198 from "./params/v1beta1/query.rpc.Query";
import * as _199 from "./staking/v1beta1/query.rpc.Query";
import * as _200 from "./tx/v1beta1/service.rpc.Service";
import * as _201 from "./upgrade/v1beta1/query.rpc.Query";
import * as _202 from "./auth/v1beta1/tx.rpc.msg";
import * as _203 from "./authz/v1beta1/tx.rpc.msg";
import * as _204 from "./bank/v1beta1/tx.rpc.msg";
import * as _205 from "./circuit/v1/tx.rpc.msg";
import * as _206 from "./consensus/v1/tx.rpc.msg";
import * as _207 from "./distribution/v1beta1/tx.rpc.msg";
import * as _208 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _209 from "./gov/v1/tx.rpc.msg";
import * as _210 from "./gov/v1beta1/tx.rpc.msg";
import * as _211 from "./group/v1/tx.rpc.msg";
import * as _212 from "./mint/v1beta1/tx.rpc.msg";
import * as _213 from "./staking/v1beta1/tx.rpc.msg";
import * as _214 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _215 from "./vesting/v1beta1/tx.rpc.msg";
import * as _252 from "./rpc.query";
import * as _253 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._4
      };
    }
  }
  export namespace auth {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._157,
      ..._171,
      ..._185,
      ..._202
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._158,
      ..._172,
      ..._186,
      ..._203
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._159,
      ..._173,
      ..._187,
      ..._204
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._20,
        ..._188
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._22
      };
    }
    export const v1beta1 = {
      ..._23
    };
  }
  export namespace circuit {
    export const v1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._160,
      ..._174,
      ..._189,
      ..._205
    };
  }
  export namespace consensus {
    export const v1 = {
      ..._27,
      ..._28,
      ..._161,
      ..._175,
      ..._190,
      ..._206
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._29
    };
    export namespace hd {
      export const v1 = {
        ..._30
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._31
      };
    }
    export const multisig = {
      ..._32
    };
    export const secp256k1 = {
      ..._33
    };
    export const secp256r1 = {
      ..._34
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._162,
      ..._176,
      ..._191,
      ..._207
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._163,
      ..._177,
      ..._192,
      ..._208
    };
  }
  export namespace gov {
    export const v1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._164,
      ..._178,
      ..._193,
      ..._209
    };
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._165,
      ..._179,
      ..._194,
      ..._210
    };
  }
  export namespace group {
    export const v1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._166,
      ..._180,
      ..._195,
      ..._211
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._56
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._167,
      ..._181,
      ..._196,
      ..._212
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._61
      };
    }
  }
  export namespace orm {
    export namespace query {
      export const v1alpha1 = {
        ..._62,
        ..._197
      };
    }
  }
  export namespace params {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._198
    };
  }
  export namespace query {
    export const v1 = {
      ..._65
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._66
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._168,
      ..._182,
      ..._199,
      ..._213
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._72
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._73
      };
    }
    export namespace streaming {
      export const abci = {
        ..._74
      };
    }
    export const v1beta1 = {
      ..._75,
      ..._76
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._77
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._78
      };
    }
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._200
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._169,
      ..._183,
      ..._201,
      ..._214
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._170,
      ..._184,
      ..._215
    };
  }
  export const ClientFactory = {
    ..._252,
    ..._253
  };
}