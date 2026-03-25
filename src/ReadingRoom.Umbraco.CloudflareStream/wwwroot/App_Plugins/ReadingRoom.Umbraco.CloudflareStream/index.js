import { r as xo, i as hs, x as Fe, E as zt, a as Yo, n as Me, b as st, t as Zo } from "./state-DBYjh2Ug.js";
import { UmbElementMixin as tu } from "@umbraco-cms/backoffice/element-api";
import { c as Dn } from "./shared-DtVjuqT4.js";
import { UmbLitElement as ru } from "@umbraco-cms/backoffice/lit-element";
import { UMB_AUTH_CONTEXT as iu } from "@umbraco-cms/backoffice/auth";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ou = (r, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(r, e, t), t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function nu(r, e) {
  return (t, i, o) => {
    const n = (a) => a.renderRoot?.querySelector(r) ?? null;
    return ou(t, i, { get() {
      return n(this);
    } });
  };
}
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var In = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Tn;
function au() {
  if (Tn) return In;
  Tn = 1;
  var r;
  return function(e) {
    (function(t) {
      var i = typeof globalThis == "object" ? globalThis : typeof ut == "object" ? ut : typeof self == "object" ? self : typeof this == "object" ? this : l(), o = n(e);
      typeof i.Reflect < "u" && (o = n(i.Reflect, o)), t(o, i), typeof i.Reflect > "u" && (i.Reflect = e);
      function n(u, p) {
        return function(c, f) {
          Object.defineProperty(u, c, { configurable: !0, writable: !0, value: f }), p && p(c, f);
        };
      }
      function a() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function s() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function l() {
        return a() || s();
      }
    })(function(t, i) {
      var o = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", a = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", s = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", l = typeof Object.create == "function", u = { __proto__: [] } instanceof Array, p = !l && !u, c = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: l ? function() {
          return xi(/* @__PURE__ */ Object.create(null));
        } : u ? function() {
          return xi({ __proto__: null });
        } : function() {
          return xi({});
        },
        has: p ? function(b, v) {
          return o.call(b, v);
        } : function(b, v) {
          return v in b;
        },
        get: p ? function(b, v) {
          return o.call(b, v) ? b[v] : void 0;
        } : function(b, v) {
          return b[v];
        }
      }, f = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Yl(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Zl(), O = typeof WeakMap == "function" ? WeakMap : Jl(), x = n ? Symbol.for("@reflect-metadata:registry") : void 0, D = Vl(), m = Kl(D);
      function w(b, v, k, z) {
        if (R(k)) {
          if (!vn(b))
            throw new TypeError();
          if (!wn(v))
            throw new TypeError();
          return B(b, v);
        } else {
          if (!vn(b))
            throw new TypeError();
          if (!K(v))
            throw new TypeError();
          if (!K(z) && !R(z) && !V(z))
            throw new TypeError();
          return V(z) && (z = void 0), k = He(k), ie(b, v, k, z);
        }
      }
      t("decorate", w);
      function _(b, v) {
        function k(z, H) {
          if (!K(z))
            throw new TypeError();
          if (!R(H) && !Wl(H))
            throw new TypeError();
          F(b, v, z, H);
        }
        return k;
      }
      t("metadata", _);
      function S(b, v, k, z) {
        if (!K(k))
          throw new TypeError();
        return R(z) || (z = He(z)), F(b, v, k, z);
      }
      t("defineMetadata", S);
      function E(b, v, k) {
        if (!K(v))
          throw new TypeError();
        return R(k) || (k = He(k)), se(b, v, k);
      }
      t("hasMetadata", E);
      function A(b, v, k) {
        if (!K(v))
          throw new TypeError();
        return R(k) || (k = He(k)), y(b, v, k);
      }
      t("hasOwnMetadata", A);
      function U(b, v, k) {
        if (!K(v))
          throw new TypeError();
        return R(k) || (k = He(k)), h(b, v, k);
      }
      t("getMetadata", U);
      function j(b, v, k) {
        if (!K(v))
          throw new TypeError();
        return R(k) || (k = He(k)), g(b, v, k);
      }
      t("getOwnMetadata", j);
      function ee(b, v) {
        if (!K(b))
          throw new TypeError();
        return R(v) || (v = He(v)), C(b, v);
      }
      t("getMetadataKeys", ee);
      function J(b, v) {
        if (!K(b))
          throw new TypeError();
        return R(v) || (v = He(v)), I(b, v);
      }
      t("getOwnMetadataKeys", J);
      function re(b, v, k) {
        if (!K(v))
          throw new TypeError();
        if (R(k) || (k = He(k)), !K(v))
          throw new TypeError();
        R(k) || (k = He(k));
        var z = Yt(
          v,
          k,
          /*Create*/
          !1
        );
        return R(z) ? !1 : z.OrdinaryDeleteMetadata(b, v, k);
      }
      t("deleteMetadata", re);
      function B(b, v) {
        for (var k = b.length - 1; k >= 0; --k) {
          var z = b[k], H = z(v);
          if (!R(H) && !V(H)) {
            if (!wn(H))
              throw new TypeError();
            v = H;
          }
        }
        return v;
      }
      function ie(b, v, k, z) {
        for (var H = b.length - 1; H >= 0; --H) {
          var ye = b[H], he = ye(v, k, z);
          if (!R(he) && !V(he)) {
            if (!K(he))
              throw new TypeError();
            z = he;
          }
        }
        return z;
      }
      function se(b, v, k) {
        var z = y(b, v, k);
        if (z)
          return !0;
        var H = wi(v);
        return V(H) ? !1 : se(b, H, k);
      }
      function y(b, v, k) {
        var z = Yt(
          v,
          k,
          /*Create*/
          !1
        );
        return R(z) ? !1 : ht(z.OrdinaryHasOwnMetadata(b, v, k));
      }
      function h(b, v, k) {
        var z = y(b, v, k);
        if (z)
          return g(b, v, k);
        var H = wi(v);
        if (!V(H))
          return h(b, H, k);
      }
      function g(b, v, k) {
        var z = Yt(
          v,
          k,
          /*Create*/
          !1
        );
        if (!R(z))
          return z.OrdinaryGetOwnMetadata(b, v, k);
      }
      function F(b, v, k, z) {
        var H = Yt(
          k,
          z,
          /*Create*/
          !0
        );
        H.OrdinaryDefineOwnMetadata(b, v, k, z);
      }
      function C(b, v) {
        var k = I(b, v), z = wi(b);
        if (z === null)
          return k;
        var H = C(z, v);
        if (H.length <= 0)
          return k;
        if (k.length <= 0)
          return H;
        for (var ye = new T(), he = [], Y = 0, N = k; Y < N.length; Y++) {
          var L = N[Y], $ = ye.has(L);
          $ || (ye.add(L), he.push(L));
        }
        for (var q = 0, Z = H; q < Z.length; q++) {
          var L = Z[q], $ = ye.has(L);
          $ || (ye.add(L), he.push(L));
        }
        return he;
      }
      function I(b, v) {
        var k = Yt(
          b,
          v,
          /*create*/
          !1
        );
        return k ? k.OrdinaryOwnMetadataKeys(b, v) : [];
      }
      function W(b) {
        if (b === null)
          return 1;
        switch (typeof b) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return b === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function R(b) {
        return b === void 0;
      }
      function V(b) {
        return b === null;
      }
      function de(b) {
        return typeof b == "symbol";
      }
      function K(b) {
        return typeof b == "object" ? b !== null : typeof b == "function";
      }
      function fe(b, v) {
        switch (W(b)) {
          case 0:
            return b;
          case 1:
            return b;
          case 2:
            return b;
          case 3:
            return b;
          case 4:
            return b;
          case 5:
            return b;
        }
        var k = "string", z = xn(b, a);
        if (z !== void 0) {
          var H = z.call(b, k);
          if (K(H))
            throw new TypeError();
          return H;
        }
        return bn(b);
      }
      function bn(b, v) {
        var k, z;
        {
          var H = b.toString;
          if ($r(H)) {
            var z = H.call(b);
            if (!K(z))
              return z;
          }
          var k = b.valueOf;
          if ($r(k)) {
            var z = k.call(b);
            if (!K(z))
              return z;
          }
        }
        throw new TypeError();
      }
      function ht(b) {
        return !!b;
      }
      function Hl(b) {
        return "" + b;
      }
      function He(b) {
        var v = fe(b);
        return de(v) ? v : Hl(v);
      }
      function vn(b) {
        return Array.isArray ? Array.isArray(b) : b instanceof Object ? b instanceof Array : Object.prototype.toString.call(b) === "[object Array]";
      }
      function $r(b) {
        return typeof b == "function";
      }
      function wn(b) {
        return typeof b == "function";
      }
      function Wl(b) {
        switch (W(b)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function vi(b, v) {
        return b === v || b !== b && v !== v;
      }
      function xn(b, v) {
        var k = b[v];
        if (k != null) {
          if (!$r(k))
            throw new TypeError();
          return k;
        }
      }
      function _n(b) {
        var v = xn(b, s);
        if (!$r(v))
          throw new TypeError();
        var k = v.call(b);
        if (!K(k))
          throw new TypeError();
        return k;
      }
      function Sn(b) {
        return b.value;
      }
      function Pn(b) {
        var v = b.next();
        return v.done ? !1 : v;
      }
      function kn(b) {
        var v = b.return;
        v && v.call(b);
      }
      function wi(b) {
        var v = Object.getPrototypeOf(b);
        if (typeof b != "function" || b === f || v !== f)
          return v;
        var k = b.prototype, z = k && Object.getPrototypeOf(k);
        if (z == null || z === Object.prototype)
          return v;
        var H = z.constructor;
        return typeof H != "function" || H === b ? v : H;
      }
      function Gl() {
        var b;
        !R(x) && typeof i.Reflect < "u" && !(x in i.Reflect) && typeof i.Reflect.defineMetadata == "function" && (b = Xl(i.Reflect));
        var v, k, z, H = new O(), ye = {
          registerProvider: he,
          getProvider: N,
          setProvider: $
        };
        return ye;
        function he(q) {
          if (!Object.isExtensible(ye))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case b === q:
              break;
            case R(v):
              v = q;
              break;
            case v === q:
              break;
            case R(k):
              k = q;
              break;
            case k === q:
              break;
            default:
              z === void 0 && (z = new T()), z.add(q);
              break;
          }
        }
        function Y(q, Z) {
          if (!R(v)) {
            if (v.isProviderFor(q, Z))
              return v;
            if (!R(k)) {
              if (k.isProviderFor(q, Z))
                return v;
              if (!R(z))
                for (var ne = _n(z); ; ) {
                  var ue = Pn(ne);
                  if (!ue)
                    return;
                  var ze = Sn(ue);
                  if (ze.isProviderFor(q, Z))
                    return kn(ne), ze;
                }
            }
          }
          if (!R(b) && b.isProviderFor(q, Z))
            return b;
        }
        function N(q, Z) {
          var ne = H.get(q), ue;
          return R(ne) || (ue = ne.get(Z)), R(ue) && (ue = Y(q, Z), R(ue) || (R(ne) && (ne = new P(), H.set(q, ne)), ne.set(Z, ue))), ue;
        }
        function L(q) {
          if (R(q))
            throw new TypeError();
          return v === q || k === q || !R(z) && z.has(q);
        }
        function $(q, Z, ne) {
          if (!L(ne))
            throw new Error("Metadata provider not registered.");
          var ue = N(q, Z);
          if (ue !== ne) {
            if (!R(ue))
              return !1;
            var ze = H.get(q);
            R(ze) && (ze = new P(), H.set(q, ze)), ze.set(Z, ne);
          }
          return !0;
        }
      }
      function Vl() {
        var b;
        return !R(x) && K(i.Reflect) && Object.isExtensible(i.Reflect) && (b = i.Reflect[x]), R(b) && (b = Gl()), !R(x) && K(i.Reflect) && Object.isExtensible(i.Reflect) && Object.defineProperty(i.Reflect, x, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: b
        }), b;
      }
      function Kl(b) {
        var v = new O(), k = {
          isProviderFor: function(L, $) {
            var q = v.get(L);
            return R(q) ? !1 : q.has($);
          },
          OrdinaryDefineOwnMetadata: he,
          OrdinaryHasOwnMetadata: H,
          OrdinaryGetOwnMetadata: ye,
          OrdinaryOwnMetadataKeys: Y,
          OrdinaryDeleteMetadata: N
        };
        return D.registerProvider(k), k;
        function z(L, $, q) {
          var Z = v.get(L), ne = !1;
          if (R(Z)) {
            if (!q)
              return;
            Z = new P(), v.set(L, Z), ne = !0;
          }
          var ue = Z.get($);
          if (R(ue)) {
            if (!q)
              return;
            if (ue = new P(), Z.set($, ue), !b.setProvider(L, $, k))
              throw Z.delete($), ne && v.delete(L), new Error("Wrong provider for target.");
          }
          return ue;
        }
        function H(L, $, q) {
          var Z = z(
            $,
            q,
            /*Create*/
            !1
          );
          return R(Z) ? !1 : ht(Z.has(L));
        }
        function ye(L, $, q) {
          var Z = z(
            $,
            q,
            /*Create*/
            !1
          );
          if (!R(Z))
            return Z.get(L);
        }
        function he(L, $, q, Z) {
          var ne = z(
            q,
            Z,
            /*Create*/
            !0
          );
          ne.set(L, $);
        }
        function Y(L, $) {
          var q = [], Z = z(
            L,
            $,
            /*Create*/
            !1
          );
          if (R(Z))
            return q;
          for (var ne = Z.keys(), ue = _n(ne), ze = 0; ; ) {
            var Fn = Pn(ue);
            if (!Fn)
              return q.length = ze, q;
            var Ql = Sn(Fn);
            try {
              q[ze] = Ql;
            } catch (eu) {
              try {
                kn(ue);
              } finally {
                throw eu;
              }
            }
            ze++;
          }
        }
        function N(L, $, q) {
          var Z = z(
            $,
            q,
            /*Create*/
            !1
          );
          if (R(Z) || !Z.delete(L))
            return !1;
          if (Z.size === 0) {
            var ne = v.get($);
            R(ne) || (ne.delete(q), ne.size === 0 && v.delete(ne));
          }
          return !0;
        }
      }
      function Xl(b) {
        var v = b.defineMetadata, k = b.hasOwnMetadata, z = b.getOwnMetadata, H = b.getOwnMetadataKeys, ye = b.deleteMetadata, he = new O(), Y = {
          isProviderFor: function(N, L) {
            var $ = he.get(N);
            return !R($) && $.has(L) ? !0 : H(N, L).length ? (R($) && ($ = new T(), he.set(N, $)), $.add(L), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: v,
          OrdinaryHasOwnMetadata: k,
          OrdinaryGetOwnMetadata: z,
          OrdinaryOwnMetadataKeys: H,
          OrdinaryDeleteMetadata: ye
        };
        return Y;
      }
      function Yt(b, v, k) {
        var z = D.getProvider(b, v);
        if (!R(z))
          return z;
        if (k) {
          if (D.setProvider(b, v, m))
            return m;
          throw new Error("Illegal state.");
        }
      }
      function Yl() {
        var b = {}, v = [], k = (
          /** @class */
          function() {
            function Y(N, L, $) {
              this._index = 0, this._keys = N, this._values = L, this._selector = $;
            }
            return Y.prototype["@@iterator"] = function() {
              return this;
            }, Y.prototype[s] = function() {
              return this;
            }, Y.prototype.next = function() {
              var N = this._index;
              if (N >= 0 && N < this._keys.length) {
                var L = this._selector(this._keys[N], this._values[N]);
                return N + 1 >= this._keys.length ? (this._index = -1, this._keys = v, this._values = v) : this._index++, { value: L, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, Y.prototype.throw = function(N) {
              throw this._index >= 0 && (this._index = -1, this._keys = v, this._values = v), N;
            }, Y.prototype.return = function(N) {
              return this._index >= 0 && (this._index = -1, this._keys = v, this._values = v), { value: N, done: !0 };
            }, Y;
          }()
        ), z = (
          /** @class */
          function() {
            function Y() {
              this._keys = [], this._values = [], this._cacheKey = b, this._cacheIndex = -2;
            }
            return Object.defineProperty(Y.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), Y.prototype.has = function(N) {
              return this._find(
                N,
                /*insert*/
                !1
              ) >= 0;
            }, Y.prototype.get = function(N) {
              var L = this._find(
                N,
                /*insert*/
                !1
              );
              return L >= 0 ? this._values[L] : void 0;
            }, Y.prototype.set = function(N, L) {
              var $ = this._find(
                N,
                /*insert*/
                !0
              );
              return this._values[$] = L, this;
            }, Y.prototype.delete = function(N) {
              var L = this._find(
                N,
                /*insert*/
                !1
              );
              if (L >= 0) {
                for (var $ = this._keys.length, q = L + 1; q < $; q++)
                  this._keys[q - 1] = this._keys[q], this._values[q - 1] = this._values[q];
                return this._keys.length--, this._values.length--, vi(N, this._cacheKey) && (this._cacheKey = b, this._cacheIndex = -2), !0;
              }
              return !1;
            }, Y.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = b, this._cacheIndex = -2;
            }, Y.prototype.keys = function() {
              return new k(this._keys, this._values, H);
            }, Y.prototype.values = function() {
              return new k(this._keys, this._values, ye);
            }, Y.prototype.entries = function() {
              return new k(this._keys, this._values, he);
            }, Y.prototype["@@iterator"] = function() {
              return this.entries();
            }, Y.prototype[s] = function() {
              return this.entries();
            }, Y.prototype._find = function(N, L) {
              if (!vi(this._cacheKey, N)) {
                this._cacheIndex = -1;
                for (var $ = 0; $ < this._keys.length; $++)
                  if (vi(this._keys[$], N)) {
                    this._cacheIndex = $;
                    break;
                  }
              }
              return this._cacheIndex < 0 && L && (this._cacheIndex = this._keys.length, this._keys.push(N), this._values.push(void 0)), this._cacheIndex;
            }, Y;
          }()
        );
        return z;
        function H(Y, N) {
          return Y;
        }
        function ye(Y, N) {
          return N;
        }
        function he(Y, N) {
          return [Y, N];
        }
      }
      function Zl() {
        var b = (
          /** @class */
          function() {
            function v() {
              this._map = new P();
            }
            return Object.defineProperty(v.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), v.prototype.has = function(k) {
              return this._map.has(k);
            }, v.prototype.add = function(k) {
              return this._map.set(k, k), this;
            }, v.prototype.delete = function(k) {
              return this._map.delete(k);
            }, v.prototype.clear = function() {
              this._map.clear();
            }, v.prototype.keys = function() {
              return this._map.keys();
            }, v.prototype.values = function() {
              return this._map.keys();
            }, v.prototype.entries = function() {
              return this._map.entries();
            }, v.prototype["@@iterator"] = function() {
              return this.keys();
            }, v.prototype[s] = function() {
              return this.keys();
            }, v;
          }()
        );
        return b;
      }
      function Jl() {
        var b = 16, v = c.create(), k = z();
        return (
          /** @class */
          function() {
            function N() {
              this._key = z();
            }
            return N.prototype.has = function(L) {
              var $ = H(
                L,
                /*create*/
                !1
              );
              return $ !== void 0 ? c.has($, this._key) : !1;
            }, N.prototype.get = function(L) {
              var $ = H(
                L,
                /*create*/
                !1
              );
              return $ !== void 0 ? c.get($, this._key) : void 0;
            }, N.prototype.set = function(L, $) {
              var q = H(
                L,
                /*create*/
                !0
              );
              return q[this._key] = $, this;
            }, N.prototype.delete = function(L) {
              var $ = H(
                L,
                /*create*/
                !1
              );
              return $ !== void 0 ? delete $[this._key] : !1;
            }, N.prototype.clear = function() {
              this._key = z();
            }, N;
          }()
        );
        function z() {
          var N;
          do
            N = "@@WeakMap@@" + Y();
          while (c.has(v, N));
          return v[N] = !0, N;
        }
        function H(N, L) {
          if (!o.call(N, k)) {
            if (!L)
              return;
            Object.defineProperty(N, k, { value: c.create() });
          }
          return N[k];
        }
        function ye(N, L) {
          for (var $ = 0; $ < L; ++$)
            N[$] = Math.random() * 255 | 0;
          return N;
        }
        function he(N) {
          if (typeof Uint8Array == "function") {
            var L = new Uint8Array(N);
            return typeof crypto < "u" ? crypto.getRandomValues(L) : typeof msCrypto < "u" ? msCrypto.getRandomValues(L) : ye(L, N), L;
          }
          return ye(new Array(N), N);
        }
        function Y() {
          var N = he(b);
          N[6] = N[6] & 79 | 64, N[8] = N[8] & 191 | 128;
          for (var L = "", $ = 0; $ < b; ++$) {
            var q = N[$];
            ($ === 4 || $ === 6 || $ === 8) && (L += "-"), q < 16 && (L += "0"), L += q.toString(16).toLowerCase();
          }
          return L;
        }
      }
      function xi(b) {
        return b.__ = void 0, delete b.__, b;
      }
    });
  }(r || (r = {})), In;
}
au();
var X;
(function(r) {
  r[r.PLAIN_TO_CLASS = 0] = "PLAIN_TO_CLASS", r[r.CLASS_TO_PLAIN = 1] = "CLASS_TO_PLAIN", r[r.CLASS_TO_CLASS = 2] = "CLASS_TO_CLASS";
})(X || (X = {}));
var su = (
  /** @class */
  function() {
    function r() {
      this._typeMetadatas = /* @__PURE__ */ new Map(), this._transformMetadatas = /* @__PURE__ */ new Map(), this._exposeMetadatas = /* @__PURE__ */ new Map(), this._excludeMetadatas = /* @__PURE__ */ new Map(), this._ancestorsMap = /* @__PURE__ */ new Map();
    }
    return r.prototype.addTypeMetadata = function(e) {
      this._typeMetadatas.has(e.target) || this._typeMetadatas.set(e.target, /* @__PURE__ */ new Map()), this._typeMetadatas.get(e.target).set(e.propertyName, e);
    }, r.prototype.addTransformMetadata = function(e) {
      this._transformMetadatas.has(e.target) || this._transformMetadatas.set(e.target, /* @__PURE__ */ new Map()), this._transformMetadatas.get(e.target).has(e.propertyName) || this._transformMetadatas.get(e.target).set(e.propertyName, []), this._transformMetadatas.get(e.target).get(e.propertyName).push(e);
    }, r.prototype.addExposeMetadata = function(e) {
      this._exposeMetadatas.has(e.target) || this._exposeMetadatas.set(e.target, /* @__PURE__ */ new Map()), this._exposeMetadatas.get(e.target).set(e.propertyName, e);
    }, r.prototype.addExcludeMetadata = function(e) {
      this._excludeMetadatas.has(e.target) || this._excludeMetadatas.set(e.target, /* @__PURE__ */ new Map()), this._excludeMetadatas.get(e.target).set(e.propertyName, e);
    }, r.prototype.findTransformMetadatas = function(e, t, i) {
      return this.findMetadatas(this._transformMetadatas, e, t).filter(function(o) {
        return !o.options || o.options.toClassOnly === !0 && o.options.toPlainOnly === !0 ? !0 : o.options.toClassOnly === !0 ? i === X.CLASS_TO_CLASS || i === X.PLAIN_TO_CLASS : o.options.toPlainOnly === !0 ? i === X.CLASS_TO_PLAIN : !0;
      });
    }, r.prototype.findExcludeMetadata = function(e, t) {
      return this.findMetadata(this._excludeMetadatas, e, t);
    }, r.prototype.findExposeMetadata = function(e, t) {
      return this.findMetadata(this._exposeMetadatas, e, t);
    }, r.prototype.findExposeMetadataByCustomName = function(e, t) {
      return this.getExposedMetadatas(e).find(function(i) {
        return i.options && i.options.name === t;
      });
    }, r.prototype.findTypeMetadata = function(e, t) {
      return this.findMetadata(this._typeMetadatas, e, t);
    }, r.prototype.getStrategy = function(e) {
      var t = this._excludeMetadatas.get(e), i = t && t.get(void 0), o = this._exposeMetadatas.get(e), n = o && o.get(void 0);
      return i && n || !i && !n ? "none" : i ? "excludeAll" : "exposeAll";
    }, r.prototype.getExposedMetadatas = function(e) {
      return this.getMetadata(this._exposeMetadatas, e);
    }, r.prototype.getExcludedMetadatas = function(e) {
      return this.getMetadata(this._excludeMetadatas, e);
    }, r.prototype.getExposedProperties = function(e, t) {
      return this.getExposedMetadatas(e).filter(function(i) {
        return !i.options || i.options.toClassOnly === !0 && i.options.toPlainOnly === !0 ? !0 : i.options.toClassOnly === !0 ? t === X.CLASS_TO_CLASS || t === X.PLAIN_TO_CLASS : i.options.toPlainOnly === !0 ? t === X.CLASS_TO_PLAIN : !0;
      }).map(function(i) {
        return i.propertyName;
      });
    }, r.prototype.getExcludedProperties = function(e, t) {
      return this.getExcludedMetadatas(e).filter(function(i) {
        return !i.options || i.options.toClassOnly === !0 && i.options.toPlainOnly === !0 ? !0 : i.options.toClassOnly === !0 ? t === X.CLASS_TO_CLASS || t === X.PLAIN_TO_CLASS : i.options.toPlainOnly === !0 ? t === X.CLASS_TO_PLAIN : !0;
      }).map(function(i) {
        return i.propertyName;
      });
    }, r.prototype.clear = function() {
      this._typeMetadatas.clear(), this._exposeMetadatas.clear(), this._excludeMetadatas.clear(), this._ancestorsMap.clear();
    }, r.prototype.getMetadata = function(e, t) {
      var i = e.get(t), o;
      i && (o = Array.from(i.values()).filter(function(c) {
        return c.propertyName !== void 0;
      }));
      for (var n = [], a = 0, s = this.getAncestors(t); a < s.length; a++) {
        var l = s[a], u = e.get(l);
        if (u) {
          var p = Array.from(u.values()).filter(function(c) {
            return c.propertyName !== void 0;
          });
          n.push.apply(n, p);
        }
      }
      return n.concat(o || []);
    }, r.prototype.findMetadata = function(e, t, i) {
      var o = e.get(t);
      if (o) {
        var n = o.get(i);
        if (n)
          return n;
      }
      for (var a = 0, s = this.getAncestors(t); a < s.length; a++) {
        var l = s[a], u = e.get(l);
        if (u) {
          var p = u.get(i);
          if (p)
            return p;
        }
      }
    }, r.prototype.findMetadatas = function(e, t, i) {
      var o = e.get(t), n;
      o && (n = o.get(i));
      for (var a = [], s = 0, l = this.getAncestors(t); s < l.length; s++) {
        var u = l[s], p = e.get(u);
        p && p.has(i) && a.push.apply(a, p.get(i));
      }
      return a.slice().reverse().concat((n || []).slice().reverse());
    }, r.prototype.getAncestors = function(e) {
      if (!e)
        return [];
      if (!this._ancestorsMap.has(e)) {
        for (var t = [], i = Object.getPrototypeOf(e.prototype.constructor); typeof i.prototype < "u"; i = Object.getPrototypeOf(i.prototype.constructor))
          t.push(i);
        this._ancestorsMap.set(e, t);
      }
      return this._ancestorsMap.get(e);
    }, r;
  }()
), Pe = new su();
function lu() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof global < "u")
    return global;
  if (typeof window < "u")
    return window;
  if (typeof self < "u")
    return self;
}
function uu(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var Bn = function(r, e, t) {
  if (t || arguments.length === 2) for (var i = 0, o = e.length, n; i < o; i++)
    (n || !(i in e)) && (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
  return r.concat(n || Array.prototype.slice.call(e));
};
function pu(r) {
  var e = new r();
  return !(e instanceof Set) && !("push" in e) ? [] : e;
}
var Ot = (
  /** @class */
  function() {
    function r(e, t) {
      this.transformationType = e, this.options = t, this.recursionStack = /* @__PURE__ */ new Set();
    }
    return r.prototype.transform = function(e, t, i, o, n, a) {
      var s = this;
      if (a === void 0 && (a = 0), Array.isArray(t) || t instanceof Set) {
        var l = o && this.transformationType === X.PLAIN_TO_CLASS ? pu(o) : [];
        return t.forEach(function(x, D) {
          var m = e ? e[D] : void 0;
          if (!s.options.enableCircularCheck || !s.isCircular(x)) {
            var w = void 0;
            if (typeof i != "function" && i && i.options && i.options.discriminator && i.options.discriminator.property && i.options.discriminator.subTypes) {
              if (s.transformationType === X.PLAIN_TO_CLASS) {
                w = i.options.discriminator.subTypes.find(function(A) {
                  return A.name === x[i.options.discriminator.property];
                });
                var _ = { newObject: l, object: x, property: void 0 }, S = i.typeFunction(_);
                w === void 0 ? w = S : w = w.value, i.options.keepDiscriminatorProperty || delete x[i.options.discriminator.property];
              }
              s.transformationType === X.CLASS_TO_CLASS && (w = x.constructor), s.transformationType === X.CLASS_TO_PLAIN && (x[i.options.discriminator.property] = i.options.discriminator.subTypes.find(function(A) {
                return A.value === x.constructor;
              }).name);
            } else
              w = i;
            var E = s.transform(m, x, w, void 0, x instanceof Map, a + 1);
            l instanceof Set ? l.add(E) : l.push(E);
          } else s.transformationType === X.CLASS_TO_CLASS && (l instanceof Set ? l.add(x) : l.push(x));
        }), l;
      } else {
        if (i === String && !n)
          return t == null ? t : String(t);
        if (i === Number && !n)
          return t == null ? t : Number(t);
        if (i === Boolean && !n)
          return t == null ? t : !!t;
        if ((i === Date || t instanceof Date) && !n)
          return t instanceof Date ? new Date(t.valueOf()) : t == null ? t : new Date(t);
        if (lu().Buffer && (i === Buffer || t instanceof Buffer) && !n)
          return t == null ? t : Buffer.from(t);
        if (uu(t) && !n)
          return new Promise(function(x, D) {
            t.then(function(m) {
              return x(s.transform(void 0, m, i, void 0, void 0, a + 1));
            }, D);
          });
        if (!n && t !== null && typeof t == "object" && typeof t.then == "function")
          return t;
        if (typeof t == "object" && t !== null) {
          !i && t.constructor !== Object && (!Array.isArray(t) && t.constructor === Array || (i = t.constructor)), !i && e && (i = e.constructor), this.options.enableCircularCheck && this.recursionStack.add(t);
          var u = this.getKeys(i, t, n), p = e || {};
          !e && (this.transformationType === X.PLAIN_TO_CLASS || this.transformationType === X.CLASS_TO_CLASS) && (n ? p = /* @__PURE__ */ new Map() : i ? p = new i() : p = {});
          for (var c = function(x) {
            if (x === "__proto__" || x === "constructor")
              return "continue";
            var D = x, m = x, w = x;
            if (!f.options.ignoreDecorators && i) {
              if (f.transformationType === X.PLAIN_TO_CLASS) {
                var _ = Pe.findExposeMetadataByCustomName(i, x);
                _ && (w = _.propertyName, m = _.propertyName);
              } else if (f.transformationType === X.CLASS_TO_PLAIN || f.transformationType === X.CLASS_TO_CLASS) {
                var _ = Pe.findExposeMetadata(i, x);
                _ && _.options && _.options.name && (m = _.options.name);
              }
            }
            var S = void 0;
            f.transformationType === X.PLAIN_TO_CLASS ? S = t[D] : t instanceof Map ? S = t.get(D) : t[D] instanceof Function ? S = t[D]() : S = t[D];
            var E = void 0, A = S instanceof Map;
            if (i && n)
              E = i;
            else if (i) {
              var U = Pe.findTypeMetadata(i, w);
              if (U) {
                var j = { newObject: p, object: t, property: w }, ee = U.typeFunction ? U.typeFunction(j) : U.reflectedType;
                U.options && U.options.discriminator && U.options.discriminator.property && U.options.discriminator.subTypes ? t[D] instanceof Array ? E = U : (f.transformationType === X.PLAIN_TO_CLASS && (E = U.options.discriminator.subTypes.find(function(h) {
                  if (S && S instanceof Object && U.options.discriminator.property in S)
                    return h.name === S[U.options.discriminator.property];
                }), E === void 0 ? E = ee : E = E.value, U.options.keepDiscriminatorProperty || S && S instanceof Object && U.options.discriminator.property in S && delete S[U.options.discriminator.property]), f.transformationType === X.CLASS_TO_CLASS && (E = S.constructor), f.transformationType === X.CLASS_TO_PLAIN && S && (S[U.options.discriminator.property] = U.options.discriminator.subTypes.find(function(h) {
                  return h.value === S.constructor;
                }).name)) : E = ee, A = A || U.reflectedType === Map;
              } else if (f.options.targetMaps)
                f.options.targetMaps.filter(function(h) {
                  return h.target === i && !!h.properties[w];
                }).forEach(function(h) {
                  return E = h.properties[w];
                });
              else if (f.options.enableImplicitConversion && f.transformationType === X.PLAIN_TO_CLASS) {
                var J = Reflect.getMetadata("design:type", i.prototype, w);
                J && (E = J);
              }
            }
            var re = Array.isArray(t[D]) ? f.getReflectedType(i, w) : void 0, B = e ? e[D] : void 0;
            if (p.constructor.prototype) {
              var ie = Object.getOwnPropertyDescriptor(p.constructor.prototype, m);
              if ((f.transformationType === X.PLAIN_TO_CLASS || f.transformationType === X.CLASS_TO_CLASS) && // eslint-disable-next-line @typescript-eslint/unbound-method
              (ie && !ie.set || p[m] instanceof Function))
                return "continue";
            }
            if (!f.options.enableCircularCheck || !f.isCircular(S)) {
              var se = f.transformationType === X.PLAIN_TO_CLASS ? m : x, y = void 0;
              f.transformationType === X.CLASS_TO_PLAIN ? (y = t[se], y = f.applyCustomTransformations(y, i, se, t, f.transformationType), y = t[se] === y ? S : y, y = f.transform(B, y, E, re, A, a + 1)) : S === void 0 && f.options.exposeDefaultValues ? y = p[m] : (y = f.transform(B, S, E, re, A, a + 1), y = f.applyCustomTransformations(y, i, se, t, f.transformationType)), (y !== void 0 || f.options.exposeUnsetFields) && (p instanceof Map ? p.set(m, y) : p[m] = y);
            } else if (f.transformationType === X.CLASS_TO_CLASS) {
              var y = S;
              y = f.applyCustomTransformations(y, i, x, t, f.transformationType), (y !== void 0 || f.options.exposeUnsetFields) && (p instanceof Map ? p.set(m, y) : p[m] = y);
            }
          }, f = this, P = 0, T = u; P < T.length; P++) {
            var O = T[P];
            c(O);
          }
          return this.options.enableCircularCheck && this.recursionStack.delete(t), p;
        } else
          return t;
      }
    }, r.prototype.applyCustomTransformations = function(e, t, i, o, n) {
      var a = this, s = Pe.findTransformMetadatas(t, i, this.transformationType);
      return this.options.version !== void 0 && (s = s.filter(function(l) {
        return l.options ? a.checkVersion(l.options.since, l.options.until) : !0;
      })), this.options.groups && this.options.groups.length ? s = s.filter(function(l) {
        return l.options ? a.checkGroups(l.options.groups) : !0;
      }) : s = s.filter(function(l) {
        return !l.options || !l.options.groups || !l.options.groups.length;
      }), s.forEach(function(l) {
        e = l.transformFn({ value: e, key: i, obj: o, type: n, options: a.options });
      }), e;
    }, r.prototype.isCircular = function(e) {
      return this.recursionStack.has(e);
    }, r.prototype.getReflectedType = function(e, t) {
      if (e) {
        var i = Pe.findTypeMetadata(e, t);
        return i ? i.reflectedType : void 0;
      }
    }, r.prototype.getKeys = function(e, t, i) {
      var o = this, n = Pe.getStrategy(e);
      n === "none" && (n = this.options.strategy || "exposeAll");
      var a = [];
      if ((n === "exposeAll" || i) && (t instanceof Map ? a = Array.from(t.keys()) : a = Object.keys(t)), i)
        return a;
      if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && e) {
        var s = Pe.getExposedProperties(e, this.transformationType), l = Pe.getExcludedProperties(e, this.transformationType);
        a = Bn(Bn([], s, !0), l, !0);
      }
      if (!this.options.ignoreDecorators && e) {
        var s = Pe.getExposedProperties(e, this.transformationType);
        this.transformationType === X.PLAIN_TO_CLASS && (s = s.map(function(c) {
          var f = Pe.findExposeMetadata(e, c);
          return f && f.options && f.options.name ? f.options.name : c;
        })), this.options.excludeExtraneousValues ? a = s : a = a.concat(s);
        var u = Pe.getExcludedProperties(e, this.transformationType);
        u.length > 0 && (a = a.filter(function(c) {
          return !u.includes(c);
        })), this.options.version !== void 0 && (a = a.filter(function(c) {
          var f = Pe.findExposeMetadata(e, c);
          return !f || !f.options ? !0 : o.checkVersion(f.options.since, f.options.until);
        })), this.options.groups && this.options.groups.length ? a = a.filter(function(c) {
          var f = Pe.findExposeMetadata(e, c);
          return !f || !f.options ? !0 : o.checkGroups(f.options.groups);
        }) : a = a.filter(function(c) {
          var f = Pe.findExposeMetadata(e, c);
          return !f || !f.options || !f.options.groups || !f.options.groups.length;
        });
      }
      return this.options.excludePrefixes && this.options.excludePrefixes.length && (a = a.filter(function(p) {
        return o.options.excludePrefixes.every(function(c) {
          return p.substr(0, c.length) !== c;
        });
      })), a = a.filter(function(p, c, f) {
        return f.indexOf(p) === c;
      }), a;
    }, r.prototype.checkVersion = function(e, t) {
      var i = !0;
      return i && e && (i = this.options.version >= e), i && t && (i = this.options.version < t), i;
    }, r.prototype.checkGroups = function(e) {
      return e ? this.options.groups.some(function(t) {
        return e.includes(t);
      }) : !0;
    }, r;
  }()
), Et = {
  enableCircularCheck: !1,
  enableImplicitConversion: !1,
  excludeExtraneousValues: !1,
  excludePrefixes: void 0,
  exposeDefaultValues: !1,
  exposeUnsetFields: !0,
  groups: void 0,
  ignoreDecorators: !1,
  strategy: void 0,
  targetMaps: void 0,
  version: void 0
}, Te = function() {
  return Te = Object.assign || function(r) {
    for (var e, t = 1, i = arguments.length; t < i; t++) {
      e = arguments[t];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
    }
    return r;
  }, Te.apply(this, arguments);
}, du = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.instanceToPlain = function(e, t) {
      var i = new Ot(X.CLASS_TO_PLAIN, Te(Te({}, Et), t));
      return i.transform(void 0, e, void 0, void 0, void 0, void 0);
    }, r.prototype.classToPlainFromExist = function(e, t, i) {
      var o = new Ot(X.CLASS_TO_PLAIN, Te(Te({}, Et), i));
      return o.transform(t, e, void 0, void 0, void 0, void 0);
    }, r.prototype.plainToInstance = function(e, t, i) {
      var o = new Ot(X.PLAIN_TO_CLASS, Te(Te({}, Et), i));
      return o.transform(void 0, t, e, void 0, void 0, void 0);
    }, r.prototype.plainToClassFromExist = function(e, t, i) {
      var o = new Ot(X.PLAIN_TO_CLASS, Te(Te({}, Et), i));
      return o.transform(e, t, void 0, void 0, void 0, void 0);
    }, r.prototype.instanceToInstance = function(e, t) {
      var i = new Ot(X.CLASS_TO_CLASS, Te(Te({}, Et), t));
      return i.transform(void 0, e, void 0, void 0, void 0, void 0);
    }, r.prototype.classToClassFromExist = function(e, t, i) {
      var o = new Ot(X.CLASS_TO_CLASS, Te(Te({}, Et), i));
      return o.transform(t, e, void 0, void 0, void 0, void 0);
    }, r.prototype.serialize = function(e, t) {
      return JSON.stringify(this.instanceToPlain(e, t));
    }, r.prototype.deserialize = function(e, t, i) {
      var o = JSON.parse(t);
      return this.plainToInstance(e, o, i);
    }, r.prototype.deserializeArray = function(e, t, i) {
      var o = JSON.parse(t);
      return this.plainToInstance(e, o, i);
    }, r;
  }()
);
function Vt(r, e) {
  return e === void 0 && (e = {}), function(t, i) {
    var o = Reflect.getMetadata("design:type", t, i);
    Pe.addTypeMetadata({
      target: t.constructor,
      propertyName: i,
      reflectedType: o,
      typeFunction: r,
      options: e
    });
  };
}
var cu = new du();
function hu(r, e, t) {
  return cu.plainToInstance(r, e, t);
}
class fs {
  constructor() {
    this.ErrorReasonCode = "", this.ErrorReasonText = "", this.PctComplete = "", this.State = "";
  }
}
class ys {
  constructor() {
    this.Height = 0, this.Width = 0;
  }
}
class ms {
  constructor() {
    this.Name = "";
  }
}
class gs {
  constructor() {
    this.Dash = "", this.Hls = "", this.Frame = "";
  }
}
class bs {
  constructor() {
    this.Created = /* @__PURE__ */ new Date(), this.DownloadedFrom = "", this.Height = 0, this.Name = "", this.Opacity = 0, this.Padding = 0, this.Position = "", this.Scale = 0, this.Size = 0, this.Uid = "", this.Width = 0;
  }
}
var fu = Object.defineProperty, Nr = (r, e, t, i) => {
  for (var o = void 0, n = r.length - 1, a; n >= 0; n--)
    (a = r[n]) && (o = a(e, t, o) || o);
  return o && fu(e, t, o), o;
};
class Ct {
  constructor() {
    this.AllowedOrigins = [], this.Created = /* @__PURE__ */ new Date(), this.Creator = "", this.Duration = 0, this.Input = new ys(), this.LiveInput = "", this.MaxDurationSeconds = 0, this.Meta = new ms(), this.Modified = /* @__PURE__ */ new Date(), this.Playback = new gs(), this.Preview = "", this.ReadyToStream = !1, this.ReadyToStreamAt = /* @__PURE__ */ new Date(), this.RequireSignedURLs = !1, this.ScheduledDeletion = /* @__PURE__ */ new Date(), this.Size = 0, this.Status = new fs(), this.Thumbnail = "", this.ThumbnailTimestampPct = 0, this.Uid = "", this.UploadExpiry = /* @__PURE__ */ new Date(), this.Uploaded = /* @__PURE__ */ new Date(), this.Watermark = new bs();
  }
}
Nr([
  Vt(() => ys)
], Ct.prototype, "Input");
Nr([
  Vt(() => ms)
], Ct.prototype, "Meta");
Nr([
  Vt(() => gs)
], Ct.prototype, "Playback");
Nr([
  Vt(() => fs)
], Ct.prototype, "Status");
Nr([
  Vt(() => bs)
], Ct.prototype, "Watermark");
var yu = Object.defineProperty, mu = (r, e, t, i) => {
  for (var o = void 0, n = r.length - 1, a; n >= 0; n--)
    (a = r[n]) && (o = a(e, t, o) || o);
  return o && yu(e, t, o), o;
};
class vs {
  constructor() {
    this.Errors = [], this.Messages = [], this.Result = new Ct(), this.Success = !1;
  }
}
mu([
  Vt(() => Ct)
], vs.prototype, "Result");
class $t {
  static {
    this.baseurl = "/umbraco/backoffice/api/cloudflarestream";
  }
  static {
    this.initialiseEndpoint = `${$t.baseurl}/initialise`;
  }
  static {
    this.statusEndpoint = `${$t.baseurl}/status`;
  }
  static async getVideoDetails(e) {
    try {
      const t = await fetch(`${$t.statusEndpoint}?id=${e}`);
      if (t.status === 404)
        return;
      const i = await t.json();
      return hu(vs, i);
    } catch (t) {
      throw console.error("There has been a problem with your fetch operation:", t), t;
    }
  }
}
class Cn {
  static {
    this.DOWNLOADING = "downloading";
  }
  static {
    this.QUEUED = "queued";
  }
  static {
    this.IN_PROGRESS = "inprogress";
  }
  static {
    this.READY = "ready";
  }
  static {
    this.ERROR = "error";
  }
  static {
    this.PENDING_UPLOAD = "pendingupload";
  }
}
let ws = {};
const On = /* @__PURE__ */ new WeakMap(), En = {
  metric: [
    { from: 0, to: 1e3, unit: "B", long: "bytes" },
    { from: 1e3, to: 1e6, unit: "kB", long: "kilobytes" },
    { from: 1e6, to: 1e9, unit: "MB", long: "megabytes" },
    { from: 1e9, to: 1e12, unit: "GB", long: "gigabytes" },
    { from: 1e12, to: 1e15, unit: "TB", long: "terabytes" },
    { from: 1e15, to: 1e18, unit: "PB", long: "petabytes" },
    { from: 1e18, to: 1e21, unit: "EB", long: "exabytes" },
    { from: 1e21, to: 1e24, unit: "ZB", long: "zettabytes" },
    { from: 1e24, to: 1e27, unit: "YB", long: "yottabytes" }
  ],
  metric_octet: [
    { from: 0, to: 1e3, unit: "o", long: "octets" },
    { from: 1e3, to: 1e6, unit: "ko", long: "kilooctets" },
    { from: 1e6, to: 1e9, unit: "Mo", long: "megaoctets" },
    { from: 1e9, to: 1e12, unit: "Go", long: "gigaoctets" },
    { from: 1e12, to: 1e15, unit: "To", long: "teraoctets" },
    { from: 1e15, to: 1e18, unit: "Po", long: "petaoctets" },
    { from: 1e18, to: 1e21, unit: "Eo", long: "exaoctets" },
    { from: 1e21, to: 1e24, unit: "Zo", long: "zettaoctets" },
    { from: 1e24, to: 1e27, unit: "Yo", long: "yottaoctets" }
  ],
  iec: [
    { from: 0, to: Math.pow(1024, 1), unit: "B", long: "bytes" },
    { from: Math.pow(1024, 1), to: Math.pow(1024, 2), unit: "KiB", long: "kibibytes" },
    { from: Math.pow(1024, 2), to: Math.pow(1024, 3), unit: "MiB", long: "mebibytes" },
    { from: Math.pow(1024, 3), to: Math.pow(1024, 4), unit: "GiB", long: "gibibytes" },
    { from: Math.pow(1024, 4), to: Math.pow(1024, 5), unit: "TiB", long: "tebibytes" },
    { from: Math.pow(1024, 5), to: Math.pow(1024, 6), unit: "PiB", long: "pebibytes" },
    { from: Math.pow(1024, 6), to: Math.pow(1024, 7), unit: "EiB", long: "exbibytes" },
    { from: Math.pow(1024, 7), to: Math.pow(1024, 8), unit: "ZiB", long: "zebibytes" },
    { from: Math.pow(1024, 8), to: Math.pow(1024, 9), unit: "YiB", long: "yobibytes" }
  ],
  iec_octet: [
    { from: 0, to: Math.pow(1024, 1), unit: "o", long: "octets" },
    { from: Math.pow(1024, 1), to: Math.pow(1024, 2), unit: "Kio", long: "kibioctets" },
    { from: Math.pow(1024, 2), to: Math.pow(1024, 3), unit: "Mio", long: "mebioctets" },
    { from: Math.pow(1024, 3), to: Math.pow(1024, 4), unit: "Gio", long: "gibioctets" },
    { from: Math.pow(1024, 4), to: Math.pow(1024, 5), unit: "Tio", long: "tebioctets" },
    { from: Math.pow(1024, 5), to: Math.pow(1024, 6), unit: "Pio", long: "pebioctets" },
    { from: Math.pow(1024, 6), to: Math.pow(1024, 7), unit: "Eio", long: "exbioctets" },
    { from: Math.pow(1024, 7), to: Math.pow(1024, 8), unit: "Zio", long: "zebioctets" },
    { from: Math.pow(1024, 8), to: Math.pow(1024, 9), unit: "Yio", long: "yobioctets" }
  ]
};
class gu {
  constructor(e, t) {
    t = Object.assign({
      units: "metric",
      precision: 1,
      locale: void 0
      // Default to the user's system locale
    }, ws, t), On.set(this, t), Object.assign(En, t.customUnits);
    const i = e < 0 ? "-" : "";
    e = Math.abs(e);
    const o = En[t.units];
    if (o) {
      const n = o.find((a) => e >= a.from && e < a.to);
      if (n) {
        const a = new Intl.NumberFormat(t.locale, {
          style: "decimal",
          maximumFractionDigits: t.precision
        }), s = n.from === 0 ? i + a.format(e) : i + a.format(e / n.from);
        this.value = s, this.unit = n.unit, this.long = n.long;
      } else
        this.value = i + e, this.unit = "", this.long = "";
    } else
      throw new Error(`Invalid units specified: ${t.units}`);
  }
  toString() {
    const e = On.get(this);
    return e.toStringFn ? e.toStringFn.bind(this)() : `${this.value} ${this.unit}`;
  }
}
function xs(r, e) {
  return new gu(r, e);
}
xs.defaultOptions = function(r) {
  ws = r;
};
var bu = `.uui-h1,
.uui-h2,
.uui-h3,
.uui-h4,
.uui-h5,
.uui-a,
.uui-p,
.uui-p-lead,
.uui-small,
.uui-quoteblock,
.uui-ul,
.uui-ol,
.uui-text {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
}

.uui-text h1,
.uui-h1.uui-h1 {
  font-size: var(--uui-type-h1-size,60px);
  line-height: var(--uui-size-layout-4,66px);
  font-weight: 300;
  margin-left: -5px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h1,
.uui-text p + .uui-h1 {
  margin-top: var(--uui-size-layout-4,66px);
}

.uui-text h1.--no-top-margin,
.uui-text h1:first-child,
.uui-h1.--no-top-margin,
.uui-h1:first-child {
  margin-top: 0;
}

.uui-text h2,
.uui-h2.uui-h2 {
  font-size: var(--uui-type-h2-size,42px);
  line-height: var(--uui-size-layout-3,42px);
  font-weight: 300;
  margin-left: -3px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h2,
.uui-text p + .uui-h2 {
  margin-top: var(--uui-size-layout-3,42px);
}

.uui-text h2.--no-top-margin,
.uui-text h2:first-child,
.uui-h2.--no-top-margin,
.uui-h2:first-child {
  margin-top: 0;
}

.uui-text h3,
.uui-h3.uui-h3 {
  font-size: var(--uui-type-h3-size,30px);
  line-height: var(--uui-size-large);
  font-weight: 300;
  margin-left: -2px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h3.--no-top-margin,
.uui-text h3:first-child,
.uui-h3.--no-top-margin,
.uui-h3:first-child {
  margin-top: 0;
}

.uui-text h4,
.uui-h4.uui-h4 {
  font-size: var(--uui-type-h4-size,21px);
  line-height: 21px;
  font-weight: 400;
  margin-left: -1px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h4.--no-top-margin,
.uui-text h4:first-child,
.uui-h4.--no-top-margin,
.uui-h4:first-child {
  margin-top: 0;
}

.uui-text h5,
.uui-h5.uui-h5 {
  font-size: var(--uui-type-h5-size,14px);
  line-height: inherit;
  font-weight: 700;
  margin-left: 0;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: 0;
}

.uui-text h5.--no-top-margin,
.uui-text h5:first-child,
.uui-h5.--no-top-margin,
.uui-h5:first-child {
  margin-top: 0;
}

.uui-p,
.uui-text p {
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-p-lead,
.uui-text p.uui-lead {
  font-size: var(--uui-size-6,18px);
  line-height: var(--uui-size-8,24px);
}

.uui-a,
.uui-text a {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:link,
.uui-a:active .uui-text a:link,
.uui-text a:active {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:hover,
.uui-text a:hover {
  color: var(--uui-color-interactive-emphasis,#3544b1);
}

.uui-small,
.uui-text small {
  display: inline-block;
  font-size: var(--uui-type-small-size,12px);
  line-height: 18px;
}

.uui-quoteblock,
.uui-text blockquote {
  float: right;
  font-size: 14px;
  line-height: inherit;
  font-weight: 700;
  font-style: italic;
  margin-top: 0;
  margin-bottom: var(--uui-size-layout-1,24px);
  margin-right: -0.035em;
  max-width: 16em;
  quotes: '“' '”' '‘' '’';
}

.uui-quoteblock:before,
.uui-text blockquote:before {
  content: open-quote;
  margin-left: -0.4em;
  margin-right: 0.08em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
}

.uui-quoteblock:after,
.uui-text blockquote:after {
  content: close-quote;
  margin-left: 0.04em;
  margin-right: -0.4em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
  margin-bottom: -2px;
  display: inline-block;
}

.uui-ul,
.uui-text ul {
  list-style-type: square;
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-ol,
.uui-text ol {
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
`;
const _s = xo(bu);
var vu = Object.defineProperty, wu = Object.getOwnPropertyDescriptor, Ue = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? wu(e, t) : e, n = r.length - 1, a; n >= 0; n--)
    (a = r[n]) && (o = (i ? a(e, t, o) : a(o)) || o);
  return i && o && vu(e, t, o), o;
};
let Ie = class extends tu(hs) {
  constructor() {
    super(), this.videoId = "", this.customerDomain = "", this.dataTypeKey = "", this.loading = !1, this.extension = "", this.notFound = !1, this.previousVideoId = "", this.showDebug = !1, this.enableDebug = !1, this.refreshInterval = 1e3, this.uploadUrl = $t.initialiseEndpoint;
  }
  _lockSave() {
    Dn.setUploading(!0);
  }
  _unlockSave() {
    Dn.setUploading(!1);
  }
  firstUpdated(r) {
    this.videoId && this._getStatus(this.videoId);
  }
  updated(r) {
    if (r.has("details") && this._onModelChange(), r.has("uploadStatus")) {
      const e = this.uploadStatus;
      e != null && this._isUploadProcessing(e) && (this.timeout || (this.timeout = setTimeout(async () => {
        this.timeout = void 0, await this._getStatus(this.videoId, !1);
      }, this.refreshInterval)));
    }
  }
  _beforeRequest(r) {
    const e = r.detail.request, t = r.detail.file;
    e.getURL() === this.uploadUrl && (this.previousVideoId = "", this.extension = t.extension, this._lockSave(), this.dispatchEvent(new CustomEvent("cf-stream-editor-uploading", {
      detail: {},
      bubbles: !0,
      composed: !0
    })));
  }
  async _uploadSuccess(r) {
    r.stopPropagation(), this._unlockSave(), this.dispatchEvent(new CustomEvent("cf-stream-editor-uploaded", {
      detail: {
        videoId: this.pendingVideoId
      },
      bubbles: !0,
      composed: !0
    })), this.pendingVideoId && (await this._getStatus(this.pendingVideoId), this.requestUpdate());
  }
  _afterResponse(r) {
    const e = r.detail.response;
    this.pendingVideoId = e.getHeader("stream-media-id");
  }
  _isUploadProcessing(r) {
    return r?.State === Cn.IN_PROGRESS || r?.State === Cn.QUEUED;
  }
  _undoCurrentVideo() {
    this.videoId = this.previousVideoId, this.previousVideoId = "", this._getStatus(this.videoId);
  }
  _removeCurrentVideo() {
    this.previousVideoId = this.videoId, this.videoId = "", this.details = void 0, this.notFound = !1;
    const r = new CustomEvent("cf-stream-editor-removed", {
      detail: {},
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(r);
  }
  async _getStatus(r, e = !0) {
    e && (this.loading = !0);
    const i = (await $t.getVideoDetails(r))?.Result;
    if (e && (this.loading = !1), !i) {
      this.notFound = !0;
      return;
    }
    this.uploadStatus = i.Status, this.details = i, this.videoId = i.Uid;
  }
  _onModelChange() {
    const r = this.details;
    if (!r)
      return;
    const e = new CustomEvent("cf-stream-editor-updated", {
      detail: {
        id: r.Uid,
        size: r.Size,
        name: r.Meta.Name,
        width: r.Input.Width,
        height: r.Input.Height,
        uploadDate: r.Uploaded,
        duration: r.Duration,
        extension: this.extension
      },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(e);
  }
  _renderUpload() {
    return Fe`
                <uui-box headline="Upload">
                    <uppy-upload endpoint="${this.uploadUrl}" @after-response="${this._afterResponse}"
                                 @before-request="${this._beforeRequest}"
                                 @upload-success="${this._uploadSuccess}"></uppy-upload>
                </uui-box>
            `;
  }
  _renderVideo(r) {
    const e = r.Playback.Frame, t = `${xs(r.Size)}`;
    return Fe`
                <uui-box headline="${r.Meta.Name} | ${t}">
                    <div class="cf-player-wrapper">
                        <iframe class="cf-player" src="${e}"
                                allow="accelerometer; gyroscope; autoplay; encrypted-media;">
                        </iframe>
                    </div>
                    <div class="cf-player-footer">
                        ${this._renderRemoveButton()}
                    </div>
                </uui-box>
            `;
  }
  _renderDebug() {
    if (!this.enableDebug)
      return zt;
    const r = this.showDebug ? "Hide Debug" : "Show Debug", e = Fe`
            <uui-button @click="${() => this.showDebug = !this.showDebug}" label="${r}"></uui-button>
        `;
    let t = null;
    return this.showDebug && (t = Fe`
                <div class="alert alert-info">
                    <strong>Cloudflare API</strong>
                    <pre>${JSON.stringify(this.details, null, 2)}</pre>
                </div>
            `), Fe`
            <uui-box style="margin-top: 30px">
                ${e}
                ${t}
            </uui-box>
        `;
  }
  _renderRemoveButton() {
    return Fe`
            <uui-button @click="${this._removeCurrentVideo}" look="primary" color="danger" label="Remove"></uui-button>
        `;
  }
  _renderUndoAlert() {
    return Fe`
            <uui-box headline="Restore Previous Video" style="margin-bottom: 20px">
                <rr-alert type="warning">
                    <div slot="content">
                        <p>Uploading a new video and/or saving will replace the video and URL in Cloudflare Stream</p>
                    </div>
                </rr-alert>
                <rr-alert type="positive">
                    <div slot="content">
                        <p>Content referencing this Media Item will automatically display the new video</p>
                    </div>
                </rr-alert>
                <p>Click undo to restore the previous video</p>
                <uui-button @click="${this._undoCurrentVideo}" look="primary" color="warning"
                            label="Undo"></uui-button>
            </uui-box>
        `;
  }
  render() {
    if (this.notFound)
      return Fe`
                    <rr-alert type="danger" headline="Video not found" hideIcon="true">
                        <div slot="content">
                            <p>The video may have been deleted from Cloudflare</p>
                        </div>
                    </rr-alert>
                    ${this._renderRemoveButton()}
                `;
    if (this.uploadStatus && this._isUploadProcessing(this.uploadStatus)) {
      let t = parseInt(this.uploadStatus.PctComplete) || 0, i = 5;
      return t = Math.round(t / i) * i, Fe`
                    <uui-box headline="Processing ${t}%">
                        <rr-alert type="info">
                            <div slot="content">
                                <p>Cloudflare is processing your video, this may take a few minutes</p>
                            </div>
                        </rr-alert>
                        <rr-alert type="positive">
                            <div slot="content">
                                <p>You can now save your progress</p>
                            </div>
                        </rr-alert>
                        <uui-loader-bar animationDuration="1.5" progress="${t}"></uui-loader-bar>
                    </uui-box>
                `;
    }
    if (this.loading)
      return Fe`
                    <uui-loader-bar animationDuration="1.5"></uui-loader-bar>
                `;
    const r = this.videoId === "", e = this.details;
    return Fe`
                ${this.previousVideoId ? this._renderUndoAlert() : zt}
                ${e ? this._renderVideo(e) : zt}
                ${r ? this._renderUpload() : zt}
                ${this._renderDebug()}
            `;
  }
};
Ie.styles = [
  _s,
  Yo`
                .cf-player {
                    border: none;
                    position: absolute;
                    top: 0;
                    height: 100%;
                    width: 100%
                }

                .cf-player-wrapper {
                    position: relative;
                    max-width: 640px;
                    height: 320px
                }

                .cf-player-footer {
                    margin-top: 10px;
                }
            `
];
Ue([
  Me()
], Ie.prototype, "videoId", 2);
Ue([
  Me()
], Ie.prototype, "customerDomain", 2);
Ue([
  Me()
], Ie.prototype, "dataTypeKey", 2);
Ue([
  st()
], Ie.prototype, "details", 2);
Ue([
  st()
], Ie.prototype, "uploadStatus", 2);
Ue([
  st()
], Ie.prototype, "pendingVideoId", 2);
Ue([
  st()
], Ie.prototype, "loading", 2);
Ue([
  st()
], Ie.prototype, "extension", 2);
Ue([
  st()
], Ie.prototype, "notFound", 2);
Ue([
  st()
], Ie.prototype, "previousVideoId", 2);
Ue([
  st()
], Ie.prototype, "showDebug", 2);
Ue([
  st()
], Ie.prototype, "enableDebug", 2);
Ie = Ue([
  Zo("cf-stream-editor")
], Ie);
function qr(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var xu = 0;
function Ss(r) {
  return "__private_" + xu++ + "_" + r;
}
function _u(r, e, t) {
  const i = [];
  return r.forEach((o) => typeof o != "string" ? i.push(o) : e[Symbol.split](o).forEach((n, a, s) => {
    n !== "" && i.push(n), a < s.length - 1 && i.push(t);
  })), i;
}
/**
 * Takes a string with placeholder variables like `%{smart_count} file selected`
 * and replaces it with values from options `{smart_count: 5}`
 *
 * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
 * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
 *
 * @param phrase that needs interpolation, with placeholders
 * @param options with values that will be used to replace placeholders
 */
function An(r, e) {
  const t = /\$/g, i = "$$$$";
  let o = [r];
  if (e == null) return o;
  for (const n of Object.keys(e))
    if (n !== "_") {
      let a = e[n];
      typeof a == "string" && (a = t[Symbol.replace](a, i)), o = _u(o, new RegExp(`%\\{${n}\\}`, "g"), a);
    }
  return o;
}
const Su = (r) => {
  throw new Error(`missing string: ${r}`);
};
var Zt = /* @__PURE__ */ Ss("onMissingKey"), Jt = /* @__PURE__ */ Ss("apply");
class Ps {
  constructor(e, t) {
    let {
      onMissingKey: i = Su
    } = t === void 0 ? {} : t;
    Object.defineProperty(this, Jt, {
      value: Pu
    }), Object.defineProperty(this, Zt, {
      writable: !0,
      value: void 0
    }), this.locale = {
      strings: {},
      pluralize(o) {
        return o === 1 ? 0 : 1;
      }
    }, Array.isArray(e) ? e.forEach(qr(this, Jt)[Jt], this) : qr(this, Jt)[Jt](e), qr(this, Zt)[Zt] = i;
  }
  /**
   * Public translate method
   *
   * @param key
   * @param options with values that will be used later to replace placeholders in string
   * @returns string translated (and interpolated)
   */
  translate(e, t) {
    return this.translateArray(e, t).join("");
  }
  /**
   * Get a translation and return the translated and interpolated parts as an array.
   *
   * @returns The translated and interpolated parts, in order.
   */
  translateArray(e, t) {
    let i = this.locale.strings[e];
    if (i == null && (qr(this, Zt)[Zt](e), i = e), typeof i == "object") {
      if (t && typeof t.smart_count < "u") {
        const n = this.locale.pluralize(t.smart_count);
        return An(i[n], t);
      }
      throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
    }
    if (typeof i != "string")
      throw new Error("string was not a string");
    return An(i, t);
  }
}
function Pu(r) {
  if (!(r != null && r.strings))
    return;
  const e = this.locale;
  Object.assign(this.locale, {
    strings: {
      ...e.strings,
      ...r.strings
    },
    pluralize: r.pluralize || e.pluralize
  });
}
var _i, Un;
function ku() {
  return Un || (Un = 1, _i = function() {
    var e = {}, t = e._fns = {};
    e.emit = function(a, s, l, u, p, c, f) {
      var P = i(a);
      P.length && o(a, P, [s, l, u, p, c, f]);
    }, e.on = function(a, s) {
      t[a] || (t[a] = []), t[a].push(s);
    }, e.once = function(a, s) {
      function l() {
        s.apply(this, arguments), e.off(a, l);
      }
      this.on(a, l);
    }, e.off = function(a, s) {
      var l = [];
      if (a && s) {
        var u = this._fns[a], p = 0, c = u ? u.length : 0;
        for (p; p < c; p++)
          u[p] !== s && l.push(u[p]);
      }
      l.length ? this._fns[a] = l : delete this._fns[a];
    };
    function i(n) {
      var a = t[n] ? t[n] : [], s = n.indexOf(":"), l = s === -1 ? [n] : [n.substring(0, s), n.substring(s + 1)], u = Object.keys(t), p = 0, c = u.length;
      for (p; p < c; p++) {
        var f = u[p];
        if (f === "*" && (a = a.concat(t[f])), l.length === 2 && l[0] === f) {
          a = a.concat(t[f]);
          break;
        }
      }
      return a;
    }
    function o(n, a, s) {
      var l = 0, u = a.length;
      for (l; l < u && a[l]; l++)
        a[l].event = n, a[l].apply(a[l], s);
    }
    return e;
  }), _i;
}
var Fu = ku();
const Du = /* @__PURE__ */ Bt(Fu);
let Iu = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Jo = (r = 21) => {
  let e = "", t = r | 0;
  for (; t--; )
    e += Iu[Math.random() * 64 | 0];
  return e;
};
var Si, Rn;
function Qo() {
  if (Rn) return Si;
  Rn = 1;
  function r(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  return Si = r, Si;
}
var Pi, Mn;
function Tu() {
  if (Mn) return Pi;
  Mn = 1;
  var r = typeof ut == "object" && ut && ut.Object === Object && ut;
  return Pi = r, Pi;
}
var ki, zn;
function ks() {
  if (zn) return ki;
  zn = 1;
  var r = Tu(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
  return ki = t, ki;
}
var Fi, Nn;
function Bu() {
  if (Nn) return Fi;
  Nn = 1;
  var r = ks(), e = function() {
    return r.Date.now();
  };
  return Fi = e, Fi;
}
var Di, Ln;
function Cu() {
  if (Ln) return Di;
  Ln = 1;
  var r = /\s/;
  function e(t) {
    for (var i = t.length; i-- && r.test(t.charAt(i)); )
      ;
    return i;
  }
  return Di = e, Di;
}
var Ii, jn;
function Ou() {
  if (jn) return Ii;
  jn = 1;
  var r = Cu(), e = /^\s+/;
  function t(i) {
    return i && i.slice(0, r(i) + 1).replace(e, "");
  }
  return Ii = t, Ii;
}
var Ti, $n;
function Fs() {
  if ($n) return Ti;
  $n = 1;
  var r = ks(), e = r.Symbol;
  return Ti = e, Ti;
}
var Bi, qn;
function Eu() {
  if (qn) return Bi;
  qn = 1;
  var r = Fs(), e = Object.prototype, t = e.hasOwnProperty, i = e.toString, o = r ? r.toStringTag : void 0;
  function n(a) {
    var s = t.call(a, o), l = a[o];
    try {
      a[o] = void 0;
      var u = !0;
    } catch {
    }
    var p = i.call(a);
    return u && (s ? a[o] = l : delete a[o]), p;
  }
  return Bi = n, Bi;
}
var Ci, Hn;
function Au() {
  if (Hn) return Ci;
  Hn = 1;
  var r = Object.prototype, e = r.toString;
  function t(i) {
    return e.call(i);
  }
  return Ci = t, Ci;
}
var Oi, Wn;
function Uu() {
  if (Wn) return Oi;
  Wn = 1;
  var r = Fs(), e = Eu(), t = Au(), i = "[object Null]", o = "[object Undefined]", n = r ? r.toStringTag : void 0;
  function a(s) {
    return s == null ? s === void 0 ? o : i : n && n in Object(s) ? e(s) : t(s);
  }
  return Oi = a, Oi;
}
var Ei, Gn;
function Ru() {
  if (Gn) return Ei;
  Gn = 1;
  function r(e) {
    return e != null && typeof e == "object";
  }
  return Ei = r, Ei;
}
var Ai, Vn;
function Mu() {
  if (Vn) return Ai;
  Vn = 1;
  var r = Uu(), e = Ru(), t = "[object Symbol]";
  function i(o) {
    return typeof o == "symbol" || e(o) && r(o) == t;
  }
  return Ai = i, Ai;
}
var Ui, Kn;
function zu() {
  if (Kn) return Ui;
  Kn = 1;
  var r = Ou(), e = Qo(), t = Mu(), i = NaN, o = /^[-+]0x[0-9a-f]+$/i, n = /^0b[01]+$/i, a = /^0o[0-7]+$/i, s = parseInt;
  function l(u) {
    if (typeof u == "number")
      return u;
    if (t(u))
      return i;
    if (e(u)) {
      var p = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = e(p) ? p + "" : p;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = r(u);
    var c = n.test(u);
    return c || a.test(u) ? s(u.slice(2), c ? 2 : 8) : o.test(u) ? i : +u;
  }
  return Ui = l, Ui;
}
var Ri, Xn;
function Ds() {
  if (Xn) return Ri;
  Xn = 1;
  var r = Qo(), e = Bu(), t = zu(), i = "Expected a function", o = Math.max, n = Math.min;
  function a(s, l, u) {
    var p, c, f, P, T, O, x = 0, D = !1, m = !1, w = !0;
    if (typeof s != "function")
      throw new TypeError(i);
    l = t(l) || 0, r(u) && (D = !!u.leading, m = "maxWait" in u, f = m ? o(t(u.maxWait) || 0, l) : f, w = "trailing" in u ? !!u.trailing : w);
    function _(B) {
      var ie = p, se = c;
      return p = c = void 0, x = B, P = s.apply(se, ie), P;
    }
    function S(B) {
      return x = B, T = setTimeout(U, l), D ? _(B) : P;
    }
    function E(B) {
      var ie = B - O, se = B - x, y = l - ie;
      return m ? n(y, f - se) : y;
    }
    function A(B) {
      var ie = B - O, se = B - x;
      return O === void 0 || ie >= l || ie < 0 || m && se >= f;
    }
    function U() {
      var B = e();
      if (A(B))
        return j(B);
      T = setTimeout(U, E(B));
    }
    function j(B) {
      return T = void 0, w && p ? _(B) : (p = c = void 0, P);
    }
    function ee() {
      T !== void 0 && clearTimeout(T), x = 0, p = O = c = T = void 0;
    }
    function J() {
      return T === void 0 ? P : j(e());
    }
    function re() {
      var B = e(), ie = A(B);
      if (p = arguments, c = this, O = B, ie) {
        if (T === void 0)
          return S(O);
        if (m)
          return clearTimeout(T), T = setTimeout(U, l), _(O);
      }
      return T === void 0 && (T = setTimeout(U, l)), P;
    }
    return re.cancel = ee, re.flush = J, re;
  }
  return Ri = a, Ri;
}
var Mi, Yn;
function Nu() {
  if (Yn) return Mi;
  Yn = 1;
  var r = Ds(), e = Qo(), t = "Expected a function";
  function i(o, n, a) {
    var s = !0, l = !0;
    if (typeof o != "function")
      throw new TypeError(t);
    return e(a) && (s = "leading" in a ? !!a.leading : s, l = "trailing" in a ? !!a.trailing : l), r(o, n, {
      leading: s,
      maxWait: n,
      trailing: l
    });
  }
  return Mi = i, Mi;
}
var Lu = Nu();
const ju = /* @__PURE__ */ Bt(Lu);
function ii(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var $u = 0;
function Is(r) {
  return "__private_" + $u++ + "_" + r;
}
const qu = {
  version: "4.2.0"
};
var wt = /* @__PURE__ */ Is("callbacks"), zi = /* @__PURE__ */ Is("publish");
class Ts {
  constructor() {
    Object.defineProperty(this, zi, {
      value: Hu
    }), this.state = {}, Object.defineProperty(this, wt, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    });
  }
  getState() {
    return this.state;
  }
  setState(e) {
    const t = {
      ...this.state
    }, i = {
      ...this.state,
      ...e
    };
    this.state = i, ii(this, zi)[zi](t, i, e);
  }
  subscribe(e) {
    return ii(this, wt)[wt].add(e), () => {
      ii(this, wt)[wt].delete(e);
    };
  }
}
function Hu() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  ii(this, wt)[wt].forEach((i) => {
    i(...e);
  });
}
Ts.VERSION = qu.version;
function Bs(r) {
  const e = r.lastIndexOf(".");
  return e === -1 || e === r.length - 1 ? {
    name: r,
    extension: void 0
  } : {
    name: r.slice(0, e),
    extension: r.slice(e + 1)
  };
}
const Zn = {
  __proto__: null,
  md: "text/markdown",
  markdown: "text/markdown",
  mp4: "video/mp4",
  mp3: "audio/mp3",
  svg: "image/svg+xml",
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  heic: "image/heic",
  heif: "image/heif",
  yaml: "text/yaml",
  yml: "text/yaml",
  csv: "text/csv",
  tsv: "text/tab-separated-values",
  tab: "text/tab-separated-values",
  avi: "video/x-msvideo",
  mks: "video/x-matroska",
  mkv: "video/x-matroska",
  mov: "video/quicktime",
  dicom: "application/dicom",
  doc: "application/msword",
  msg: "application/vnd.ms-outlook",
  docm: "application/vnd.ms-word.document.macroenabled.12",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  dot: "application/msword",
  dotm: "application/vnd.ms-word.template.macroenabled.12",
  dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  xla: "application/vnd.ms-excel",
  xlam: "application/vnd.ms-excel.addin.macroenabled.12",
  xlc: "application/vnd.ms-excel",
  xlf: "application/x-xliff+xml",
  xlm: "application/vnd.ms-excel",
  xls: "application/vnd.ms-excel",
  xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
  xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xlt: "application/vnd.ms-excel",
  xltm: "application/vnd.ms-excel.template.macroenabled.12",
  xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  xlw: "application/vnd.ms-excel",
  txt: "text/plain",
  text: "text/plain",
  conf: "text/plain",
  log: "text/plain",
  pdf: "application/pdf",
  zip: "application/zip",
  "7z": "application/x-7z-compressed",
  rar: "application/x-rar-compressed",
  tar: "application/x-tar",
  gz: "application/gzip",
  dmg: "application/x-apple-diskimage"
};
function Cs(r) {
  var e;
  if (r.type) return r.type;
  const t = r.name ? (e = Bs(r.name).extension) == null ? void 0 : e.toLowerCase() : null;
  return t && t in Zn ? Zn[t] : "application/octet-stream";
}
function Wu(r) {
  return r.charCodeAt(0).toString(32);
}
function Jn(r) {
  let e = "";
  return r.replace(/[^A-Z0-9]/gi, (t) => (e += `-${Wu(t)}`, "/")) + e;
}
function Gu(r, e) {
  let t = e || "uppy";
  return typeof r.name == "string" && (t += `-${Jn(r.name.toLowerCase())}`), r.type !== void 0 && (t += `-${r.type}`), r.meta && typeof r.meta.relativePath == "string" && (t += `-${Jn(r.meta.relativePath.toLowerCase())}`), r.data.size !== void 0 && (t += `-${r.data.size}`), r.data.lastModified !== void 0 && (t += `-${r.data.lastModified}`), t;
}
function Vu(r) {
  return !r.isRemote || !r.remote ? !1 : (/* @__PURE__ */ new Set(["box", "dropbox", "drive", "facebook", "unsplash"])).has(r.remote.provider);
}
function Ku(r, e) {
  if (Vu(r)) return r.id;
  const t = Cs(r);
  return Gu({
    ...r,
    type: t
  }, e);
}
function Xu(r) {
  if (r == null && typeof navigator < "u" && (r = navigator.userAgent), !r) return !0;
  const e = /Edge\/(\d+\.\d+)/.exec(r);
  if (!e) return !0;
  const i = e[1].split(".", 2), o = parseInt(i[0], 10), n = parseInt(i[1], 10);
  return o < 15 || o === 15 && n < 15063 || o > 18 || o === 18 && n >= 18218;
}
function Yu(r, e) {
  return e.name ? e.name : r.split("/")[0] === "image" ? `${r.split("/")[0]}.${r.split("/")[1]}` : "noname";
}
function Ni(r) {
  return r < 10 ? `0${r}` : r.toString();
}
function oi() {
  const r = /* @__PURE__ */ new Date(), e = Ni(r.getHours()), t = Ni(r.getMinutes()), i = Ni(r.getSeconds());
  return `${e}:${t}:${i}`;
}
const Zu = {
  debug: () => {
  },
  warn: () => {
  },
  error: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.error(`[Uppy] [${oi()}]`, ...e);
  }
}, Ju = {
  debug: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.debug(`[Uppy] [${oi()}]`, ...e);
  },
  warn: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.warn(`[Uppy] [${oi()}]`, ...e);
  },
  error: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.error(`[Uppy] [${oi()}]`, ...e);
  }
};
var Li, Qn;
function Qu() {
  return Qn || (Qn = 1, Li = function(e) {
    if (typeof e != "number" || Number.isNaN(e))
      throw new TypeError(`Expected a number, got ${typeof e}`);
    const t = e < 0;
    let i = Math.abs(e);
    if (t && (i = -i), i === 0)
      return "0 B";
    const o = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], n = Math.min(Math.floor(Math.log(i) / Math.log(1024)), o.length - 1), a = Number(i / 1024 ** n), s = o[n];
    return `${a >= 10 || a % 1 === 0 ? Math.round(a) : a.toFixed(1)} ${s}`;
  }), Li;
}
var ep = Qu();
const Pt = /* @__PURE__ */ Bt(ep);
var ji, ea;
function tp() {
  if (ea) return ji;
  ea = 1;
  function r(e, t) {
    this.text = e = e || "", this.hasWild = ~e.indexOf("*"), this.separator = t, this.parts = e.split(t);
  }
  return r.prototype.match = function(e) {
    var t = !0, i = this.parts, o, n = i.length, a;
    if (typeof e == "string" || e instanceof String)
      if (!this.hasWild && this.text != e)
        t = !1;
      else {
        for (a = (e || "").split(this.separator), o = 0; t && o < n; o++)
          i[o] !== "*" && (o < a.length ? t = i[o] === a[o] : t = !1);
        t = t && a;
      }
    else if (typeof e.splice == "function")
      for (t = [], o = e.length; o--; )
        this.match(e[o]) && (t[t.length] = e[o]);
    else if (typeof e == "object") {
      t = {};
      for (var s in e)
        this.match(s) && (t[s] = e[s]);
    }
    return t;
  }, ji = function(e, t, i) {
    var o = new r(e, i || /[\/\.]/);
    return typeof t < "u" ? o.match(t) : o;
  }, ji;
}
var $i, ta;
function rp() {
  if (ta) return $i;
  ta = 1;
  var r = tp(), e = /[\/\+\.]/;
  return $i = function(t, i) {
    function o(n) {
      var a = r(n, t, e);
      return a && a.length >= 2;
    }
    return i ? o(i.split(";")[0]) : o;
  }, $i;
}
var ip = rp();
const op = /* @__PURE__ */ Bt(ip), np = {
  maxFileSize: null,
  minFileSize: null,
  maxTotalFileSize: null,
  maxNumberOfFiles: null,
  minNumberOfFiles: null,
  allowedFileTypes: null,
  requiredMetaFields: []
};
class Ne extends Error {
  constructor(e, t) {
    var i;
    super(e), this.isRestriction = !0, this.isUserFacing = (i = t?.isUserFacing) != null ? i : !0, t != null && t.file && (this.file = t.file);
  }
}
class ap {
  constructor(e, t) {
    this.getI18n = t, this.getOpts = () => {
      var i;
      const o = e();
      if (((i = o.restrictions) == null ? void 0 : i.allowedFileTypes) != null && !Array.isArray(o.restrictions.allowedFileTypes))
        throw new TypeError("`restrictions.allowedFileTypes` must be an array");
      return o;
    };
  }
  // Because these operations are slow, we cannot run them for every file (if we are adding multiple files)
  validateAggregateRestrictions(e, t) {
    const {
      maxTotalFileSize: i,
      maxNumberOfFiles: o
    } = this.getOpts().restrictions;
    if (o && e.filter((a) => !a.isGhost).length + t.length > o)
      throw new Ne(`${this.getI18n()("youCanOnlyUploadX", {
        smart_count: o
      })}`);
    if (i) {
      const n = [...e, ...t].reduce((a, s) => {
        var l;
        return a + ((l = s.size) != null ? l : 0);
      }, 0);
      if (n > i)
        throw new Ne(this.getI18n()("aggregateExceedsSize", {
          sizeAllowed: Pt(i),
          size: Pt(n)
        }));
    }
  }
  validateSingleFile(e) {
    const {
      maxFileSize: t,
      minFileSize: i,
      allowedFileTypes: o
    } = this.getOpts().restrictions;
    if (o && !o.some((s) => s.includes("/") ? e.type ? op(e.type.replace(/;.*?$/, ""), s) : !1 : s[0] === "." && e.extension ? e.extension.toLowerCase() === s.slice(1).toLowerCase() : !1)) {
      const s = o.join(", ");
      throw new Ne(this.getI18n()("youCanOnlyUploadFileTypes", {
        types: s
      }), {
        file: e
      });
    }
    if (t && e.size != null && e.size > t) {
      var n;
      throw new Ne(this.getI18n()("exceedsSize", {
        size: Pt(t),
        file: (n = e.name) != null ? n : this.getI18n()("unnamed")
      }), {
        file: e
      });
    }
    if (i && e.size != null && e.size < i)
      throw new Ne(this.getI18n()("inferiorSize", {
        size: Pt(i)
      }), {
        file: e
      });
  }
  validate(e, t) {
    t.forEach((i) => {
      this.validateSingleFile(i);
    }), this.validateAggregateRestrictions(e, t);
  }
  validateMinNumberOfFiles(e) {
    const {
      minNumberOfFiles: t
    } = this.getOpts().restrictions;
    if (t && Object.keys(e).length < t)
      throw new Ne(this.getI18n()("youHaveToAtLeastSelectX", {
        smart_count: t
      }));
  }
  getMissingRequiredMetaFields(e) {
    var t;
    const i = new Ne(this.getI18n()("missingRequiredMetaFieldOnFile", {
      fileName: (t = e.name) != null ? t : this.getI18n()("unnamed")
    })), {
      requiredMetaFields: o
    } = this.getOpts().restrictions, n = [];
    for (const a of o)
      (!Object.hasOwn(e.meta, a) || e.meta[a] === "") && n.push(a);
    return {
      missingFields: n,
      error: i
    };
  }
}
const sp = {
  strings: {
    addBulkFilesFailed: {
      0: "Failed to add %{smart_count} file due to an internal error",
      1: "Failed to add %{smart_count} files due to internal errors"
    },
    youCanOnlyUploadX: {
      0: "You can only upload %{smart_count} file",
      1: "You can only upload %{smart_count} files"
    },
    youHaveToAtLeastSelectX: {
      0: "You have to select at least %{smart_count} file",
      1: "You have to select at least %{smart_count} files"
    },
    aggregateExceedsSize: "You selected %{size} of files, but maximum allowed size is %{sizeAllowed}",
    exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
    missingRequiredMetaField: "Missing required meta fields",
    missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}",
    inferiorSize: "This file is smaller than the allowed size of %{size}",
    youCanOnlyUploadFileTypes: "You can only upload: %{types}",
    noMoreFilesAllowed: "Cannot add more files",
    noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists",
    companionError: "Connection with Companion failed",
    authAborted: "Authentication aborted",
    companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}",
    failedToUpload: "Failed to upload %{file}",
    noInternetConnection: "No Internet connection",
    connectedToInternet: "Connected to the Internet",
    // Strings for remote providers
    noFilesFound: "You have no files or folders here",
    noSearchResults: "Unfortunately, there are no results for this search",
    selectX: {
      0: "Select %{smart_count}",
      1: "Select %{smart_count}"
    },
    allFilesFromFolderNamed: "All files from folder %{name}",
    openFolderNamed: "Open folder %{name}",
    cancel: "Cancel",
    logOut: "Log out",
    logIn: "Log in",
    pickFiles: "Pick files",
    pickPhotos: "Pick photos",
    filter: "Filter",
    resetFilter: "Reset filter",
    loading: "Loading...",
    loadedXFiles: "Loaded %{numFiles} files",
    authenticateWithTitle: "Please authenticate with %{pluginName} to select files",
    authenticateWith: "Connect to %{pluginName}",
    signInWithGoogle: "Sign in with Google",
    searchImages: "Search for images",
    enterTextToSearch: "Enter text to search for images",
    search: "Search",
    resetSearch: "Reset search",
    emptyFolderAdded: "No files were added from empty folder",
    addedNumFiles: "Added %{numFiles} file(s)",
    folderAlreadyAdded: 'The folder "%{folder}" was already added',
    folderAdded: {
      0: "Added %{smart_count} file from %{folder}",
      1: "Added %{smart_count} files from %{folder}"
    },
    additionalRestrictionsFailed: "%{count} additional restrictions were not fulfilled",
    unnamed: "Unnamed",
    pleaseWait: "Please wait"
  }
};
function M(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var lp = 0;
function oe(r) {
  return "__private_" + lp++ + "_" + r;
}
const up = {
  version: "4.4.4"
}, Hr = {
  totalProgress: 0,
  allowNewUpload: !0,
  error: null,
  recoveredState: null
};
var be = /* @__PURE__ */ oe("plugins"), ve = /* @__PURE__ */ oe("restricter"), Qt = /* @__PURE__ */ oe("storeUnsubscribe"), Ke = /* @__PURE__ */ oe("emitter"), xt = /* @__PURE__ */ oe("preProcessors"), _t = /* @__PURE__ */ oe("uploaders"), rt = /* @__PURE__ */ oe("postProcessors"), Ae = /* @__PURE__ */ oe("informAndEmit"), Fr = /* @__PURE__ */ oe("checkRequiredMetaFieldsOnFile"), qi = /* @__PURE__ */ oe("checkRequiredMetaFields"), er = /* @__PURE__ */ oe("assertNewUploadAllowed"), _o = /* @__PURE__ */ oe("transformFile"), tr = /* @__PURE__ */ oe("startIfAutoProceed"), rr = /* @__PURE__ */ oe("checkAndUpdateFileState"), xr = /* @__PURE__ */ oe("getFilesToRetry"), ir = /* @__PURE__ */ oe("doRetryAll"), So = /* @__PURE__ */ oe("handleUploadProgress"), or = /* @__PURE__ */ oe("updateTotalProgress"), it = /* @__PURE__ */ oe("updateTotalProgressThrottled"), Po = /* @__PURE__ */ oe("calculateTotalProgress"), Hi = /* @__PURE__ */ oe("addListeners"), $e = /* @__PURE__ */ oe("updateOnlineStatus"), nr = /* @__PURE__ */ oe("requestClientById"), Qe = /* @__PURE__ */ oe("createUpload"), Wi = /* @__PURE__ */ oe("getUpload"), kt = /* @__PURE__ */ oe("removeUpload"), et = /* @__PURE__ */ oe("runUpload");
class mi {
  /**
   * Instantiate Uppy
   */
  constructor(e) {
    Object.defineProperty(this, et, {
      value: kp
    }), Object.defineProperty(this, kt, {
      value: Pp
    }), Object.defineProperty(this, Wi, {
      value: Sp
    }), Object.defineProperty(this, Qe, {
      value: _p
    }), Object.defineProperty(this, Hi, {
      value: xp
    }), Object.defineProperty(this, Po, {
      value: wp
    }), Object.defineProperty(this, or, {
      value: vp
    }), Object.defineProperty(this, ir, {
      value: bp
    }), Object.defineProperty(this, xr, {
      value: gp
    }), Object.defineProperty(this, rr, {
      value: mp
    }), Object.defineProperty(this, tr, {
      value: yp
    }), Object.defineProperty(this, _o, {
      value: fp
    }), Object.defineProperty(this, er, {
      value: hp
    }), Object.defineProperty(this, qi, {
      value: cp
    }), Object.defineProperty(this, Fr, {
      value: dp
    }), Object.defineProperty(this, Ae, {
      value: pp
    }), Object.defineProperty(this, be, {
      writable: !0,
      value: /* @__PURE__ */ Object.create(null)
    }), Object.defineProperty(this, ve, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Qt, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Ke, {
      writable: !0,
      value: Du()
    }), Object.defineProperty(this, xt, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), Object.defineProperty(this, _t, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), Object.defineProperty(this, rt, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), this.scheduledAutoProceed = null, this.wasOffline = !1, Object.defineProperty(this, So, {
      writable: !0,
      value: (o, n) => {
        const a = o ? this.getFile(o.id) : void 0;
        if (o == null || !a) {
          this.log(`Not setting progress for a file that has been removed: ${o?.id}`);
          return;
        }
        if (a.progress.percentage === 100) {
          this.log(`Not setting progress for a file that has been already uploaded: ${o.id}`);
          return;
        }
        const s = {
          bytesTotal: n.bytesTotal,
          // bytesTotal may be null or zero; in that case we can't divide by it
          percentage: n.bytesTotal != null && Number.isFinite(n.bytesTotal) && n.bytesTotal > 0 ? Math.round(n.bytesUploaded / n.bytesTotal * 100) : void 0
        };
        a.progress.uploadStarted != null ? this.setFileState(o.id, {
          progress: {
            ...a.progress,
            ...s,
            bytesUploaded: n.bytesUploaded
          }
        }) : this.setFileState(o.id, {
          progress: {
            ...a.progress,
            ...s
          }
        }), M(this, it)[it]();
      }
    }), Object.defineProperty(this, it, {
      writable: !0,
      value: ju(() => M(this, or)[or](), 500, {
        leading: !0,
        trailing: !0
      })
    }), Object.defineProperty(this, $e, {
      writable: !0,
      value: this.updateOnlineStatus.bind(this)
    }), Object.defineProperty(this, nr, {
      writable: !0,
      value: /* @__PURE__ */ new Map()
    }), this.defaultLocale = sp;
    const t = {
      id: "uppy",
      autoProceed: !1,
      allowMultipleUploadBatches: !0,
      debug: !1,
      restrictions: np,
      meta: {},
      onBeforeFileAdded: (o, n) => !Object.hasOwn(n, o.id),
      onBeforeUpload: (o) => o,
      store: new Ts(),
      logger: Zu,
      infoTimeout: 5e3
    }, i = {
      ...t,
      ...e
    };
    this.opts = {
      ...i,
      restrictions: {
        ...t.restrictions,
        ...e && e.restrictions
      }
    }, e && e.logger && e.debug ? this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning") : e && e.debug && (this.opts.logger = Ju), this.log(`Using Core v${mi.VERSION}`), this.i18nInit(), this.store = this.opts.store, this.setState({
      ...Hr,
      plugins: {},
      files: {},
      currentUploads: {},
      capabilities: {
        uploadProgress: Xu(),
        individualCancellation: !0,
        resumableUploads: !1
      },
      meta: {
        ...this.opts.meta
      },
      info: []
    }), M(this, ve)[ve] = new ap(() => this.opts, () => this.i18n), M(this, Qt)[Qt] = this.store.subscribe((o, n, a) => {
      this.emit("state-update", o, n, a), this.updateAll(n);
    }), this.opts.debug && typeof window < "u" && (window[this.opts.id] = this), M(this, Hi)[Hi]();
  }
  emit(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      i[o - 1] = arguments[o];
    M(this, Ke)[Ke].emit(e, ...i);
  }
  on(e, t) {
    return M(this, Ke)[Ke].on(e, t), this;
  }
  once(e, t) {
    return M(this, Ke)[Ke].once(e, t), this;
  }
  off(e, t) {
    return M(this, Ke)[Ke].off(e, t), this;
  }
  /**
   * Iterate on all plugins and run `update` on them.
   * Called each time state changes.
   *
   */
  updateAll(e) {
    this.iteratePlugins((t) => {
      t.update(e);
    });
  }
  /**
   * Updates state with a patch
   */
  setState(e) {
    this.store.setState(e);
  }
  /**
   * Returns current state.
   */
  getState() {
    return this.store.getState();
  }
  patchFilesState(e) {
    const t = this.getState().files;
    this.setState({
      files: {
        ...t,
        ...Object.fromEntries(Object.entries(e).map((i) => {
          let [o, n] = i;
          return [o, {
            ...t[o],
            ...n
          }];
        }))
      }
    });
  }
  /**
   * Shorthand to set state for a specific file.
   */
  setFileState(e, t) {
    if (!this.getState().files[e])
      throw new Error(`Can’t set state for ${e} (the file could have been removed)`);
    this.patchFilesState({
      [e]: t
    });
  }
  i18nInit() {
    const e = (i) => this.log(`Missing i18n string: ${i}`, "error"), t = new Ps([this.defaultLocale, this.opts.locale], {
      onMissingKey: e
    });
    this.i18n = t.translate.bind(t), this.i18nArray = t.translateArray.bind(t), this.locale = t.locale;
  }
  setOptions(e) {
    this.opts = {
      ...this.opts,
      ...e,
      restrictions: {
        ...this.opts.restrictions,
        ...e?.restrictions
      }
    }, e.meta && this.setMeta(e.meta), this.i18nInit(), e.locale && this.iteratePlugins((t) => {
      t.setOptions(e);
    }), this.setState(void 0);
  }
  resetProgress() {
    const e = {
      percentage: 0,
      bytesUploaded: !1,
      uploadComplete: !1,
      uploadStarted: null
    }, t = {
      ...this.getState().files
    }, i = /* @__PURE__ */ Object.create(null);
    Object.keys(t).forEach((o) => {
      i[o] = {
        ...t[o],
        progress: {
          ...t[o].progress,
          ...e
        },
        // @ts-expect-error these typed are inserted
        // into the namespace in their respective packages
        // but core isn't ware of those
        tus: void 0,
        transloadit: void 0
      };
    }), this.setState({
      files: i,
      ...Hr
    });
  }
  clear() {
    const {
      capabilities: e,
      currentUploads: t
    } = this.getState();
    if (Object.keys(t).length > 0 && !e.individualCancellation)
      throw new Error("The installed uploader plugin does not allow removing files during an upload.");
    this.setState({
      ...Hr,
      files: {}
    });
  }
  addPreProcessor(e) {
    M(this, xt)[xt].add(e);
  }
  removePreProcessor(e) {
    return M(this, xt)[xt].delete(e);
  }
  addPostProcessor(e) {
    M(this, rt)[rt].add(e);
  }
  removePostProcessor(e) {
    return M(this, rt)[rt].delete(e);
  }
  addUploader(e) {
    M(this, _t)[_t].add(e);
  }
  removeUploader(e) {
    return M(this, _t)[_t].delete(e);
  }
  setMeta(e) {
    const t = {
      ...this.getState().meta,
      ...e
    }, i = {
      ...this.getState().files
    };
    Object.keys(i).forEach((o) => {
      i[o] = {
        ...i[o],
        meta: {
          ...i[o].meta,
          ...e
        }
      };
    }), this.log("Adding metadata:"), this.log(e), this.setState({
      meta: t,
      files: i
    });
  }
  setFileMeta(e, t) {
    const i = {
      ...this.getState().files
    };
    if (!i[e]) {
      this.log(`Was trying to set metadata for a file that has been removed: ${e}`);
      return;
    }
    const o = {
      ...i[e].meta,
      ...t
    };
    i[e] = {
      ...i[e],
      meta: o
    }, this.setState({
      files: i
    });
  }
  /**
   * Get a file object.
   */
  getFile(e) {
    return this.getState().files[e];
  }
  /**
   * Get all files in an array.
   */
  getFiles() {
    const {
      files: e
    } = this.getState();
    return Object.values(e);
  }
  getFilesByIds(e) {
    return e.map((t) => this.getFile(t));
  }
  getObjectOfFilesPerState() {
    const {
      files: e,
      totalProgress: t,
      error: i
    } = this.getState(), o = Object.values(e), n = [], a = [], s = [], l = [], u = [], p = [], c = [], f = [], P = [];
    for (const T of o) {
      const {
        progress: O
      } = T;
      !O.uploadComplete && O.uploadStarted && (n.push(T), T.isPaused || f.push(T)), O.uploadStarted || a.push(T), (O.uploadStarted || O.preprocess || O.postprocess) && s.push(T), O.uploadStarted && l.push(T), T.isPaused && u.push(T), O.uploadComplete && p.push(T), T.error && c.push(T), (O.preprocess || O.postprocess) && P.push(T);
    }
    return {
      newFiles: a,
      startedFiles: s,
      uploadStartedFiles: l,
      pausedFiles: u,
      completeFiles: p,
      erroredFiles: c,
      inProgressFiles: n,
      inProgressNotPausedFiles: f,
      processingFiles: P,
      isUploadStarted: l.length > 0,
      isAllComplete: t === 100 && p.length === o.length && P.length === 0,
      isAllErrored: !!i && c.length === o.length,
      isAllPaused: n.length !== 0 && u.length === n.length,
      isUploadInProgress: n.length > 0,
      isSomeGhost: o.some((T) => T.isGhost)
    };
  }
  validateRestrictions(e, t) {
    t === void 0 && (t = this.getFiles());
    try {
      M(this, ve)[ve].validate(t, [e]);
    } catch (i) {
      return i;
    }
    return null;
  }
  validateSingleFile(e) {
    try {
      M(this, ve)[ve].validateSingleFile(e);
    } catch (t) {
      return t.message;
    }
    return null;
  }
  validateAggregateRestrictions(e) {
    const t = this.getFiles();
    try {
      M(this, ve)[ve].validateAggregateRestrictions(t, e);
    } catch (i) {
      return i.message;
    }
    return null;
  }
  checkIfFileAlreadyExists(e) {
    const {
      files: t
    } = this.getState();
    return !!(t[e] && !t[e].isGhost);
  }
  /**
   * Add a new file to `state.files`. This will run `onBeforeFileAdded`,
   * try to guess file type in a clever way, check file against restrictions,
   * and start an upload if `autoProceed === true`.
   */
  addFile(e) {
    M(this, er)[er](e);
    const {
      nextFilesState: t,
      validFilesToAdd: i,
      errors: o
    } = M(this, rr)[rr]([e]), n = o.filter((s) => s.isRestriction);
    if (M(this, Ae)[Ae](n), o.length > 0) throw o[0];
    this.setState({
      files: t
    });
    const [a] = i;
    return this.emit("file-added", a), this.emit("files-added", i), this.log(`Added file: ${a.name}, ${a.id}, mime type: ${a.type}`), M(this, tr)[tr](), a.id;
  }
  /**
   * Add multiple files to `state.files`. See the `addFile()` documentation.
   *
   * If an error occurs while adding a file, it is logged and the user is notified.
   * This is good for UI plugins, but not for programmatic use.
   * Programmatic users should usually still use `addFile()` on individual files.
   */
  addFiles(e) {
    M(this, er)[er]();
    const {
      nextFilesState: t,
      validFilesToAdd: i,
      errors: o
    } = M(this, rr)[rr](e), n = o.filter((s) => s.isRestriction);
    M(this, Ae)[Ae](n);
    const a = o.filter((s) => !s.isRestriction);
    if (a.length > 0) {
      let s = `Multiple errors occurred while adding files:
`;
      if (a.forEach((l) => {
        s += `
 * ${l.message}`;
      }), this.info({
        message: this.i18n("addBulkFilesFailed", {
          smart_count: a.length
        }),
        details: s
      }, "error", this.opts.infoTimeout), typeof AggregateError == "function")
        throw new AggregateError(a, s);
      {
        const l = new Error(s);
        throw l.errors = a, l;
      }
    }
    this.setState({
      files: t
    }), i.forEach((s) => {
      this.emit("file-added", s);
    }), this.emit("files-added", i), i.length > 5 ? this.log(`Added batch of ${i.length} files`) : Object.values(i).forEach((s) => {
      this.log(`Added file: ${s.name}
 id: ${s.id}
 type: ${s.type}`);
    }), i.length > 0 && M(this, tr)[tr]();
  }
  removeFiles(e) {
    const {
      files: t,
      currentUploads: i
    } = this.getState(), o = {
      ...t
    }, n = {
      ...i
    }, a = /* @__PURE__ */ Object.create(null);
    e.forEach((p) => {
      t[p] && (a[p] = t[p], delete o[p]);
    });
    function s(p) {
      return a[p] === void 0;
    }
    Object.keys(n).forEach((p) => {
      const c = i[p].fileIDs.filter(s);
      if (c.length === 0) {
        delete n[p];
        return;
      }
      const {
        capabilities: f
      } = this.getState();
      if (c.length !== i[p].fileIDs.length && !f.individualCancellation)
        throw new Error("The installed uploader plugin does not allow removing files during an upload.");
      n[p] = {
        ...i[p],
        fileIDs: c
      };
    });
    const l = {
      currentUploads: n,
      files: o
    };
    Object.keys(o).length === 0 && (l.allowNewUpload = !0, l.error = null, l.recoveredState = null), this.setState(l), M(this, it)[it]();
    const u = Object.keys(a);
    u.forEach((p) => {
      this.emit("file-removed", a[p]);
    }), u.length > 5 ? this.log(`Removed ${u.length} files`) : this.log(`Removed files: ${u.join(", ")}`);
  }
  removeFile(e) {
    this.removeFiles([e]);
  }
  pauseResume(e) {
    if (!this.getState().capabilities.resumableUploads || this.getFile(e).progress.uploadComplete)
      return;
    const t = this.getFile(e), o = !(t.isPaused || !1);
    return this.setFileState(e, {
      isPaused: o
    }), this.emit("upload-pause", t, o), o;
  }
  pauseAll() {
    const e = {
      ...this.getState().files
    };
    Object.keys(e).filter((i) => !e[i].progress.uploadComplete && e[i].progress.uploadStarted).forEach((i) => {
      const o = {
        ...e[i],
        isPaused: !0
      };
      e[i] = o;
    }), this.setState({
      files: e
    }), this.emit("pause-all");
  }
  resumeAll() {
    const e = {
      ...this.getState().files
    };
    Object.keys(e).filter((i) => !e[i].progress.uploadComplete && e[i].progress.uploadStarted).forEach((i) => {
      const o = {
        ...e[i],
        isPaused: !1,
        error: null
      };
      e[i] = o;
    }), this.setState({
      files: e
    }), this.emit("resume-all");
  }
  async retryAll() {
    const e = await M(this, ir)[ir]();
    return this.emit("complete", e), e;
  }
  cancelAll() {
    this.emit("cancel-all");
    const {
      files: e
    } = this.getState(), t = Object.keys(e);
    t.length && this.removeFiles(t), this.setState(Hr);
  }
  retryUpload(e) {
    this.setFileState(e, {
      error: null,
      isPaused: !1
    }), this.emit("upload-retry", this.getFile(e));
    const t = M(this, Qe)[Qe]([e], {
      forceAllowNewUpload: !0
      // create new upload even if allowNewUpload: false
    });
    return M(this, et)[et](t);
  }
  logout() {
    this.iteratePlugins((e) => {
      var t;
      (t = e.provider) == null || t.logout == null || t.logout();
    });
  }
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/explicit-module-boundary-types
  [Symbol.for("uppy test: updateTotalProgress")]() {
    return M(this, or)[or]();
  }
  updateOnlineStatus() {
    var e;
    ((e = window.navigator.onLine) != null ? e : !0) ? (this.emit("is-online"), this.wasOffline && (this.emit("back-online"), this.info(this.i18n("connectedToInternet"), "success", 3e3), this.wasOffline = !1)) : (this.emit("is-offline"), this.info(this.i18n("noInternetConnection"), "error", 0), this.wasOffline = !0);
  }
  getID() {
    return this.opts.id;
  }
  /**
   * Registers a plugin with Core.
   */
  use(e) {
    if (typeof e != "function") {
      const l = `Expected a plugin class, but got ${e === null ? "null" : typeof e}. Please verify that the plugin was imported and spelled correctly.`;
      throw new TypeError(l);
    }
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      i[o - 1] = arguments[o];
    const n = new e(this, ...i), a = n.id;
    if (!a)
      throw new Error("Your plugin must have an id");
    if (!n.type)
      throw new Error("Your plugin must have a type");
    const s = this.getPlugin(a);
    if (s) {
      const l = `Already found a plugin named '${s.id}'. Tried to use: '${a}'.
Uppy plugins must have unique \`id\` options.`;
      throw new Error(l);
    }
    return e.VERSION && this.log(`Using ${a} v${e.VERSION}`), n.type in M(this, be)[be] ? M(this, be)[be][n.type].push(n) : M(this, be)[be][n.type] = [n], n.install(), this.emit("plugin-added", n), this;
  }
  /**
   * Find one Plugin by name.
   */
  getPlugin(e) {
    for (const t of Object.values(M(this, be)[be])) {
      const i = t.find((o) => o.id === e);
      if (i != null) return i;
    }
  }
  [Symbol.for("uppy test: getPlugins")](e) {
    return M(this, be)[be][e];
  }
  /**
   * Iterate through all `use`d plugins.
   *
   */
  iteratePlugins(e) {
    Object.values(M(this, be)[be]).flat(1).forEach(e);
  }
  /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */
  removePlugin(e) {
    this.log(`Removing plugin ${e.id}`), this.emit("plugin-remove", e), e.uninstall && e.uninstall();
    const t = M(this, be)[be][e.type], i = t.findIndex((a) => a.id === e.id);
    i !== -1 && t.splice(i, 1);
    const n = {
      plugins: {
        ...this.getState().plugins,
        [e.id]: void 0
      }
    };
    this.setState(n);
  }
  /**
   * Uninstall all plugins and close down this Uppy instance.
   */
  destroy() {
    this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`), this.cancelAll(), M(this, Qt)[Qt](), this.iteratePlugins((e) => {
      this.removePlugin(e);
    }), typeof window < "u" && window.removeEventListener && (window.removeEventListener("online", M(this, $e)[$e]), window.removeEventListener("offline", M(this, $e)[$e]));
  }
  hideInfo() {
    const {
      info: e
    } = this.getState();
    this.setState({
      info: e.slice(1)
    }), this.emit("info-hidden");
  }
  /**
   * Set info message in `state.info`, so that UI plugins like `Informer`
   * can display the message.
   */
  info(e, t, i) {
    t === void 0 && (t = "info"), i === void 0 && (i = 3e3);
    const o = typeof e == "object";
    this.setState({
      info: [...this.getState().info, {
        type: t,
        message: o ? e.message : e,
        details: o ? e.details : null
      }]
    }), setTimeout(() => this.hideInfo(), i), this.emit("info-visible");
  }
  /**
   * Passes messages to a function, provided in `opts.logger`.
   * If `opts.logger: Uppy.debugLogger` or `opts.debug: true`, logs to the browser console.
   */
  log(e, t) {
    const {
      logger: i
    } = this.opts;
    switch (t) {
      case "error":
        i.error(e);
        break;
      case "warning":
        i.warn(e);
        break;
      default:
        i.debug(e);
        break;
    }
  }
  registerRequestClient(e, t) {
    M(this, nr)[nr].set(e, t);
  }
  /** @protected */
  getRequestClientForFile(e) {
    if (!e.remote) throw new Error(`Tried to get RequestClient for a non-remote file ${e.id}`);
    const t = M(this, nr)[nr].get(e.remote.requestClientId);
    if (t == null) throw new Error(`requestClientId "${e.remote.requestClientId}" not registered for file "${e.id}"`);
    return t;
  }
  /**
   * Restore an upload by its ID.
   */
  restore(e) {
    return this.log(`Core: attempting to restore upload "${e}"`), this.getState().currentUploads[e] ? M(this, et)[et](e) : (M(this, kt)[kt](e), Promise.reject(new Error("Nonexistent upload")));
  }
  [Symbol.for("uppy test: createUpload")]() {
    return M(this, Qe)[Qe](...arguments);
  }
  /**
   * Add data to an upload's result object.
   */
  addResultData(e, t) {
    if (!M(this, Wi)[Wi](e)) {
      this.log(`Not setting result for an upload that has been removed: ${e}`);
      return;
    }
    const {
      currentUploads: i
    } = this.getState(), o = {
      ...i[e],
      result: {
        ...i[e].result,
        ...t
      }
    };
    this.setState({
      currentUploads: {
        ...i,
        [e]: o
      }
    });
  }
  /**
   * Start an upload for all the files that are not currently being uploaded.
   */
  async upload() {
    var e;
    (e = M(this, be)[be].uploader) != null && e.length || this.log("No uploader type plugins are used", "warning");
    let {
      files: t
    } = this.getState();
    if (M(this, xr)[xr]().length > 0) {
      const n = await M(this, ir)[ir]();
      if (!(this.getFiles().filter((s) => s.progress.uploadStarted == null).length > 0))
        return this.emit("complete", n), n;
      ({
        files: t
      } = this.getState());
    }
    const o = this.opts.onBeforeUpload(t);
    return o === !1 ? Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false")) : (o && typeof o == "object" && (t = o, this.setState({
      files: t
    })), Promise.resolve().then(() => M(this, ve)[ve].validateMinNumberOfFiles(t)).catch((n) => {
      throw M(this, Ae)[Ae]([n]), n;
    }).then(() => {
      if (!M(this, qi)[qi](t))
        throw new Ne(this.i18n("missingRequiredMetaField"));
    }).catch((n) => {
      throw n;
    }).then(async () => {
      const {
        currentUploads: n
      } = this.getState(), a = Object.values(n).flatMap((p) => p.fileIDs), s = [];
      Object.keys(t).forEach((p) => {
        const c = this.getFile(p);
        !c.progress.uploadStarted && a.indexOf(p) === -1 && s.push(c.id);
      });
      const l = M(this, Qe)[Qe](s), u = await M(this, et)[et](l);
      return this.emit("complete", u), u;
    }).catch((n) => {
      throw this.emit("error", n), this.log(n, "error"), n;
    }));
  }
}
function pp(r) {
  for (const n of r)
    n.isRestriction ? this.emit("restriction-failed", n.file, n) : this.emit("error", n, n.file), this.log(n, "warning");
  const e = r.filter((n) => n.isUserFacing), t = 4, i = e.slice(0, t), o = e.slice(t);
  i.forEach((n) => {
    let {
      message: a,
      details: s = ""
    } = n;
    this.info({
      message: a,
      details: s
    }, "error", this.opts.infoTimeout);
  }), o.length > 0 && this.info({
    message: this.i18n("additionalRestrictionsFailed", {
      count: o.length
    })
  });
}
function dp(r) {
  const {
    missingFields: e,
    error: t
  } = M(this, ve)[ve].getMissingRequiredMetaFields(r);
  return e.length > 0 ? (this.setFileState(r.id, {
    missingRequiredMetaFields: e
  }), this.log(t.message), this.emit("restriction-failed", r, t), !1) : !0;
}
function cp(r) {
  let e = !0;
  for (const t of Object.values(r))
    M(this, Fr)[Fr](t) || (e = !1);
  return e;
}
function hp(r) {
  const {
    allowNewUpload: e
  } = this.getState();
  if (e === !1) {
    const t = new Ne(this.i18n("noMoreFilesAllowed"), {
      file: r
    });
    throw M(this, Ae)[Ae]([t]), t;
  }
}
function fp(r) {
  const e = r instanceof File ? {
    name: r.name,
    type: r.type,
    size: r.size,
    data: r
  } : r, t = Cs(e), i = Yu(t, e), o = Bs(i).extension, n = Ku(e, this.getID()), a = e.meta || {};
  a.name = i, a.type = t;
  const s = Number.isFinite(e.data.size) ? e.data.size : null;
  return {
    source: e.source || "",
    id: n,
    name: i,
    extension: o || "",
    meta: {
      ...this.getState().meta,
      ...a
    },
    type: t,
    data: e.data,
    progress: {
      percentage: 0,
      bytesUploaded: !1,
      bytesTotal: s,
      uploadComplete: !1,
      uploadStarted: null
    },
    size: s,
    isGhost: !1,
    isRemote: e.isRemote || !1,
    remote: e.remote,
    preview: e.preview
  };
}
function yp() {
  this.opts.autoProceed && !this.scheduledAutoProceed && (this.scheduledAutoProceed = setTimeout(() => {
    this.scheduledAutoProceed = null, this.upload().catch((r) => {
      r.isRestriction || this.log(r.stack || r.message || r);
    });
  }, 4));
}
function mp(r) {
  const {
    files: e
  } = this.getState(), t = {
    ...e
  }, i = [], o = [];
  for (const s of r)
    try {
      var n;
      let l = M(this, _o)[_o](s);
      const u = (n = e[l.id]) == null ? void 0 : n.isGhost;
      u && (l = {
        ...e[l.id],
        isGhost: !1,
        data: s.data
      }, this.log(`Replaced the blob in the restored ghost file: ${l.name}, ${l.id}`));
      const p = this.opts.onBeforeFileAdded(l, t);
      if (!p && this.checkIfFileAlreadyExists(l.id)) {
        var a;
        throw new Ne(this.i18n("noDuplicates", {
          fileName: (a = l.name) != null ? a : this.i18n("unnamed")
        }), {
          file: s
        });
      }
      if (p === !1 && !u)
        throw new Ne("Cannot add the file because onBeforeFileAdded returned false.", {
          isUserFacing: !1,
          file: s
        });
      typeof p == "object" && p !== null && (l = p), M(this, ve)[ve].validateSingleFile(l), t[l.id] = l, i.push(l);
    } catch (l) {
      o.push(l);
    }
  try {
    M(this, ve)[ve].validateAggregateRestrictions(Object.values(e), i);
  } catch (s) {
    return o.push(s), {
      nextFilesState: e,
      validFilesToAdd: [],
      errors: o
    };
  }
  return {
    nextFilesState: t,
    validFilesToAdd: i,
    errors: o
  };
}
function gp() {
  const {
    files: r
  } = this.getState();
  return Object.keys(r).filter((e) => r[e].error);
}
async function bp() {
  const r = M(this, xr)[xr](), e = {
    ...this.getState().files
  };
  if (r.forEach((i) => {
    e[i] = {
      ...e[i],
      isPaused: !1,
      error: null
    };
  }), this.setState({
    files: e,
    error: null
  }), this.emit("retry-all", this.getFilesByIds(r)), r.length === 0)
    return {
      successful: [],
      failed: []
    };
  const t = M(this, Qe)[Qe](r, {
    forceAllowNewUpload: !0
    // create new upload even if allowNewUpload: false
  });
  return M(this, et)[et](t);
}
function vp() {
  var r, e;
  const t = M(this, Po)[Po]();
  let i = null;
  t != null && (i = Math.round(t * 100), i > 100 ? i = 100 : i < 0 && (i = 0)), this.emit("progress", (r = i) != null ? r : 0), this.setState({
    totalProgress: (e = i) != null ? e : 0
  });
}
function wp() {
  const e = this.getFiles().filter((s) => s.progress.uploadStarted || s.progress.preprocess || s.progress.postprocess);
  if (e.length === 0)
    return 0;
  if (e.every((s) => s.progress.uploadComplete))
    return 1;
  const t = (s) => s.progress.bytesTotal != null && s.progress.bytesTotal !== 0, i = e.filter(t), o = e.filter((s) => !t(s));
  if (i.every((s) => s.progress.uploadComplete) && o.length > 0 && !o.every((s) => s.progress.uploadComplete))
    return null;
  const n = i.reduce((s, l) => {
    var u;
    return s + ((u = l.progress.bytesTotal) != null ? u : 0);
  }, 0), a = i.reduce((s, l) => s + (l.progress.bytesUploaded || 0), 0);
  return n === 0 ? 0 : a / n;
}
function xp() {
  const r = (i, o, n) => {
    let a = i.message || "Unknown error";
    i.details && (a += ` ${i.details}`), this.setState({
      error: a
    }), o != null && o.id in this.getState().files && this.setFileState(o.id, {
      error: a,
      response: n
    });
  };
  this.on("error", r), this.on("upload-error", (i, o, n) => {
    if (r(o, i, n), typeof o == "object" && o.message) {
      var a;
      this.log(o.message, "error");
      const s = new Error(this.i18n("failedToUpload", {
        file: (a = i?.name) != null ? a : ""
      }));
      s.isUserFacing = !0, s.details = o.message, o.details && (s.details += ` ${o.details}`), M(this, Ae)[Ae]([s]);
    } else
      M(this, Ae)[Ae]([o]);
  });
  let e = null;
  this.on("upload-stalled", (i, o) => {
    const {
      message: n
    } = i, a = o.map((s) => s.meta.name).join(", ");
    e || (this.info({
      message: n,
      details: a
    }, "warning", this.opts.infoTimeout), e = setTimeout(() => {
      e = null;
    }, this.opts.infoTimeout)), this.log(`${n} ${a}`.trim(), "warning");
  }), this.on("upload", () => {
    this.setState({
      error: null
    });
  });
  const t = (i) => {
    const o = i.filter((a) => {
      const s = a != null && this.getFile(a.id);
      return s || this.log(`Not setting progress for a file that has been removed: ${a?.id}`), s;
    }), n = Object.fromEntries(o.map((a) => [a.id, {
      progress: {
        uploadStarted: Date.now(),
        uploadComplete: !1,
        bytesUploaded: 0,
        bytesTotal: a.size
      }
    }]));
    this.patchFilesState(n);
  };
  this.on("upload-start", t), this.on("upload-progress", M(this, So)[So]), this.on("upload-success", (i, o) => {
    if (i == null || !this.getFile(i.id)) {
      this.log(`Not setting progress for a file that has been removed: ${i?.id}`);
      return;
    }
    const n = this.getFile(i.id).progress;
    this.setFileState(i.id, {
      progress: {
        ...n,
        postprocess: M(this, rt)[rt].size > 0 ? {
          mode: "indeterminate"
        } : void 0,
        uploadComplete: !0,
        percentage: 100,
        bytesUploaded: n.bytesTotal
      },
      response: o,
      uploadURL: o.uploadURL,
      isPaused: !1
    }), i.size == null && this.setFileState(i.id, {
      size: o.bytesUploaded || n.bytesTotal
    }), M(this, it)[it]();
  }), this.on("preprocess-progress", (i, o) => {
    if (i == null || !this.getFile(i.id)) {
      this.log(`Not setting progress for a file that has been removed: ${i?.id}`);
      return;
    }
    this.setFileState(i.id, {
      progress: {
        ...this.getFile(i.id).progress,
        preprocess: o
      }
    });
  }), this.on("preprocess-complete", (i) => {
    if (i == null || !this.getFile(i.id)) {
      this.log(`Not setting progress for a file that has been removed: ${i?.id}`);
      return;
    }
    const o = {
      ...this.getState().files
    };
    o[i.id] = {
      ...o[i.id],
      progress: {
        ...o[i.id].progress
      }
    }, delete o[i.id].progress.preprocess, this.setState({
      files: o
    });
  }), this.on("postprocess-progress", (i, o) => {
    if (i == null || !this.getFile(i.id)) {
      this.log(`Not setting progress for a file that has been removed: ${i?.id}`);
      return;
    }
    this.setFileState(i.id, {
      progress: {
        ...this.getState().files[i.id].progress,
        postprocess: o
      }
    });
  }), this.on("postprocess-complete", (i) => {
    if (i == null || !this.getFile(i.id)) {
      this.log(`Not setting progress for a file that has been removed: ${i?.id}`);
      return;
    }
    const o = {
      ...this.getState().files
    };
    o[i.id] = {
      ...o[i.id],
      progress: {
        ...o[i.id].progress
      }
    }, delete o[i.id].progress.postprocess, this.setState({
      files: o
    });
  }), this.on("restored", () => {
    M(this, it)[it]();
  }), this.on("dashboard:file-edit-complete", (i) => {
    i && M(this, Fr)[Fr](i);
  }), typeof window < "u" && window.addEventListener && (window.addEventListener("online", M(this, $e)[$e]), window.addEventListener("offline", M(this, $e)[$e]), setTimeout(M(this, $e)[$e], 3e3));
}
function _p(r, e) {
  e === void 0 && (e = {});
  const {
    forceAllowNewUpload: t = !1
  } = e, {
    allowNewUpload: i,
    currentUploads: o
  } = this.getState();
  if (!i && !t)
    throw new Error("Cannot create a new upload: already uploading.");
  const n = Jo();
  return this.emit("upload", n, this.getFilesByIds(r)), this.setState({
    allowNewUpload: this.opts.allowMultipleUploadBatches !== !1 && this.opts.allowMultipleUploads !== !1,
    currentUploads: {
      ...o,
      [n]: {
        fileIDs: r,
        step: 0,
        result: {}
      }
    }
  }), n;
}
function Sp(r) {
  const {
    currentUploads: e
  } = this.getState();
  return e[r];
}
function Pp(r) {
  const e = {
    ...this.getState().currentUploads
  };
  delete e[r], this.setState({
    currentUploads: e
  });
}
async function kp(r) {
  const e = () => {
    const {
      currentUploads: n
    } = this.getState();
    return n[r];
  };
  let t = e();
  const i = [...M(this, xt)[xt], ...M(this, _t)[_t], ...M(this, rt)[rt]];
  try {
    for (let n = t.step || 0; n < i.length && t; n++) {
      const a = i[n];
      this.setState({
        currentUploads: {
          ...this.getState().currentUploads,
          [r]: {
            ...t,
            step: n
          }
        }
      });
      const {
        fileIDs: s
      } = t;
      await a(s, r), t = e();
    }
  } catch (n) {
    throw M(this, kt)[kt](r), n;
  }
  if (t) {
    t.fileIDs.forEach((l) => {
      const u = this.getFile(l);
      u && u.progress.postprocess && this.emit("postprocess-complete", u);
    });
    const n = t.fileIDs.map((l) => this.getFile(l)), a = n.filter((l) => !l.error), s = n.filter((l) => l.error);
    this.addResultData(r, {
      successful: a,
      failed: s,
      uploadID: r
    }), t = e();
  }
  let o;
  return t && (o = t.result, M(this, kt)[kt](r)), o == null && this.log(`Not setting result for an upload that has been removed: ${r}`), o;
}
mi.VERSION = up.version;
var Lr, ae, Os, St, ra, Es, ko, As, en, Fo, Do, Dr = {}, Us = [], Fp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, gi = Array.isArray;
function nt(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function tn(r) {
  r && r.parentNode && r.parentNode.removeChild(r);
}
function d(r, e, t) {
  var i, o, n, a = {};
  for (n in e) n == "key" ? i = e[n] : n == "ref" ? o = e[n] : a[n] = e[n];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Lr.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null) for (n in r.defaultProps) a[n] === void 0 && (a[n] = r.defaultProps[n]);
  return _r(r, a, i, o, null);
}
function _r(r, e, t, i, o) {
  var n = { type: r, props: e, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Os, __i: -1, __u: 0 };
  return o == null && ae.vnode != null && ae.vnode(n), n;
}
function Dp() {
  return { current: null };
}
function pt(r) {
  return r.children;
}
function at(r, e) {
  this.props = r, this.context = e;
}
function Ht(r, e) {
  if (e == null) return r.__ ? Ht(r.__, r.__i + 1) : null;
  for (var t; e < r.__k.length; e++) if ((t = r.__k[e]) != null && t.__e != null) return t.__e;
  return typeof r.type == "function" ? Ht(r) : null;
}
function Rs(r) {
  var e, t;
  if ((r = r.__) != null && r.__c != null) {
    for (r.__e = r.__c.base = null, e = 0; e < r.__k.length; e++) if ((t = r.__k[e]) != null && t.__e != null) {
      r.__e = r.__c.base = t.__e;
      break;
    }
    return Rs(r);
  }
}
function ia(r) {
  (!r.__d && (r.__d = !0) && St.push(r) && !di.__r++ || ra !== ae.debounceRendering) && ((ra = ae.debounceRendering) || Es)(di);
}
function di() {
  var r, e, t, i, o, n, a, s;
  for (St.sort(ko); r = St.shift(); ) r.__d && (e = St.length, i = void 0, n = (o = (t = r).__v).__e, a = [], s = [], t.__P && ((i = nt({}, o)).__v = o.__v + 1, ae.vnode && ae.vnode(i), rn(t.__P, i, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [n] : null, a, n ?? Ht(o), !!(32 & o.__u), s), i.__v = o.__v, i.__.__k[i.__i] = i, Ns(a, i, s), i.__e != n && Rs(i)), St.length > e && St.sort(ko));
  di.__r = 0;
}
function Ms(r, e, t, i, o, n, a, s, l, u, p) {
  var c, f, P, T, O, x, D = i && i.__k || Us, m = e.length;
  for (l = Ip(t, e, D, l, m), c = 0; c < m; c++) (P = t.__k[c]) != null && (f = P.__i === -1 ? Dr : D[P.__i] || Dr, P.__i = c, x = rn(r, P, f, o, n, a, s, l, u, p), T = P.__e, P.ref && f.ref != P.ref && (f.ref && on(f.ref, null, P), p.push(P.ref, P.__c || T, P)), O == null && T != null && (O = T), 4 & P.__u || f.__k === P.__k ? l = zs(P, l, r) : typeof P.type == "function" && x !== void 0 ? l = x : T && (l = T.nextSibling), P.__u &= -7);
  return t.__e = O, l;
}
function Ip(r, e, t, i, o) {
  var n, a, s, l, u, p = t.length, c = p, f = 0;
  for (r.__k = new Array(o), n = 0; n < o; n++) (a = e[n]) != null && typeof a != "boolean" && typeof a != "function" ? (l = n + f, (a = r.__k[n] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? _r(null, a, null, null, null) : gi(a) ? _r(pt, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? _r(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = r, a.__b = r.__b + 1, s = null, (u = a.__i = Tp(a, t, l, c)) !== -1 && (c--, (s = t[u]) && (s.__u |= 2)), s == null || s.__v === null ? (u == -1 && f--, typeof a.type != "function" && (a.__u |= 4)) : u != l && (u == l - 1 ? f-- : u == l + 1 ? f++ : (u > l ? f-- : f++, a.__u |= 4))) : r.__k[n] = null;
  if (c) for (n = 0; n < p; n++) (s = t[n]) != null && (2 & s.__u) == 0 && (s.__e == i && (i = Ht(s)), Ls(s, s));
  return i;
}
function zs(r, e, t) {
  var i, o;
  if (typeof r.type == "function") {
    for (i = r.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = r, e = zs(i[o], e, t));
    return e;
  }
  r.__e != e && (e && r.type && !t.contains(e) && (e = Ht(r)), t.insertBefore(r.__e, e || null), e = r.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function lt(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (gi(r) ? r.some(function(t) {
    lt(t, e);
  }) : e.push(r)), e;
}
function Tp(r, e, t, i) {
  var o, n, a = r.key, s = r.type, l = e[t];
  if (l === null || l && a == l.key && s === l.type && (2 & l.__u) == 0) return t;
  if (i > (l != null && (2 & l.__u) == 0 ? 1 : 0)) for (o = t - 1, n = t + 1; o >= 0 || n < e.length; ) {
    if (o >= 0) {
      if ((l = e[o]) && (2 & l.__u) == 0 && a == l.key && s === l.type) return o;
      o--;
    }
    if (n < e.length) {
      if ((l = e[n]) && (2 & l.__u) == 0 && a == l.key && s === l.type) return n;
      n++;
    }
  }
  return -1;
}
function oa(r, e, t) {
  e[0] == "-" ? r.setProperty(e, t ?? "") : r[e] = t == null ? "" : typeof t != "number" || Fp.test(e) ? t : t + "px";
}
function Wr(r, e, t, i, o) {
  var n;
  e: if (e == "style") if (typeof t == "string") r.style.cssText = t;
  else {
    if (typeof i == "string" && (r.style.cssText = i = ""), i) for (e in i) t && e in t || oa(r.style, e, "");
    if (t) for (e in t) i && t[e] === i[e] || oa(r.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(As, "$1")), e = e.toLowerCase() in r || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + n] = t, t ? i ? t.u = i.u : (t.u = en, r.addEventListener(e, n ? Do : Fo, n)) : r.removeEventListener(e, n ? Do : Fo, n);
  else {
    if (o == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in r) try {
      r[e] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && e[4] != "-" ? r.removeAttribute(e) : r.setAttribute(e, e == "popover" && t == 1 ? "" : t));
  }
}
function na(r) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + r];
      if (e.t == null) e.t = en++;
      else if (e.t < t.u) return;
      return t(ae.event ? ae.event(e) : e);
    }
  };
}
function rn(r, e, t, i, o, n, a, s, l, u) {
  var p, c, f, P, T, O, x, D, m, w, _, S, E, A, U, j, ee, J = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (l = !!(32 & t.__u), n = [s = e.__e = t.__e]), (p = ae.__b) && p(e);
  e: if (typeof J == "function") try {
    if (D = e.props, m = "prototype" in J && J.prototype.render, w = (p = J.contextType) && i[p.__c], _ = p ? w ? w.props.value : p.__ : i, t.__c ? x = (c = e.__c = t.__c).__ = c.__E : (m ? e.__c = c = new J(D, _) : (e.__c = c = new at(D, _), c.constructor = J, c.render = Cp), w && w.sub(c), c.props = D, c.state || (c.state = {}), c.context = _, c.__n = i, f = c.__d = !0, c.__h = [], c._sb = []), m && c.__s == null && (c.__s = c.state), m && J.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = nt({}, c.__s)), nt(c.__s, J.getDerivedStateFromProps(D, c.__s))), P = c.props, T = c.state, c.__v = e, f) m && J.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), m && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (m && J.getDerivedStateFromProps == null && D !== P && c.componentWillReceiveProps != null && c.componentWillReceiveProps(D, _), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(D, c.__s, _) === !1 || e.__v == t.__v)) {
        for (e.__v != t.__v && (c.props = D, c.state = c.__s, c.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(re) {
          re && (re.__ = e);
        }), S = 0; S < c._sb.length; S++) c.__h.push(c._sb[S]);
        c._sb = [], c.__h.length && a.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(D, c.__s, _), m && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(P, T, O);
      });
    }
    if (c.context = _, c.props = D, c.__P = r, c.__e = !1, E = ae.__r, A = 0, m) {
      for (c.state = c.__s, c.__d = !1, E && E(e), p = c.render(c.props, c.state, c.context), U = 0; U < c._sb.length; U++) c.__h.push(c._sb[U]);
      c._sb = [];
    } else do
      c.__d = !1, E && E(e), p = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++A < 25);
    c.state = c.__s, c.getChildContext != null && (i = nt(nt({}, i), c.getChildContext())), m && !f && c.getSnapshotBeforeUpdate != null && (O = c.getSnapshotBeforeUpdate(P, T)), s = Ms(r, gi(j = p != null && p.type === pt && p.key == null ? p.props.children : p) ? j : [j], e, t, i, o, n, a, s, l, u), c.base = e.__e, e.__u &= -161, c.__h.length && a.push(c), x && (c.__E = c.__ = null);
  } catch (re) {
    if (e.__v = null, l || n != null) if (re.then) {
      for (e.__u |= l ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      n[n.indexOf(s)] = null, e.__e = s;
    } else for (ee = n.length; ee--; ) tn(n[ee]);
    else e.__e = t.__e, e.__k = t.__k;
    ae.__e(re, e, t);
  }
  else n == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : s = e.__e = Bp(t.__e, e, t, i, o, n, a, l, u);
  return (p = ae.diffed) && p(e), 128 & e.__u ? void 0 : s;
}
function Ns(r, e, t) {
  for (var i = 0; i < t.length; i++) on(t[i], t[++i], t[++i]);
  ae.__c && ae.__c(e, r), r.some(function(o) {
    try {
      r = o.__h, o.__h = [], r.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      ae.__e(n, o.__v);
    }
  });
}
function Bp(r, e, t, i, o, n, a, s, l) {
  var u, p, c, f, P, T, O, x = t.props, D = e.props, m = e.type;
  if (m == "svg" ? o = "http://www.w3.org/2000/svg" : m == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), n != null) {
    for (u = 0; u < n.length; u++) if ((P = n[u]) && "setAttribute" in P == !!m && (m ? P.localName == m : P.nodeType == 3)) {
      r = P, n[u] = null;
      break;
    }
  }
  if (r == null) {
    if (m == null) return document.createTextNode(D);
    r = document.createElementNS(o, m, D.is && D), s && (ae.__m && ae.__m(e, n), s = !1), n = null;
  }
  if (m === null) x === D || s && r.data === D || (r.data = D);
  else {
    if (n = n && Lr.call(r.childNodes), x = t.props || Dr, !s && n != null) for (x = {}, u = 0; u < r.attributes.length; u++) x[(P = r.attributes[u]).name] = P.value;
    for (u in x) if (P = x[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") c = P;
      else if (!(u in D)) {
        if (u == "value" && "defaultValue" in D || u == "checked" && "defaultChecked" in D) continue;
        Wr(r, u, null, P, o);
      }
    }
    for (u in D) P = D[u], u == "children" ? f = P : u == "dangerouslySetInnerHTML" ? p = P : u == "value" ? T = P : u == "checked" ? O = P : s && typeof P != "function" || x[u] === P || Wr(r, u, P, x[u], o);
    if (p) s || c && (p.__html === c.__html || p.__html === r.innerHTML) || (r.innerHTML = p.__html), e.__k = [];
    else if (c && (r.innerHTML = ""), Ms(r, gi(f) ? f : [f], e, t, i, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, n, a, n ? n[0] : t.__k && Ht(t, 0), s, l), n != null) for (u = n.length; u--; ) tn(n[u]);
    s || (u = "value", m == "progress" && T == null ? r.removeAttribute("value") : T !== void 0 && (T !== r[u] || m == "progress" && !T || m == "option" && T !== x[u]) && Wr(r, u, T, x[u], o), u = "checked", O !== void 0 && O !== r[u] && Wr(r, u, O, x[u], o));
  }
  return r;
}
function on(r, e, t) {
  try {
    if (typeof r == "function") {
      var i = typeof r.__u == "function";
      i && r.__u(), i && e == null || (r.__u = r(e));
    } else r.current = e;
  } catch (o) {
    ae.__e(o, t);
  }
}
function Ls(r, e, t) {
  var i, o;
  if (ae.unmount && ae.unmount(r), (i = r.ref) && (i.current && i.current !== r.__e || on(i, null, e)), (i = r.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      ae.__e(n, e);
    }
    i.base = i.__P = null;
  }
  if (i = r.__k) for (o = 0; o < i.length; o++) i[o] && Ls(i[o], e, t || typeof r.type != "function");
  t || tn(r.__e), r.__c = r.__ = r.__e = void 0;
}
function Cp(r, e, t) {
  return this.constructor(r, t);
}
function aa(r, e, t) {
  var i, o, n, a;
  e == document && (e = document.documentElement), ae.__ && ae.__(r, e), o = (i = !1) ? null : e.__k, n = [], a = [], rn(e, r = e.__k = d(pt, null, [r]), o || Dr, Dr, e.namespaceURI, o ? null : e.firstChild ? Lr.call(e.childNodes) : null, n, o ? o.__e : e.firstChild, i, a), Ns(n, r, a);
}
function js(r, e, t) {
  var i, o, n, a, s = nt({}, r.props);
  for (n in r.type && r.type.defaultProps && (a = r.type.defaultProps), e) n == "key" ? i = e[n] : n == "ref" ? o = e[n] : s[n] = e[n] === void 0 && a !== void 0 ? a[n] : e[n];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Lr.call(arguments, 2) : t), _r(r.type, s, i || r.key, o || r.ref, null);
}
Lr = Us.slice, ae = { __e: function(r, e, t, i) {
  for (var o, n, a; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((n = o.constructor) && n.getDerivedStateFromError != null && (o.setState(n.getDerivedStateFromError(r)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(r, i || {}), a = o.__d), a) return o.__E = o;
  } catch (s) {
    r = s;
  }
  throw r;
} }, Os = 0, at.prototype.setState = function(r, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = nt({}, this.state), typeof r == "function" && (r = r(nt({}, t), this.props)), r && nt(t, r), r != null && this.__v && (e && this._sb.push(e), ia(this));
}, at.prototype.forceUpdate = function(r) {
  this.__v && (this.__e = !0, r && this.__h.push(r), ia(this));
}, at.prototype.render = pt, St = [], Es = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ko = function(r, e) {
  return r.__v.__b - e.__v.__b;
}, di.__r = 0, As = /(PointerCapture)$|Capture$/i, en = 0, Fo = na(!1), Do = na(!0);
function $s(r) {
  return typeof r != "object" || r === null || !("nodeType" in r) ? !1 : r.nodeType === Node.ELEMENT_NODE;
}
function Op(r, e) {
  return e === void 0 && (e = document), typeof r == "string" ? e.querySelector(r) : $s(r) ? r : null;
}
function qs(r) {
  for (var e; r && !r.dir; )
    r = r.parentNode;
  return (e = r) == null ? void 0 : e.dir;
}
class Hs {
  constructor(e, t) {
    this.uppy = e, this.opts = t ?? {};
  }
  getPluginState() {
    const {
      plugins: e
    } = this.uppy.getState();
    return e?.[this.id] || {};
  }
  setPluginState(e) {
    const {
      plugins: t
    } = this.uppy.getState();
    this.uppy.setState({
      plugins: {
        ...t,
        [this.id]: {
          ...t[this.id],
          ...e
        }
      }
    });
  }
  setOptions(e) {
    this.opts = {
      ...this.opts,
      ...e
    }, this.setPluginState(void 0), this.i18nInit();
  }
  i18nInit() {
    const e = new Ps([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = e.translate.bind(e), this.i18nArray = e.translateArray.bind(e), this.setPluginState(void 0);
  }
  /**
   * Extendable methods
   * ==================
   * These methods are here to serve as an overview of the extendable methods as well as
   * making them not conditional in use, such as `if (this.afterUpdate)`.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addTarget(e) {
    throw new Error("Extend the addTarget method to add your plugin to another plugin's target");
  }
  install() {
  }
  uninstall() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(e) {
  }
  // Called after every state update, after everything's mounted. Debounced.
  afterUpdate() {
  }
}
function sa(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Ep = 0;
function Ap(r) {
  return "__private_" + Ep++ + "_" + r;
}
function Up(r) {
  let e = null, t;
  return function() {
    for (var i = arguments.length, o = new Array(i), n = 0; n < i; n++)
      o[n] = arguments[n];
    return t = o, e || (e = Promise.resolve().then(() => (e = null, r(...t)))), e;
  };
}
var ar = /* @__PURE__ */ Ap("updateUI");
class Dt extends Hs {
  constructor() {
    super(...arguments), Object.defineProperty(this, ar, {
      writable: !0,
      value: void 0
    });
  }
  getTargetPlugin(e) {
    let t;
    if (typeof e?.addTarget == "function")
      t = e, t instanceof Dt || console.warn(new Error("The provided plugin is not an instance of UIPlugin. This is an indication of a bug with the way Uppy is bundled.", {
        cause: {
          targetPlugin: t,
          UIPlugin: Dt
        }
      }));
    else if (typeof e == "function") {
      const i = e;
      this.uppy.iteratePlugins((o) => {
        o instanceof i && (t = o);
      });
    }
    return t;
  }
  /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   */
  mount(e, t) {
    const i = t.id, o = Op(e);
    if (o) {
      this.isTargetDOMEl = !0;
      const s = document.createElement("div");
      return s.classList.add("uppy-Root"), sa(this, ar)[ar] = Up((l) => {
        this.uppy.getPlugin(this.id) && (aa(this.render(l, s), s), this.afterUpdate());
      }), this.uppy.log(`Installing ${i} to a DOM element '${e}'`), this.opts.replaceTargetContent && (o.innerHTML = ""), aa(this.render(this.uppy.getState(), s), s), this.el = s, o.appendChild(s), s.dir = this.opts.direction || qs(s) || "ltr", this.onMount(), this.el;
    }
    const n = this.getTargetPlugin(e);
    if (n)
      return this.uppy.log(`Installing ${i} to ${n.id}`), this.parent = n, this.el = n.addTarget(t), this.onMount(), this.el;
    this.uppy.log(`Not installing ${i}`);
    let a = `Invalid target option given to ${i}.`;
    throw typeof e == "function" ? a += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly." : a += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.", new Error(a);
  }
  /**
   * Called when plugin is mounted, whether in DOM or into another plugin.
   * Needed because sometimes plugins are mounted separately/after `install`,
   * so this.el and this.parent might not be available in `install`.
   * This is the case with @uppy/react plugins, for example.
   */
  render(e, t) {
    throw new Error("Extend the render method to add your plugin to a DOM element");
  }
  update(e) {
    if (this.el != null) {
      var t, i;
      (t = (i = sa(this, ar))[ar]) == null || t.call(i, e);
    }
  }
  unmount() {
    if (this.isTargetDOMEl) {
      var e;
      (e = this.el) == null || e.remove();
    }
    this.onUnmount();
  }
  onMount() {
  }
  onUnmount() {
  }
}
function la(r, e, t, i) {
  return r === e ? r : i === 0 ? e : r + (e - r) * 2 ** (-i / t);
}
const Ge = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete"
};
var Gi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ua;
function Rp() {
  return ua || (ua = 1, function(r) {
    (function() {
      var e = {}.hasOwnProperty;
      function t() {
        for (var n = "", a = 0; a < arguments.length; a++) {
          var s = arguments[a];
          s && (n = o(n, i(s)));
        }
        return n;
      }
      function i(n) {
        if (typeof n == "string" || typeof n == "number")
          return n;
        if (typeof n != "object")
          return "";
        if (Array.isArray(n))
          return t.apply(null, n);
        if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
          return n.toString();
        var a = "";
        for (var s in n)
          e.call(n, s) && n[s] && (a = o(a, s));
        return a;
      }
      function o(n, a) {
        return a ? n ? n + " " + a : n + a : n;
      }
      r.exports ? (t.default = t, r.exports = t) : window.classNames = t;
    })();
  }(Gi)), Gi.exports;
}
var Mp = Rp();
const qe = /* @__PURE__ */ Bt(Mp);
function Vi(r) {
  const e = [];
  let t = "indeterminate", i;
  for (const {
    progress: n
  } of Object.values(r)) {
    const {
      preprocess: a,
      postprocess: s
    } = n;
    i == null && (a || s) && ({
      mode: t,
      message: i
    } = a || s), a?.mode === "determinate" && e.push(a.value), s?.mode === "determinate" && e.push(s.value);
  }
  const o = e.reduce((n, a) => n + a / e.length, 0);
  return {
    mode: t,
    message: i,
    value: o
  };
}
function zp(r) {
  const e = Math.floor(r / 3600) % 24, t = Math.floor(r / 60) % 60, i = Math.floor(r % 60);
  return {
    hours: e,
    minutes: t,
    seconds: i
  };
}
function Np(r) {
  const e = zp(r), t = e.hours === 0 ? "" : `${e.hours}h`, i = e.minutes === 0 ? "" : `${e.hours === 0 ? e.minutes : ` ${e.minutes.toString(10).padStart(2, "0")}`}m`, o = e.hours !== 0 ? "" : `${e.minutes === 0 ? e.seconds : ` ${e.seconds.toString(10).padStart(2, "0")}`}s`;
  return `${t}${i}${o}`;
}
const Lp = "·", pa = () => ` ${Lp} `;
function jp(r) {
  const {
    newFiles: e,
    isUploadStarted: t,
    recoveredState: i,
    i18n: o,
    uploadState: n,
    isSomeGhost: a,
    startUpload: s
  } = r, l = qe("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--upload", {
    "uppy-c-btn-primary": n === Ge.STATE_WAITING
  }, {
    "uppy-StatusBar-actionBtn--disabled": a
  }), u = e && t && !i ? o("uploadXNewFiles", {
    smart_count: e
  }) : o("uploadXFiles", {
    smart_count: e
  });
  return d("button", {
    type: "button",
    className: l,
    "aria-label": o("uploadXFiles", {
      smart_count: e
    }),
    onClick: s,
    disabled: a,
    "data-uppy-super-focusable": !0
  }, u);
}
function $p(r) {
  const {
    i18n: e,
    uppy: t
  } = r;
  return d("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
    "aria-label": e("retryUpload"),
    onClick: () => t.retryAll().catch(() => {
    }),
    "data-uppy-super-focusable": !0,
    "data-cy": "retry"
  }, d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "8",
    height: "10",
    viewBox: "0 0 8 10"
  }, d("path", {
    d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
  })), e("retry"));
}
function qp(r) {
  const {
    i18n: e,
    uppy: t
  } = r;
  return d("button", {
    type: "button",
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    title: e("cancel"),
    "aria-label": e("cancel"),
    onClick: () => t.cancelAll(),
    "data-cy": "cancel",
    "data-uppy-super-focusable": !0
  }, d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, d("g", {
    fill: "none",
    fillRule: "evenodd"
  }, d("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), d("path", {
    fill: "#FFF",
    d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
  }))));
}
function Hp(r) {
  const {
    isAllPaused: e,
    i18n: t,
    isAllComplete: i,
    resumableUploads: o,
    uppy: n
  } = r, a = t(e ? "resume" : "pause");
  function s() {
    if (!i) {
      if (!o) {
        n.cancelAll();
        return;
      }
      if (e) {
        n.resumeAll();
        return;
      }
      n.pauseAll();
    }
  }
  return d("button", {
    title: a,
    "aria-label": a,
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    type: "button",
    onClick: s,
    "data-cy": "togglePauseResume",
    "data-uppy-super-focusable": !0
  }, d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, d("g", {
    fill: "none",
    fillRule: "evenodd"
  }, d("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), d("path", {
    fill: "#FFF",
    d: e ? "M6 4.25L11.5 8 6 11.75z" : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z"
  }))));
}
function Wp(r) {
  const {
    i18n: e,
    doneButtonHandler: t
  } = r;
  return d("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--done",
    onClick: t,
    "data-uppy-super-focusable": !0
  }, e("done"));
}
function Ws() {
  return d("svg", {
    className: "uppy-StatusBar-spinner",
    "aria-hidden": "true",
    focusable: "false",
    width: "14",
    height: "14"
  }, d("path", {
    d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
    fillRule: "evenodd"
  }));
}
function Gp(r) {
  const {
    progress: e
  } = r, {
    value: t,
    mode: i,
    message: o
  } = e;
  return d("div", {
    className: "uppy-StatusBar-content"
  }, d(Ws, null), i === "determinate" ? `${Math.round(t * 100)}% · ` : "", o);
}
function Vp(r) {
  const {
    numUploads: e,
    complete: t,
    totalUploadedSize: i,
    totalSize: o,
    totalETA: n,
    i18n: a
  } = r, s = e > 1, l = Pt(i);
  return d("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, s && a("filesUploadedOfTotal", {
    complete: t,
    smart_count: e
  }), d("span", {
    className: "uppy-StatusBar-additionalInfo"
  }, s && pa(), o != null ? a("dataUploadedOfTotal", {
    complete: l,
    total: Pt(o)
  }) : a("dataUploadedOfUnknown", {
    complete: l
  }), pa(), n != null && a("xTimeLeft", {
    time: Np(n)
  })));
}
function Gs(r) {
  const {
    i18n: e,
    complete: t,
    numUploads: i
  } = r;
  return d("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, e("filesUploadedOfTotal", {
    complete: t,
    smart_count: i
  }));
}
function Kp(r) {
  const {
    i18n: e,
    newFiles: t,
    startUpload: i
  } = r, o = qe("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--uploadNewlyAdded");
  return d("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, d("div", {
    className: "uppy-StatusBar-statusSecondaryHint"
  }, e("xMoreFilesAdded", {
    smart_count: t
  })), d("button", {
    type: "button",
    className: o,
    "aria-label": e("uploadXFiles", {
      smart_count: t
    }),
    onClick: i
  }, e("upload")));
}
function Xp(r) {
  const {
    i18n: e,
    supportsUploadProgress: t,
    totalProgress: i,
    showProgressDetails: o,
    isUploadStarted: n,
    isAllComplete: a,
    isAllPaused: s,
    newFiles: l,
    numUploads: u,
    complete: p,
    totalUploadedSize: c,
    totalSize: f,
    totalETA: P,
    startUpload: T
  } = r, O = l && n;
  if (!n || a)
    return null;
  const x = e(s ? "paused" : "uploading");
  function D() {
    return !s && !O && o ? t ? d(Vp, {
      numUploads: u,
      complete: p,
      totalUploadedSize: c,
      totalSize: f,
      totalETA: P,
      i18n: e
    }) : d(Gs, {
      i18n: e,
      complete: p,
      numUploads: u
    }) : null;
  }
  return d("div", {
    className: "uppy-StatusBar-content",
    "aria-label": x,
    title: x
  }, s ? null : d(Ws, null), d("div", {
    className: "uppy-StatusBar-status"
  }, d("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, t && i !== 0 ? `${x}: ${i}%` : x), D(), O ? d(Kp, {
    i18n: e,
    newFiles: l,
    startUpload: T
  }) : null));
}
function Yp(r) {
  const {
    i18n: e
  } = r;
  return d("div", {
    className: "uppy-StatusBar-content",
    role: "status",
    title: e("complete")
  }, d("div", {
    className: "uppy-StatusBar-status"
  }, d("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "15",
    height: "11",
    viewBox: "0 0 15 11"
  }, d("path", {
    d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
  })), e("complete"))));
}
function Zp(r) {
  const {
    error: e,
    i18n: t,
    complete: i,
    numUploads: o
  } = r;
  function n() {
    const a = `${t("uploadFailed")} 

 ${e}`;
    alert(a);
  }
  return d("div", {
    className: "uppy-StatusBar-content",
    title: t("uploadFailed")
  }, d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11"
  }, d("path", {
    d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
  })), d("div", {
    className: "uppy-StatusBar-status"
  }, d("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, t("uploadFailed"), d("button", {
    className: "uppy-u-reset uppy-StatusBar-details",
    "aria-label": t("showErrorDetails"),
    "data-microtip-position": "top-right",
    "data-microtip-size": "medium",
    onClick: n,
    type: "button"
  }, "?")), d(Gs, {
    i18n: t,
    complete: i,
    numUploads: o
  })));
}
const {
  STATE_ERROR: da,
  STATE_WAITING: Jp,
  STATE_PREPROCESSING: Ki,
  STATE_UPLOADING: Gr,
  STATE_POSTPROCESSING: Xi,
  STATE_COMPLETE: Vr
} = Ge;
function Qp(r) {
  let {
    newFiles: e,
    allowNewUpload: t,
    isUploadInProgress: i,
    isAllPaused: o,
    resumableUploads: n,
    error: a,
    hideUploadButton: s = void 0,
    hidePauseResumeButton: l = !1,
    hideCancelButton: u = !1,
    hideRetryButton: p = !1,
    recoveredState: c,
    uploadState: f,
    totalProgress: P,
    files: T,
    supportsUploadProgress: O,
    hideAfterFinish: x = !1,
    isSomeGhost: D,
    doneButtonHandler: m = void 0,
    isUploadStarted: w,
    i18n: _,
    startUpload: S,
    uppy: E,
    isAllComplete: A,
    showProgressDetails: U = void 0,
    numUploads: j,
    complete: ee,
    totalSize: J,
    totalETA: re,
    totalUploadedSize: B
  } = r;
  function ie() {
    switch (f) {
      case Xi:
      case Ki: {
        const ht = Vi(T);
        return ht.mode === "determinate" ? ht.value * 100 : P;
      }
      case da:
        return null;
      case Gr:
        return O ? P : null;
      default:
        return P;
    }
  }
  function se() {
    switch (f) {
      case Xi:
      case Ki: {
        const {
          mode: ht
        } = Vi(T);
        return ht === "indeterminate";
      }
      case Gr:
        return !O;
      default:
        return !1;
    }
  }
  const y = ie(), h = y ?? 100, g = !a && e && (!i && !o || c) && t && !s, F = !u && f !== Jp && f !== Vr, C = n && !l && f === Gr, I = a && !A && !p, W = m && f === Vr, R = qe("uppy-StatusBar-progress", {
    "is-indeterminate": se()
  }), V = qe("uppy-StatusBar", `is-${f}`, {
    "has-ghosts": D
  }), de = (() => {
    switch (f) {
      case Ki:
      case Xi:
        return d(Gp, {
          progress: Vi(T)
        });
      case Vr:
        return d(Yp, {
          i18n: _
        });
      case da:
        return d(Zp, {
          error: a,
          i18n: _,
          numUploads: j,
          complete: ee
        });
      case Gr:
        return d(Xp, {
          i18n: _,
          supportsUploadProgress: O,
          totalProgress: P,
          showProgressDetails: U,
          isUploadStarted: w,
          isAllComplete: A,
          isAllPaused: o,
          newFiles: e,
          numUploads: j,
          complete: ee,
          totalUploadedSize: B,
          totalSize: J,
          totalETA: re,
          startUpload: S
        });
      default:
        return null;
    }
  })();
  return !(g || I || C || F || W) && !de || f === Vr && x ? null : d("div", {
    className: V
  }, d("div", {
    className: R,
    style: {
      width: `${h}%`
    },
    role: "progressbar",
    "aria-label": `${h}%`,
    "aria-valuetext": `${h}%`,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": y
  }), de, d("div", {
    className: "uppy-StatusBar-actions"
  }, g ? d(jp, {
    newFiles: e,
    isUploadStarted: w,
    recoveredState: c,
    i18n: _,
    isSomeGhost: D,
    startUpload: S,
    uploadState: f
  }) : null, I ? d($p, {
    i18n: _,
    uppy: E
  }) : null, C ? d(Hp, {
    isAllPaused: o,
    i18n: _,
    isAllComplete: A,
    resumableUploads: n,
    uppy: E
  }) : null, F ? d(qp, {
    i18n: _,
    uppy: E
  }) : null, W ? d(Wp, {
    i18n: _,
    doneButtonHandler: m
  }) : null));
}
const ed = {
  strings: {
    // Shown in the status bar while files are being uploaded.
    uploading: "Uploading",
    // Shown in the status bar once all files have been uploaded.
    complete: "Complete",
    // Shown in the status bar if an upload failed.
    uploadFailed: "Upload failed",
    // Shown in the status bar while the upload is paused.
    paused: "Paused",
    // Used as the label for the button that retries an upload.
    retry: "Retry",
    // Used as the label for the button that cancels an upload.
    cancel: "Cancel",
    // Used as the label for the button that pauses an upload.
    pause: "Pause",
    // Used as the label for the button that resumes an upload.
    resume: "Resume",
    // Used as the label for the button that resets the upload state after an upload
    done: "Done",
    // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.
    filesUploadedOfTotal: {
      0: "%{complete} of %{smart_count} file uploaded",
      1: "%{complete} of %{smart_count} files uploaded"
    },
    // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.
    dataUploadedOfTotal: "%{complete} of %{total}",
    dataUploadedOfUnknown: "%{complete} of unknown",
    // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.
    xTimeLeft: "%{time} left",
    // Used as the label for the button that starts an upload.
    uploadXFiles: {
      0: "Upload %{smart_count} file",
      1: "Upload %{smart_count} files"
    },
    // Used as the label for the button that starts an upload, if another upload has been started in the past
    // and new files were added later.
    uploadXNewFiles: {
      0: "Upload +%{smart_count} file",
      1: "Upload +%{smart_count} files"
    },
    upload: "Upload",
    retryUpload: "Retry upload",
    xMoreFilesAdded: {
      0: "%{smart_count} more file added",
      1: "%{smart_count} more files added"
    },
    showErrorDetails: "Show error details"
  }
};
function le(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var td = 0;
function Kt(r) {
  return "__private_" + td++ + "_" + r;
}
const rd = {
  version: "4.1.3"
}, id = 2e3, od = 2e3;
function nd(r, e, t, i) {
  if (r)
    return Ge.STATE_ERROR;
  if (e)
    return Ge.STATE_COMPLETE;
  if (t)
    return Ge.STATE_WAITING;
  let o = Ge.STATE_WAITING;
  const n = Object.keys(i);
  for (let a = 0; a < n.length; a++) {
    const {
      progress: s
    } = i[n[a]];
    if (s.uploadStarted && !s.uploadComplete)
      return Ge.STATE_UPLOADING;
    s.preprocess && (o = Ge.STATE_PREPROCESSING), s.postprocess && o !== Ge.STATE_PREPROCESSING && (o = Ge.STATE_POSTPROCESSING);
  }
  return o;
}
const ad = {
  hideUploadButton: !1,
  hideRetryButton: !1,
  hidePauseResumeButton: !1,
  hideCancelButton: !1,
  showProgressDetails: !1,
  hideAfterFinish: !0,
  doneButtonHandler: null
};
var Re = /* @__PURE__ */ Kt("lastUpdateTime"), Le = /* @__PURE__ */ Kt("previousUploadedBytes"), tt = /* @__PURE__ */ Kt("previousSpeed"), Oe = /* @__PURE__ */ Kt("previousETA"), Yi = /* @__PURE__ */ Kt("computeSmoothETA"), sr = /* @__PURE__ */ Kt("onUploadStart");
class Vs extends Dt {
  constructor(e, t) {
    super(e, {
      ...ad,
      ...t
    }), Object.defineProperty(this, Yi, {
      value: sd
    }), Object.defineProperty(this, Re, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Le, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, tt, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Oe, {
      writable: !0,
      value: void 0
    }), this.startUpload = () => this.uppy.upload().catch(() => {
    }), Object.defineProperty(this, sr, {
      writable: !0,
      value: () => {
        const {
          recoveredState: i
        } = this.uppy.getState();
        if (le(this, tt)[tt] = null, le(this, Oe)[Oe] = null, i) {
          le(this, Le)[Le] = Object.values(i.files).reduce((o, n) => {
            let {
              progress: a
            } = n;
            return o + a.bytesUploaded;
          }, 0), this.uppy.emit("restore-confirmed");
          return;
        }
        le(this, Re)[Re] = performance.now(), le(this, Le)[Le] = 0;
      }
    }), this.id = this.opts.id || "StatusBar", this.title = "StatusBar", this.type = "progressindicator", this.defaultLocale = ed, this.i18nInit(), this.render = this.render.bind(this), this.install = this.install.bind(this);
  }
  render(e) {
    const {
      capabilities: t,
      files: i,
      allowNewUpload: o,
      totalProgress: n,
      error: a,
      recoveredState: s
    } = e, {
      newFiles: l,
      startedFiles: u,
      completeFiles: p,
      isUploadStarted: c,
      isAllComplete: f,
      isAllPaused: P,
      isUploadInProgress: T,
      isSomeGhost: O
    } = this.uppy.getObjectOfFilesPerState(), x = s ? Object.values(i) : l, D = !!t.resumableUploads, m = t.uploadProgress !== !1;
    let w = null, _ = 0;
    u.every((E) => E.progress.bytesTotal != null && E.progress.bytesTotal !== 0) ? (w = 0, u.forEach((E) => {
      w += E.progress.bytesTotal || 0, _ += E.progress.bytesUploaded || 0;
    })) : u.forEach((E) => {
      _ += E.progress.bytesUploaded || 0;
    });
    const S = le(this, Yi)[Yi]({
      uploaded: _,
      total: w
    });
    return Qp({
      error: a,
      uploadState: nd(a, f, s, e.files || {}),
      allowNewUpload: o,
      totalProgress: n,
      totalSize: w,
      totalUploadedSize: _,
      isAllComplete: !1,
      isAllPaused: P,
      isUploadStarted: c,
      isUploadInProgress: T,
      isSomeGhost: O,
      recoveredState: s,
      complete: p.length,
      newFiles: x.length,
      numUploads: u.length,
      totalETA: S,
      files: i,
      i18n: this.i18n,
      uppy: this.uppy,
      startUpload: this.startUpload,
      doneButtonHandler: this.opts.doneButtonHandler,
      resumableUploads: D,
      supportsUploadProgress: m,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish
    });
  }
  onMount() {
    const e = this.el;
    qs(e) || (e.dir = "ltr");
  }
  install() {
    const {
      target: e
    } = this.opts;
    e && this.mount(e, this), this.uppy.on("upload", le(this, sr)[sr]), le(this, Re)[Re] = performance.now(), le(this, Le)[Le] = this.uppy.getFiles().reduce((t, i) => t + i.progress.bytesUploaded, 0);
  }
  uninstall() {
    this.unmount(), this.uppy.off("upload", le(this, sr)[sr]);
  }
}
function sd(r) {
  var e, t;
  if (r.total == null || r.total === 0)
    return null;
  const i = r.total - r.uploaded;
  if (i <= 0)
    return null;
  (t = (e = le(this, Re))[Re]) != null || (e[Re] = performance.now());
  const o = performance.now() - le(this, Re)[Re];
  if (o === 0) {
    var n;
    return Math.round(((n = le(this, Oe)[Oe]) != null ? n : 0) / 100) / 10;
  }
  const a = r.uploaded - le(this, Le)[Le];
  if (le(this, Le)[Le] = r.uploaded, a <= 0) {
    var s;
    return Math.round(((s = le(this, Oe)[Oe]) != null ? s : 0) / 100) / 10;
  }
  const l = a / o, u = le(this, tt)[tt] == null ? l : la(l, le(this, tt)[tt], id, o);
  le(this, tt)[tt] = u;
  const p = i / u, c = Math.max(le(this, Oe)[Oe] - o, 0), f = le(this, Oe)[Oe] == null ? p : la(p, c, od, o);
  return le(this, Oe)[Oe] = f, le(this, Re)[Re] = performance.now(), Math.round(f / 100) / 10;
}
Vs.VERSION = rd.version;
const ca = 300;
class ld extends at {
  constructor() {
    super(...arguments), this.ref = Dp();
  }
  componentWillEnter(e) {
    this.ref.current.style.opacity = "1", this.ref.current.style.transform = "none", setTimeout(e, ca);
  }
  componentWillLeave(e) {
    this.ref.current.style.opacity = "0", this.ref.current.style.transform = "translateY(350%)", setTimeout(e, ca);
  }
  render() {
    const {
      children: e
    } = this.props;
    return d("div", {
      className: "uppy-Informer-animated",
      ref: this.ref
    }, e);
  }
}
function ud(r, e) {
  return Object.assign(r, e);
}
function pd(r, e) {
  var t;
  return (t = r?.key) != null ? t : e;
}
function dd(r, e) {
  const t = r._ptgLinkedRefs || (r._ptgLinkedRefs = {});
  return t[e] || (t[e] = (i) => {
    r.refs[e] = i;
  });
}
function lr(r) {
  const e = {};
  for (let t = 0; t < r.length; t++)
    if (r[t] != null) {
      const i = pd(r[t], t.toString(36));
      e[i] = r[t];
    }
  return e;
}
function cd(r, e) {
  r = r || {}, e = e || {};
  const t = (a) => e.hasOwnProperty(a) ? e[a] : r[a], i = {};
  let o = [];
  for (const a in r)
    e.hasOwnProperty(a) ? o.length && (i[a] = o, o = []) : o.push(a);
  const n = {};
  for (const a in e) {
    if (i.hasOwnProperty(a))
      for (let s = 0; s < i[a].length; s++) {
        const l = i[a][s];
        n[i[a][s]] = t(l);
      }
    n[a] = t(a);
  }
  for (let a = 0; a < o.length; a++)
    n[o[a]] = t(o[a]);
  return n;
}
const hd = (r) => r;
class Ks extends at {
  constructor(e, t) {
    super(e, t), this.refs = {}, this.state = {
      children: lr(lt(lt(this.props.children)) || [])
    }, this.performAppear = this.performAppear.bind(this), this.performEnter = this.performEnter.bind(this), this.performLeave = this.performLeave.bind(this);
  }
  componentWillMount() {
    this.currentlyTransitioningKeys = {}, this.keysToAbortLeave = [], this.keysToEnter = [], this.keysToLeave = [];
  }
  componentDidMount() {
    const e = this.state.children;
    for (const t in e)
      e[t] && this.performAppear(t);
  }
  componentWillReceiveProps(e) {
    const t = lr(lt(e.children) || []), i = this.state.children;
    this.setState((n) => ({
      children: cd(n.children, t)
    }));
    let o;
    for (o in t)
      if (t.hasOwnProperty(o)) {
        const n = i && i.hasOwnProperty(o);
        t[o] && n && this.currentlyTransitioningKeys[o] ? (this.keysToEnter.push(o), this.keysToAbortLeave.push(o)) : t[o] && !n && !this.currentlyTransitioningKeys[o] && this.keysToEnter.push(o);
      }
    for (o in i)
      if (i.hasOwnProperty(o)) {
        const n = t && t.hasOwnProperty(o);
        i[o] && !n && !this.currentlyTransitioningKeys[o] && this.keysToLeave.push(o);
      }
  }
  componentDidUpdate() {
    const {
      keysToEnter: e
    } = this;
    this.keysToEnter = [], e.forEach(this.performEnter);
    const {
      keysToLeave: t
    } = this;
    this.keysToLeave = [], t.forEach(this.performLeave);
  }
  _finishAbort(e) {
    const t = this.keysToAbortLeave.indexOf(e);
    t !== -1 && this.keysToAbortLeave.splice(t, 1);
  }
  performAppear(e) {
    this.currentlyTransitioningKeys[e] = !0;
    const t = this.refs[e];
    t != null && t.componentWillAppear ? t.componentWillAppear(this._handleDoneAppearing.bind(this, e)) : this._handleDoneAppearing(e);
  }
  _handleDoneAppearing(e) {
    const t = this.refs[e];
    t != null && t.componentDidAppear && t.componentDidAppear(), delete this.currentlyTransitioningKeys[e], this._finishAbort(e);
    const i = lr(lt(this.props.children) || []);
    (!i || !i.hasOwnProperty(e)) && this.performLeave(e);
  }
  performEnter(e) {
    this.currentlyTransitioningKeys[e] = !0;
    const t = this.refs[e];
    t != null && t.componentWillEnter ? t.componentWillEnter(this._handleDoneEntering.bind(this, e)) : this._handleDoneEntering(e);
  }
  _handleDoneEntering(e) {
    const t = this.refs[e];
    t != null && t.componentDidEnter && t.componentDidEnter(), delete this.currentlyTransitioningKeys[e], this._finishAbort(e);
    const i = lr(lt(this.props.children) || []);
    (!i || !i.hasOwnProperty(e)) && this.performLeave(e);
  }
  performLeave(e) {
    if (this.keysToAbortLeave.indexOf(e) !== -1)
      return;
    this.currentlyTransitioningKeys[e] = !0;
    const i = this.refs[e];
    i != null && i.componentWillLeave ? i.componentWillLeave(this._handleDoneLeaving.bind(this, e)) : this._handleDoneLeaving(e);
  }
  _handleDoneLeaving(e) {
    if (this.keysToAbortLeave.indexOf(e) !== -1)
      return;
    const i = this.refs[e];
    i != null && i.componentDidLeave && i.componentDidLeave(), delete this.currentlyTransitioningKeys[e];
    const o = lr(lt(this.props.children) || []);
    if (o && o.hasOwnProperty(e))
      this.performEnter(e);
    else {
      const n = ud({}, this.state.children);
      delete n[e], this.setState({
        children: n
      });
    }
  }
  render(e, t) {
    let {
      childFactory: i,
      transitionLeave: o,
      transitionName: n,
      transitionAppear: a,
      transitionEnter: s,
      transitionLeaveTimeout: l,
      transitionEnterTimeout: u,
      transitionAppearTimeout: p,
      component: c,
      ...f
    } = e, {
      children: P
    } = t;
    const T = Object.entries(P).map((O) => {
      let [x, D] = O;
      if (!D) return;
      const m = dd(this, x);
      return js(i(D), {
        ref: m,
        key: x
      });
    }).filter(Boolean);
    return d(c, f, T);
  }
}
Ks.defaultProps = {
  component: "span",
  childFactory: hd
};
const fd = {
  version: "4.2.1"
};
class Xs extends Dt {
  constructor(e, t) {
    super(e, t), this.render = (i) => d("div", {
      className: "uppy uppy-Informer"
    }, d(Ks, null, i.info.map((o) => d(ld, {
      key: o.message
    }, d("p", {
      role: "alert"
    }, o.message, " ", o.details && d("span", {
      "aria-label": o.details,
      "data-microtip-position": "top-left",
      "data-microtip-size": "medium",
      role: "tooltip",
      onClick: () => (
        // eslint-disable-next-line no-alert
        alert(`${o.message} 

 ${o.details}`)
      )
    }, "?")))))), this.type = "progressindicator", this.id = this.opts.id || "Informer", this.title = "Informer";
  }
  install() {
    const {
      target: e
    } = this.opts;
    e && this.mount(e, this);
  }
}
Xs.VERSION = fd.version;
const yd = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;
function md(r, e, t) {
  var i, o;
  const n = yd.exec(r), a = (i = (o = e.mimeType) != null ? o : n?.[1]) != null ? i : "plain/text";
  let s;
  if (n?.[2] != null) {
    const l = atob(decodeURIComponent(n[3])), u = new Uint8Array(l.length);
    for (let p = 0; p < l.length; p++)
      u[p] = l.charCodeAt(p);
    s = [u];
  } else n?.[3] != null && (s = [decodeURIComponent(n[3])]);
  return new Blob(s, {
    type: a
  });
}
function ha(r) {
  return r.startsWith("blob:");
}
function fa(r) {
  return r ? /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(r) : !1;
}
function te(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
var Ys = typeof self < "u" ? self : global;
const Ir = typeof navigator < "u", gd = Ir && typeof HTMLImageElement > "u", ya = !(typeof global > "u" || typeof process > "u" || !process.versions || !process.versions.node), Zs = Ys.Buffer, Js = !!Zs, bd = (r) => r !== void 0;
function Qs(r) {
  return r === void 0 || (r instanceof Map ? r.size === 0 : Object.values(r).filter(bd).length === 0);
}
function ge(r) {
  let e = new Error(r);
  throw delete e.stack, e;
}
function ma(r) {
  let e = function(t) {
    let i = 0;
    return t.ifd0.enabled && (i += 1024), t.exif.enabled && (i += 2048), t.makerNote && (i += 2048), t.userComment && (i += 1024), t.gps.enabled && (i += 512), t.interop.enabled && (i += 100), t.ifd1.enabled && (i += 1024), i + 2048;
  }(r);
  return r.jfif.enabled && (e += 50), r.xmp.enabled && (e += 2e4), r.iptc.enabled && (e += 14e3), r.icc.enabled && (e += 6e3), e;
}
const Zi = (r) => String.fromCharCode.apply(null, r), ga = typeof TextDecoder < "u" ? new TextDecoder("utf-8") : void 0;
let Tr = class Rt {
  static from(e, t) {
    return e instanceof this && e.le === t ? e : new Rt(e, void 0, void 0, t);
  }
  constructor(e, t = 0, i, o) {
    if (typeof o == "boolean" && (this.le = o), Array.isArray(e) && (e = new Uint8Array(e)), e === 0) this.byteOffset = 0, this.byteLength = 0;
    else if (e instanceof ArrayBuffer) {
      i === void 0 && (i = e.byteLength - t);
      let n = new DataView(e, t, i);
      this._swapDataView(n);
    } else if (e instanceof Uint8Array || e instanceof DataView || e instanceof Rt) {
      i === void 0 && (i = e.byteLength - t), (t += e.byteOffset) + i > e.byteOffset + e.byteLength && ge("Creating view outside of available memory in ArrayBuffer");
      let n = new DataView(e.buffer, t, i);
      this._swapDataView(n);
    } else if (typeof e == "number") {
      let n = new DataView(new ArrayBuffer(e));
      this._swapDataView(n);
    } else ge("Invalid input argument for BufferView: " + e);
  }
  _swapArrayBuffer(e) {
    this._swapDataView(new DataView(e));
  }
  _swapBuffer(e) {
    this._swapDataView(new DataView(e.buffer, e.byteOffset, e.byteLength));
  }
  _swapDataView(e) {
    this.dataView = e, this.buffer = e.buffer, this.byteOffset = e.byteOffset, this.byteLength = e.byteLength;
  }
  _lengthToEnd(e) {
    return this.byteLength - e;
  }
  set(e, t, i = Rt) {
    return e instanceof DataView || e instanceof Rt ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array || ge("BufferView.set(): Invalid data argument."), this.toUint8().set(e, t), new i(this, t, e.byteLength);
  }
  subarray(e, t) {
    return t = t || this._lengthToEnd(e), new Rt(this, e, t);
  }
  toUint8() {
    return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
  }
  getUint8Array(e, t) {
    return new Uint8Array(this.buffer, this.byteOffset + e, t);
  }
  getString(e = 0, t = this.byteLength) {
    return o = this.getUint8Array(e, t), ga ? ga.decode(o) : Js ? Buffer.from(o).toString("utf8") : decodeURIComponent(escape(Zi(o)));
    var o;
  }
  getLatin1String(e = 0, t = this.byteLength) {
    let i = this.getUint8Array(e, t);
    return Zi(i);
  }
  getUnicodeString(e = 0, t = this.byteLength) {
    const i = [];
    for (let o = 0; o < t && e + o < this.byteLength; o += 2) i.push(this.getUint16(e + o));
    return Zi(i);
  }
  getInt8(e) {
    return this.dataView.getInt8(e);
  }
  getUint8(e) {
    return this.dataView.getUint8(e);
  }
  getInt16(e, t = this.le) {
    return this.dataView.getInt16(e, t);
  }
  getInt32(e, t = this.le) {
    return this.dataView.getInt32(e, t);
  }
  getUint16(e, t = this.le) {
    return this.dataView.getUint16(e, t);
  }
  getUint32(e, t = this.le) {
    return this.dataView.getUint32(e, t);
  }
  getFloat32(e, t = this.le) {
    return this.dataView.getFloat32(e, t);
  }
  getFloat64(e, t = this.le) {
    return this.dataView.getFloat64(e, t);
  }
  getFloat(e, t = this.le) {
    return this.dataView.getFloat32(e, t);
  }
  getDouble(e, t = this.le) {
    return this.dataView.getFloat64(e, t);
  }
  getUintBytes(e, t, i) {
    switch (t) {
      case 1:
        return this.getUint8(e, i);
      case 2:
        return this.getUint16(e, i);
      case 4:
        return this.getUint32(e, i);
      case 8:
        return this.getUint64 && this.getUint64(e, i);
    }
  }
  getUint(e, t, i) {
    switch (t) {
      case 8:
        return this.getUint8(e, i);
      case 16:
        return this.getUint16(e, i);
      case 32:
        return this.getUint32(e, i);
      case 64:
        return this.getUint64 && this.getUint64(e, i);
    }
  }
  toString(e) {
    return this.dataView.toString(e, this.constructor.name);
  }
  ensureChunk() {
  }
};
function Io(r, e) {
  ge(`${r} '${e}' was not loaded, try using full build of exifr.`);
}
class nn extends Map {
  constructor(e) {
    super(), this.kind = e;
  }
  get(e, t) {
    return this.has(e) || Io(this.kind, e), t && (e in t || function(i, o) {
      ge(`Unknown ${i} '${o}'.`);
    }(this.kind, e), t[e].enabled || Io(this.kind, e)), super.get(e);
  }
  keyList() {
    return Array.from(this.keys());
  }
}
var el = new nn("file parser"), je = new nn("segment parser"), an = new nn("file reader");
let vd = Ys.fetch;
function ba(r, e) {
  return (t = r).startsWith("data:") || t.length > 1e4 ? Bo(r, e, "base64") : ya && r.includes("://") ? To(r, e, "url", va) : ya ? Bo(r, e, "fs") : Ir ? To(r, e, "url", va) : void ge("Invalid input argument");
  var t;
}
async function To(r, e, t, i) {
  return an.has(t) ? Bo(r, e, t) : i ? async function(o, n) {
    let a = await n(o);
    return new Tr(a);
  }(r, i) : void ge(`Parser ${t} is not loaded`);
}
async function Bo(r, e, t) {
  let i = new (an.get(t))(r, e);
  return await i.read(), i;
}
const va = (r) => vd(r).then((e) => e.arrayBuffer()), Co = (r) => new Promise((e, t) => {
  let i = new FileReader();
  i.onloadend = () => e(i.result || new ArrayBuffer()), i.onerror = t, i.readAsArrayBuffer(r);
}), sn = /* @__PURE__ */ new Map(), wd = /* @__PURE__ */ new Map(), xd = /* @__PURE__ */ new Map(), Kr = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"], tl = ["jfif", "xmp", "icc", "iptc", "ihdr"], Oo = ["tiff", ...tl], me = ["ifd0", "ifd1", "exif", "gps", "interop"], Xr = [...Oo, ...me], Yr = ["makerNote", "userComment"], rl = ["translateKeys", "translateValues", "reviveValues", "multiSegment"], Zr = [...rl, "sanitize", "mergeOutput", "silentErrors"];
class il {
  get translate() {
    return this.translateKeys || this.translateValues || this.reviveValues;
  }
}
let ur = class extends il {
  get needed() {
    return this.enabled || this.deps.size > 0;
  }
  constructor(e, t, i, o) {
    if (super(), te(this, "enabled", !1), te(this, "skip", /* @__PURE__ */ new Set()), te(this, "pick", /* @__PURE__ */ new Set()), te(this, "deps", /* @__PURE__ */ new Set()), te(this, "translateKeys", !1), te(this, "translateValues", !1), te(this, "reviveValues", !1), this.key = e, this.enabled = t, this.parse = this.enabled, this.applyInheritables(o), this.canBeFiltered = me.includes(e), this.canBeFiltered && (this.dict = sn.get(e)), i !== void 0) if (Array.isArray(i)) this.parse = this.enabled = !0, this.canBeFiltered && i.length > 0 && this.translateTagSet(i, this.pick);
    else if (typeof i == "object") {
      if (this.enabled = !0, this.parse = i.parse !== !1, this.canBeFiltered) {
        let { pick: n, skip: a } = i;
        n && n.length > 0 && this.translateTagSet(n, this.pick), a && a.length > 0 && this.translateTagSet(a, this.skip);
      }
      this.applyInheritables(i);
    } else i === !0 || i === !1 ? this.parse = this.enabled = i : ge(`Invalid options argument: ${i}`);
  }
  applyInheritables(e) {
    let t, i;
    for (t of rl) i = e[t], i !== void 0 && (this[t] = i);
  }
  translateTagSet(e, t) {
    if (this.dict) {
      let i, o, { tagKeys: n, tagValues: a } = this.dict;
      for (i of e) typeof i == "string" ? (o = a.indexOf(i), o === -1 && (o = n.indexOf(Number(i))), o !== -1 && t.add(Number(n[o]))) : t.add(i);
    } else for (let i of e) t.add(i);
  }
  finalizeFilters() {
    !this.enabled && this.deps.size > 0 ? (this.enabled = !0, ci(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && ci(this.pick, this.deps);
  }
};
var ke = { jfif: !1, tiff: !0, xmp: !1, icc: !1, iptc: !1, ifd0: !0, ifd1: !1, exif: !0, gps: !0, interop: !1, ihdr: void 0, makerNote: !1, userComment: !1, multiSegment: !1, skip: [], pick: [], translateKeys: !0, translateValues: !0, reviveValues: !0, sanitize: !0, mergeOutput: !0, silentErrors: !0, chunked: !0, firstChunkSize: void 0, firstChunkSizeNode: 512, firstChunkSizeBrowser: 65536, chunkSize: 65536, chunkLimit: 5 }, wa = /* @__PURE__ */ new Map();
class ln extends il {
  static useCached(e) {
    let t = wa.get(e);
    return t !== void 0 || (t = new this(e), wa.set(e, t)), t;
  }
  constructor(e) {
    super(), e === !0 ? this.setupFromTrue() : e === void 0 ? this.setupFromUndefined() : Array.isArray(e) ? this.setupFromArray(e) : typeof e == "object" ? this.setupFromObject(e) : ge(`Invalid options argument ${e}`), this.firstChunkSize === void 0 && (this.firstChunkSize = Ir ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
  }
  setupFromUndefined() {
    let e;
    for (e of Kr) this[e] = ke[e];
    for (e of Zr) this[e] = ke[e];
    for (e of Yr) this[e] = ke[e];
    for (e of Xr) this[e] = new ur(e, ke[e], void 0, this);
  }
  setupFromTrue() {
    let e;
    for (e of Kr) this[e] = ke[e];
    for (e of Zr) this[e] = ke[e];
    for (e of Yr) this[e] = !0;
    for (e of Xr) this[e] = new ur(e, !0, void 0, this);
  }
  setupFromArray(e) {
    let t;
    for (t of Kr) this[t] = ke[t];
    for (t of Zr) this[t] = ke[t];
    for (t of Yr) this[t] = ke[t];
    for (t of Xr) this[t] = new ur(t, !1, void 0, this);
    this.setupGlobalFilters(e, void 0, me);
  }
  setupFromObject(e) {
    let t;
    for (t of (me.ifd0 = me.ifd0 || me.image, me.ifd1 = me.ifd1 || me.thumbnail, Object.assign(this, e), Kr)) this[t] = Ji(e[t], ke[t]);
    for (t of Zr) this[t] = Ji(e[t], ke[t]);
    for (t of Yr) this[t] = Ji(e[t], ke[t]);
    for (t of Oo) this[t] = new ur(t, ke[t], e[t], this);
    for (t of me) this[t] = new ur(t, ke[t], e[t], this.tiff);
    this.setupGlobalFilters(e.pick, e.skip, me, Xr), e.tiff === !0 ? this.batchEnableWithBool(me, !0) : e.tiff === !1 ? this.batchEnableWithUserValue(me, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, me) : typeof e.tiff == "object" && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, me);
  }
  batchEnableWithBool(e, t) {
    for (let i of e) this[i].enabled = t;
  }
  batchEnableWithUserValue(e, t) {
    for (let i of e) {
      let o = t[i];
      this[i].enabled = o !== !1 && o !== void 0;
    }
  }
  setupGlobalFilters(e, t, i, o = i) {
    if (e && e.length) {
      for (let a of o) this[a].enabled = !1;
      let n = xa(e, i);
      for (let [a, s] of n) ci(this[a].pick, s), this[a].enabled = !0;
    } else if (t && t.length) {
      let n = xa(t, i);
      for (let [a, s] of n) ci(this[a].skip, s);
    }
  }
  filterNestedSegmentTags() {
    let { ifd0: e, exif: t, xmp: i, iptc: o, icc: n } = this;
    this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), i.enabled || e.skip.add(700), o.enabled || e.skip.add(33723), n.enabled || e.skip.add(34675);
  }
  traverseTiffDependencyTree() {
    let { ifd0: e, exif: t, gps: i, interop: o } = this;
    o.needed && (t.deps.add(40965), e.deps.add(40965)), t.needed && e.deps.add(34665), i.needed && e.deps.add(34853), this.tiff.enabled = me.some((n) => this[n].enabled === !0) || this.makerNote || this.userComment;
    for (let n of me) this[n].finalizeFilters();
  }
  get onlyTiff() {
    return !tl.map((e) => this[e].enabled).some((e) => e === !0) && this.tiff.enabled;
  }
  checkLoadedPlugins() {
    for (let e of Oo) this[e].enabled && !je.has(e) && Io("segment parser", e);
  }
}
function xa(r, e) {
  let t, i, o, n, a = [];
  for (o of e) {
    for (n of (t = sn.get(o), i = [], t)) (r.includes(n[0]) || r.includes(n[1])) && i.push(n[0]);
    i.length && a.push([o, i]);
  }
  return a;
}
function Ji(r, e) {
  return r !== void 0 ? r : e !== void 0 ? e : void 0;
}
function ci(r, e) {
  for (let t of e) r.add(t);
}
te(ln, "default", ke);
class _d {
  constructor(e) {
    te(this, "parsers", {}), te(this, "output", {}), te(this, "errors", []), te(this, "pushToErrors", (t) => this.errors.push(t)), this.options = ln.useCached(e);
  }
  async read(e) {
    this.file = await function(t, i) {
      return typeof t == "string" ? ba(t, i) : Ir && !gd && t instanceof HTMLImageElement ? ba(t.src, i) : t instanceof Uint8Array || t instanceof ArrayBuffer || t instanceof DataView ? new Tr(t) : Ir && t instanceof Blob ? To(t, i, "blob", Co) : void ge("Invalid input argument");
    }(e, this.options);
  }
  setup() {
    if (this.fileParser) return;
    let { file: e } = this, t = e.getUint16(0);
    for (let [i, o] of el) if (o.canHandle(e, t)) return this.fileParser = new o(this.options, this.file, this.parsers), e[i] = !0;
    this.file.close && this.file.close(), ge("Unknown file format");
  }
  async parse() {
    let { output: e, errors: t } = this;
    return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t.length > 0 && (e.errors = t), Qs(i = e) ? void 0 : i;
    var i;
  }
  async executeParsers() {
    let { output: e } = this;
    await this.fileParser.parse();
    let t = Object.values(this.parsers).map(async (i) => {
      let o = await i.parse();
      i.assignToOutput(e, o);
    });
    this.options.silentErrors && (t = t.map((i) => i.catch(this.pushToErrors))), await Promise.all(t);
  }
  async extractThumbnail() {
    this.setup();
    let { options: e, file: t } = this, i = je.get("tiff", e);
    var o;
    if (t.tiff ? o = { start: 0, type: "tiff" } : t.jpeg && (o = await this.fileParser.getOrFindSegment("tiff")), o === void 0) return;
    let n = await this.fileParser.ensureSegmentChunk(o), a = this.parsers.tiff = new i(n, e, t), s = await a.extractThumbnail();
    return t.close && t.close(), s;
  }
}
class Nt {
  static findPosition(e, t) {
    let i = e.getUint16(t + 2) + 2, o = typeof this.headerLength == "function" ? this.headerLength(e, t, i) : this.headerLength, n = t + o, a = i - o;
    return { offset: t, length: i, headerLength: o, start: n, size: a, end: n + a };
  }
  static parse(e, t = {}) {
    return new this(e, new ln({ [this.type]: t }), e).parse();
  }
  normalizeInput(e) {
    return e instanceof Tr ? e : new Tr(e);
  }
  constructor(e, t = {}, i) {
    te(this, "errors", []), te(this, "raw", /* @__PURE__ */ new Map()), te(this, "handleError", (o) => {
      if (!this.options.silentErrors) throw o;
      this.errors.push(o.message);
    }), this.chunk = this.normalizeInput(e), this.file = i, this.type = this.constructor.type, this.globalOptions = this.options = t, this.localOptions = t[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
  }
  translate() {
    this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
  }
  get output() {
    return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
  }
  translateBlock(e, t) {
    let i = xd.get(t), o = wd.get(t), n = sn.get(t), a = this.options[t], s = a.reviveValues && !!i, l = a.translateValues && !!o, u = a.translateKeys && !!n, p = {};
    for (let [c, f] of e) s && i.has(c) ? f = i.get(c)(f) : l && o.has(c) && (f = this.translateValue(f, o.get(c))), u && n.has(c) && (c = n.get(c) || c), p[c] = f;
    return p;
  }
  translateValue(e, t) {
    return t[e] || t.DEFAULT || e;
  }
  assignToOutput(e, t) {
    this.assignObjectToOutput(e, this.constructor.type, t);
  }
  assignObjectToOutput(e, t, i) {
    if (this.globalOptions.mergeOutput) return Object.assign(e, i);
    e[t] ? Object.assign(e[t], i) : e[t] = i;
  }
}
te(Nt, "headerLength", 4), te(Nt, "type", void 0), te(Nt, "multiSegment", !1), te(Nt, "canHandle", () => !1);
function Sd(r) {
  return r === 192 || r === 194 || r === 196 || r === 219 || r === 221 || r === 218 || r === 254;
}
function Pd(r) {
  return r >= 224 && r <= 239;
}
function kd(r, e, t) {
  for (let [i, o] of je) if (o.canHandle(r, e, t)) return i;
}
class _a extends class {
  constructor(e, t, i) {
    te(this, "errors", []), te(this, "ensureSegmentChunk", async (o) => {
      let n = o.start, a = o.size || 65536;
      if (this.file.chunked) if (this.file.available(n, a)) o.chunk = this.file.subarray(n, a);
      else try {
        o.chunk = await this.file.readChunk(n, a);
      } catch (s) {
        ge(`Couldn't read segment: ${JSON.stringify(o)}. ${s.message}`);
      }
      else this.file.byteLength > n + a ? o.chunk = this.file.subarray(n, a) : o.size === void 0 ? o.chunk = this.file.subarray(n) : ge("Segment unreachable: " + JSON.stringify(o));
      return o.chunk;
    }), this.extendOptions && this.extendOptions(e), this.options = e, this.file = t, this.parsers = i;
  }
  injectSegment(e, t) {
    this.options[e].enabled && this.createParser(e, t);
  }
  createParser(e, t) {
    let i = new (je.get(e))(t, this.options, this.file);
    return this.parsers[e] = i;
  }
  createParsers(e) {
    for (let t of e) {
      let { type: i, chunk: o } = t, n = this.options[i];
      if (n && n.enabled) {
        let a = this.parsers[i];
        a && a.append || a || this.createParser(i, o);
      }
    }
  }
  async readSegments(e) {
    let t = e.map(this.ensureSegmentChunk);
    await Promise.all(t);
  }
} {
  constructor(...e) {
    super(...e), te(this, "appSegments", []), te(this, "jpegSegments", []), te(this, "unknownSegments", []);
  }
  static canHandle(e, t) {
    return t === 65496;
  }
  async parse() {
    await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
  }
  setupSegmentFinderArgs(e) {
    e === !0 ? (this.findAll = !0, this.wanted = new Set(je.keyList())) : (e = e === void 0 ? je.keyList().filter((t) => this.options[t].enabled) : e.filter((t) => this.options[t].enabled && je.has(t)), this.findAll = !1, this.remaining = new Set(e), this.wanted = new Set(e)), this.unfinishedMultiSegment = !1;
  }
  async findAppSegments(e = 0, t) {
    this.setupSegmentFinderArgs(t);
    let { file: i, findAll: o, wanted: n, remaining: a } = this;
    if (!o && this.file.chunked && (o = Array.from(n).some((s) => {
      let l = je.get(s), u = this.options[s];
      return l.multiSegment && u.multiSegment;
    }), o && await this.file.readWhole()), e = this.findAppSegmentsInRange(e, i.byteLength), !this.options.onlyTiff && i.chunked) {
      let s = !1;
      for (; a.size > 0 && !s && (i.canReadNextChunk || this.unfinishedMultiSegment); ) {
        let { nextChunkOffset: l } = i, u = this.appSegments.some((p) => !this.file.available(p.offset || p.start, p.length || p.size));
        if (s = e > l && !u ? !await i.readNextChunk(e) : !await i.readNextChunk(l), (e = this.findAppSegmentsInRange(e, i.byteLength)) === void 0) return;
      }
    }
  }
  findAppSegmentsInRange(e, t) {
    t -= 2;
    let i, o, n, a, s, l, { file: u, findAll: p, wanted: c, remaining: f, options: P } = this;
    for (; e < t; e++) if (u.getUint8(e) === 255) {
      if (i = u.getUint8(e + 1), Pd(i)) {
        if (o = u.getUint16(e + 2), n = kd(u, e, o), n && c.has(n) && (a = je.get(n), s = a.findPosition(u, e), l = P[n], s.type = n, this.appSegments.push(s), !p && (a.multiSegment && l.multiSegment ? (this.unfinishedMultiSegment = s.chunkNumber < s.chunkCount, this.unfinishedMultiSegment || f.delete(n)) : f.delete(n), f.size === 0))) break;
        P.recordUnknownSegments && (s = Nt.findPosition(u, e), s.marker = i, this.unknownSegments.push(s)), e += o + 1;
      } else if (Sd(i)) {
        if (o = u.getUint16(e + 2), i === 218 && P.stopAfterSos !== !1) return;
        P.recordJpegSegments && this.jpegSegments.push({ offset: e, length: o, marker: i }), e += o + 1;
      }
    }
    return e;
  }
  mergeMultiSegments() {
    if (!this.appSegments.some((t) => t.multiSegment)) return;
    let e = function(t, i) {
      let o, n, a, s = /* @__PURE__ */ new Map();
      for (let l = 0; l < t.length; l++) o = t[l], n = o[i], s.has(n) ? a = s.get(n) : s.set(n, a = []), a.push(o);
      return Array.from(s);
    }(this.appSegments, "type");
    this.mergedAppSegments = e.map(([t, i]) => {
      let o = je.get(t, this.options);
      return o.handleMultiSegments ? { type: t, chunk: o.handleMultiSegments(i) } : i[0];
    });
  }
  getSegment(e) {
    return this.appSegments.find((t) => t.type === e);
  }
  async getOrFindSegment(e) {
    let t = this.getSegment(e);
    return t === void 0 && (await this.findAppSegments(0, [e]), t = this.getSegment(e)), t;
  }
}
te(_a, "type", "jpeg"), el.set("jpeg", _a);
const Fd = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
class Dd extends Nt {
  parseHeader() {
    var e = this.chunk.getUint16();
    e === 18761 ? this.le = !0 : e === 19789 && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0;
  }
  parseTags(e, t, i = /* @__PURE__ */ new Map()) {
    let { pick: o, skip: n } = this.options[t];
    o = new Set(o);
    let a = o.size > 0, s = n.size === 0, l = this.chunk.getUint16(e);
    e += 2;
    for (let u = 0; u < l; u++) {
      let p = this.chunk.getUint16(e);
      if (a) {
        if (o.has(p) && (i.set(p, this.parseTag(e, p, t)), o.delete(p), o.size === 0)) break;
      } else !s && n.has(p) || i.set(p, this.parseTag(e, p, t));
      e += 12;
    }
    return i;
  }
  parseTag(e, t, i) {
    let { chunk: o } = this, n = o.getUint16(e + 2), a = o.getUint32(e + 4), s = Fd[n];
    if (s * a <= 4 ? e += 8 : e = o.getUint32(e + 8), (n < 1 || n > 13) && ge(`Invalid TIFF value type. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${n}, offset ${e}`), e > o.byteLength && ge(`Invalid TIFF value offset. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${n}, offset ${e} is outside of chunk size ${o.byteLength}`), n === 1) return o.getUint8Array(e, a);
    if (n === 2) return (l = function(u) {
      for (; u.endsWith("\0"); ) u = u.slice(0, -1);
      return u;
    }(l = o.getString(e, a)).trim()) === "" ? void 0 : l;
    var l;
    if (n === 7) return o.getUint8Array(e, a);
    if (a === 1) return this.parseTagValue(n, e);
    {
      let u = new (function(c) {
        switch (c) {
          case 1:
            return Uint8Array;
          case 3:
            return Uint16Array;
          case 4:
            return Uint32Array;
          case 5:
            return Array;
          case 6:
            return Int8Array;
          case 8:
            return Int16Array;
          case 9:
            return Int32Array;
          case 10:
            return Array;
          case 11:
            return Float32Array;
          case 12:
            return Float64Array;
          default:
            return Array;
        }
      }(n))(a), p = s;
      for (let c = 0; c < a; c++) u[c] = this.parseTagValue(n, e), e += p;
      return u;
    }
  }
  parseTagValue(e, t) {
    let { chunk: i } = this;
    switch (e) {
      case 1:
        return i.getUint8(t);
      case 3:
        return i.getUint16(t);
      case 4:
        return i.getUint32(t);
      case 5:
        return i.getUint32(t) / i.getUint32(t + 4);
      case 6:
        return i.getInt8(t);
      case 8:
        return i.getInt16(t);
      case 9:
        return i.getInt32(t);
      case 10:
        return i.getInt32(t) / i.getInt32(t + 4);
      case 11:
        return i.getFloat(t);
      case 12:
        return i.getDouble(t);
      case 13:
        return i.getUint32(t);
      default:
        ge(`Invalid tiff type ${e}`);
    }
  }
}
class Qi extends Dd {
  static canHandle(e, t) {
    return e.getUint8(t + 1) === 225 && e.getUint32(t + 4) === 1165519206 && e.getUint16(t + 8) === 0;
  }
  async parse() {
    this.parseHeader();
    let { options: e } = this;
    return e.ifd0.enabled && await this.parseIfd0Block(), e.exif.enabled && await this.safeParse("parseExifBlock"), e.gps.enabled && await this.safeParse("parseGpsBlock"), e.interop.enabled && await this.safeParse("parseInteropBlock"), e.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
  }
  safeParse(e) {
    let t = this[e]();
    return t.catch !== void 0 && (t = t.catch(this.handleError)), t;
  }
  findIfd0Offset() {
    this.ifd0Offset === void 0 && (this.ifd0Offset = this.chunk.getUint32(4));
  }
  findIfd1Offset() {
    if (this.ifd1Offset === void 0) {
      this.findIfd0Offset();
      let e = this.chunk.getUint16(this.ifd0Offset), t = this.ifd0Offset + 2 + 12 * e;
      this.ifd1Offset = this.chunk.getUint32(t);
    }
  }
  parseBlock(e, t) {
    let i = /* @__PURE__ */ new Map();
    return this[t] = i, this.parseTags(e, t, i), i;
  }
  async parseIfd0Block() {
    if (this.ifd0) return;
    let { file: e } = this;
    this.findIfd0Offset(), this.ifd0Offset < 8 && ge("Malformed EXIF data"), !e.chunked && this.ifd0Offset > e.byteLength && ge(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`), e.tiff && await e.ensureChunk(this.ifd0Offset, ma(this.options));
    let t = this.parseBlock(this.ifd0Offset, "ifd0");
    return t.size !== 0 ? (this.exifOffset = t.get(34665), this.interopOffset = t.get(40965), this.gpsOffset = t.get(34853), this.xmp = t.get(700), this.iptc = t.get(33723), this.icc = t.get(34675), this.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t) : void 0;
  }
  async parseExifBlock() {
    if (this.exif || (this.ifd0 || await this.parseIfd0Block(), this.exifOffset === void 0)) return;
    this.file.tiff && await this.file.ensureChunk(this.exifOffset, ma(this.options));
    let e = this.parseBlock(this.exifOffset, "exif");
    return this.interopOffset || (this.interopOffset = e.get(40965)), this.makerNote = e.get(37500), this.userComment = e.get(37510), this.options.sanitize && (e.delete(40965), e.delete(37500), e.delete(37510)), this.unpack(e, 41728), this.unpack(e, 41729), e;
  }
  unpack(e, t) {
    let i = e.get(t);
    i && i.length === 1 && e.set(t, i[0]);
  }
  async parseGpsBlock() {
    if (this.gps || (this.ifd0 || await this.parseIfd0Block(), this.gpsOffset === void 0)) return;
    let e = this.parseBlock(this.gpsOffset, "gps");
    return e && e.has(2) && e.has(4) && (e.set("latitude", Sa(...e.get(2), e.get(1))), e.set("longitude", Sa(...e.get(4), e.get(3)))), e;
  }
  async parseInteropBlock() {
    if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), this.interopOffset !== void 0 || this.exif || await this.parseExifBlock(), this.interopOffset !== void 0)) return this.parseBlock(this.interopOffset, "interop");
  }
  async parseThumbnailBlock(e = !1) {
    if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = !0), this.ifd1;
  }
  async extractThumbnail() {
    if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(!0), this.ifd1 === void 0) return;
    let e = this.ifd1.get(513), t = this.ifd1.get(514);
    return this.chunk.getUint8Array(e, t);
  }
  get image() {
    return this.ifd0;
  }
  get thumbnail() {
    return this.ifd1;
  }
  createOutput() {
    let e, t, i, o = {};
    for (t of me) if (e = this[t], !Qs(e)) if (i = this.canTranslate ? this.translateBlock(e, t) : Object.fromEntries(e), this.options.mergeOutput) {
      if (t === "ifd1") continue;
      Object.assign(o, i);
    } else o[t] = i;
    return this.makerNote && (o.makerNote = this.makerNote), this.userComment && (o.userComment = this.userComment), o;
  }
  assignToOutput(e, t) {
    if (this.globalOptions.mergeOutput) Object.assign(e, t);
    else for (let [i, o] of Object.entries(t)) this.assignObjectToOutput(e, i, o);
  }
}
function Sa(r, e, t, i) {
  var o = r + e / 60 + t / 3600;
  return i !== "S" && i !== "W" || (o *= -1), o;
}
te(Qi, "type", "tiff"), te(Qi, "headerLength", 10), je.set("tiff", Qi);
const un = { ifd0: !1, ifd1: !1, exif: !1, gps: !1, interop: !1, sanitize: !1, reviveValues: !0, translateKeys: !1, translateValues: !1, mergeOutput: !1 };
Object.assign({}, un, { firstChunkSize: 4e4, gps: [1, 2, 3, 4] });
Object.assign({}, un, { tiff: !1, ifd1: !0, mergeOutput: !1 });
const Id = Object.assign({}, un, { firstChunkSize: 4e4, ifd0: [274] });
async function Td(r) {
  let e = new _d(Id);
  await e.read(r);
  let t = await e.parse();
  if (t && t.ifd0) return t.ifd0[274];
}
const Bd = Object.freeze({ 1: { dimensionSwapped: !1, scaleX: 1, scaleY: 1, deg: 0, rad: 0 }, 2: { dimensionSwapped: !1, scaleX: -1, scaleY: 1, deg: 0, rad: 0 }, 3: { dimensionSwapped: !1, scaleX: 1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 4: { dimensionSwapped: !1, scaleX: -1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 5: { dimensionSwapped: !0, scaleX: 1, scaleY: -1, deg: 90, rad: 90 * Math.PI / 180 }, 6: { dimensionSwapped: !0, scaleX: 1, scaleY: 1, deg: 90, rad: 90 * Math.PI / 180 }, 7: { dimensionSwapped: !0, scaleX: 1, scaleY: -1, deg: 270, rad: 270 * Math.PI / 180 }, 8: { dimensionSwapped: !0, scaleX: 1, scaleY: 1, deg: 270, rad: 270 * Math.PI / 180 } });
let gr = !0, br = !0;
if (typeof navigator == "object") {
  let r = navigator.userAgent;
  if (r.includes("iPad") || r.includes("iPhone")) {
    let e = r.match(/OS (\d+)_(\d+)/);
    if (e) {
      let [, t, i] = e;
      gr = Number(t) + 0.1 * Number(i) < 13.4, br = !1;
    }
  } else if (r.includes("OS X 10")) {
    let [, e] = r.match(/OS X 10[_.](\d+)/);
    gr = br = Number(e) < 15;
  }
  if (r.includes("Chrome/")) {
    let [, e] = r.match(/Chrome\/(\d+)/);
    gr = br = Number(e) < 81;
  } else if (r.includes("Firefox/")) {
    let [, e] = r.match(/Firefox\/(\d+)/);
    gr = br = Number(e) < 77;
  }
}
async function Cd(r) {
  let e = await Td(r);
  return Object.assign({ canvas: gr, css: br }, Bd[e]);
}
class Od extends Tr {
  constructor(...e) {
    super(...e), te(this, "ranges", new Ed()), this.byteLength !== 0 && this.ranges.add(0, this.byteLength);
  }
  _tryExtend(e, t, i) {
    if (e === 0 && this.byteLength === 0 && i) {
      let o = new DataView(i.buffer || i, i.byteOffset, i.byteLength);
      this._swapDataView(o);
    } else {
      let o = e + t;
      if (o > this.byteLength) {
        let { dataView: n } = this._extend(o);
        this._swapDataView(n);
      }
    }
  }
  _extend(e) {
    let t;
    t = Js ? Zs.allocUnsafe(e) : new Uint8Array(e);
    let i = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return t.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), { uintView: t, dataView: i };
  }
  subarray(e, t, i = !1) {
    return t = t || this._lengthToEnd(e), i && this._tryExtend(e, t), this.ranges.add(e, t), super.subarray(e, t);
  }
  set(e, t, i = !1) {
    i && this._tryExtend(t, e.byteLength, e);
    let o = super.set(e, t);
    return this.ranges.add(t, o.byteLength), o;
  }
  async ensureChunk(e, t) {
    this.chunked && (this.ranges.available(e, t) || await this.readChunk(e, t));
  }
  available(e, t) {
    return this.ranges.available(e, t);
  }
}
class Ed {
  constructor() {
    te(this, "list", []);
  }
  get length() {
    return this.list.length;
  }
  add(e, t, i = 0) {
    let o = e + t, n = this.list.filter((a) => Pa(e, a.offset, o) || Pa(e, a.end, o));
    if (n.length > 0) {
      e = Math.min(e, ...n.map((s) => s.offset)), o = Math.max(o, ...n.map((s) => s.end)), t = o - e;
      let a = n.shift();
      a.offset = e, a.length = t, a.end = o, this.list = this.list.filter((s) => !n.includes(s));
    } else this.list.push({ offset: e, length: t, end: o });
  }
  available(e, t) {
    let i = e + t;
    return this.list.some((o) => o.offset <= e && i <= o.end);
  }
}
function Pa(r, e, t) {
  return r <= e && e <= t;
}
class Ad extends Od {
  constructor(e, t) {
    super(0), te(this, "chunksRead", 0), this.input = e, this.options = t;
  }
  async readWhole() {
    this.chunked = !1, await this.readChunk(this.nextChunkOffset);
  }
  async readChunked() {
    this.chunked = !0, await this.readChunk(0, this.options.firstChunkSize);
  }
  async readNextChunk(e = this.nextChunkOffset) {
    if (this.fullyRead) return this.chunksRead++, !1;
    let t = this.options.chunkSize, i = await this.readChunk(e, t);
    return !!i && i.byteLength === t;
  }
  async readChunk(e, t) {
    if (this.chunksRead++, (t = this.safeWrapAddress(e, t)) !== 0) return this._readChunk(e, t);
  }
  safeWrapAddress(e, t) {
    return this.size !== void 0 && e + t > this.size ? Math.max(0, this.size - e) : t;
  }
  get nextChunkOffset() {
    if (this.ranges.list.length !== 0) return this.ranges.list[0].length;
  }
  get canReadNextChunk() {
    return this.chunksRead < this.options.chunkLimit;
  }
  get fullyRead() {
    return this.size !== void 0 && this.nextChunkOffset === this.size;
  }
  read() {
    return this.options.chunked ? this.readChunked() : this.readWhole();
  }
  close() {
  }
}
an.set("blob", class extends Ad {
  async readWhole() {
    this.chunked = !1;
    let r = await Co(this.input);
    this._swapArrayBuffer(r);
  }
  readChunked() {
    return this.chunked = !0, this.size = this.input.size, super.readChunked();
  }
  async _readChunk(r, e) {
    let t = e ? r + e : void 0, i = this.input.slice(r, t), o = await Co(i);
    return this.set(o, r, !0);
  }
});
const Ud = {
  strings: {
    generatingThumbnails: "Generating thumbnails..."
  }
}, Rd = {
  version: "4.1.1"
};
function Md(r, e, t) {
  try {
    r.getContext("2d").getImageData(0, 0, 1, 1);
  } catch (i) {
    if (i.code === 18)
      return Promise.reject(new Error("cannot read image, probably an svg with external resources"));
  }
  return r.toBlob ? new Promise((i) => {
    r.toBlob(i, e, t);
  }).then((i) => {
    if (i === null)
      throw new Error("cannot read image, probably an svg with external resources");
    return i;
  }) : Promise.resolve().then(() => md(r.toDataURL(e, t), {})).then((i) => {
    if (i === null)
      throw new Error("could not extract blob, probably an old browser");
    return i;
  });
}
function zd(r, e) {
  let t = r.width, i = r.height;
  (e.deg === 90 || e.deg === 270) && (t = r.height, i = r.width);
  const o = document.createElement("canvas");
  o.width = t, o.height = i;
  const n = o.getContext("2d");
  return n.translate(t / 2, i / 2), e.canvas && (n.rotate(e.rad), n.scale(e.scaleX, e.scaleY)), n.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), o;
}
function Nd(r) {
  const e = r.width / r.height, t = 5e6, i = 4096;
  let o = Math.floor(Math.sqrt(t * e)), n = Math.floor(t / Math.sqrt(t * e));
  if (o > i && (o = i, n = Math.round(o / e)), n > i && (n = i, o = Math.round(e * n)), r.width > o) {
    const a = document.createElement("canvas");
    return a.width = o, a.height = n, a.getContext("2d").drawImage(r, 0, 0, o, n), a;
  }
  return r;
}
const Ld = {
  thumbnailWidth: null,
  thumbnailHeight: null,
  thumbnailType: "image/jpeg",
  waitForThumbnailsBeforeUpload: !1,
  lazy: !1
};
class ol extends Dt {
  constructor(e, t) {
    if (super(e, {
      ...Ld,
      ...t
    }), this.onFileAdded = (i) => {
      !i.preview && i.data && fa(i.type) && !i.isRemote && this.addToQueue(i.id);
    }, this.onCancelRequest = (i) => {
      const o = this.queue.indexOf(i.id);
      o !== -1 && this.queue.splice(o, 1);
    }, this.onFileRemoved = (i) => {
      const o = this.queue.indexOf(i.id);
      o !== -1 && this.queue.splice(o, 1), i.preview && ha(i.preview) && URL.revokeObjectURL(i.preview);
    }, this.onRestored = () => {
      this.uppy.getFiles().filter((o) => o.isRestored).forEach((o) => {
        (!o.preview || ha(o.preview)) && this.addToQueue(o.id);
      });
    }, this.onAllFilesRemoved = () => {
      this.queue = [];
    }, this.waitUntilAllProcessed = (i) => {
      i.forEach((n) => {
        const a = this.uppy.getFile(n);
        this.uppy.emit("preprocess-progress", a, {
          mode: "indeterminate",
          message: this.i18n("generatingThumbnails")
        });
      });
      const o = () => {
        i.forEach((n) => {
          const a = this.uppy.getFile(n);
          this.uppy.emit("preprocess-complete", a);
        });
      };
      return new Promise((n) => {
        this.queueProcessing ? this.uppy.once("thumbnail:all-generated", () => {
          o(), n();
        }) : (o(), n());
      });
    }, this.type = "modifier", this.id = this.opts.id || "ThumbnailGenerator", this.title = "Thumbnail Generator", this.queue = [], this.queueProcessing = !1, this.defaultThumbnailDimension = 200, this.thumbnailType = this.opts.thumbnailType, this.defaultLocale = Ud, this.i18nInit(), this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload)
      throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.");
  }
  createThumbnail(e, t, i) {
    const o = URL.createObjectURL(e.data), n = new Promise((s, l) => {
      const u = new Image();
      u.src = o, u.addEventListener("load", () => {
        URL.revokeObjectURL(o), s(u);
      }), u.addEventListener("error", (p) => {
        URL.revokeObjectURL(o), l(p.error || new Error("Could not create thumbnail"));
      });
    }), a = Cd(e.data).catch(() => 1);
    return Promise.all([n, a]).then((s) => {
      let [l, u] = s;
      const p = this.getProportionalDimensions(l, t, i, u.deg), c = zd(l, u), f = this.resizeImage(c, p.width, p.height);
      return Md(f, this.thumbnailType, 80);
    }).then((s) => URL.createObjectURL(s));
  }
  /**
   * Get the new calculated dimensions for the given image and a target width
   * or height. If both width and height are given, only width is taken into
   * account. If neither width nor height are given, the default dimension
   * is used.
   */
  getProportionalDimensions(e, t, i, o) {
    let n = e.width / e.height;
    return (o === 90 || o === 270) && (n = e.height / e.width), t != null ? {
      width: t,
      height: Math.round(t / n)
    } : i != null ? {
      width: Math.round(i * n),
      height: i
    } : {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / n)
    };
  }
  /**
   * Resize an image to the target `width` and `height`.
   *
   * Returns a Canvas with the resized image on it.
   */
  // eslint-disable-next-line class-methods-use-this
  resizeImage(e, t, i) {
    let o = Nd(e), n = Math.ceil(Math.log2(o.width / t));
    n < 1 && (n = 1);
    let a = t * 2 ** (n - 1), s = i * 2 ** (n - 1);
    const l = 2;
    for (; n--; ) {
      const u = document.createElement("canvas");
      u.width = a, u.height = s, u.getContext("2d").drawImage(o, 0, 0, a, s), o = u, a = Math.round(a / l), s = Math.round(s / l);
    }
    return o;
  }
  /**
   * Set the preview URL for a file.
   */
  setPreviewURL(e, t) {
    this.uppy.setFileState(e, {
      preview: t
    });
  }
  addToQueue(e) {
    this.queue.push(e), this.queueProcessing === !1 && this.processQueue();
  }
  processQueue() {
    if (this.queueProcessing = !0, this.queue.length > 0) {
      const e = this.uppy.getFile(this.queue.shift());
      return e ? this.requestThumbnail(e).catch(() => {
      }).then(() => this.processQueue()) : (this.uppy.log("[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug", "error"), Promise.resolve());
    }
    return this.queueProcessing = !1, this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue"), this.uppy.emit("thumbnail:all-generated"), Promise.resolve();
  }
  requestThumbnail(e) {
    return fa(e.type) && !e.isRemote ? this.createThumbnail(e, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then((t) => {
      this.setPreviewURL(e.id, t), this.uppy.log(`[ThumbnailGenerator] Generated thumbnail for ${e.id}`), this.uppy.emit("thumbnail:generated", this.uppy.getFile(e.id), t);
    }).catch((t) => {
      this.uppy.log(`[ThumbnailGenerator] Failed thumbnail for ${e.id}:`, "warning"), this.uppy.log(t, "warning"), this.uppy.emit("thumbnail:error", this.uppy.getFile(e.id), t);
    }) : Promise.resolve();
  }
  install() {
    this.uppy.on("file-removed", this.onFileRemoved), this.uppy.on("cancel-all", this.onAllFilesRemoved), this.opts.lazy ? (this.uppy.on("thumbnail:request", this.onFileAdded), this.uppy.on("thumbnail:cancel", this.onCancelRequest)) : (this.uppy.on("thumbnail:request", this.onFileAdded), this.uppy.on("file-added", this.onFileAdded), this.uppy.on("restored", this.onRestored)), this.opts.waitForThumbnailsBeforeUpload && this.uppy.addPreProcessor(this.waitUntilAllProcessed);
  }
  uninstall() {
    this.uppy.off("file-removed", this.onFileRemoved), this.uppy.off("cancel-all", this.onAllFilesRemoved), this.opts.lazy ? (this.uppy.off("thumbnail:request", this.onFileAdded), this.uppy.off("thumbnail:cancel", this.onCancelRequest)) : (this.uppy.off("thumbnail:request", this.onFileAdded), this.uppy.off("file-added", this.onFileAdded), this.uppy.off("restored", this.onRestored)), this.opts.waitForThumbnailsBeforeUpload && this.uppy.removePreProcessor(this.waitUntilAllProcessed);
  }
}
ol.VERSION = Rd.version;
function ka(r) {
  if (typeof r == "string") {
    const e = document.querySelectorAll(r);
    return e.length === 0 ? null : Array.from(e);
  }
  return typeof r == "object" && $s(r) ? [r] : null;
}
const Sr = Array.from;
function nl(r, e, t, i) {
  let {
    onSuccess: o
  } = i;
  r.readEntries(
    (n) => {
      const a = [...e, ...n];
      n.length ? queueMicrotask(() => {
        nl(r, a, t, {
          onSuccess: o
        });
      }) : o(a);
    },
    // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
    (n) => {
      t(n), o(e);
    }
  );
}
function al(r, e) {
  return r == null ? r : {
    kind: (
      // eslint-disable-next-line no-nested-ternary
      r.isFile ? "file" : r.isDirectory ? "directory" : void 0
    ),
    name: r.name,
    getFile() {
      return new Promise((t, i) => r.file(t, i));
    },
    async *values() {
      const t = r.createReader();
      yield* await new Promise((o) => {
        nl(t, [], e, {
          onSuccess: (n) => o(n.map((a) => al(a, e)))
        });
      });
    },
    isSameEntry: void 0
  };
}
function sl(r, e, t) {
  try {
    return t === void 0 && (t = void 0), async function* () {
      const i = () => `${e}/${r.name}`;
      if (r.kind === "file") {
        const o = await r.getFile();
        o != null ? (o.relativePath = e ? i() : null, yield o) : t != null && (yield t);
      } else if (r.kind === "directory")
        for await (const o of r.values())
          yield* sl(o, e ? i() : r.name);
      else t != null && (yield t);
    }();
  } catch (i) {
    return Promise.reject(i);
  }
}
async function* jd(r, e) {
  const t = await Promise.all(Array.from(r.items, async (i) => {
    var o;
    let n;
    const a = () => typeof i.getAsEntry == "function" ? i.getAsEntry() : i.webkitGetAsEntry();
    return (o = n) != null || (n = al(a(), e)), {
      fileSystemHandle: n,
      lastResortFile: i.getAsFile()
      // can be used as a fallback in case other methods fail
    };
  }));
  for (const {
    lastResortFile: i,
    fileSystemHandle: o
  } of t)
    if (o != null)
      try {
        yield* sl(o, "", i);
      } catch (n) {
        i != null ? yield i : e(n);
      }
    else i != null && (yield i);
}
function $d(r) {
  const e = Sr(r.files);
  return Promise.resolve(e);
}
async function qd(r, e) {
  var t;
  const i = (t = e?.logDropError) != null ? t : Function.prototype;
  try {
    const o = [];
    for await (const n of jd(r, i))
      o.push(n);
    return o;
  } catch {
    return $d(r);
  }
}
var Br, pe, eo, Fa, Cr = 0, ll = [], ce = ae, Da = ce.__b, Ia = ce.__r, Ta = ce.diffed, Ba = ce.__c, Ca = ce.unmount, Oa = ce.__;
function pn(r, e) {
  ce.__h && ce.__h(pe, r, Cr || e), Cr = 0;
  var t = pe.__H || (pe.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({}), t.__[r];
}
function hi(r) {
  return Cr = 1, Hd(pl, r);
}
function Hd(r, e, t) {
  var i = pn(Br++, 2);
  if (i.t = r, !i.__c && (i.__ = [pl(void 0, e), function(s) {
    var l = i.__N ? i.__N[0] : i.__[0], u = i.t(l, s);
    l !== u && (i.__N = [u, i.__[1]], i.__c.setState({}));
  }], i.__c = pe, !pe.u)) {
    var o = function(s, l, u) {
      if (!i.__c.__H) return !0;
      var p = i.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (p.every(function(f) {
        return !f.__N;
      })) return !n || n.call(this, s, l, u);
      var c = i.__c.props !== s;
      return p.forEach(function(f) {
        if (f.__N) {
          var P = f.__[0];
          f.__ = f.__N, f.__N = void 0, P !== f.__[0] && (c = !0);
        }
      }), n && n.call(this, s, l, u) || c;
    };
    pe.u = !0;
    var n = pe.shouldComponentUpdate, a = pe.componentWillUpdate;
    pe.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var p = n;
        n = void 0, o(s, l, u), n = p;
      }
      a && a.call(this, s, l, u);
    }, pe.shouldComponentUpdate = o;
  }
  return i.__N || i.__;
}
function Eo(r, e) {
  var t = pn(Br++, 3);
  !ce.__s && ul(t.__H, e) && (t.__ = r, t.i = e, pe.__H.__h.push(t));
}
function ni(r) {
  return Cr = 5, dn(function() {
    return { current: r };
  }, []);
}
function dn(r, e) {
  var t = pn(Br++, 7);
  return ul(t.__H, e) && (t.__ = r(), t.__H = e, t.__h = r), t.__;
}
function Wd(r, e) {
  return Cr = 8, dn(function() {
    return r;
  }, e);
}
function Gd() {
  for (var r; r = ll.shift(); ) if (r.__P && r.__H) try {
    r.__H.__h.forEach(ai), r.__H.__h.forEach(Ao), r.__H.__h = [];
  } catch (e) {
    r.__H.__h = [], ce.__e(e, r.__v);
  }
}
ce.__b = function(r) {
  pe = null, Da && Da(r);
}, ce.__ = function(r, e) {
  r && e.__k && e.__k.__m && (r.__m = e.__k.__m), Oa && Oa(r, e);
}, ce.__r = function(r) {
  Ia && Ia(r), Br = 0;
  var e = (pe = r.__c).__H;
  e && (eo === pe ? (e.__h = [], pe.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (e.__h.forEach(ai), e.__h.forEach(Ao), e.__h = [], Br = 0)), eo = pe;
}, ce.diffed = function(r) {
  Ta && Ta(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (ll.push(e) !== 1 && Fa === ce.requestAnimationFrame || ((Fa = ce.requestAnimationFrame) || Vd)(Gd)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), eo = pe = null;
}, ce.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(ai), t.__h = t.__h.filter(function(i) {
        return !i.__ || Ao(i);
      });
    } catch (i) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], ce.__e(i, t.__v);
    }
  }), Ba && Ba(r, e);
}, ce.unmount = function(r) {
  Ca && Ca(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.forEach(function(i) {
    try {
      ai(i);
    } catch (o) {
      e = o;
    }
  }), t.__H = void 0, e && ce.__e(e, t.__v));
};
var Ea = typeof requestAnimationFrame == "function";
function Vd(r) {
  var e, t = function() {
    clearTimeout(i), Ea && cancelAnimationFrame(e), setTimeout(r);
  }, i = setTimeout(t, 100);
  Ea && (e = requestAnimationFrame(t));
}
function ai(r) {
  var e = pe, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), pe = e;
}
function Ao(r) {
  var e = pe;
  r.__c = r.__(), pe = e;
}
function ul(r, e) {
  return !r || r.length !== e.length || e.some(function(t, i) {
    return t !== r[i];
  });
}
function pl(r, e) {
  return typeof e == "function" ? e(r) : e;
}
function Uo() {
  return Uo = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t) ({}).hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, Uo.apply(null, arguments);
}
const Kd = {
  position: "relative",
  // Disabled for our use case: the wrapper elements around FileList already deal with overflow,
  // and this additional property would hide things that we want to show.
  //
  // overflow: 'hidden',
  width: "100%",
  minHeight: "100%"
}, Xd = {
  position: "absolute",
  top: 0,
  left: 0,
  // Because the `top` value gets set to some offset, this `height` being 100% would make the scrollbar
  // stretch far beyond the content. For our use case, the content div actually can get its height from
  // the elements inside it, so we don't need to specify a `height` property at all.
  //
  // height: '100%',
  width: "100%",
  overflow: "visible"
};
class Yd extends at {
  constructor(e) {
    super(e), this.handleScroll = () => {
      this.setState({
        offset: this.base.scrollTop
      });
    }, this.handleResize = () => {
      this.resize();
    }, this.focusElement = null, this.state = {
      offset: 0,
      height: 0
    };
  }
  componentDidMount() {
    this.resize(), window.addEventListener("resize", this.handleResize);
  }
  // TODO: refactor to stable lifecycle method
  // eslint-disable-next-line
  componentWillUpdate() {
    this.base.contains(document.activeElement) && (this.focusElement = document.activeElement);
  }
  componentDidUpdate() {
    this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement && this.focusElement.focus(), this.focusElement = null, this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  resize() {
    const {
      height: e
    } = this.state;
    e !== this.base.offsetHeight && this.setState({
      height: this.base.offsetHeight
    });
  }
  render(e) {
    let {
      data: t,
      rowHeight: i,
      renderRow: o,
      overscanCount: n = 10,
      ...a
    } = e;
    const {
      offset: s,
      height: l
    } = this.state;
    let u = Math.floor(s / i), p = Math.floor(l / i);
    n && (u = Math.max(0, u - u % n), p += n);
    const c = u + p + 4, f = t.slice(u, c), P = {
      ...Kd,
      height: t.length * i
    }, T = {
      ...Xd,
      top: u * i
    };
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      d("div", Uo({
        onScroll: this.handleScroll
      }, a), d("div", {
        role: "presentation",
        style: P
      }, d("div", {
        role: "presentation",
        style: T
      }, f.map(o))))
    );
  }
}
function Zd() {
  return d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, d("path", {
    d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
  }));
}
var Aa = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Jd(r, e) {
  return !!(r === e || Aa(r) && Aa(e));
}
function Qd(r, e) {
  if (r.length !== e.length)
    return !1;
  for (var t = 0; t < r.length; t++)
    if (!Jd(r[t], e[t]))
      return !1;
  return !0;
}
function Ua(r, e) {
  e === void 0 && (e = Qd);
  var t = null;
  function i() {
    for (var o = [], n = 0; n < arguments.length; n++)
      o[n] = arguments[n];
    if (t && t.lastThis === this && e(o, t.lastArgs))
      return t.lastResult;
    var a = r.apply(this, o);
    return t = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return i.clear = function() {
    t = null;
  }, i;
}
const dl = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', "input:not([disabled]):not([inert]):not([aria-hidden])", "select:not([disabled]):not([inert]):not([aria-hidden])", "textarea:not([disabled]):not([inert]):not([aria-hidden])", "button:not([disabled]):not([inert]):not([aria-hidden])", 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];
function cl(r, e) {
  if (e) {
    const t = r.querySelector(`[data-uppy-paneltype="${e}"]`);
    if (t) return t;
  }
  return r;
}
function Ra(r, e) {
  const t = e[0];
  t && (t.focus(), r.preventDefault());
}
function ec(r, e) {
  const t = e[e.length - 1];
  t && (t.focus(), r.preventDefault());
}
function tc(r) {
  return r.contains(document.activeElement);
}
function hl(r, e, t) {
  const i = cl(t, e), o = Sr(i.querySelectorAll(dl)), n = o.indexOf(document.activeElement);
  tc(i) ? r.shiftKey && n === 0 ? ec(r, o) : !r.shiftKey && n === o.length - 1 && Ra(r, o) : Ra(r, o);
}
function rc(r, e, t) {
  e === null || hl(r, e, t);
}
var ic = Ds();
const oc = /* @__PURE__ */ Bt(ic);
function nc() {
  let r = !1;
  return oc((t, i) => {
    const o = cl(t, i), n = o.contains(document.activeElement);
    if (n && r) return;
    const a = o.querySelector("[data-uppy-super-focusable]");
    if (!(n && !a))
      if (a)
        a.focus({
          preventScroll: !0
        }), r = !0;
      else {
        const s = o.querySelector(dl);
        s?.focus({
          preventScroll: !0
        }), r = !1;
      }
  }, 260);
}
function ac() {
  const r = document.body;
  return !(!("draggable" in r) || !("ondragstart" in r && "ondrop" in r) || !("FormData" in window) || !("FileReader" in window));
}
function sc(r, e) {
  if (r === e)
    return !0;
  if (!r || !e)
    return !1;
  const t = Object.keys(r), i = Object.keys(e), o = t.length;
  if (i.length !== o)
    return !1;
  for (let n = 0; n < o; n++) {
    const a = t[n];
    if (r[a] !== e[a] || !Object.prototype.hasOwnProperty.call(e, a))
      return !1;
  }
  return !0;
}
function lc() {
  return d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, d("g", {
    fill: "#686DE0",
    fillRule: "evenodd"
  }, d("path", {
    d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
    fillRule: "nonzero"
  }), d("path", {
    d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
    fillRule: "nonzero"
  }), d("circle", {
    cx: "7.5",
    cy: "9.5",
    r: "1.5"
  })));
}
function uc() {
  return d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, d("path", {
    d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
    fill: "#049BCF",
    fillRule: "nonzero"
  }));
}
function pc() {
  return d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, d("path", {
    d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
    fill: "#19AF67",
    fillRule: "nonzero"
  }));
}
function dc() {
  return d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, d("path", {
    d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
    fill: "#E2514A",
    fillRule: "nonzero"
  }));
}
function cc() {
  return d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, d("path", {
    d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
    fill: "#00C469",
    fillRule: "nonzero"
  }));
}
function hc() {
  return d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, d("g", {
    fill: "#A7AFB7",
    fillRule: "nonzero"
  }, d("path", {
    d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
  }), d("path", {
    d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
  })));
}
function fc() {
  return d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, d("path", {
    d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
    fill: "#5A5E69",
    fillRule: "nonzero"
  }));
}
function cn(r) {
  const e = {
    color: "#838999",
    icon: hc()
  };
  if (!r) return e;
  const t = r.split("/")[0], i = r.split("/")[1];
  return t === "text" ? {
    color: "#5a5e69",
    icon: fc()
  } : t === "image" ? {
    color: "#686de0",
    icon: lc()
  } : t === "audio" ? {
    color: "#068dbb",
    icon: uc()
  } : t === "video" ? {
    color: "#19af67",
    icon: pc()
  } : t === "application" && i === "pdf" ? {
    color: "#e25149",
    icon: dc()
  } : t === "application" && ["zip", "x-7z-compressed", "x-zip-compressed", "x-rar-compressed", "x-tar", "x-gzip", "x-apple-diskimage"].indexOf(i) !== -1 ? {
    color: "#00C469",
    icon: cc()
  } : e;
}
function fl(r) {
  const {
    file: e
  } = r;
  if (e.preview)
    return d("img", {
      draggable: !1,
      className: "uppy-Dashboard-Item-previewImg",
      alt: e.name,
      src: e.preview
    });
  const {
    color: t,
    icon: i
  } = cn(e.type);
  return d("div", {
    className: "uppy-Dashboard-Item-previewIconWrap"
  }, d("span", {
    className: "uppy-Dashboard-Item-previewIcon",
    style: {
      color: t
    }
  }, i), d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-Dashboard-Item-previewIconBg",
    width: "58",
    height: "76",
    viewBox: "0 0 58 76"
  }, d("rect", {
    fill: "#FFF",
    width: "58",
    height: "76",
    rx: "3",
    fillRule: "evenodd"
  })));
}
const yc = (r, e) => (typeof e == "function" ? e() : e).filter((o) => o.id === r)[0].name;
function yl(r) {
  const {
    file: e,
    toggleFileCard: t,
    i18n: i,
    metaFields: o
  } = r, {
    missingRequiredMetaFields: n
  } = e;
  if (!(n != null && n.length))
    return null;
  const a = n.map((s) => yc(s, o)).join(", ");
  return d("div", {
    className: "uppy-Dashboard-Item-errorMessage"
  }, i("missingRequiredMetaFields", {
    smart_count: n.length,
    fields: a
  }), " ", d("button", {
    type: "button",
    class: "uppy-u-reset uppy-Dashboard-Item-errorMessageBtn",
    onClick: () => t(!0, e.id)
  }, i("editFile")));
}
function mc(r) {
  const {
    file: e,
    i18n: t,
    toggleFileCard: i,
    metaFields: o,
    showLinkToFileUploadResult: n
  } = r, s = e.preview ? "rgba(255, 255, 255, 0.5)" : cn(e.type).color;
  return d("div", {
    className: "uppy-Dashboard-Item-previewInnerWrap",
    style: {
      backgroundColor: s
    }
  }, n && e.uploadURL && d("a", {
    className: "uppy-Dashboard-Item-previewLink",
    href: e.uploadURL,
    rel: "noreferrer noopener",
    target: "_blank",
    "aria-label": e.meta.name
  }, d("span", {
    hidden: !0
  }, e.meta.name)), d(fl, {
    file: e
  }), d(yl, {
    file: e,
    i18n: t,
    toggleFileCard: i,
    metaFields: o
  }));
}
function gc(r) {
  if (!r.isUploaded) {
    if (r.error && !r.hideRetryButton) {
      r.uppy.retryUpload(r.file.id);
      return;
    }
    r.resumableUploads && !r.hidePauseResumeButton ? r.uppy.pauseResume(r.file.id) : r.individualCancellation && !r.hideCancelButton && r.uppy.removeFile(r.file.id);
  }
}
function Ma(r) {
  return r.isUploaded ? r.i18n("uploadComplete") : r.error ? r.i18n("retryUpload") : r.resumableUploads ? r.file.isPaused ? r.i18n("resumeUpload") : r.i18n("pauseUpload") : r.individualCancellation ? r.i18n("cancelUpload") : "";
}
function to(r) {
  return d("div", {
    className: "uppy-Dashboard-Item-progress"
  }, d("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-progressIndicator",
    type: "button",
    "aria-label": Ma(r),
    title: Ma(r),
    onClick: () => gc(r)
  }, r.children));
}
function Jr(r) {
  let {
    children: e
  } = r;
  return d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "70",
    height: "70",
    viewBox: "0 0 36 36",
    className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"
  }, e);
}
function ro(r) {
  let {
    progress: e
  } = r;
  const t = 2 * Math.PI * 15;
  return d("g", null, d("circle", {
    className: "uppy-Dashboard-Item-progressIcon--bg",
    r: "15",
    cx: "18",
    cy: "18",
    "stroke-width": "2",
    fill: "none"
  }), d("circle", {
    className: "uppy-Dashboard-Item-progressIcon--progress",
    r: "15",
    cx: "18",
    cy: "18",
    transform: "rotate(-90, 18, 18)",
    fill: "none",
    "stroke-width": "2",
    "stroke-dasharray": t,
    "stroke-dashoffset": t - t / 100 * e
  }));
}
function bc(r) {
  return !r.file.progress.uploadStarted || r.file.progress.percentage === void 0 ? null : r.isUploaded ? d("div", {
    className: "uppy-Dashboard-Item-progress"
  }, d("div", {
    className: "uppy-Dashboard-Item-progressIndicator"
  }, d(Jr, null, d("circle", {
    r: "15",
    cx: "18",
    cy: "18",
    fill: "#1bb240"
  }), d("polygon", {
    className: "uppy-Dashboard-Item-progressIcon--check",
    transform: "translate(2, 3)",
    points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
  })))) : r.recoveredState ? null : r.error && !r.hideRetryButton ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    d(to, r, d("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
      width: "28",
      height: "31",
      viewBox: "0 0 16 19"
    }, d("path", {
      d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
    }), d("path", {
      d: "M7.9 3H10v2H7.9z"
    }), d("path", {
      d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
    }), d("path", {
      d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
    })))
  ) : r.resumableUploads && !r.hidePauseResumeButton ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    d(to, r, d(Jr, null, d(ro, {
      progress: r.file.progress.percentage
    }), r.file.isPaused ? d("polygon", {
      className: "uppy-Dashboard-Item-progressIcon--play",
      transform: "translate(3, 3)",
      points: "12 20 12 10 20 15"
    }) : d("g", {
      className: "uppy-Dashboard-Item-progressIcon--pause",
      transform: "translate(14.5, 13)"
    }, d("rect", {
      x: "0",
      y: "0",
      width: "2",
      height: "10",
      rx: "0"
    }), d("rect", {
      x: "5",
      y: "0",
      width: "2",
      height: "10",
      rx: "0"
    }))))
  ) : !r.resumableUploads && r.individualCancellation && !r.hideCancelButton ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    d(to, r, d(Jr, null, d(ro, {
      progress: r.file.progress.percentage
    }), d("polygon", {
      className: "cancel",
      transform: "translate(2, 2)",
      points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
    })))
  ) : d("div", {
    className: "uppy-Dashboard-Item-progress"
  }, d("div", {
    className: "uppy-Dashboard-Item-progressIndicator"
  }, d(Jr, null, d(ro, {
    progress: r.file.progress.percentage
  }))));
}
const io = "...";
function ml(r, e) {
  if (e === 0) return "";
  if (r.length <= e) return r;
  if (e <= io.length + 1) return `${r.slice(0, e - 1)}…`;
  const t = e - io.length, i = Math.ceil(t / 2), o = Math.floor(t / 2);
  return r.slice(0, i) + io + r.slice(-o);
}
const vc = (r) => {
  const {
    author: e,
    name: t
  } = r.file.meta;
  function i() {
    return r.isSingleFile && r.containerHeight >= 350 ? 90 : r.containerWidth <= 352 ? 35 : r.containerWidth <= 576 ? 60 : e ? 20 : 30;
  }
  return d("div", {
    className: "uppy-Dashboard-Item-name",
    title: t
  }, ml(t, i()));
}, wc = (r) => {
  var e;
  const {
    author: t
  } = r.file.meta, i = (e = r.file.remote) == null ? void 0 : e.providerName, o = "·";
  return t ? d("div", {
    className: "uppy-Dashboard-Item-author"
  }, d("a", {
    href: `${t.url}?utm_source=Companion&utm_medium=referral`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, ml(t.name, 13)), i ? d(Fragment, null, ` ${o} `, i, ` ${o} `) : null) : null;
}, xc = (r) => r.file.size && d("div", {
  className: "uppy-Dashboard-Item-statusSize"
}, Pt(r.file.size)), _c = (r) => r.file.isGhost && d("span", null, " • ", d("button", {
  className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-reSelect",
  type: "button",
  onClick: () => r.toggleAddFilesPanel(!0)
}, r.i18n("reSelect"))), Sc = (r) => {
  let {
    file: e,
    onClick: t
  } = r;
  return e.error ? d("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-errorDetails",
    "aria-label": e.error,
    "data-microtip-position": "bottom",
    "data-microtip-size": "medium",
    onClick: t,
    type: "button"
  }, "?") : null;
};
function Pc(r) {
  const {
    file: e,
    i18n: t,
    toggleFileCard: i,
    metaFields: o,
    toggleAddFilesPanel: n,
    isSingleFile: a,
    containerHeight: s,
    containerWidth: l
  } = r;
  return d("div", {
    className: "uppy-Dashboard-Item-fileInfo",
    "data-uppy-file-source": e.source
  }, d("div", {
    className: "uppy-Dashboard-Item-fileName"
  }, vc({
    file: e,
    isSingleFile: a,
    containerHeight: s,
    containerWidth: l
  }), d(Sc, {
    file: e,
    onClick: () => alert(e.error)
  })), d("div", {
    className: "uppy-Dashboard-Item-status"
  }, wc({
    file: e
  }), xc({
    file: e
  }), _c({
    file: e,
    toggleAddFilesPanel: n,
    i18n: t
  })), d(yl, {
    file: e,
    i18n: t,
    toggleFileCard: i,
    metaFields: o
  }));
}
function kc(r, e) {
  return e === void 0 && (e = "Copy the URL below"), new Promise((t) => {
    const i = document.createElement("textarea");
    i.setAttribute("style", {
      position: "fixed",
      top: 0,
      left: 0,
      width: "2em",
      height: "2em",
      padding: 0,
      border: "none",
      outline: "none",
      boxShadow: "none",
      background: "transparent"
    }), i.value = r, document.body.appendChild(i), i.select();
    const o = () => {
      document.body.removeChild(i), window.prompt(e, r), t();
    };
    try {
      return document.execCommand("copy") ? (document.body.removeChild(i), t()) : o();
    } catch {
      return document.body.removeChild(i), o();
    }
  });
}
function Fc(r) {
  let {
    file: e,
    uploadInProgressOrComplete: t,
    metaFields: i,
    canEditFile: o,
    i18n: n,
    onClick: a
  } = r;
  return !t && i && i.length > 0 || !t && o(e) ? d("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",
    type: "button",
    "aria-label": n("editFileWithFilename", {
      file: e.meta.name
    }),
    title: n("editFileWithFilename", {
      file: e.meta.name
    }),
    onClick: () => a()
  }, d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, d("g", {
    fillRule: "evenodd"
  }, d("path", {
    d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
    fillRule: "nonzero"
  }), d("rect", {
    x: "1",
    y: "12.293",
    width: "11",
    height: "1",
    rx: ".5"
  }), d("path", {
    fillRule: "nonzero",
    d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
  })))) : null;
}
function Dc(r) {
  let {
    i18n: e,
    onClick: t,
    file: i
  } = r;
  return d("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",
    type: "button",
    "aria-label": e("removeFile", {
      file: i.meta.name
    }),
    title: e("removeFile", {
      file: i.meta.name
    }),
    onClick: () => t()
  }, d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, d("path", {
    d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
  }), d("path", {
    fill: "#FFF",
    d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
  })));
}
function Ic(r) {
  let {
    file: e,
    uppy: t,
    i18n: i
  } = r;
  const o = (n) => {
    kc(e.uploadURL, i("copyLinkToClipboardFallback")).then(() => {
      t.log("Link copied to clipboard."), t.info(i("copyLinkToClipboardSuccess"), "info", 3e3);
    }).catch(t.log).then(() => n.target.focus({
      preventScroll: !0
    }));
  };
  return d("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",
    type: "button",
    "aria-label": i("copyLink"),
    title: i("copyLink"),
    onClick: (n) => o(n)
  }, d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 12"
  }, d("path", {
    d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
  })));
}
function Tc(r) {
  const {
    uppy: e,
    file: t,
    uploadInProgressOrComplete: i,
    canEditFile: o,
    metaFields: n,
    showLinkToFileUploadResult: a,
    showRemoveButton: s,
    i18n: l,
    toggleFileCard: u,
    openFileEditor: p
  } = r;
  return d("div", {
    className: "uppy-Dashboard-Item-actionWrapper"
  }, d(Fc, {
    i18n: l,
    file: t,
    uploadInProgressOrComplete: i,
    canEditFile: o,
    metaFields: n,
    onClick: () => {
      n && n.length > 0 ? u(!0, t.id) : p(t);
    }
  }), a && t.uploadURL ? d(Ic, {
    file: t,
    uppy: e,
    i18n: l
  }) : null, s ? d(Dc, {
    i18n: l,
    file: t,
    onClick: () => e.removeFile(t.id)
  }) : null);
}
class Bc extends at {
  componentDidMount() {
    const {
      file: e
    } = this.props;
    e.preview || this.props.handleRequestThumbnail(e);
  }
  shouldComponentUpdate(e) {
    return !sc(this.props, e);
  }
  // VirtualList mounts FileItems again and they emit `thumbnail:request`
  // Otherwise thumbnails are broken or missing after Golden Retriever restores files
  componentDidUpdate() {
    const {
      file: e
    } = this.props;
    e.preview || this.props.handleRequestThumbnail(e);
  }
  componentWillUnmount() {
    const {
      file: e
    } = this.props;
    e.preview || this.props.handleCancelThumbnail(e);
  }
  render() {
    const {
      file: e
    } = this.props, t = e.progress.preprocess || e.progress.postprocess, i = !!e.progress.uploadComplete && !t && !e.error, o = !!e.progress.uploadStarted || !!t, n = e.progress.uploadStarted && !e.progress.uploadComplete || t, a = e.error || !1, {
      isGhost: s
    } = e;
    let l = (this.props.individualCancellation || !n) && !i;
    i && this.props.showRemoveButtonAfterComplete && (l = !0);
    const u = qe({
      "uppy-Dashboard-Item": !0,
      "is-inprogress": n && !this.props.recoveredState,
      "is-processing": t,
      "is-complete": i,
      "is-error": !!a,
      "is-resumable": this.props.resumableUploads,
      "is-noIndividualCancellation": !this.props.individualCancellation,
      "is-ghost": s
    });
    return d("div", {
      className: u,
      id: `uppy_${e.id}`,
      role: this.props.role
    }, d("div", {
      className: "uppy-Dashboard-Item-preview"
    }, d(mc, {
      file: e,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      i18n: this.props.i18n,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields
    }), d(bc, {
      uppy: this.props.uppy,
      file: e,
      error: a,
      isUploaded: i,
      hideRetryButton: this.props.hideRetryButton,
      hideCancelButton: this.props.hideCancelButton,
      hidePauseResumeButton: this.props.hidePauseResumeButton,
      recoveredState: this.props.recoveredState,
      resumableUploads: this.props.resumableUploads,
      individualCancellation: this.props.individualCancellation,
      i18n: this.props.i18n
    })), d("div", {
      className: "uppy-Dashboard-Item-fileInfoAndButtons"
    }, d(Pc, {
      file: e,
      containerWidth: this.props.containerWidth,
      containerHeight: this.props.containerHeight,
      i18n: this.props.i18n,
      toggleAddFilesPanel: this.props.toggleAddFilesPanel,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields,
      isSingleFile: this.props.isSingleFile
    }), d(Tc, {
      file: e,
      metaFields: this.props.metaFields,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      showRemoveButton: l,
      canEditFile: this.props.canEditFile,
      uploadInProgressOrComplete: o,
      toggleFileCard: this.props.toggleFileCard,
      openFileEditor: this.props.openFileEditor,
      uppy: this.props.uppy,
      i18n: this.props.i18n
    })));
  }
}
function Cc(r, e) {
  const t = [];
  let i = [];
  return r.forEach((o) => {
    i.length < e ? i.push(o) : (t.push(i), i = [o]);
  }), i.length && t.push(i), t;
}
function Oc(r) {
  let {
    id: e,
    i18n: t,
    uppy: i,
    files: o,
    resumableUploads: n,
    hideRetryButton: a,
    hidePauseResumeButton: s,
    hideCancelButton: l,
    showLinkToFileUploadResult: u,
    showRemoveButtonAfterComplete: p,
    metaFields: c,
    isSingleFile: f,
    toggleFileCard: P,
    handleRequestThumbnail: T,
    handleCancelThumbnail: O,
    recoveredState: x,
    individualCancellation: D,
    itemsPerRow: m,
    openFileEditor: w,
    canEditFile: _,
    toggleAddFilesPanel: S,
    containerWidth: E,
    containerHeight: A
  } = r;
  const U = m === 1 ? (
    // Mobile
    71
  ) : 200, j = dn(() => {
    const J = (B, ie) => Number(o[ie].isGhost) - Number(o[B].isGhost), re = Object.keys(o);
    return x && re.sort(J), Cc(re, m);
  }, [o, m, x]), ee = (J) => d("div", {
    class: "uppy-Dashboard-filesInner",
    role: "presentation",
    key: J[0]
  }, J.map((re) => d(Bc, {
    key: re,
    uppy: i,
    id: e,
    i18n: t,
    resumableUploads: n,
    individualCancellation: D,
    hideRetryButton: a,
    hidePauseResumeButton: s,
    hideCancelButton: l,
    showLinkToFileUploadResult: u,
    showRemoveButtonAfterComplete: p,
    metaFields: c,
    recoveredState: x,
    isSingleFile: f,
    containerWidth: E,
    containerHeight: A,
    toggleFileCard: P,
    handleRequestThumbnail: T,
    handleCancelThumbnail: O,
    role: "listitem",
    openFileEditor: w,
    canEditFile: _,
    toggleAddFilesPanel: S,
    file: o[re]
  })));
  return f ? d("div", {
    class: "uppy-Dashboard-files"
  }, ee(j[0])) : d(Yd, {
    class: "uppy-Dashboard-files",
    role: "list",
    data: j,
    renderRow: ee,
    rowHeight: U
  });
}
class gl extends at {
  constructor() {
    super(...arguments), this.fileInput = null, this.folderInput = null, this.mobilePhotoFileInput = null, this.mobileVideoFileInput = null, this.triggerFileInputClick = () => {
      var e;
      (e = this.fileInput) == null || e.click();
    }, this.triggerFolderInputClick = () => {
      var e;
      (e = this.folderInput) == null || e.click();
    }, this.triggerVideoCameraInputClick = () => {
      var e;
      (e = this.mobileVideoFileInput) == null || e.click();
    }, this.triggerPhotoCameraInputClick = () => {
      var e;
      (e = this.mobilePhotoFileInput) == null || e.click();
    }, this.onFileInputChange = (e) => {
      this.props.handleInputChange(e), e.currentTarget.value = "";
    }, this.renderHiddenInput = (e, t) => {
      var i;
      return d("input", {
        className: "uppy-Dashboard-input",
        hidden: !0,
        "aria-hidden": "true",
        tabIndex: -1,
        webkitdirectory: e,
        type: "file",
        name: "files[]",
        multiple: this.props.maxNumberOfFiles !== 1,
        onChange: this.onFileInputChange,
        accept: (i = this.props.allowedFileTypes) == null ? void 0 : i.join(", "),
        ref: t
      });
    }, this.renderHiddenCameraInput = (e, t, i) => {
      const n = {
        photo: "image/*",
        video: "video/*"
      }[e];
      return d("input", {
        className: "uppy-Dashboard-input",
        hidden: !0,
        "aria-hidden": "true",
        tabIndex: -1,
        type: "file",
        name: `camera-${e}`,
        onChange: this.onFileInputChange,
        capture: t,
        accept: n,
        ref: i
      });
    }, this.renderMyDeviceAcquirer = () => d("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": "MyDevice"
    }, d("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-uppy-super-focusable": !0,
      onClick: this.triggerFileInputClick
    }, d("div", {
      className: "uppy-DashboardTab-inner"
    }, d("svg", {
      className: "uppy-DashboardTab-iconMyDevice",
      "aria-hidden": "true",
      focusable: "false",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32"
    }, d("path", {
      d: "M8.45 22.087l-1.305-6.674h17.678l-1.572 6.674H8.45zm4.975-12.412l1.083 1.765a.823.823 0 00.715.386h7.951V13.5H8.587V9.675h4.838zM26.043 13.5h-1.195v-2.598c0-.463-.336-.75-.798-.75h-8.356l-1.082-1.766A.823.823 0 0013.897 8H7.728c-.462 0-.815.256-.815.718V13.5h-.956a.97.97 0 00-.746.37.972.972 0 00-.19.81l1.724 8.565c.095.44.484.755.933.755H24c.44 0 .824-.3.929-.727l2.043-8.568a.972.972 0 00-.176-.825.967.967 0 00-.753-.38z",
      fill: "currentcolor",
      "fill-rule": "evenodd"
    }))), d("div", {
      className: "uppy-DashboardTab-name"
    }, this.props.i18n("myDevice")))), this.renderPhotoCamera = () => d("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": "MobilePhotoCamera"
    }, d("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-uppy-super-focusable": !0,
      onClick: this.triggerPhotoCameraInputClick
    }, d("div", {
      className: "uppy-DashboardTab-inner"
    }, d("svg", {
      "aria-hidden": "true",
      focusable: "false",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32"
    }, d("path", {
      d: "M23.5 9.5c1.417 0 2.5 1.083 2.5 2.5v9.167c0 1.416-1.083 2.5-2.5 2.5h-15c-1.417 0-2.5-1.084-2.5-2.5V12c0-1.417 1.083-2.5 2.5-2.5h2.917l1.416-2.167C13 7.167 13.25 7 13.5 7h5c.25 0 .5.167.667.333L20.583 9.5H23.5zM16 11.417a4.706 4.706 0 00-4.75 4.75 4.704 4.704 0 004.75 4.75 4.703 4.703 0 004.75-4.75c0-2.663-2.09-4.75-4.75-4.75zm0 7.825c-1.744 0-3.076-1.332-3.076-3.074 0-1.745 1.333-3.077 3.076-3.077 1.744 0 3.074 1.333 3.074 3.076s-1.33 3.075-3.074 3.075z",
      fill: "#02B383",
      "fill-rule": "nonzero"
    }))), d("div", {
      className: "uppy-DashboardTab-name"
    }, this.props.i18n("takePictureBtn")))), this.renderVideoCamera = () => d("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": "MobileVideoCamera"
    }, d("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-uppy-super-focusable": !0,
      onClick: this.triggerVideoCameraInputClick
    }, d("div", {
      className: "uppy-DashboardTab-inner"
    }, d("svg", {
      "aria-hidden": "true",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32"
    }, d("path", {
      fill: "#FF675E",
      fillRule: "nonzero",
      d: "m21.254 14.277 2.941-2.588c.797-.313 1.243.818 1.09 1.554-.01 2.094.02 4.189-.017 6.282-.126.915-1.145 1.08-1.58.34l-2.434-2.142c-.192.287-.504 1.305-.738.468-.104-1.293-.028-2.596-.05-3.894.047-.312.381.823.426 1.069.063-.384.206-.744.362-1.09zm-12.939-3.73c3.858.013 7.717-.025 11.574.02.912.129 1.492 1.237 1.351 2.217-.019 2.412.04 4.83-.03 7.239-.17 1.025-1.166 1.59-2.029 1.429-3.705-.012-7.41.025-11.114-.019-.913-.129-1.492-1.237-1.352-2.217.018-2.404-.036-4.813.029-7.214.136-.82.83-1.473 1.571-1.454z "
    }))), d("div", {
      className: "uppy-DashboardTab-name"
    }, this.props.i18n("recordVideoBtn")))), this.renderBrowseButton = (e, t) => {
      const i = this.props.acquirers.length;
      return d("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-browse",
        onClick: t,
        "data-uppy-super-focusable": i === 0
      }, e);
    }, this.renderDropPasteBrowseTagline = (e) => {
      const t = this.renderBrowseButton(this.props.i18n("browseFiles"), this.triggerFileInputClick), i = this.renderBrowseButton(this.props.i18n("browseFolders"), this.triggerFolderInputClick), o = this.props.fileManagerSelectionType, n = o.charAt(0).toUpperCase() + o.slice(1);
      return d(
        "div",
        {
          class: "uppy-Dashboard-AddFiles-title"
        },
        // eslint-disable-next-line no-nested-ternary
        this.props.disableLocalFiles ? this.props.i18n("importFiles") : e > 0 ? this.props.i18nArray(`dropPasteImport${n}`, {
          browseFiles: t,
          browseFolders: i,
          browse: t
        }) : this.props.i18nArray(`dropPaste${n}`, {
          browseFiles: t,
          browseFolders: i,
          browse: t
        })
      );
    }, this.renderAcquirer = (e) => {
      var t;
      return d("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": e.id
      }, d("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-cy": e.id,
        "aria-controls": `uppy-DashboardContent-panel--${e.id}`,
        "aria-selected": ((t = this.props.activePickerPanel) == null ? void 0 : t.id) === e.id,
        "data-uppy-super-focusable": !0,
        onClick: () => this.props.showPanel(e.id)
      }, d("div", {
        className: "uppy-DashboardTab-inner"
      }, e.icon()), d("div", {
        className: "uppy-DashboardTab-name"
      }, e.name)));
    }, this.renderAcquirers = (e) => {
      const t = [...e], i = t.splice(e.length - 2, e.length);
      return d(pt, null, t.map((o) => this.renderAcquirer(o)), d("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, i.map((o) => this.renderAcquirer(o))));
    }, this.renderSourcesList = (e, t) => {
      const {
        showNativePhotoCameraButton: i,
        showNativeVideoCameraButton: o
      } = this.props;
      let n = [];
      const a = "myDevice";
      t || n.push({
        key: a,
        elements: this.renderMyDeviceAcquirer()
      }), i && n.push({
        key: "nativePhotoCameraButton",
        elements: this.renderPhotoCamera()
      }), o && n.push({
        key: "nativePhotoCameraButton",
        elements: this.renderVideoCamera()
      }), n.push(...e.map((p) => ({
        key: p.id,
        elements: this.renderAcquirer(p)
      }))), n.length === 1 && n[0].key === a && (n = []);
      const l = [...n], u = l.splice(n.length - 2, n.length);
      return d(pt, null, this.renderDropPasteBrowseTagline(n.length), d("div", {
        className: "uppy-Dashboard-AddFiles-list",
        role: "tablist"
      }, l.map((p) => {
        let {
          key: c,
          elements: f
        } = p;
        return d(pt, {
          key: c
        }, f);
      }), d("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, u.map((p) => {
        let {
          key: c,
          elements: f
        } = p;
        return d(pt, {
          key: c
        }, f);
      }))));
    };
  }
  [Symbol.for("uppy test: disable unused locale key warning")]() {
    this.props.i18nArray("dropPasteBoth"), this.props.i18nArray("dropPasteFiles"), this.props.i18nArray("dropPasteFolders"), this.props.i18nArray("dropPasteImportBoth"), this.props.i18nArray("dropPasteImportFiles"), this.props.i18nArray("dropPasteImportFolders");
  }
  renderPoweredByUppy() {
    const {
      i18nArray: e
    } = this.props, t = d("span", null, d("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon uppy-Dashboard-poweredByIcon",
      width: "11",
      height: "11",
      viewBox: "0 0 11 11"
    }, d("path", {
      d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
      fillRule: "evenodd"
    })), d("span", {
      className: "uppy-Dashboard-poweredByUppy"
    }, "Uppy")), i = e("poweredBy", {
      uppy: t
    });
    return d("a", {
      tabIndex: -1,
      href: "https://uppy.io",
      rel: "noreferrer noopener",
      target: "_blank",
      className: "uppy-Dashboard-poweredBy"
    }, i);
  }
  render() {
    const {
      showNativePhotoCameraButton: e,
      showNativeVideoCameraButton: t,
      nativeCameraFacingMode: i
    } = this.props;
    return d("div", {
      className: "uppy-Dashboard-AddFiles"
    }, this.renderHiddenInput(!1, (o) => {
      this.fileInput = o;
    }), this.renderHiddenInput(!0, (o) => {
      this.folderInput = o;
    }), e && this.renderHiddenCameraInput("photo", i, (o) => {
      this.mobilePhotoFileInput = o;
    }), t && this.renderHiddenCameraInput("video", i, (o) => {
      this.mobileVideoFileInput = o;
    }), this.renderSourcesList(this.props.acquirers, this.props.disableLocalFiles), d("div", {
      className: "uppy-Dashboard-AddFiles-info"
    }, this.props.note && d("div", {
      className: "uppy-Dashboard-note"
    }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy()));
  }
}
const Ec = (r) => d("div", {
  className: qe("uppy-Dashboard-AddFilesPanel", r.className),
  "data-uppy-panelType": "AddFiles",
  "aria-hidden": !r.showAddFilesPanel
}, d("div", {
  className: "uppy-DashboardContent-bar"
}, d("div", {
  className: "uppy-DashboardContent-title",
  role: "heading",
  "aria-level": "1"
}, r.i18n("addingMoreFiles")), d("button", {
  className: "uppy-DashboardContent-back",
  type: "button",
  onClick: () => r.toggleAddFilesPanel(!1)
}, r.i18n("back"))), d(gl, r));
function dt(r) {
  const {
    tagName: e
  } = r.target;
  if (e === "INPUT" || e === "TEXTAREA") {
    r.stopPropagation();
    return;
  }
  r.preventDefault(), r.stopPropagation();
}
function Ac(r) {
  let {
    activePickerPanel: e,
    className: t,
    hideAllPanels: i,
    i18n: o,
    state: n,
    uppy: a
  } = r;
  const s = ni(null);
  return d("div", {
    className: qe("uppy-DashboardContent-panel", t),
    role: "tabpanel",
    "data-uppy-panelType": "PickerPanel",
    id: `uppy-DashboardContent-panel--${e.id}`,
    onDragOver: dt,
    onDragLeave: dt,
    onDrop: dt,
    onPaste: dt
  }, d("div", {
    className: "uppy-DashboardContent-bar"
  }, d("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, o("importFrom", {
    name: e.name
  })), d("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: i
  }, o("cancel"))), d("div", {
    ref: s,
    className: "uppy-DashboardContent-panelBody"
  }, a.getPlugin(e.id).render(n, s.current)));
}
function Uc(r) {
  const e = r.files[r.fileCardFor], t = () => {
    r.uppy.emit("file-editor:cancel", e), r.closeFileEditor();
  };
  return d("div", {
    className: qe("uppy-DashboardContent-panel", r.className),
    role: "tabpanel",
    "data-uppy-panelType": "FileEditor",
    id: "uppy-DashboardContent-panel--editor"
  }, d("div", {
    className: "uppy-DashboardContent-bar"
  }, d("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, r.i18nArray("editing", {
    file: d("span", {
      className: "uppy-DashboardContent-titleFile"
    }, e.meta ? e.meta.name : e.name)
  })), d("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: t
  }, r.i18n("cancel")), d("button", {
    className: "uppy-DashboardContent-save",
    type: "button",
    onClick: r.saveFileEditor
  }, r.i18n("save"))), d("div", {
    className: "uppy-DashboardContent-panelBody"
  }, r.editors.map((i) => r.uppy.getPlugin(i.id).render(r.state))));
}
const We = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete",
  STATE_PAUSED: "paused"
};
function Rc(r, e, t, i) {
  if (i === void 0 && (i = {}), r)
    return We.STATE_ERROR;
  if (e)
    return We.STATE_COMPLETE;
  if (t)
    return We.STATE_PAUSED;
  let o = We.STATE_WAITING;
  const n = Object.keys(i);
  for (let a = 0; a < n.length; a++) {
    const {
      progress: s
    } = i[n[a]];
    if (s.uploadStarted && !s.uploadComplete)
      return We.STATE_UPLOADING;
    s.preprocess && o !== We.STATE_UPLOADING && (o = We.STATE_PREPROCESSING), s.postprocess && o !== We.STATE_UPLOADING && o !== We.STATE_PREPROCESSING && (o = We.STATE_POSTPROCESSING);
  }
  return o;
}
function Mc(r) {
  let {
    files: e,
    i18n: t,
    isAllComplete: i,
    isAllErrored: o,
    isAllPaused: n,
    inProgressNotPausedFiles: a,
    newFiles: s,
    processingFiles: l
  } = r;
  switch (Rc(o, i, n, e)) {
    case "uploading":
      return t("uploadingXFiles", {
        smart_count: a.length
      });
    case "preprocessing":
    case "postprocessing":
      return t("processingXFiles", {
        smart_count: l.length
      });
    case "paused":
      return t("uploadPaused");
    case "waiting":
      return t("xFilesSelected", {
        smart_count: s.length
      });
    case "complete":
      return t("uploadComplete");
    case "error":
      return t("error");
  }
}
function zc(r) {
  const {
    i18n: e,
    isAllComplete: t,
    hideCancelButton: i,
    maxNumberOfFiles: o,
    toggleAddFilesPanel: n,
    uppy: a
  } = r;
  let {
    allowNewUpload: s
  } = r;
  return s && o && (s = r.totalFileCount < r.maxNumberOfFiles), d("div", {
    className: "uppy-DashboardContent-bar"
  }, !t && !i ? d("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: () => a.cancelAll()
  }, e("cancel")) : d("div", null), d("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, d(Mc, r)), s ? d("button", {
    className: "uppy-DashboardContent-addMore",
    type: "button",
    "aria-label": e("addMoreFiles"),
    title: e("addMoreFiles"),
    onClick: () => n(!0)
  }, d("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15"
  }, d("path", {
    d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
  })), d("span", {
    className: "uppy-DashboardContent-addMoreCaption"
  }, e("addMore"))) : d("div", null));
}
function Nc(r) {
  const {
    computedMetaFields: e,
    requiredMetaFields: t,
    updateMeta: i,
    form: o,
    formState: n
  } = r, a = {
    text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"
  };
  return e.map((s) => {
    const l = `uppy-Dashboard-FileCard-input-${s.id}`, u = t.includes(s.id);
    return d("fieldset", {
      key: s.id,
      className: "uppy-Dashboard-FileCard-fieldset"
    }, d("label", {
      className: "uppy-Dashboard-FileCard-label",
      htmlFor: l
    }, s.name), s.render !== void 0 ? s.render({
      value: n[s.id],
      onChange: (p) => i(p, s.id),
      fieldCSSClasses: a,
      required: u,
      form: o.id
    }, d) : d("input", {
      className: a.text,
      id: l,
      form: o.id,
      type: s.type || "text",
      required: u,
      value: n[s.id],
      placeholder: s.placeholder,
      onInput: (p) => i(p.target.value, s.id),
      "data-uppy-super-focusable": !0
    }));
  });
}
function Lc(r) {
  var e;
  const {
    files: t,
    fileCardFor: i,
    toggleFileCard: o,
    saveFileCard: n,
    metaFields: a,
    requiredMetaFields: s,
    openFileEditor: l,
    i18n: u,
    i18nArray: p,
    className: c,
    canEditFile: f
  } = r, P = () => typeof a == "function" ? a(t[i]) : a, T = t[i], O = (e = P()) != null ? e : [], x = f(T), D = {};
  O.forEach((U) => {
    var j;
    D[U.id] = (j = T.meta[U.id]) != null ? j : "";
  });
  const [m, w] = hi(D), _ = Wd((U) => {
    U.preventDefault(), n(m, i);
  }, [n, m, i]), S = (U, j) => {
    w({
      ...m,
      [j]: U
    });
  }, E = () => {
    o(!1);
  }, [A] = hi(() => {
    const U = document.createElement("form");
    return U.setAttribute("tabindex", "-1"), U.id = Jo(), U;
  });
  return Eo(() => (document.body.appendChild(A), A.addEventListener("submit", _), () => {
    A.removeEventListener("submit", _), document.body.removeChild(A);
  }), [A, _]), d("div", {
    className: qe("uppy-Dashboard-FileCard", c),
    "data-uppy-panelType": "FileCard",
    onDragOver: dt,
    onDragLeave: dt,
    onDrop: dt,
    onPaste: dt
  }, d("div", {
    className: "uppy-DashboardContent-bar"
  }, d("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, p("editing", {
    file: d("span", {
      className: "uppy-DashboardContent-titleFile"
    }, T.meta ? T.meta.name : T.name)
  })), d("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    form: A.id,
    title: u("finishEditingFile"),
    onClick: E
  }, u("cancel"))), d("div", {
    className: "uppy-Dashboard-FileCard-inner"
  }, d("div", {
    className: "uppy-Dashboard-FileCard-preview",
    style: {
      backgroundColor: cn(T.type).color
    }
  }, d(fl, {
    file: T
  }), x && d("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",
    onClick: (U) => {
      _(U), l(T);
    }
  }, u("editImage"))), d("div", {
    className: "uppy-Dashboard-FileCard-info"
  }, d(Nc, {
    computedMetaFields: O,
    requiredMetaFields: s,
    updateMeta: S,
    form: A,
    formState: m
  })), d("div", {
    className: "uppy-Dashboard-FileCard-actions"
  }, d("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
    type: "submit",
    form: A.id
  }, u("saveChanges")), d("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
    type: "button",
    onClick: E,
    form: A.id
  }, u("cancel")))));
}
const At = "uppy-transition-slideDownUp", za = 250;
function Qr(r) {
  let {
    children: e
  } = r;
  const [t, i] = hi(null), [o, n] = hi(""), a = ni(), s = ni(), l = ni(), u = () => {
    n(`${At}-enter`), cancelAnimationFrame(l.current), clearTimeout(s.current), s.current = void 0, l.current = requestAnimationFrame(() => {
      n(`${At}-enter ${At}-enter-active`), a.current = setTimeout(() => {
        n("");
      }, za);
    });
  }, p = () => {
    n(`${At}-leave`), cancelAnimationFrame(l.current), clearTimeout(a.current), a.current = void 0, l.current = requestAnimationFrame(() => {
      n(`${At}-leave ${At}-leave-active`), s.current = setTimeout(() => {
        i(null), n("");
      }, za);
    });
  };
  return Eo(() => {
    const c = lt(e)[0];
    t !== c && (c && !t ? u() : t && !c && !s.current && p(), i(c));
  }, [e, t]), Eo(() => () => {
    clearTimeout(a.current), clearTimeout(s.current), cancelAnimationFrame(l.current);
  }, []), t ? js(t, {
    className: qe(o, t.props.className)
  }) : null;
}
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t) ({}).hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, Lt.apply(null, arguments);
}
const Na = 900, La = 700, oo = 576, ja = 330;
function jc(r) {
  const e = r.totalFileCount === 0, t = r.totalFileCount === 1, i = r.containerWidth > oo, o = r.containerHeight > ja, n = qe({
    "uppy-Dashboard": !0,
    "uppy-Dashboard--isDisabled": r.disabled,
    "uppy-Dashboard--animateOpenClose": r.animateOpenClose,
    "uppy-Dashboard--isClosing": r.isClosing,
    "uppy-Dashboard--isDraggingOver": r.isDraggingOver,
    "uppy-Dashboard--modal": !r.inline,
    "uppy-size--md": r.containerWidth > oo,
    "uppy-size--lg": r.containerWidth > La,
    "uppy-size--xl": r.containerWidth > Na,
    "uppy-size--height-md": r.containerHeight > ja,
    // We might want to enable this in the future
    // 'uppy-size--height-lg': props.containerHeight > HEIGHT_LG,
    // 'uppy-size--height-xl': props.containerHeight > HEIGHT_XL,
    "uppy-Dashboard--isAddFilesPanelVisible": r.showAddFilesPanel,
    "uppy-Dashboard--isInnerWrapVisible": r.areInsidesReadyToBeVisible,
    // Only enable “centered single file” mode when Dashboard is tall enough
    "uppy-Dashboard--singleFile": r.singleFileFullScreen && t && o
  });
  let a = 1;
  r.containerWidth > Na ? a = 5 : r.containerWidth > La ? a = 4 : r.containerWidth > oo && (a = 3);
  const s = r.showSelectedFiles && !e, l = r.recoveredState ? Object.keys(r.recoveredState.files).length : null, u = r.files ? Object.keys(r.files).filter((f) => r.files[f].isGhost).length : 0, p = () => u > 0 ? r.i18n("recoveredXFiles", {
    smart_count: u
  }) : r.i18n("recoveredAllFiles");
  return d("div", {
    className: n,
    "data-uppy-theme": r.theme,
    "data-uppy-num-acquirers": r.acquirers.length,
    "data-uppy-drag-drop-supported": !r.disableLocalFiles && ac(),
    "aria-hidden": r.inline ? "false" : r.isHidden,
    "aria-disabled": r.disabled,
    "aria-label": r.inline ? r.i18n("dashboardTitle") : r.i18n("dashboardWindowTitle"),
    onPaste: r.handlePaste,
    onDragOver: r.handleDragOver,
    onDragLeave: r.handleDragLeave,
    onDrop: r.handleDrop
  }, d("div", {
    "aria-hidden": "true",
    className: "uppy-Dashboard-overlay",
    tabIndex: -1,
    onClick: r.handleClickOutside
  }), d("div", {
    className: "uppy-Dashboard-inner",
    "aria-modal": !r.inline && "true",
    role: r.inline ? void 0 : "dialog",
    style: {
      width: r.inline && r.width ? r.width : "",
      height: r.inline && r.height ? r.height : ""
    }
  }, r.inline ? null : d("button", {
    className: "uppy-u-reset uppy-Dashboard-close",
    type: "button",
    "aria-label": r.i18n("closeModal"),
    title: r.i18n("closeModal"),
    onClick: r.closeModal
  }, d("span", {
    "aria-hidden": "true"
  }, "×")), d("div", {
    className: "uppy-Dashboard-innerWrap"
  }, d("div", {
    className: "uppy-Dashboard-dropFilesHereHint"
  }, r.i18n("dropHint")), s && d(zc, r), l && d("div", {
    className: "uppy-Dashboard-serviceMsg"
  }, d("svg", {
    className: "uppy-Dashboard-serviceMsg-icon",
    "aria-hidden": "true",
    focusable: "false",
    width: "21",
    height: "16",
    viewBox: "0 0 24 19"
  }, d("g", {
    transform: "translate(0 -1)",
    fill: "none",
    fillRule: "evenodd"
  }, d("path", {
    d: "M12.857 1.43l10.234 17.056A1 1 0 0122.234 20H1.766a1 1 0 01-.857-1.514L11.143 1.429a1 1 0 011.714 0z",
    fill: "#FFD300"
  }), d("path", {
    fill: "#000",
    d: "M11 6h2l-.3 8h-1.4z"
  }), d("circle", {
    fill: "#000",
    cx: "12",
    cy: "17",
    r: "1"
  }))), d("strong", {
    className: "uppy-Dashboard-serviceMsg-title"
  }, r.i18n("sessionRestored")), d("div", {
    className: "uppy-Dashboard-serviceMsg-text"
  }, p())), s ? d(Oc, {
    id: r.id,
    i18n: r.i18n,
    uppy: r.uppy,
    files: r.files,
    resumableUploads: r.resumableUploads,
    hideRetryButton: r.hideRetryButton,
    hidePauseResumeButton: r.hidePauseResumeButton,
    hideCancelButton: r.hideCancelButton,
    showLinkToFileUploadResult: r.showLinkToFileUploadResult,
    showRemoveButtonAfterComplete: r.showRemoveButtonAfterComplete,
    metaFields: r.metaFields,
    toggleFileCard: r.toggleFileCard,
    handleRequestThumbnail: r.handleRequestThumbnail,
    handleCancelThumbnail: r.handleCancelThumbnail,
    recoveredState: r.recoveredState,
    individualCancellation: r.individualCancellation,
    openFileEditor: r.openFileEditor,
    canEditFile: r.canEditFile,
    toggleAddFilesPanel: r.toggleAddFilesPanel,
    isSingleFile: t,
    itemsPerRow: a,
    containerWidth: r.containerWidth,
    containerHeight: r.containerHeight
  }) : d(gl, {
    i18n: r.i18n,
    i18nArray: r.i18nArray,
    acquirers: r.acquirers,
    handleInputChange: r.handleInputChange,
    maxNumberOfFiles: r.maxNumberOfFiles,
    allowedFileTypes: r.allowedFileTypes,
    showNativePhotoCameraButton: r.showNativePhotoCameraButton,
    showNativeVideoCameraButton: r.showNativeVideoCameraButton,
    nativeCameraFacingMode: r.nativeCameraFacingMode,
    showPanel: r.showPanel,
    activePickerPanel: r.activePickerPanel,
    disableLocalFiles: r.disableLocalFiles,
    fileManagerSelectionType: r.fileManagerSelectionType,
    note: r.note,
    proudlyDisplayPoweredByUppy: r.proudlyDisplayPoweredByUppy
  }), d(Qr, null, r.showAddFilesPanel ? d(Ec, Lt({
    key: "AddFiles"
  }, r, {
    isSizeMD: i
  })) : null), d(Qr, null, r.fileCardFor ? d(Lc, Lt({
    key: "FileCard"
  }, r)) : null), d(Qr, null, r.activePickerPanel ? d(Ac, Lt({
    key: "Picker"
  }, r)) : null), d(Qr, null, r.showFileEditor ? d(Uc, Lt({
    key: "Editor"
  }, r)) : null), d("div", {
    className: "uppy-Dashboard-progressindicators"
  }, r.progressindicators.map((f) => r.uppy.getPlugin(f.id).render(r.state))))));
}
const $c = {
  strings: {
    // When `inline: false`, used as the screen reader label for the button that closes the modal.
    closeModal: "Close Modal",
    // Used as the screen reader label for the plus (+) button that shows the “Add more files” screen
    addMoreFiles: "Add more files",
    addingMoreFiles: "Adding more files",
    // Used as the header for import panels, e.g., “Import from Google Drive”.
    importFrom: "Import from %{name}",
    // When `inline: false`, used as the screen reader label for the dashboard modal.
    dashboardWindowTitle: "Uppy Dashboard Window (Press escape to close)",
    // When `inline: true`, used as the screen reader label for the dashboard area.
    dashboardTitle: "Uppy Dashboard",
    // Shown in the Informer when a link to a file was copied to the clipboard.
    copyLinkToClipboardSuccess: "Link copied to clipboard.",
    // Used when a link cannot be copied automatically — the user has to select the text from the
    // input element below this string.
    copyLinkToClipboardFallback: "Copy the URL below",
    // Used as the hover title and screen reader label for buttons that copy a file link.
    copyLink: "Copy link",
    back: "Back",
    // Used as the screen reader label for buttons that remove a file.
    removeFile: "Remove file",
    // Used as the screen reader label for buttons that open the metadata editor panel for a file.
    editFile: "Edit file",
    editImage: "Edit image",
    // Shown in the panel header for the metadata editor. Rendered as “Editing image.png”.
    editing: "Editing %{file}",
    // Shown on the main upload screen when an upload error occurs
    error: "Error",
    // Used as the screen reader label for the button that saves metadata edits and returns to the
    // file list view.
    finishEditingFile: "Finish editing file",
    saveChanges: "Save changes",
    // Used as the label for the tab button that opens the system file selection dialog.
    myDevice: "My Device",
    dropHint: "Drop your files here",
    // Used as the hover text and screen reader label for file progress indicators when
    // they have been fully uploaded.
    uploadComplete: "Upload complete",
    uploadPaused: "Upload paused",
    // Used as the hover text and screen reader label for the buttons to resume paused uploads.
    resumeUpload: "Resume upload",
    // Used as the hover text and screen reader label for the buttons to pause uploads.
    pauseUpload: "Pause upload",
    // Used as the hover text and screen reader label for the buttons to retry failed uploads.
    retryUpload: "Retry upload",
    // Used as the hover text and screen reader label for the buttons to cancel uploads.
    cancelUpload: "Cancel upload",
    // Used in a title, how many files are currently selected
    xFilesSelected: {
      0: "%{smart_count} file selected",
      1: "%{smart_count} files selected"
    },
    uploadingXFiles: {
      0: "Uploading %{smart_count} file",
      1: "Uploading %{smart_count} files"
    },
    processingXFiles: {
      0: "Processing %{smart_count} file",
      1: "Processing %{smart_count} files"
    },
    // The "powered by Uppy" link at the bottom of the Dashboard.
    poweredBy: "Powered by %{uppy}",
    addMore: "Add more",
    editFileWithFilename: "Edit file %{file}",
    save: "Save",
    cancel: "Cancel",
    dropPasteFiles: "Drop files here or %{browseFiles}",
    dropPasteFolders: "Drop files here or %{browseFolders}",
    dropPasteBoth: "Drop files here, %{browseFiles} or %{browseFolders}",
    dropPasteImportFiles: "Drop files here, %{browseFiles} or import from:",
    dropPasteImportFolders: "Drop files here, %{browseFolders} or import from:",
    dropPasteImportBoth: "Drop files here, %{browseFiles}, %{browseFolders} or import from:",
    importFiles: "Import files from:",
    browseFiles: "browse files",
    browseFolders: "browse folders",
    recoveredXFiles: {
      0: "We could not fully recover 1 file. Please re-select it and resume the upload.",
      1: "We could not fully recover %{smart_count} files. Please re-select them and resume the upload."
    },
    recoveredAllFiles: "We restored all files. You can now resume the upload.",
    sessionRestored: "Session restored",
    reSelect: "Re-select",
    missingRequiredMetaFields: {
      0: "Missing required meta field: %{fields}.",
      1: "Missing required meta fields: %{fields}."
    },
    // Used for native device camera buttons on mobile
    takePictureBtn: "Take Picture",
    recordVideoBtn: "Record Video"
  }
};
function Q(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var qc = 0;
function xe(r) {
  return "__private_" + qc++ + "_" + r;
}
const Hc = {
  version: "4.3.3"
}, no = Ua.default || Ua, $a = 9, Wc = 27;
function qa() {
  const r = {};
  return r.promise = new Promise((e, t) => {
    r.resolve = e, r.reject = t;
  }), r;
}
const Gc = {
  target: "body",
  metaFields: [],
  thumbnailWidth: 280,
  thumbnailType: "image/jpeg",
  waitForThumbnailsBeforeUpload: !1,
  defaultPickerIcon: Zd,
  showLinkToFileUploadResult: !1,
  showProgressDetails: !1,
  hideUploadButton: !1,
  hideCancelButton: !1,
  hideRetryButton: !1,
  hidePauseResumeButton: !1,
  hideProgressAfterFinish: !1,
  note: null,
  singleFileFullScreen: !0,
  disableStatusBar: !1,
  disableInformer: !1,
  disableThumbnailGenerator: !1,
  fileManagerSelectionType: "files",
  proudlyDisplayPoweredByUppy: !0,
  showSelectedFiles: !0,
  showRemoveButtonAfterComplete: !1,
  showNativePhotoCameraButton: !1,
  showNativeVideoCameraButton: !1,
  theme: "light",
  autoOpen: null,
  disabled: !1,
  disableLocalFiles: !1,
  nativeCameraFacingMode: "",
  onDragLeave: () => {
  },
  onDragOver: () => {
  },
  onDrop: () => {
  },
  plugins: [],
  // Dynamic default options, they have to be defined in the constructor (because
  // they require access to the `this` keyword), but we still want them to
  // appear in the default options so TS knows they'll be defined.
  doneButtonHandler: void 0,
  onRequestCloseModal: null,
  // defaultModalOptions
  inline: !1,
  animateOpenClose: !0,
  browserBackButtonClose: !1,
  closeAfterFinish: !1,
  closeModalOnClickOutside: !1,
  disablePageScrollWhenModalOpen: !0,
  trigger: null,
  // defaultInlineOptions
  width: 750,
  height: 550
};
var ft = /* @__PURE__ */ xe("disabledNodes"), Xe = /* @__PURE__ */ xe("generateLargeThumbnailIfSingleFile"), pr = /* @__PURE__ */ xe("openFileEditorWhenFilesAdded"), yt = /* @__PURE__ */ xe("attachRenderFunctionToTarget"), ao = /* @__PURE__ */ xe("isTargetSupported"), so = /* @__PURE__ */ xe("getAcquirers"), lo = /* @__PURE__ */ xe("getProgressIndicators"), Ye = /* @__PURE__ */ xe("getEditors"), uo = /* @__PURE__ */ xe("addSpecifiedPluginsFromOptions"), po = /* @__PURE__ */ xe("autoDiscoverPlugins"), mt = /* @__PURE__ */ xe("addSupportedPluginIfNoTarget"), dr = /* @__PURE__ */ xe("getStatusBarOpts"), cr = /* @__PURE__ */ xe("getThumbnailGeneratorOpts"), co = /* @__PURE__ */ xe("getInformerOpts"), hr = /* @__PURE__ */ xe("getStatusBarId"), fr = /* @__PURE__ */ xe("getThumbnailGeneratorId"), ho = /* @__PURE__ */ xe("getInformerId");
class bl extends Dt {
  // Timeouts
  constructor(e, t) {
    var i, o, n;
    const a = (i = t?.autoOpen) != null ? i : null;
    super(e, {
      ...Gc,
      ...t,
      autoOpen: a
    }), Object.defineProperty(this, ho, {
      value: Jc
    }), Object.defineProperty(this, fr, {
      value: Zc
    }), Object.defineProperty(this, hr, {
      value: Yc
    }), Object.defineProperty(this, co, {
      value: Xc
    }), Object.defineProperty(this, cr, {
      value: Kc
    }), Object.defineProperty(this, dr, {
      value: Vc
    }), Object.defineProperty(this, ft, {
      writable: !0,
      value: void 0
    }), this.modalName = `uppy-Dashboard-${Jo()}`, this.superFocus = nc(), this.ifFocusedOnUppyRecently = !1, this.removeTarget = (s) => {
      const u = this.getPluginState().targets.filter((p) => p.id !== s.id);
      this.setPluginState({
        targets: u
      });
    }, this.addTarget = (s) => {
      const l = s.id || s.constructor.name, u = s.title || l, p = s.type;
      if (p !== "acquirer" && p !== "progressindicator" && p !== "editor")
        return this.uppy.log("Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor", "error"), null;
      const c = {
        id: l,
        name: u,
        type: p
      }, P = this.getPluginState().targets.slice();
      return P.push(c), this.setPluginState({
        targets: P
      }), this.el;
    }, this.hideAllPanels = () => {
      var s;
      const l = this.getPluginState(), u = {
        activePickerPanel: void 0,
        showAddFilesPanel: !1,
        activeOverlayType: null,
        fileCardFor: null,
        showFileEditor: !1
      };
      l.activePickerPanel === u.activePickerPanel && l.showAddFilesPanel === u.showAddFilesPanel && l.showFileEditor === u.showFileEditor && l.activeOverlayType === u.activeOverlayType || (this.setPluginState(u), this.uppy.emit("dashboard:close-panel", (s = l.activePickerPanel) == null ? void 0 : s.id));
    }, this.showPanel = (s) => {
      const {
        targets: l
      } = this.getPluginState(), u = l.find((p) => p.type === "acquirer" && p.id === s);
      this.setPluginState({
        activePickerPanel: u,
        activeOverlayType: "PickerPanel"
      }), this.uppy.emit("dashboard:show-panel", s);
    }, this.canEditFile = (s) => {
      const {
        targets: l
      } = this.getPluginState();
      return Q(this, Ye)[Ye](l).some((p) => this.uppy.getPlugin(p.id).canEditFile(s));
    }, this.openFileEditor = (s) => {
      const {
        targets: l
      } = this.getPluginState(), u = Q(this, Ye)[Ye](l);
      this.setPluginState({
        showFileEditor: !0,
        fileCardFor: s.id || null,
        activeOverlayType: "FileEditor"
      }), u.forEach((p) => {
        this.uppy.getPlugin(p.id).selectFile(s);
      });
    }, this.closeFileEditor = () => {
      const {
        metaFields: s
      } = this.getPluginState();
      s && s.length > 0 ? this.setPluginState({
        showFileEditor: !1,
        activeOverlayType: "FileCard"
      }) : this.setPluginState({
        showFileEditor: !1,
        fileCardFor: null,
        activeOverlayType: "AddFiles"
      });
    }, this.saveFileEditor = () => {
      const {
        targets: s
      } = this.getPluginState();
      Q(this, Ye)[Ye](s).forEach((u) => {
        this.uppy.getPlugin(u.id).save();
      }), this.closeFileEditor();
    }, this.openModal = () => {
      const {
        promise: s,
        resolve: l
      } = qa();
      if (this.savedScrollPosition = window.pageYOffset, this.savedActiveElement = document.activeElement, this.opts.disablePageScrollWhenModalOpen && document.body.classList.add("uppy-Dashboard-isFixed"), this.opts.animateOpenClose && this.getPluginState().isClosing) {
        const u = () => {
          this.setPluginState({
            isHidden: !1
          }), this.el.removeEventListener("animationend", u, !1), l();
        };
        this.el.addEventListener("animationend", u, !1);
      } else
        this.setPluginState({
          isHidden: !1
        }), l();
      return this.opts.browserBackButtonClose && this.updateBrowserHistory(), document.addEventListener("keydown", this.handleKeyDownInModal), this.uppy.emit("dashboard:modal-open"), s;
    }, this.closeModal = (s) => {
      var l;
      const u = (l = s?.manualClose) != null ? l : !0, {
        isHidden: p,
        isClosing: c
      } = this.getPluginState();
      if (p || c)
        return;
      const {
        promise: f,
        resolve: P
      } = qa();
      if (this.opts.disablePageScrollWhenModalOpen && document.body.classList.remove("uppy-Dashboard-isFixed"), this.opts.animateOpenClose) {
        this.setPluginState({
          isClosing: !0
        });
        const O = () => {
          this.setPluginState({
            isHidden: !0,
            isClosing: !1
          }), this.superFocus.cancel(), this.savedActiveElement.focus(), this.el.removeEventListener("animationend", O, !1), P();
        };
        this.el.addEventListener("animationend", O, !1);
      } else
        this.setPluginState({
          isHidden: !0
        }), this.superFocus.cancel(), this.savedActiveElement.focus(), P();
      if (document.removeEventListener("keydown", this.handleKeyDownInModal), u && this.opts.browserBackButtonClose) {
        var T;
        (T = history.state) != null && T[this.modalName] && history.back();
      }
      return this.uppy.emit("dashboard:modal-closed"), f;
    }, this.isModalOpen = () => !this.getPluginState().isHidden || !1, this.requestCloseModal = () => this.opts.onRequestCloseModal ? this.opts.onRequestCloseModal() : this.closeModal(), this.setDarkModeCapability = (s) => {
      const {
        capabilities: l
      } = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...l,
          darkMode: s
        }
      });
    }, this.handleSystemDarkModeChange = (s) => {
      const l = s.matches;
      this.uppy.log(`[Dashboard] Dark mode is ${l ? "on" : "off"}`), this.setDarkModeCapability(l);
    }, this.toggleFileCard = (s, l) => {
      const u = this.uppy.getFile(l);
      s ? this.uppy.emit("dashboard:file-edit-start", u) : this.uppy.emit("dashboard:file-edit-complete", u), this.setPluginState({
        fileCardFor: s ? l : null,
        activeOverlayType: s ? "FileCard" : null
      });
    }, this.toggleAddFilesPanel = (s) => {
      this.setPluginState({
        showAddFilesPanel: s,
        activeOverlayType: s ? "AddFiles" : null
      });
    }, this.addFiles = (s) => {
      const l = s.map((u) => ({
        source: this.id,
        name: u.name,
        type: u.type,
        data: u,
        meta: {
          // path of the file relative to the ancestor directory the user selected.
          // e.g. 'docs/Old Prague/airbnb.pdf'
          relativePath: u.relativePath || u.webkitRelativePath || null
        }
      }));
      try {
        this.uppy.addFiles(l);
      } catch (u) {
        this.uppy.log(u);
      }
    }, this.startListeningToResize = () => {
      this.resizeObserver = new ResizeObserver((s) => {
        const l = s[0], {
          width: u,
          height: p
        } = l.contentRect;
        this.setPluginState({
          containerWidth: u,
          containerHeight: p,
          areInsidesReadyToBeVisible: !0
        });
      }), this.resizeObserver.observe(this.el.querySelector(".uppy-Dashboard-inner")), this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(() => {
        const s = this.getPluginState(), l = !this.opts.inline && s.isHidden;
        // We might want to enable this in the future
        // if ResizeObserver hasn't yet fired,
        !s.areInsidesReadyToBeVisible && // and it's not due to the modal being closed
        !l && (this.uppy.log("[Dashboard] resize event didn’t fire on time: defaulted to mobile layout", "warning"), this.setPluginState({
          areInsidesReadyToBeVisible: !0
        }));
      }, 1e3);
    }, this.stopListeningToResize = () => {
      this.resizeObserver.disconnect(), clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
    }, this.recordIfFocusedOnUppyRecently = (s) => {
      this.el.contains(s.target) ? this.ifFocusedOnUppyRecently = !0 : (this.ifFocusedOnUppyRecently = !1, this.superFocus.cancel());
    }, this.disableInteractiveElements = (s) => {
      var l;
      const u = ["a[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", '[role="button"]:not([disabled])'], p = (l = Q(this, ft)[ft]) != null ? l : Sr(this.el.querySelectorAll(u)).filter((c) => !c.classList.contains("uppy-Dashboard-close"));
      for (const c of p)
        c.tagName === "A" ? c.setAttribute("aria-disabled", s) : c.disabled = s;
      s ? Q(this, ft)[ft] = p : Q(this, ft)[ft] = null, this.dashboardIsDisabled = s;
    }, this.updateBrowserHistory = () => {
      var s;
      (s = history.state) != null && s[this.modalName] || history.pushState({
        // eslint-disable-next-line no-restricted-globals
        ...history.state,
        [this.modalName]: !0
      }, ""), window.addEventListener("popstate", this.handlePopState, !1);
    }, this.handlePopState = (s) => {
      var l;
      this.isModalOpen() && (!s.state || !s.state[this.modalName]) && this.closeModal({
        manualClose: !1
      }), !this.isModalOpen() && (l = s.state) != null && l[this.modalName] && history.back();
    }, this.handleKeyDownInModal = (s) => {
      s.keyCode === Wc && this.requestCloseModal(), s.keyCode === $a && hl(s, this.getPluginState().activeOverlayType, this.el);
    }, this.handleClickOutside = () => {
      this.opts.closeModalOnClickOutside && this.requestCloseModal();
    }, this.handlePaste = (s) => {
      this.uppy.iteratePlugins((u) => {
        u.type === "acquirer" && (u.handleRootPaste == null || u.handleRootPaste(s));
      });
      const l = Sr(s.clipboardData.files);
      l.length > 0 && (this.uppy.log("[Dashboard] Files pasted"), this.addFiles(l));
    }, this.handleInputChange = (s) => {
      s.preventDefault();
      const l = Sr(s.currentTarget.files || []);
      l.length > 0 && (this.uppy.log("[Dashboard] Files selected through input"), this.addFiles(l));
    }, this.handleDragOver = (s) => {
      s.preventDefault(), s.stopPropagation();
      const l = () => {
        let f = !0;
        return this.uppy.iteratePlugins((P) => {
          P.canHandleRootDrop != null && P.canHandleRootDrop(s) && (f = !0);
        }), f;
      }, u = () => {
        const {
          types: f
        } = s.dataTransfer;
        return f.some((P) => P === "Files");
      }, p = l(), c = u();
      if (!p && !c || this.opts.disabled || // opts.disableLocalFiles should only be taken into account if no plugins
      // can handle the datatransfer
      this.opts.disableLocalFiles && (c || !p) || !this.uppy.getState().allowNewUpload) {
        s.dataTransfer.dropEffect = "none";
        return;
      }
      s.dataTransfer.dropEffect = "copy", this.setPluginState({
        isDraggingOver: !0
      }), this.opts.onDragOver(s);
    }, this.handleDragLeave = (s) => {
      s.preventDefault(), s.stopPropagation(), this.setPluginState({
        isDraggingOver: !1
      }), this.opts.onDragLeave(s);
    }, this.handleDrop = async (s) => {
      s.preventDefault(), s.stopPropagation(), this.setPluginState({
        isDraggingOver: !1
      }), this.uppy.iteratePlugins((c) => {
        c.type === "acquirer" && (c.handleRootDrop == null || c.handleRootDrop(s));
      });
      let l = !1;
      const u = (c) => {
        this.uppy.log(c, "error"), l || (this.uppy.info(c.message, "error"), l = !0);
      };
      this.uppy.log("[Dashboard] Processing dropped files");
      const p = await qd(s.dataTransfer, {
        logDropError: u
      });
      p.length > 0 && (this.uppy.log("[Dashboard] Files dropped"), this.addFiles(p)), this.opts.onDrop(s);
    }, this.handleRequestThumbnail = (s) => {
      this.opts.waitForThumbnailsBeforeUpload || this.uppy.emit("thumbnail:request", s);
    }, this.handleCancelThumbnail = (s) => {
      this.opts.waitForThumbnailsBeforeUpload || this.uppy.emit("thumbnail:cancel", s);
    }, this.handleKeyDownInInline = (s) => {
      s.keyCode === $a && rc(s, this.getPluginState().activeOverlayType, this.el);
    }, this.handlePasteOnBody = (s) => {
      this.el.contains(document.activeElement) && this.handlePaste(s);
    }, this.handleComplete = (s) => {
      let {
        failed: l
      } = s;
      this.opts.closeAfterFinish && !(l != null && l.length) && this.requestCloseModal();
    }, this.handleCancelRestore = () => {
      this.uppy.emit("restore-canceled");
    }, Object.defineProperty(this, Xe, {
      writable: !0,
      value: () => {
        if (this.opts.disableThumbnailGenerator)
          return;
        const s = 600, l = this.uppy.getFiles();
        if (l.length === 1) {
          const u = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
          u?.setOptions({
            thumbnailWidth: s
          });
          const p = {
            ...l[0],
            preview: void 0
          };
          u?.requestThumbnail(p).then(() => {
            u?.setOptions({
              thumbnailWidth: this.opts.thumbnailWidth
            });
          });
        }
      }
    }), Object.defineProperty(this, pr, {
      writable: !0,
      value: (s) => {
        const l = s[0], {
          metaFields: u
        } = this.getPluginState(), p = u && u.length > 0, c = this.canEditFile(l);
        p && this.opts.autoOpen === "metaEditor" ? this.toggleFileCard(!0, l.id) : c && this.opts.autoOpen === "imageEditor" && this.openFileEditor(l);
      }
    }), this.initEvents = () => {
      if (this.opts.trigger && !this.opts.inline) {
        const s = ka(this.opts.trigger);
        s ? s.forEach((l) => l.addEventListener("click", this.openModal)) : this.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself", "warning");
      }
      this.startListeningToResize(), document.addEventListener("paste", this.handlePasteOnBody), this.uppy.on("plugin-added", Q(this, mt)[mt]), this.uppy.on("plugin-remove", this.removeTarget), this.uppy.on("file-added", this.hideAllPanels), this.uppy.on("dashboard:modal-closed", this.hideAllPanels), this.uppy.on("complete", this.handleComplete), this.uppy.on("files-added", Q(this, Xe)[Xe]), this.uppy.on("file-removed", Q(this, Xe)[Xe]), document.addEventListener("focus", this.recordIfFocusedOnUppyRecently, !0), document.addEventListener("click", this.recordIfFocusedOnUppyRecently, !0), this.opts.inline && this.el.addEventListener("keydown", this.handleKeyDownInInline), this.opts.autoOpen && this.uppy.on("files-added", Q(this, pr)[pr]);
    }, this.removeEvents = () => {
      const s = ka(this.opts.trigger);
      !this.opts.inline && s && s.forEach((l) => l.removeEventListener("click", this.openModal)), this.stopListeningToResize(), document.removeEventListener("paste", this.handlePasteOnBody), window.removeEventListener("popstate", this.handlePopState, !1), this.uppy.off("plugin-added", Q(this, mt)[mt]), this.uppy.off("plugin-remove", this.removeTarget), this.uppy.off("file-added", this.hideAllPanels), this.uppy.off("dashboard:modal-closed", this.hideAllPanels), this.uppy.off("complete", this.handleComplete), this.uppy.off("files-added", Q(this, Xe)[Xe]), this.uppy.off("file-removed", Q(this, Xe)[Xe]), document.removeEventListener("focus", this.recordIfFocusedOnUppyRecently), document.removeEventListener("click", this.recordIfFocusedOnUppyRecently), this.opts.inline && this.el.removeEventListener("keydown", this.handleKeyDownInInline), this.opts.autoOpen && this.uppy.off("files-added", Q(this, pr)[pr]);
    }, this.superFocusOnEachUpdate = () => {
      const s = this.el.contains(document.activeElement), l = document.activeElement === document.body || document.activeElement === null, u = this.uppy.getState().info.length === 0, p = !this.opts.inline;
      // If update is connected to showing the Informer - let the screen reader calmly read it.
      u && // If we are in a modal - always superfocus without concern for other elements
      // on the page (user is unlikely to want to interact with the rest of the page)
      (p || // If we are already inside of Uppy, or
      s || // If we are not focused on anything BUT we have already, at least once, focused on uppy
      //   1. We focus when isFocusNowhere, because when the element we were focused
      //      on disappears (e.g. an overlay), - focus gets lost. If user is typing
      //      something somewhere else on the page, - focus won't be 'nowhere'.
      //   2. We only focus when focus is nowhere AND this.ifFocusedOnUppyRecently,
      //      to avoid focus jumps if we do something else on the page.
      //   [Practical check] Without '&& this.ifFocusedOnUppyRecently', in Safari, in inline mode,
      //                     when file is uploading, - navigate via tab to the checkbox,
      //                     try to press space multiple times. Focus will jump to Uppy.
      l && this.ifFocusedOnUppyRecently) ? this.superFocus(this.el, this.getPluginState().activeOverlayType) : this.superFocus.cancel();
    }, this.afterUpdate = () => {
      if (this.opts.disabled && !this.dashboardIsDisabled) {
        this.disableInteractiveElements(!0);
        return;
      }
      !this.opts.disabled && this.dashboardIsDisabled && this.disableInteractiveElements(!1), this.superFocusOnEachUpdate();
    }, this.saveFileCard = (s, l) => {
      this.uppy.setFileMeta(l, s), this.toggleFileCard(!1, l);
    }, Object.defineProperty(this, yt, {
      writable: !0,
      value: (s) => {
        const l = this.uppy.getPlugin(s.id);
        return {
          ...s,
          icon: l.icon || this.opts.defaultPickerIcon,
          render: l.render
        };
      }
    }), Object.defineProperty(this, ao, {
      writable: !0,
      value: (s) => {
        const l = this.uppy.getPlugin(s.id);
        return typeof l.isSupported != "function" ? !0 : l.isSupported();
      }
    }), Object.defineProperty(this, so, {
      writable: !0,
      value: no((s) => s.filter((l) => l.type === "acquirer" && Q(this, ao)[ao](l)).map(Q(this, yt)[yt]))
    }), Object.defineProperty(this, lo, {
      writable: !0,
      value: no((s) => s.filter((l) => l.type === "progressindicator").map(Q(this, yt)[yt]))
    }), Object.defineProperty(this, Ye, {
      writable: !0,
      value: no((s) => s.filter((l) => l.type === "editor").map(Q(this, yt)[yt]))
    }), this.render = (s) => {
      const l = this.getPluginState(), {
        files: u,
        capabilities: p,
        allowNewUpload: c
      } = s, {
        newFiles: f,
        uploadStartedFiles: P,
        completeFiles: T,
        erroredFiles: O,
        inProgressFiles: x,
        inProgressNotPausedFiles: D,
        processingFiles: m,
        isUploadStarted: w,
        isAllComplete: _,
        isAllPaused: S
      } = this.uppy.getObjectOfFilesPerState(), E = Q(this, so)[so](l.targets), A = Q(this, lo)[lo](l.targets), U = Q(this, Ye)[Ye](l.targets);
      let j;
      return this.opts.theme === "auto" ? j = p.darkMode ? "dark" : "light" : j = this.opts.theme, ["files", "folders", "both"].indexOf(this.opts.fileManagerSelectionType) < 0 && (this.opts.fileManagerSelectionType = "files", console.warn(`Unsupported option for "fileManagerSelectionType". Using default of "${this.opts.fileManagerSelectionType}".`)), jc({
        state: s,
        isHidden: l.isHidden,
        files: u,
        newFiles: f,
        uploadStartedFiles: P,
        completeFiles: T,
        erroredFiles: O,
        inProgressFiles: x,
        inProgressNotPausedFiles: D,
        processingFiles: m,
        isUploadStarted: w,
        isAllComplete: _,
        isAllPaused: S,
        totalFileCount: Object.keys(u).length,
        totalProgress: s.totalProgress,
        allowNewUpload: c,
        acquirers: E,
        theme: j,
        disabled: this.opts.disabled,
        disableLocalFiles: this.opts.disableLocalFiles,
        direction: this.opts.direction,
        activePickerPanel: l.activePickerPanel,
        showFileEditor: l.showFileEditor,
        saveFileEditor: this.saveFileEditor,
        closeFileEditor: this.closeFileEditor,
        disableInteractiveElements: this.disableInteractiveElements,
        animateOpenClose: this.opts.animateOpenClose,
        isClosing: l.isClosing,
        progressindicators: A,
        editors: U,
        autoProceed: this.uppy.opts.autoProceed,
        id: this.id,
        closeModal: this.requestCloseModal,
        handleClickOutside: this.handleClickOutside,
        handleInputChange: this.handleInputChange,
        handlePaste: this.handlePaste,
        inline: this.opts.inline,
        showPanel: this.showPanel,
        hideAllPanels: this.hideAllPanels,
        i18n: this.i18n,
        i18nArray: this.i18nArray,
        uppy: this.uppy,
        note: this.opts.note,
        recoveredState: s.recoveredState,
        metaFields: l.metaFields,
        resumableUploads: p.resumableUploads || !1,
        individualCancellation: p.individualCancellation,
        isMobileDevice: p.isMobileDevice,
        fileCardFor: l.fileCardFor,
        toggleFileCard: this.toggleFileCard,
        toggleAddFilesPanel: this.toggleAddFilesPanel,
        showAddFilesPanel: l.showAddFilesPanel,
        saveFileCard: this.saveFileCard,
        openFileEditor: this.openFileEditor,
        canEditFile: this.canEditFile,
        width: this.opts.width,
        height: this.opts.height,
        showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
        fileManagerSelectionType: this.opts.fileManagerSelectionType,
        proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
        hideCancelButton: this.opts.hideCancelButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        showRemoveButtonAfterComplete: this.opts.showRemoveButtonAfterComplete,
        containerWidth: l.containerWidth,
        containerHeight: l.containerHeight,
        areInsidesReadyToBeVisible: l.areInsidesReadyToBeVisible,
        parentElement: this.el,
        allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
        maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
        requiredMetaFields: this.uppy.opts.restrictions.requiredMetaFields,
        showSelectedFiles: this.opts.showSelectedFiles,
        showNativePhotoCameraButton: this.opts.showNativePhotoCameraButton,
        showNativeVideoCameraButton: this.opts.showNativeVideoCameraButton,
        nativeCameraFacingMode: this.opts.nativeCameraFacingMode,
        singleFileFullScreen: this.opts.singleFileFullScreen,
        handleCancelRestore: this.handleCancelRestore,
        handleRequestThumbnail: this.handleRequestThumbnail,
        handleCancelThumbnail: this.handleCancelThumbnail,
        // drag props
        isDraggingOver: l.isDraggingOver,
        handleDragOver: this.handleDragOver,
        handleDragLeave: this.handleDragLeave,
        handleDrop: this.handleDrop
      });
    }, Object.defineProperty(this, uo, {
      writable: !0,
      value: () => {
        const {
          plugins: s
        } = this.opts;
        s.forEach((l) => {
          const u = this.uppy.getPlugin(l);
          u ? u.mount(this, u) : this.uppy.log(`[Uppy] Dashboard could not find plugin '${l}', make sure to uppy.use() the plugins you are specifying`, "warning");
        });
      }
    }), Object.defineProperty(this, po, {
      writable: !0,
      value: () => {
        this.uppy.iteratePlugins(Q(this, mt)[mt]);
      }
    }), Object.defineProperty(this, mt, {
      writable: !0,
      value: (s) => {
        var l;
        const u = ["acquirer", "editor"];
        s && !((l = s.opts) != null && l.target) && u.includes(s.type) && (this.getPluginState().targets.some((c) => s.id === c.id) || s.mount(this, s));
      }
    }), this.install = () => {
      this.setPluginState({
        isHidden: !0,
        fileCardFor: null,
        activeOverlayType: null,
        showAddFilesPanel: !1,
        activePickerPanel: void 0,
        showFileEditor: !1,
        metaFields: this.opts.metaFields,
        targets: [],
        // We'll make them visible once .containerWidth is determined
        areInsidesReadyToBeVisible: !1,
        isDraggingOver: !1
      });
      const {
        inline: s,
        closeAfterFinish: l
      } = this.opts;
      if (s && l)
        throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");
      const {
        allowMultipleUploads: u,
        allowMultipleUploadBatches: p
      } = this.uppy.opts;
      (u || p) && l && this.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploadBatches` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true", "warning");
      const {
        target: c
      } = this.opts;
      c && this.mount(c, this), this.opts.disableStatusBar || this.uppy.use(Vs, {
        id: Q(this, hr)[hr](),
        target: this,
        ...Q(this, dr)[dr]()
      }), this.opts.disableInformer || this.uppy.use(Xs, {
        id: Q(this, ho)[ho](),
        target: this,
        ...Q(this, co)[co]()
      }), this.opts.disableThumbnailGenerator || this.uppy.use(ol, {
        id: Q(this, fr)[fr](),
        ...Q(this, cr)[cr]()
      }), this.darkModeMediaQuery = typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
      const f = this.darkModeMediaQuery ? this.darkModeMediaQuery.matches : !1;
      if (this.uppy.log(`[Dashboard] Dark mode is ${f ? "on" : "off"}`), this.setDarkModeCapability(f), this.opts.theme === "auto") {
        var P;
        (P = this.darkModeMediaQuery) == null || P.addListener(this.handleSystemDarkModeChange);
      }
      Q(this, uo)[uo](), Q(this, po)[po](), this.initEvents();
    }, this.uninstall = () => {
      if (!this.opts.disableInformer) {
        const u = this.uppy.getPlugin(`${this.id}:Informer`);
        u && this.uppy.removePlugin(u);
      }
      if (!this.opts.disableStatusBar) {
        const u = this.uppy.getPlugin(`${this.id}:StatusBar`);
        u && this.uppy.removePlugin(u);
      }
      if (!this.opts.disableThumbnailGenerator) {
        const u = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
        u && this.uppy.removePlugin(u);
      }
      const {
        plugins: s
      } = this.opts;
      if (s.forEach((u) => {
        const p = this.uppy.getPlugin(u);
        p && p.unmount();
      }), this.opts.theme === "auto") {
        var l;
        (l = this.darkModeMediaQuery) == null || l.removeListener(this.handleSystemDarkModeChange);
      }
      this.opts.disablePageScrollWhenModalOpen && document.body.classList.remove("uppy-Dashboard-isFixed"), this.unmount(), this.removeEvents();
    }, this.id = this.opts.id || "Dashboard", this.title = "Dashboard", this.type = "orchestrator", this.defaultLocale = $c, this.opts.doneButtonHandler === void 0 && (this.opts.doneButtonHandler = () => {
      this.uppy.clear(), this.requestCloseModal();
    }), (n = (o = this.opts).onRequestCloseModal) != null || (o.onRequestCloseModal = () => this.closeModal()), this.i18nInit();
  }
  setOptions(e) {
    var t, i;
    super.setOptions(e), (t = this.uppy.getPlugin(Q(this, hr)[hr]())) == null || t.setOptions(Q(this, dr)[dr]()), (i = this.uppy.getPlugin(Q(this, fr)[fr]())) == null || i.setOptions(Q(this, cr)[cr]());
  }
}
function Vc() {
  const {
    hideUploadButton: r,
    hideRetryButton: e,
    hidePauseResumeButton: t,
    hideCancelButton: i,
    showProgressDetails: o,
    hideProgressAfterFinish: n,
    locale: a,
    doneButtonHandler: s
  } = this.opts;
  return {
    hideUploadButton: r,
    hideRetryButton: e,
    hidePauseResumeButton: t,
    hideCancelButton: i,
    showProgressDetails: o,
    hideAfterFinish: n,
    locale: a,
    doneButtonHandler: s
  };
}
function Kc() {
  const {
    thumbnailWidth: r,
    thumbnailHeight: e,
    thumbnailType: t,
    waitForThumbnailsBeforeUpload: i
  } = this.opts;
  return {
    thumbnailWidth: r,
    thumbnailHeight: e,
    thumbnailType: t,
    waitForThumbnailsBeforeUpload: i,
    // If we don't block on thumbnails, we can lazily generate them
    lazy: !i
  };
}
function Xc() {
  return {
    // currently no options
  };
}
function Yc() {
  return `${this.id}:StatusBar`;
}
function Zc() {
  return `${this.id}:ThumbnailGenerator`;
}
function Jc() {
  return `${this.id}:Informer`;
}
bl.VERSION = Hc.version;
function Ro(r) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ro(r);
}
function Qc(r, e, t) {
  return Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function eh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function th(r, e, t) {
  return e = Er(e), rh(r, hn() ? Reflect.construct(e, t || [], Er(r).constructor) : e.apply(r, t));
}
function rh(r, e) {
  if (e && (Ro(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ih(r);
}
function ih(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function oh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Or(r, e);
}
function Mo(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Mo = function(i) {
    if (i === null || !ah(i)) return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(i)) return e.get(i);
      e.set(i, o);
    }
    function o() {
      return nh(i, arguments, Er(this).constructor);
    }
    return o.prototype = Object.create(i.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), Or(o, i);
  }, Mo(r);
}
function nh(r, e, t) {
  if (hn()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, e);
  var o = new (r.bind.apply(r, i))();
  return t && Or(o, t.prototype), o;
}
function hn() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hn = function() {
    return !!r;
  })();
}
function ah(r) {
  try {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  } catch {
    return typeof r == "function";
  }
}
function Or(r, e) {
  return Or = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, Or(r, e);
}
function Er(r) {
  return Er = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Er(r);
}
var ei = /* @__PURE__ */ function(r) {
  function e(t) {
    var i, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    if (eh(this, e), i = th(this, e, [t]), i.originalRequest = n, i.originalResponse = a, i.causingError = o, o != null && (t += ", caused by ".concat(o.toString())), n != null) {
      var s = n.getHeader("X-Request-ID") || "n/a", l = n.getMethod(), u = n.getURL(), p = a ? a.getStatus() : "n/a", c = a ? a.getBody() || "" : "n/a";
      t += ", originated from request (method: ".concat(l, ", url: ").concat(u, ", response code: ").concat(p, ", response text: ").concat(c, ", request id: ").concat(s, ")");
    }
    return i.message = t, i;
  }
  return oh(e, r), Qc(e);
}(/* @__PURE__ */ Mo(Error));
function Ar(r) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ar(r);
}
function sh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function lh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, ph(i.key), i);
  }
}
function uh(r, e, t) {
  return e && lh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function ph(r) {
  var e = dh(r, "string");
  return Ar(e) == "symbol" ? e : e + "";
}
function dh(r, e) {
  if (Ar(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Ar(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var ch = /* @__PURE__ */ function() {
  function r() {
    sh(this, r);
  }
  return uh(r, [{
    key: "listAllUploads",
    value: function() {
      return Promise.resolve([]);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function(t) {
      return Promise.resolve([]);
    }
  }, {
    key: "removeUpload",
    value: function(t) {
      return Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function(t, i) {
      return Promise.resolve(null);
    }
  }]);
}();
const vl = "3.7.7", hh = vl, Xt = typeof Buffer == "function", Ha = typeof TextDecoder == "function" ? new TextDecoder() : void 0, Wa = typeof TextEncoder == "function" ? new TextEncoder() : void 0, fh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", vr = Array.prototype.slice.call(fh), ti = ((r) => {
  let e = {};
  return r.forEach((t, i) => e[t] = i), e;
})(vr), yh = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, we = String.fromCharCode.bind(String), Ga = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (r) => new Uint8Array(Array.prototype.slice.call(r, 0)), wl = (r) => r.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), xl = (r) => r.replace(/[^A-Za-z0-9\+\/]/g, ""), _l = (r) => {
  let e, t, i, o, n = "";
  const a = r.length % 3;
  for (let s = 0; s < r.length; ) {
    if ((t = r.charCodeAt(s++)) > 255 || (i = r.charCodeAt(s++)) > 255 || (o = r.charCodeAt(s++)) > 255)
      throw new TypeError("invalid character found");
    e = t << 16 | i << 8 | o, n += vr[e >> 18 & 63] + vr[e >> 12 & 63] + vr[e >> 6 & 63] + vr[e & 63];
  }
  return a ? n.slice(0, a - 3) + "===".substring(a) : n;
}, fn = typeof btoa == "function" ? (r) => btoa(r) : Xt ? (r) => Buffer.from(r, "binary").toString("base64") : _l, zo = Xt ? (r) => Buffer.from(r).toString("base64") : (r) => {
  let t = [];
  for (let i = 0, o = r.length; i < o; i += 4096)
    t.push(we.apply(null, r.subarray(i, i + 4096)));
  return fn(t.join(""));
}, si = (r, e = !1) => e ? wl(zo(r)) : zo(r), mh = (r) => {
  if (r.length < 2) {
    var e = r.charCodeAt(0);
    return e < 128 ? r : e < 2048 ? we(192 | e >>> 6) + we(128 | e & 63) : we(224 | e >>> 12 & 15) + we(128 | e >>> 6 & 63) + we(128 | e & 63);
  } else {
    var e = 65536 + (r.charCodeAt(0) - 55296) * 1024 + (r.charCodeAt(1) - 56320);
    return we(240 | e >>> 18 & 7) + we(128 | e >>> 12 & 63) + we(128 | e >>> 6 & 63) + we(128 | e & 63);
  }
}, gh = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Sl = (r) => r.replace(gh, mh), Va = Xt ? (r) => Buffer.from(r, "utf8").toString("base64") : Wa ? (r) => zo(Wa.encode(r)) : (r) => fn(Sl(r)), qt = (r, e = !1) => e ? wl(Va(r)) : Va(r), Ka = (r) => qt(r, !0), bh = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, vh = (r) => {
  switch (r.length) {
    case 4:
      var e = (7 & r.charCodeAt(0)) << 18 | (63 & r.charCodeAt(1)) << 12 | (63 & r.charCodeAt(2)) << 6 | 63 & r.charCodeAt(3), t = e - 65536;
      return we((t >>> 10) + 55296) + we((t & 1023) + 56320);
    case 3:
      return we((15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2));
    default:
      return we((31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1));
  }
}, Pl = (r) => r.replace(bh, vh), kl = (r) => {
  if (r = r.replace(/\s+/g, ""), !yh.test(r))
    throw new TypeError("malformed base64.");
  r += "==".slice(2 - (r.length & 3));
  let e, t = "", i, o;
  for (let n = 0; n < r.length; )
    e = ti[r.charAt(n++)] << 18 | ti[r.charAt(n++)] << 12 | (i = ti[r.charAt(n++)]) << 6 | (o = ti[r.charAt(n++)]), t += i === 64 ? we(e >> 16 & 255) : o === 64 ? we(e >> 16 & 255, e >> 8 & 255) : we(e >> 16 & 255, e >> 8 & 255, e & 255);
  return t;
}, yn = typeof atob == "function" ? (r) => atob(xl(r)) : Xt ? (r) => Buffer.from(r, "base64").toString("binary") : kl, Fl = Xt ? (r) => Ga(Buffer.from(r, "base64")) : (r) => Ga(yn(r).split("").map((e) => e.charCodeAt(0))), Dl = (r) => Fl(Il(r)), wh = Xt ? (r) => Buffer.from(r, "base64").toString("utf8") : Ha ? (r) => Ha.decode(Fl(r)) : (r) => Pl(yn(r)), Il = (r) => xl(r.replace(/[-_]/g, (e) => e == "-" ? "+" : "/")), No = (r) => wh(Il(r)), xh = (r) => {
  if (typeof r != "string")
    return !1;
  const e = r.replace(/\s+/g, "").replace(/={0,2}$/, "");
  return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e);
}, Tl = (r) => ({
  value: r,
  enumerable: !1,
  writable: !0,
  configurable: !0
}), Bl = function() {
  const r = (e, t) => Object.defineProperty(String.prototype, e, Tl(t));
  r("fromBase64", function() {
    return No(this);
  }), r("toBase64", function(e) {
    return qt(this, e);
  }), r("toBase64URI", function() {
    return qt(this, !0);
  }), r("toBase64URL", function() {
    return qt(this, !0);
  }), r("toUint8Array", function() {
    return Dl(this);
  });
}, Cl = function() {
  const r = (e, t) => Object.defineProperty(Uint8Array.prototype, e, Tl(t));
  r("toBase64", function(e) {
    return si(this, e);
  }), r("toBase64URI", function() {
    return si(this, !0);
  }), r("toBase64URL", function() {
    return si(this, !0);
  });
}, _h = () => {
  Bl(), Cl();
}, Sh = {
  version: vl,
  VERSION: hh,
  atob: yn,
  atobPolyfill: kl,
  btoa: fn,
  btoaPolyfill: _l,
  fromBase64: No,
  toBase64: qt,
  encode: qt,
  encodeURI: Ka,
  encodeURL: Ka,
  utob: Sl,
  btou: Pl,
  decode: No,
  isValid: xh,
  fromUint8Array: si,
  toUint8Array: Dl,
  extendString: Bl,
  extendUint8Array: Cl,
  extendBuiltins: _h
};
var fo, Xa;
function Ph() {
  return Xa || (Xa = 1, fo = function(e, t) {
    if (t = t.split(":")[0], e = +e, !e) return !1;
    switch (t) {
      case "http":
      case "ws":
        return e !== 80;
      case "https":
      case "wss":
        return e !== 443;
      case "ftp":
        return e !== 21;
      case "gopher":
        return e !== 70;
      case "file":
        return !1;
    }
    return e !== 0;
  }), fo;
}
var ri = {}, Ya;
function kh() {
  if (Ya) return ri;
  Ya = 1;
  var r = Object.prototype.hasOwnProperty, e;
  function t(a) {
    try {
      return decodeURIComponent(a.replace(/\+/g, " "));
    } catch {
      return null;
    }
  }
  function i(a) {
    try {
      return encodeURIComponent(a);
    } catch {
      return null;
    }
  }
  function o(a) {
    for (var s = /([^=?#&]+)=?([^&]*)/g, l = {}, u; u = s.exec(a); ) {
      var p = t(u[1]), c = t(u[2]);
      p === null || c === null || p in l || (l[p] = c);
    }
    return l;
  }
  function n(a, s) {
    s = s || "";
    var l = [], u, p;
    typeof s != "string" && (s = "?");
    for (p in a)
      if (r.call(a, p)) {
        if (u = a[p], !u && (u === null || u === e || isNaN(u)) && (u = ""), p = i(p), u = i(u), p === null || u === null) continue;
        l.push(p + "=" + u);
      }
    return l.length ? s + l.join("&") : "";
  }
  return ri.stringify = n, ri.parse = o, ri;
}
var yo, Za;
function Fh() {
  if (Za) return yo;
  Za = 1;
  var r = Ph(), e = kh(), t = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, i = /[\n\r\t]/g, o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, n = /:\d+$/, a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, s = /^[a-zA-Z]:/;
  function l(m) {
    return (m || "").toString().replace(t, "");
  }
  var u = [
    ["#", "hash"],
    // Extract from the back.
    ["?", "query"],
    // Extract from the back.
    function(w, _) {
      return f(_.protocol) ? w.replace(/\\/g, "/") : w;
    },
    ["/", "pathname"],
    // Extract from the back.
    ["@", "auth", 1],
    // Extract from the front.
    [NaN, "host", void 0, 1, 1],
    // Set left over value.
    [/:(\d*)$/, "port", void 0, 1],
    // RegExp the back.
    [NaN, "hostname", void 0, 1, 1]
    // Set left over.
  ], p = { hash: 1, query: 1 };
  function c(m) {
    var w;
    typeof window < "u" ? w = window : typeof ut < "u" ? w = ut : typeof self < "u" ? w = self : w = {};
    var _ = w.location || {};
    m = m || _;
    var S = {}, E = typeof m, A;
    if (m.protocol === "blob:")
      S = new O(unescape(m.pathname), {});
    else if (E === "string") {
      S = new O(m, {});
      for (A in p) delete S[A];
    } else if (E === "object") {
      for (A in m)
        A in p || (S[A] = m[A]);
      S.slashes === void 0 && (S.slashes = o.test(m.href));
    }
    return S;
  }
  function f(m) {
    return m === "file:" || m === "ftp:" || m === "http:" || m === "https:" || m === "ws:" || m === "wss:";
  }
  function P(m, w) {
    m = l(m), m = m.replace(i, ""), w = w || {};
    var _ = a.exec(m), S = _[1] ? _[1].toLowerCase() : "", E = !!_[2], A = !!_[3], U = 0, j;
    return E ? A ? (j = _[2] + _[3] + _[4], U = _[2].length + _[3].length) : (j = _[2] + _[4], U = _[2].length) : A ? (j = _[3] + _[4], U = _[3].length) : j = _[4], S === "file:" ? U >= 2 && (j = j.slice(2)) : f(S) ? j = _[4] : S ? E && (j = j.slice(2)) : U >= 2 && f(w.protocol) && (j = _[4]), {
      protocol: S,
      slashes: E || f(S),
      slashesCount: U,
      rest: j
    };
  }
  function T(m, w) {
    if (m === "") return w;
    for (var _ = (w || "/").split("/").slice(0, -1).concat(m.split("/")), S = _.length, E = _[S - 1], A = !1, U = 0; S--; )
      _[S] === "." ? _.splice(S, 1) : _[S] === ".." ? (_.splice(S, 1), U++) : U && (S === 0 && (A = !0), _.splice(S, 1), U--);
    return A && _.unshift(""), (E === "." || E === "..") && _.push(""), _.join("/");
  }
  function O(m, w, _) {
    if (m = l(m), m = m.replace(i, ""), !(this instanceof O))
      return new O(m, w, _);
    var S, E, A, U, j, ee, J = u.slice(), re = typeof w, B = this, ie = 0;
    for (re !== "object" && re !== "string" && (_ = w, w = null), _ && typeof _ != "function" && (_ = e.parse), w = c(w), E = P(m || "", w), S = !E.protocol && !E.slashes, B.slashes = E.slashes || S && w.slashes, B.protocol = E.protocol || w.protocol || "", m = E.rest, (E.protocol === "file:" && (E.slashesCount !== 2 || s.test(m)) || !E.slashes && (E.protocol || E.slashesCount < 2 || !f(B.protocol))) && (J[3] = [/(.*)/, "pathname"]); ie < J.length; ie++) {
      if (U = J[ie], typeof U == "function") {
        m = U(m, B);
        continue;
      }
      A = U[0], ee = U[1], A !== A ? B[ee] = m : typeof A == "string" ? (j = A === "@" ? m.lastIndexOf(A) : m.indexOf(A), ~j && (typeof U[2] == "number" ? (B[ee] = m.slice(0, j), m = m.slice(j + U[2])) : (B[ee] = m.slice(j), m = m.slice(0, j)))) : (j = A.exec(m)) && (B[ee] = j[1], m = m.slice(0, j.index)), B[ee] = B[ee] || S && U[3] && w[ee] || "", U[4] && (B[ee] = B[ee].toLowerCase());
    }
    _ && (B.query = _(B.query)), S && w.slashes && B.pathname.charAt(0) !== "/" && (B.pathname !== "" || w.pathname !== "") && (B.pathname = T(B.pathname, w.pathname)), B.pathname.charAt(0) !== "/" && f(B.protocol) && (B.pathname = "/" + B.pathname), r(B.port, B.protocol) || (B.host = B.hostname, B.port = ""), B.username = B.password = "", B.auth && (j = B.auth.indexOf(":"), ~j ? (B.username = B.auth.slice(0, j), B.username = encodeURIComponent(decodeURIComponent(B.username)), B.password = B.auth.slice(j + 1), B.password = encodeURIComponent(decodeURIComponent(B.password))) : B.username = encodeURIComponent(decodeURIComponent(B.auth)), B.auth = B.password ? B.username + ":" + B.password : B.username), B.origin = B.protocol !== "file:" && f(B.protocol) && B.host ? B.protocol + "//" + B.host : "null", B.href = B.toString();
  }
  function x(m, w, _) {
    var S = this;
    switch (m) {
      case "query":
        typeof w == "string" && w.length && (w = (_ || e.parse)(w)), S[m] = w;
        break;
      case "port":
        S[m] = w, r(w, S.protocol) ? w && (S.host = S.hostname + ":" + w) : (S.host = S.hostname, S[m] = "");
        break;
      case "hostname":
        S[m] = w, S.port && (w += ":" + S.port), S.host = w;
        break;
      case "host":
        S[m] = w, n.test(w) ? (w = w.split(":"), S.port = w.pop(), S.hostname = w.join(":")) : (S.hostname = w, S.port = "");
        break;
      case "protocol":
        S.protocol = w.toLowerCase(), S.slashes = !_;
        break;
      case "pathname":
      case "hash":
        if (w) {
          var E = m === "pathname" ? "/" : "#";
          S[m] = w.charAt(0) !== E ? E + w : w;
        } else
          S[m] = w;
        break;
      case "username":
      case "password":
        S[m] = encodeURIComponent(w);
        break;
      case "auth":
        var A = w.indexOf(":");
        ~A ? (S.username = w.slice(0, A), S.username = encodeURIComponent(decodeURIComponent(S.username)), S.password = w.slice(A + 1), S.password = encodeURIComponent(decodeURIComponent(S.password))) : S.username = encodeURIComponent(decodeURIComponent(w));
    }
    for (var U = 0; U < u.length; U++) {
      var j = u[U];
      j[4] && (S[j[1]] = S[j[1]].toLowerCase());
    }
    return S.auth = S.password ? S.username + ":" + S.password : S.username, S.origin = S.protocol !== "file:" && f(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S;
  }
  function D(m) {
    (!m || typeof m != "function") && (m = e.stringify);
    var w, _ = this, S = _.host, E = _.protocol;
    E && E.charAt(E.length - 1) !== ":" && (E += ":");
    var A = E + (_.protocol && _.slashes || f(_.protocol) ? "//" : "");
    return _.username ? (A += _.username, _.password && (A += ":" + _.password), A += "@") : _.password ? (A += ":" + _.password, A += "@") : _.protocol !== "file:" && f(_.protocol) && !S && _.pathname !== "/" && (A += "@"), (S[S.length - 1] === ":" || n.test(_.hostname) && !_.port) && (S += ":"), A += S + _.pathname, w = typeof _.query == "object" ? m(_.query) : _.query, w && (A += w.charAt(0) !== "?" ? "?" + w : w), _.hash && (A += _.hash), A;
  }
  return O.prototype = { set: x, toString: D }, O.extractProtocol = P, O.location = c, O.trimLeft = l, O.qs = e, yo = O, yo;
}
var Dh = Fh();
const Ih = /* @__PURE__ */ Bt(Dh);
function Th() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    var e = Math.random() * 16 | 0, t = r === "x" ? e : e & 3 | 8;
    return t.toString(16);
  });
}
function Lo() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  Lo = function() {
    return e;
  };
  var r, e = {}, t = Object.prototype, i = t.hasOwnProperty, o = Object.defineProperty || function(y, h, g) {
    y[h] = g.value;
  }, n = typeof Symbol == "function" ? Symbol : {}, a = n.iterator || "@@iterator", s = n.asyncIterator || "@@asyncIterator", l = n.toStringTag || "@@toStringTag";
  function u(y, h, g) {
    return Object.defineProperty(y, h, { value: g, enumerable: !0, configurable: !0, writable: !0 }), y[h];
  }
  try {
    u({}, "");
  } catch {
    u = function(g, F, C) {
      return g[F] = C;
    };
  }
  function p(y, h, g, F) {
    var C = h && h.prototype instanceof D ? h : D, I = Object.create(C.prototype), W = new ie(F || []);
    return o(I, "_invoke", { value: ee(y, g, W) }), I;
  }
  function c(y, h, g) {
    try {
      return { type: "normal", arg: y.call(h, g) };
    } catch (F) {
      return { type: "throw", arg: F };
    }
  }
  e.wrap = p;
  var f = "suspendedStart", P = "suspendedYield", T = "executing", O = "completed", x = {};
  function D() {
  }
  function m() {
  }
  function w() {
  }
  var _ = {};
  u(_, a, function() {
    return this;
  });
  var S = Object.getPrototypeOf, E = S && S(S(se([])));
  E && E !== t && i.call(E, a) && (_ = E);
  var A = w.prototype = D.prototype = Object.create(_);
  function U(y) {
    ["next", "throw", "return"].forEach(function(h) {
      u(y, h, function(g) {
        return this._invoke(h, g);
      });
    });
  }
  function j(y, h) {
    function g(C, I, W, R) {
      var V = c(y[C], y, I);
      if (V.type !== "throw") {
        var de = V.arg, K = de.value;
        return K && It(K) == "object" && i.call(K, "__await") ? h.resolve(K.__await).then(function(fe) {
          g("next", fe, W, R);
        }, function(fe) {
          g("throw", fe, W, R);
        }) : h.resolve(K).then(function(fe) {
          de.value = fe, W(de);
        }, function(fe) {
          return g("throw", fe, W, R);
        });
      }
      R(V.arg);
    }
    var F;
    o(this, "_invoke", { value: function(I, W) {
      function R() {
        return new h(function(V, de) {
          g(I, W, V, de);
        });
      }
      return F = F ? F.then(R, R) : R();
    } });
  }
  function ee(y, h, g) {
    var F = f;
    return function(C, I) {
      if (F === T) throw Error("Generator is already running");
      if (F === O) {
        if (C === "throw") throw I;
        return { value: r, done: !0 };
      }
      for (g.method = C, g.arg = I; ; ) {
        var W = g.delegate;
        if (W) {
          var R = J(W, g);
          if (R) {
            if (R === x) continue;
            return R;
          }
        }
        if (g.method === "next") g.sent = g._sent = g.arg;
        else if (g.method === "throw") {
          if (F === f) throw F = O, g.arg;
          g.dispatchException(g.arg);
        } else g.method === "return" && g.abrupt("return", g.arg);
        F = T;
        var V = c(y, h, g);
        if (V.type === "normal") {
          if (F = g.done ? O : P, V.arg === x) continue;
          return { value: V.arg, done: g.done };
        }
        V.type === "throw" && (F = O, g.method = "throw", g.arg = V.arg);
      }
    };
  }
  function J(y, h) {
    var g = h.method, F = y.iterator[g];
    if (F === r) return h.delegate = null, g === "throw" && y.iterator.return && (h.method = "return", h.arg = r, J(y, h), h.method === "throw") || g !== "return" && (h.method = "throw", h.arg = new TypeError("The iterator does not provide a '" + g + "' method")), x;
    var C = c(F, y.iterator, h.arg);
    if (C.type === "throw") return h.method = "throw", h.arg = C.arg, h.delegate = null, x;
    var I = C.arg;
    return I ? I.done ? (h[y.resultName] = I.value, h.next = y.nextLoc, h.method !== "return" && (h.method = "next", h.arg = r), h.delegate = null, x) : I : (h.method = "throw", h.arg = new TypeError("iterator result is not an object"), h.delegate = null, x);
  }
  function re(y) {
    var h = { tryLoc: y[0] };
    1 in y && (h.catchLoc = y[1]), 2 in y && (h.finallyLoc = y[2], h.afterLoc = y[3]), this.tryEntries.push(h);
  }
  function B(y) {
    var h = y.completion || {};
    h.type = "normal", delete h.arg, y.completion = h;
  }
  function ie(y) {
    this.tryEntries = [{ tryLoc: "root" }], y.forEach(re, this), this.reset(!0);
  }
  function se(y) {
    if (y || y === "") {
      var h = y[a];
      if (h) return h.call(y);
      if (typeof y.next == "function") return y;
      if (!isNaN(y.length)) {
        var g = -1, F = function C() {
          for (; ++g < y.length; ) if (i.call(y, g)) return C.value = y[g], C.done = !1, C;
          return C.value = r, C.done = !0, C;
        };
        return F.next = F;
      }
    }
    throw new TypeError(It(y) + " is not iterable");
  }
  return m.prototype = w, o(A, "constructor", { value: w, configurable: !0 }), o(w, "constructor", { value: m, configurable: !0 }), m.displayName = u(w, l, "GeneratorFunction"), e.isGeneratorFunction = function(y) {
    var h = typeof y == "function" && y.constructor;
    return !!h && (h === m || (h.displayName || h.name) === "GeneratorFunction");
  }, e.mark = function(y) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(y, w) : (y.__proto__ = w, u(y, l, "GeneratorFunction")), y.prototype = Object.create(A), y;
  }, e.awrap = function(y) {
    return { __await: y };
  }, U(j.prototype), u(j.prototype, s, function() {
    return this;
  }), e.AsyncIterator = j, e.async = function(y, h, g, F, C) {
    C === void 0 && (C = Promise);
    var I = new j(p(y, h, g, F), C);
    return e.isGeneratorFunction(h) ? I : I.next().then(function(W) {
      return W.done ? W.value : I.next();
    });
  }, U(A), u(A, l, "Generator"), u(A, a, function() {
    return this;
  }), u(A, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(y) {
    var h = Object(y), g = [];
    for (var F in h) g.push(F);
    return g.reverse(), function C() {
      for (; g.length; ) {
        var I = g.pop();
        if (I in h) return C.value = I, C.done = !1, C;
      }
      return C.done = !0, C;
    };
  }, e.values = se, ie.prototype = { constructor: ie, reset: function(h) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(B), !h) for (var g in this) g.charAt(0) === "t" && i.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = r);
  }, stop: function() {
    this.done = !0;
    var h = this.tryEntries[0].completion;
    if (h.type === "throw") throw h.arg;
    return this.rval;
  }, dispatchException: function(h) {
    if (this.done) throw h;
    var g = this;
    function F(de, K) {
      return W.type = "throw", W.arg = h, g.next = de, K && (g.method = "next", g.arg = r), !!K;
    }
    for (var C = this.tryEntries.length - 1; C >= 0; --C) {
      var I = this.tryEntries[C], W = I.completion;
      if (I.tryLoc === "root") return F("end");
      if (I.tryLoc <= this.prev) {
        var R = i.call(I, "catchLoc"), V = i.call(I, "finallyLoc");
        if (R && V) {
          if (this.prev < I.catchLoc) return F(I.catchLoc, !0);
          if (this.prev < I.finallyLoc) return F(I.finallyLoc);
        } else if (R) {
          if (this.prev < I.catchLoc) return F(I.catchLoc, !0);
        } else {
          if (!V) throw Error("try statement without catch or finally");
          if (this.prev < I.finallyLoc) return F(I.finallyLoc);
        }
      }
    }
  }, abrupt: function(h, g) {
    for (var F = this.tryEntries.length - 1; F >= 0; --F) {
      var C = this.tryEntries[F];
      if (C.tryLoc <= this.prev && i.call(C, "finallyLoc") && this.prev < C.finallyLoc) {
        var I = C;
        break;
      }
    }
    I && (h === "break" || h === "continue") && I.tryLoc <= g && g <= I.finallyLoc && (I = null);
    var W = I ? I.completion : {};
    return W.type = h, W.arg = g, I ? (this.method = "next", this.next = I.finallyLoc, x) : this.complete(W);
  }, complete: function(h, g) {
    if (h.type === "throw") throw h.arg;
    return h.type === "break" || h.type === "continue" ? this.next = h.arg : h.type === "return" ? (this.rval = this.arg = h.arg, this.method = "return", this.next = "end") : h.type === "normal" && g && (this.next = g), x;
  }, finish: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var F = this.tryEntries[g];
      if (F.finallyLoc === h) return this.complete(F.completion, F.afterLoc), B(F), x;
    }
  }, catch: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var F = this.tryEntries[g];
      if (F.tryLoc === h) {
        var C = F.completion;
        if (C.type === "throw") {
          var I = C.arg;
          B(F);
        }
        return I;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(h, g, F) {
    return this.delegate = { iterator: se(h), resultName: g, nextLoc: F }, this.method === "next" && (this.arg = r), x;
  } }, e;
}
function Ja(r, e, t, i, o, n, a) {
  try {
    var s = r[n](a), l = s.value;
  } catch (u) {
    t(u);
    return;
  }
  s.done ? e(l) : Promise.resolve(l).then(i, o);
}
function Bh(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(i, o) {
      var n = r.apply(e, t);
      function a(l) {
        Ja(n, i, o, a, s, "next", l);
      }
      function s(l) {
        Ja(n, i, o, a, s, "throw", l);
      }
      a(void 0);
    });
  };
}
function Ol(r, e) {
  return Eh(r) || Oh(r, e) || El(r, e) || Ch();
}
function Ch() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oh(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var i, o, n, a, s = [], l = !0, u = !1;
    try {
      if (n = (t = t.call(r)).next, e !== 0) for (; !(l = (i = n.call(t)).done) && (s.push(i.value), s.length !== e); l = !0) ;
    } catch (p) {
      u = !0, o = p;
    } finally {
      try {
        if (!l && t.return != null && (a = t.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function Eh(r) {
  if (Array.isArray(r)) return r;
}
function It(r) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, It(r);
}
function Ah(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = El(r)) || e) {
      t && (r = t);
      var i = 0, o = function() {
      };
      return { s: o, n: function() {
        return i >= r.length ? { done: !0 } : { done: !1, value: r[i++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n = !0, a = !1, s;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var u = t.next();
    return n = u.done, u;
  }, e: function(u) {
    a = !0, s = u;
  }, f: function() {
    try {
      !n && t.return != null && t.return();
    } finally {
      if (a) throw s;
    }
  } };
}
function El(r, e) {
  if (r) {
    if (typeof r == "string") return Qa(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Qa(r, e);
  }
}
function Qa(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, i = new Array(e); t < e; t++) i[t] = r[t];
  return i;
}
function es(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Ut(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? es(Object(t), !0).forEach(function(i) {
      Uh(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : es(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Uh(r, e, t) {
  return e = Al(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Rh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ts(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Al(i.key), i);
  }
}
function Mh(r, e, t) {
  return e && ts(r.prototype, e), t && ts(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Al(r) {
  var e = zh(r, "string");
  return It(e) == "symbol" ? e : e + "";
}
function zh(r, e) {
  if (It(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (It(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var li = "tus-v1", ui = "ietf-draft-03", wr = "ietf-draft-05", Nh = {
  endpoint: null,
  uploadUrl: null,
  metadata: {},
  metadataForPartialUploads: {},
  fingerprint: null,
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  onUploadUrlAvailable: null,
  overridePatchMethod: !1,
  headers: {},
  addRequestId: !1,
  onBeforeRequest: null,
  onAfterResponse: null,
  onShouldRetry: Ul,
  chunkSize: Number.POSITIVE_INFINITY,
  retryDelays: [0, 1e3, 3e3, 5e3],
  parallelUploads: 1,
  parallelUploadBoundaries: null,
  storeFingerprintForResuming: !0,
  removeFingerprintOnSuccess: !1,
  uploadLengthDeferred: !1,
  uploadDataDuringCreation: !1,
  urlStorage: null,
  fileReader: null,
  httpStack: null,
  protocol: li
}, fi = /* @__PURE__ */ function() {
  function r(e, t) {
    Rh(this, r), "resume" in t && console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."), this.options = t, this.options.chunkSize = Number(this.options.chunkSize), this._urlStorage = this.options.urlStorage, this.file = e, this.url = null, this._req = null, this._fingerprint = null, this._urlStorageKey = null, this._offset = null, this._aborted = !1, this._size = null, this._source = null, this._retryAttempt = 0, this._retryTimeout = null, this._offsetBeforeRetry = 0, this._parallelUploads = null, this._parallelUploadUrls = null;
  }
  return Mh(r, [{
    key: "findPreviousUploads",
    value: function() {
      var t = this;
      return this.options.fingerprint(this.file, this.options).then(function(i) {
        return t._urlStorage.findUploadsByFingerprint(i);
      });
    }
  }, {
    key: "resumeFromPreviousUpload",
    value: function(t) {
      this.url = t.uploadUrl || null, this._parallelUploadUrls = t.parallelUploadUrls || null, this._urlStorageKey = t.urlStorageKey;
    }
  }, {
    key: "start",
    value: function() {
      var t = this, i = this.file;
      if (!i) {
        this._emitError(new Error("tus: no file or stream to upload provided"));
        return;
      }
      if (![li, ui, wr].includes(this.options.protocol)) {
        this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));
        return;
      }
      if (!this.options.endpoint && !this.options.uploadUrl && !this.url) {
        this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));
        return;
      }
      var o = this.options.retryDelays;
      if (o != null && Object.prototype.toString.call(o) !== "[object Array]") {
        this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));
        return;
      }
      if (this.options.parallelUploads > 1)
        for (var n = 0, a = ["uploadUrl", "uploadSize", "uploadLengthDeferred"]; n < a.length; n++) {
          var s = a[n];
          if (this.options[s]) {
            this._emitError(new Error("tus: cannot use the ".concat(s, " option when parallelUploads is enabled")));
            return;
          }
        }
      if (this.options.parallelUploadBoundaries) {
        if (this.options.parallelUploads <= 1) {
          this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));
          return;
        }
        if (this.options.parallelUploads !== this.options.parallelUploadBoundaries.length) {
          this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));
          return;
        }
      }
      this.options.fingerprint(i, this.options).then(function(l) {
        return t._fingerprint = l, t._source ? t._source : t.options.fileReader.openFile(i, t.options.chunkSize);
      }).then(function(l) {
        if (t._source = l, t.options.uploadLengthDeferred)
          t._size = null;
        else if (t.options.uploadSize != null) {
          if (t._size = Number(t.options.uploadSize), Number.isNaN(t._size)) {
            t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));
            return;
          }
        } else if (t._size = t._source.size, t._size == null) {
          t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));
          return;
        }
        t.options.parallelUploads > 1 || t._parallelUploadUrls != null ? t._startParallelUpload() : t._startSingleUpload();
      }).catch(function(l) {
        t._emitError(l);
      });
    }
    /**
     * Initiate the uploading procedure for a parallelized upload, where one file is split into
     * multiple request which are run in parallel.
     *
     * @api private
     */
  }, {
    key: "_startParallelUpload",
    value: function() {
      var t, i = this, o = this._size, n = 0;
      this._parallelUploads = [];
      var a = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads, s = (t = this.options.parallelUploadBoundaries) !== null && t !== void 0 ? t : jh(this._source.size, a);
      this._parallelUploadUrls && s.forEach(function(p, c) {
        p.uploadUrl = i._parallelUploadUrls[c] || null;
      }), this._parallelUploadUrls = new Array(s.length);
      var l = s.map(function(p, c) {
        var f = 0;
        return i._source.slice(p.start, p.end).then(function(P) {
          var T = P.value;
          return new Promise(function(O, x) {
            var D = Ut(Ut({}, i.options), {}, {
              // If available, the partial upload should be resumed from a previous URL.
              uploadUrl: p.uploadUrl || null,
              // We take manually care of resuming for partial uploads, so they should
              // not be stored in the URL storage.
              storeFingerprintForResuming: !1,
              removeFingerprintOnSuccess: !1,
              // Reset the parallelUploads option to not cause recursion.
              parallelUploads: 1,
              // Reset this option as we are not doing a parallel upload.
              parallelUploadBoundaries: null,
              metadata: i.options.metadataForPartialUploads,
              // Add the header to indicate the this is a partial upload.
              headers: Ut(Ut({}, i.options.headers), {}, {
                "Upload-Concat": "partial"
              }),
              // Reject or resolve the promise if the upload errors or completes.
              onSuccess: O,
              onError: x,
              // Based in the progress for this partial upload, calculate the progress
              // for the entire final upload.
              onProgress: function(_) {
                n = n - f + _, f = _, i._emitProgress(n, o);
              },
              // Wait until every partial upload has an upload URL, so we can add
              // them to the URL storage.
              onUploadUrlAvailable: function() {
                i._parallelUploadUrls[c] = m.url, i._parallelUploadUrls.filter(function(_) {
                  return !!_;
                }).length === s.length && i._saveUploadInUrlStorage();
              }
            }), m = new r(T, D);
            m.start(), i._parallelUploads.push(m);
          });
        });
      }), u;
      Promise.all(l).then(function() {
        u = i._openRequest("POST", i.options.endpoint), u.setHeader("Upload-Concat", "final;".concat(i._parallelUploadUrls.join(" ")));
        var p = rs(i.options.metadata);
        return p !== "" && u.setHeader("Upload-Metadata", p), i._sendRequest(u, null);
      }).then(function(p) {
        if (!Mt(p.getStatus(), 200)) {
          i._emitHttpError(u, p, "tus: unexpected response while creating upload");
          return;
        }
        var c = p.getHeader("Location");
        if (c == null) {
          i._emitHttpError(u, p, "tus: invalid or missing Location header");
          return;
        }
        i.url = as(i.options.endpoint, c), "Created upload at ".concat(i.url), i._emitSuccess(p);
      }).catch(function(p) {
        i._emitError(p);
      });
    }
    /**
     * Initiate the uploading procedure for a non-parallel upload. Here the entire file is
     * uploaded in a sequential matter.
     *
     * @api private
     */
  }, {
    key: "_startSingleUpload",
    value: function() {
      if (this._aborted = !1, this.url != null) {
        "Resuming upload from previous URL: ".concat(this.url), this._resumeUpload();
        return;
      }
      if (this.options.uploadUrl != null) {
        "Resuming upload from provided URL: ".concat(this.options.uploadUrl), this.url = this.options.uploadUrl, this._resumeUpload();
        return;
      }
      this._createUpload();
    }
    /**
     * Abort any running request and stop the current upload. After abort is called, no event
     * handler will be invoked anymore. You can use the `start` method to resume the upload
     * again.
     * If `shouldTerminate` is true, the `terminate` function will be called to remove the
     * current upload from the server.
     *
     * @param {boolean} shouldTerminate True if the upload should be deleted from the server.
     * @return {Promise} The Promise will be resolved/rejected when the requests finish.
     */
  }, {
    key: "abort",
    value: function(t) {
      var i = this;
      if (this._parallelUploads != null) {
        var o = Ah(this._parallelUploads), n;
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var a = n.value;
            a.abort(t);
          }
        } catch (s) {
          o.e(s);
        } finally {
          o.f();
        }
      }
      return this._req !== null && this._req.abort(), this._aborted = !0, this._retryTimeout != null && (clearTimeout(this._retryTimeout), this._retryTimeout = null), !t || this.url == null ? Promise.resolve() : r.terminate(this.url, this.options).then(function() {
        return i._removeFromUrlStorage();
      });
    }
  }, {
    key: "_emitHttpError",
    value: function(t, i, o, n) {
      this._emitError(new ei(o, n, t, i));
    }
  }, {
    key: "_emitError",
    value: function(t) {
      var i = this;
      if (!this._aborted) {
        if (this.options.retryDelays != null) {
          var o = this._offset != null && this._offset > this._offsetBeforeRetry;
          if (o && (this._retryAttempt = 0), ns(t, this._retryAttempt, this.options)) {
            var n = this.options.retryDelays[this._retryAttempt++];
            this._offsetBeforeRetry = this._offset, this._retryTimeout = setTimeout(function() {
              i.start();
            }, n);
            return;
          }
        }
        if (typeof this.options.onError == "function")
          this.options.onError(t);
        else
          throw t;
      }
    }
    /**
     * Publishes notification if the upload has been successfully completed.
     *
     * @param {object} lastResponse Last HTTP response.
     * @api private
     */
  }, {
    key: "_emitSuccess",
    value: function(t) {
      this.options.removeFingerprintOnSuccess && this._removeFromUrlStorage(), typeof this.options.onSuccess == "function" && this.options.onSuccess({
        lastResponse: t
      });
    }
    /**
     * Publishes notification when data has been sent to the server. This
     * data may not have been accepted by the server yet.
     *
     * @param {number} bytesSent  Number of bytes sent to the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */
  }, {
    key: "_emitProgress",
    value: function(t, i) {
      typeof this.options.onProgress == "function" && this.options.onProgress(t, i);
    }
    /**
     * Publishes notification when a chunk of data has been sent to the server
     * and accepted by the server.
     * @param {number} chunkSize  Size of the chunk that was accepted by the server.
     * @param {number} bytesAccepted Total number of bytes that have been
     *                                accepted by the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */
  }, {
    key: "_emitChunkComplete",
    value: function(t, i, o) {
      typeof this.options.onChunkComplete == "function" && this.options.onChunkComplete(t, i, o);
    }
    /**
     * Create a new upload using the creation extension by sending a POST
     * request to the endpoint. After successful creation the file will be
     * uploaded
     *
     * @api private
     */
  }, {
    key: "_createUpload",
    value: function() {
      var t = this;
      if (!this.options.endpoint) {
        this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));
        return;
      }
      var i = this._openRequest("POST", this.options.endpoint);
      this.options.uploadLengthDeferred ? i.setHeader("Upload-Defer-Length", "1") : i.setHeader("Upload-Length", "".concat(this._size));
      var o = rs(this.options.metadata);
      o !== "" && i.setHeader("Upload-Metadata", o);
      var n;
      this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred ? (this._offset = 0, n = this._addChunkToRequest(i)) : ((this.options.protocol === ui || this.options.protocol === wr) && i.setHeader("Upload-Complete", "?0"), n = this._sendRequest(i, null)), n.then(function(a) {
        if (!Mt(a.getStatus(), 200)) {
          t._emitHttpError(i, a, "tus: unexpected response while creating upload");
          return;
        }
        var s = a.getHeader("Location");
        if (s == null) {
          t._emitHttpError(i, a, "tus: invalid or missing Location header");
          return;
        }
        if (t.url = as(t.options.endpoint, s), "Created upload at ".concat(t.url), typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._size === 0) {
          t._emitSuccess(a), t._source.close();
          return;
        }
        t._saveUploadInUrlStorage().then(function() {
          t.options.uploadDataDuringCreation ? t._handleUploadResponse(i, a) : (t._offset = 0, t._performUpload());
        });
      }).catch(function(a) {
        t._emitHttpError(i, null, "tus: failed to create upload", a);
      });
    }
    /*
     * Try to resume an existing upload. First a HEAD request will be sent
     * to retrieve the offset. If the request fails a new upload will be
     * created. In the case of a successful response the file will be uploaded.
     *
     * @api private
     */
  }, {
    key: "_resumeUpload",
    value: function() {
      var t = this, i = this._openRequest("HEAD", this.url), o = this._sendRequest(i, null);
      o.then(function(n) {
        var a = n.getStatus();
        if (!Mt(a, 200)) {
          if (a === 423) {
            t._emitHttpError(i, n, "tus: upload is currently locked; retry later");
            return;
          }
          if (Mt(a, 400) && t._removeFromUrlStorage(), !t.options.endpoint) {
            t._emitHttpError(i, n, "tus: unable to resume upload (new upload cannot be created without an endpoint)");
            return;
          }
          t.url = null, t._createUpload();
          return;
        }
        var s = Number.parseInt(n.getHeader("Upload-Offset"), 10);
        if (Number.isNaN(s)) {
          t._emitHttpError(i, n, "tus: invalid or missing offset value");
          return;
        }
        var l = Number.parseInt(n.getHeader("Upload-Length"), 10);
        if (Number.isNaN(l) && !t.options.uploadLengthDeferred && t.options.protocol === li) {
          t._emitHttpError(i, n, "tus: invalid or missing length value");
          return;
        }
        typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._saveUploadInUrlStorage().then(function() {
          if (s === l) {
            t._emitProgress(l, l), t._emitSuccess(n);
            return;
          }
          t._offset = s, t._performUpload();
        });
      }).catch(function(n) {
        t._emitHttpError(i, null, "tus: failed to resume upload", n);
      });
    }
    /**
     * Start uploading the file using PATCH requests. The file will be divided
     * into chunks as specified in the chunkSize option. During the upload
     * the onProgress event handler may be invoked multiple times.
     *
     * @api private
     */
  }, {
    key: "_performUpload",
    value: function() {
      var t = this;
      if (!this._aborted) {
        var i;
        this.options.overridePatchMethod ? (i = this._openRequest("POST", this.url), i.setHeader("X-HTTP-Method-Override", "PATCH")) : i = this._openRequest("PATCH", this.url), i.setHeader("Upload-Offset", "".concat(this._offset));
        var o = this._addChunkToRequest(i);
        o.then(function(n) {
          if (!Mt(n.getStatus(), 200)) {
            t._emitHttpError(i, n, "tus: unexpected response while uploading chunk");
            return;
          }
          t._handleUploadResponse(i, n);
        }).catch(function(n) {
          t._aborted || t._emitHttpError(i, null, "tus: failed to upload chunk at offset ".concat(t._offset), n);
        });
      }
    }
    /**
     * _addChunktoRequest reads a chunk from the source and sends it using the
     * supplied request object. It will not handle the response.
     *
     * @api private
     */
  }, {
    key: "_addChunkToRequest",
    value: function(t) {
      var i = this, o = this._offset, n = this._offset + this.options.chunkSize;
      return t.setProgressHandler(function(a) {
        i._emitProgress(o + a, i._size);
      }), this.options.protocol === li ? t.setHeader("Content-Type", "application/offset+octet-stream") : this.options.protocol === wr && t.setHeader("Content-Type", "application/partial-upload"), (n === Number.POSITIVE_INFINITY || n > this._size) && !this.options.uploadLengthDeferred && (n = this._size), this._source.slice(o, n).then(function(a) {
        var s = a.value, l = a.done, u = s != null && s.size ? s.size : 0;
        i.options.uploadLengthDeferred && l && (i._size = i._offset + u, t.setHeader("Upload-Length", "".concat(i._size)));
        var p = i._offset + u;
        return !i.options.uploadLengthDeferred && l && p !== i._size ? Promise.reject(new Error("upload was configured with a size of ".concat(i._size, " bytes, but the source is done after ").concat(p, " bytes"))) : s === null ? i._sendRequest(t) : ((i.options.protocol === ui || i.options.protocol === wr) && t.setHeader("Upload-Complete", l ? "?1" : "?0"), i._emitProgress(i._offset, i._size), i._sendRequest(t, s));
      });
    }
    /**
     * _handleUploadResponse is used by requests that haven been sent using _addChunkToRequest
     * and already have received a response.
     *
     * @api private
     */
  }, {
    key: "_handleUploadResponse",
    value: function(t, i) {
      var o = Number.parseInt(i.getHeader("Upload-Offset"), 10);
      if (Number.isNaN(o)) {
        this._emitHttpError(t, i, "tus: invalid or missing offset value");
        return;
      }
      if (this._emitProgress(o, this._size), this._emitChunkComplete(o - this._offset, o, this._size), this._offset = o, o === this._size) {
        this._emitSuccess(i), this._source.close();
        return;
      }
      this._performUpload();
    }
    /**
     * Create a new HTTP request object with the given method and URL.
     *
     * @api private
     */
  }, {
    key: "_openRequest",
    value: function(t, i) {
      var o = is(t, i, this.options);
      return this._req = o, o;
    }
    /**
     * Remove the entry in the URL storage, if it has been saved before.
     *
     * @api private
     */
  }, {
    key: "_removeFromUrlStorage",
    value: function() {
      var t = this;
      this._urlStorageKey && (this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i) {
        t._emitError(i);
      }), this._urlStorageKey = null);
    }
    /**
     * Add the upload URL to the URL storage, if possible.
     *
     * @api private
     */
  }, {
    key: "_saveUploadInUrlStorage",
    value: function() {
      var t = this;
      if (!this.options.storeFingerprintForResuming || !this._fingerprint || this._urlStorageKey !== null)
        return Promise.resolve();
      var i = {
        size: this._size,
        metadata: this.options.metadata,
        creationTime: (/* @__PURE__ */ new Date()).toString()
      };
      return this._parallelUploads ? i.parallelUploadUrls = this._parallelUploadUrls : i.uploadUrl = this.url, this._urlStorage.addUpload(this._fingerprint, i).then(function(o) {
        t._urlStorageKey = o;
      });
    }
    /**
     * Send a request with the provided body.
     *
     * @api private
     */
  }, {
    key: "_sendRequest",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return os(t, i, this.options);
    }
  }], [{
    key: "terminate",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = is("DELETE", t, i);
      return os(o, null, i).then(function(n) {
        if (n.getStatus() !== 204)
          throw new ei("tus: unexpected response while terminating upload", null, o, n);
      }).catch(function(n) {
        if (n instanceof ei || (n = new ei("tus: failed to terminate upload", n, o, null)), !ns(n, 0, i))
          throw n;
        var a = i.retryDelays[0], s = i.retryDelays.slice(1), l = Ut(Ut({}, i), {}, {
          retryDelays: s
        });
        return new Promise(function(u) {
          return setTimeout(u, a);
        }).then(function() {
          return r.terminate(t, l);
        });
      });
    }
  }]);
}();
function rs(r) {
  return Object.entries(r).map(function(e) {
    var t = Ol(e, 2), i = t[0], o = t[1];
    return "".concat(i, " ").concat(Sh.encode(String(o)));
  }).join(",");
}
function Mt(r, e) {
  return r >= e && r < e + 100;
}
function is(r, e, t) {
  var i = t.httpStack.createRequest(r, e);
  t.protocol === ui ? i.setHeader("Upload-Draft-Interop-Version", "5") : t.protocol === wr ? i.setHeader("Upload-Draft-Interop-Version", "6") : i.setHeader("Tus-Resumable", "1.0.0");
  for (var o = t.headers || {}, n = 0, a = Object.entries(o); n < a.length; n++) {
    var s = Ol(a[n], 2), l = s[0], u = s[1];
    i.setHeader(l, u);
  }
  if (t.addRequestId) {
    var p = Th();
    i.setHeader("X-Request-ID", p);
  }
  return i;
}
function os(r, e, t) {
  return jo.apply(this, arguments);
}
function jo() {
  return jo = Bh(/* @__PURE__ */ Lo().mark(function r(e, t, i) {
    var o;
    return Lo().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          if (typeof i.onBeforeRequest != "function") {
            a.next = 3;
            break;
          }
          return a.next = 3, i.onBeforeRequest(e);
        case 3:
          return a.next = 5, e.send(t);
        case 5:
          if (o = a.sent, typeof i.onAfterResponse != "function") {
            a.next = 9;
            break;
          }
          return a.next = 9, i.onAfterResponse(e, o);
        case 9:
          return a.abrupt("return", o);
        case 10:
        case "end":
          return a.stop();
      }
    }, r);
  })), jo.apply(this, arguments);
}
function Lh() {
  var r = !0;
  return typeof navigator < "u" && navigator.onLine === !1 && (r = !1), r;
}
function ns(r, e, t) {
  return t.retryDelays == null || e >= t.retryDelays.length || r.originalRequest == null ? !1 : t && typeof t.onShouldRetry == "function" ? t.onShouldRetry(r, e, t) : Ul(r);
}
function Ul(r) {
  var e = r.originalResponse ? r.originalResponse.getStatus() : 0;
  return (!Mt(e, 400) || e === 409 || e === 423) && Lh();
}
function as(r, e) {
  return new Ih(e, r).toString();
}
function jh(r, e) {
  for (var t = Math.floor(r / e), i = [], o = 0; o < e; o++)
    i.push({
      start: t * o,
      end: t * (o + 1)
    });
  return i[e - 1].end = r, i;
}
fi.defaultOptions = Nh;
var Rl = function() {
  return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
};
function $h(r) {
  return new Promise(function(e, t) {
    var i = new XMLHttpRequest();
    i.responseType = "blob", i.onload = function() {
      var o = i.response;
      e(o);
    }, i.onerror = function(o) {
      t(o);
    }, i.open("GET", r), i.send();
  });
}
var qh = function() {
  return typeof window < "u" && (typeof window.PhoneGap < "u" || typeof window.Cordova < "u" || typeof window.cordova < "u");
};
function Hh(r) {
  return new Promise(function(e, t) {
    var i = new FileReader();
    i.onload = function() {
      var o = new Uint8Array(i.result);
      e({
        value: o
      });
    }, i.onerror = function(o) {
      t(o);
    }, i.readAsArrayBuffer(r);
  });
}
function Ur(r) {
  "@babel/helpers - typeof";
  return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ur(r);
}
function Wh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Gh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Kh(i.key), i);
  }
}
function Vh(r, e, t) {
  return e && Gh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Kh(r) {
  var e = Xh(r, "string");
  return Ur(e) == "symbol" ? e : e + "";
}
function Xh(r, e) {
  if (Ur(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Ur(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var ss = /* @__PURE__ */ function() {
  function r(e) {
    Wh(this, r), this._file = e, this.size = e.size;
  }
  return Vh(r, [{
    key: "slice",
    value: function(t, i) {
      if (qh())
        return Hh(this._file.slice(t, i));
      var o = this._file.slice(t, i), n = i >= this.size;
      return Promise.resolve({
        value: o,
        done: n
      });
    }
  }, {
    key: "close",
    value: function() {
    }
  }]);
}();
function Rr(r) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rr(r);
}
function Yh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Qh(i.key), i);
  }
}
function Jh(r, e, t) {
  return e && Zh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Qh(r) {
  var e = ef(r, "string");
  return Rr(e) == "symbol" ? e : e + "";
}
function ef(r, e) {
  if (Rr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Rr(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function ls(r) {
  return r === void 0 ? 0 : r.size !== void 0 ? r.size : r.length;
}
function tf(r, e) {
  if (r.concat)
    return r.concat(e);
  if (r instanceof Blob)
    return new Blob([r, e], {
      type: r.type
    });
  if (r.set) {
    var t = new r.constructor(r.length + e.length);
    return t.set(r), t.set(e, r.length), t;
  }
  throw new Error("Unknown data type");
}
var rf = /* @__PURE__ */ function() {
  function r(e) {
    Yh(this, r), this._buffer = void 0, this._bufferOffset = 0, this._reader = e, this._done = !1;
  }
  return Jh(r, [{
    key: "slice",
    value: function(t, i) {
      return t < this._bufferOffset ? Promise.reject(new Error("Requested data is before the reader's current offset")) : this._readUntilEnoughDataOrDone(t, i);
    }
  }, {
    key: "_readUntilEnoughDataOrDone",
    value: function(t, i) {
      var o = this, n = i <= this._bufferOffset + ls(this._buffer);
      if (this._done || n) {
        var a = this._getDataFromBuffer(t, i), s = a == null ? this._done : !1;
        return Promise.resolve({
          value: a,
          done: s
        });
      }
      return this._reader.read().then(function(l) {
        var u = l.value, p = l.done;
        return p ? o._done = !0 : o._buffer === void 0 ? o._buffer = u : o._buffer = tf(o._buffer, u), o._readUntilEnoughDataOrDone(t, i);
      });
    }
  }, {
    key: "_getDataFromBuffer",
    value: function(t, i) {
      t > this._bufferOffset && (this._buffer = this._buffer.slice(t - this._bufferOffset), this._bufferOffset = t);
      var o = ls(this._buffer) === 0;
      return this._done && o ? null : this._buffer.slice(0, i - t);
    }
  }, {
    key: "close",
    value: function() {
      this._reader.cancel && this._reader.cancel();
    }
  }]);
}();
function Tt(r) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tt(r);
}
function $o() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  $o = function() {
    return e;
  };
  var r, e = {}, t = Object.prototype, i = t.hasOwnProperty, o = Object.defineProperty || function(y, h, g) {
    y[h] = g.value;
  }, n = typeof Symbol == "function" ? Symbol : {}, a = n.iterator || "@@iterator", s = n.asyncIterator || "@@asyncIterator", l = n.toStringTag || "@@toStringTag";
  function u(y, h, g) {
    return Object.defineProperty(y, h, { value: g, enumerable: !0, configurable: !0, writable: !0 }), y[h];
  }
  try {
    u({}, "");
  } catch {
    u = function(g, F, C) {
      return g[F] = C;
    };
  }
  function p(y, h, g, F) {
    var C = h && h.prototype instanceof D ? h : D, I = Object.create(C.prototype), W = new ie(F || []);
    return o(I, "_invoke", { value: ee(y, g, W) }), I;
  }
  function c(y, h, g) {
    try {
      return { type: "normal", arg: y.call(h, g) };
    } catch (F) {
      return { type: "throw", arg: F };
    }
  }
  e.wrap = p;
  var f = "suspendedStart", P = "suspendedYield", T = "executing", O = "completed", x = {};
  function D() {
  }
  function m() {
  }
  function w() {
  }
  var _ = {};
  u(_, a, function() {
    return this;
  });
  var S = Object.getPrototypeOf, E = S && S(S(se([])));
  E && E !== t && i.call(E, a) && (_ = E);
  var A = w.prototype = D.prototype = Object.create(_);
  function U(y) {
    ["next", "throw", "return"].forEach(function(h) {
      u(y, h, function(g) {
        return this._invoke(h, g);
      });
    });
  }
  function j(y, h) {
    function g(C, I, W, R) {
      var V = c(y[C], y, I);
      if (V.type !== "throw") {
        var de = V.arg, K = de.value;
        return K && Tt(K) == "object" && i.call(K, "__await") ? h.resolve(K.__await).then(function(fe) {
          g("next", fe, W, R);
        }, function(fe) {
          g("throw", fe, W, R);
        }) : h.resolve(K).then(function(fe) {
          de.value = fe, W(de);
        }, function(fe) {
          return g("throw", fe, W, R);
        });
      }
      R(V.arg);
    }
    var F;
    o(this, "_invoke", { value: function(I, W) {
      function R() {
        return new h(function(V, de) {
          g(I, W, V, de);
        });
      }
      return F = F ? F.then(R, R) : R();
    } });
  }
  function ee(y, h, g) {
    var F = f;
    return function(C, I) {
      if (F === T) throw Error("Generator is already running");
      if (F === O) {
        if (C === "throw") throw I;
        return { value: r, done: !0 };
      }
      for (g.method = C, g.arg = I; ; ) {
        var W = g.delegate;
        if (W) {
          var R = J(W, g);
          if (R) {
            if (R === x) continue;
            return R;
          }
        }
        if (g.method === "next") g.sent = g._sent = g.arg;
        else if (g.method === "throw") {
          if (F === f) throw F = O, g.arg;
          g.dispatchException(g.arg);
        } else g.method === "return" && g.abrupt("return", g.arg);
        F = T;
        var V = c(y, h, g);
        if (V.type === "normal") {
          if (F = g.done ? O : P, V.arg === x) continue;
          return { value: V.arg, done: g.done };
        }
        V.type === "throw" && (F = O, g.method = "throw", g.arg = V.arg);
      }
    };
  }
  function J(y, h) {
    var g = h.method, F = y.iterator[g];
    if (F === r) return h.delegate = null, g === "throw" && y.iterator.return && (h.method = "return", h.arg = r, J(y, h), h.method === "throw") || g !== "return" && (h.method = "throw", h.arg = new TypeError("The iterator does not provide a '" + g + "' method")), x;
    var C = c(F, y.iterator, h.arg);
    if (C.type === "throw") return h.method = "throw", h.arg = C.arg, h.delegate = null, x;
    var I = C.arg;
    return I ? I.done ? (h[y.resultName] = I.value, h.next = y.nextLoc, h.method !== "return" && (h.method = "next", h.arg = r), h.delegate = null, x) : I : (h.method = "throw", h.arg = new TypeError("iterator result is not an object"), h.delegate = null, x);
  }
  function re(y) {
    var h = { tryLoc: y[0] };
    1 in y && (h.catchLoc = y[1]), 2 in y && (h.finallyLoc = y[2], h.afterLoc = y[3]), this.tryEntries.push(h);
  }
  function B(y) {
    var h = y.completion || {};
    h.type = "normal", delete h.arg, y.completion = h;
  }
  function ie(y) {
    this.tryEntries = [{ tryLoc: "root" }], y.forEach(re, this), this.reset(!0);
  }
  function se(y) {
    if (y || y === "") {
      var h = y[a];
      if (h) return h.call(y);
      if (typeof y.next == "function") return y;
      if (!isNaN(y.length)) {
        var g = -1, F = function C() {
          for (; ++g < y.length; ) if (i.call(y, g)) return C.value = y[g], C.done = !1, C;
          return C.value = r, C.done = !0, C;
        };
        return F.next = F;
      }
    }
    throw new TypeError(Tt(y) + " is not iterable");
  }
  return m.prototype = w, o(A, "constructor", { value: w, configurable: !0 }), o(w, "constructor", { value: m, configurable: !0 }), m.displayName = u(w, l, "GeneratorFunction"), e.isGeneratorFunction = function(y) {
    var h = typeof y == "function" && y.constructor;
    return !!h && (h === m || (h.displayName || h.name) === "GeneratorFunction");
  }, e.mark = function(y) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(y, w) : (y.__proto__ = w, u(y, l, "GeneratorFunction")), y.prototype = Object.create(A), y;
  }, e.awrap = function(y) {
    return { __await: y };
  }, U(j.prototype), u(j.prototype, s, function() {
    return this;
  }), e.AsyncIterator = j, e.async = function(y, h, g, F, C) {
    C === void 0 && (C = Promise);
    var I = new j(p(y, h, g, F), C);
    return e.isGeneratorFunction(h) ? I : I.next().then(function(W) {
      return W.done ? W.value : I.next();
    });
  }, U(A), u(A, l, "Generator"), u(A, a, function() {
    return this;
  }), u(A, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(y) {
    var h = Object(y), g = [];
    for (var F in h) g.push(F);
    return g.reverse(), function C() {
      for (; g.length; ) {
        var I = g.pop();
        if (I in h) return C.value = I, C.done = !1, C;
      }
      return C.done = !0, C;
    };
  }, e.values = se, ie.prototype = { constructor: ie, reset: function(h) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(B), !h) for (var g in this) g.charAt(0) === "t" && i.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = r);
  }, stop: function() {
    this.done = !0;
    var h = this.tryEntries[0].completion;
    if (h.type === "throw") throw h.arg;
    return this.rval;
  }, dispatchException: function(h) {
    if (this.done) throw h;
    var g = this;
    function F(de, K) {
      return W.type = "throw", W.arg = h, g.next = de, K && (g.method = "next", g.arg = r), !!K;
    }
    for (var C = this.tryEntries.length - 1; C >= 0; --C) {
      var I = this.tryEntries[C], W = I.completion;
      if (I.tryLoc === "root") return F("end");
      if (I.tryLoc <= this.prev) {
        var R = i.call(I, "catchLoc"), V = i.call(I, "finallyLoc");
        if (R && V) {
          if (this.prev < I.catchLoc) return F(I.catchLoc, !0);
          if (this.prev < I.finallyLoc) return F(I.finallyLoc);
        } else if (R) {
          if (this.prev < I.catchLoc) return F(I.catchLoc, !0);
        } else {
          if (!V) throw Error("try statement without catch or finally");
          if (this.prev < I.finallyLoc) return F(I.finallyLoc);
        }
      }
    }
  }, abrupt: function(h, g) {
    for (var F = this.tryEntries.length - 1; F >= 0; --F) {
      var C = this.tryEntries[F];
      if (C.tryLoc <= this.prev && i.call(C, "finallyLoc") && this.prev < C.finallyLoc) {
        var I = C;
        break;
      }
    }
    I && (h === "break" || h === "continue") && I.tryLoc <= g && g <= I.finallyLoc && (I = null);
    var W = I ? I.completion : {};
    return W.type = h, W.arg = g, I ? (this.method = "next", this.next = I.finallyLoc, x) : this.complete(W);
  }, complete: function(h, g) {
    if (h.type === "throw") throw h.arg;
    return h.type === "break" || h.type === "continue" ? this.next = h.arg : h.type === "return" ? (this.rval = this.arg = h.arg, this.method = "return", this.next = "end") : h.type === "normal" && g && (this.next = g), x;
  }, finish: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var F = this.tryEntries[g];
      if (F.finallyLoc === h) return this.complete(F.completion, F.afterLoc), B(F), x;
    }
  }, catch: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var F = this.tryEntries[g];
      if (F.tryLoc === h) {
        var C = F.completion;
        if (C.type === "throw") {
          var I = C.arg;
          B(F);
        }
        return I;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(h, g, F) {
    return this.delegate = { iterator: se(h), resultName: g, nextLoc: F }, this.method === "next" && (this.arg = r), x;
  } }, e;
}
function us(r, e, t, i, o, n, a) {
  try {
    var s = r[n](a), l = s.value;
  } catch (u) {
    t(u);
    return;
  }
  s.done ? e(l) : Promise.resolve(l).then(i, o);
}
function of(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(i, o) {
      var n = r.apply(e, t);
      function a(l) {
        us(n, i, o, a, s, "next", l);
      }
      function s(l) {
        us(n, i, o, a, s, "throw", l);
      }
      a(void 0);
    });
  };
}
function nf(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function af(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, lf(i.key), i);
  }
}
function sf(r, e, t) {
  return e && af(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function lf(r) {
  var e = uf(r, "string");
  return Tt(e) == "symbol" ? e : e + "";
}
function uf(r, e) {
  if (Tt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Tt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var pf = /* @__PURE__ */ function() {
  function r() {
    nf(this, r);
  }
  return sf(r, [{
    key: "openFile",
    value: function() {
      var e = of(/* @__PURE__ */ $o().mark(function i(o, n) {
        var a;
        return $o().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!(Rl() && o && typeof o.uri < "u")) {
                l.next = 11;
                break;
              }
              return l.prev = 1, l.next = 4, $h(o.uri);
            case 4:
              return a = l.sent, l.abrupt("return", new ss(a));
            case 8:
              throw l.prev = 8, l.t0 = l.catch(1), new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));
            case 11:
              if (!(typeof o.slice == "function" && typeof o.size < "u")) {
                l.next = 13;
                break;
              }
              return l.abrupt("return", Promise.resolve(new ss(o)));
            case 13:
              if (typeof o.read != "function") {
                l.next = 18;
                break;
              }
              if (n = Number(n), Number.isFinite(n)) {
                l.next = 17;
                break;
              }
              return l.abrupt("return", Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));
            case 17:
              return l.abrupt("return", Promise.resolve(new rf(o, n)));
            case 18:
              return l.abrupt("return", Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));
            case 19:
            case "end":
              return l.stop();
          }
        }, i, null, [[1, 8]]);
      }));
      function t(i, o) {
        return e.apply(this, arguments);
      }
      return t;
    }()
  }]);
}();
function df(r, e) {
  return Rl() ? Promise.resolve(cf(r, e)) : Promise.resolve(["tus-br", r.name, r.type, r.size, r.lastModified, e.endpoint].join("-"));
}
function cf(r, e) {
  var t = r.exif ? hf(JSON.stringify(r.exif)) : "noexif";
  return ["tus-rn", r.name || "noname", r.size || "nosize", t, e.endpoint].join("/");
}
function hf(r) {
  var e = 0;
  if (r.length === 0)
    return e;
  for (var t = 0; t < r.length; t++) {
    var i = r.charCodeAt(t);
    e = (e << 5) - e + i, e &= e;
  }
  return e;
}
function Mr(r) {
  "@babel/helpers - typeof";
  return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mr(r);
}
function mn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ff(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, yf(i.key), i);
  }
}
function gn(r, e, t) {
  return e && ff(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function yf(r) {
  var e = mf(r, "string");
  return Mr(e) == "symbol" ? e : e + "";
}
function mf(r, e) {
  if (Mr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Mr(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var gf = /* @__PURE__ */ function() {
  function r() {
    mn(this, r);
  }
  return gn(r, [{
    key: "createRequest",
    value: function(t, i) {
      return new bf(t, i);
    }
  }, {
    key: "getName",
    value: function() {
      return "XHRHttpStack";
    }
  }]);
}(), bf = /* @__PURE__ */ function() {
  function r(e, t) {
    mn(this, r), this._xhr = new XMLHttpRequest(), this._xhr.open(e, t, !0), this._method = e, this._url = t, this._headers = {};
  }
  return gn(r, [{
    key: "getMethod",
    value: function() {
      return this._method;
    }
  }, {
    key: "getURL",
    value: function() {
      return this._url;
    }
  }, {
    key: "setHeader",
    value: function(t, i) {
      this._xhr.setRequestHeader(t, i), this._headers[t] = i;
    }
  }, {
    key: "getHeader",
    value: function(t) {
      return this._headers[t];
    }
  }, {
    key: "setProgressHandler",
    value: function(t) {
      "upload" in this._xhr && (this._xhr.upload.onprogress = function(i) {
        i.lengthComputable && t(i.loaded);
      });
    }
  }, {
    key: "send",
    value: function() {
      var t = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return new Promise(function(o, n) {
        t._xhr.onload = function() {
          o(new vf(t._xhr));
        }, t._xhr.onerror = function(a) {
          n(a);
        }, t._xhr.send(i);
      });
    }
  }, {
    key: "abort",
    value: function() {
      return this._xhr.abort(), Promise.resolve();
    }
  }, {
    key: "getUnderlyingObject",
    value: function() {
      return this._xhr;
    }
  }]);
}(), vf = /* @__PURE__ */ function() {
  function r(e) {
    mn(this, r), this._xhr = e;
  }
  return gn(r, [{
    key: "getStatus",
    value: function() {
      return this._xhr.status;
    }
  }, {
    key: "getHeader",
    value: function(t) {
      return this._xhr.getResponseHeader(t);
    }
  }, {
    key: "getBody",
    value: function() {
      return this._xhr.responseText;
    }
  }, {
    key: "getUnderlyingObject",
    value: function() {
      return this._xhr;
    }
  }]);
}();
function zr(r) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, zr(r);
}
function wf(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xf(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Sf(i.key), i);
  }
}
function _f(r, e, t) {
  return e && xf(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Sf(r) {
  var e = Pf(r, "string");
  return zr(e) == "symbol" ? e : e + "";
}
function Pf(r, e) {
  if (zr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (zr(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var qo = !1;
try {
  qo = "localStorage" in window;
  var mo = "tusSupport", ps = localStorage.getItem(mo);
  localStorage.setItem(mo, ps), ps === null && localStorage.removeItem(mo);
} catch (r) {
  if (r.code === r.SECURITY_ERR || r.code === r.QUOTA_EXCEEDED_ERR)
    qo = !1;
  else
    throw r;
}
var kf = qo, Ff = /* @__PURE__ */ function() {
  function r() {
    wf(this, r);
  }
  return _f(r, [{
    key: "findAllUploads",
    value: function() {
      var t = this._findEntries("tus::");
      return Promise.resolve(t);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function(t) {
      var i = this._findEntries("tus::".concat(t, "::"));
      return Promise.resolve(i);
    }
  }, {
    key: "removeUpload",
    value: function(t) {
      return localStorage.removeItem(t), Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function(t, i) {
      var o = Math.round(Math.random() * 1e12), n = "tus::".concat(t, "::").concat(o);
      return localStorage.setItem(n, JSON.stringify(i)), Promise.resolve(n);
    }
  }, {
    key: "_findEntries",
    value: function(t) {
      for (var i = [], o = 0; o < localStorage.length; o++) {
        var n = localStorage.key(o);
        if (n.indexOf(t) === 0)
          try {
            var a = JSON.parse(localStorage.getItem(n));
            a.urlStorageKey = n, i.push(a);
          } catch {
          }
      }
      return i;
    }
  }]);
}();
function Wt(r) {
  "@babel/helpers - typeof";
  return Wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Wt(r);
}
function Df(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function If(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, zl(i.key), i);
  }
}
function Tf(r, e, t) {
  return t && If(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Bf(r, e, t) {
  return e = yi(e), Cf(r, Ml() ? Reflect.construct(e, t || [], yi(r).constructor) : e.apply(r, t));
}
function Cf(r, e) {
  if (e && (Wt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Of(r);
}
function Of(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ml() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ml = function() {
    return !!r;
  })();
}
function yi(r) {
  return yi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, yi(r);
}
function Ef(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Ho(r, e);
}
function Ho(r, e) {
  return Ho = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, Ho(r, e);
}
function ds(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function jt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ds(Object(t), !0).forEach(function(i) {
      Af(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ds(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Af(r, e, t) {
  return e = zl(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function zl(r) {
  var e = Uf(r, "string");
  return Wt(e) == "symbol" ? e : e + "";
}
function Uf(r, e) {
  if (Wt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Wt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var Wo = jt(jt({}, fi.defaultOptions), {}, {
  httpStack: new gf(),
  fileReader: new pf(),
  urlStorage: kf ? new Ff() : new ch(),
  fingerprint: df
}), Rf = /* @__PURE__ */ function(r) {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Df(this, e), i = jt(jt({}, Wo), i), Bf(this, e, [t, i]);
  }
  return Ef(e, r), Tf(e, null, [{
    key: "terminate",
    value: function(i) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return o = jt(jt({}, Wo), o), fi.terminate(i, o);
    }
  }]);
}(fi);
function Ze(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Mf = 0;
function Nl(r) {
  return "__private_" + Mf++ + "_" + r;
}
var _e = /* @__PURE__ */ Nl("uppy"), yr = /* @__PURE__ */ Nl("events");
class zf {
  constructor(e) {
    Object.defineProperty(this, _e, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, yr, {
      writable: !0,
      value: []
    }), Ze(this, _e)[_e] = e;
  }
  on(e, t) {
    return Ze(this, yr)[yr].push([e, t]), Ze(this, _e)[_e].on(e, t);
  }
  remove() {
    for (const [e, t] of Ze(this, yr)[yr].splice(0))
      Ze(this, _e)[_e].off(e, t);
  }
  onFilePause(e, t) {
    this.on("upload-pause", (i, o) => {
      e === i?.id && t(o);
    });
  }
  onFileRemove(e, t) {
    this.on("file-removed", (i) => {
      e === i.id && t(i.id);
    });
  }
  onPause(e, t) {
    this.on("upload-pause", (i, o) => {
      e === i?.id && t(o);
    });
  }
  onRetry(e, t) {
    this.on("upload-retry", (i) => {
      e === i?.id && t();
    });
  }
  onRetryAll(e, t) {
    this.on("retry-all", () => {
      Ze(this, _e)[_e].getFile(e) && t();
    });
  }
  onPauseAll(e, t) {
    this.on("pause-all", () => {
      Ze(this, _e)[_e].getFile(e) && t();
    });
  }
  onCancelAll(e, t) {
    var i = this;
    this.on("cancel-all", function() {
      Ze(i, _e)[_e].getFile(e) && t(...arguments);
    });
  }
  onResumeAll(e, t) {
    this.on("resume-all", () => {
      Ze(this, _e)[_e].getFile(e) && t();
    });
  }
}
class Nf extends Error {
  constructor(e, t) {
    t === void 0 && (t = null), super("This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."), this.cause = e, this.isNetworkError = !0, this.request = t;
  }
}
function Lf(r) {
  return r ? r.readyState !== 0 && r.readyState !== 4 || r.status === 0 : !1;
}
function G(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var jf = 0;
function Be(r) {
  return "__private_" + jf++ + "_" + r;
}
function $f(r) {
  return new Error("Cancelled", {
    cause: r
  });
}
function cs(r) {
  if (r != null) {
    var e;
    const t = () => this.abort(r.reason);
    r.addEventListener("abort", t, {
      once: !0
    });
    const i = () => {
      r.removeEventListener("abort", t);
    };
    (e = this.then) == null || e.call(this, i, i);
  }
  return this;
}
var Ee = /* @__PURE__ */ Be("activeRequests"), De = /* @__PURE__ */ Be("queuedHandlers"), Ce = /* @__PURE__ */ Be("paused"), gt = /* @__PURE__ */ Be("pauseTimer"), Se = /* @__PURE__ */ Be("downLimit"), bt = /* @__PURE__ */ Be("upperLimit"), Je = /* @__PURE__ */ Be("rateLimitingTimer"), Pr = /* @__PURE__ */ Be("call"), ot = /* @__PURE__ */ Be("queueNext"), Go = /* @__PURE__ */ Be("next"), go = /* @__PURE__ */ Be("queue"), Vo = /* @__PURE__ */ Be("dequeue"), bo = /* @__PURE__ */ Be("resume"), vt = /* @__PURE__ */ Be("increaseLimit");
class qf {
  constructor(e) {
    Object.defineProperty(this, Vo, {
      value: Kf
    }), Object.defineProperty(this, go, {
      value: Vf
    }), Object.defineProperty(this, Go, {
      value: Gf
    }), Object.defineProperty(this, ot, {
      value: Wf
    }), Object.defineProperty(this, Pr, {
      value: Hf
    }), Object.defineProperty(this, Ee, {
      writable: !0,
      value: 0
    }), Object.defineProperty(this, De, {
      writable: !0,
      value: []
    }), Object.defineProperty(this, Ce, {
      writable: !0,
      value: !1
    }), Object.defineProperty(this, gt, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Se, {
      writable: !0,
      value: 1
    }), Object.defineProperty(this, bt, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Je, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, bo, {
      writable: !0,
      value: () => this.resume()
    }), Object.defineProperty(this, vt, {
      writable: !0,
      value: () => {
        if (G(this, Ce)[Ce]) {
          G(this, Je)[Je] = setTimeout(G(this, vt)[vt], 0);
          return;
        }
        G(this, Se)[Se] = this.limit, this.limit = Math.ceil((G(this, bt)[bt] + G(this, Se)[Se]) / 2);
        for (let t = G(this, Se)[Se]; t <= this.limit; t++)
          G(this, ot)[ot]();
        G(this, bt)[bt] - G(this, Se)[Se] > 3 ? G(this, Je)[Je] = setTimeout(G(this, vt)[vt], 2e3) : G(this, Se)[Se] = Math.floor(G(this, Se)[Se] / 2);
      }
    }), typeof e != "number" || e === 0 ? this.limit = 1 / 0 : this.limit = e;
  }
  run(e, t) {
    return !G(this, Ce)[Ce] && G(this, Ee)[Ee] < this.limit ? G(this, Pr)[Pr](e) : G(this, go)[go](e, t);
  }
  wrapSyncFunction(e, t) {
    var i = this;
    return function() {
      for (var o = arguments.length, n = new Array(o), a = 0; a < o; a++)
        n[a] = arguments[a];
      const s = i.run(() => (e(...n), queueMicrotask(() => s.done()), () => {
      }), t);
      return {
        abortOn: cs,
        abort() {
          s.abort();
        }
      };
    };
  }
  wrapPromiseFunction(e, t) {
    var i = this;
    return function() {
      for (var o = arguments.length, n = new Array(o), a = 0; a < o; a++)
        n[a] = arguments[a];
      let s;
      const l = new Promise((u, p) => {
        s = i.run(() => {
          let c, f;
          try {
            f = Promise.resolve(e(...n));
          } catch (P) {
            f = Promise.reject(P);
          }
          return f.then((P) => {
            c ? p(c) : (s.done(), u(P));
          }, (P) => {
            c ? p(c) : (s.done(), p(P));
          }), (P) => {
            c = $f(P);
          };
        }, t);
      });
      return l.abort = (u) => {
        s.abort(u);
      }, l.abortOn = cs, l;
    };
  }
  resume() {
    G(this, Ce)[Ce] = !1, clearTimeout(G(this, gt)[gt]);
    for (let e = 0; e < this.limit; e++)
      G(this, ot)[ot]();
  }
  /**
   * Freezes the queue for a while or indefinitely.
   *
   * @param {number | null } [duration] Duration for the pause to happen, in milliseconds.
   *                                    If omitted, the queue won't resume automatically.
   */
  pause(e) {
    e === void 0 && (e = null), G(this, Ce)[Ce] = !0, clearTimeout(G(this, gt)[gt]), e != null && (G(this, gt)[gt] = setTimeout(G(this, bo)[bo], e));
  }
  /**
   * Pauses the queue for a duration, and lower the limit of concurrent requests
   * when the queue resumes. When the queue resumes, it tries to progressively
   * increase the limit in `this.#increaseLimit` until another call is made to
   * `this.rateLimit`.
   * Call this function when using the RateLimitedQueue for network requests and
   * the remote server responds with 429 HTTP code.
   *
   * @param {number} duration in milliseconds.
   */
  rateLimit(e) {
    clearTimeout(G(this, Je)[Je]), this.pause(e), this.limit > 1 && Number.isFinite(this.limit) && (G(this, bt)[bt] = this.limit - 1, this.limit = G(this, Se)[Se], G(this, Je)[Je] = setTimeout(G(this, vt)[vt], e));
  }
  get isPaused() {
    return G(this, Ce)[Ce];
  }
}
function Hf(r) {
  G(this, Ee)[Ee] += 1;
  let e = !1, t;
  try {
    t = r();
  } catch (i) {
    throw G(this, Ee)[Ee] -= 1, i;
  }
  return {
    abort: (i) => {
      e || (e = !0, G(this, Ee)[Ee] -= 1, t?.(i), G(this, ot)[ot]());
    },
    done: () => {
      e || (e = !0, G(this, Ee)[Ee] -= 1, G(this, ot)[ot]());
    }
  };
}
function Wf() {
  queueMicrotask(() => G(this, Go)[Go]());
}
function Gf() {
  if (G(this, Ce)[Ce] || G(this, Ee)[Ee] >= this.limit || G(this, De)[De].length === 0)
    return;
  const r = G(this, De)[De].shift();
  if (r == null)
    throw new Error("Invariant violation: next is null");
  const e = G(this, Pr)[Pr](r.fn);
  r.abort = e.abort, r.done = e.done;
}
function Vf(r, e) {
  const t = {
    fn: r,
    priority: e?.priority || 0,
    abort: () => {
      G(this, Vo)[Vo](t);
    },
    done: () => {
      throw new Error("Cannot mark a queued request as done: this indicates a bug");
    }
  }, i = G(this, De)[De].findIndex((o) => t.priority > o.priority);
  return i === -1 ? G(this, De)[De].push(t) : G(this, De)[De].splice(i, 0, t), t;
}
function Kf(r) {
  const e = G(this, De)[De].indexOf(r);
  e !== -1 && G(this, De)[De].splice(e, 1);
}
function vo(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
function Xf(r) {
  const e = (t) => "error" in t && !!t.error;
  return r.filter((t) => !e(t));
}
function Yf(r) {
  return r.filter((e) => {
    var t;
    return !((t = e.progress) != null && t.uploadStarted) || !e.isRestored;
  });
}
function Zf(r, e) {
  return r === !0 ? Object.keys(e) : Array.isArray(r) ? r : [];
}
function Jf() {
  return typeof window < "u" && // @ts-expect-error may exist
  (typeof window.PhoneGap < "u" || // @ts-expect-error may exist
  typeof window.Cordova < "u" || // @ts-expect-error may exist
  typeof window.cordova < "u");
}
function Qf() {
  return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
}
function ey(r) {
  return (e, t) => {
    if (Jf() || Qf())
      return Wo.fingerprint(e, t);
    const i = ["tus", r.id, t.endpoint].join("-");
    return Promise.resolve(i);
  };
}
function Ft(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var ty = 0;
function jr(r) {
  return "__private_" + ty++ + "_" + r;
}
const ry = {
  version: "4.2.2"
}, Ll = {
  endpoint: "",
  uploadUrl: null,
  metadata: {},
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  overridePatchMethod: !1,
  headers: {},
  addRequestId: !1,
  chunkSize: 1 / 0,
  retryDelays: [100, 1e3, 3e3, 5e3],
  parallelUploads: 1,
  removeFingerprintOnSuccess: !1,
  uploadLengthDeferred: !1,
  uploadDataDuringCreation: !1
}, iy = {
  limit: 20,
  retryDelays: Ll.retryDelays,
  withCredentials: !1,
  allowedMetaFields: !0
};
var kr = /* @__PURE__ */ jr("retryDelayIterator"), Ko = /* @__PURE__ */ jr("uploadLocalFile"), Xo = /* @__PURE__ */ jr("getCompanionClientArgs"), wo = /* @__PURE__ */ jr("uploadFiles"), mr = /* @__PURE__ */ jr("handleUpload");
class jl extends Hs {
  constructor(e, t) {
    var i, o;
    if (super(e, {
      ...iy,
      ...t
    }), Object.defineProperty(this, wo, {
      value: ay
    }), Object.defineProperty(this, Xo, {
      value: ny
    }), Object.defineProperty(this, Ko, {
      value: oy
    }), Object.defineProperty(this, kr, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, mr, {
      writable: !0,
      value: async (n) => {
        if (n.length === 0) {
          this.uppy.log("[Tus] No files to upload");
          return;
        }
        this.opts.limit === 0 && this.uppy.log("[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0", "warning"), this.uppy.log("[Tus] Uploading...");
        const a = this.uppy.getFilesByIds(n);
        await Ft(this, wo)[wo](a);
      }
    }), this.type = "uploader", this.id = this.opts.id || "Tus", t?.allowedMetaFields === void 0 && "metaFields" in this.opts)
      throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
    if ("autoRetry" in t)
      throw new Error("The `autoRetry` option was deprecated and has been removed.");
    this.requests = (i = this.opts.rateLimitedQueue) != null ? i : new qf(this.opts.limit), Ft(this, kr)[kr] = (o = this.opts.retryDelays) == null ? void 0 : o.values(), this.uploaders = /* @__PURE__ */ Object.create(null), this.uploaderEvents = /* @__PURE__ */ Object.create(null);
  }
  /**
   * Clean up all references for a file's upload: the tus.Upload instance,
   * any events related to the file, and the Companion WebSocket connection.
   */
  resetUploaderReferences(e, t) {
    const i = this.uploaders[e];
    i && (i.abort(), t != null && t.abort && i.abort(!0), this.uploaders[e] = null), this.uploaderEvents[e] && (this.uploaderEvents[e].remove(), this.uploaderEvents[e] = null);
  }
  /**
   * Store the uploadUrl on the file options, so that when Golden Retriever
   * restores state, we will continue uploading to the correct URL.
   */
  onReceiveUploadUrl(e, t) {
    const i = this.uppy.getFile(e.id);
    i && (!i.tus || i.tus.uploadUrl !== t) && (this.uppy.log("[Tus] Storing upload url"), this.uppy.setFileState(i.id, {
      tus: {
        ...i.tus,
        uploadUrl: t
      }
    }));
  }
  install() {
    this.uppy.setState({
      capabilities: {
        ...this.uppy.getState().capabilities,
        resumableUploads: !0
      }
    }), this.uppy.addUploader(Ft(this, mr)[mr]);
  }
  uninstall() {
    this.uppy.setState({
      capabilities: {
        ...this.uppy.getState().capabilities,
        resumableUploads: !1
      }
    }), this.uppy.removeUploader(Ft(this, mr)[mr]);
  }
}
function oy(r) {
  return this.resetUploaderReferences(r.id), new Promise((e, t) => {
    let i, o, n;
    const a = {
      ...this.opts,
      ...r.tus || {}
    };
    typeof a.headers == "function" && (a.headers = a.headers(r));
    const {
      onShouldRetry: s,
      onBeforeRequest: l,
      ...u
    } = a, p = {
      ...Ll,
      ...u
    };
    p.fingerprint = ey(r), p.onBeforeRequest = async (x) => {
      const D = x.getUnderlyingObject();
      D.withCredentials = !!a.withCredentials;
      let m;
      if (typeof l == "function" && (m = l(x, r)), vo(i, "shouldBeRequeued")) {
        if (!i.shouldBeRequeued) return Promise.reject();
        let w;
        const _ = new Promise((S) => {
          w = S;
        });
        i = this.requests.run(() => (r.isPaused && i.abort(), w(), () => {
        })), await Promise.all([_, m]);
        return;
      }
      return m;
    }, p.onError = (x) => {
      var D;
      this.uppy.log(x);
      const m = x.originalRequest != null ? x.originalRequest.getUnderlyingObject() : null;
      Lf(m) && (x = new Nf(x, m)), this.resetUploaderReferences(r.id), (D = i) == null || D.abort(), typeof a.onError == "function" && a.onError(x), t(x);
    }, p.onProgress = (x, D) => {
      var m;
      this.onReceiveUploadUrl(r, n.url), typeof a.onProgress == "function" && a.onProgress(x, D);
      const w = this.uppy.getFile(r.id);
      this.uppy.emit("upload-progress", w, {
        uploadStarted: (m = w.progress.uploadStarted) != null ? m : 0,
        bytesUploaded: x,
        bytesTotal: D
      });
    }, p.onSuccess = (x) => {
      var D;
      const m = {
        uploadURL: (D = n.url) != null ? D : void 0,
        status: 200,
        body: {
          // We have to put `as XMLHttpRequest` because tus-js-client
          // returns `any`, as the type differs in Node.js and the browser.
          // In the browser it's always `XMLHttpRequest`.
          xhr: x.lastResponse.getUnderlyingObject()
          // Body extends Record<string, unknown> and thus `xhr` is not known
          // but we export the `TusBody` type, which people pass as a generic into the Uppy class,
          // so on the implementer side it works as expected.
        }
      };
      if (this.uppy.emit("upload-success", this.uppy.getFile(r.id), m), this.resetUploaderReferences(r.id), i.done(), n.url) {
        const {
          name: w
        } = n.file;
        this.uppy.log(`Download ${w} from ${n.url}`);
      }
      typeof a.onSuccess == "function" && a.onSuccess(x), e(n);
    };
    const c = (x) => {
      var D;
      const m = x == null || (D = x.originalResponse) == null ? void 0 : D.getStatus();
      if (m === 429) {
        if (!this.requests.isPaused) {
          var w;
          const _ = (w = Ft(this, kr)[kr]) == null ? void 0 : w.next();
          if (_ == null || _.done)
            return !1;
          this.requests.rateLimit(_.value);
        }
      } else {
        if (m != null && m >= 400 && m < 500 && m !== 409 && m !== 423)
          return !1;
        typeof navigator < "u" && navigator.onLine === !1 && (this.requests.isPaused || (this.requests.pause(), window.addEventListener("online", () => {
          this.requests.resume();
        }, {
          once: !0
        })));
      }
      return i.abort(), i = {
        shouldBeRequeued: !0,
        abort() {
          this.shouldBeRequeued = !1;
        },
        done() {
          throw new Error("Cannot mark a queued request as done: this indicates a bug");
        },
        fn() {
          throw new Error("Cannot run a queued request: this indicates a bug");
        }
      }, !0;
    };
    s != null ? p.onShouldRetry = (x, D) => s(x, D, a, c) : p.onShouldRetry = c;
    const f = (x, D, m) => {
      vo(x, D) && !vo(x, m) && (x[m] = x[D]);
    }, P = {};
    Zf(a.allowedMetaFields, r.meta).forEach((x) => {
      P[x] = String(r.meta[x]);
    }), f(P, "type", "filetype"), f(P, "name", "filename"), p.metadata = P, n = new Rf(r.data, p), this.uploaders[r.id] = n;
    const O = new zf(this.uppy);
    this.uploaderEvents[r.id] = O, o = () => (r.isPaused || n.start(), () => {
    }), n.findPreviousUploads().then((x) => {
      const D = x[0];
      D && (this.uppy.log(`[Tus] Resuming upload of ${r.id} started at ${D.creationTime}`), n.resumeFromPreviousUpload(D)), i = this.requests.run(o);
    }), O.onFileRemove(r.id, (x) => {
      i.abort(), this.resetUploaderReferences(r.id, {
        abort: !!n.url
      }), e(`upload ${x} was removed`);
    }), O.onPause(r.id, (x) => {
      i.abort(), x ? n.abort() : i = this.requests.run(o);
    }), O.onPauseAll(r.id, () => {
      i.abort(), n.abort();
    }), O.onCancelAll(r.id, () => {
      i.abort(), this.resetUploaderReferences(r.id, {
        abort: !!n.url
      }), e(`upload ${r.id} was canceled`);
    }), O.onResumeAll(r.id, () => {
      i.abort(), r.error && n.abort(), i = this.requests.run(o);
    });
  }).catch((e) => {
    throw this.uppy.emit("upload-error", r, e), e;
  });
}
function ny(r) {
  var e;
  const t = {
    ...this.opts
  };
  return r.tus && Object.assign(t, r.tus), typeof t.headers == "function" && (t.headers = t.headers(r)), {
    ...(e = r.remote) == null ? void 0 : e.body,
    endpoint: t.endpoint,
    uploadUrl: t.uploadUrl,
    protocol: "tus",
    size: r.data.size,
    headers: t.headers,
    metadata: r.meta
  };
}
async function ay(r) {
  const e = Xf(r), t = Yf(e);
  this.uppy.emit("upload-start", t), await Promise.allSettled(e.map((i) => {
    if (i.isRemote) {
      const o = () => this.requests, n = new AbortController(), a = (l) => {
        l.id === i.id && n.abort();
      };
      this.uppy.on("file-removed", a);
      const s = this.uppy.getRequestClientForFile(i).uploadRemoteFile(i, Ft(this, Xo)[Xo](i), {
        signal: n.signal,
        getQueue: o
      });
      return this.requests.wrapSyncFunction(() => {
        this.uppy.off("file-removed", a);
      }, {
        priority: -1
      })(), s;
    }
    return Ft(this, Ko)[Ko](i);
  }));
}
jl.VERSION = ry.version;
const sy = ".uppy-Root{box-sizing:border-box;color:#333;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Segoe UI Symbol,Segoe UI Emoji,Apple Color Emoji,Roboto,Helvetica,Arial,sans-serif;line-height:1;position:relative;text-align:left;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.uppy-Root[dir=rtl],[dir=rtl] .uppy-Root{text-align:right}.uppy-Root *,.uppy-Root :after,.uppy-Root :before{box-sizing:inherit}.uppy-Root [hidden]{display:none}.uppy-u-reset{all:initial;-webkit-appearance:none;appearance:none;box-sizing:border-box;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Segoe UI Symbol,Segoe UI Emoji,Apple Color Emoji,Roboto,Helvetica,Arial,sans-serif;line-height:1}[dir=rtl] .uppy-u-reset{text-align:right}.uppy-c-textInput{background-color:#fff;border:1px solid #ddd;border-radius:4px;font-family:inherit;font-size:14px;line-height:1.5;padding:6px 8px}.uppy-size--md .uppy-c-textInput{padding:8px 10px}.uppy-c-textInput:focus{border-color:#1269cf99;box-shadow:0 0 0 3px #1269cf26;outline:none}[data-uppy-theme=dark] .uppy-c-textInput{background-color:#333;border-color:#333;color:#eaeaea}[data-uppy-theme=dark] .uppy-c-textInput:focus{border-color:#525252;box-shadow:none}.uppy-c-icon{display:inline-block;max-height:100%;max-width:100%;overflow:hidden;fill:currentColor}.uppy-c-btn{align-items:center;color:inherit;display:inline-flex;font-family:inherit;font-size:inherit;font-weight:500;justify-content:center;line-height:1;transition-duration:.3s;transition-property:background-color,color;-webkit-user-select:none;user-select:none;white-space:nowrap}.uppy-c-btn,[dir=rtl] .uppy-c-btn{text-align:center}.uppy-c-btn:not(:disabled):not(.disabled){cursor:pointer}.uppy-c-btn::-moz-focus-inner{border:0}.uppy-c-btn-primary{background-color:#1269cf;border-radius:4px;color:#fff;font-size:14px;padding:10px 18px}.uppy-c-btn-primary:not(:disabled):hover{background-color:#0e51a0}.uppy-c-btn-primary:focus{box-shadow:0 0 0 3px #1269cf66;outline:none}.uppy-size--md .uppy-c-btn-primary{padding:13px 22px}[data-uppy-theme=dark] .uppy-c-btn-primary{color:#eaeaea}[data-uppy-theme=dark] .uppy-c-btn-primary:focus{outline:none}[data-uppy-theme=dark] .uppy-c-btn-primary::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-c-btn-primary:focus{box-shadow:0 0 0 2px #aae1ffd9}.uppy-c-btn-primary.uppy-c-btn--disabled{background-color:#8eb2db}.uppy-c-btn-link{background-color:initial;border-radius:4px;color:#525252;font-size:14px;line-height:1;padding:10px 15px}.uppy-c-btn-link:hover{color:#333}.uppy-c-btn-link:focus{box-shadow:0 0 0 3px #1269cf40;outline:none}.uppy-size--md .uppy-c-btn-link{padding:13px 18px}[data-uppy-theme=dark] .uppy-c-btn-link{color:#eaeaea}[data-uppy-theme=dark] .uppy-c-btn-link:focus{outline:none}[data-uppy-theme=dark] .uppy-c-btn-link::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-c-btn-link:focus{box-shadow:0 0 0 2px #aae1ffd9}[data-uppy-theme=dark] .uppy-c-btn-link:hover{color:#939393}", ly = `@charset "UTF-8";.uppy-Informer{bottom:60px;left:0;position:absolute;right:0;text-align:center;z-index:1005}.uppy-Informer span>div{margin-bottom:6px}.uppy-Informer-animated{opacity:0;transform:translateY(350%);transition:all .3s ease-in;z-index:-1000}.uppy-Informer p{background-color:#757575;border-radius:18px;color:#fff;display:inline-block;font-size:12px;font-weight:400;line-height:1.4;margin:0;max-width:90%;padding:6px 15px}.uppy-size--md .uppy-Informer p{font-size:14px;line-height:1.3;max-width:500px;padding:10px 20px}[data-uppy-theme=dark] .uppy-Informer p{background-color:#333}[dir=ltr] .uppy-Informer p span{left:3px}[dir=rtl] .uppy-Informer p span{right:3px}[dir=ltr] .uppy-Informer p span{margin-left:-1px}[dir=rtl] .uppy-Informer p span{margin-right:-1px}.uppy-Informer p span{background-color:#fff;border-radius:50%;color:#525252;display:inline-block;font-size:10px;height:13px;line-height:12px;position:relative;top:-1px;vertical-align:middle;width:13px}.uppy-Informer p span:hover{cursor:help}.uppy-Informer p span:after{line-height:1.3;word-wrap:break-word}.uppy-Root [aria-label][role~=tooltip]{position:relative}.uppy-Root [aria-label][role~=tooltip]:after,.uppy-Root [aria-label][role~=tooltip]:before{-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box;opacity:0;pointer-events:none;position:absolute;transform:translateZ(0);transform-origin:top;transition:all var(--microtip-transition-duration,.18s) var(--microtip-transition-easing,ease-in-out) var(--microtip-transition-delay,0s);will-change:transform;z-index:10}.uppy-Root [aria-label][role~=tooltip]:before{background-size:100% auto!important;content:""}.uppy-Root [aria-label][role~=tooltip]:after{background:#111111e6;border-radius:4px;box-sizing:initial;color:#fff;content:attr(aria-label);font-size:var(--microtip-font-size,13px);font-weight:var(--microtip-font-weight,normal);padding:.5em 1em;text-transform:var(--microtip-text-transform,none);white-space:nowrap}.uppy-Root [aria-label][role~=tooltip]:focus:after,.uppy-Root [aria-label][role~=tooltip]:focus:before,.uppy-Root [aria-label][role~=tooltip]:hover:after,.uppy-Root [aria-label][role~=tooltip]:hover:before{opacity:1;pointer-events:auto}.uppy-Root [role~=tooltip][data-microtip-position|=top]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='12'%3E%3Cpath fill='rgba(17, 17, 17, 0.9)' d='M2.658 0h32.004c-6 0-11.627 12.002-16.002 12.002S8.594 0 2.658 0'/%3E%3C/svg%3E") no-repeat;bottom:100%;height:6px;left:50%;margin-bottom:5px;transform:translate3d(-50%,0,0);width:18px}.uppy-Root [role~=tooltip][data-microtip-position|=top]:after{bottom:100%;left:50%;margin-bottom:11px;transform:translate3d(-50%,0,0)}.uppy-Root [role~=tooltip][data-microtip-position=top]:hover:after,.uppy-Root [role~=tooltip][data-microtip-position|=top]:hover:before{transform:translate3d(-50%,-5px,0)}.uppy-Root [role~=tooltip][data-microtip-position=top-left]:after{bottom:100%;transform:translate3d(calc(-100% + 16px),0,0)}.uppy-Root [role~=tooltip][data-microtip-position=top-left]:hover:after{transform:translate3d(calc(-100% + 16px),-5px,0)}.uppy-Root [role~=tooltip][data-microtip-position=top-right]:after{bottom:100%;transform:translate3d(-16px,0,0)}.uppy-Root [role~=tooltip][data-microtip-position=top-right]:hover:after{transform:translate3d(-16px,-5px,0)}.uppy-Root [role~=tooltip][data-microtip-position|=bottom]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='12'%3E%3Cpath fill='rgba(17, 17, 17, 0.9)' d='M33.342 12H1.338c6 0 11.627-12.002 16.002-12.002S27.406 12 33.342 12'/%3E%3C/svg%3E") no-repeat;bottom:auto;height:6px;left:50%;margin-bottom:0;margin-top:5px;top:100%;transform:translate3d(-50%,-10px,0);width:18px}.uppy-Root [role~=tooltip][data-microtip-position|=bottom]:after{left:50%;margin-top:11px;top:100%;transform:translate3d(-50%,-10px,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom]:hover:after,.uppy-Root [role~=tooltip][data-microtip-position|=bottom]:hover:before{transform:translate3d(-50%,0,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom-left]:after{top:100%;transform:translate3d(calc(-100% + 16px),-10px,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom-left]:hover:after{transform:translate3d(calc(-100% + 16px),0,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom-right]:after{top:100%;transform:translate3d(-16px,-10px,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom-right]:hover:after{transform:translate3d(-16px,0,0)}.uppy-Root [role~=tooltip][data-microtip-position=left]:after,.uppy-Root [role~=tooltip][data-microtip-position=left]:before{inset:50% 100% auto auto;transform:translate3d(10px,-50%,0)}.uppy-Root [role~=tooltip][data-microtip-position=left]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='36'%3E%3Cpath fill='rgba(17, 17, 17, 0.9)' d='M0 33.342V1.338c0 6 12.002 11.627 12.002 16.002S0 27.406 0 33.342'/%3E%3C/svg%3E") no-repeat;height:18px;margin-bottom:0;margin-right:5px;width:6px}.uppy-Root [role~=tooltip][data-microtip-position=left]:after{margin-right:11px}.uppy-Root [role~=tooltip][data-microtip-position=left]:hover:after,.uppy-Root [role~=tooltip][data-microtip-position=left]:hover:before{transform:translate3d(0,-50%,0)}.uppy-Root [role~=tooltip][data-microtip-position=right]:after,.uppy-Root [role~=tooltip][data-microtip-position=right]:before{bottom:auto;left:100%;top:50%;transform:translate3d(-10px,-50%,0)}.uppy-Root [role~=tooltip][data-microtip-position=right]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='36'%3E%3Cpath fill='rgba(17, 17, 17, 0.9)' d='M12 2.658v32.004c0-6-12.002-11.627-12.002-16.002S12 8.594 12 2.658'/%3E%3C/svg%3E") no-repeat;height:18px;margin-bottom:0;margin-left:5px;width:6px}.uppy-Root [role~=tooltip][data-microtip-position=right]:after{margin-left:11px}.uppy-Root [role~=tooltip][data-microtip-position=right]:hover:after,.uppy-Root [role~=tooltip][data-microtip-position=right]:hover:before{transform:translate3d(0,-50%,0)}.uppy-Root [role~=tooltip][data-microtip-size=small]:after{white-space:normal;width:80px}.uppy-Root [role~=tooltip][data-microtip-size=medium]:after{white-space:normal;width:150px}.uppy-Root [role~=tooltip][data-microtip-size=large]:after{white-space:normal;width:260px}.uppy-StatusBar{background-color:#fff;color:#fff;display:flex;font-size:12px;font-weight:400;height:46px;line-height:40px;position:relative;transition:height .2s;z-index:1001}[data-uppy-theme=dark] .uppy-StatusBar{background-color:#1f1f1f}.uppy-StatusBar:before{background-color:#eaeaea;content:"";height:2px;inset:0;position:absolute;width:100%}[data-uppy-theme=dark] .uppy-StatusBar:before{background-color:#757575}.uppy-StatusBar[aria-hidden=true]{height:0;overflow-y:hidden}.uppy-StatusBar.is-complete .uppy-StatusBar-progress{background-color:#1bb240}.uppy-StatusBar.is-error .uppy-StatusBar-progress{background-color:#e32437}.uppy-StatusBar.is-complete .uppy-StatusBar-statusIndicator{color:#1bb240}.uppy-StatusBar.is-error .uppy-StatusBar-statusIndicator{color:#e32437}.uppy-StatusBar:not([aria-hidden=true]).is-waiting{background-color:#fff;border-top:1px solid #eaeaea;height:65px}[data-uppy-theme=dark] .uppy-StatusBar:not([aria-hidden=true]).is-waiting{background-color:#1f1f1f;border-top:1px solid #333}.uppy-StatusBar-progress{background-color:#1269cf;height:2px;position:absolute;transition:background-color,width .3s ease-out;z-index:1001}.uppy-StatusBar-progress.is-indeterminate{animation:uppy-StatusBar-ProgressStripes 1s linear infinite;background-image:linear-gradient(45deg,#0000004d 25%,#0000 0 50%,#0000004d 0 75%,#0000 0,#0000);background-size:64px 64px}@keyframes uppy-StatusBar-ProgressStripes{0%{background-position:0 0}to{background-position:64px 0}}.uppy-StatusBar.is-postprocessing .uppy-StatusBar-progress,.uppy-StatusBar.is-preprocessing .uppy-StatusBar-progress{background-color:#f6a623}.uppy-StatusBar.is-waiting .uppy-StatusBar-progress{display:none}[dir=ltr] .uppy-StatusBar-content{padding-left:10px}[dir=rtl] .uppy-StatusBar-content{padding-right:10px}.uppy-StatusBar-content{align-items:center;color:#333;display:flex;height:100%;position:relative;text-overflow:ellipsis;white-space:nowrap;z-index:1002}[dir=ltr] .uppy-size--md .uppy-StatusBar-content{padding-left:15px}[dir=rtl] .uppy-size--md .uppy-StatusBar-content{padding-right:15px}[data-uppy-theme=dark] .uppy-StatusBar-content{color:#eaeaea}[dir=ltr] .uppy-StatusBar-status{padding-right:.3em}[dir=rtl] .uppy-StatusBar-status{padding-left:.3em}.uppy-StatusBar-status{display:flex;flex-direction:column;font-weight:400;justify-content:center;line-height:1.4}.uppy-StatusBar-statusPrimary{display:flex;font-weight:500;line-height:1}.uppy-StatusBar-statusPrimary button.uppy-StatusBar-details{margin-left:5px}[data-uppy-theme=dark] .uppy-StatusBar-statusPrimary{color:#eaeaea}.uppy-StatusBar-statusSecondary{color:#757575;display:inline-block;font-size:11px;line-height:1.2;margin-top:1px;white-space:nowrap}[data-uppy-theme=dark] .uppy-StatusBar-statusSecondary{color:#bbb}[dir=ltr] .uppy-StatusBar-statusSecondaryHint{margin-right:5px}[dir=rtl] .uppy-StatusBar-statusSecondaryHint{margin-left:5px}.uppy-StatusBar-statusSecondaryHint{display:inline-block;line-height:1;vertical-align:middle}[dir=ltr] .uppy-size--md .uppy-StatusBar-statusSecondaryHint{margin-right:8px}[dir=rtl] .uppy-size--md .uppy-StatusBar-statusSecondaryHint{margin-left:8px}[dir=ltr] .uppy-StatusBar-statusIndicator{margin-right:7px}[dir=rtl] .uppy-StatusBar-statusIndicator{margin-left:7px}.uppy-StatusBar-statusIndicator{color:#525252;position:relative;top:1px}.uppy-StatusBar-statusIndicator svg{vertical-align:text-bottom}[dir=ltr] .uppy-StatusBar-actions{right:10px}[dir=rtl] .uppy-StatusBar-actions{left:10px}.uppy-StatusBar-actions{align-items:center;bottom:0;display:flex;position:absolute;top:0;z-index:1004}.uppy-StatusBar.is-waiting .uppy-StatusBar-actions{background-color:#fafafa;height:100%;padding:0 15px;position:static;width:100%}[data-uppy-theme=dark] .uppy-StatusBar.is-waiting .uppy-StatusBar-actions{background-color:#1f1f1f}.uppy-StatusBar:not([aria-hidden=true]).is-waiting.has-ghosts{flex-direction:column;height:90px}.uppy-size--md .uppy-StatusBar:not([aria-hidden=true]).is-waiting.has-ghosts{flex-direction:row;height:65px}.uppy-StatusBar:not([aria-hidden=true]).is-waiting.has-ghosts .uppy-StatusBar-actions{flex-direction:column;justify-content:center}.uppy-size--md .uppy-StatusBar:not([aria-hidden=true]).is-waiting.has-ghosts .uppy-StatusBar-actions{flex-direction:row;justify-content:normal}.uppy-StatusBar-actionCircleBtn{cursor:pointer;line-height:1;margin:3px;opacity:.9}.uppy-StatusBar-actionCircleBtn:focus{outline:none}.uppy-StatusBar-actionCircleBtn::-moz-focus-inner{border:0}.uppy-StatusBar-actionCircleBtn:focus{box-shadow:0 0 0 3px #1269cf80}[data-uppy-theme=dark] .uppy-StatusBar-actionCircleBtn:focus{outline:none}[data-uppy-theme=dark] .uppy-StatusBar-actionCircleBtn::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-StatusBar-actionCircleBtn:focus{box-shadow:0 0 0 2px #aae1ffd9}.uppy-StatusBar-actionCircleBtn:hover{opacity:1}.uppy-StatusBar-actionCircleBtn:focus{border-radius:50%}.uppy-StatusBar-actionCircleBtn svg{vertical-align:bottom}.uppy-StatusBar-actionBtn{color:#1269cf;display:inline-block;font-size:10px;line-height:inherit;vertical-align:middle}.uppy-size--md .uppy-StatusBar-actionBtn{font-size:11px}.uppy-StatusBar-actionBtn--disabled{opacity:.4}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--disabled{opacity:.7}[dir=ltr] .uppy-StatusBar-actionBtn--retry{margin-right:6px}[dir=rtl] .uppy-StatusBar-actionBtn--retry{margin-left:6px}.uppy-StatusBar-actionBtn--retry{background-color:#ff4b23;border-radius:8px;color:#fff;height:16px;line-height:1;padding:1px 6px 3px 18px;position:relative}.uppy-StatusBar-actionBtn--retry:focus{outline:none}.uppy-StatusBar-actionBtn--retry::-moz-focus-inner{border:0}.uppy-StatusBar-actionBtn--retry:focus{box-shadow:0 0 0 3px #1269cf80}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--retry:focus{outline:none}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--retry::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--retry:focus{box-shadow:0 0 0 2px #aae1ffd9}.uppy-StatusBar-actionBtn--retry:hover{background-color:#f92d00}[dir=ltr] .uppy-StatusBar-actionBtn--retry svg{left:6px}[dir=rtl] .uppy-StatusBar-actionBtn--retry svg{right:6px}.uppy-StatusBar-actionBtn--retry svg{position:absolute;top:3px}.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload{background-color:#1bb240;color:#fff;font-size:14px;line-height:1;padding:15px 10px;width:100%}.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload:hover{background-color:#189c38}[data-uppy-theme=dark] .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload{background-color:#1c8b37}[data-uppy-theme=dark] .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload:hover{background-color:#18762f}.uppy-size--md .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload{padding:13px 22px;width:auto}.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload.uppy-StatusBar-actionBtn--disabled:hover{background-color:#1bb240;cursor:not-allowed}[data-uppy-theme=dark] .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload.uppy-StatusBar-actionBtn--disabled:hover{background-color:#1c8b37}.uppy-StatusBar:not(.is-waiting) .uppy-StatusBar-actionBtn--upload{background-color:initial;color:#1269cf}[dir=ltr] .uppy-StatusBar-actionBtn--uploadNewlyAdded{padding-right:3px}[dir=ltr] .uppy-StatusBar-actionBtn--uploadNewlyAdded,[dir=rtl] .uppy-StatusBar-actionBtn--uploadNewlyAdded{padding-left:3px}[dir=rtl] .uppy-StatusBar-actionBtn--uploadNewlyAdded{padding-right:3px}.uppy-StatusBar-actionBtn--uploadNewlyAdded{border-radius:3px;padding-bottom:1px}.uppy-StatusBar-actionBtn--uploadNewlyAdded:focus{outline:none}.uppy-StatusBar-actionBtn--uploadNewlyAdded::-moz-focus-inner{border:0}.uppy-StatusBar-actionBtn--uploadNewlyAdded:focus{box-shadow:0 0 0 3px #1269cf80}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--uploadNewlyAdded:focus{outline:none}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--uploadNewlyAdded::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--uploadNewlyAdded:focus{box-shadow:0 0 0 2px #aae1ffd9}.uppy-StatusBar.is-postprocessing .uppy-StatusBar-actionBtn--uploadNewlyAdded,.uppy-StatusBar.is-preprocessing .uppy-StatusBar-actionBtn--uploadNewlyAdded{display:none}.uppy-StatusBar-actionBtn--done{border-radius:3px;line-height:1;padding:7px 8px}.uppy-StatusBar-actionBtn--done:focus{outline:none}.uppy-StatusBar-actionBtn--done::-moz-focus-inner{border:0}.uppy-StatusBar-actionBtn--done:hover{color:#0e51a0}.uppy-StatusBar-actionBtn--done:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--done:focus{background-color:#333}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--done{color:#02baf2}.uppy-size--md .uppy-StatusBar-actionBtn--done{font-size:14px}.uppy-StatusBar-serviceMsg{color:#000;font-size:11px;line-height:1.1;padding-left:10px}.uppy-size--md .uppy-StatusBar-serviceMsg{font-size:14px;padding-left:15px}[data-uppy-theme=dark] .uppy-StatusBar-serviceMsg{color:#eaeaea}.uppy-StatusBar-serviceMsg-ghostsIcon{left:6px;opacity:.5;position:relative;top:2px;vertical-align:text-bottom;width:10px}.uppy-size--md .uppy-StatusBar-serviceMsg-ghostsIcon{left:10px;top:1px;width:15px}[dir=ltr] .uppy-StatusBar-details{left:2px}[dir=rtl] .uppy-StatusBar-details{right:2px}.uppy-StatusBar-details{-webkit-appearance:none;appearance:none;background-color:#939393;border-radius:50%;color:#fff;cursor:help;display:inline-block;font-size:10px;font-weight:600;height:13px;line-height:12px;position:relative;text-align:center;top:0;vertical-align:middle;width:13px}.uppy-StatusBar-details:after{line-height:1.3;word-wrap:break-word}[dir=ltr] .uppy-StatusBar-spinner{margin-right:10px}[dir=rtl] .uppy-StatusBar-spinner{margin-left:10px}.uppy-StatusBar-spinner{animation-duration:1s;animation-iteration-count:infinite;animation-name:uppy-StatusBar-spinnerAnimation;animation-timing-function:linear;fill:#1269cf}.uppy-StatusBar.is-postprocessing .uppy-StatusBar-spinner,.uppy-StatusBar.is-preprocessing .uppy-StatusBar-spinner{fill:#f6a623}@keyframes uppy-StatusBar-spinnerAnimation{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.uppy-ProviderBrowser-viewType--grid ul.uppy-ProviderBrowser-list,.uppy-ProviderBrowser-viewType--unsplash ul.uppy-ProviderBrowser-list{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;padding:6px}.uppy-ProviderBrowser-viewType--grid ul.uppy-ProviderBrowser-list:after,.uppy-ProviderBrowser-viewType--unsplash ul.uppy-ProviderBrowser-list:after{content:"";flex:auto}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem{margin:0;position:relative;width:50%}.uppy-size--md .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem,.uppy-size--md .uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem{width:33.3333%}.uppy-size--lg .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem,.uppy-size--lg .uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem{width:25%}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem:before,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem:before{content:"";display:block;padding-top:100%}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--selected img,.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--selected svg,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--selected img,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--selected svg{opacity:.85}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--disabled,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--disabled{opacity:.5}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner{background-color:#93939333}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner,[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner{background-color:#eaeaea33}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview svg,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--noPreview svg{height:30%;width:30%;fill:#000000b3}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview svg,[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--noPreview svg{fill:#fffc}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-inner{border-radius:4px;height:calc(100% - 14px);inset:7px;overflow:hidden;position:absolute;text-align:center;width:calc(100% - 14px)}@media (hover:none){.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-inner .uppy-ProviderBrowserItem-author{display:block}}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner,[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-inner{box-shadow:0 0 0 3px #aae1ffb3}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner img,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-inner img{border-radius:4px;height:100%;object-fit:cover;width:100%}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-author{background:#0000004d;bottom:0;color:#fff;display:none;font-size:12px;font-weight:500;left:0;margin:0;padding:5px;position:absolute;text-decoration:none;width:100%}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-author:hover,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-author:hover{background:#0006;text-decoration:underline}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox{background-color:#1269cf;border-radius:50%;height:26px;opacity:0;position:absolute;right:16px;top:16px;width:26px;z-index:1002}[dir=ltr] .uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox:after,[dir=ltr] .uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox:after{left:7px}[dir=rtl] .uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox:after,[dir=rtl] .uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox:after{right:7px}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox:after,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox:after{height:7px;top:8px;width:12px}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox{opacity:1}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:focus+label .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:hover+label .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:focus+label .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:hover+label .uppy-ProviderBrowserItem-author{display:block}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:focus+label,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:focus+label{box-shadow:0 0 0 3px #1269cf80}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:focus+label:focus,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:focus+label:focus{outline:none}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:focus+label::-moz-focus-inner,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:focus+label::-moz-focus-inner{border:0}.uppy-ProviderBrowser-viewType--list{background-color:#fff}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--list{background-color:#1f1f1f}.uppy-ProviderBrowser-viewType--list li.uppy-ProviderBrowserItem{align-items:center;display:flex;margin:0;padding:7px 15px}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--list li.uppy-ProviderBrowserItem{color:#eaeaea}.uppy-ProviderBrowser-viewType--list li.uppy-ProviderBrowserItem--disabled{opacity:.6}[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox{margin-right:15px}[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox{margin-left:15px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox{background-color:#fff;border:1px solid #cfcfcf;border-radius:3px;height:17px;width:17px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:focus{border:1px solid #1269cf;box-shadow:0 0 0 3px #1269cf40;outline:none}[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:after{left:3px}[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:after{right:3px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:after{height:5px;opacity:0;top:4px;width:9px}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:focus{border-color:#02baf2b3;box-shadow:0 0 0 3px #02baf233}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox,.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--is-partial .uppy-ProviderBrowserItem-checkbox{background-color:#1269cf;border-color:#1269cf}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox:after,.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--is-partial .uppy-ProviderBrowserItem-checkbox:after{opacity:1}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner{align-items:center;color:inherit;display:flex;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Segoe UI Symbol,Segoe UI Emoji,Apple Color Emoji,Roboto,Helvetica,Arial,sans-serif;overflow:hidden;padding:2px;text-overflow:ellipsis;white-space:nowrap}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner:focus{outline:none;text-decoration:underline}[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner img,[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner svg{margin-right:8px}[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner img,[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner svg{margin-left:8px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner span{line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--disabled .uppy-ProviderBrowserItem-inner{cursor:default}[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-iconWrap{margin-right:7px}[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-iconWrap{margin-left:7px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-iconWrap{width:20px}.uppy-ProviderBrowserItem-checkbox{cursor:pointer;flex-shrink:0;position:relative}.uppy-ProviderBrowserItem-checkbox:disabled,.uppy-ProviderBrowserItem-checkbox:disabled:after{cursor:default}[data-uppy-theme=dark] .uppy-ProviderBrowserItem-checkbox{background-color:#1f1f1f;border-color:#939393}[data-uppy-theme=dark] .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox{background-color:#333}.uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox:after{border-bottom:2px solid #eaeaea;border-left:2px solid #eaeaea;content:"";cursor:pointer;position:absolute;transform:rotate(-45deg)}.uppy-ProviderBrowserItem--is-partial .uppy-ProviderBrowserItem-checkbox:after{background-color:#eaeaea!important;content:""!important;height:2px!important;left:20%!important;position:absolute!important;right:20%!important;top:50%!important;transform:translateY(-50%)!important}.uppy-SearchProvider{align-items:center;display:flex;flex:1;flex-direction:column;height:100%;justify-content:center;width:100%}[data-uppy-theme=dark] .uppy-SearchProvider{background-color:#1f1f1f}.uppy-SearchProvider-input{margin-bottom:15px;max-width:650px;width:90%}.uppy-size--md .uppy-SearchProvider-input{margin-bottom:20px}.uppy-SearchProvider-input::-webkit-search-cancel-button{display:none}.uppy-SearchProvider-searchButton{padding:13px 25px}.uppy-size--md .uppy-SearchProvider-searchButton{padding:13px 30px}.uppy-DashboardContent-panelBody{align-items:center;display:flex;flex:1;justify-content:center}[data-uppy-theme=dark] .uppy-DashboardContent-panelBody{background-color:#1f1f1f}.uppy-Provider-auth,.uppy-Provider-empty,.uppy-Provider-error,.uppy-Provider-loading{align-items:center;color:#939393;display:flex;flex:1;flex-flow:column wrap;justify-content:center}.uppy-Provider-empty{color:#939393}.uppy-Provider-authIcon svg{height:75px;width:100px}.uppy-Provider-authTitle{color:#757575;font-size:17px;font-weight:400;line-height:1.4;margin-bottom:30px;max-width:500px;padding:0 15px;text-align:center}.uppy-size--md .uppy-Provider-authTitle{font-size:20px}[data-uppy-theme=dark] .uppy-Provider-authTitle{color:#cfcfcf}.uppy-Provider-btn-google{align-items:center;background:#4285f4;display:flex;padding:8px 12px!important}.uppy-Provider-btn-google:hover{background-color:#1266f1}.uppy-Provider-btn-google:focus{box-shadow:0 0 0 3px #4285f466;outline:none}.uppy-Provider-btn-google svg{margin-right:8px}[dir=ltr] .uppy-Provider-breadcrumbs{text-align:left}[dir=rtl] .uppy-Provider-breadcrumbs{text-align:right}.uppy-Provider-breadcrumbs{color:#525252;flex:1;font-size:12px;margin-bottom:10px}.uppy-size--md .uppy-Provider-breadcrumbs{margin-bottom:0}[data-uppy-theme=dark] .uppy-Provider-breadcrumbs{color:#eaeaea}[dir=ltr] .uppy-Provider-breadcrumbsIcon{margin-right:4px}[dir=rtl] .uppy-Provider-breadcrumbsIcon{margin-left:4px}.uppy-Provider-breadcrumbsIcon{color:#525252;display:inline-block;line-height:1;vertical-align:middle}.uppy-Provider-breadcrumbsIcon svg{height:13px;width:13px;fill:#525252}.uppy-Provider-breadcrumbs button{border-radius:3px;display:inline-block;line-height:inherit;padding:4px}.uppy-Provider-breadcrumbs button:focus{outline:none}.uppy-Provider-breadcrumbs button::-moz-focus-inner{border:0}.uppy-Provider-breadcrumbs button:hover{color:#0e51a0}.uppy-Provider-breadcrumbs button:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-Provider-breadcrumbs button:focus{background-color:#333}.uppy-Provider-breadcrumbs button:not(:last-of-type){text-decoration:underline}.uppy-Provider-breadcrumbs button:last-of-type{color:#333;cursor:normal;font-weight:500;pointer-events:none}.uppy-Provider-breadcrumbs button:hover{cursor:pointer}[data-uppy-theme=dark] .uppy-Provider-breadcrumbs button{color:#eaeaea}.uppy-ProviderBrowser{display:flex;flex:1;flex-direction:column;font-size:14px;font-weight:400;height:100%}.uppy-ProviderBrowser-user{color:#333;font-weight:500;margin:0 8px 0 0}[data-uppy-theme=dark] .uppy-ProviderBrowser-user{color:#eaeaea}[dir=ltr] .uppy-ProviderBrowser-user:after{left:4px}[dir=rtl] .uppy-ProviderBrowser-user:after{right:4px}.uppy-ProviderBrowser-user:after{color:#939393;content:"·";font-weight:400;position:relative}.uppy-ProviderBrowser-header{border-bottom:1px solid #eaeaea;position:relative;z-index:1001}[data-uppy-theme=dark] .uppy-ProviderBrowser-header{border-bottom:1px solid #333}.uppy-ProviderBrowser-headerBar{background-color:#fafafa;color:#757575;font-size:12px;line-height:1.4;padding:7px 15px;z-index:1001}.uppy-size--md .uppy-ProviderBrowser-headerBar{align-items:center;display:flex}[data-uppy-theme=dark] .uppy-ProviderBrowser-headerBar{background-color:#1f1f1f}.uppy-ProviderBrowser-headerBar--simple{display:block;justify-content:center;text-align:center}.uppy-ProviderBrowser-headerBar--simple .uppy-Provider-breadcrumbsWrap{display:inline-block;flex:none;vertical-align:middle}.uppy-ProviderBrowser-searchFilter{align-items:center;display:flex;height:30px;margin-bottom:15px;margin-top:15px;padding-left:8px;padding-right:8px;position:relative;width:100%}[dir=ltr] .uppy-ProviderBrowser-searchFilterInput{padding-left:30px}[dir=ltr] .uppy-ProviderBrowser-searchFilterInput,[dir=rtl] .uppy-ProviderBrowser-searchFilterInput{padding-right:30px}[dir=rtl] .uppy-ProviderBrowser-searchFilterInput{padding-left:30px}.uppy-ProviderBrowser-searchFilterInput{background-color:#eaeaea;border:0;border-radius:4px;color:#333;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Segoe UI Symbol,Segoe UI Emoji,Apple Color Emoji,Roboto,Helvetica,Arial,sans-serif;font-size:13px;height:30px;line-height:1.4;outline:0;width:100%;z-index:1001}.uppy-ProviderBrowser-searchFilterInput::-webkit-search-cancel-button{display:none}[data-uppy-theme=dark] .uppy-ProviderBrowser-searchFilterInput{background-color:#1f1f1f;color:#eaeaea}.uppy-ProviderBrowser-searchFilterInput:focus{background-color:#cfcfcf;border:0}[data-uppy-theme=dark] .uppy-ProviderBrowser-searchFilterInput:focus{background-color:#333}[dir=ltr] .uppy-ProviderBrowser-searchFilterIcon{left:16px}[dir=rtl] .uppy-ProviderBrowser-searchFilterIcon{right:16px}.uppy-ProviderBrowser-searchFilterIcon{color:#757575;height:12px;position:absolute;width:12px;z-index:1002}.uppy-ProviderBrowser-searchFilterInput::placeholder{color:#939393;opacity:1}[dir=ltr] .uppy-ProviderBrowser-searchFilterReset{right:16px}[dir=rtl] .uppy-ProviderBrowser-searchFilterReset{left:16px}.uppy-ProviderBrowser-searchFilterReset{border-radius:3px;color:#939393;cursor:pointer;height:22px;padding:6px;position:absolute;width:22px;z-index:1002}.uppy-ProviderBrowser-searchFilterReset:focus{outline:none}.uppy-ProviderBrowser-searchFilterReset::-moz-focus-inner{border:0}.uppy-ProviderBrowser-searchFilterReset:focus{box-shadow:0 0 0 3px #1269cf80}.uppy-ProviderBrowser-searchFilterReset:hover{color:#757575}.uppy-ProviderBrowser-searchFilterReset svg{vertical-align:text-top}.uppy-ProviderBrowser-userLogout{border-radius:3px;color:#1269cf;cursor:pointer;line-height:inherit;padding:4px}.uppy-ProviderBrowser-userLogout:focus{outline:none}.uppy-ProviderBrowser-userLogout::-moz-focus-inner{border:0}.uppy-ProviderBrowser-userLogout:hover{color:#0e51a0}.uppy-ProviderBrowser-userLogout:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-ProviderBrowser-userLogout:focus{background-color:#333}.uppy-ProviderBrowser-userLogout:hover{text-decoration:underline}[data-uppy-theme=dark] .uppy-ProviderBrowser-userLogout{color:#eaeaea}.uppy-ProviderBrowser-body{flex:1;position:relative}.uppy-ProviderBrowser-list{background-color:#fff;border-spacing:0;display:block;flex:1;height:100%;inset:0;list-style:none;margin:0;overflow-x:hidden;overflow-y:auto;padding:0;position:absolute;width:100%;-webkit-overflow-scrolling:touch}[data-uppy-theme=dark] .uppy-ProviderBrowser-list{background-color:#1f1f1f}.uppy-ProviderBrowser-list:focus{outline:none}.uppy-ProviderBrowserItem-inner{cursor:pointer;font-size:13px;font-weight:500}.uppy-ProviderBrowser-footer{align-items:center;background-color:#fff;border-top:1px solid #eaeaea;display:flex;justify-content:space-between;padding:15px}[dir=ltr] .uppy-ProviderBrowser-footer button{margin-right:8px}[dir=rtl] .uppy-ProviderBrowser-footer button{margin-left:8px}[data-uppy-theme=dark] .uppy-ProviderBrowser-footer{background-color:#1f1f1f;border-top:1px solid #333}.uppy-ProviderBrowser-footer-buttons{flex-shrink:0}.uppy-ProviderBrowser-footer-error{color:#e32437;line-height:18px}@media (max-width:426px){.uppy-ProviderBrowser-footer{align-items:stretch;flex-direction:column-reverse}.uppy-ProviderBrowser-footer-error{padding-bottom:10px}}.picker-dialog-bg{z-index:20000!important}.picker-dialog{z-index:20001!important}.uppy-Dashboard-Item-previewInnerWrap{align-items:center;border-radius:3px;box-shadow:0 0 2px #0006;display:flex;flex-direction:column;height:100%;justify-content:center;overflow:hidden;position:relative;width:100%}.uppy-size--md .uppy-Dashboard-Item-previewInnerWrap{box-shadow:0 1px 2px #00000026}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-previewInnerWrap{box-shadow:none}.uppy-Dashboard-Item-previewInnerWrap:after{background-color:#000000a6;content:"";display:none;inset:0;position:absolute;z-index:1001}.uppy-Dashboard-Item-previewLink{inset:0;position:absolute;z-index:1002}.uppy-Dashboard-Item-previewLink:focus{box-shadow:inset 0 0 0 3px #579df0}[data-uppy-theme=dark] .uppy-Dashboard-Item-previewLink:focus{box-shadow:inset 0 0 0 3px #016c8d}.uppy-Dashboard-Item-preview img.uppy-Dashboard-Item-previewImg{border-radius:3px;height:100%;object-fit:cover;transform:translateZ(0);width:100%}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-preview img.uppy-Dashboard-Item-previewImg{height:auto;max-height:100%;max-width:100%;object-fit:contain;padding:10px;width:auto}.uppy-Dashboard-Item-progress{color:#fff;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition:all .35 ease;width:120px;z-index:1002}.uppy-Dashboard-Item-progressIndicator{color:#fff;display:inline-block;height:38px;opacity:.9;width:38px}.uppy-size--md .uppy-Dashboard-Item-progressIndicator{height:55px;width:55px}button.uppy-Dashboard-Item-progressIndicator{cursor:pointer}button.uppy-Dashboard-Item-progressIndicator:focus{outline:none}button.uppy-Dashboard-Item-progressIndicator::-moz-focus-inner{border:0}button.uppy-Dashboard-Item-progressIndicator:focus .uppy-Dashboard-Item-progressIcon--bg,button.uppy-Dashboard-Item-progressIndicator:focus .uppy-Dashboard-Item-progressIcon--retry{fill:#579df0}.uppy-Dashboard-Item-progressIcon--circle{height:100%;width:100%}.uppy-Dashboard-Item-progressIcon--bg{stroke:#fff6}.uppy-Dashboard-Item-progressIcon--progress{transition:stroke-dashoffset .5s ease-out;stroke:#fff}.uppy-Dashboard-Item-progressIcon--play{transition:all .2s;fill:#fff;stroke:#fff}.uppy-Dashboard-Item-progressIcon--cancel{transition:all .2s;fill:#fff}.uppy-Dashboard-Item-progressIcon--pause{transition:all .2s;fill:#fff;stroke:#fff}.uppy-Dashboard-Item-progressIcon--check{transition:all .2s;fill:#fff}.uppy-Dashboard-Item-progressIcon--retry{fill:#fff}[dir=ltr] .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{right:-8px}[dir=rtl] .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{left:-8px}[dir=ltr] .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{left:auto}[dir=rtl] .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{right:auto}.uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{top:-9px;transform:none;width:auto}.uppy-Dashboard-Item.is-error .uppy-Dashboard-Item-progressIndicator{height:18px;width:18px}.uppy-size--md .uppy-Dashboard-Item.is-error .uppy-Dashboard-Item-progressIndicator{height:28px;width:28px}.uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progressIndicator{height:18px;opacity:1;width:18px}.uppy-size--md .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progressIndicator{height:22px;width:22px}.uppy-Dashboard-Item.is-processing .uppy-Dashboard-Item-progress{opacity:0}[dir=ltr] .uppy-Dashboard-Item-fileInfo{padding-right:5px}[dir=rtl] .uppy-Dashboard-Item-fileInfo{padding-left:5px}[dir=ltr] .uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfo{padding-right:10px}[dir=rtl] .uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfo{padding-left:10px}[dir=ltr] .uppy-size--md.uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfo{padding-right:15px}[dir=rtl] .uppy-size--md.uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfo{padding-left:15px}.uppy-Dashboard-Item-name{font-size:12px;font-weight:500;line-height:1.3;margin-bottom:5px;word-wrap:anywhere;word-break:break-all}[data-uppy-theme=dark] .uppy-Dashboard-Item-name{color:#eaeaea}.uppy-size--md.uppy-Dashboard--singleFile .uppy-Dashboard-Item-name{font-size:14px;line-height:1.4}.uppy-Dashboard-Item-fileName{align-items:baseline;display:flex}.uppy-Dashboard-Item-fileName button{margin-left:5px}.uppy-Dashboard-Item-author{color:#757575;display:inline-block;font-size:11px;font-weight:400;line-height:1;margin-bottom:5px;vertical-align:bottom}.uppy-Dashboard-Item-author a{color:#757575}.uppy-Dashboard-Item-status{color:#757575;font-size:11px;font-weight:400;line-height:1}[data-uppy-theme=dark] .uppy-Dashboard-Item-status{color:#bbb}.uppy-Dashboard-Item-statusSize{display:inline-block;margin-bottom:5px;text-transform:uppercase;vertical-align:bottom}.uppy-Dashboard-Item-reSelect{color:#1269cf;font-family:inherit;font-size:inherit;font-weight:600}.uppy-Dashboard-Item-errorMessage{background-color:#fdeff1;color:#a51523;font-size:11px;font-weight:500;line-height:1.3;padding:5px 6px}.uppy-Dashboard-Item-errorMessageBtn{color:#a51523;cursor:pointer;font-size:11px;font-weight:500;text-decoration:underline}.uppy-Dashboard-Item-preview .uppy-Dashboard-Item-errorMessage{display:none}.uppy-size--md .uppy-Dashboard-Item-preview .uppy-Dashboard-Item-errorMessage{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top:1px solid #f7c2c8;bottom:0;display:block;left:0;line-height:1.4;padding:6px 8px;position:absolute;right:0}.uppy-Dashboard-Item-fileInfo .uppy-Dashboard-Item-errorMessage{border:1px solid #f7c2c8;border-radius:3px;display:inline-block;position:static}.uppy-size--md .uppy-Dashboard-Item-fileInfo .uppy-Dashboard-Item-errorMessage{display:none}.uppy-Dashboard-Item-action{color:#939393;cursor:pointer}.uppy-Dashboard-Item-action:focus{outline:none}.uppy-Dashboard-Item-action::-moz-focus-inner{border:0}.uppy-Dashboard-Item-action:focus{box-shadow:0 0 0 3px #1269cf80}.uppy-Dashboard-Item-action:hover{color:#1f1f1f;opacity:1}[data-uppy-theme=dark] .uppy-Dashboard-Item-action{color:#cfcfcf}[data-uppy-theme=dark] .uppy-Dashboard-Item-action:focus{outline:none}[data-uppy-theme=dark] .uppy-Dashboard-Item-action::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-Dashboard-Item-action:focus{box-shadow:0 0 0 2px #aae1ffd9}[data-uppy-theme=dark] .uppy-Dashboard-Item-action:hover{color:#eaeaea}.uppy-Dashboard-Item-action--remove{color:#1f1f1f;opacity:.95}.uppy-Dashboard-Item-action--remove:hover{color:#000;opacity:1}[dir=ltr] .uppy-size--md .uppy-Dashboard-Item-action--remove{right:-8px}[dir=rtl] .uppy-size--md .uppy-Dashboard-Item-action--remove{left:-8px}.uppy-size--md .uppy-Dashboard-Item-action--remove{height:18px;padding:0;position:absolute;top:-8px;width:18px;z-index:1002}.uppy-size--md .uppy-Dashboard-Item-action--remove:focus{border-radius:50%}[dir=ltr] .uppy-Dashboard--singleFile.uppy-size--height-md .uppy-Dashboard-Item-action--remove{right:8px}[dir=rtl] .uppy-Dashboard--singleFile.uppy-size--height-md .uppy-Dashboard-Item-action--remove{left:8px}.uppy-Dashboard--singleFile.uppy-size--height-md .uppy-Dashboard-Item-action--remove{position:absolute;top:8px}[data-uppy-theme=dark] .uppy-Dashboard-Item-action--remove{color:#525252}[data-uppy-theme=dark] .uppy-Dashboard-Item-action--remove:hover{color:#333}.uppy-Dashboard:not(.uppy-size--md):not(.uppy-Dashboard--singleFile.uppy-size--height-md) .uppy-Dashboard-Item-actionWrapper{align-items:center;display:flex}.uppy-Dashboard:not(.uppy-size--md):not(.uppy-Dashboard--singleFile.uppy-size--height-md) .uppy-Dashboard-Item-action{height:22px;margin-left:3px;padding:3px;width:22px}.uppy-Dashboard:not(.uppy-size--md):not(.uppy-Dashboard--singleFile.uppy-size--height-md) .uppy-Dashboard-Item-action:focus{border-radius:3px}.uppy-size--md .uppy-Dashboard-Item-action--copyLink,.uppy-size--md .uppy-Dashboard-Item-action--edit{height:16px;padding:0;width:16px}.uppy-size--md .uppy-Dashboard-Item-action--copyLink:focus,.uppy-size--md .uppy-Dashboard-Item-action--edit:focus{border-radius:3px}.uppy-Dashboard-Item{align-items:center;border-bottom:1px solid #eaeaea;display:flex;padding:10px}[dir=ltr] .uppy-Dashboard:not(.uppy-Dashboard--singleFile) .uppy-Dashboard-Item{padding-right:0}[dir=rtl] .uppy-Dashboard:not(.uppy-Dashboard--singleFile) .uppy-Dashboard-Item{padding-left:0}[data-uppy-theme=dark] .uppy-Dashboard-Item{border-bottom:1px solid #333}[dir=ltr] .uppy-size--md .uppy-Dashboard-Item{float:left}[dir=rtl] .uppy-size--md .uppy-Dashboard-Item{float:right}.uppy-size--md .uppy-Dashboard-Item{border-bottom:0;display:block;height:215px;margin:5px 15px;padding:0;position:relative;width:calc(33.333% - 30px)}.uppy-size--lg .uppy-Dashboard-Item{height:190px;margin:5px 15px;padding:0;width:calc(25% - 30px)}.uppy-size--xl .uppy-Dashboard-Item{height:210px;padding:0;width:calc(20% - 30px)}.uppy-Dashboard--singleFile .uppy-Dashboard-Item{border-bottom:0;display:flex;flex-direction:column;height:100%;max-width:400px;padding:15px;position:relative;width:100%}.uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-previewInnerWrap{opacity:.2}.uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-name{opacity:.7}.uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-preview:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='39' viewBox='0 0 35 39'%3E%3Cpath fill='%2523000' d='M1.708 38.66c1.709 0 3.417-3.417 6.834-3.417s5.125 3.417 8.61 3.417c3.348 0 5.056-3.417 8.473-3.417 4.305 0 5.125 3.417 6.833 3.417.889 0 1.709-.889 1.709-1.709v-19.68C34.167-5.757 0-5.757 0 17.271v19.68c0 .82.888 1.709 1.708 1.709m8.542-17.084a3.383 3.383 0 0 1-3.417-3.416 3.383 3.383 0 0 1 3.417-3.417 3.383 3.383 0 0 1 3.417 3.417 3.383 3.383 0 0 1-3.417 3.416m13.667 0A3.383 3.383 0 0 1 20.5 18.16a3.383 3.383 0 0 1 3.417-3.417 3.383 3.383 0 0 1 3.416 3.417 3.383 3.383 0 0 1-3.416 3.416'/%3E%3C/svg%3E");background-position:50% 10px;background-repeat:no-repeat;background-size:25px;content:"";inset:0;opacity:.5;position:absolute;z-index:1005}.uppy-size--md .uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-preview:before{background-position:50% 50%;background-size:40px}.uppy-Dashboard--singleFile .uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-preview:before{background-position:50% 50%;background-size:30%}.uppy-Dashboard-Item-preview{flex-grow:0;flex-shrink:0;height:50px;position:relative;width:50px}.uppy-size--md .uppy-Dashboard-Item-preview{height:140px;width:100%}.uppy-size--lg .uppy-Dashboard-Item-preview{height:120px}.uppy-size--xl .uppy-Dashboard-Item-preview{height:140px}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-preview{flex-grow:1;max-height:75%;width:100%}.uppy-Dashboard--singleFile.uppy-size--md .uppy-Dashboard-Item-preview{max-height:100%}[dir=ltr] .uppy-Dashboard-Item-fileInfoAndButtons{padding-right:8px}[dir=rtl] .uppy-Dashboard-Item-fileInfoAndButtons{padding-left:8px}[dir=ltr] .uppy-Dashboard-Item-fileInfoAndButtons{padding-left:12px}[dir=rtl] .uppy-Dashboard-Item-fileInfoAndButtons{padding-right:12px}.uppy-Dashboard-Item-fileInfoAndButtons{align-items:center;display:flex;flex-grow:1;justify-content:space-between}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfoAndButtons,.uppy-size--md .uppy-Dashboard-Item-fileInfoAndButtons{align-items:flex-start;padding:9px 0 0}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfoAndButtons{flex-grow:0;width:100%}.uppy-Dashboard-Item-fileInfo{flex-grow:1;flex-shrink:1}.uppy-Dashboard-Item-actionWrapper{flex-grow:0;flex-shrink:0}.uppy-Dashboard-Item.is-error .uppy-Dashboard-Item-previewInnerWrap:after,.uppy-Dashboard-Item.is-inprogress .uppy-Dashboard-Item-previewInnerWrap:after{display:block}[dir=ltr] .uppy-Dashboard-Item-errorDetails{left:2px}[dir=rtl] .uppy-Dashboard-Item-errorDetails{right:2px}.uppy-Dashboard-Item-errorDetails{-webkit-appearance:none;appearance:none;background-color:#939393;border:none;border-radius:50%;color:#fff;cursor:help;flex-shrink:0;font-size:10px;font-weight:600;height:13px;line-height:12px;position:relative;text-align:center;top:0;width:13px}.uppy-Dashboard-Item-errorDetails:after{line-height:1.3;word-wrap:break-word}.uppy-Dashboard-FileCard{background-color:#fff;border-radius:5px;box-shadow:0 0 10px 4px #0000001a;display:flex;flex-direction:column;height:100%;inset:0;position:absolute;width:100%;z-index:1005}.uppy-Dashboard-FileCard .uppy-DashboardContent-bar{border-top-left-radius:5px;border-top-right-radius:5px}.uppy-Dashboard-FileCard .uppy-Dashboard-FileCard-actions{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.uppy-Dashboard-FileCard-inner{display:flex;flex-direction:column;flex-grow:1;flex-shrink:1;height:100%;min-height:0}.uppy-Dashboard-FileCard-preview{align-items:center;border-bottom:1px solid #eaeaea;display:flex;flex-grow:0;flex-shrink:1;height:60%;justify-content:center;min-height:0;position:relative}[data-uppy-theme=dark] .uppy-Dashboard-FileCard-preview{background-color:#333;border-bottom:0}.uppy-Dashboard-FileCard-preview img.uppy-Dashboard-Item-previewImg{border-radius:3px;box-shadow:0 3px 20px #00000026;flex:0 0 auto;max-height:90%;max-width:90%;object-fit:cover}[dir=ltr] .uppy-Dashboard-FileCard-edit{right:10px}[dir=rtl] .uppy-Dashboard-FileCard-edit{left:10px}.uppy-Dashboard-FileCard-edit{background-color:#00000080;border-radius:50px;color:#fff;font-size:13px;padding:7px 15px;position:absolute;top:10px}.uppy-Dashboard-FileCard-edit:focus{outline:none}.uppy-Dashboard-FileCard-edit::-moz-focus-inner{border:0}.uppy-Dashboard-FileCard-edit:focus{box-shadow:0 0 0 3px #1269cf80}.uppy-Dashboard-FileCard-edit:hover{background-color:#000c}.uppy-Dashboard-FileCard-info{flex-grow:0;flex-shrink:0;height:40%;overflow-y:auto;padding:30px 20px 20px;-webkit-overflow-scrolling:touch}[data-uppy-theme=dark] .uppy-Dashboard-FileCard-info{background-color:#1f1f1f}.uppy-Dashboard-FileCard-fieldset{border:0;font-size:0;margin:auto auto 12px;max-width:640px;padding:0}.uppy-Dashboard-FileCard-label{color:#525252;display:inline-block;font-size:12px;vertical-align:middle;width:22%}.uppy-size--md .uppy-Dashboard-FileCard-label{font-size:14px}[data-uppy-theme=dark] .uppy-Dashboard-FileCard-label{color:#eaeaea}.uppy-Dashboard-FileCard-input{display:inline-block;vertical-align:middle;width:78%}.uppy-Dashboard-FileCard-actions{align-items:center;background-color:#fafafa;border-top:1px solid #eaeaea;display:flex;flex-grow:0;flex-shrink:0;height:55px;padding:0 15px}.uppy-size--md .uppy-Dashboard-FileCard-actions{height:65px}[data-uppy-theme=dark] .uppy-Dashboard-FileCard-actions{background-color:#1f1f1f;border-top:1px solid #333}[dir=ltr] .uppy-Dashboard-FileCard-actionsBtn{margin-right:10px}[dir=rtl] .uppy-Dashboard-FileCard-actionsBtn{margin-left:10px}.uppy-transition-slideDownUp-enter{opacity:.01;transform:translate3d(0,-105%,0);transition:transform .25s ease-in-out,opacity .25s ease-in-out}.uppy-transition-slideDownUp-enter.uppy-transition-slideDownUp-enter-active{opacity:1;transform:translateZ(0)}.uppy-transition-slideDownUp-leave{opacity:1;transform:translateZ(0);transition:transform .25s ease-in-out,opacity .25s ease-in-out}.uppy-transition-slideDownUp-leave.uppy-transition-slideDownUp-leave-active{opacity:.01;transform:translate3d(0,-105%,0)}@keyframes uppy-Dashboard-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes uppy-Dashboard-fadeOut{0%{opacity:1}to{opacity:0}}@keyframes uppy-Dashboard-slideDownAndFadeIn{0%{opacity:0;transform:translate3d(-50%,-70%,0)}to{opacity:1;transform:translate3d(-50%,-50%,0)}}@keyframes uppy-Dashboard-slideDownAndFadeIn--small{0%{opacity:0;transform:translate3d(0,-20%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uppy-Dashboard-slideUpFadeOut{0%{opacity:1;transform:translate3d(-50%,-50%,0)}to{opacity:0;transform:translate3d(-50%,-70%,0)}}@keyframes uppy-Dashboard-slideUpFadeOut--small{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(0,-20%,0)}}.uppy-Dashboard--modal{z-index:1001}.uppy-Dashboard--modal[aria-hidden=true]{display:none}.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose>.uppy-Dashboard-inner{animation:uppy-Dashboard-slideDownAndFadeIn--small .3s cubic-bezier(0,0,.2,1)}@media only screen and (min-width:820px){.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose>.uppy-Dashboard-inner{animation:uppy-Dashboard-slideDownAndFadeIn .3s cubic-bezier(0,0,.2,1)}}.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose>.uppy-Dashboard-overlay{animation:uppy-Dashboard-fadeIn .3s cubic-bezier(0,0,.2,1)}.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing>.uppy-Dashboard-inner{animation:uppy-Dashboard-slideUpFadeOut--small .3s cubic-bezier(0,0,.2,1)}@media only screen and (min-width:820px){.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing>.uppy-Dashboard-inner{animation:uppy-Dashboard-slideUpFadeOut .3s cubic-bezier(0,0,.2,1)}}.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing>.uppy-Dashboard-overlay{animation:uppy-Dashboard-fadeOut .3s cubic-bezier(0,0,.2,1)}.uppy-Dashboard-isFixed{height:100vh;overflow:hidden}.uppy-Dashboard--modal .uppy-Dashboard-overlay{background-color:#00000080;inset:0;position:fixed;z-index:1001}.uppy-Dashboard-inner{background-color:#f4f4f4;border:1px solid #eaeaea;border-radius:5px;max-height:100%;max-width:100%;outline:none;position:relative}.uppy-size--md .uppy-Dashboard-inner{min-height:auto}@media only screen and (min-width:820px){.uppy-Dashboard-inner{height:500px;width:650px}}.uppy-Dashboard--modal .uppy-Dashboard-inner{z-index:1002}[data-uppy-theme=dark] .uppy-Dashboard-inner{background-color:#1f1f1f}.uppy-Dashboard--isDisabled .uppy-Dashboard-inner{cursor:not-allowed}.uppy-Dashboard-innerWrap{border-radius:5px;display:flex;flex-direction:column;height:100%;opacity:0;overflow:hidden;position:relative}.uppy-Dashboard--isInnerWrapVisible .uppy-Dashboard-innerWrap{opacity:1}.uppy-Dashboard--isDisabled .uppy-Dashboard-innerWrap{cursor:not-allowed;filter:grayscale(100%);opacity:.6;-webkit-user-select:none;user-select:none}.uppy-Dashboard--isDisabled .uppy-ProviderIconBg{fill:#9f9f9f}.uppy-Dashboard--isDisabled [aria-disabled],.uppy-Dashboard--isDisabled [disabled]{cursor:not-allowed;pointer-events:none}.uppy-Dashboard--modal .uppy-Dashboard-inner{border:none;inset:35px 15px 15px;position:fixed}@media only screen and (min-width:820px){.uppy-Dashboard--modal .uppy-Dashboard-inner{box-shadow:0 5px 15px 4px #00000026;left:50%;right:auto;top:50%;transform:translate(-50%,-50%)}}[dir=ltr] .uppy-Dashboard-close{right:-2px}[dir=rtl] .uppy-Dashboard-close{left:-2px}.uppy-Dashboard-close{color:#ffffffe6;cursor:pointer;display:block;font-size:27px;position:absolute;top:-33px;z-index:1005}.uppy-Dashboard-close:focus{outline:none}.uppy-Dashboard-close::-moz-focus-inner{border:0}.uppy-Dashboard-close:focus{color:#6eabf2}@media only screen and (min-width:820px){[dir=ltr] .uppy-Dashboard-close{right:-35px}[dir=rtl] .uppy-Dashboard-close{left:-35px}.uppy-Dashboard-close{font-size:35px;top:-10px}}.uppy-Dashboard-serviceMsg{background-color:#fffbf7;border-bottom:1px solid #edd4b9;border-top:1px solid #edd4b9;font-size:12px;font-weight:500;line-height:1.3;padding:12px 0;position:relative;top:-1px;z-index:1004}.uppy-size--md .uppy-Dashboard-serviceMsg{font-size:14px;line-height:1.4}[data-uppy-theme=dark] .uppy-Dashboard-serviceMsg{background-color:#1f1f1f;border-bottom:1px solid #333;border-top:1px solid #333;color:#eaeaea}.uppy-Dashboard-serviceMsg-title{display:block;line-height:1;margin-bottom:4px;padding-left:42px}.uppy-Dashboard-serviceMsg-text{padding:0 15px}.uppy-Dashboard-serviceMsg-actionBtn{color:#1269cf;font-size:inherit;font-weight:inherit;vertical-align:initial}[data-uppy-theme=dark] .uppy-Dashboard-serviceMsg-actionBtn{color:#02baf2e6}.uppy-Dashboard-serviceMsg-icon{left:15px;position:absolute;top:10px}.uppy-Dashboard-AddFiles{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;position:relative;text-align:center}[data-uppy-drag-drop-supported=true] .uppy-Dashboard-AddFiles{border:1px dashed #dfdfdf;border-radius:3px;height:calc(100% - 14px);margin:7px}.uppy-Dashboard-AddFilesPanel .uppy-Dashboard-AddFiles{border:none;height:calc(100% - 54px)}.uppy-Dashboard--modal .uppy-Dashboard-AddFiles{border-color:#cfcfcf}[data-uppy-theme=dark] .uppy-Dashboard-AddFiles{border-color:#757575}.uppy-Dashboard-AddFiles-info{display:none;margin-top:auto;padding-bottom:15px;padding-top:15px}.uppy-size--height-md .uppy-Dashboard-AddFiles-info{display:block}.uppy-size--md .uppy-Dashboard-AddFiles-info{bottom:25px;left:0;padding-bottom:0;padding-top:30px;position:absolute;right:0}[data-uppy-num-acquirers="0"] .uppy-Dashboard-AddFiles-info{margin-top:0}.uppy-Dashboard-browse{color:#1269cf;cursor:pointer}.uppy-Dashboard-browse:focus{outline:none}.uppy-Dashboard-browse::-moz-focus-inner{border:0}.uppy-Dashboard-browse:focus,.uppy-Dashboard-browse:hover{border-bottom:1px solid #1269cf}[data-uppy-theme=dark] .uppy-Dashboard-browse{color:#02baf2e6}[data-uppy-theme=dark] .uppy-Dashboard-browse:focus,[data-uppy-theme=dark] .uppy-Dashboard-browse:hover{border-bottom:1px solid #02baf2}.uppy-Dashboard-browseBtn{display:block;font-size:14px;font-weight:500;margin-bottom:5px;margin-top:8px;width:100%}.uppy-size--md .uppy-Dashboard-browseBtn{font-size:15px;margin:15px auto;padding:13px 44px;width:auto}.uppy-Dashboard-AddFiles-list{display:flex;flex:1;flex-direction:column;margin-top:2px;overflow-y:auto;padding:2px 0;width:100%;-webkit-overflow-scrolling:touch}.uppy-size--md .uppy-Dashboard-AddFiles-list{flex:none;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-top:15px;max-width:600px;overflow-y:visible;padding-top:0}.uppy-DashboardTab{border-bottom:1px solid #eaeaea;text-align:center;width:100%}[data-uppy-theme=dark] .uppy-DashboardTab{border-bottom:1px solid #333}.uppy-size--md .uppy-DashboardTab{border-bottom:none;display:inline-block;margin-bottom:10px;width:auto}.uppy-DashboardTab-btn{align-items:center;-webkit-appearance:none;appearance:none;background-color:initial;color:#525252;cursor:pointer;flex-direction:row;height:100%;justify-content:left;padding:12px 15px;width:100%}.uppy-DashboardTab-btn:focus{outline:none}[dir=ltr] .uppy-size--md .uppy-DashboardTab-btn{margin-right:1px}[dir=rtl] .uppy-size--md .uppy-DashboardTab-btn{margin-left:1px}.uppy-size--md .uppy-DashboardTab-btn{border-radius:5px;flex-direction:column;padding:10px 3px;width:86px}[data-uppy-theme=dark] .uppy-DashboardTab-btn{color:#eaeaea}.uppy-DashboardTab-btn::-moz-focus-inner{border:0}.uppy-DashboardTab-btn:hover{background-color:#e9ecef}[data-uppy-theme=dark] .uppy-DashboardTab-btn:hover{background-color:#333}.uppy-DashboardTab-btn:active,.uppy-DashboardTab-btn:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-DashboardTab-btn:active,[data-uppy-theme=dark] .uppy-DashboardTab-btn:focus{background-color:#525252}.uppy-DashboardTab-btn svg{display:inline-block;max-height:100%;max-width:100%;overflow:hidden;transition:transform .15s ease-in-out;vertical-align:text-top}[dir=ltr] .uppy-DashboardTab-inner{margin-right:10px}[dir=rtl] .uppy-DashboardTab-inner{margin-left:10px}.uppy-DashboardTab-inner{align-items:center;background-color:#fff;border-radius:8px;box-shadow:0 1px 1px #0000001a,0 1px 2px #0000001a,0 2px 3px #00000005;display:flex;height:32px;justify-content:center;width:32px}[dir=ltr] .uppy-size--md .uppy-DashboardTab-inner{margin-right:0}[dir=rtl] .uppy-size--md .uppy-DashboardTab-inner{margin-left:0}[data-uppy-theme=dark] .uppy-DashboardTab-inner{background-color:#323232;box-shadow:0 1px 1px #0003,0 1px 2px #0003,0 2px 3px #00000014}.uppy-DashboardTab-name{font-size:14px;font-weight:400}.uppy-size--md .uppy-DashboardTab-name{font-size:12px;line-height:15px;margin-bottom:0;margin-top:8px}.uppy-DashboardTab-iconMyDevice{color:#1269cf}[data-uppy-theme=dark] .uppy-DashboardTab-iconMyDevice{color:#02baf2}.uppy-DashboardTab-iconBox{color:#0061d5}[data-uppy-theme=dark] .uppy-DashboardTab-iconBox{color:#eaeaea}.uppy-DashboardTab-iconDropbox{color:#0061fe}[data-uppy-theme=dark] .uppy-DashboardTab-iconDropbox{color:#eaeaea}.uppy-DashboardTab-iconUnsplash{color:#111}[data-uppy-theme=dark] .uppy-DashboardTab-iconUnsplash{color:#eaeaea}.uppy-DashboardTab-iconWebdav{color:#111}[data-uppy-theme=dark] .uppy-DashboardTab-iconWebdav{color:#eaeaea}.uppy-DashboardTab-iconScreenRec{color:#2c3e50}[data-uppy-theme=dark] .uppy-DashboardTab-iconScreenRec{color:#eaeaea}.uppy-DashboardTab-iconAudio{color:#8030a3}[data-uppy-theme=dark] .uppy-DashboardTab-iconAudio{color:#bf6ee3}.uppy-Dashboard-input{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}.uppy-DashboardContent-bar{align-items:center;background-color:#fafafa;border-bottom:1px solid #eaeaea;display:flex;flex-shrink:0;height:40px;justify-content:space-between;padding:0 10px;position:relative;width:100%;z-index:1004}.uppy-size--md .uppy-DashboardContent-bar{height:50px;padding:0 15px}[data-uppy-theme=dark] .uppy-DashboardContent-bar{background-color:#1f1f1f;border-bottom:1px solid #333}.uppy-DashboardContent-title{font-size:12px;font-weight:500;left:0;line-height:40px;margin:auto;max-width:170px;overflow-x:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0;white-space:nowrap;width:100%}.uppy-size--md .uppy-DashboardContent-title{font-size:14px;line-height:50px;max-width:300px}[data-uppy-theme=dark] .uppy-DashboardContent-title{color:#eaeaea}[dir=ltr] .uppy-DashboardContent-back,[dir=ltr] .uppy-DashboardContent-save{margin-left:-6px}[dir=rtl] .uppy-DashboardContent-back,[dir=rtl] .uppy-DashboardContent-save{margin-right:-6px}.uppy-DashboardContent-back,.uppy-DashboardContent-save{-webkit-appearance:none;background:none;border:0;border-radius:3px;color:inherit;color:#1269cf;cursor:pointer;font-family:inherit;font-size:inherit;font-size:12px;font-weight:400;line-height:1;margin:0;padding:7px 6px}.uppy-DashboardContent-back:focus,.uppy-DashboardContent-save:focus{outline:none}.uppy-DashboardContent-back::-moz-focus-inner,.uppy-DashboardContent-save::-moz-focus-inner{border:0}.uppy-DashboardContent-back:hover,.uppy-DashboardContent-save:hover{color:#0e51a0}.uppy-DashboardContent-back:focus,.uppy-DashboardContent-save:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-DashboardContent-back:focus,[data-uppy-theme=dark] .uppy-DashboardContent-save:focus{background-color:#333}.uppy-size--md .uppy-DashboardContent-back,.uppy-size--md .uppy-DashboardContent-save{font-size:14px}[data-uppy-theme=dark] .uppy-DashboardContent-back,[data-uppy-theme=dark] .uppy-DashboardContent-save{color:#02baf2}[dir=ltr] .uppy-DashboardContent-addMore{margin-right:-5px}[dir=rtl] .uppy-DashboardContent-addMore{margin-left:-5px}.uppy-DashboardContent-addMore{-webkit-appearance:none;background:none;border:0;border-radius:3px;color:inherit;color:#1269cf;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:500;height:29px;line-height:1;margin:0;padding:7px 8px;width:29px}.uppy-DashboardContent-addMore:focus{outline:none}.uppy-DashboardContent-addMore::-moz-focus-inner{border:0}.uppy-DashboardContent-addMore:hover{color:#0e51a0}.uppy-DashboardContent-addMore:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-DashboardContent-addMore:focus{background-color:#333}[dir=ltr] .uppy-size--md .uppy-DashboardContent-addMore{margin-right:-8px}[dir=rtl] .uppy-size--md .uppy-DashboardContent-addMore{margin-left:-8px}.uppy-size--md .uppy-DashboardContent-addMore{font-size:14px;height:auto;width:auto}[data-uppy-theme=dark] .uppy-DashboardContent-addMore{color:#02baf2}[dir=ltr] .uppy-DashboardContent-addMore svg{margin-right:4px}[dir=rtl] .uppy-DashboardContent-addMore svg{margin-left:4px}.uppy-DashboardContent-addMore svg{vertical-align:initial}.uppy-size--md .uppy-DashboardContent-addMore svg{height:11px;width:11px}.uppy-DashboardContent-addMoreCaption{display:none}.uppy-size--md .uppy-DashboardContent-addMoreCaption{display:inline}.uppy-DashboardContent-panel{background-color:#f5f5f5;flex:1}.uppy-Dashboard-AddFilesPanel,.uppy-DashboardContent-panel{border-radius:5px;display:flex;flex-direction:column;inset:0;overflow:hidden;position:absolute;z-index:1005}.uppy-Dashboard-AddFilesPanel{background:#fafafa;background:linear-gradient(0deg,#fafafa 35%,#fafafad9);box-shadow:0 0 10px 5px #00000026}[data-uppy-theme=dark] .uppy-Dashboard-AddFilesPanel{background-color:#333;background-image:linear-gradient(0deg,#1f1f1f 35%,#1f1f1fd9)}.uppy-Dashboard--isAddFilesPanelVisible .uppy-Dashboard-files{filter:blur(2px)}.uppy-Dashboard-progress{bottom:0;height:12%;left:0;position:absolute;width:100%}.uppy-Dashboard-progressBarContainer.is-active{height:100%;left:0;position:absolute;top:0;width:100%;z-index:1004}.uppy-Dashboard-filesContainer{flex:1;margin:0;overflow-y:hidden;position:relative}.uppy-Dashboard-filesContainer:after{clear:both;content:"";display:table}.uppy-Dashboard-files{flex:1;margin:0;overflow-y:auto;padding:0 0 10px;-webkit-overflow-scrolling:touch}.uppy-size--md .uppy-Dashboard-files{padding-top:10px}.uppy-Dashboard--singleFile .uppy-Dashboard-filesInner{align-items:center;display:flex;height:100%;justify-content:center}.uppy-Dashboard-dropFilesHereHint{align-items:center;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath fill='%231269CF' d='M24 1v1C11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22S36.15 2 24 2zm0 0V0c13.254 0 24 10.746 24 24S37.254 48 24 48 0 37.254 0 24 10.746 0 24 0zm7.707 19.293a.999.999 0 1 1-1.414 1.414L25 16.414V34a1 1 0 1 1-2 0V16.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E");background-position:50% 50%;background-repeat:no-repeat;border:1px dashed #1269cf;border-radius:3px;color:#757575;display:flex;font-size:16px;justify-content:center;inset:7px;padding-top:90px;position:absolute;text-align:center;visibility:hidden;z-index:2000}[data-uppy-theme=dark] .uppy-Dashboard-dropFilesHereHint{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath fill='%2302BAF2' d='M24 1v1C11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22S36.15 2 24 2zm0 0V0c13.254 0 24 10.746 24 24S37.254 48 24 48 0 37.254 0 24 10.746 0 24 0zm7.707 19.293a.999.999 0 1 1-1.414 1.414L25 16.414V34a1 1 0 1 1-2 0V16.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E");border-color:#02baf2;color:#bbb}.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-dropFilesHereHint{pointer-events:none;visibility:visible}.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-files,.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-progressindicators,.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-serviceMsg,.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-DashboardContent-bar{opacity:.15}.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-AddFiles{opacity:.03}.uppy-Dashboard-AddFiles-title{color:#000;font-size:17px;font-weight:500;line-height:1.35;margin-bottom:5px;margin-top:15px;padding:0 15px;text-align:inline-start;width:100%}.uppy-size--md .uppy-Dashboard-AddFiles-title{font-size:21px;font-weight:400;margin-top:5px;max-width:480px;padding:0 35px;text-align:center}[data-uppy-num-acquirers="0"] .uppy-Dashboard-AddFiles-title{text-align:center}[data-uppy-theme=dark] .uppy-Dashboard-AddFiles-title{color:#eaeaea}.uppy-Dashboard-AddFiles-title button{font-weight:500}.uppy-size--md .uppy-Dashboard-AddFiles-title button{font-weight:400}.uppy-Dashboard-note{color:#757575;font-size:14px;line-height:1.25;margin:auto;max-width:350px;padding:0 15px;text-align:center}.uppy-size--md .uppy-Dashboard-note{line-height:1.35;max-width:600px}[data-uppy-theme=dark] .uppy-Dashboard-note{color:#cfcfcf}a.uppy-Dashboard-poweredBy{color:#939393;display:inline-block;font-size:11px;margin-top:8px;text-align:center;text-decoration:none}.uppy-Dashboard-poweredByIcon{margin-left:1px;margin-right:1px;opacity:.9;position:relative;top:1px;vertical-align:text-top;fill:none;stroke:#939393}.uppy-Dashboard-Item-previewIcon{height:25px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:25px;z-index:100}.uppy-size--md .uppy-Dashboard-Item-previewIcon{height:38px;width:38px}.uppy-Dashboard-Item-previewIcon svg{height:100%;width:100%}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-previewIcon{height:100%;max-height:60%;max-width:60%;width:100%}.uppy-Dashboard-Item-previewIconWrap{height:76px;max-height:75%;position:relative}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-previewIconWrap{height:100%;width:100%}.uppy-Dashboard-Item-previewIconBg{filter:drop-shadow(rgba(0,0,0,.1) 0 1px 1px);height:100%;width:100%}.uppy-Dashboard-upload{height:50px;position:relative;width:50px}.uppy-size--md .uppy-Dashboard-upload{height:60px;width:60px}.uppy-Dashboard-upload .uppy-c-icon{position:relative;top:1px;width:50%}[dir=ltr] .uppy-Dashboard-uploadCount{right:-12px}[dir=rtl] .uppy-Dashboard-uploadCount{left:-12px}.uppy-Dashboard-uploadCount{background-color:#1bb240;border-radius:50%;color:#fff;font-size:8px;height:16px;line-height:16px;position:absolute;top:-12px;width:16px}.uppy-size--md .uppy-Dashboard-uploadCount{font-size:9px;height:18px;line-height:18px;width:18px}`;
var uy = Object.defineProperty, py = Object.getOwnPropertyDescriptor, $l = (r) => {
  throw TypeError(r);
}, ct = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? py(e, t) : e, n = r.length - 1, a; n >= 0; n--)
    (a = r[n]) && (o = (i ? a(e, t, o) : a(o)) || o);
  return i && o && uy(e, t, o), o;
}, ql = (r, e, t) => e.has(r) || $l("Cannot " + t), dy = (r, e, t) => (ql(r, e, "read from private field"), t ? t.call(r) : e.get(r)), cy = (r, e, t) => e.has(r) ? $l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), hy = (r, e, t, i) => (ql(r, e, "write to private field"), e.set(r, t), t), pi;
let Ve = class extends ru {
  constructor() {
    super(), cy(this, pi), this.endpoint = "", this.selector = "drag-drop-area", this.chunkSize = 52428800, this.maxSize = 1024 * 1024 * 1024 * 25, this.resumable = !1, this.height = 360, this.width = 640, this.consumeContext(iu, (r) => {
      hy(this, pi, r);
    });
  }
  render() {
    return Fe`
                <div class="uppy" id="${this.selector}"></div>
            `;
  }
  onUploadSuccess(r, e) {
    const t = new CustomEvent("upload-success", {
      detail: {
        file: r,
        response: e
      }
    });
    this.dispatchEvent(t);
  }
  onAfterResponse(r, e) {
    return new Promise((t) => {
      const i = new CustomEvent("after-response", {
        detail: {
          request: r,
          response: e
        }
      });
      this.dispatchEvent(i), t();
    });
  }
  onBeforeRequest(r, e) {
    return new Promise(async (t) => {
      const i = await dy(this, pi)?.getLatestToken();
      r.setHeader("Authorization", `Bearer ${i}`);
      const o = new CustomEvent("before-request", {
        detail: {
          request: r,
          file: e
        }
      });
      this.dispatchEvent(o), t();
    });
  }
  firstUpdated(r) {
    new mi({
      debug: !1,
      autoProceed: !1,
      allowMultipleUploadBatches: !1,
      restrictions: {
        maxFileSize: this.maxSize,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ["video/*"]
      }
    }).use(bl, {
      target: this.uppyElement,
      inline: !0,
      height: this.height,
      width: this.width,
      singleFileFullScreen: !0,
      proudlyDisplayPoweredByUppy: !1
    }).use(jl, {
      endpoint: this.endpoint,
      chunkSize: this.chunkSize,
      onAfterResponse: (t, i) => this.onAfterResponse(t, i),
      onBeforeRequest: (t, i) => this.onBeforeRequest(t, i),
      // @ts-ignore
      canStoreURLs: this.resumable,
      removeFingerprintOnSuccess: !this.resumable
    }).on("upload-success", (t, i) => this.onUploadSuccess(t, i));
  }
};
pi = /* @__PURE__ */ new WeakMap();
Ve.styles = [xo(ly), xo(sy), Yo`
        .uppy-Dashboard-browse {
            color: #2bc37c;
        }

        .uppy-Dashboard-browse:hover {
            border-bottom: 1px solid #2bc37c;
        }
    `];
ct([
  Me()
], Ve.prototype, "endpoint", 2);
ct([
  nu(".uppy")
], Ve.prototype, "uppyElement", 2);
ct([
  Me()
], Ve.prototype, "chunkSize", 2);
ct([
  Me()
], Ve.prototype, "maxSize", 2);
ct([
  Me()
], Ve.prototype, "resumable", 2);
ct([
  Me()
], Ve.prototype, "height", 2);
ct([
  Me()
], Ve.prototype, "width", 2);
Ve = ct([
  Zo("uppy-upload")
], Ve);
var fy = Object.defineProperty, yy = Object.getOwnPropertyDescriptor, bi = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? yy(e, t) : e, n = r.length - 1, a; n >= 0; n--)
    (a = r[n]) && (o = (i ? a(e, t, o) : a(o)) || o);
  return i && o && fy(e, t, o), o;
};
let Gt = class extends hs {
  constructor() {
    super(...arguments), this.type = "info", this.hideIcon = !1;
  }
  icon() {
    if (!this.hideIcon)
      switch (this.type) {
        case "info":
          return "💡";
        case "warning":
          return "⚠️";
        case "danger":
          return "❌";
        case "positive":
          return "✅";
        default:
          return "💡";
      }
  }
  render() {
    return Fe`
            <div class="alert alert-${this.type}">
                ${this.icon() ? Fe`
                            <div class="alert-icon">${this.icon()}</div>
                        ` : zt}
                <div class="alert-content">
                    ${this.headline ? Fe`
                                <p class="alert-heading">${this.headline}</p>
                            ` : zt}
                    <slot name="content"></slot>
                </div>
            </div>`;
  }
};
Gt.styles = [
  _s,
  Yo`
                .alert {
                    padding: 0.5rem 1rem;
                    border: 1px solid transparent;
                    border-radius: 0.25rem;
                    display: flex;
                    margin-bottom: 1rem;
                }

                .alert-icon {
                    align-self: center;
                    margin-left: -0.25rem;
                    margin-right: 0.5rem;
                    font-size: 1.25rem;
                }

                .alert-info {
                    background-color: #d1ecf1;
                    border-color: #bee5eb;
                    color: #0c5460;
                }
                
                .alert-heading {
                    font-size: 1.25rem;
                    font-weight: bold;
                }

                .alert-warning {
                    background-color: var(--uui-color-warning-emphasis);
                    border-color: var(--uui-color-warning);
                    color: #856404;
                }

                .alert-positive {
                    background-color: #d4edda;
                    border-color: #c3e6cb;
                    color: #155724;
                }

                .alert-danger {
                    background-color: #f8d7da;
                    border-color: #f5c6cb;
                    color: #721c24;
                }
            `
];
bi([
  Me()
], Gt.prototype, "type", 2);
bi([
  Me()
], Gt.prototype, "hideIcon", 2);
bi([
  Me()
], Gt.prototype, "headline", 2);
Gt = bi([
  Zo("rr-alert")
], Gt);
//# sourceMappingURL=index.js.map
