import * as _200 from "./abci/types";
import * as _201 from "./crypto/keys";
import * as _202 from "./crypto/proof";
import * as _203 from "./libs/bits/types";
import * as _204 from "./p2p/types";
import * as _205 from "./types/block";
import * as _206 from "./types/evidence";
import * as _207 from "./types/params";
import * as _208 from "./types/types";
import * as _209 from "./types/validator";
import * as _210 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._200
  };
  export const crypto = {
    ..._201,
    ..._202
  };
  export namespace libs {
    export const bits = {
      ..._203
    };
  }
  export const p2p = {
    ..._204
  };
  export const types = {
    ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._209
  };
  export const version = {
    ..._210
  };
}