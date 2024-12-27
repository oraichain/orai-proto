import * as _4 from "./app/runtime/v1alpha1/module";
import * as _5 from "./auth/module/v1/module";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./auth/v1beta1/tx";
import * as _10 from "./authz/module/v1/module";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/module/v1/module";
import * as _17 from "./bank/v1beta1/authz";
import * as _18 from "./bank/v1beta1/bank";
import * as _19 from "./bank/v1beta1/genesis";
import * as _20 from "./bank/v1beta1/query";
import * as _21 from "./bank/v1beta1/tx";
import * as _22 from "./base/abci/v1beta1/abci";
import * as _23 from "./base/node/v1beta1/query";
import * as _24 from "./base/query/v1beta1/pagination";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./circuit/module/v1/module";
import * as _28 from "./circuit/v1/query";
import * as _29 from "./circuit/v1/tx";
import * as _30 from "./circuit/v1/types";
import * as _31 from "./consensus/module/v1/module";
import * as _32 from "./consensus/v1/query";
import * as _33 from "./consensus/v1/tx";
import * as _34 from "./crisis/module/v1/module";
import * as _35 from "./crypto/ed25519/keys";
import * as _36 from "./crypto/hd/v1/hd";
import * as _37 from "./crypto/keyring/v1/record";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/module/v1/module";
import * as _42 from "./distribution/v1beta1/distribution";
import * as _43 from "./distribution/v1beta1/genesis";
import * as _44 from "./distribution/v1beta1/query";
import * as _45 from "./distribution/v1beta1/tx";
import * as _46 from "./evidence/module/v1/module";
import * as _47 from "./feegrant/module/v1/module";
import * as _48 from "./feegrant/v1beta1/feegrant";
import * as _49 from "./feegrant/v1beta1/genesis";
import * as _50 from "./feegrant/v1beta1/query";
import * as _51 from "./feegrant/v1beta1/tx";
import * as _52 from "./genutil/module/v1/module";
import * as _53 from "./gov/module/v1/module";
import * as _54 from "./gov/v1/genesis";
import * as _55 from "./gov/v1/gov";
import * as _56 from "./gov/v1/query";
import * as _57 from "./gov/v1/tx";
import * as _58 from "./gov/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/gov";
import * as _60 from "./gov/v1beta1/query";
import * as _61 from "./gov/v1beta1/tx";
import * as _62 from "./group/module/v1/module";
import * as _63 from "./group/v1/events";
import * as _64 from "./group/v1/genesis";
import * as _65 from "./group/v1/query";
import * as _66 from "./group/v1/tx";
import * as _67 from "./group/v1/types";
import * as _68 from "./ics23/v1/proofs";
import * as _69 from "./mint/module/v1/module";
import * as _70 from "./mint/v1beta1/genesis";
import * as _71 from "./mint/v1beta1/mint";
import * as _72 from "./mint/v1beta1/query";
import * as _73 from "./mint/v1beta1/tx";
import * as _74 from "./msg/textual/v1/textual";
import * as _75 from "./nft/module/v1/module";
import * as _76 from "./orm/module/v1alpha1/module";
import * as _77 from "./orm/query/v1alpha1/query";
import * as _78 from "./params/module/v1/module";
import * as _79 from "./params/v1beta1/params";
import * as _80 from "./params/v1beta1/query";
import * as _81 from "./query/v1/query";
import * as _82 from "./reflection/v1/reflection";
import * as _83 from "./slashing/module/v1/module";
import * as _84 from "./staking/module/v1/module";
import * as _85 from "./staking/v1beta1/authz";
import * as _86 from "./staking/v1beta1/genesis";
import * as _87 from "./staking/v1beta1/query";
import * as _88 from "./staking/v1beta1/staking";
import * as _89 from "./staking/v1beta1/tx";
import * as _90 from "./store/internal/kv/v1beta1/kv";
import * as _91 from "./store/snapshots/v1/snapshot";
import * as _92 from "./store/streaming/abci/grpc";
import * as _93 from "./store/v1beta1/commit_info";
import * as _94 from "./store/v1beta1/listening";
import * as _95 from "./tx/config/v1/config";
import * as _96 from "./tx/signing/v1beta1/signing";
import * as _97 from "./tx/v1beta1/service";
import * as _98 from "./tx/v1beta1/tx";
import * as _99 from "./upgrade/module/v1/module";
import * as _100 from "./upgrade/v1beta1/query";
import * as _101 from "./upgrade/v1beta1/tx";
import * as _102 from "./upgrade/v1beta1/upgrade";
import * as _103 from "./vesting/module/v1/module";
import * as _104 from "./vesting/v1beta1/tx";
import * as _105 from "./vesting/v1beta1/vesting";
import * as _177 from "./auth/v1beta1/tx.amino";
import * as _178 from "./authz/v1beta1/tx.amino";
import * as _179 from "./bank/v1beta1/tx.amino";
import * as _180 from "./circuit/v1/tx.amino";
import * as _181 from "./consensus/v1/tx.amino";
import * as _182 from "./distribution/v1beta1/tx.amino";
import * as _183 from "./feegrant/v1beta1/tx.amino";
import * as _184 from "./gov/v1/tx.amino";
import * as _185 from "./gov/v1beta1/tx.amino";
import * as _186 from "./group/v1/tx.amino";
import * as _187 from "./mint/v1beta1/tx.amino";
import * as _188 from "./staking/v1beta1/tx.amino";
import * as _189 from "./upgrade/v1beta1/tx.amino";
import * as _190 from "./vesting/v1beta1/tx.amino";
import * as _191 from "./auth/v1beta1/tx.registry";
import * as _192 from "./authz/v1beta1/tx.registry";
import * as _193 from "./bank/v1beta1/tx.registry";
import * as _194 from "./circuit/v1/tx.registry";
import * as _195 from "./consensus/v1/tx.registry";
import * as _196 from "./distribution/v1beta1/tx.registry";
import * as _197 from "./feegrant/v1beta1/tx.registry";
import * as _198 from "./gov/v1/tx.registry";
import * as _199 from "./gov/v1beta1/tx.registry";
import * as _200 from "./group/v1/tx.registry";
import * as _201 from "./mint/v1beta1/tx.registry";
import * as _202 from "./staking/v1beta1/tx.registry";
import * as _203 from "./upgrade/v1beta1/tx.registry";
import * as _204 from "./vesting/v1beta1/tx.registry";
import * as _205 from "./auth/v1beta1/query.rpc.Query";
import * as _206 from "./authz/v1beta1/query.rpc.Query";
import * as _207 from "./bank/v1beta1/query.rpc.Query";
import * as _208 from "./base/node/v1beta1/query.rpc.Service";
import * as _209 from "./circuit/v1/query.rpc.Query";
import * as _210 from "./consensus/v1/query.rpc.Query";
import * as _211 from "./distribution/v1beta1/query.rpc.Query";
import * as _212 from "./feegrant/v1beta1/query.rpc.Query";
import * as _213 from "./gov/v1/query.rpc.Query";
import * as _214 from "./gov/v1beta1/query.rpc.Query";
import * as _215 from "./group/v1/query.rpc.Query";
import * as _216 from "./mint/v1beta1/query.rpc.Query";
import * as _217 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _218 from "./params/v1beta1/query.rpc.Query";
import * as _219 from "./staking/v1beta1/query.rpc.Query";
import * as _220 from "./tx/v1beta1/service.rpc.Service";
import * as _221 from "./upgrade/v1beta1/query.rpc.Query";
import * as _222 from "./auth/v1beta1/tx.rpc.msg";
import * as _223 from "./authz/v1beta1/tx.rpc.msg";
import * as _224 from "./bank/v1beta1/tx.rpc.msg";
import * as _225 from "./circuit/v1/tx.rpc.msg";
import * as _226 from "./consensus/v1/tx.rpc.msg";
import * as _227 from "./distribution/v1beta1/tx.rpc.msg";
import * as _228 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _229 from "./gov/v1/tx.rpc.msg";
import * as _230 from "./gov/v1beta1/tx.rpc.msg";
import * as _231 from "./group/v1/tx.rpc.msg";
import * as _232 from "./mint/v1beta1/tx.rpc.msg";
import * as _233 from "./staking/v1beta1/tx.rpc.msg";
import * as _234 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _235 from "./vesting/v1beta1/tx.rpc.msg";
import * as _272 from "./rpc.query";
import * as _273 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._4
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._5
      };
    }
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._177,
      ..._191,
      ..._205,
      ..._222
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._10
      };
    }
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._178,
      ..._192,
      ..._206,
      ..._223
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._16
      };
    }
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._179,
      ..._193,
      ..._207,
      ..._224
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._23,
        ..._208
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._24
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._25
      };
    }
    export const v1beta1 = {
      ..._26
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._27
      };
    }
    export const v1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._180,
      ..._194,
      ..._209,
      ..._225
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._31
      };
    }
    export const v1 = {
      ..._32,
      ..._33,
      ..._181,
      ..._195,
      ..._210,
      ..._226
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._34
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._35
    };
    export namespace hd {
      export const v1 = {
        ..._36
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._37
      };
    }
    export const multisig = {
      ..._38
    };
    export const secp256k1 = {
      ..._39
    };
    export const secp256r1 = {
      ..._40
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._41
      };
    }
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._182,
      ..._196,
      ..._211,
      ..._227
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._46
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._47
      };
    }
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._183,
      ..._197,
      ..._212,
      ..._228
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._52
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._53
      };
    }
    export const v1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._184,
      ..._198,
      ..._213,
      ..._229
    };
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._185,
      ..._199,
      ..._214,
      ..._230
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
    export const v1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._186,
      ..._200,
      ..._215,
      ..._231
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._68
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._187,
      ..._201,
      ..._216,
      ..._232
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._74
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._75
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._76
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._77,
        ..._217
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._218
    };
  }
  export namespace query {
    export const v1 = {
      ..._81
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._82
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._188,
      ..._202,
      ..._219,
      ..._233
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._90
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._91
      };
    }
    export namespace streaming {
      export const abci = {
        ..._92
      };
    }
    export const v1beta1 = {
      ..._93,
      ..._94
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._95
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._96
      };
    }
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._220
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._99
      };
    }
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._102,
      ..._189,
      ..._203,
      ..._221,
      ..._234
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._190,
      ..._204,
      ..._235
    };
  }
  export const ClientFactory = {
    ..._272,
    ..._273
  };
}