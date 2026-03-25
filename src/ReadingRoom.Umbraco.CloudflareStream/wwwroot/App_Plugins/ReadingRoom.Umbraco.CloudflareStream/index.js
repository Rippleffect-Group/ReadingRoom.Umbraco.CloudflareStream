import { UmbElementMixin as Xu } from "@umbraco-cms/backoffice/element-api";
import { c as ns } from "./shared-DtVjuqT4.js";
import { UmbLitElement as Yu } from "@umbraco-cms/backoffice/lit-element";
import { UMB_AUTH_CONTEXT as Zu } from "@umbraco-cms/backoffice/auth";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vi = globalThis, Pn = vi.ShadowRoot && (vi.ShadyCSS === void 0 || vi.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, kn = Symbol(), ss = /* @__PURE__ */ new WeakMap();
let tl = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== kn) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Pn && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = ss.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && ss.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ti = (r) => new tl(typeof r == "string" ? r : r + "", void 0, kn), Fn = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, o, n) => i + ((s) => {
    if (s._$cssResult$ === !0) return s.cssText;
    if (typeof s == "number") return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[n + 1], r[0]);
  return new tl(t, r, kn);
}, Ju = (r, e) => {
  if (Pn) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), o = vi.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = t.cssText, r.appendChild(i);
  }
}, as = Pn ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Ti(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Qu, defineProperty: ep, getOwnPropertyDescriptor: tp, getOwnPropertyNames: rp, getOwnPropertySymbols: ip, getPrototypeOf: op } = Object, mt = globalThis, ls = mt.trustedTypes, np = ls ? ls.emptyScript : "", Wi = mt.reactiveElementPolyfillSupport, Ar = (r, e) => r, Ii = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? np : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Dn = (r, e) => !Qu(r, e), us = { attribute: !0, type: String, converter: Ii, reflect: !1, useDefault: !1, hasChanged: Dn };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), mt.litPropertyMetadata ?? (mt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Wt = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = us) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(e, i, t);
      o !== void 0 && ep(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: o, set: n } = tp(this.prototype, e) ?? { get() {
      return this[t];
    }, set(s) {
      this[t] = s;
    } };
    return { get: o, set(s) {
      const a = o == null ? void 0 : o.call(this);
      n == null || n.call(this, s), this.requestUpdate(e, a, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? us;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ar("elementProperties"))) return;
    const e = op(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ar("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ar("properties"))) {
      const t = this.properties, i = [...rp(t), ...ip(t)];
      for (const o of i) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, o] of t) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const o = this._$Eu(t, i);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const o of i) t.unshift(as(o));
    } else e !== void 0 && t.push(as(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ju(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    var n;
    const i = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, i);
    if (o !== void 0 && i.reflect === !0) {
      const s = (((n = i.converter) == null ? void 0 : n.toAttribute) !== void 0 ? i.converter : Ii).toAttribute(t, i.type);
      this._$Em = e, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var n, s;
    const i = this.constructor, o = i._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const a = i.getPropertyOptions(o), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((n = a.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? a.converter : Ii;
      this._$Em = o, this[o] = l.fromAttribute(t, a.type) ?? ((s = this._$Ej) == null ? void 0 : s.get(o)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    var o;
    if (e !== void 0) {
      const n = this.constructor, s = this[e];
      if (i ?? (i = n.getPropertyOptions(e)), !((i.hasChanged ?? Dn)(s, t) || i.useDefault && i.reflect && s === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(n._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: o, wrapped: n }, s) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, s ?? t ?? this[e]), n !== !0 || s !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, s] of this._$Ep) this[n] = s;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [n, s] of o) {
        const { wrapped: a } = s, l = this[n];
        a !== !0 || this._$AL.has(n) || l === void 0 || this.C(n, void 0, s, l);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((o) => {
        var n;
        return (n = o.hostUpdate) == null ? void 0 : n.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Wt.elementStyles = [], Wt.shadowRootOptions = { mode: "open" }, Wt[Ar("elementProperties")] = /* @__PURE__ */ new Map(), Wt[Ar("finalized")] = /* @__PURE__ */ new Map(), Wi == null || Wi({ ReactiveElement: Wt }), (mt.reactiveElementVersions ?? (mt.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Er = globalThis, Ci = Er.trustedTypes, ps = Ci ? Ci.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, rl = "$lit$", ct = `lit$${Math.random().toFixed(9).slice(2)}$`, il = "?" + ct, sp = `<${il}>`, Ut = document, Nr = () => Ut.createComment(""), Lr = (r) => r === null || typeof r != "object" && typeof r != "function", Tn = Array.isArray, ap = (r) => Tn(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Gi = `[ 	
\f\r]`, lr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ds = /-->/g, cs = />/g, vt = RegExp(`>|${Gi}(?:([^\\s"'>=/]+)(${Gi}*=${Gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), hs = /'/g, fs = /"/g, ol = /^(?:script|style|textarea|title)$/i, lp = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), De = lp(1), Qt = Symbol.for("lit-noChange"), ae = Symbol.for("lit-nothing"), ys = /* @__PURE__ */ new WeakMap(), Ct = Ut.createTreeWalker(Ut, 129);
function nl(r, e) {
  if (!Tn(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ps !== void 0 ? ps.createHTML(e) : e;
}
const up = (r, e) => {
  const t = r.length - 1, i = [];
  let o, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = lr;
  for (let a = 0; a < t; a++) {
    const l = r[a];
    let u, p, d = -1, h = 0;
    for (; h < l.length && (s.lastIndex = h, p = s.exec(l), p !== null); ) h = s.lastIndex, s === lr ? p[1] === "!--" ? s = ds : p[1] !== void 0 ? s = cs : p[2] !== void 0 ? (ol.test(p[2]) && (o = RegExp("</" + p[2], "g")), s = vt) : p[3] !== void 0 && (s = vt) : s === vt ? p[0] === ">" ? (s = o ?? lr, d = -1) : p[1] === void 0 ? d = -2 : (d = s.lastIndex - p[2].length, u = p[1], s = p[3] === void 0 ? vt : p[3] === '"' ? fs : hs) : s === fs || s === hs ? s = vt : s === ds || s === cs ? s = lr : (s = vt, o = void 0);
    const x = s === vt && r[a + 1].startsWith("/>") ? " " : "";
    n += s === lr ? l + sp : d >= 0 ? (i.push(u), l.slice(0, d) + rl + l.slice(d) + ct + x) : l + ct + (d === -2 ? a : x);
  }
  return [nl(r, n + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
let Ko = class sl {
  constructor({ strings: e, _$litType$: t }, i) {
    let o;
    this.parts = [];
    let n = 0, s = 0;
    const a = e.length - 1, l = this.parts, [u, p] = up(e, t);
    if (this.el = sl.createElement(u, i), Ct.currentNode = this.el.content, t === 2 || t === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (o = Ct.nextNode()) !== null && l.length < a; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const d of o.getAttributeNames()) if (d.endsWith(rl)) {
          const h = p[s++], x = o.getAttribute(d).split(ct), D = /([.?@])?(.*)/.exec(h);
          l.push({ type: 1, index: n, name: D[2], strings: x, ctor: D[1] === "." ? dp : D[1] === "?" ? cp : D[1] === "@" ? hp : $i }), o.removeAttribute(d);
        } else d.startsWith(ct) && (l.push({ type: 6, index: n }), o.removeAttribute(d));
        if (ol.test(o.tagName)) {
          const d = o.textContent.split(ct), h = d.length - 1;
          if (h > 0) {
            o.textContent = Ci ? Ci.emptyScript : "";
            for (let x = 0; x < h; x++) o.append(d[x], Nr()), Ct.nextNode(), l.push({ type: 2, index: ++n });
            o.append(d[h], Nr());
          }
        }
      } else if (o.nodeType === 8) if (o.data === il) l.push({ type: 2, index: n });
      else {
        let d = -1;
        for (; (d = o.data.indexOf(ct, d + 1)) !== -1; ) l.push({ type: 7, index: n }), d += ct.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const i = Ut.createElement("template");
    return i.innerHTML = e, i;
  }
};
function er(r, e, t = r, i) {
  var s, a;
  if (e === Qt) return e;
  let o = i !== void 0 ? (s = t._$Co) == null ? void 0 : s[i] : t._$Cl;
  const n = Lr(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== n && ((a = o == null ? void 0 : o._$AO) == null || a.call(o, !1), n === void 0 ? o = void 0 : (o = new n(r), o._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = o : t._$Cl = o), o !== void 0 && (e = er(r, o._$AS(r, e.values), o, i)), e;
}
let pp = class {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? Ut).importNode(t, !0);
    Ct.currentNode = o;
    let n = Ct.nextNode(), s = 0, a = 0, l = i[0];
    for (; l !== void 0; ) {
      if (s === l.index) {
        let u;
        l.type === 2 ? u = new In(n, n.nextSibling, this, e) : l.type === 1 ? u = new l.ctor(n, l.name, l.strings, this, e) : l.type === 6 && (u = new fp(n, this, e)), this._$AV.push(u), l = i[++a];
      }
      s !== (l == null ? void 0 : l.index) && (n = Ct.nextNode(), s++);
    }
    return Ct.currentNode = Ut, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}, In = class al {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, o) {
    this.type = 2, this._$AH = ae, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = er(this, e, t), Lr(e) ? e === ae || e == null || e === "" ? (this._$AH !== ae && this._$AR(), this._$AH = ae) : e !== this._$AH && e !== Qt && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ap(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== ae && Lr(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Ut.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var n;
    const { values: t, _$litType$: i } = e, o = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Ko.createElement(nl(i.h, i.h[0]), this.options)), i);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === o) this._$AH.p(t);
    else {
      const s = new pp(o, this), a = s.u(this.options);
      s.p(t), this.T(a), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = ys.get(e.strings);
    return t === void 0 && ys.set(e.strings, t = new Ko(e)), t;
  }
  k(e) {
    Tn(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, o = 0;
    for (const n of e) o === t.length ? t.push(i = new al(this.O(Nr()), this.O(Nr()), this, this.options)) : i = t[o], i._$AI(n), o++;
    o < t.length && (this._$AR(i && i._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}, $i = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, o, n) {
    this.type = 1, this._$AH = ae, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = ae;
  }
  _$AI(e, t = this, i, o) {
    const n = this.strings;
    let s = !1;
    if (n === void 0) e = er(this, e, t, 0), s = !Lr(e) || e !== this._$AH && e !== Qt, s && (this._$AH = e);
    else {
      const a = e;
      let l, u;
      for (e = n[0], l = 0; l < n.length - 1; l++) u = er(this, a[i + l], t, l), u === Qt && (u = this._$AH[l]), s || (s = !Lr(u) || u !== this._$AH[l]), u === ae ? e = ae : e !== ae && (e += (u ?? "") + n[l + 1]), this._$AH[l] = u;
    }
    s && !o && this.j(e);
  }
  j(e) {
    e === ae ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, dp = class extends $i {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === ae ? void 0 : e;
  }
}, cp = class extends $i {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== ae);
  }
}, hp = class extends $i {
  constructor(e, t, i, o, n) {
    super(e, t, i, o, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = er(this, e, t, 0) ?? ae) === Qt) return;
    const i = this._$AH, o = e === ae && i !== ae || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, n = e !== ae && (i === ae || o);
    o && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, fp = class {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    er(this, e);
  }
};
const Vi = Er.litHtmlPolyfillSupport;
Vi == null || Vi(Ko, In), (Er.litHtmlVersions ?? (Er.litHtmlVersions = [])).push("3.3.0");
const yp = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = i._$litPart$;
  if (o === void 0) {
    const n = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = o = new In(e.insertBefore(Nr(), n), n, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Et = globalThis;
let Zt = class extends Wt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = yp(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return Qt;
  }
};
var el;
Zt._$litElement$ = !0, Zt.finalized = !0, (el = Et.litElementHydrateSupport) == null || el.call(Et, { LitElement: Zt });
const Ki = Et.litElementPolyfillSupport;
Ki == null || Ki({ LitElement: Zt });
(Et.litElementVersions ?? (Et.litElementVersions = [])).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Cn = (r) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(r, e);
  }) : customElements.define(r, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mp = { attribute: !0, type: String, converter: Ii, reflect: !1, hasChanged: Dn }, gp = (r = mp, e, t) => {
  const { kind: i, metadata: o } = t;
  let n = globalThis.litPropertyMetadata.get(o);
  if (n === void 0 && globalThis.litPropertyMetadata.set(o, n = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), n.set(t.name, r), i === "accessor") {
    const { name: s } = t;
    return { set(a) {
      const l = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(s, l, r);
    }, init(a) {
      return a !== void 0 && this.C(s, void 0, r, a), a;
    } };
  }
  if (i === "setter") {
    const { name: s } = t;
    return function(a) {
      const l = this[s];
      e.call(this, a), this.requestUpdate(s, l, r);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function Re(r) {
  return (e, t) => typeof t == "object" ? gp(r, e, t) : ((i, o, n) => {
    const s = o.hasOwnProperty(n);
    return o.constructor.createProperty(n, i), s ? Object.getOwnPropertyDescriptor(o, n) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function lt(r) {
  return Re({ ...r, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bp = (r, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(r, e, t), t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function vp(r, e) {
  return (t, i, o) => {
    const n = (s) => {
      var a;
      return ((a = s.renderRoot) == null ? void 0 : a.querySelector(r)) ?? null;
    };
    return bp(t, i, { get() {
      return n(this);
    } });
  };
}
var ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ms = {};
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
var gs;
function wp() {
  if (gs) return ms;
  gs = 1;
  var r;
  return function(e) {
    (function(t) {
      var i = typeof globalThis == "object" ? globalThis : typeof ht == "object" ? ht : typeof self == "object" ? self : typeof this == "object" ? this : l(), o = n(e);
      typeof i.Reflect < "u" && (o = n(i.Reflect, o)), t(o, i), typeof i.Reflect > "u" && (i.Reflect = e);
      function n(u, p) {
        return function(d, h) {
          Object.defineProperty(u, d, { configurable: !0, writable: !0, value: h }), p && p(d, h);
        };
      }
      function s() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function a() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function l() {
        return s() || a();
      }
    })(function(t, i) {
      var o = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", s = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", a = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", l = typeof Object.create == "function", u = { __proto__: [] } instanceof Array, p = !l && !u, d = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: l ? function() {
          return Hi(/* @__PURE__ */ Object.create(null));
        } : u ? function() {
          return Hi({ __proto__: null });
        } : function() {
          return Hi({});
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
      }, h = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Hu(), D = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Wu(), O = typeof WeakMap == "function" ? WeakMap : Gu(), _ = n ? Symbol.for("@reflect-metadata:registry") : void 0, T = Lu(), m = ju(T);
      function w(b, v, k, $) {
        if (R(k)) {
          if (!Zn(b))
            throw new TypeError();
          if (!Jn(v))
            throw new TypeError();
          return C(b, v);
        } else {
          if (!Zn(b))
            throw new TypeError();
          if (!K(v))
            throw new TypeError();
          if (!K($) && !R($) && !V($))
            throw new TypeError();
          return V($) && ($ = void 0), k = We(k), ie(b, v, k, $);
        }
      }
      t("decorate", w);
      function S(b, v) {
        function k($, H) {
          if (!K($))
            throw new TypeError();
          if (!R(H) && !zu(H))
            throw new TypeError();
          F(b, v, $, H);
        }
        return k;
      }
      t("metadata", S);
      function P(b, v, k, $) {
        if (!K(k))
          throw new TypeError();
        return R($) || ($ = We($)), F(b, v, k, $);
      }
      t("defineMetadata", P);
      function A(b, v, k) {
        if (!K(v))
          throw new TypeError();
        return R(k) || (k = We(k)), le(b, v, k);
      }
      t("hasMetadata", A);
      function E(b, v, k) {
        if (!K(v))
          throw new TypeError();
        return R(k) || (k = We(k)), y(b, v, k);
      }
      t("hasOwnMetadata", E);
      function U(b, v, k) {
        if (!K(v))
          throw new TypeError();
        return R(k) || (k = We(k)), f(b, v, k);
      }
      t("getMetadata", U);
      function L(b, v, k) {
        if (!K(v))
          throw new TypeError();
        return R(k) || (k = We(k)), g(b, v, k);
      }
      t("getOwnMetadata", L);
      function ee(b, v) {
        if (!K(b))
          throw new TypeError();
        return R(v) || (v = We(v)), B(b, v);
      }
      t("getMetadataKeys", ee);
      function J(b, v) {
        if (!K(b))
          throw new TypeError();
        return R(v) || (v = We(v)), I(b, v);
      }
      t("getOwnMetadataKeys", J);
      function re(b, v, k) {
        if (!K(v))
          throw new TypeError();
        if (R(k) || (k = We(k)), !K(v))
          throw new TypeError();
        R(k) || (k = We(k));
        var $ = ar(
          v,
          k,
          /*Create*/
          !1
        );
        return R($) ? !1 : $.OrdinaryDeleteMetadata(b, v, k);
      }
      t("deleteMetadata", re);
      function C(b, v) {
        for (var k = b.length - 1; k >= 0; --k) {
          var $ = b[k], H = $(v);
          if (!R(H) && !V(H)) {
            if (!Jn(H))
              throw new TypeError();
            v = H;
          }
        }
        return v;
      }
      function ie(b, v, k, $) {
        for (var H = b.length - 1; H >= 0; --H) {
          var me = b[H], fe = me(v, k, $);
          if (!R(fe) && !V(fe)) {
            if (!K(fe))
              throw new TypeError();
            $ = fe;
          }
        }
        return $;
      }
      function le(b, v, k) {
        var $ = y(b, v, k);
        if ($)
          return !0;
        var H = qi(v);
        return V(H) ? !1 : le(b, H, k);
      }
      function y(b, v, k) {
        var $ = ar(
          v,
          k,
          /*Create*/
          !1
        );
        return R($) ? !1 : bt($.OrdinaryHasOwnMetadata(b, v, k));
      }
      function f(b, v, k) {
        var $ = y(b, v, k);
        if ($)
          return g(b, v, k);
        var H = qi(v);
        if (!V(H))
          return f(b, H, k);
      }
      function g(b, v, k) {
        var $ = ar(
          v,
          k,
          /*Create*/
          !1
        );
        if (!R($))
          return $.OrdinaryGetOwnMetadata(b, v, k);
      }
      function F(b, v, k, $) {
        var H = ar(
          k,
          $,
          /*Create*/
          !0
        );
        H.OrdinaryDefineOwnMetadata(b, v, k, $);
      }
      function B(b, v) {
        var k = I(b, v), $ = qi(b);
        if ($ === null)
          return k;
        var H = B($, v);
        if (H.length <= 0)
          return k;
        if (k.length <= 0)
          return H;
        for (var me = new D(), fe = [], Y = 0, z = k; Y < z.length; Y++) {
          var N = z[Y], j = me.has(N);
          j || (me.add(N), fe.push(N));
        }
        for (var q = 0, Z = H; q < Z.length; q++) {
          var N = Z[q], j = me.has(N);
          j || (me.add(N), fe.push(N));
        }
        return fe;
      }
      function I(b, v) {
        var k = ar(
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
      function ce(b) {
        return typeof b == "symbol";
      }
      function K(b) {
        return typeof b == "object" ? b !== null : typeof b == "function";
      }
      function ye(b, v) {
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
        var k = "string", $ = Qn(b, s);
        if ($ !== void 0) {
          var H = $.call(b, k);
          if (K(H))
            throw new TypeError();
          return H;
        }
        return Yn(b);
      }
      function Yn(b, v) {
        var k, $;
        {
          var H = b.toString;
          if (oi(H)) {
            var $ = H.call(b);
            if (!K($))
              return $;
          }
          var k = b.valueOf;
          if (oi(k)) {
            var $ = k.call(b);
            if (!K($))
              return $;
          }
        }
        throw new TypeError();
      }
      function bt(b) {
        return !!b;
      }
      function $u(b) {
        return "" + b;
      }
      function We(b) {
        var v = ye(b);
        return ce(v) ? v : $u(v);
      }
      function Zn(b) {
        return Array.isArray ? Array.isArray(b) : b instanceof Object ? b instanceof Array : Object.prototype.toString.call(b) === "[object Array]";
      }
      function oi(b) {
        return typeof b == "function";
      }
      function Jn(b) {
        return typeof b == "function";
      }
      function zu(b) {
        switch (W(b)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function ji(b, v) {
        return b === v || b !== b && v !== v;
      }
      function Qn(b, v) {
        var k = b[v];
        if (k != null) {
          if (!oi(k))
            throw new TypeError();
          return k;
        }
      }
      function es(b) {
        var v = Qn(b, a);
        if (!oi(v))
          throw new TypeError();
        var k = v.call(b);
        if (!K(k))
          throw new TypeError();
        return k;
      }
      function ts(b) {
        return b.value;
      }
      function rs(b) {
        var v = b.next();
        return v.done ? !1 : v;
      }
      function is(b) {
        var v = b.return;
        v && v.call(b);
      }
      function qi(b) {
        var v = Object.getPrototypeOf(b);
        if (typeof b != "function" || b === h || v !== h)
          return v;
        var k = b.prototype, $ = k && Object.getPrototypeOf(k);
        if ($ == null || $ === Object.prototype)
          return v;
        var H = $.constructor;
        return typeof H != "function" || H === b ? v : H;
      }
      function Nu() {
        var b;
        !R(_) && typeof i.Reflect < "u" && !(_ in i.Reflect) && typeof i.Reflect.defineMetadata == "function" && (b = qu(i.Reflect));
        var v, k, $, H = new O(), me = {
          registerProvider: fe,
          getProvider: z,
          setProvider: j
        };
        return me;
        function fe(q) {
          if (!Object.isExtensible(me))
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
              $ === void 0 && ($ = new D()), $.add(q);
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
              if (!R($))
                for (var ne = es($); ; ) {
                  var pe = rs(ne);
                  if (!pe)
                    return;
                  var ze = ts(pe);
                  if (ze.isProviderFor(q, Z))
                    return is(ne), ze;
                }
            }
          }
          if (!R(b) && b.isProviderFor(q, Z))
            return b;
        }
        function z(q, Z) {
          var ne = H.get(q), pe;
          return R(ne) || (pe = ne.get(Z)), R(pe) && (pe = Y(q, Z), R(pe) || (R(ne) && (ne = new x(), H.set(q, ne)), ne.set(Z, pe))), pe;
        }
        function N(q) {
          if (R(q))
            throw new TypeError();
          return v === q || k === q || !R($) && $.has(q);
        }
        function j(q, Z, ne) {
          if (!N(ne))
            throw new Error("Metadata provider not registered.");
          var pe = z(q, Z);
          if (pe !== ne) {
            if (!R(pe))
              return !1;
            var ze = H.get(q);
            R(ze) && (ze = new x(), H.set(q, ze)), ze.set(Z, ne);
          }
          return !0;
        }
      }
      function Lu() {
        var b;
        return !R(_) && K(i.Reflect) && Object.isExtensible(i.Reflect) && (b = i.Reflect[_]), R(b) && (b = Nu()), !R(_) && K(i.Reflect) && Object.isExtensible(i.Reflect) && Object.defineProperty(i.Reflect, _, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: b
        }), b;
      }
      function ju(b) {
        var v = new O(), k = {
          isProviderFor: function(N, j) {
            var q = v.get(N);
            return R(q) ? !1 : q.has(j);
          },
          OrdinaryDefineOwnMetadata: fe,
          OrdinaryHasOwnMetadata: H,
          OrdinaryGetOwnMetadata: me,
          OrdinaryOwnMetadataKeys: Y,
          OrdinaryDeleteMetadata: z
        };
        return T.registerProvider(k), k;
        function $(N, j, q) {
          var Z = v.get(N), ne = !1;
          if (R(Z)) {
            if (!q)
              return;
            Z = new x(), v.set(N, Z), ne = !0;
          }
          var pe = Z.get(j);
          if (R(pe)) {
            if (!q)
              return;
            if (pe = new x(), Z.set(j, pe), !b.setProvider(N, j, k))
              throw Z.delete(j), ne && v.delete(N), new Error("Wrong provider for target.");
          }
          return pe;
        }
        function H(N, j, q) {
          var Z = $(
            j,
            q,
            /*Create*/
            !1
          );
          return R(Z) ? !1 : bt(Z.has(N));
        }
        function me(N, j, q) {
          var Z = $(
            j,
            q,
            /*Create*/
            !1
          );
          if (!R(Z))
            return Z.get(N);
        }
        function fe(N, j, q, Z) {
          var ne = $(
            q,
            Z,
            /*Create*/
            !0
          );
          ne.set(N, j);
        }
        function Y(N, j) {
          var q = [], Z = $(
            N,
            j,
            /*Create*/
            !1
          );
          if (R(Z))
            return q;
          for (var ne = Z.keys(), pe = es(ne), ze = 0; ; ) {
            var os = rs(pe);
            if (!os)
              return q.length = ze, q;
            var Vu = ts(os);
            try {
              q[ze] = Vu;
            } catch (Ku) {
              try {
                is(pe);
              } finally {
                throw Ku;
              }
            }
            ze++;
          }
        }
        function z(N, j, q) {
          var Z = $(
            j,
            q,
            /*Create*/
            !1
          );
          if (R(Z) || !Z.delete(N))
            return !1;
          if (Z.size === 0) {
            var ne = v.get(j);
            R(ne) || (ne.delete(q), ne.size === 0 && v.delete(ne));
          }
          return !0;
        }
      }
      function qu(b) {
        var v = b.defineMetadata, k = b.hasOwnMetadata, $ = b.getOwnMetadata, H = b.getOwnMetadataKeys, me = b.deleteMetadata, fe = new O(), Y = {
          isProviderFor: function(z, N) {
            var j = fe.get(z);
            return !R(j) && j.has(N) ? !0 : H(z, N).length ? (R(j) && (j = new D(), fe.set(z, j)), j.add(N), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: v,
          OrdinaryHasOwnMetadata: k,
          OrdinaryGetOwnMetadata: $,
          OrdinaryOwnMetadataKeys: H,
          OrdinaryDeleteMetadata: me
        };
        return Y;
      }
      function ar(b, v, k) {
        var $ = T.getProvider(b, v);
        if (!R($))
          return $;
        if (k) {
          if (T.setProvider(b, v, m))
            return m;
          throw new Error("Illegal state.");
        }
      }
      function Hu() {
        var b = {}, v = [], k = (
          /** @class */
          function() {
            function Y(z, N, j) {
              this._index = 0, this._keys = z, this._values = N, this._selector = j;
            }
            return Y.prototype["@@iterator"] = function() {
              return this;
            }, Y.prototype[a] = function() {
              return this;
            }, Y.prototype.next = function() {
              var z = this._index;
              if (z >= 0 && z < this._keys.length) {
                var N = this._selector(this._keys[z], this._values[z]);
                return z + 1 >= this._keys.length ? (this._index = -1, this._keys = v, this._values = v) : this._index++, { value: N, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, Y.prototype.throw = function(z) {
              throw this._index >= 0 && (this._index = -1, this._keys = v, this._values = v), z;
            }, Y.prototype.return = function(z) {
              return this._index >= 0 && (this._index = -1, this._keys = v, this._values = v), { value: z, done: !0 };
            }, Y;
          }()
        ), $ = (
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
            }), Y.prototype.has = function(z) {
              return this._find(
                z,
                /*insert*/
                !1
              ) >= 0;
            }, Y.prototype.get = function(z) {
              var N = this._find(
                z,
                /*insert*/
                !1
              );
              return N >= 0 ? this._values[N] : void 0;
            }, Y.prototype.set = function(z, N) {
              var j = this._find(
                z,
                /*insert*/
                !0
              );
              return this._values[j] = N, this;
            }, Y.prototype.delete = function(z) {
              var N = this._find(
                z,
                /*insert*/
                !1
              );
              if (N >= 0) {
                for (var j = this._keys.length, q = N + 1; q < j; q++)
                  this._keys[q - 1] = this._keys[q], this._values[q - 1] = this._values[q];
                return this._keys.length--, this._values.length--, ji(z, this._cacheKey) && (this._cacheKey = b, this._cacheIndex = -2), !0;
              }
              return !1;
            }, Y.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = b, this._cacheIndex = -2;
            }, Y.prototype.keys = function() {
              return new k(this._keys, this._values, H);
            }, Y.prototype.values = function() {
              return new k(this._keys, this._values, me);
            }, Y.prototype.entries = function() {
              return new k(this._keys, this._values, fe);
            }, Y.prototype["@@iterator"] = function() {
              return this.entries();
            }, Y.prototype[a] = function() {
              return this.entries();
            }, Y.prototype._find = function(z, N) {
              if (!ji(this._cacheKey, z)) {
                this._cacheIndex = -1;
                for (var j = 0; j < this._keys.length; j++)
                  if (ji(this._keys[j], z)) {
                    this._cacheIndex = j;
                    break;
                  }
              }
              return this._cacheIndex < 0 && N && (this._cacheIndex = this._keys.length, this._keys.push(z), this._values.push(void 0)), this._cacheIndex;
            }, Y;
          }()
        );
        return $;
        function H(Y, z) {
          return Y;
        }
        function me(Y, z) {
          return z;
        }
        function fe(Y, z) {
          return [Y, z];
        }
      }
      function Wu() {
        var b = (
          /** @class */
          function() {
            function v() {
              this._map = new x();
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
            }, v.prototype[a] = function() {
              return this.keys();
            }, v;
          }()
        );
        return b;
      }
      function Gu() {
        var b = 16, v = d.create(), k = $();
        return (
          /** @class */
          function() {
            function z() {
              this._key = $();
            }
            return z.prototype.has = function(N) {
              var j = H(
                N,
                /*create*/
                !1
              );
              return j !== void 0 ? d.has(j, this._key) : !1;
            }, z.prototype.get = function(N) {
              var j = H(
                N,
                /*create*/
                !1
              );
              return j !== void 0 ? d.get(j, this._key) : void 0;
            }, z.prototype.set = function(N, j) {
              var q = H(
                N,
                /*create*/
                !0
              );
              return q[this._key] = j, this;
            }, z.prototype.delete = function(N) {
              var j = H(
                N,
                /*create*/
                !1
              );
              return j !== void 0 ? delete j[this._key] : !1;
            }, z.prototype.clear = function() {
              this._key = $();
            }, z;
          }()
        );
        function $() {
          var z;
          do
            z = "@@WeakMap@@" + Y();
          while (d.has(v, z));
          return v[z] = !0, z;
        }
        function H(z, N) {
          if (!o.call(z, k)) {
            if (!N)
              return;
            Object.defineProperty(z, k, { value: d.create() });
          }
          return z[k];
        }
        function me(z, N) {
          for (var j = 0; j < N; ++j)
            z[j] = Math.random() * 255 | 0;
          return z;
        }
        function fe(z) {
          if (typeof Uint8Array == "function") {
            var N = new Uint8Array(z);
            return typeof crypto < "u" ? crypto.getRandomValues(N) : typeof msCrypto < "u" ? msCrypto.getRandomValues(N) : me(N, z), N;
          }
          return me(new Array(z), z);
        }
        function Y() {
          var z = fe(b);
          z[6] = z[6] & 79 | 64, z[8] = z[8] & 191 | 128;
          for (var N = "", j = 0; j < b; ++j) {
            var q = z[j];
            (j === 4 || j === 6 || j === 8) && (N += "-"), q < 16 && (N += "0"), N += q.toString(16).toLowerCase();
          }
          return N;
        }
      }
      function Hi(b) {
        return b.__ = void 0, delete b.__, b;
      }
    });
  }(r || (r = {})), ms;
}
wp();
var X;
(function(r) {
  r[r.PLAIN_TO_CLASS = 0] = "PLAIN_TO_CLASS", r[r.CLASS_TO_PLAIN = 1] = "CLASS_TO_PLAIN", r[r.CLASS_TO_CLASS = 2] = "CLASS_TO_CLASS";
})(X || (X = {}));
var _p = (
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
      i && (o = Array.from(i.values()).filter(function(d) {
        return d.propertyName !== void 0;
      }));
      for (var n = [], s = 0, a = this.getAncestors(t); s < a.length; s++) {
        var l = a[s], u = e.get(l);
        if (u) {
          var p = Array.from(u.values()).filter(function(d) {
            return d.propertyName !== void 0;
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
      for (var s = 0, a = this.getAncestors(t); s < a.length; s++) {
        var l = a[s], u = e.get(l);
        if (u) {
          var p = u.get(i);
          if (p)
            return p;
        }
      }
    }, r.prototype.findMetadatas = function(e, t, i) {
      var o = e.get(t), n;
      o && (n = o.get(i));
      for (var s = [], a = 0, l = this.getAncestors(t); a < l.length; a++) {
        var u = l[a], p = e.get(u);
        p && p.has(i) && s.push.apply(s, p.get(i));
      }
      return s.slice().reverse().concat((n || []).slice().reverse());
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
), ke = new _p();
function xp() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof global < "u")
    return global;
  if (typeof window < "u")
    return window;
  if (typeof self < "u")
    return self;
}
function Sp(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var bs = function(r, e, t) {
  if (t || arguments.length === 2) for (var i = 0, o = e.length, n; i < o; i++)
    (n || !(i in e)) && (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
  return r.concat(n || Array.prototype.slice.call(e));
};
function Pp(r) {
  var e = new r();
  return !(e instanceof Set) && !("push" in e) ? [] : e;
}
var Lt = (
  /** @class */
  function() {
    function r(e, t) {
      this.transformationType = e, this.options = t, this.recursionStack = /* @__PURE__ */ new Set();
    }
    return r.prototype.transform = function(e, t, i, o, n, s) {
      var a = this;
      if (s === void 0 && (s = 0), Array.isArray(t) || t instanceof Set) {
        var l = o && this.transformationType === X.PLAIN_TO_CLASS ? Pp(o) : [];
        return t.forEach(function(_, T) {
          var m = e ? e[T] : void 0;
          if (!a.options.enableCircularCheck || !a.isCircular(_)) {
            var w = void 0;
            if (typeof i != "function" && i && i.options && i.options.discriminator && i.options.discriminator.property && i.options.discriminator.subTypes) {
              if (a.transformationType === X.PLAIN_TO_CLASS) {
                w = i.options.discriminator.subTypes.find(function(E) {
                  return E.name === _[i.options.discriminator.property];
                });
                var S = { newObject: l, object: _, property: void 0 }, P = i.typeFunction(S);
                w === void 0 ? w = P : w = w.value, i.options.keepDiscriminatorProperty || delete _[i.options.discriminator.property];
              }
              a.transformationType === X.CLASS_TO_CLASS && (w = _.constructor), a.transformationType === X.CLASS_TO_PLAIN && (_[i.options.discriminator.property] = i.options.discriminator.subTypes.find(function(E) {
                return E.value === _.constructor;
              }).name);
            } else
              w = i;
            var A = a.transform(m, _, w, void 0, _ instanceof Map, s + 1);
            l instanceof Set ? l.add(A) : l.push(A);
          } else a.transformationType === X.CLASS_TO_CLASS && (l instanceof Set ? l.add(_) : l.push(_));
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
        if (xp().Buffer && (i === Buffer || t instanceof Buffer) && !n)
          return t == null ? t : Buffer.from(t);
        if (Sp(t) && !n)
          return new Promise(function(_, T) {
            t.then(function(m) {
              return _(a.transform(void 0, m, i, void 0, void 0, s + 1));
            }, T);
          });
        if (!n && t !== null && typeof t == "object" && typeof t.then == "function")
          return t;
        if (typeof t == "object" && t !== null) {
          !i && t.constructor !== Object && (!Array.isArray(t) && t.constructor === Array || (i = t.constructor)), !i && e && (i = e.constructor), this.options.enableCircularCheck && this.recursionStack.add(t);
          var u = this.getKeys(i, t, n), p = e || {};
          !e && (this.transformationType === X.PLAIN_TO_CLASS || this.transformationType === X.CLASS_TO_CLASS) && (n ? p = /* @__PURE__ */ new Map() : i ? p = new i() : p = {});
          for (var d = function(_) {
            if (_ === "__proto__" || _ === "constructor")
              return "continue";
            var T = _, m = _, w = _;
            if (!h.options.ignoreDecorators && i) {
              if (h.transformationType === X.PLAIN_TO_CLASS) {
                var S = ke.findExposeMetadataByCustomName(i, _);
                S && (w = S.propertyName, m = S.propertyName);
              } else if (h.transformationType === X.CLASS_TO_PLAIN || h.transformationType === X.CLASS_TO_CLASS) {
                var S = ke.findExposeMetadata(i, _);
                S && S.options && S.options.name && (m = S.options.name);
              }
            }
            var P = void 0;
            h.transformationType === X.PLAIN_TO_CLASS ? P = t[T] : t instanceof Map ? P = t.get(T) : t[T] instanceof Function ? P = t[T]() : P = t[T];
            var A = void 0, E = P instanceof Map;
            if (i && n)
              A = i;
            else if (i) {
              var U = ke.findTypeMetadata(i, w);
              if (U) {
                var L = { newObject: p, object: t, property: w }, ee = U.typeFunction ? U.typeFunction(L) : U.reflectedType;
                U.options && U.options.discriminator && U.options.discriminator.property && U.options.discriminator.subTypes ? t[T] instanceof Array ? A = U : (h.transformationType === X.PLAIN_TO_CLASS && (A = U.options.discriminator.subTypes.find(function(f) {
                  if (P && P instanceof Object && U.options.discriminator.property in P)
                    return f.name === P[U.options.discriminator.property];
                }), A === void 0 ? A = ee : A = A.value, U.options.keepDiscriminatorProperty || P && P instanceof Object && U.options.discriminator.property in P && delete P[U.options.discriminator.property]), h.transformationType === X.CLASS_TO_CLASS && (A = P.constructor), h.transformationType === X.CLASS_TO_PLAIN && P && (P[U.options.discriminator.property] = U.options.discriminator.subTypes.find(function(f) {
                  return f.value === P.constructor;
                }).name)) : A = ee, E = E || U.reflectedType === Map;
              } else if (h.options.targetMaps)
                h.options.targetMaps.filter(function(f) {
                  return f.target === i && !!f.properties[w];
                }).forEach(function(f) {
                  return A = f.properties[w];
                });
              else if (h.options.enableImplicitConversion && h.transformationType === X.PLAIN_TO_CLASS) {
                var J = Reflect.getMetadata("design:type", i.prototype, w);
                J && (A = J);
              }
            }
            var re = Array.isArray(t[T]) ? h.getReflectedType(i, w) : void 0, C = e ? e[T] : void 0;
            if (p.constructor.prototype) {
              var ie = Object.getOwnPropertyDescriptor(p.constructor.prototype, m);
              if ((h.transformationType === X.PLAIN_TO_CLASS || h.transformationType === X.CLASS_TO_CLASS) && // eslint-disable-next-line @typescript-eslint/unbound-method
              (ie && !ie.set || p[m] instanceof Function))
                return "continue";
            }
            if (!h.options.enableCircularCheck || !h.isCircular(P)) {
              var le = h.transformationType === X.PLAIN_TO_CLASS ? m : _, y = void 0;
              h.transformationType === X.CLASS_TO_PLAIN ? (y = t[le], y = h.applyCustomTransformations(y, i, le, t, h.transformationType), y = t[le] === y ? P : y, y = h.transform(C, y, A, re, E, s + 1)) : P === void 0 && h.options.exposeDefaultValues ? y = p[m] : (y = h.transform(C, P, A, re, E, s + 1), y = h.applyCustomTransformations(y, i, le, t, h.transformationType)), (y !== void 0 || h.options.exposeUnsetFields) && (p instanceof Map ? p.set(m, y) : p[m] = y);
            } else if (h.transformationType === X.CLASS_TO_CLASS) {
              var y = P;
              y = h.applyCustomTransformations(y, i, _, t, h.transformationType), (y !== void 0 || h.options.exposeUnsetFields) && (p instanceof Map ? p.set(m, y) : p[m] = y);
            }
          }, h = this, x = 0, D = u; x < D.length; x++) {
            var O = D[x];
            d(O);
          }
          return this.options.enableCircularCheck && this.recursionStack.delete(t), p;
        } else
          return t;
      }
    }, r.prototype.applyCustomTransformations = function(e, t, i, o, n) {
      var s = this, a = ke.findTransformMetadatas(t, i, this.transformationType);
      return this.options.version !== void 0 && (a = a.filter(function(l) {
        return l.options ? s.checkVersion(l.options.since, l.options.until) : !0;
      })), this.options.groups && this.options.groups.length ? a = a.filter(function(l) {
        return l.options ? s.checkGroups(l.options.groups) : !0;
      }) : a = a.filter(function(l) {
        return !l.options || !l.options.groups || !l.options.groups.length;
      }), a.forEach(function(l) {
        e = l.transformFn({ value: e, key: i, obj: o, type: n, options: s.options });
      }), e;
    }, r.prototype.isCircular = function(e) {
      return this.recursionStack.has(e);
    }, r.prototype.getReflectedType = function(e, t) {
      if (e) {
        var i = ke.findTypeMetadata(e, t);
        return i ? i.reflectedType : void 0;
      }
    }, r.prototype.getKeys = function(e, t, i) {
      var o = this, n = ke.getStrategy(e);
      n === "none" && (n = this.options.strategy || "exposeAll");
      var s = [];
      if ((n === "exposeAll" || i) && (t instanceof Map ? s = Array.from(t.keys()) : s = Object.keys(t)), i)
        return s;
      if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && e) {
        var a = ke.getExposedProperties(e, this.transformationType), l = ke.getExcludedProperties(e, this.transformationType);
        s = bs(bs([], a, !0), l, !0);
      }
      if (!this.options.ignoreDecorators && e) {
        var a = ke.getExposedProperties(e, this.transformationType);
        this.transformationType === X.PLAIN_TO_CLASS && (a = a.map(function(d) {
          var h = ke.findExposeMetadata(e, d);
          return h && h.options && h.options.name ? h.options.name : d;
        })), this.options.excludeExtraneousValues ? s = a : s = s.concat(a);
        var u = ke.getExcludedProperties(e, this.transformationType);
        u.length > 0 && (s = s.filter(function(d) {
          return !u.includes(d);
        })), this.options.version !== void 0 && (s = s.filter(function(d) {
          var h = ke.findExposeMetadata(e, d);
          return !h || !h.options ? !0 : o.checkVersion(h.options.since, h.options.until);
        })), this.options.groups && this.options.groups.length ? s = s.filter(function(d) {
          var h = ke.findExposeMetadata(e, d);
          return !h || !h.options ? !0 : o.checkGroups(h.options.groups);
        }) : s = s.filter(function(d) {
          var h = ke.findExposeMetadata(e, d);
          return !h || !h.options || !h.options.groups || !h.options.groups.length;
        });
      }
      return this.options.excludePrefixes && this.options.excludePrefixes.length && (s = s.filter(function(p) {
        return o.options.excludePrefixes.every(function(d) {
          return p.substr(0, d.length) !== d;
        });
      })), s = s.filter(function(p, d, h) {
        return h.indexOf(p) === d;
      }), s;
    }, r.prototype.checkVersion = function(e, t) {
      var i = !0;
      return i && e && (i = this.options.version >= e), i && t && (i = this.options.version < t), i;
    }, r.prototype.checkGroups = function(e) {
      return e ? this.options.groups.some(function(t) {
        return e.includes(t);
      }) : !0;
    }, r;
  }()
), jt = {
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
}, Ce = function() {
  return Ce = Object.assign || function(r) {
    for (var e, t = 1, i = arguments.length; t < i; t++) {
      e = arguments[t];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
    }
    return r;
  }, Ce.apply(this, arguments);
}, kp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.instanceToPlain = function(e, t) {
      var i = new Lt(X.CLASS_TO_PLAIN, Ce(Ce({}, jt), t));
      return i.transform(void 0, e, void 0, void 0, void 0, void 0);
    }, r.prototype.classToPlainFromExist = function(e, t, i) {
      var o = new Lt(X.CLASS_TO_PLAIN, Ce(Ce({}, jt), i));
      return o.transform(t, e, void 0, void 0, void 0, void 0);
    }, r.prototype.plainToInstance = function(e, t, i) {
      var o = new Lt(X.PLAIN_TO_CLASS, Ce(Ce({}, jt), i));
      return o.transform(void 0, t, e, void 0, void 0, void 0);
    }, r.prototype.plainToClassFromExist = function(e, t, i) {
      var o = new Lt(X.PLAIN_TO_CLASS, Ce(Ce({}, jt), i));
      return o.transform(e, t, void 0, void 0, void 0, void 0);
    }, r.prototype.instanceToInstance = function(e, t) {
      var i = new Lt(X.CLASS_TO_CLASS, Ce(Ce({}, jt), t));
      return i.transform(void 0, e, void 0, void 0, void 0, void 0);
    }, r.prototype.classToClassFromExist = function(e, t, i) {
      var o = new Lt(X.CLASS_TO_CLASS, Ce(Ce({}, jt), i));
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
function or(r, e) {
  return e === void 0 && (e = {}), function(t, i) {
    var o = Reflect.getMetadata("design:type", t, i);
    ke.addTypeMetadata({
      target: t.constructor,
      propertyName: i,
      reflectedType: o,
      typeFunction: r,
      options: e
    });
  };
}
var Fp = new kp();
function Dp(r, e, t) {
  return Fp.plainToInstance(r, e, t);
}
class ll {
  constructor() {
    this.ErrorReasonCode = "", this.ErrorReasonText = "", this.PctComplete = "", this.State = "";
  }
}
class ul {
  constructor() {
    this.Height = 0, this.Width = 0;
  }
}
class pl {
  constructor() {
    this.Name = "";
  }
}
class dl {
  constructor() {
    this.Dash = "", this.Hls = "", this.Frame = "";
  }
}
class cl {
  constructor() {
    this.Created = /* @__PURE__ */ new Date(), this.DownloadedFrom = "", this.Height = 0, this.Name = "", this.Opacity = 0, this.Padding = 0, this.Position = "", this.Scale = 0, this.Size = 0, this.Uid = "", this.Width = 0;
  }
}
var Tp = Object.defineProperty, ti = (r, e, t, i) => {
  for (var o = void 0, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (o = s(e, t, o) || o);
  return o && Tp(e, t, o), o;
};
class Nt {
  constructor() {
    this.AllowedOrigins = [], this.Created = /* @__PURE__ */ new Date(), this.Creator = "", this.Duration = 0, this.Input = new ul(), this.LiveInput = "", this.MaxDurationSeconds = 0, this.Meta = new pl(), this.Modified = /* @__PURE__ */ new Date(), this.Playback = new dl(), this.Preview = "", this.ReadyToStream = !1, this.ReadyToStreamAt = /* @__PURE__ */ new Date(), this.RequireSignedURLs = !1, this.ScheduledDeletion = /* @__PURE__ */ new Date(), this.Size = 0, this.Status = new ll(), this.Thumbnail = "", this.ThumbnailTimestampPct = 0, this.Uid = "", this.UploadExpiry = /* @__PURE__ */ new Date(), this.Uploaded = /* @__PURE__ */ new Date(), this.Watermark = new cl();
  }
}
ti([
  or(() => ul)
], Nt.prototype, "Input");
ti([
  or(() => pl)
], Nt.prototype, "Meta");
ti([
  or(() => dl)
], Nt.prototype, "Playback");
ti([
  or(() => ll)
], Nt.prototype, "Status");
ti([
  or(() => cl)
], Nt.prototype, "Watermark");
var Ip = Object.defineProperty, Cp = (r, e, t, i) => {
  for (var o = void 0, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (o = s(e, t, o) || o);
  return o && Ip(e, t, o), o;
};
class hl {
  constructor() {
    this.Errors = [], this.Messages = [], this.Result = new Nt(), this.Success = !1;
  }
}
Cp([
  or(() => Nt)
], hl.prototype, "Result");
const pt = class pt {
  static async getVideoDetails(e) {
    try {
      const t = await fetch(`${pt.statusEndpoint}?id=${e}`);
      if (t.status === 404)
        return;
      const i = await t.json();
      return Dp(hl, i);
    } catch (t) {
      throw console.error("There has been a problem with your fetch operation:", t), t;
    }
  }
};
pt.baseurl = "/umbraco/backoffice/api/cloudflarestream", pt.initialiseEndpoint = `${pt.baseurl}/initialise`, pt.statusEndpoint = `${pt.baseurl}/status`;
let Bi = pt;
const dt = class dt {
};
dt.DOWNLOADING = "downloading", dt.QUEUED = "queued", dt.IN_PROGRESS = "inprogress", dt.READY = "ready", dt.ERROR = "error", dt.PENDING_UPLOAD = "pendingupload";
let Oi = dt, fl = {};
const vs = /* @__PURE__ */ new WeakMap(), ws = {
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
class Bp {
  constructor(e, t) {
    t = Object.assign({
      units: "metric",
      precision: 1,
      locale: void 0
      // Default to the user's system locale
    }, fl, t), vs.set(this, t), Object.assign(ws, t.customUnits);
    const i = e < 0 ? "-" : "";
    e = Math.abs(e);
    const o = ws[t.units];
    if (o) {
      const n = o.find((s) => e >= s.from && e < s.to);
      if (n) {
        const s = new Intl.NumberFormat(t.locale, {
          style: "decimal",
          maximumFractionDigits: t.precision
        }), a = n.from === 0 ? i + s.format(e) : i + s.format(e / n.from);
        this.value = a, this.unit = n.unit, this.long = n.long;
      } else
        this.value = i + e, this.unit = "", this.long = "";
    } else
      throw new Error(`Invalid units specified: ${t.units}`);
  }
  toString() {
    const e = vs.get(this);
    return e.toStringFn ? e.toStringFn.bind(this)() : `${this.value} ${this.unit}`;
  }
}
function yl(r, e) {
  return new Bp(r, e);
}
yl.defaultOptions = function(r) {
  fl = r;
};
var Op = `.uui-h1,
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
const ml = Ti(Op);
var Ap = Object.defineProperty, Ep = Object.getOwnPropertyDescriptor, Me = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? Ep(e, t) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (o = (i ? s(e, t, o) : s(o)) || o);
  return i && o && Ap(e, t, o), o;
};
let Ie = class extends Xu(Zt) {
  constructor() {
    super(), this.videoId = "", this.customerDomain = "", this.dataTypeKey = "", this.loading = !1, this.extension = "", this.notFound = !1, this.previousVideoId = "", this.showDebug = !1, this.enableDebug = !1, this.refreshInterval = 1e3, this.uploadUrl = Bi.initialiseEndpoint;
  }
  _lockSave() {
    ns.setUploading(!0);
  }
  _unlockSave() {
    ns.setUploading(!1);
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
    return (r == null ? void 0 : r.State) === Oi.IN_PROGRESS || (r == null ? void 0 : r.State) === Oi.QUEUED;
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
    const t = await Bi.getVideoDetails(r), i = t == null ? void 0 : t.Result;
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
    return De`
                <uui-box headline="Upload">
                    <uppy-upload endpoint="${this.uploadUrl}" @after-response="${this._afterResponse}"
                                 @before-request="${this._beforeRequest}"
                                 @upload-success="${this._uploadSuccess}"></uppy-upload>
                </uui-box>
            `;
  }
  _renderVideo(r) {
    const e = r.Playback.Frame, t = `${yl(r.Size)}`;
    return De`
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
      return ae;
    const r = this.showDebug ? "Hide Debug" : "Show Debug", e = De`
            <uui-button @click="${() => this.showDebug = !this.showDebug}" label="${r}"></uui-button>
        `;
    let t = null;
    return this.showDebug && (t = De`
                <div class="alert alert-info">
                    <strong>Cloudflare API</strong>
                    <pre>${JSON.stringify(this.details, null, 2)}</pre>
                </div>
            `), De`
            <uui-box style="margin-top: 30px">
                ${e}
                ${t}
            </uui-box>
        `;
  }
  _renderRemoveButton() {
    return De`
            <uui-button @click="${this._removeCurrentVideo}" look="primary" color="danger" label="Remove"></uui-button>
        `;
  }
  _renderUndoAlert() {
    return De`
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
      return De`
                    <rr-alert type="danger" headline="Video not found" hideIcon="true">
                        <div slot="content">
                            <p>The video may have been deleted from Cloudflare</p>
                        </div>
                    </rr-alert>
                    ${this._renderRemoveButton()}
                `;
    if (this.uploadStatus && this._isUploadProcessing(this.uploadStatus)) {
      let t = parseInt(this.uploadStatus.PctComplete) || 0, i = 5;
      return t = Math.round(t / i) * i, De`
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
      return De`
                    <uui-loader-bar animationDuration="1.5"></uui-loader-bar>
                `;
    const r = this.videoId === "", e = this.details;
    return De`
                ${this.previousVideoId ? this._renderUndoAlert() : ae}
                ${e ? this._renderVideo(e) : ae}
                ${r ? this._renderUpload() : ae}
                ${this._renderDebug()}
            `;
  }
};
Ie.styles = [
  ml,
  Fn`
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
Me([
  Re()
], Ie.prototype, "videoId", 2);
Me([
  Re()
], Ie.prototype, "customerDomain", 2);
Me([
  Re()
], Ie.prototype, "dataTypeKey", 2);
Me([
  lt()
], Ie.prototype, "details", 2);
Me([
  lt()
], Ie.prototype, "uploadStatus", 2);
Me([
  lt()
], Ie.prototype, "pendingVideoId", 2);
Me([
  lt()
], Ie.prototype, "loading", 2);
Me([
  lt()
], Ie.prototype, "extension", 2);
Me([
  lt()
], Ie.prototype, "notFound", 2);
Me([
  lt()
], Ie.prototype, "previousVideoId", 2);
Me([
  lt()
], Ie.prototype, "showDebug", 2);
Me([
  lt()
], Ie.prototype, "enableDebug", 2);
Ie = Me([
  Cn("cf-stream-editor")
], Ie);
function ni(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Up = 0;
function gl(r) {
  return "__private_" + Up++ + "_" + r;
}
function Rp(r, e, t) {
  const i = [];
  return r.forEach((o) => typeof o != "string" ? i.push(o) : e[Symbol.split](o).forEach((n, s, a) => {
    n !== "" && i.push(n), s < a.length - 1 && i.push(t);
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
function _s(r, e) {
  const t = /\$/g, i = "$$$$";
  let o = [r];
  if (e == null) return o;
  for (const n of Object.keys(e))
    if (n !== "_") {
      let s = e[n];
      typeof s == "string" && (s = t[Symbol.replace](s, i)), o = Rp(o, new RegExp(`%\\{${n}\\}`, "g"), s);
    }
  return o;
}
const Mp = (r) => {
  throw new Error(`missing string: ${r}`);
};
var ur = /* @__PURE__ */ gl("onMissingKey"), pr = /* @__PURE__ */ gl("apply");
class bl {
  constructor(e, t) {
    let {
      onMissingKey: i = Mp
    } = t === void 0 ? {} : t;
    Object.defineProperty(this, pr, {
      value: $p
    }), Object.defineProperty(this, ur, {
      writable: !0,
      value: void 0
    }), this.locale = {
      strings: {},
      pluralize(o) {
        return o === 1 ? 0 : 1;
      }
    }, Array.isArray(e) ? e.forEach(ni(this, pr)[pr], this) : ni(this, pr)[pr](e), ni(this, ur)[ur] = i;
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
    if (i == null && (ni(this, ur)[ur](e), i = e), typeof i == "object") {
      if (t && typeof t.smart_count < "u") {
        const n = this.locale.pluralize(t.smart_count);
        return _s(i[n], t);
      }
      throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
    }
    if (typeof i != "string")
      throw new Error("string was not a string");
    return _s(i, t);
  }
}
function $p(r) {
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
var Xi, xs;
function zp() {
  return xs || (xs = 1, Xi = function() {
    var e = {}, t = e._fns = {};
    e.emit = function(s, a, l, u, p, d, h) {
      var x = i(s);
      x.length && o(s, x, [a, l, u, p, d, h]);
    }, e.on = function(s, a) {
      t[s] || (t[s] = []), t[s].push(a);
    }, e.once = function(s, a) {
      function l() {
        a.apply(this, arguments), e.off(s, l);
      }
      this.on(s, l);
    }, e.off = function(s, a) {
      var l = [];
      if (s && a) {
        var u = this._fns[s], p = 0, d = u ? u.length : 0;
        for (p; p < d; p++)
          u[p] !== a && l.push(u[p]);
      }
      l.length ? this._fns[s] = l : delete this._fns[s];
    };
    function i(n) {
      var s = t[n] ? t[n] : [], a = n.indexOf(":"), l = a === -1 ? [n] : [n.substring(0, a), n.substring(a + 1)], u = Object.keys(t), p = 0, d = u.length;
      for (p; p < d; p++) {
        var h = u[p];
        if (h === "*" && (s = s.concat(t[h])), l.length === 2 && l[0] === h) {
          s = s.concat(t[h]);
          break;
        }
      }
      return s;
    }
    function o(n, s, a) {
      var l = 0, u = s.length;
      for (l; l < u && s[l]; l++)
        s[l].event = n, s[l].apply(s[l], a);
    }
    return e;
  }), Xi;
}
var Np = zp();
const Lp = /* @__PURE__ */ zt(Np);
let jp = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Bn = (r = 21) => {
  let e = "", t = r | 0;
  for (; t--; )
    e += jp[Math.random() * 64 | 0];
  return e;
};
var Yi, Ss;
function On() {
  if (Ss) return Yi;
  Ss = 1;
  function r(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  return Yi = r, Yi;
}
var Zi, Ps;
function qp() {
  if (Ps) return Zi;
  Ps = 1;
  var r = typeof ht == "object" && ht && ht.Object === Object && ht;
  return Zi = r, Zi;
}
var Ji, ks;
function vl() {
  if (ks) return Ji;
  ks = 1;
  var r = qp(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
  return Ji = t, Ji;
}
var Qi, Fs;
function Hp() {
  if (Fs) return Qi;
  Fs = 1;
  var r = vl(), e = function() {
    return r.Date.now();
  };
  return Qi = e, Qi;
}
var eo, Ds;
function Wp() {
  if (Ds) return eo;
  Ds = 1;
  var r = /\s/;
  function e(t) {
    for (var i = t.length; i-- && r.test(t.charAt(i)); )
      ;
    return i;
  }
  return eo = e, eo;
}
var to, Ts;
function Gp() {
  if (Ts) return to;
  Ts = 1;
  var r = Wp(), e = /^\s+/;
  function t(i) {
    return i && i.slice(0, r(i) + 1).replace(e, "");
  }
  return to = t, to;
}
var ro, Is;
function wl() {
  if (Is) return ro;
  Is = 1;
  var r = vl(), e = r.Symbol;
  return ro = e, ro;
}
var io, Cs;
function Vp() {
  if (Cs) return io;
  Cs = 1;
  var r = wl(), e = Object.prototype, t = e.hasOwnProperty, i = e.toString, o = r ? r.toStringTag : void 0;
  function n(s) {
    var a = t.call(s, o), l = s[o];
    try {
      s[o] = void 0;
      var u = !0;
    } catch {
    }
    var p = i.call(s);
    return u && (a ? s[o] = l : delete s[o]), p;
  }
  return io = n, io;
}
var oo, Bs;
function Kp() {
  if (Bs) return oo;
  Bs = 1;
  var r = Object.prototype, e = r.toString;
  function t(i) {
    return e.call(i);
  }
  return oo = t, oo;
}
var no, Os;
function Xp() {
  if (Os) return no;
  Os = 1;
  var r = wl(), e = Vp(), t = Kp(), i = "[object Null]", o = "[object Undefined]", n = r ? r.toStringTag : void 0;
  function s(a) {
    return a == null ? a === void 0 ? o : i : n && n in Object(a) ? e(a) : t(a);
  }
  return no = s, no;
}
var so, As;
function Yp() {
  if (As) return so;
  As = 1;
  function r(e) {
    return e != null && typeof e == "object";
  }
  return so = r, so;
}
var ao, Es;
function Zp() {
  if (Es) return ao;
  Es = 1;
  var r = Xp(), e = Yp(), t = "[object Symbol]";
  function i(o) {
    return typeof o == "symbol" || e(o) && r(o) == t;
  }
  return ao = i, ao;
}
var lo, Us;
function Jp() {
  if (Us) return lo;
  Us = 1;
  var r = Gp(), e = On(), t = Zp(), i = NaN, o = /^[-+]0x[0-9a-f]+$/i, n = /^0b[01]+$/i, s = /^0o[0-7]+$/i, a = parseInt;
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
    var d = n.test(u);
    return d || s.test(u) ? a(u.slice(2), d ? 2 : 8) : o.test(u) ? i : +u;
  }
  return lo = l, lo;
}
var uo, Rs;
function _l() {
  if (Rs) return uo;
  Rs = 1;
  var r = On(), e = Hp(), t = Jp(), i = "Expected a function", o = Math.max, n = Math.min;
  function s(a, l, u) {
    var p, d, h, x, D, O, _ = 0, T = !1, m = !1, w = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    l = t(l) || 0, r(u) && (T = !!u.leading, m = "maxWait" in u, h = m ? o(t(u.maxWait) || 0, l) : h, w = "trailing" in u ? !!u.trailing : w);
    function S(C) {
      var ie = p, le = d;
      return p = d = void 0, _ = C, x = a.apply(le, ie), x;
    }
    function P(C) {
      return _ = C, D = setTimeout(U, l), T ? S(C) : x;
    }
    function A(C) {
      var ie = C - O, le = C - _, y = l - ie;
      return m ? n(y, h - le) : y;
    }
    function E(C) {
      var ie = C - O, le = C - _;
      return O === void 0 || ie >= l || ie < 0 || m && le >= h;
    }
    function U() {
      var C = e();
      if (E(C))
        return L(C);
      D = setTimeout(U, A(C));
    }
    function L(C) {
      return D = void 0, w && p ? S(C) : (p = d = void 0, x);
    }
    function ee() {
      D !== void 0 && clearTimeout(D), _ = 0, p = O = d = D = void 0;
    }
    function J() {
      return D === void 0 ? x : L(e());
    }
    function re() {
      var C = e(), ie = E(C);
      if (p = arguments, d = this, O = C, ie) {
        if (D === void 0)
          return P(O);
        if (m)
          return clearTimeout(D), D = setTimeout(U, l), S(O);
      }
      return D === void 0 && (D = setTimeout(U, l)), x;
    }
    return re.cancel = ee, re.flush = J, re;
  }
  return uo = s, uo;
}
var po, Ms;
function Qp() {
  if (Ms) return po;
  Ms = 1;
  var r = _l(), e = On(), t = "Expected a function";
  function i(o, n, s) {
    var a = !0, l = !0;
    if (typeof o != "function")
      throw new TypeError(t);
    return e(s) && (a = "leading" in s ? !!s.leading : a, l = "trailing" in s ? !!s.trailing : l), r(o, n, {
      leading: a,
      maxWait: n,
      trailing: l
    });
  }
  return po = i, po;
}
var ed = Qp();
const td = /* @__PURE__ */ zt(ed);
function wi(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var rd = 0;
function xl(r) {
  return "__private_" + rd++ + "_" + r;
}
const id = {
  version: "4.2.0"
};
var Ft = /* @__PURE__ */ xl("callbacks"), co = /* @__PURE__ */ xl("publish");
class Sl {
  constructor() {
    Object.defineProperty(this, co, {
      value: od
    }), this.state = {}, Object.defineProperty(this, Ft, {
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
    this.state = i, wi(this, co)[co](t, i, e);
  }
  subscribe(e) {
    return wi(this, Ft)[Ft].add(e), () => {
      wi(this, Ft)[Ft].delete(e);
    };
  }
}
function od() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  wi(this, Ft)[Ft].forEach((i) => {
    i(...e);
  });
}
Sl.VERSION = id.version;
function Pl(r) {
  const e = r.lastIndexOf(".");
  return e === -1 || e === r.length - 1 ? {
    name: r,
    extension: void 0
  } : {
    name: r.slice(0, e),
    extension: r.slice(e + 1)
  };
}
const $s = {
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
function kl(r) {
  var e;
  if (r.type) return r.type;
  const t = r.name ? (e = Pl(r.name).extension) == null ? void 0 : e.toLowerCase() : null;
  return t && t in $s ? $s[t] : "application/octet-stream";
}
function nd(r) {
  return r.charCodeAt(0).toString(32);
}
function zs(r) {
  let e = "";
  return r.replace(/[^A-Z0-9]/gi, (t) => (e += `-${nd(t)}`, "/")) + e;
}
function sd(r, e) {
  let t = e || "uppy";
  return typeof r.name == "string" && (t += `-${zs(r.name.toLowerCase())}`), r.type !== void 0 && (t += `-${r.type}`), r.meta && typeof r.meta.relativePath == "string" && (t += `-${zs(r.meta.relativePath.toLowerCase())}`), r.data.size !== void 0 && (t += `-${r.data.size}`), r.data.lastModified !== void 0 && (t += `-${r.data.lastModified}`), t;
}
function ad(r) {
  return !r.isRemote || !r.remote ? !1 : (/* @__PURE__ */ new Set(["box", "dropbox", "drive", "facebook", "unsplash"])).has(r.remote.provider);
}
function ld(r, e) {
  if (ad(r)) return r.id;
  const t = kl(r);
  return sd({
    ...r,
    type: t
  }, e);
}
function ud(r) {
  if (r == null && typeof navigator < "u" && (r = navigator.userAgent), !r) return !0;
  const e = /Edge\/(\d+\.\d+)/.exec(r);
  if (!e) return !0;
  const i = e[1].split(".", 2), o = parseInt(i[0], 10), n = parseInt(i[1], 10);
  return o < 15 || o === 15 && n < 15063 || o > 18 || o === 18 && n >= 18218;
}
function pd(r, e) {
  return e.name ? e.name : r.split("/")[0] === "image" ? `${r.split("/")[0]}.${r.split("/")[1]}` : "noname";
}
function ho(r) {
  return r < 10 ? `0${r}` : r.toString();
}
function _i() {
  const r = /* @__PURE__ */ new Date(), e = ho(r.getHours()), t = ho(r.getMinutes()), i = ho(r.getSeconds());
  return `${e}:${t}:${i}`;
}
const dd = {
  debug: () => {
  },
  warn: () => {
  },
  error: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.error(`[Uppy] [${_i()}]`, ...e);
  }
}, cd = {
  debug: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.debug(`[Uppy] [${_i()}]`, ...e);
  },
  warn: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.warn(`[Uppy] [${_i()}]`, ...e);
  },
  error: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return console.error(`[Uppy] [${_i()}]`, ...e);
  }
};
var fo, Ns;
function hd() {
  return Ns || (Ns = 1, fo = function(e) {
    if (typeof e != "number" || Number.isNaN(e))
      throw new TypeError(`Expected a number, got ${typeof e}`);
    const t = e < 0;
    let i = Math.abs(e);
    if (t && (i = -i), i === 0)
      return "0 B";
    const o = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], n = Math.min(Math.floor(Math.log(i) / Math.log(1024)), o.length - 1), s = Number(i / 1024 ** n), a = o[n];
    return `${s >= 10 || s % 1 === 0 ? Math.round(s) : s.toFixed(1)} ${a}`;
  }), fo;
}
var fd = hd();
const Bt = /* @__PURE__ */ zt(fd);
var yo, Ls;
function yd() {
  if (Ls) return yo;
  Ls = 1;
  function r(e, t) {
    this.text = e = e || "", this.hasWild = ~e.indexOf("*"), this.separator = t, this.parts = e.split(t);
  }
  return r.prototype.match = function(e) {
    var t = !0, i = this.parts, o, n = i.length, s;
    if (typeof e == "string" || e instanceof String)
      if (!this.hasWild && this.text != e)
        t = !1;
      else {
        for (s = (e || "").split(this.separator), o = 0; t && o < n; o++)
          i[o] !== "*" && (o < s.length ? t = i[o] === s[o] : t = !1);
        t = t && s;
      }
    else if (typeof e.splice == "function")
      for (t = [], o = e.length; o--; )
        this.match(e[o]) && (t[t.length] = e[o]);
    else if (typeof e == "object") {
      t = {};
      for (var a in e)
        this.match(a) && (t[a] = e[a]);
    }
    return t;
  }, yo = function(e, t, i) {
    var o = new r(e, i || /[\/\.]/);
    return typeof t < "u" ? o.match(t) : o;
  }, yo;
}
var mo, js;
function md() {
  if (js) return mo;
  js = 1;
  var r = yd(), e = /[\/\+\.]/;
  return mo = function(t, i) {
    function o(n) {
      var s = r(n, t, e);
      return s && s.length >= 2;
    }
    return i ? o(i.split(";")[0]) : o;
  }, mo;
}
var gd = md();
const bd = /* @__PURE__ */ zt(gd), vd = {
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
    super(e), this.isRestriction = !0, this.isUserFacing = (i = t == null ? void 0 : t.isUserFacing) != null ? i : !0, t != null && t.file && (this.file = t.file);
  }
}
class wd {
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
    if (o && e.filter((s) => !s.isGhost).length + t.length > o)
      throw new Ne(`${this.getI18n()("youCanOnlyUploadX", {
        smart_count: o
      })}`);
    if (i) {
      const n = [...e, ...t].reduce((s, a) => {
        var l;
        return s + ((l = a.size) != null ? l : 0);
      }, 0);
      if (n > i)
        throw new Ne(this.getI18n()("aggregateExceedsSize", {
          sizeAllowed: Bt(i),
          size: Bt(n)
        }));
    }
  }
  validateSingleFile(e) {
    const {
      maxFileSize: t,
      minFileSize: i,
      allowedFileTypes: o
    } = this.getOpts().restrictions;
    if (o && !o.some((a) => a.includes("/") ? e.type ? bd(e.type.replace(/;.*?$/, ""), a) : !1 : a[0] === "." && e.extension ? e.extension.toLowerCase() === a.slice(1).toLowerCase() : !1)) {
      const a = o.join(", ");
      throw new Ne(this.getI18n()("youCanOnlyUploadFileTypes", {
        types: a
      }), {
        file: e
      });
    }
    if (t && e.size != null && e.size > t) {
      var n;
      throw new Ne(this.getI18n()("exceedsSize", {
        size: Bt(t),
        file: (n = e.name) != null ? n : this.getI18n()("unnamed")
      }), {
        file: e
      });
    }
    if (i && e.size != null && e.size < i)
      throw new Ne(this.getI18n()("inferiorSize", {
        size: Bt(i)
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
    for (const s of o)
      (!Object.hasOwn(e.meta, s) || e.meta[s] === "") && n.push(s);
    return {
      missingFields: n,
      error: i
    };
  }
}
const _d = {
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
var xd = 0;
function oe(r) {
  return "__private_" + xd++ + "_" + r;
}
const Sd = {
  version: "4.4.4"
}, si = {
  totalProgress: 0,
  allowNewUpload: !0,
  error: null,
  recoveredState: null
};
var ve = /* @__PURE__ */ oe("plugins"), we = /* @__PURE__ */ oe("restricter"), dr = /* @__PURE__ */ oe("storeUnsubscribe"), Xe = /* @__PURE__ */ oe("emitter"), Dt = /* @__PURE__ */ oe("preProcessors"), Tt = /* @__PURE__ */ oe("uploaders"), it = /* @__PURE__ */ oe("postProcessors"), Ue = /* @__PURE__ */ oe("informAndEmit"), jr = /* @__PURE__ */ oe("checkRequiredMetaFieldsOnFile"), go = /* @__PURE__ */ oe("checkRequiredMetaFields"), cr = /* @__PURE__ */ oe("assertNewUploadAllowed"), Xo = /* @__PURE__ */ oe("transformFile"), hr = /* @__PURE__ */ oe("startIfAutoProceed"), fr = /* @__PURE__ */ oe("checkAndUpdateFileState"), Ur = /* @__PURE__ */ oe("getFilesToRetry"), yr = /* @__PURE__ */ oe("doRetryAll"), Yo = /* @__PURE__ */ oe("handleUploadProgress"), mr = /* @__PURE__ */ oe("updateTotalProgress"), ot = /* @__PURE__ */ oe("updateTotalProgressThrottled"), Zo = /* @__PURE__ */ oe("calculateTotalProgress"), bo = /* @__PURE__ */ oe("addListeners"), qe = /* @__PURE__ */ oe("updateOnlineStatus"), gr = /* @__PURE__ */ oe("requestClientById"), et = /* @__PURE__ */ oe("createUpload"), vo = /* @__PURE__ */ oe("getUpload"), Ot = /* @__PURE__ */ oe("removeUpload"), tt = /* @__PURE__ */ oe("runUpload");
class zi {
  /**
   * Instantiate Uppy
   */
  constructor(e) {
    Object.defineProperty(this, tt, {
      value: zd
    }), Object.defineProperty(this, Ot, {
      value: $d
    }), Object.defineProperty(this, vo, {
      value: Md
    }), Object.defineProperty(this, et, {
      value: Rd
    }), Object.defineProperty(this, bo, {
      value: Ud
    }), Object.defineProperty(this, Zo, {
      value: Ed
    }), Object.defineProperty(this, mr, {
      value: Ad
    }), Object.defineProperty(this, yr, {
      value: Od
    }), Object.defineProperty(this, Ur, {
      value: Bd
    }), Object.defineProperty(this, fr, {
      value: Cd
    }), Object.defineProperty(this, hr, {
      value: Id
    }), Object.defineProperty(this, Xo, {
      value: Td
    }), Object.defineProperty(this, cr, {
      value: Dd
    }), Object.defineProperty(this, go, {
      value: Fd
    }), Object.defineProperty(this, jr, {
      value: kd
    }), Object.defineProperty(this, Ue, {
      value: Pd
    }), Object.defineProperty(this, ve, {
      writable: !0,
      value: /* @__PURE__ */ Object.create(null)
    }), Object.defineProperty(this, we, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, dr, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Xe, {
      writable: !0,
      value: Lp()
    }), Object.defineProperty(this, Dt, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), Object.defineProperty(this, Tt, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), Object.defineProperty(this, it, {
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), this.scheduledAutoProceed = null, this.wasOffline = !1, Object.defineProperty(this, Yo, {
      writable: !0,
      value: (o, n) => {
        const s = o ? this.getFile(o.id) : void 0;
        if (o == null || !s) {
          this.log(`Not setting progress for a file that has been removed: ${o == null ? void 0 : o.id}`);
          return;
        }
        if (s.progress.percentage === 100) {
          this.log(`Not setting progress for a file that has been already uploaded: ${o.id}`);
          return;
        }
        const a = {
          bytesTotal: n.bytesTotal,
          // bytesTotal may be null or zero; in that case we can't divide by it
          percentage: n.bytesTotal != null && Number.isFinite(n.bytesTotal) && n.bytesTotal > 0 ? Math.round(n.bytesUploaded / n.bytesTotal * 100) : void 0
        };
        s.progress.uploadStarted != null ? this.setFileState(o.id, {
          progress: {
            ...s.progress,
            ...a,
            bytesUploaded: n.bytesUploaded
          }
        }) : this.setFileState(o.id, {
          progress: {
            ...s.progress,
            ...a
          }
        }), M(this, ot)[ot]();
      }
    }), Object.defineProperty(this, ot, {
      writable: !0,
      value: td(() => M(this, mr)[mr](), 500, {
        leading: !0,
        trailing: !0
      })
    }), Object.defineProperty(this, qe, {
      writable: !0,
      value: this.updateOnlineStatus.bind(this)
    }), Object.defineProperty(this, gr, {
      writable: !0,
      value: /* @__PURE__ */ new Map()
    }), this.defaultLocale = _d;
    const t = {
      id: "uppy",
      autoProceed: !1,
      allowMultipleUploadBatches: !0,
      debug: !1,
      restrictions: vd,
      meta: {},
      onBeforeFileAdded: (o, n) => !Object.hasOwn(n, o.id),
      onBeforeUpload: (o) => o,
      store: new Sl(),
      logger: dd,
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
    }, e && e.logger && e.debug ? this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning") : e && e.debug && (this.opts.logger = cd), this.log(`Using Core v${zi.VERSION}`), this.i18nInit(), this.store = this.opts.store, this.setState({
      ...si,
      plugins: {},
      files: {},
      currentUploads: {},
      capabilities: {
        uploadProgress: ud(),
        individualCancellation: !0,
        resumableUploads: !1
      },
      meta: {
        ...this.opts.meta
      },
      info: []
    }), M(this, we)[we] = new wd(() => this.opts, () => this.i18n), M(this, dr)[dr] = this.store.subscribe((o, n, s) => {
      this.emit("state-update", o, n, s), this.updateAll(n);
    }), this.opts.debug && typeof window < "u" && (window[this.opts.id] = this), M(this, bo)[bo]();
  }
  emit(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      i[o - 1] = arguments[o];
    M(this, Xe)[Xe].emit(e, ...i);
  }
  on(e, t) {
    return M(this, Xe)[Xe].on(e, t), this;
  }
  once(e, t) {
    return M(this, Xe)[Xe].once(e, t), this;
  }
  off(e, t) {
    return M(this, Xe)[Xe].off(e, t), this;
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
    const e = (i) => this.log(`Missing i18n string: ${i}`, "error"), t = new bl([this.defaultLocale, this.opts.locale], {
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
        ...e == null ? void 0 : e.restrictions
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
      ...si
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
      ...si,
      files: {}
    });
  }
  addPreProcessor(e) {
    M(this, Dt)[Dt].add(e);
  }
  removePreProcessor(e) {
    return M(this, Dt)[Dt].delete(e);
  }
  addPostProcessor(e) {
    M(this, it)[it].add(e);
  }
  removePostProcessor(e) {
    return M(this, it)[it].delete(e);
  }
  addUploader(e) {
    M(this, Tt)[Tt].add(e);
  }
  removeUploader(e) {
    return M(this, Tt)[Tt].delete(e);
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
    } = this.getState(), o = Object.values(e), n = [], s = [], a = [], l = [], u = [], p = [], d = [], h = [], x = [];
    for (const D of o) {
      const {
        progress: O
      } = D;
      !O.uploadComplete && O.uploadStarted && (n.push(D), D.isPaused || h.push(D)), O.uploadStarted || s.push(D), (O.uploadStarted || O.preprocess || O.postprocess) && a.push(D), O.uploadStarted && l.push(D), D.isPaused && u.push(D), O.uploadComplete && p.push(D), D.error && d.push(D), (O.preprocess || O.postprocess) && x.push(D);
    }
    return {
      newFiles: s,
      startedFiles: a,
      uploadStartedFiles: l,
      pausedFiles: u,
      completeFiles: p,
      erroredFiles: d,
      inProgressFiles: n,
      inProgressNotPausedFiles: h,
      processingFiles: x,
      isUploadStarted: l.length > 0,
      isAllComplete: t === 100 && p.length === o.length && x.length === 0,
      isAllErrored: !!i && d.length === o.length,
      isAllPaused: n.length !== 0 && u.length === n.length,
      isUploadInProgress: n.length > 0,
      isSomeGhost: o.some((D) => D.isGhost)
    };
  }
  validateRestrictions(e, t) {
    t === void 0 && (t = this.getFiles());
    try {
      M(this, we)[we].validate(t, [e]);
    } catch (i) {
      return i;
    }
    return null;
  }
  validateSingleFile(e) {
    try {
      M(this, we)[we].validateSingleFile(e);
    } catch (t) {
      return t.message;
    }
    return null;
  }
  validateAggregateRestrictions(e) {
    const t = this.getFiles();
    try {
      M(this, we)[we].validateAggregateRestrictions(t, e);
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
    M(this, cr)[cr](e);
    const {
      nextFilesState: t,
      validFilesToAdd: i,
      errors: o
    } = M(this, fr)[fr]([e]), n = o.filter((a) => a.isRestriction);
    if (M(this, Ue)[Ue](n), o.length > 0) throw o[0];
    this.setState({
      files: t
    });
    const [s] = i;
    return this.emit("file-added", s), this.emit("files-added", i), this.log(`Added file: ${s.name}, ${s.id}, mime type: ${s.type}`), M(this, hr)[hr](), s.id;
  }
  /**
   * Add multiple files to `state.files`. See the `addFile()` documentation.
   *
   * If an error occurs while adding a file, it is logged and the user is notified.
   * This is good for UI plugins, but not for programmatic use.
   * Programmatic users should usually still use `addFile()` on individual files.
   */
  addFiles(e) {
    M(this, cr)[cr]();
    const {
      nextFilesState: t,
      validFilesToAdd: i,
      errors: o
    } = M(this, fr)[fr](e), n = o.filter((a) => a.isRestriction);
    M(this, Ue)[Ue](n);
    const s = o.filter((a) => !a.isRestriction);
    if (s.length > 0) {
      let a = `Multiple errors occurred while adding files:
`;
      if (s.forEach((l) => {
        a += `
 * ${l.message}`;
      }), this.info({
        message: this.i18n("addBulkFilesFailed", {
          smart_count: s.length
        }),
        details: a
      }, "error", this.opts.infoTimeout), typeof AggregateError == "function")
        throw new AggregateError(s, a);
      {
        const l = new Error(a);
        throw l.errors = s, l;
      }
    }
    this.setState({
      files: t
    }), i.forEach((a) => {
      this.emit("file-added", a);
    }), this.emit("files-added", i), i.length > 5 ? this.log(`Added batch of ${i.length} files`) : Object.values(i).forEach((a) => {
      this.log(`Added file: ${a.name}
 id: ${a.id}
 type: ${a.type}`);
    }), i.length > 0 && M(this, hr)[hr]();
  }
  removeFiles(e) {
    const {
      files: t,
      currentUploads: i
    } = this.getState(), o = {
      ...t
    }, n = {
      ...i
    }, s = /* @__PURE__ */ Object.create(null);
    e.forEach((p) => {
      t[p] && (s[p] = t[p], delete o[p]);
    });
    function a(p) {
      return s[p] === void 0;
    }
    Object.keys(n).forEach((p) => {
      const d = i[p].fileIDs.filter(a);
      if (d.length === 0) {
        delete n[p];
        return;
      }
      const {
        capabilities: h
      } = this.getState();
      if (d.length !== i[p].fileIDs.length && !h.individualCancellation)
        throw new Error("The installed uploader plugin does not allow removing files during an upload.");
      n[p] = {
        ...i[p],
        fileIDs: d
      };
    });
    const l = {
      currentUploads: n,
      files: o
    };
    Object.keys(o).length === 0 && (l.allowNewUpload = !0, l.error = null, l.recoveredState = null), this.setState(l), M(this, ot)[ot]();
    const u = Object.keys(s);
    u.forEach((p) => {
      this.emit("file-removed", s[p]);
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
    const e = await M(this, yr)[yr]();
    return this.emit("complete", e), e;
  }
  cancelAll() {
    this.emit("cancel-all");
    const {
      files: e
    } = this.getState(), t = Object.keys(e);
    t.length && this.removeFiles(t), this.setState(si);
  }
  retryUpload(e) {
    this.setFileState(e, {
      error: null,
      isPaused: !1
    }), this.emit("upload-retry", this.getFile(e));
    const t = M(this, et)[et]([e], {
      forceAllowNewUpload: !0
      // create new upload even if allowNewUpload: false
    });
    return M(this, tt)[tt](t);
  }
  logout() {
    this.iteratePlugins((e) => {
      var t;
      (t = e.provider) == null || t.logout == null || t.logout();
    });
  }
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/explicit-module-boundary-types
  [Symbol.for("uppy test: updateTotalProgress")]() {
    return M(this, mr)[mr]();
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
    const n = new e(this, ...i), s = n.id;
    if (!s)
      throw new Error("Your plugin must have an id");
    if (!n.type)
      throw new Error("Your plugin must have a type");
    const a = this.getPlugin(s);
    if (a) {
      const l = `Already found a plugin named '${a.id}'. Tried to use: '${s}'.
Uppy plugins must have unique \`id\` options.`;
      throw new Error(l);
    }
    return e.VERSION && this.log(`Using ${s} v${e.VERSION}`), n.type in M(this, ve)[ve] ? M(this, ve)[ve][n.type].push(n) : M(this, ve)[ve][n.type] = [n], n.install(), this.emit("plugin-added", n), this;
  }
  /**
   * Find one Plugin by name.
   */
  getPlugin(e) {
    for (const t of Object.values(M(this, ve)[ve])) {
      const i = t.find((o) => o.id === e);
      if (i != null) return i;
    }
  }
  [Symbol.for("uppy test: getPlugins")](e) {
    return M(this, ve)[ve][e];
  }
  /**
   * Iterate through all `use`d plugins.
   *
   */
  iteratePlugins(e) {
    Object.values(M(this, ve)[ve]).flat(1).forEach(e);
  }
  /**
   * Uninstall and remove a plugin.
   *
   * @param {object} instance The plugin instance to remove.
   */
  removePlugin(e) {
    this.log(`Removing plugin ${e.id}`), this.emit("plugin-remove", e), e.uninstall && e.uninstall();
    const t = M(this, ve)[ve][e.type], i = t.findIndex((s) => s.id === e.id);
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
    this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`), this.cancelAll(), M(this, dr)[dr](), this.iteratePlugins((e) => {
      this.removePlugin(e);
    }), typeof window < "u" && window.removeEventListener && (window.removeEventListener("online", M(this, qe)[qe]), window.removeEventListener("offline", M(this, qe)[qe]));
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
    M(this, gr)[gr].set(e, t);
  }
  /** @protected */
  getRequestClientForFile(e) {
    if (!e.remote) throw new Error(`Tried to get RequestClient for a non-remote file ${e.id}`);
    const t = M(this, gr)[gr].get(e.remote.requestClientId);
    if (t == null) throw new Error(`requestClientId "${e.remote.requestClientId}" not registered for file "${e.id}"`);
    return t;
  }
  /**
   * Restore an upload by its ID.
   */
  restore(e) {
    return this.log(`Core: attempting to restore upload "${e}"`), this.getState().currentUploads[e] ? M(this, tt)[tt](e) : (M(this, Ot)[Ot](e), Promise.reject(new Error("Nonexistent upload")));
  }
  [Symbol.for("uppy test: createUpload")]() {
    return M(this, et)[et](...arguments);
  }
  /**
   * Add data to an upload's result object.
   */
  addResultData(e, t) {
    if (!M(this, vo)[vo](e)) {
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
    (e = M(this, ve)[ve].uploader) != null && e.length || this.log("No uploader type plugins are used", "warning");
    let {
      files: t
    } = this.getState();
    if (M(this, Ur)[Ur]().length > 0) {
      const n = await M(this, yr)[yr]();
      if (!(this.getFiles().filter((a) => a.progress.uploadStarted == null).length > 0))
        return this.emit("complete", n), n;
      ({
        files: t
      } = this.getState());
    }
    const o = this.opts.onBeforeUpload(t);
    return o === !1 ? Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false")) : (o && typeof o == "object" && (t = o, this.setState({
      files: t
    })), Promise.resolve().then(() => M(this, we)[we].validateMinNumberOfFiles(t)).catch((n) => {
      throw M(this, Ue)[Ue]([n]), n;
    }).then(() => {
      if (!M(this, go)[go](t))
        throw new Ne(this.i18n("missingRequiredMetaField"));
    }).catch((n) => {
      throw n;
    }).then(async () => {
      const {
        currentUploads: n
      } = this.getState(), s = Object.values(n).flatMap((p) => p.fileIDs), a = [];
      Object.keys(t).forEach((p) => {
        const d = this.getFile(p);
        !d.progress.uploadStarted && s.indexOf(p) === -1 && a.push(d.id);
      });
      const l = M(this, et)[et](a), u = await M(this, tt)[tt](l);
      return this.emit("complete", u), u;
    }).catch((n) => {
      throw this.emit("error", n), this.log(n, "error"), n;
    }));
  }
}
function Pd(r) {
  for (const n of r)
    n.isRestriction ? this.emit("restriction-failed", n.file, n) : this.emit("error", n, n.file), this.log(n, "warning");
  const e = r.filter((n) => n.isUserFacing), t = 4, i = e.slice(0, t), o = e.slice(t);
  i.forEach((n) => {
    let {
      message: s,
      details: a = ""
    } = n;
    this.info({
      message: s,
      details: a
    }, "error", this.opts.infoTimeout);
  }), o.length > 0 && this.info({
    message: this.i18n("additionalRestrictionsFailed", {
      count: o.length
    })
  });
}
function kd(r) {
  const {
    missingFields: e,
    error: t
  } = M(this, we)[we].getMissingRequiredMetaFields(r);
  return e.length > 0 ? (this.setFileState(r.id, {
    missingRequiredMetaFields: e
  }), this.log(t.message), this.emit("restriction-failed", r, t), !1) : !0;
}
function Fd(r) {
  let e = !0;
  for (const t of Object.values(r))
    M(this, jr)[jr](t) || (e = !1);
  return e;
}
function Dd(r) {
  const {
    allowNewUpload: e
  } = this.getState();
  if (e === !1) {
    const t = new Ne(this.i18n("noMoreFilesAllowed"), {
      file: r
    });
    throw M(this, Ue)[Ue]([t]), t;
  }
}
function Td(r) {
  const e = r instanceof File ? {
    name: r.name,
    type: r.type,
    size: r.size,
    data: r
  } : r, t = kl(e), i = pd(t, e), o = Pl(i).extension, n = ld(e, this.getID()), s = e.meta || {};
  s.name = i, s.type = t;
  const a = Number.isFinite(e.data.size) ? e.data.size : null;
  return {
    source: e.source || "",
    id: n,
    name: i,
    extension: o || "",
    meta: {
      ...this.getState().meta,
      ...s
    },
    type: t,
    data: e.data,
    progress: {
      percentage: 0,
      bytesUploaded: !1,
      bytesTotal: a,
      uploadComplete: !1,
      uploadStarted: null
    },
    size: a,
    isGhost: !1,
    isRemote: e.isRemote || !1,
    remote: e.remote,
    preview: e.preview
  };
}
function Id() {
  this.opts.autoProceed && !this.scheduledAutoProceed && (this.scheduledAutoProceed = setTimeout(() => {
    this.scheduledAutoProceed = null, this.upload().catch((r) => {
      r.isRestriction || this.log(r.stack || r.message || r);
    });
  }, 4));
}
function Cd(r) {
  const {
    files: e
  } = this.getState(), t = {
    ...e
  }, i = [], o = [];
  for (const a of r)
    try {
      var n;
      let l = M(this, Xo)[Xo](a);
      const u = (n = e[l.id]) == null ? void 0 : n.isGhost;
      u && (l = {
        ...e[l.id],
        isGhost: !1,
        data: a.data
      }, this.log(`Replaced the blob in the restored ghost file: ${l.name}, ${l.id}`));
      const p = this.opts.onBeforeFileAdded(l, t);
      if (!p && this.checkIfFileAlreadyExists(l.id)) {
        var s;
        throw new Ne(this.i18n("noDuplicates", {
          fileName: (s = l.name) != null ? s : this.i18n("unnamed")
        }), {
          file: a
        });
      }
      if (p === !1 && !u)
        throw new Ne("Cannot add the file because onBeforeFileAdded returned false.", {
          isUserFacing: !1,
          file: a
        });
      typeof p == "object" && p !== null && (l = p), M(this, we)[we].validateSingleFile(l), t[l.id] = l, i.push(l);
    } catch (l) {
      o.push(l);
    }
  try {
    M(this, we)[we].validateAggregateRestrictions(Object.values(e), i);
  } catch (a) {
    return o.push(a), {
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
function Bd() {
  const {
    files: r
  } = this.getState();
  return Object.keys(r).filter((e) => r[e].error);
}
async function Od() {
  const r = M(this, Ur)[Ur](), e = {
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
  const t = M(this, et)[et](r, {
    forceAllowNewUpload: !0
    // create new upload even if allowNewUpload: false
  });
  return M(this, tt)[tt](t);
}
function Ad() {
  var r, e;
  const t = M(this, Zo)[Zo]();
  let i = null;
  t != null && (i = Math.round(t * 100), i > 100 ? i = 100 : i < 0 && (i = 0)), this.emit("progress", (r = i) != null ? r : 0), this.setState({
    totalProgress: (e = i) != null ? e : 0
  });
}
function Ed() {
  const e = this.getFiles().filter((a) => a.progress.uploadStarted || a.progress.preprocess || a.progress.postprocess);
  if (e.length === 0)
    return 0;
  if (e.every((a) => a.progress.uploadComplete))
    return 1;
  const t = (a) => a.progress.bytesTotal != null && a.progress.bytesTotal !== 0, i = e.filter(t), o = e.filter((a) => !t(a));
  if (i.every((a) => a.progress.uploadComplete) && o.length > 0 && !o.every((a) => a.progress.uploadComplete))
    return null;
  const n = i.reduce((a, l) => {
    var u;
    return a + ((u = l.progress.bytesTotal) != null ? u : 0);
  }, 0), s = i.reduce((a, l) => a + (l.progress.bytesUploaded || 0), 0);
  return n === 0 ? 0 : s / n;
}
function Ud() {
  const r = (i, o, n) => {
    let s = i.message || "Unknown error";
    i.details && (s += ` ${i.details}`), this.setState({
      error: s
    }), o != null && o.id in this.getState().files && this.setFileState(o.id, {
      error: s,
      response: n
    });
  };
  this.on("error", r), this.on("upload-error", (i, o, n) => {
    if (r(o, i, n), typeof o == "object" && o.message) {
      var s;
      this.log(o.message, "error");
      const a = new Error(this.i18n("failedToUpload", {
        file: (s = i == null ? void 0 : i.name) != null ? s : ""
      }));
      a.isUserFacing = !0, a.details = o.message, o.details && (a.details += ` ${o.details}`), M(this, Ue)[Ue]([a]);
    } else
      M(this, Ue)[Ue]([o]);
  });
  let e = null;
  this.on("upload-stalled", (i, o) => {
    const {
      message: n
    } = i, s = o.map((a) => a.meta.name).join(", ");
    e || (this.info({
      message: n,
      details: s
    }, "warning", this.opts.infoTimeout), e = setTimeout(() => {
      e = null;
    }, this.opts.infoTimeout)), this.log(`${n} ${s}`.trim(), "warning");
  }), this.on("upload", () => {
    this.setState({
      error: null
    });
  });
  const t = (i) => {
    const o = i.filter((s) => {
      const a = s != null && this.getFile(s.id);
      return a || this.log(`Not setting progress for a file that has been removed: ${s == null ? void 0 : s.id}`), a;
    }), n = Object.fromEntries(o.map((s) => [s.id, {
      progress: {
        uploadStarted: Date.now(),
        uploadComplete: !1,
        bytesUploaded: 0,
        bytesTotal: s.size
      }
    }]));
    this.patchFilesState(n);
  };
  this.on("upload-start", t), this.on("upload-progress", M(this, Yo)[Yo]), this.on("upload-success", (i, o) => {
    if (i == null || !this.getFile(i.id)) {
      this.log(`Not setting progress for a file that has been removed: ${i == null ? void 0 : i.id}`);
      return;
    }
    const n = this.getFile(i.id).progress;
    this.setFileState(i.id, {
      progress: {
        ...n,
        postprocess: M(this, it)[it].size > 0 ? {
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
    }), M(this, ot)[ot]();
  }), this.on("preprocess-progress", (i, o) => {
    if (i == null || !this.getFile(i.id)) {
      this.log(`Not setting progress for a file that has been removed: ${i == null ? void 0 : i.id}`);
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
      this.log(`Not setting progress for a file that has been removed: ${i == null ? void 0 : i.id}`);
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
      this.log(`Not setting progress for a file that has been removed: ${i == null ? void 0 : i.id}`);
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
      this.log(`Not setting progress for a file that has been removed: ${i == null ? void 0 : i.id}`);
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
    M(this, ot)[ot]();
  }), this.on("dashboard:file-edit-complete", (i) => {
    i && M(this, jr)[jr](i);
  }), typeof window < "u" && window.addEventListener && (window.addEventListener("online", M(this, qe)[qe]), window.addEventListener("offline", M(this, qe)[qe]), setTimeout(M(this, qe)[qe], 3e3));
}
function Rd(r, e) {
  e === void 0 && (e = {});
  const {
    forceAllowNewUpload: t = !1
  } = e, {
    allowNewUpload: i,
    currentUploads: o
  } = this.getState();
  if (!i && !t)
    throw new Error("Cannot create a new upload: already uploading.");
  const n = Bn();
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
function Md(r) {
  const {
    currentUploads: e
  } = this.getState();
  return e[r];
}
function $d(r) {
  const e = {
    ...this.getState().currentUploads
  };
  delete e[r], this.setState({
    currentUploads: e
  });
}
async function zd(r) {
  const e = () => {
    const {
      currentUploads: n
    } = this.getState();
    return n[r];
  };
  let t = e();
  const i = [...M(this, Dt)[Dt], ...M(this, Tt)[Tt], ...M(this, it)[it]];
  try {
    for (let n = t.step || 0; n < i.length && t; n++) {
      const s = i[n];
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
        fileIDs: a
      } = t;
      await s(a, r), t = e();
    }
  } catch (n) {
    throw M(this, Ot)[Ot](r), n;
  }
  if (t) {
    t.fileIDs.forEach((l) => {
      const u = this.getFile(l);
      u && u.progress.postprocess && this.emit("postprocess-complete", u);
    });
    const n = t.fileIDs.map((l) => this.getFile(l)), s = n.filter((l) => !l.error), a = n.filter((l) => l.error);
    this.addResultData(r, {
      successful: s,
      failed: a,
      uploadID: r
    }), t = e();
  }
  let o;
  return t && (o = t.result, M(this, Ot)[Ot](r)), o == null && this.log(`Not setting result for an upload that has been removed: ${r}`), o;
}
zi.VERSION = Sd.version;
var ri, se, Fl, It, qs, Dl, Jo, Tl, An, Qo, en, qr = {}, Il = [], Nd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ni = Array.isArray;
function st(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function En(r) {
  r && r.parentNode && r.parentNode.removeChild(r);
}
function c(r, e, t) {
  var i, o, n, s = {};
  for (n in e) n == "key" ? i = e[n] : n == "ref" ? o = e[n] : s[n] = e[n];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ri.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null) for (n in r.defaultProps) s[n] === void 0 && (s[n] = r.defaultProps[n]);
  return Rr(r, s, i, o, null);
}
function Rr(r, e, t, i, o) {
  var n = { type: r, props: e, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Fl, __i: -1, __u: 0 };
  return o == null && se.vnode != null && se.vnode(n), n;
}
function Ld() {
  return { current: null };
}
function ft(r) {
  return r.children;
}
function at(r, e) {
  this.props = r, this.context = e;
}
function tr(r, e) {
  if (e == null) return r.__ ? tr(r.__, r.__i + 1) : null;
  for (var t; e < r.__k.length; e++) if ((t = r.__k[e]) != null && t.__e != null) return t.__e;
  return typeof r.type == "function" ? tr(r) : null;
}
function Cl(r) {
  var e, t;
  if ((r = r.__) != null && r.__c != null) {
    for (r.__e = r.__c.base = null, e = 0; e < r.__k.length; e++) if ((t = r.__k[e]) != null && t.__e != null) {
      r.__e = r.__c.base = t.__e;
      break;
    }
    return Cl(r);
  }
}
function Hs(r) {
  (!r.__d && (r.__d = !0) && It.push(r) && !Ai.__r++ || qs !== se.debounceRendering) && ((qs = se.debounceRendering) || Dl)(Ai);
}
function Ai() {
  var r, e, t, i, o, n, s, a;
  for (It.sort(Jo); r = It.shift(); ) r.__d && (e = It.length, i = void 0, n = (o = (t = r).__v).__e, s = [], a = [], t.__P && ((i = st({}, o)).__v = o.__v + 1, se.vnode && se.vnode(i), Un(t.__P, i, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [n] : null, s, n ?? tr(o), !!(32 & o.__u), a), i.__v = o.__v, i.__.__k[i.__i] = i, Al(s, i, a), i.__e != n && Cl(i)), It.length > e && It.sort(Jo));
  Ai.__r = 0;
}
function Bl(r, e, t, i, o, n, s, a, l, u, p) {
  var d, h, x, D, O, _, T = i && i.__k || Il, m = e.length;
  for (l = jd(t, e, T, l, m), d = 0; d < m; d++) (x = t.__k[d]) != null && (h = x.__i === -1 ? qr : T[x.__i] || qr, x.__i = d, _ = Un(r, x, h, o, n, s, a, l, u, p), D = x.__e, x.ref && h.ref != x.ref && (h.ref && Rn(h.ref, null, x), p.push(x.ref, x.__c || D, x)), O == null && D != null && (O = D), 4 & x.__u || h.__k === x.__k ? l = Ol(x, l, r) : typeof x.type == "function" && _ !== void 0 ? l = _ : D && (l = D.nextSibling), x.__u &= -7);
  return t.__e = O, l;
}
function jd(r, e, t, i, o) {
  var n, s, a, l, u, p = t.length, d = p, h = 0;
  for (r.__k = new Array(o), n = 0; n < o; n++) (s = e[n]) != null && typeof s != "boolean" && typeof s != "function" ? (l = n + h, (s = r.__k[n] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? Rr(null, s, null, null, null) : Ni(s) ? Rr(ft, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? Rr(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = r, s.__b = r.__b + 1, a = null, (u = s.__i = qd(s, t, l, d)) !== -1 && (d--, (a = t[u]) && (a.__u |= 2)), a == null || a.__v === null ? (u == -1 && h--, typeof s.type != "function" && (s.__u |= 4)) : u != l && (u == l - 1 ? h-- : u == l + 1 ? h++ : (u > l ? h-- : h++, s.__u |= 4))) : r.__k[n] = null;
  if (d) for (n = 0; n < p; n++) (a = t[n]) != null && (2 & a.__u) == 0 && (a.__e == i && (i = tr(a)), El(a, a));
  return i;
}
function Ol(r, e, t) {
  var i, o;
  if (typeof r.type == "function") {
    for (i = r.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = r, e = Ol(i[o], e, t));
    return e;
  }
  r.__e != e && (e && r.type && !t.contains(e) && (e = tr(r)), t.insertBefore(r.__e, e || null), e = r.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ut(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (Ni(r) ? r.some(function(t) {
    ut(t, e);
  }) : e.push(r)), e;
}
function qd(r, e, t, i) {
  var o, n, s = r.key, a = r.type, l = e[t];
  if (l === null || l && s == l.key && a === l.type && (2 & l.__u) == 0) return t;
  if (i > (l != null && (2 & l.__u) == 0 ? 1 : 0)) for (o = t - 1, n = t + 1; o >= 0 || n < e.length; ) {
    if (o >= 0) {
      if ((l = e[o]) && (2 & l.__u) == 0 && s == l.key && a === l.type) return o;
      o--;
    }
    if (n < e.length) {
      if ((l = e[n]) && (2 & l.__u) == 0 && s == l.key && a === l.type) return n;
      n++;
    }
  }
  return -1;
}
function Ws(r, e, t) {
  e[0] == "-" ? r.setProperty(e, t ?? "") : r[e] = t == null ? "" : typeof t != "number" || Nd.test(e) ? t : t + "px";
}
function ai(r, e, t, i, o) {
  var n;
  e: if (e == "style") if (typeof t == "string") r.style.cssText = t;
  else {
    if (typeof i == "string" && (r.style.cssText = i = ""), i) for (e in i) t && e in t || Ws(r.style, e, "");
    if (t) for (e in t) i && t[e] === i[e] || Ws(r.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(Tl, "$1")), e = e.toLowerCase() in r || e == "onFocusOut" || e == "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + n] = t, t ? i ? t.u = i.u : (t.u = An, r.addEventListener(e, n ? en : Qo, n)) : r.removeEventListener(e, n ? en : Qo, n);
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
function Gs(r) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + r];
      if (e.t == null) e.t = An++;
      else if (e.t < t.u) return;
      return t(se.event ? se.event(e) : e);
    }
  };
}
function Un(r, e, t, i, o, n, s, a, l, u) {
  var p, d, h, x, D, O, _, T, m, w, S, P, A, E, U, L, ee, J = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (l = !!(32 & t.__u), n = [a = e.__e = t.__e]), (p = se.__b) && p(e);
  e: if (typeof J == "function") try {
    if (T = e.props, m = "prototype" in J && J.prototype.render, w = (p = J.contextType) && i[p.__c], S = p ? w ? w.props.value : p.__ : i, t.__c ? _ = (d = e.__c = t.__c).__ = d.__E : (m ? e.__c = d = new J(T, S) : (e.__c = d = new at(T, S), d.constructor = J, d.render = Wd), w && w.sub(d), d.props = T, d.state || (d.state = {}), d.context = S, d.__n = i, h = d.__d = !0, d.__h = [], d._sb = []), m && d.__s == null && (d.__s = d.state), m && J.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = st({}, d.__s)), st(d.__s, J.getDerivedStateFromProps(T, d.__s))), x = d.props, D = d.state, d.__v = e, h) m && J.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), m && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (m && J.getDerivedStateFromProps == null && T !== x && d.componentWillReceiveProps != null && d.componentWillReceiveProps(T, S), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(T, d.__s, S) === !1 || e.__v == t.__v)) {
        for (e.__v != t.__v && (d.props = T, d.state = d.__s, d.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(re) {
          re && (re.__ = e);
        }), P = 0; P < d._sb.length; P++) d.__h.push(d._sb[P]);
        d._sb = [], d.__h.length && s.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(T, d.__s, S), m && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(x, D, O);
      });
    }
    if (d.context = S, d.props = T, d.__P = r, d.__e = !1, A = se.__r, E = 0, m) {
      for (d.state = d.__s, d.__d = !1, A && A(e), p = d.render(d.props, d.state, d.context), U = 0; U < d._sb.length; U++) d.__h.push(d._sb[U]);
      d._sb = [];
    } else do
      d.__d = !1, A && A(e), p = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++E < 25);
    d.state = d.__s, d.getChildContext != null && (i = st(st({}, i), d.getChildContext())), m && !h && d.getSnapshotBeforeUpdate != null && (O = d.getSnapshotBeforeUpdate(x, D)), a = Bl(r, Ni(L = p != null && p.type === ft && p.key == null ? p.props.children : p) ? L : [L], e, t, i, o, n, s, a, l, u), d.base = e.__e, e.__u &= -161, d.__h.length && s.push(d), _ && (d.__E = d.__ = null);
  } catch (re) {
    if (e.__v = null, l || n != null) if (re.then) {
      for (e.__u |= l ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
      n[n.indexOf(a)] = null, e.__e = a;
    } else for (ee = n.length; ee--; ) En(n[ee]);
    else e.__e = t.__e, e.__k = t.__k;
    se.__e(re, e, t);
  }
  else n == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : a = e.__e = Hd(t.__e, e, t, i, o, n, s, l, u);
  return (p = se.diffed) && p(e), 128 & e.__u ? void 0 : a;
}
function Al(r, e, t) {
  for (var i = 0; i < t.length; i++) Rn(t[i], t[++i], t[++i]);
  se.__c && se.__c(e, r), r.some(function(o) {
    try {
      r = o.__h, o.__h = [], r.some(function(n) {
        n.call(o);
      });
    } catch (n) {
      se.__e(n, o.__v);
    }
  });
}
function Hd(r, e, t, i, o, n, s, a, l) {
  var u, p, d, h, x, D, O, _ = t.props, T = e.props, m = e.type;
  if (m == "svg" ? o = "http://www.w3.org/2000/svg" : m == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), n != null) {
    for (u = 0; u < n.length; u++) if ((x = n[u]) && "setAttribute" in x == !!m && (m ? x.localName == m : x.nodeType == 3)) {
      r = x, n[u] = null;
      break;
    }
  }
  if (r == null) {
    if (m == null) return document.createTextNode(T);
    r = document.createElementNS(o, m, T.is && T), a && (se.__m && se.__m(e, n), a = !1), n = null;
  }
  if (m === null) _ === T || a && r.data === T || (r.data = T);
  else {
    if (n = n && ri.call(r.childNodes), _ = t.props || qr, !a && n != null) for (_ = {}, u = 0; u < r.attributes.length; u++) _[(x = r.attributes[u]).name] = x.value;
    for (u in _) if (x = _[u], u != "children") {
      if (u == "dangerouslySetInnerHTML") d = x;
      else if (!(u in T)) {
        if (u == "value" && "defaultValue" in T || u == "checked" && "defaultChecked" in T) continue;
        ai(r, u, null, x, o);
      }
    }
    for (u in T) x = T[u], u == "children" ? h = x : u == "dangerouslySetInnerHTML" ? p = x : u == "value" ? D = x : u == "checked" ? O = x : a && typeof x != "function" || _[u] === x || ai(r, u, x, _[u], o);
    if (p) a || d && (p.__html === d.__html || p.__html === r.innerHTML) || (r.innerHTML = p.__html), e.__k = [];
    else if (d && (r.innerHTML = ""), Bl(r, Ni(h) ? h : [h], e, t, i, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, n, s, n ? n[0] : t.__k && tr(t, 0), a, l), n != null) for (u = n.length; u--; ) En(n[u]);
    a || (u = "value", m == "progress" && D == null ? r.removeAttribute("value") : D !== void 0 && (D !== r[u] || m == "progress" && !D || m == "option" && D !== _[u]) && ai(r, u, D, _[u], o), u = "checked", O !== void 0 && O !== r[u] && ai(r, u, O, _[u], o));
  }
  return r;
}
function Rn(r, e, t) {
  try {
    if (typeof r == "function") {
      var i = typeof r.__u == "function";
      i && r.__u(), i && e == null || (r.__u = r(e));
    } else r.current = e;
  } catch (o) {
    se.__e(o, t);
  }
}
function El(r, e, t) {
  var i, o;
  if (se.unmount && se.unmount(r), (i = r.ref) && (i.current && i.current !== r.__e || Rn(i, null, e)), (i = r.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      se.__e(n, e);
    }
    i.base = i.__P = null;
  }
  if (i = r.__k) for (o = 0; o < i.length; o++) i[o] && El(i[o], e, t || typeof r.type != "function");
  t || En(r.__e), r.__c = r.__ = r.__e = void 0;
}
function Wd(r, e, t) {
  return this.constructor(r, t);
}
function Vs(r, e, t) {
  var i, o, n, s;
  e == document && (e = document.documentElement), se.__ && se.__(r, e), o = (i = !1) ? null : e.__k, n = [], s = [], Un(e, r = e.__k = c(ft, null, [r]), o || qr, qr, e.namespaceURI, o ? null : e.firstChild ? ri.call(e.childNodes) : null, n, o ? o.__e : e.firstChild, i, s), Al(n, r, s);
}
function Ul(r, e, t) {
  var i, o, n, s, a = st({}, r.props);
  for (n in r.type && r.type.defaultProps && (s = r.type.defaultProps), e) n == "key" ? i = e[n] : n == "ref" ? o = e[n] : a[n] = e[n] === void 0 && s !== void 0 ? s[n] : e[n];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? ri.call(arguments, 2) : t), Rr(r.type, a, i || r.key, o || r.ref, null);
}
ri = Il.slice, se = { __e: function(r, e, t, i) {
  for (var o, n, s; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((n = o.constructor) && n.getDerivedStateFromError != null && (o.setState(n.getDerivedStateFromError(r)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(r, i || {}), s = o.__d), s) return o.__E = o;
  } catch (a) {
    r = a;
  }
  throw r;
} }, Fl = 0, at.prototype.setState = function(r, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = st({}, this.state), typeof r == "function" && (r = r(st({}, t), this.props)), r && st(t, r), r != null && this.__v && (e && this._sb.push(e), Hs(this));
}, at.prototype.forceUpdate = function(r) {
  this.__v && (this.__e = !0, r && this.__h.push(r), Hs(this));
}, at.prototype.render = ft, It = [], Dl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Jo = function(r, e) {
  return r.__v.__b - e.__v.__b;
}, Ai.__r = 0, Tl = /(PointerCapture)$|Capture$/i, An = 0, Qo = Gs(!1), en = Gs(!0);
function Rl(r) {
  return typeof r != "object" || r === null || !("nodeType" in r) ? !1 : r.nodeType === Node.ELEMENT_NODE;
}
function Gd(r, e) {
  return e === void 0 && (e = document), typeof r == "string" ? e.querySelector(r) : Rl(r) ? r : null;
}
function Ml(r) {
  for (var e; r && !r.dir; )
    r = r.parentNode;
  return (e = r) == null ? void 0 : e.dir;
}
class $l {
  constructor(e, t) {
    this.uppy = e, this.opts = t ?? {};
  }
  getPluginState() {
    const {
      plugins: e
    } = this.uppy.getState();
    return (e == null ? void 0 : e[this.id]) || {};
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
    const e = new bl([this.defaultLocale, this.uppy.locale, this.opts.locale]);
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
function Ks(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Vd = 0;
function Kd(r) {
  return "__private_" + Vd++ + "_" + r;
}
function Xd(r) {
  let e = null, t;
  return function() {
    for (var i = arguments.length, o = new Array(i), n = 0; n < i; n++)
      o[n] = arguments[n];
    return t = o, e || (e = Promise.resolve().then(() => (e = null, r(...t)))), e;
  };
}
var br = /* @__PURE__ */ Kd("updateUI");
class Rt extends $l {
  constructor() {
    super(...arguments), Object.defineProperty(this, br, {
      writable: !0,
      value: void 0
    });
  }
  getTargetPlugin(e) {
    let t;
    if (typeof (e == null ? void 0 : e.addTarget) == "function")
      t = e, t instanceof Rt || console.warn(new Error("The provided plugin is not an instance of UIPlugin. This is an indication of a bug with the way Uppy is bundled.", {
        cause: {
          targetPlugin: t,
          UIPlugin: Rt
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
    const i = t.id, o = Gd(e);
    if (o) {
      this.isTargetDOMEl = !0;
      const a = document.createElement("div");
      return a.classList.add("uppy-Root"), Ks(this, br)[br] = Xd((l) => {
        this.uppy.getPlugin(this.id) && (Vs(this.render(l, a), a), this.afterUpdate());
      }), this.uppy.log(`Installing ${i} to a DOM element '${e}'`), this.opts.replaceTargetContent && (o.innerHTML = ""), Vs(this.render(this.uppy.getState(), a), a), this.el = a, o.appendChild(a), a.dir = this.opts.direction || Ml(a) || "ltr", this.onMount(), this.el;
    }
    const n = this.getTargetPlugin(e);
    if (n)
      return this.uppy.log(`Installing ${i} to ${n.id}`), this.parent = n, this.el = n.addTarget(t), this.onMount(), this.el;
    this.uppy.log(`Not installing ${i}`);
    let s = `Invalid target option given to ${i}.`;
    throw typeof e == "function" ? s += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly." : s += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.", new Error(s);
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
      (t = (i = Ks(this, br))[br]) == null || t.call(i, e);
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
function Xs(r, e, t, i) {
  return r === e ? r : i === 0 ? e : r + (e - r) * 2 ** (-i / t);
}
const Ve = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete"
};
var wo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ys;
function Yd() {
  return Ys || (Ys = 1, function(r) {
    (function() {
      var e = {}.hasOwnProperty;
      function t() {
        for (var n = "", s = 0; s < arguments.length; s++) {
          var a = arguments[s];
          a && (n = o(n, i(a)));
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
        var s = "";
        for (var a in n)
          e.call(n, a) && n[a] && (s = o(s, a));
        return s;
      }
      function o(n, s) {
        return s ? n ? n + " " + s : n + s : n;
      }
      r.exports ? (t.default = t, r.exports = t) : window.classNames = t;
    })();
  }(wo)), wo.exports;
}
var Zd = Yd();
const He = /* @__PURE__ */ zt(Zd);
function _o(r) {
  const e = [];
  let t = "indeterminate", i;
  for (const {
    progress: n
  } of Object.values(r)) {
    const {
      preprocess: s,
      postprocess: a
    } = n;
    i == null && (s || a) && ({
      mode: t,
      message: i
    } = s || a), (s == null ? void 0 : s.mode) === "determinate" && e.push(s.value), (a == null ? void 0 : a.mode) === "determinate" && e.push(a.value);
  }
  const o = e.reduce((n, s) => n + s / e.length, 0);
  return {
    mode: t,
    message: i,
    value: o
  };
}
function Jd(r) {
  const e = Math.floor(r / 3600) % 24, t = Math.floor(r / 60) % 60, i = Math.floor(r % 60);
  return {
    hours: e,
    minutes: t,
    seconds: i
  };
}
function Qd(r) {
  const e = Jd(r), t = e.hours === 0 ? "" : `${e.hours}h`, i = e.minutes === 0 ? "" : `${e.hours === 0 ? e.minutes : ` ${e.minutes.toString(10).padStart(2, "0")}`}m`, o = e.hours !== 0 ? "" : `${e.minutes === 0 ? e.seconds : ` ${e.seconds.toString(10).padStart(2, "0")}`}s`;
  return `${t}${i}${o}`;
}
const ec = "·", Zs = () => ` ${ec} `;
function tc(r) {
  const {
    newFiles: e,
    isUploadStarted: t,
    recoveredState: i,
    i18n: o,
    uploadState: n,
    isSomeGhost: s,
    startUpload: a
  } = r, l = He("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--upload", {
    "uppy-c-btn-primary": n === Ve.STATE_WAITING
  }, {
    "uppy-StatusBar-actionBtn--disabled": s
  }), u = e && t && !i ? o("uploadXNewFiles", {
    smart_count: e
  }) : o("uploadXFiles", {
    smart_count: e
  });
  return c("button", {
    type: "button",
    className: l,
    "aria-label": o("uploadXFiles", {
      smart_count: e
    }),
    onClick: a,
    disabled: s,
    "data-uppy-super-focusable": !0
  }, u);
}
function rc(r) {
  const {
    i18n: e,
    uppy: t
  } = r;
  return c("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
    "aria-label": e("retryUpload"),
    onClick: () => t.retryAll().catch(() => {
    }),
    "data-uppy-super-focusable": !0,
    "data-cy": "retry"
  }, c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "8",
    height: "10",
    viewBox: "0 0 8 10"
  }, c("path", {
    d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
  })), e("retry"));
}
function ic(r) {
  const {
    i18n: e,
    uppy: t
  } = r;
  return c("button", {
    type: "button",
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    title: e("cancel"),
    "aria-label": e("cancel"),
    onClick: () => t.cancelAll(),
    "data-cy": "cancel",
    "data-uppy-super-focusable": !0
  }, c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, c("g", {
    fill: "none",
    fillRule: "evenodd"
  }, c("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), c("path", {
    fill: "#FFF",
    d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
  }))));
}
function oc(r) {
  const {
    isAllPaused: e,
    i18n: t,
    isAllComplete: i,
    resumableUploads: o,
    uppy: n
  } = r, s = t(e ? "resume" : "pause");
  function a() {
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
  return c("button", {
    title: s,
    "aria-label": s,
    className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    type: "button",
    onClick: a,
    "data-cy": "togglePauseResume",
    "data-uppy-super-focusable": !0
  }, c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, c("g", {
    fill: "none",
    fillRule: "evenodd"
  }, c("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), c("path", {
    fill: "#FFF",
    d: e ? "M6 4.25L11.5 8 6 11.75z" : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z"
  }))));
}
function nc(r) {
  const {
    i18n: e,
    doneButtonHandler: t
  } = r;
  return c("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--done",
    onClick: t,
    "data-uppy-super-focusable": !0
  }, e("done"));
}
function zl() {
  return c("svg", {
    className: "uppy-StatusBar-spinner",
    "aria-hidden": "true",
    focusable: "false",
    width: "14",
    height: "14"
  }, c("path", {
    d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
    fillRule: "evenodd"
  }));
}
function sc(r) {
  const {
    progress: e
  } = r, {
    value: t,
    mode: i,
    message: o
  } = e;
  return c("div", {
    className: "uppy-StatusBar-content"
  }, c(zl, null), i === "determinate" ? `${Math.round(t * 100)}% · ` : "", o);
}
function ac(r) {
  const {
    numUploads: e,
    complete: t,
    totalUploadedSize: i,
    totalSize: o,
    totalETA: n,
    i18n: s
  } = r, a = e > 1, l = Bt(i);
  return c("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, a && s("filesUploadedOfTotal", {
    complete: t,
    smart_count: e
  }), c("span", {
    className: "uppy-StatusBar-additionalInfo"
  }, a && Zs(), o != null ? s("dataUploadedOfTotal", {
    complete: l,
    total: Bt(o)
  }) : s("dataUploadedOfUnknown", {
    complete: l
  }), Zs(), n != null && s("xTimeLeft", {
    time: Qd(n)
  })));
}
function Nl(r) {
  const {
    i18n: e,
    complete: t,
    numUploads: i
  } = r;
  return c("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, e("filesUploadedOfTotal", {
    complete: t,
    smart_count: i
  }));
}
function lc(r) {
  const {
    i18n: e,
    newFiles: t,
    startUpload: i
  } = r, o = He("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--uploadNewlyAdded");
  return c("div", {
    className: "uppy-StatusBar-statusSecondary"
  }, c("div", {
    className: "uppy-StatusBar-statusSecondaryHint"
  }, e("xMoreFilesAdded", {
    smart_count: t
  })), c("button", {
    type: "button",
    className: o,
    "aria-label": e("uploadXFiles", {
      smart_count: t
    }),
    onClick: i
  }, e("upload")));
}
function uc(r) {
  const {
    i18n: e,
    supportsUploadProgress: t,
    totalProgress: i,
    showProgressDetails: o,
    isUploadStarted: n,
    isAllComplete: s,
    isAllPaused: a,
    newFiles: l,
    numUploads: u,
    complete: p,
    totalUploadedSize: d,
    totalSize: h,
    totalETA: x,
    startUpload: D
  } = r, O = l && n;
  if (!n || s)
    return null;
  const _ = e(a ? "paused" : "uploading");
  function T() {
    return !a && !O && o ? t ? c(ac, {
      numUploads: u,
      complete: p,
      totalUploadedSize: d,
      totalSize: h,
      totalETA: x,
      i18n: e
    }) : c(Nl, {
      i18n: e,
      complete: p,
      numUploads: u
    }) : null;
  }
  return c("div", {
    className: "uppy-StatusBar-content",
    "aria-label": _,
    title: _
  }, a ? null : c(zl, null), c("div", {
    className: "uppy-StatusBar-status"
  }, c("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, t && i !== 0 ? `${_}: ${i}%` : _), T(), O ? c(lc, {
    i18n: e,
    newFiles: l,
    startUpload: D
  }) : null));
}
function pc(r) {
  const {
    i18n: e
  } = r;
  return c("div", {
    className: "uppy-StatusBar-content",
    role: "status",
    title: e("complete")
  }, c("div", {
    className: "uppy-StatusBar-status"
  }, c("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "15",
    height: "11",
    viewBox: "0 0 15 11"
  }, c("path", {
    d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
  })), e("complete"))));
}
function dc(r) {
  const {
    error: e,
    i18n: t,
    complete: i,
    numUploads: o
  } = r;
  function n() {
    const s = `${t("uploadFailed")} 

 ${e}`;
    alert(s);
  }
  return c("div", {
    className: "uppy-StatusBar-content",
    title: t("uploadFailed")
  }, c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-StatusBar-statusIndicator uppy-c-icon",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11"
  }, c("path", {
    d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
  })), c("div", {
    className: "uppy-StatusBar-status"
  }, c("div", {
    className: "uppy-StatusBar-statusPrimary"
  }, t("uploadFailed"), c("button", {
    className: "uppy-u-reset uppy-StatusBar-details",
    "aria-label": t("showErrorDetails"),
    "data-microtip-position": "top-right",
    "data-microtip-size": "medium",
    onClick: n,
    type: "button"
  }, "?")), c(Nl, {
    i18n: t,
    complete: i,
    numUploads: o
  })));
}
const {
  STATE_ERROR: Js,
  STATE_WAITING: cc,
  STATE_PREPROCESSING: xo,
  STATE_UPLOADING: li,
  STATE_POSTPROCESSING: So,
  STATE_COMPLETE: ui
} = Ve;
function hc(r) {
  let {
    newFiles: e,
    allowNewUpload: t,
    isUploadInProgress: i,
    isAllPaused: o,
    resumableUploads: n,
    error: s,
    hideUploadButton: a = void 0,
    hidePauseResumeButton: l = !1,
    hideCancelButton: u = !1,
    hideRetryButton: p = !1,
    recoveredState: d,
    uploadState: h,
    totalProgress: x,
    files: D,
    supportsUploadProgress: O,
    hideAfterFinish: _ = !1,
    isSomeGhost: T,
    doneButtonHandler: m = void 0,
    isUploadStarted: w,
    i18n: S,
    startUpload: P,
    uppy: A,
    isAllComplete: E,
    showProgressDetails: U = void 0,
    numUploads: L,
    complete: ee,
    totalSize: J,
    totalETA: re,
    totalUploadedSize: C
  } = r;
  function ie() {
    switch (h) {
      case So:
      case xo: {
        const bt = _o(D);
        return bt.mode === "determinate" ? bt.value * 100 : x;
      }
      case Js:
        return null;
      case li:
        return O ? x : null;
      default:
        return x;
    }
  }
  function le() {
    switch (h) {
      case So:
      case xo: {
        const {
          mode: bt
        } = _o(D);
        return bt === "indeterminate";
      }
      case li:
        return !O;
      default:
        return !1;
    }
  }
  const y = ie(), f = y ?? 100, g = !s && e && (!i && !o || d) && t && !a, F = !u && h !== cc && h !== ui, B = n && !l && h === li, I = s && !E && !p, W = m && h === ui, R = He("uppy-StatusBar-progress", {
    "is-indeterminate": le()
  }), V = He("uppy-StatusBar", `is-${h}`, {
    "has-ghosts": T
  }), ce = (() => {
    switch (h) {
      case xo:
      case So:
        return c(sc, {
          progress: _o(D)
        });
      case ui:
        return c(pc, {
          i18n: S
        });
      case Js:
        return c(dc, {
          error: s,
          i18n: S,
          numUploads: L,
          complete: ee
        });
      case li:
        return c(uc, {
          i18n: S,
          supportsUploadProgress: O,
          totalProgress: x,
          showProgressDetails: U,
          isUploadStarted: w,
          isAllComplete: E,
          isAllPaused: o,
          newFiles: e,
          numUploads: L,
          complete: ee,
          totalUploadedSize: C,
          totalSize: J,
          totalETA: re,
          startUpload: P
        });
      default:
        return null;
    }
  })();
  return !(g || I || B || F || W) && !ce || h === ui && _ ? null : c("div", {
    className: V
  }, c("div", {
    className: R,
    style: {
      width: `${f}%`
    },
    role: "progressbar",
    "aria-label": `${f}%`,
    "aria-valuetext": `${f}%`,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": y
  }), ce, c("div", {
    className: "uppy-StatusBar-actions"
  }, g ? c(tc, {
    newFiles: e,
    isUploadStarted: w,
    recoveredState: d,
    i18n: S,
    isSomeGhost: T,
    startUpload: P,
    uploadState: h
  }) : null, I ? c(rc, {
    i18n: S,
    uppy: A
  }) : null, B ? c(oc, {
    isAllPaused: o,
    i18n: S,
    isAllComplete: E,
    resumableUploads: n,
    uppy: A
  }) : null, F ? c(ic, {
    i18n: S,
    uppy: A
  }) : null, W ? c(nc, {
    i18n: S,
    doneButtonHandler: m
  }) : null));
}
const fc = {
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
function ue(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var yc = 0;
function nr(r) {
  return "__private_" + yc++ + "_" + r;
}
const mc = {
  version: "4.1.3"
}, gc = 2e3, bc = 2e3;
function vc(r, e, t, i) {
  if (r)
    return Ve.STATE_ERROR;
  if (e)
    return Ve.STATE_COMPLETE;
  if (t)
    return Ve.STATE_WAITING;
  let o = Ve.STATE_WAITING;
  const n = Object.keys(i);
  for (let s = 0; s < n.length; s++) {
    const {
      progress: a
    } = i[n[s]];
    if (a.uploadStarted && !a.uploadComplete)
      return Ve.STATE_UPLOADING;
    a.preprocess && (o = Ve.STATE_PREPROCESSING), a.postprocess && o !== Ve.STATE_PREPROCESSING && (o = Ve.STATE_POSTPROCESSING);
  }
  return o;
}
const wc = {
  hideUploadButton: !1,
  hideRetryButton: !1,
  hidePauseResumeButton: !1,
  hideCancelButton: !1,
  showProgressDetails: !1,
  hideAfterFinish: !0,
  doneButtonHandler: null
};
var $e = /* @__PURE__ */ nr("lastUpdateTime"), Le = /* @__PURE__ */ nr("previousUploadedBytes"), rt = /* @__PURE__ */ nr("previousSpeed"), Ae = /* @__PURE__ */ nr("previousETA"), Po = /* @__PURE__ */ nr("computeSmoothETA"), vr = /* @__PURE__ */ nr("onUploadStart");
class Ll extends Rt {
  constructor(e, t) {
    super(e, {
      ...wc,
      ...t
    }), Object.defineProperty(this, Po, {
      value: _c
    }), Object.defineProperty(this, $e, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Le, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, rt, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Ae, {
      writable: !0,
      value: void 0
    }), this.startUpload = () => this.uppy.upload().catch(() => {
    }), Object.defineProperty(this, vr, {
      writable: !0,
      value: () => {
        const {
          recoveredState: i
        } = this.uppy.getState();
        if (ue(this, rt)[rt] = null, ue(this, Ae)[Ae] = null, i) {
          ue(this, Le)[Le] = Object.values(i.files).reduce((o, n) => {
            let {
              progress: s
            } = n;
            return o + s.bytesUploaded;
          }, 0), this.uppy.emit("restore-confirmed");
          return;
        }
        ue(this, $e)[$e] = performance.now(), ue(this, Le)[Le] = 0;
      }
    }), this.id = this.opts.id || "StatusBar", this.title = "StatusBar", this.type = "progressindicator", this.defaultLocale = fc, this.i18nInit(), this.render = this.render.bind(this), this.install = this.install.bind(this);
  }
  render(e) {
    const {
      capabilities: t,
      files: i,
      allowNewUpload: o,
      totalProgress: n,
      error: s,
      recoveredState: a
    } = e, {
      newFiles: l,
      startedFiles: u,
      completeFiles: p,
      isUploadStarted: d,
      isAllComplete: h,
      isAllPaused: x,
      isUploadInProgress: D,
      isSomeGhost: O
    } = this.uppy.getObjectOfFilesPerState(), _ = a ? Object.values(i) : l, T = !!t.resumableUploads, m = t.uploadProgress !== !1;
    let w = null, S = 0;
    u.every((A) => A.progress.bytesTotal != null && A.progress.bytesTotal !== 0) ? (w = 0, u.forEach((A) => {
      w += A.progress.bytesTotal || 0, S += A.progress.bytesUploaded || 0;
    })) : u.forEach((A) => {
      S += A.progress.bytesUploaded || 0;
    });
    const P = ue(this, Po)[Po]({
      uploaded: S,
      total: w
    });
    return hc({
      error: s,
      uploadState: vc(s, h, a, e.files || {}),
      allowNewUpload: o,
      totalProgress: n,
      totalSize: w,
      totalUploadedSize: S,
      isAllComplete: !1,
      isAllPaused: x,
      isUploadStarted: d,
      isUploadInProgress: D,
      isSomeGhost: O,
      recoveredState: a,
      complete: p.length,
      newFiles: _.length,
      numUploads: u.length,
      totalETA: P,
      files: i,
      i18n: this.i18n,
      uppy: this.uppy,
      startUpload: this.startUpload,
      doneButtonHandler: this.opts.doneButtonHandler,
      resumableUploads: T,
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
    Ml(e) || (e.dir = "ltr");
  }
  install() {
    const {
      target: e
    } = this.opts;
    e && this.mount(e, this), this.uppy.on("upload", ue(this, vr)[vr]), ue(this, $e)[$e] = performance.now(), ue(this, Le)[Le] = this.uppy.getFiles().reduce((t, i) => t + i.progress.bytesUploaded, 0);
  }
  uninstall() {
    this.unmount(), this.uppy.off("upload", ue(this, vr)[vr]);
  }
}
function _c(r) {
  var e, t;
  if (r.total == null || r.total === 0)
    return null;
  const i = r.total - r.uploaded;
  if (i <= 0)
    return null;
  (t = (e = ue(this, $e))[$e]) != null || (e[$e] = performance.now());
  const o = performance.now() - ue(this, $e)[$e];
  if (o === 0) {
    var n;
    return Math.round(((n = ue(this, Ae)[Ae]) != null ? n : 0) / 100) / 10;
  }
  const s = r.uploaded - ue(this, Le)[Le];
  if (ue(this, Le)[Le] = r.uploaded, s <= 0) {
    var a;
    return Math.round(((a = ue(this, Ae)[Ae]) != null ? a : 0) / 100) / 10;
  }
  const l = s / o, u = ue(this, rt)[rt] == null ? l : Xs(l, ue(this, rt)[rt], gc, o);
  ue(this, rt)[rt] = u;
  const p = i / u, d = Math.max(ue(this, Ae)[Ae] - o, 0), h = ue(this, Ae)[Ae] == null ? p : Xs(p, d, bc, o);
  return ue(this, Ae)[Ae] = h, ue(this, $e)[$e] = performance.now(), Math.round(h / 100) / 10;
}
Ll.VERSION = mc.version;
const Qs = 300;
class xc extends at {
  constructor() {
    super(...arguments), this.ref = Ld();
  }
  componentWillEnter(e) {
    this.ref.current.style.opacity = "1", this.ref.current.style.transform = "none", setTimeout(e, Qs);
  }
  componentWillLeave(e) {
    this.ref.current.style.opacity = "0", this.ref.current.style.transform = "translateY(350%)", setTimeout(e, Qs);
  }
  render() {
    const {
      children: e
    } = this.props;
    return c("div", {
      className: "uppy-Informer-animated",
      ref: this.ref
    }, e);
  }
}
function Sc(r, e) {
  return Object.assign(r, e);
}
function Pc(r, e) {
  var t;
  return (t = r == null ? void 0 : r.key) != null ? t : e;
}
function kc(r, e) {
  const t = r._ptgLinkedRefs || (r._ptgLinkedRefs = {});
  return t[e] || (t[e] = (i) => {
    r.refs[e] = i;
  });
}
function wr(r) {
  const e = {};
  for (let t = 0; t < r.length; t++)
    if (r[t] != null) {
      const i = Pc(r[t], t.toString(36));
      e[i] = r[t];
    }
  return e;
}
function Fc(r, e) {
  r = r || {}, e = e || {};
  const t = (s) => e.hasOwnProperty(s) ? e[s] : r[s], i = {};
  let o = [];
  for (const s in r)
    e.hasOwnProperty(s) ? o.length && (i[s] = o, o = []) : o.push(s);
  const n = {};
  for (const s in e) {
    if (i.hasOwnProperty(s))
      for (let a = 0; a < i[s].length; a++) {
        const l = i[s][a];
        n[i[s][a]] = t(l);
      }
    n[s] = t(s);
  }
  for (let s = 0; s < o.length; s++)
    n[o[s]] = t(o[s]);
  return n;
}
const Dc = (r) => r;
class jl extends at {
  constructor(e, t) {
    super(e, t), this.refs = {}, this.state = {
      children: wr(ut(ut(this.props.children)) || [])
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
    const t = wr(ut(e.children) || []), i = this.state.children;
    this.setState((n) => ({
      children: Fc(n.children, t)
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
    const i = wr(ut(this.props.children) || []);
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
    const i = wr(ut(this.props.children) || []);
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
    const o = wr(ut(this.props.children) || []);
    if (o && o.hasOwnProperty(e))
      this.performEnter(e);
    else {
      const n = Sc({}, this.state.children);
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
      transitionAppear: s,
      transitionEnter: a,
      transitionLeaveTimeout: l,
      transitionEnterTimeout: u,
      transitionAppearTimeout: p,
      component: d,
      ...h
    } = e, {
      children: x
    } = t;
    const D = Object.entries(x).map((O) => {
      let [_, T] = O;
      if (!T) return;
      const m = kc(this, _);
      return Ul(i(T), {
        ref: m,
        key: _
      });
    }).filter(Boolean);
    return c(d, h, D);
  }
}
jl.defaultProps = {
  component: "span",
  childFactory: Dc
};
const Tc = {
  version: "4.2.1"
};
class ql extends Rt {
  constructor(e, t) {
    super(e, t), this.render = (i) => c("div", {
      className: "uppy uppy-Informer"
    }, c(jl, null, i.info.map((o) => c(xc, {
      key: o.message
    }, c("p", {
      role: "alert"
    }, o.message, " ", o.details && c("span", {
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
ql.VERSION = Tc.version;
const Ic = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;
function Cc(r, e, t) {
  var i, o;
  const n = Ic.exec(r), s = (i = (o = e.mimeType) != null ? o : n == null ? void 0 : n[1]) != null ? i : "plain/text";
  let a;
  if ((n == null ? void 0 : n[2]) != null) {
    const l = atob(decodeURIComponent(n[3])), u = new Uint8Array(l.length);
    for (let p = 0; p < l.length; p++)
      u[p] = l.charCodeAt(p);
    a = [u];
  } else (n == null ? void 0 : n[3]) != null && (a = [decodeURIComponent(n[3])]);
  return new Blob(a, {
    type: s
  });
}
function ea(r) {
  return r.startsWith("blob:");
}
function ta(r) {
  return r ? /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(r) : !1;
}
function te(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
var Hl = typeof self < "u" ? self : global;
const Hr = typeof navigator < "u", Bc = Hr && typeof HTMLImageElement > "u", ra = !(typeof global > "u" || typeof process > "u" || !process.versions || !process.versions.node), Wl = Hl.Buffer, Gl = !!Wl, Oc = (r) => r !== void 0;
function Vl(r) {
  return r === void 0 || (r instanceof Map ? r.size === 0 : Object.values(r).filter(Oc).length === 0);
}
function be(r) {
  let e = new Error(r);
  throw delete e.stack, e;
}
function ia(r) {
  let e = function(t) {
    let i = 0;
    return t.ifd0.enabled && (i += 1024), t.exif.enabled && (i += 2048), t.makerNote && (i += 2048), t.userComment && (i += 1024), t.gps.enabled && (i += 512), t.interop.enabled && (i += 100), t.ifd1.enabled && (i += 1024), i + 2048;
  }(r);
  return r.jfif.enabled && (e += 50), r.xmp.enabled && (e += 2e4), r.iptc.enabled && (e += 14e3), r.icc.enabled && (e += 6e3), e;
}
const ko = (r) => String.fromCharCode.apply(null, r), oa = typeof TextDecoder < "u" ? new TextDecoder("utf-8") : void 0;
let Wr = class Gt {
  static from(e, t) {
    return e instanceof this && e.le === t ? e : new Gt(e, void 0, void 0, t);
  }
  constructor(e, t = 0, i, o) {
    if (typeof o == "boolean" && (this.le = o), Array.isArray(e) && (e = new Uint8Array(e)), e === 0) this.byteOffset = 0, this.byteLength = 0;
    else if (e instanceof ArrayBuffer) {
      i === void 0 && (i = e.byteLength - t);
      let n = new DataView(e, t, i);
      this._swapDataView(n);
    } else if (e instanceof Uint8Array || e instanceof DataView || e instanceof Gt) {
      i === void 0 && (i = e.byteLength - t), (t += e.byteOffset) + i > e.byteOffset + e.byteLength && be("Creating view outside of available memory in ArrayBuffer");
      let n = new DataView(e.buffer, t, i);
      this._swapDataView(n);
    } else if (typeof e == "number") {
      let n = new DataView(new ArrayBuffer(e));
      this._swapDataView(n);
    } else be("Invalid input argument for BufferView: " + e);
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
  set(e, t, i = Gt) {
    return e instanceof DataView || e instanceof Gt ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array || be("BufferView.set(): Invalid data argument."), this.toUint8().set(e, t), new i(this, t, e.byteLength);
  }
  subarray(e, t) {
    return t = t || this._lengthToEnd(e), new Gt(this, e, t);
  }
  toUint8() {
    return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
  }
  getUint8Array(e, t) {
    return new Uint8Array(this.buffer, this.byteOffset + e, t);
  }
  getString(e = 0, t = this.byteLength) {
    return o = this.getUint8Array(e, t), oa ? oa.decode(o) : Gl ? Buffer.from(o).toString("utf8") : decodeURIComponent(escape(ko(o)));
    var o;
  }
  getLatin1String(e = 0, t = this.byteLength) {
    let i = this.getUint8Array(e, t);
    return ko(i);
  }
  getUnicodeString(e = 0, t = this.byteLength) {
    const i = [];
    for (let o = 0; o < t && e + o < this.byteLength; o += 2) i.push(this.getUint16(e + o));
    return ko(i);
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
function tn(r, e) {
  be(`${r} '${e}' was not loaded, try using full build of exifr.`);
}
class Mn extends Map {
  constructor(e) {
    super(), this.kind = e;
  }
  get(e, t) {
    return this.has(e) || tn(this.kind, e), t && (e in t || function(i, o) {
      be(`Unknown ${i} '${o}'.`);
    }(this.kind, e), t[e].enabled || tn(this.kind, e)), super.get(e);
  }
  keyList() {
    return Array.from(this.keys());
  }
}
var Kl = new Mn("file parser"), je = new Mn("segment parser"), $n = new Mn("file reader");
let Ac = Hl.fetch;
function na(r, e) {
  return (t = r).startsWith("data:") || t.length > 1e4 ? on(r, e, "base64") : ra && r.includes("://") ? rn(r, e, "url", sa) : ra ? on(r, e, "fs") : Hr ? rn(r, e, "url", sa) : void be("Invalid input argument");
  var t;
}
async function rn(r, e, t, i) {
  return $n.has(t) ? on(r, e, t) : i ? async function(o, n) {
    let s = await n(o);
    return new Wr(s);
  }(r, i) : void be(`Parser ${t} is not loaded`);
}
async function on(r, e, t) {
  let i = new ($n.get(t))(r, e);
  return await i.read(), i;
}
const sa = (r) => Ac(r).then((e) => e.arrayBuffer()), nn = (r) => new Promise((e, t) => {
  let i = new FileReader();
  i.onloadend = () => e(i.result || new ArrayBuffer()), i.onerror = t, i.readAsArrayBuffer(r);
}), zn = /* @__PURE__ */ new Map(), Ec = /* @__PURE__ */ new Map(), Uc = /* @__PURE__ */ new Map(), pi = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"], Xl = ["jfif", "xmp", "icc", "iptc", "ihdr"], sn = ["tiff", ...Xl], ge = ["ifd0", "ifd1", "exif", "gps", "interop"], di = [...sn, ...ge], ci = ["makerNote", "userComment"], Yl = ["translateKeys", "translateValues", "reviveValues", "multiSegment"], hi = [...Yl, "sanitize", "mergeOutput", "silentErrors"];
class Zl {
  get translate() {
    return this.translateKeys || this.translateValues || this.reviveValues;
  }
}
let _r = class extends Zl {
  get needed() {
    return this.enabled || this.deps.size > 0;
  }
  constructor(e, t, i, o) {
    if (super(), te(this, "enabled", !1), te(this, "skip", /* @__PURE__ */ new Set()), te(this, "pick", /* @__PURE__ */ new Set()), te(this, "deps", /* @__PURE__ */ new Set()), te(this, "translateKeys", !1), te(this, "translateValues", !1), te(this, "reviveValues", !1), this.key = e, this.enabled = t, this.parse = this.enabled, this.applyInheritables(o), this.canBeFiltered = ge.includes(e), this.canBeFiltered && (this.dict = zn.get(e)), i !== void 0) if (Array.isArray(i)) this.parse = this.enabled = !0, this.canBeFiltered && i.length > 0 && this.translateTagSet(i, this.pick);
    else if (typeof i == "object") {
      if (this.enabled = !0, this.parse = i.parse !== !1, this.canBeFiltered) {
        let { pick: n, skip: s } = i;
        n && n.length > 0 && this.translateTagSet(n, this.pick), s && s.length > 0 && this.translateTagSet(s, this.skip);
      }
      this.applyInheritables(i);
    } else i === !0 || i === !1 ? this.parse = this.enabled = i : be(`Invalid options argument: ${i}`);
  }
  applyInheritables(e) {
    let t, i;
    for (t of Yl) i = e[t], i !== void 0 && (this[t] = i);
  }
  translateTagSet(e, t) {
    if (this.dict) {
      let i, o, { tagKeys: n, tagValues: s } = this.dict;
      for (i of e) typeof i == "string" ? (o = s.indexOf(i), o === -1 && (o = n.indexOf(Number(i))), o !== -1 && t.add(Number(n[o]))) : t.add(i);
    } else for (let i of e) t.add(i);
  }
  finalizeFilters() {
    !this.enabled && this.deps.size > 0 ? (this.enabled = !0, Ei(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && Ei(this.pick, this.deps);
  }
};
var Fe = { jfif: !1, tiff: !0, xmp: !1, icc: !1, iptc: !1, ifd0: !0, ifd1: !1, exif: !0, gps: !0, interop: !1, ihdr: void 0, makerNote: !1, userComment: !1, multiSegment: !1, skip: [], pick: [], translateKeys: !0, translateValues: !0, reviveValues: !0, sanitize: !0, mergeOutput: !0, silentErrors: !0, chunked: !0, firstChunkSize: void 0, firstChunkSizeNode: 512, firstChunkSizeBrowser: 65536, chunkSize: 65536, chunkLimit: 5 }, aa = /* @__PURE__ */ new Map();
class Nn extends Zl {
  static useCached(e) {
    let t = aa.get(e);
    return t !== void 0 || (t = new this(e), aa.set(e, t)), t;
  }
  constructor(e) {
    super(), e === !0 ? this.setupFromTrue() : e === void 0 ? this.setupFromUndefined() : Array.isArray(e) ? this.setupFromArray(e) : typeof e == "object" ? this.setupFromObject(e) : be(`Invalid options argument ${e}`), this.firstChunkSize === void 0 && (this.firstChunkSize = Hr ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
  }
  setupFromUndefined() {
    let e;
    for (e of pi) this[e] = Fe[e];
    for (e of hi) this[e] = Fe[e];
    for (e of ci) this[e] = Fe[e];
    for (e of di) this[e] = new _r(e, Fe[e], void 0, this);
  }
  setupFromTrue() {
    let e;
    for (e of pi) this[e] = Fe[e];
    for (e of hi) this[e] = Fe[e];
    for (e of ci) this[e] = !0;
    for (e of di) this[e] = new _r(e, !0, void 0, this);
  }
  setupFromArray(e) {
    let t;
    for (t of pi) this[t] = Fe[t];
    for (t of hi) this[t] = Fe[t];
    for (t of ci) this[t] = Fe[t];
    for (t of di) this[t] = new _r(t, !1, void 0, this);
    this.setupGlobalFilters(e, void 0, ge);
  }
  setupFromObject(e) {
    let t;
    for (t of (ge.ifd0 = ge.ifd0 || ge.image, ge.ifd1 = ge.ifd1 || ge.thumbnail, Object.assign(this, e), pi)) this[t] = Fo(e[t], Fe[t]);
    for (t of hi) this[t] = Fo(e[t], Fe[t]);
    for (t of ci) this[t] = Fo(e[t], Fe[t]);
    for (t of sn) this[t] = new _r(t, Fe[t], e[t], this);
    for (t of ge) this[t] = new _r(t, Fe[t], e[t], this.tiff);
    this.setupGlobalFilters(e.pick, e.skip, ge, di), e.tiff === !0 ? this.batchEnableWithBool(ge, !0) : e.tiff === !1 ? this.batchEnableWithUserValue(ge, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, ge) : typeof e.tiff == "object" && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, ge);
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
      for (let s of o) this[s].enabled = !1;
      let n = la(e, i);
      for (let [s, a] of n) Ei(this[s].pick, a), this[s].enabled = !0;
    } else if (t && t.length) {
      let n = la(t, i);
      for (let [s, a] of n) Ei(this[s].skip, a);
    }
  }
  filterNestedSegmentTags() {
    let { ifd0: e, exif: t, xmp: i, iptc: o, icc: n } = this;
    this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), i.enabled || e.skip.add(700), o.enabled || e.skip.add(33723), n.enabled || e.skip.add(34675);
  }
  traverseTiffDependencyTree() {
    let { ifd0: e, exif: t, gps: i, interop: o } = this;
    o.needed && (t.deps.add(40965), e.deps.add(40965)), t.needed && e.deps.add(34665), i.needed && e.deps.add(34853), this.tiff.enabled = ge.some((n) => this[n].enabled === !0) || this.makerNote || this.userComment;
    for (let n of ge) this[n].finalizeFilters();
  }
  get onlyTiff() {
    return !Xl.map((e) => this[e].enabled).some((e) => e === !0) && this.tiff.enabled;
  }
  checkLoadedPlugins() {
    for (let e of sn) this[e].enabled && !je.has(e) && tn("segment parser", e);
  }
}
function la(r, e) {
  let t, i, o, n, s = [];
  for (o of e) {
    for (n of (t = zn.get(o), i = [], t)) (r.includes(n[0]) || r.includes(n[1])) && i.push(n[0]);
    i.length && s.push([o, i]);
  }
  return s;
}
function Fo(r, e) {
  return r !== void 0 ? r : e !== void 0 ? e : void 0;
}
function Ei(r, e) {
  for (let t of e) r.add(t);
}
te(Nn, "default", Fe);
class Rc {
  constructor(e) {
    te(this, "parsers", {}), te(this, "output", {}), te(this, "errors", []), te(this, "pushToErrors", (t) => this.errors.push(t)), this.options = Nn.useCached(e);
  }
  async read(e) {
    this.file = await function(t, i) {
      return typeof t == "string" ? na(t, i) : Hr && !Bc && t instanceof HTMLImageElement ? na(t.src, i) : t instanceof Uint8Array || t instanceof ArrayBuffer || t instanceof DataView ? new Wr(t) : Hr && t instanceof Blob ? rn(t, i, "blob", nn) : void be("Invalid input argument");
    }(e, this.options);
  }
  setup() {
    if (this.fileParser) return;
    let { file: e } = this, t = e.getUint16(0);
    for (let [i, o] of Kl) if (o.canHandle(e, t)) return this.fileParser = new o(this.options, this.file, this.parsers), e[i] = !0;
    this.file.close && this.file.close(), be("Unknown file format");
  }
  async parse() {
    let { output: e, errors: t } = this;
    return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t.length > 0 && (e.errors = t), Vl(i = e) ? void 0 : i;
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
    let n = await this.fileParser.ensureSegmentChunk(o), s = this.parsers.tiff = new i(n, e, t), a = await s.extractThumbnail();
    return t.close && t.close(), a;
  }
}
class Kt {
  static findPosition(e, t) {
    let i = e.getUint16(t + 2) + 2, o = typeof this.headerLength == "function" ? this.headerLength(e, t, i) : this.headerLength, n = t + o, s = i - o;
    return { offset: t, length: i, headerLength: o, start: n, size: s, end: n + s };
  }
  static parse(e, t = {}) {
    return new this(e, new Nn({ [this.type]: t }), e).parse();
  }
  normalizeInput(e) {
    return e instanceof Wr ? e : new Wr(e);
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
    let i = Uc.get(t), o = Ec.get(t), n = zn.get(t), s = this.options[t], a = s.reviveValues && !!i, l = s.translateValues && !!o, u = s.translateKeys && !!n, p = {};
    for (let [d, h] of e) a && i.has(d) ? h = i.get(d)(h) : l && o.has(d) && (h = this.translateValue(h, o.get(d))), u && n.has(d) && (d = n.get(d) || d), p[d] = h;
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
te(Kt, "headerLength", 4), te(Kt, "type", void 0), te(Kt, "multiSegment", !1), te(Kt, "canHandle", () => !1);
function Mc(r) {
  return r === 192 || r === 194 || r === 196 || r === 219 || r === 221 || r === 218 || r === 254;
}
function $c(r) {
  return r >= 224 && r <= 239;
}
function zc(r, e, t) {
  for (let [i, o] of je) if (o.canHandle(r, e, t)) return i;
}
class ua extends class {
  constructor(e, t, i) {
    te(this, "errors", []), te(this, "ensureSegmentChunk", async (o) => {
      let n = o.start, s = o.size || 65536;
      if (this.file.chunked) if (this.file.available(n, s)) o.chunk = this.file.subarray(n, s);
      else try {
        o.chunk = await this.file.readChunk(n, s);
      } catch (a) {
        be(`Couldn't read segment: ${JSON.stringify(o)}. ${a.message}`);
      }
      else this.file.byteLength > n + s ? o.chunk = this.file.subarray(n, s) : o.size === void 0 ? o.chunk = this.file.subarray(n) : be("Segment unreachable: " + JSON.stringify(o));
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
        let s = this.parsers[i];
        s && s.append || s || this.createParser(i, o);
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
    let { file: i, findAll: o, wanted: n, remaining: s } = this;
    if (!o && this.file.chunked && (o = Array.from(n).some((a) => {
      let l = je.get(a), u = this.options[a];
      return l.multiSegment && u.multiSegment;
    }), o && await this.file.readWhole()), e = this.findAppSegmentsInRange(e, i.byteLength), !this.options.onlyTiff && i.chunked) {
      let a = !1;
      for (; s.size > 0 && !a && (i.canReadNextChunk || this.unfinishedMultiSegment); ) {
        let { nextChunkOffset: l } = i, u = this.appSegments.some((p) => !this.file.available(p.offset || p.start, p.length || p.size));
        if (a = e > l && !u ? !await i.readNextChunk(e) : !await i.readNextChunk(l), (e = this.findAppSegmentsInRange(e, i.byteLength)) === void 0) return;
      }
    }
  }
  findAppSegmentsInRange(e, t) {
    t -= 2;
    let i, o, n, s, a, l, { file: u, findAll: p, wanted: d, remaining: h, options: x } = this;
    for (; e < t; e++) if (u.getUint8(e) === 255) {
      if (i = u.getUint8(e + 1), $c(i)) {
        if (o = u.getUint16(e + 2), n = zc(u, e, o), n && d.has(n) && (s = je.get(n), a = s.findPosition(u, e), l = x[n], a.type = n, this.appSegments.push(a), !p && (s.multiSegment && l.multiSegment ? (this.unfinishedMultiSegment = a.chunkNumber < a.chunkCount, this.unfinishedMultiSegment || h.delete(n)) : h.delete(n), h.size === 0))) break;
        x.recordUnknownSegments && (a = Kt.findPosition(u, e), a.marker = i, this.unknownSegments.push(a)), e += o + 1;
      } else if (Mc(i)) {
        if (o = u.getUint16(e + 2), i === 218 && x.stopAfterSos !== !1) return;
        x.recordJpegSegments && this.jpegSegments.push({ offset: e, length: o, marker: i }), e += o + 1;
      }
    }
    return e;
  }
  mergeMultiSegments() {
    if (!this.appSegments.some((t) => t.multiSegment)) return;
    let e = function(t, i) {
      let o, n, s, a = /* @__PURE__ */ new Map();
      for (let l = 0; l < t.length; l++) o = t[l], n = o[i], a.has(n) ? s = a.get(n) : a.set(n, s = []), s.push(o);
      return Array.from(a);
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
te(ua, "type", "jpeg"), Kl.set("jpeg", ua);
const Nc = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
class Lc extends Kt {
  parseHeader() {
    var e = this.chunk.getUint16();
    e === 18761 ? this.le = !0 : e === 19789 && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0;
  }
  parseTags(e, t, i = /* @__PURE__ */ new Map()) {
    let { pick: o, skip: n } = this.options[t];
    o = new Set(o);
    let s = o.size > 0, a = n.size === 0, l = this.chunk.getUint16(e);
    e += 2;
    for (let u = 0; u < l; u++) {
      let p = this.chunk.getUint16(e);
      if (s) {
        if (o.has(p) && (i.set(p, this.parseTag(e, p, t)), o.delete(p), o.size === 0)) break;
      } else !a && n.has(p) || i.set(p, this.parseTag(e, p, t));
      e += 12;
    }
    return i;
  }
  parseTag(e, t, i) {
    let { chunk: o } = this, n = o.getUint16(e + 2), s = o.getUint32(e + 4), a = Nc[n];
    if (a * s <= 4 ? e += 8 : e = o.getUint32(e + 8), (n < 1 || n > 13) && be(`Invalid TIFF value type. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${n}, offset ${e}`), e > o.byteLength && be(`Invalid TIFF value offset. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${n}, offset ${e} is outside of chunk size ${o.byteLength}`), n === 1) return o.getUint8Array(e, s);
    if (n === 2) return (l = function(u) {
      for (; u.endsWith("\0"); ) u = u.slice(0, -1);
      return u;
    }(l = o.getString(e, s)).trim()) === "" ? void 0 : l;
    var l;
    if (n === 7) return o.getUint8Array(e, s);
    if (s === 1) return this.parseTagValue(n, e);
    {
      let u = new (function(d) {
        switch (d) {
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
      }(n))(s), p = a;
      for (let d = 0; d < s; d++) u[d] = this.parseTagValue(n, e), e += p;
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
        be(`Invalid tiff type ${e}`);
    }
  }
}
class Do extends Lc {
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
    this.findIfd0Offset(), this.ifd0Offset < 8 && be("Malformed EXIF data"), !e.chunked && this.ifd0Offset > e.byteLength && be(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`), e.tiff && await e.ensureChunk(this.ifd0Offset, ia(this.options));
    let t = this.parseBlock(this.ifd0Offset, "ifd0");
    return t.size !== 0 ? (this.exifOffset = t.get(34665), this.interopOffset = t.get(40965), this.gpsOffset = t.get(34853), this.xmp = t.get(700), this.iptc = t.get(33723), this.icc = t.get(34675), this.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t) : void 0;
  }
  async parseExifBlock() {
    if (this.exif || (this.ifd0 || await this.parseIfd0Block(), this.exifOffset === void 0)) return;
    this.file.tiff && await this.file.ensureChunk(this.exifOffset, ia(this.options));
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
    return e && e.has(2) && e.has(4) && (e.set("latitude", pa(...e.get(2), e.get(1))), e.set("longitude", pa(...e.get(4), e.get(3)))), e;
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
    for (t of ge) if (e = this[t], !Vl(e)) if (i = this.canTranslate ? this.translateBlock(e, t) : Object.fromEntries(e), this.options.mergeOutput) {
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
function pa(r, e, t, i) {
  var o = r + e / 60 + t / 3600;
  return i !== "S" && i !== "W" || (o *= -1), o;
}
te(Do, "type", "tiff"), te(Do, "headerLength", 10), je.set("tiff", Do);
const Ln = { ifd0: !1, ifd1: !1, exif: !1, gps: !1, interop: !1, sanitize: !1, reviveValues: !0, translateKeys: !1, translateValues: !1, mergeOutput: !1 };
Object.assign({}, Ln, { firstChunkSize: 4e4, gps: [1, 2, 3, 4] });
Object.assign({}, Ln, { tiff: !1, ifd1: !0, mergeOutput: !1 });
const jc = Object.assign({}, Ln, { firstChunkSize: 4e4, ifd0: [274] });
async function qc(r) {
  let e = new Rc(jc);
  await e.read(r);
  let t = await e.parse();
  if (t && t.ifd0) return t.ifd0[274];
}
const Hc = Object.freeze({ 1: { dimensionSwapped: !1, scaleX: 1, scaleY: 1, deg: 0, rad: 0 }, 2: { dimensionSwapped: !1, scaleX: -1, scaleY: 1, deg: 0, rad: 0 }, 3: { dimensionSwapped: !1, scaleX: 1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 4: { dimensionSwapped: !1, scaleX: -1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 5: { dimensionSwapped: !0, scaleX: 1, scaleY: -1, deg: 90, rad: 90 * Math.PI / 180 }, 6: { dimensionSwapped: !0, scaleX: 1, scaleY: 1, deg: 90, rad: 90 * Math.PI / 180 }, 7: { dimensionSwapped: !0, scaleX: 1, scaleY: -1, deg: 270, rad: 270 * Math.PI / 180 }, 8: { dimensionSwapped: !0, scaleX: 1, scaleY: 1, deg: 270, rad: 270 * Math.PI / 180 } });
let Ir = !0, Cr = !0;
if (typeof navigator == "object") {
  let r = navigator.userAgent;
  if (r.includes("iPad") || r.includes("iPhone")) {
    let e = r.match(/OS (\d+)_(\d+)/);
    if (e) {
      let [, t, i] = e;
      Ir = Number(t) + 0.1 * Number(i) < 13.4, Cr = !1;
    }
  } else if (r.includes("OS X 10")) {
    let [, e] = r.match(/OS X 10[_.](\d+)/);
    Ir = Cr = Number(e) < 15;
  }
  if (r.includes("Chrome/")) {
    let [, e] = r.match(/Chrome\/(\d+)/);
    Ir = Cr = Number(e) < 81;
  } else if (r.includes("Firefox/")) {
    let [, e] = r.match(/Firefox\/(\d+)/);
    Ir = Cr = Number(e) < 77;
  }
}
async function Wc(r) {
  let e = await qc(r);
  return Object.assign({ canvas: Ir, css: Cr }, Hc[e]);
}
class Gc extends Wr {
  constructor(...e) {
    super(...e), te(this, "ranges", new Vc()), this.byteLength !== 0 && this.ranges.add(0, this.byteLength);
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
    t = Gl ? Wl.allocUnsafe(e) : new Uint8Array(e);
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
class Vc {
  constructor() {
    te(this, "list", []);
  }
  get length() {
    return this.list.length;
  }
  add(e, t, i = 0) {
    let o = e + t, n = this.list.filter((s) => da(e, s.offset, o) || da(e, s.end, o));
    if (n.length > 0) {
      e = Math.min(e, ...n.map((a) => a.offset)), o = Math.max(o, ...n.map((a) => a.end)), t = o - e;
      let s = n.shift();
      s.offset = e, s.length = t, s.end = o, this.list = this.list.filter((a) => !n.includes(a));
    } else this.list.push({ offset: e, length: t, end: o });
  }
  available(e, t) {
    let i = e + t;
    return this.list.some((o) => o.offset <= e && i <= o.end);
  }
}
function da(r, e, t) {
  return r <= e && e <= t;
}
class Kc extends Gc {
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
$n.set("blob", class extends Kc {
  async readWhole() {
    this.chunked = !1;
    let r = await nn(this.input);
    this._swapArrayBuffer(r);
  }
  readChunked() {
    return this.chunked = !0, this.size = this.input.size, super.readChunked();
  }
  async _readChunk(r, e) {
    let t = e ? r + e : void 0, i = this.input.slice(r, t), o = await nn(i);
    return this.set(o, r, !0);
  }
});
const Xc = {
  strings: {
    generatingThumbnails: "Generating thumbnails..."
  }
}, Yc = {
  version: "4.1.1"
};
function Zc(r, e, t) {
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
  }) : Promise.resolve().then(() => Cc(r.toDataURL(e, t), {})).then((i) => {
    if (i === null)
      throw new Error("could not extract blob, probably an old browser");
    return i;
  });
}
function Jc(r, e) {
  let t = r.width, i = r.height;
  (e.deg === 90 || e.deg === 270) && (t = r.height, i = r.width);
  const o = document.createElement("canvas");
  o.width = t, o.height = i;
  const n = o.getContext("2d");
  return n.translate(t / 2, i / 2), e.canvas && (n.rotate(e.rad), n.scale(e.scaleX, e.scaleY)), n.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), o;
}
function Qc(r) {
  const e = r.width / r.height, t = 5e6, i = 4096;
  let o = Math.floor(Math.sqrt(t * e)), n = Math.floor(t / Math.sqrt(t * e));
  if (o > i && (o = i, n = Math.round(o / e)), n > i && (n = i, o = Math.round(e * n)), r.width > o) {
    const s = document.createElement("canvas");
    return s.width = o, s.height = n, s.getContext("2d").drawImage(r, 0, 0, o, n), s;
  }
  return r;
}
const eh = {
  thumbnailWidth: null,
  thumbnailHeight: null,
  thumbnailType: "image/jpeg",
  waitForThumbnailsBeforeUpload: !1,
  lazy: !1
};
class Jl extends Rt {
  constructor(e, t) {
    if (super(e, {
      ...eh,
      ...t
    }), this.onFileAdded = (i) => {
      !i.preview && i.data && ta(i.type) && !i.isRemote && this.addToQueue(i.id);
    }, this.onCancelRequest = (i) => {
      const o = this.queue.indexOf(i.id);
      o !== -1 && this.queue.splice(o, 1);
    }, this.onFileRemoved = (i) => {
      const o = this.queue.indexOf(i.id);
      o !== -1 && this.queue.splice(o, 1), i.preview && ea(i.preview) && URL.revokeObjectURL(i.preview);
    }, this.onRestored = () => {
      this.uppy.getFiles().filter((o) => o.isRestored).forEach((o) => {
        (!o.preview || ea(o.preview)) && this.addToQueue(o.id);
      });
    }, this.onAllFilesRemoved = () => {
      this.queue = [];
    }, this.waitUntilAllProcessed = (i) => {
      i.forEach((n) => {
        const s = this.uppy.getFile(n);
        this.uppy.emit("preprocess-progress", s, {
          mode: "indeterminate",
          message: this.i18n("generatingThumbnails")
        });
      });
      const o = () => {
        i.forEach((n) => {
          const s = this.uppy.getFile(n);
          this.uppy.emit("preprocess-complete", s);
        });
      };
      return new Promise((n) => {
        this.queueProcessing ? this.uppy.once("thumbnail:all-generated", () => {
          o(), n();
        }) : (o(), n());
      });
    }, this.type = "modifier", this.id = this.opts.id || "ThumbnailGenerator", this.title = "Thumbnail Generator", this.queue = [], this.queueProcessing = !1, this.defaultThumbnailDimension = 200, this.thumbnailType = this.opts.thumbnailType, this.defaultLocale = Xc, this.i18nInit(), this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload)
      throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.");
  }
  createThumbnail(e, t, i) {
    const o = URL.createObjectURL(e.data), n = new Promise((a, l) => {
      const u = new Image();
      u.src = o, u.addEventListener("load", () => {
        URL.revokeObjectURL(o), a(u);
      }), u.addEventListener("error", (p) => {
        URL.revokeObjectURL(o), l(p.error || new Error("Could not create thumbnail"));
      });
    }), s = Wc(e.data).catch(() => 1);
    return Promise.all([n, s]).then((a) => {
      let [l, u] = a;
      const p = this.getProportionalDimensions(l, t, i, u.deg), d = Jc(l, u), h = this.resizeImage(d, p.width, p.height);
      return Zc(h, this.thumbnailType, 80);
    }).then((a) => URL.createObjectURL(a));
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
    let o = Qc(e), n = Math.ceil(Math.log2(o.width / t));
    n < 1 && (n = 1);
    let s = t * 2 ** (n - 1), a = i * 2 ** (n - 1);
    const l = 2;
    for (; n--; ) {
      const u = document.createElement("canvas");
      u.width = s, u.height = a, u.getContext("2d").drawImage(o, 0, 0, s, a), o = u, s = Math.round(s / l), a = Math.round(a / l);
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
    return ta(e.type) && !e.isRemote ? this.createThumbnail(e, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then((t) => {
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
Jl.VERSION = Yc.version;
function ca(r) {
  if (typeof r == "string") {
    const e = document.querySelectorAll(r);
    return e.length === 0 ? null : Array.from(e);
  }
  return typeof r == "object" && Rl(r) ? [r] : null;
}
const Mr = Array.from;
function Ql(r, e, t, i) {
  let {
    onSuccess: o
  } = i;
  r.readEntries(
    (n) => {
      const s = [...e, ...n];
      n.length ? queueMicrotask(() => {
        Ql(r, s, t, {
          onSuccess: o
        });
      }) : o(s);
    },
    // Make sure we resolve on error anyway, it's fine if only one directory couldn't be parsed!
    (n) => {
      t(n), o(e);
    }
  );
}
function eu(r, e) {
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
        Ql(t, [], e, {
          onSuccess: (n) => o(n.map((s) => eu(s, e)))
        });
      });
    },
    isSameEntry: void 0
  };
}
function tu(r, e, t) {
  try {
    return t === void 0 && (t = void 0), async function* () {
      const i = () => `${e}/${r.name}`;
      if (r.kind === "file") {
        const o = await r.getFile();
        o != null ? (o.relativePath = e ? i() : null, yield o) : t != null && (yield t);
      } else if (r.kind === "directory")
        for await (const o of r.values())
          yield* tu(o, e ? i() : r.name);
      else t != null && (yield t);
    }();
  } catch (i) {
    return Promise.reject(i);
  }
}
async function* th(r, e) {
  const t = await Promise.all(Array.from(r.items, async (i) => {
    var o;
    let n;
    const s = () => typeof i.getAsEntry == "function" ? i.getAsEntry() : i.webkitGetAsEntry();
    return (o = n) != null || (n = eu(s(), e)), {
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
        yield* tu(o, "", i);
      } catch (n) {
        i != null ? yield i : e(n);
      }
    else i != null && (yield i);
}
function rh(r) {
  const e = Mr(r.files);
  return Promise.resolve(e);
}
async function ih(r, e) {
  var t;
  const i = (t = e == null ? void 0 : e.logDropError) != null ? t : Function.prototype;
  try {
    const o = [];
    for await (const n of th(r, i))
      o.push(n);
    return o;
  } catch {
    return rh(r);
  }
}
var Gr, de, To, ha, Vr = 0, ru = [], he = se, fa = he.__b, ya = he.__r, ma = he.diffed, ga = he.__c, ba = he.unmount, va = he.__;
function jn(r, e) {
  he.__h && he.__h(de, r, Vr || e), Vr = 0;
  var t = de.__H || (de.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({}), t.__[r];
}
function Ui(r) {
  return Vr = 1, oh(ou, r);
}
function oh(r, e, t) {
  var i = jn(Gr++, 2);
  if (i.t = r, !i.__c && (i.__ = [ou(void 0, e), function(a) {
    var l = i.__N ? i.__N[0] : i.__[0], u = i.t(l, a);
    l !== u && (i.__N = [u, i.__[1]], i.__c.setState({}));
  }], i.__c = de, !de.u)) {
    var o = function(a, l, u) {
      if (!i.__c.__H) return !0;
      var p = i.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (p.every(function(h) {
        return !h.__N;
      })) return !n || n.call(this, a, l, u);
      var d = i.__c.props !== a;
      return p.forEach(function(h) {
        if (h.__N) {
          var x = h.__[0];
          h.__ = h.__N, h.__N = void 0, x !== h.__[0] && (d = !0);
        }
      }), n && n.call(this, a, l, u) || d;
    };
    de.u = !0;
    var n = de.shouldComponentUpdate, s = de.componentWillUpdate;
    de.componentWillUpdate = function(a, l, u) {
      if (this.__e) {
        var p = n;
        n = void 0, o(a, l, u), n = p;
      }
      s && s.call(this, a, l, u);
    }, de.shouldComponentUpdate = o;
  }
  return i.__N || i.__;
}
function an(r, e) {
  var t = jn(Gr++, 3);
  !he.__s && iu(t.__H, e) && (t.__ = r, t.i = e, de.__H.__h.push(t));
}
function xi(r) {
  return Vr = 5, qn(function() {
    return { current: r };
  }, []);
}
function qn(r, e) {
  var t = jn(Gr++, 7);
  return iu(t.__H, e) && (t.__ = r(), t.__H = e, t.__h = r), t.__;
}
function nh(r, e) {
  return Vr = 8, qn(function() {
    return r;
  }, e);
}
function sh() {
  for (var r; r = ru.shift(); ) if (r.__P && r.__H) try {
    r.__H.__h.forEach(Si), r.__H.__h.forEach(ln), r.__H.__h = [];
  } catch (e) {
    r.__H.__h = [], he.__e(e, r.__v);
  }
}
he.__b = function(r) {
  de = null, fa && fa(r);
}, he.__ = function(r, e) {
  r && e.__k && e.__k.__m && (r.__m = e.__k.__m), va && va(r, e);
}, he.__r = function(r) {
  ya && ya(r), Gr = 0;
  var e = (de = r.__c).__H;
  e && (To === de ? (e.__h = [], de.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (e.__h.forEach(Si), e.__h.forEach(ln), e.__h = [], Gr = 0)), To = de;
}, he.diffed = function(r) {
  ma && ma(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (ru.push(e) !== 1 && ha === he.requestAnimationFrame || ((ha = he.requestAnimationFrame) || ah)(sh)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), To = de = null;
}, he.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(Si), t.__h = t.__h.filter(function(i) {
        return !i.__ || ln(i);
      });
    } catch (i) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], he.__e(i, t.__v);
    }
  }), ga && ga(r, e);
}, he.unmount = function(r) {
  ba && ba(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.forEach(function(i) {
    try {
      Si(i);
    } catch (o) {
      e = o;
    }
  }), t.__H = void 0, e && he.__e(e, t.__v));
};
var wa = typeof requestAnimationFrame == "function";
function ah(r) {
  var e, t = function() {
    clearTimeout(i), wa && cancelAnimationFrame(e), setTimeout(r);
  }, i = setTimeout(t, 100);
  wa && (e = requestAnimationFrame(t));
}
function Si(r) {
  var e = de, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), de = e;
}
function ln(r) {
  var e = de;
  r.__c = r.__(), de = e;
}
function iu(r, e) {
  return !r || r.length !== e.length || e.some(function(t, i) {
    return t !== r[i];
  });
}
function ou(r, e) {
  return typeof e == "function" ? e(r) : e;
}
function un() {
  return un = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t) ({}).hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, un.apply(null, arguments);
}
const lh = {
  position: "relative",
  // Disabled for our use case: the wrapper elements around FileList already deal with overflow,
  // and this additional property would hide things that we want to show.
  //
  // overflow: 'hidden',
  width: "100%",
  minHeight: "100%"
}, uh = {
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
class ph extends at {
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
      ...s
    } = e;
    const {
      offset: a,
      height: l
    } = this.state;
    let u = Math.floor(a / i), p = Math.floor(l / i);
    n && (u = Math.max(0, u - u % n), p += n);
    const d = u + p + 4, h = t.slice(u, d), x = {
      ...lh,
      height: t.length * i
    }, D = {
      ...uh,
      top: u * i
    };
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      c("div", un({
        onScroll: this.handleScroll
      }, s), c("div", {
        role: "presentation",
        style: x
      }, c("div", {
        role: "presentation",
        style: D
      }, h.map(o))))
    );
  }
}
function dh() {
  return c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, c("path", {
    d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
  }));
}
var _a = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function ch(r, e) {
  return !!(r === e || _a(r) && _a(e));
}
function hh(r, e) {
  if (r.length !== e.length)
    return !1;
  for (var t = 0; t < r.length; t++)
    if (!ch(r[t], e[t]))
      return !1;
  return !0;
}
function xa(r, e) {
  e === void 0 && (e = hh);
  var t = null;
  function i() {
    for (var o = [], n = 0; n < arguments.length; n++)
      o[n] = arguments[n];
    if (t && t.lastThis === this && e(o, t.lastArgs))
      return t.lastResult;
    var s = r.apply(this, o);
    return t = {
      lastResult: s,
      lastArgs: o,
      lastThis: this
    }, s;
  }
  return i.clear = function() {
    t = null;
  }, i;
}
const nu = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', "input:not([disabled]):not([inert]):not([aria-hidden])", "select:not([disabled]):not([inert]):not([aria-hidden])", "textarea:not([disabled]):not([inert]):not([aria-hidden])", "button:not([disabled]):not([inert]):not([aria-hidden])", 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];
function su(r, e) {
  if (e) {
    const t = r.querySelector(`[data-uppy-paneltype="${e}"]`);
    if (t) return t;
  }
  return r;
}
function Sa(r, e) {
  const t = e[0];
  t && (t.focus(), r.preventDefault());
}
function fh(r, e) {
  const t = e[e.length - 1];
  t && (t.focus(), r.preventDefault());
}
function yh(r) {
  return r.contains(document.activeElement);
}
function au(r, e, t) {
  const i = su(t, e), o = Mr(i.querySelectorAll(nu)), n = o.indexOf(document.activeElement);
  yh(i) ? r.shiftKey && n === 0 ? fh(r, o) : !r.shiftKey && n === o.length - 1 && Sa(r, o) : Sa(r, o);
}
function mh(r, e, t) {
  e === null || au(r, e, t);
}
var gh = _l();
const bh = /* @__PURE__ */ zt(gh);
function vh() {
  let r = !1;
  return bh((t, i) => {
    const o = su(t, i), n = o.contains(document.activeElement);
    if (n && r) return;
    const s = o.querySelector("[data-uppy-super-focusable]");
    if (!(n && !s))
      if (s)
        s.focus({
          preventScroll: !0
        }), r = !0;
      else {
        const a = o.querySelector(nu);
        a == null || a.focus({
          preventScroll: !0
        }), r = !1;
      }
  }, 260);
}
function wh() {
  const r = document.body;
  return !(!("draggable" in r) || !("ondragstart" in r && "ondrop" in r) || !("FormData" in window) || !("FileReader" in window));
}
function _h(r, e) {
  if (r === e)
    return !0;
  if (!r || !e)
    return !1;
  const t = Object.keys(r), i = Object.keys(e), o = t.length;
  if (i.length !== o)
    return !1;
  for (let n = 0; n < o; n++) {
    const s = t[n];
    if (r[s] !== e[s] || !Object.prototype.hasOwnProperty.call(e, s))
      return !1;
  }
  return !0;
}
function xh() {
  return c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, c("g", {
    fill: "#686DE0",
    fillRule: "evenodd"
  }, c("path", {
    d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
    fillRule: "nonzero"
  }), c("path", {
    d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
    fillRule: "nonzero"
  }), c("circle", {
    cx: "7.5",
    cy: "9.5",
    r: "1.5"
  })));
}
function Sh() {
  return c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, c("path", {
    d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
    fill: "#049BCF",
    fillRule: "nonzero"
  }));
}
function Ph() {
  return c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, c("path", {
    d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
    fill: "#19AF67",
    fillRule: "nonzero"
  }));
}
function kh() {
  return c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, c("path", {
    d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
    fill: "#E2514A",
    fillRule: "nonzero"
  }));
}
function Fh() {
  return c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, c("path", {
    d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
    fill: "#00C469",
    fillRule: "nonzero"
  }));
}
function Dh() {
  return c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, c("g", {
    fill: "#A7AFB7",
    fillRule: "nonzero"
  }, c("path", {
    d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
  }), c("path", {
    d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
  })));
}
function Th() {
  return c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25"
  }, c("path", {
    d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
    fill: "#5A5E69",
    fillRule: "nonzero"
  }));
}
function Hn(r) {
  const e = {
    color: "#838999",
    icon: Dh()
  };
  if (!r) return e;
  const t = r.split("/")[0], i = r.split("/")[1];
  return t === "text" ? {
    color: "#5a5e69",
    icon: Th()
  } : t === "image" ? {
    color: "#686de0",
    icon: xh()
  } : t === "audio" ? {
    color: "#068dbb",
    icon: Sh()
  } : t === "video" ? {
    color: "#19af67",
    icon: Ph()
  } : t === "application" && i === "pdf" ? {
    color: "#e25149",
    icon: kh()
  } : t === "application" && ["zip", "x-7z-compressed", "x-zip-compressed", "x-rar-compressed", "x-tar", "x-gzip", "x-apple-diskimage"].indexOf(i) !== -1 ? {
    color: "#00C469",
    icon: Fh()
  } : e;
}
function lu(r) {
  const {
    file: e
  } = r;
  if (e.preview)
    return c("img", {
      draggable: !1,
      className: "uppy-Dashboard-Item-previewImg",
      alt: e.name,
      src: e.preview
    });
  const {
    color: t,
    icon: i
  } = Hn(e.type);
  return c("div", {
    className: "uppy-Dashboard-Item-previewIconWrap"
  }, c("span", {
    className: "uppy-Dashboard-Item-previewIcon",
    style: {
      color: t
    }
  }, i), c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-Dashboard-Item-previewIconBg",
    width: "58",
    height: "76",
    viewBox: "0 0 58 76"
  }, c("rect", {
    fill: "#FFF",
    width: "58",
    height: "76",
    rx: "3",
    fillRule: "evenodd"
  })));
}
const Ih = (r, e) => (typeof e == "function" ? e() : e).filter((o) => o.id === r)[0].name;
function uu(r) {
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
  const s = n.map((a) => Ih(a, o)).join(", ");
  return c("div", {
    className: "uppy-Dashboard-Item-errorMessage"
  }, i("missingRequiredMetaFields", {
    smart_count: n.length,
    fields: s
  }), " ", c("button", {
    type: "button",
    class: "uppy-u-reset uppy-Dashboard-Item-errorMessageBtn",
    onClick: () => t(!0, e.id)
  }, i("editFile")));
}
function Ch(r) {
  const {
    file: e,
    i18n: t,
    toggleFileCard: i,
    metaFields: o,
    showLinkToFileUploadResult: n
  } = r, a = e.preview ? "rgba(255, 255, 255, 0.5)" : Hn(e.type).color;
  return c("div", {
    className: "uppy-Dashboard-Item-previewInnerWrap",
    style: {
      backgroundColor: a
    }
  }, n && e.uploadURL && c("a", {
    className: "uppy-Dashboard-Item-previewLink",
    href: e.uploadURL,
    rel: "noreferrer noopener",
    target: "_blank",
    "aria-label": e.meta.name
  }, c("span", {
    hidden: !0
  }, e.meta.name)), c(lu, {
    file: e
  }), c(uu, {
    file: e,
    i18n: t,
    toggleFileCard: i,
    metaFields: o
  }));
}
function Bh(r) {
  if (!r.isUploaded) {
    if (r.error && !r.hideRetryButton) {
      r.uppy.retryUpload(r.file.id);
      return;
    }
    r.resumableUploads && !r.hidePauseResumeButton ? r.uppy.pauseResume(r.file.id) : r.individualCancellation && !r.hideCancelButton && r.uppy.removeFile(r.file.id);
  }
}
function Pa(r) {
  return r.isUploaded ? r.i18n("uploadComplete") : r.error ? r.i18n("retryUpload") : r.resumableUploads ? r.file.isPaused ? r.i18n("resumeUpload") : r.i18n("pauseUpload") : r.individualCancellation ? r.i18n("cancelUpload") : "";
}
function Io(r) {
  return c("div", {
    className: "uppy-Dashboard-Item-progress"
  }, c("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-progressIndicator",
    type: "button",
    "aria-label": Pa(r),
    title: Pa(r),
    onClick: () => Bh(r)
  }, r.children));
}
function fi(r) {
  let {
    children: e
  } = r;
  return c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "70",
    height: "70",
    viewBox: "0 0 36 36",
    className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"
  }, e);
}
function Co(r) {
  let {
    progress: e
  } = r;
  const t = 2 * Math.PI * 15;
  return c("g", null, c("circle", {
    className: "uppy-Dashboard-Item-progressIcon--bg",
    r: "15",
    cx: "18",
    cy: "18",
    "stroke-width": "2",
    fill: "none"
  }), c("circle", {
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
function Oh(r) {
  return !r.file.progress.uploadStarted || r.file.progress.percentage === void 0 ? null : r.isUploaded ? c("div", {
    className: "uppy-Dashboard-Item-progress"
  }, c("div", {
    className: "uppy-Dashboard-Item-progressIndicator"
  }, c(fi, null, c("circle", {
    r: "15",
    cx: "18",
    cy: "18",
    fill: "#1bb240"
  }), c("polygon", {
    className: "uppy-Dashboard-Item-progressIcon--check",
    transform: "translate(2, 3)",
    points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
  })))) : r.recoveredState ? null : r.error && !r.hideRetryButton ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    c(Io, r, c("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
      width: "28",
      height: "31",
      viewBox: "0 0 16 19"
    }, c("path", {
      d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
    }), c("path", {
      d: "M7.9 3H10v2H7.9z"
    }), c("path", {
      d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
    }), c("path", {
      d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
    })))
  ) : r.resumableUploads && !r.hidePauseResumeButton ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    c(Io, r, c(fi, null, c(Co, {
      progress: r.file.progress.percentage
    }), r.file.isPaused ? c("polygon", {
      className: "uppy-Dashboard-Item-progressIcon--play",
      transform: "translate(3, 3)",
      points: "12 20 12 10 20 15"
    }) : c("g", {
      className: "uppy-Dashboard-Item-progressIcon--pause",
      transform: "translate(14.5, 13)"
    }, c("rect", {
      x: "0",
      y: "0",
      width: "2",
      height: "10",
      rx: "0"
    }), c("rect", {
      x: "5",
      y: "0",
      width: "2",
      height: "10",
      rx: "0"
    }))))
  ) : !r.resumableUploads && r.individualCancellation && !r.hideCancelButton ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    c(Io, r, c(fi, null, c(Co, {
      progress: r.file.progress.percentage
    }), c("polygon", {
      className: "cancel",
      transform: "translate(2, 2)",
      points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
    })))
  ) : c("div", {
    className: "uppy-Dashboard-Item-progress"
  }, c("div", {
    className: "uppy-Dashboard-Item-progressIndicator"
  }, c(fi, null, c(Co, {
    progress: r.file.progress.percentage
  }))));
}
const Bo = "...";
function pu(r, e) {
  if (e === 0) return "";
  if (r.length <= e) return r;
  if (e <= Bo.length + 1) return `${r.slice(0, e - 1)}…`;
  const t = e - Bo.length, i = Math.ceil(t / 2), o = Math.floor(t / 2);
  return r.slice(0, i) + Bo + r.slice(-o);
}
const Ah = (r) => {
  const {
    author: e,
    name: t
  } = r.file.meta;
  function i() {
    return r.isSingleFile && r.containerHeight >= 350 ? 90 : r.containerWidth <= 352 ? 35 : r.containerWidth <= 576 ? 60 : e ? 20 : 30;
  }
  return c("div", {
    className: "uppy-Dashboard-Item-name",
    title: t
  }, pu(t, i()));
}, Eh = (r) => {
  var e;
  const {
    author: t
  } = r.file.meta, i = (e = r.file.remote) == null ? void 0 : e.providerName, o = "·";
  return t ? c("div", {
    className: "uppy-Dashboard-Item-author"
  }, c("a", {
    href: `${t.url}?utm_source=Companion&utm_medium=referral`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, pu(t.name, 13)), i ? c(Fragment, null, ` ${o} `, i, ` ${o} `) : null) : null;
}, Uh = (r) => r.file.size && c("div", {
  className: "uppy-Dashboard-Item-statusSize"
}, Bt(r.file.size)), Rh = (r) => r.file.isGhost && c("span", null, " • ", c("button", {
  className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-reSelect",
  type: "button",
  onClick: () => r.toggleAddFilesPanel(!0)
}, r.i18n("reSelect"))), Mh = (r) => {
  let {
    file: e,
    onClick: t
  } = r;
  return e.error ? c("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-errorDetails",
    "aria-label": e.error,
    "data-microtip-position": "bottom",
    "data-microtip-size": "medium",
    onClick: t,
    type: "button"
  }, "?") : null;
};
function $h(r) {
  const {
    file: e,
    i18n: t,
    toggleFileCard: i,
    metaFields: o,
    toggleAddFilesPanel: n,
    isSingleFile: s,
    containerHeight: a,
    containerWidth: l
  } = r;
  return c("div", {
    className: "uppy-Dashboard-Item-fileInfo",
    "data-uppy-file-source": e.source
  }, c("div", {
    className: "uppy-Dashboard-Item-fileName"
  }, Ah({
    file: e,
    isSingleFile: s,
    containerHeight: a,
    containerWidth: l
  }), c(Mh, {
    file: e,
    onClick: () => alert(e.error)
  })), c("div", {
    className: "uppy-Dashboard-Item-status"
  }, Eh({
    file: e
  }), Uh({
    file: e
  }), Rh({
    file: e,
    toggleAddFilesPanel: n,
    i18n: t
  })), c(uu, {
    file: e,
    i18n: t,
    toggleFileCard: i,
    metaFields: o
  }));
}
function zh(r, e) {
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
function Nh(r) {
  let {
    file: e,
    uploadInProgressOrComplete: t,
    metaFields: i,
    canEditFile: o,
    i18n: n,
    onClick: s
  } = r;
  return !t && i && i.length > 0 || !t && o(e) ? c("button", {
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",
    type: "button",
    "aria-label": n("editFileWithFilename", {
      file: e.meta.name
    }),
    title: n("editFileWithFilename", {
      file: e.meta.name
    }),
    onClick: () => s()
  }, c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, c("g", {
    fillRule: "evenodd"
  }, c("path", {
    d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
    fillRule: "nonzero"
  }), c("rect", {
    x: "1",
    y: "12.293",
    width: "11",
    height: "1",
    rx: ".5"
  }), c("path", {
    fillRule: "nonzero",
    d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
  })))) : null;
}
function Lh(r) {
  let {
    i18n: e,
    onClick: t,
    file: i
  } = r;
  return c("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",
    type: "button",
    "aria-label": e("removeFile", {
      file: i.meta.name
    }),
    title: e("removeFile", {
      file: i.meta.name
    }),
    onClick: () => t()
  }, c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, c("path", {
    d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
  }), c("path", {
    fill: "#FFF",
    d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
  })));
}
function jh(r) {
  let {
    file: e,
    uppy: t,
    i18n: i
  } = r;
  const o = (n) => {
    zh(e.uploadURL, i("copyLinkToClipboardFallback")).then(() => {
      t.log("Link copied to clipboard."), t.info(i("copyLinkToClipboardSuccess"), "info", 3e3);
    }).catch(t.log).then(() => n.target.focus({
      preventScroll: !0
    }));
  };
  return c("button", {
    className: "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",
    type: "button",
    "aria-label": i("copyLink"),
    title: i("copyLink"),
    onClick: (n) => o(n)
  }, c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "14",
    height: "14",
    viewBox: "0 0 14 12"
  }, c("path", {
    d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
  })));
}
function qh(r) {
  const {
    uppy: e,
    file: t,
    uploadInProgressOrComplete: i,
    canEditFile: o,
    metaFields: n,
    showLinkToFileUploadResult: s,
    showRemoveButton: a,
    i18n: l,
    toggleFileCard: u,
    openFileEditor: p
  } = r;
  return c("div", {
    className: "uppy-Dashboard-Item-actionWrapper"
  }, c(Nh, {
    i18n: l,
    file: t,
    uploadInProgressOrComplete: i,
    canEditFile: o,
    metaFields: n,
    onClick: () => {
      n && n.length > 0 ? u(!0, t.id) : p(t);
    }
  }), s && t.uploadURL ? c(jh, {
    file: t,
    uppy: e,
    i18n: l
  }) : null, a ? c(Lh, {
    i18n: l,
    file: t,
    onClick: () => e.removeFile(t.id)
  }) : null);
}
class Hh extends at {
  componentDidMount() {
    const {
      file: e
    } = this.props;
    e.preview || this.props.handleRequestThumbnail(e);
  }
  shouldComponentUpdate(e) {
    return !_h(this.props, e);
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
    } = this.props, t = e.progress.preprocess || e.progress.postprocess, i = !!e.progress.uploadComplete && !t && !e.error, o = !!e.progress.uploadStarted || !!t, n = e.progress.uploadStarted && !e.progress.uploadComplete || t, s = e.error || !1, {
      isGhost: a
    } = e;
    let l = (this.props.individualCancellation || !n) && !i;
    i && this.props.showRemoveButtonAfterComplete && (l = !0);
    const u = He({
      "uppy-Dashboard-Item": !0,
      "is-inprogress": n && !this.props.recoveredState,
      "is-processing": t,
      "is-complete": i,
      "is-error": !!s,
      "is-resumable": this.props.resumableUploads,
      "is-noIndividualCancellation": !this.props.individualCancellation,
      "is-ghost": a
    });
    return c("div", {
      className: u,
      id: `uppy_${e.id}`,
      role: this.props.role
    }, c("div", {
      className: "uppy-Dashboard-Item-preview"
    }, c(Ch, {
      file: e,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      i18n: this.props.i18n,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields
    }), c(Oh, {
      uppy: this.props.uppy,
      file: e,
      error: s,
      isUploaded: i,
      hideRetryButton: this.props.hideRetryButton,
      hideCancelButton: this.props.hideCancelButton,
      hidePauseResumeButton: this.props.hidePauseResumeButton,
      recoveredState: this.props.recoveredState,
      resumableUploads: this.props.resumableUploads,
      individualCancellation: this.props.individualCancellation,
      i18n: this.props.i18n
    })), c("div", {
      className: "uppy-Dashboard-Item-fileInfoAndButtons"
    }, c($h, {
      file: e,
      containerWidth: this.props.containerWidth,
      containerHeight: this.props.containerHeight,
      i18n: this.props.i18n,
      toggleAddFilesPanel: this.props.toggleAddFilesPanel,
      toggleFileCard: this.props.toggleFileCard,
      metaFields: this.props.metaFields,
      isSingleFile: this.props.isSingleFile
    }), c(qh, {
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
function Wh(r, e) {
  const t = [];
  let i = [];
  return r.forEach((o) => {
    i.length < e ? i.push(o) : (t.push(i), i = [o]);
  }), i.length && t.push(i), t;
}
function Gh(r) {
  let {
    id: e,
    i18n: t,
    uppy: i,
    files: o,
    resumableUploads: n,
    hideRetryButton: s,
    hidePauseResumeButton: a,
    hideCancelButton: l,
    showLinkToFileUploadResult: u,
    showRemoveButtonAfterComplete: p,
    metaFields: d,
    isSingleFile: h,
    toggleFileCard: x,
    handleRequestThumbnail: D,
    handleCancelThumbnail: O,
    recoveredState: _,
    individualCancellation: T,
    itemsPerRow: m,
    openFileEditor: w,
    canEditFile: S,
    toggleAddFilesPanel: P,
    containerWidth: A,
    containerHeight: E
  } = r;
  const U = m === 1 ? (
    // Mobile
    71
  ) : 200, L = qn(() => {
    const J = (C, ie) => Number(o[ie].isGhost) - Number(o[C].isGhost), re = Object.keys(o);
    return _ && re.sort(J), Wh(re, m);
  }, [o, m, _]), ee = (J) => c("div", {
    class: "uppy-Dashboard-filesInner",
    role: "presentation",
    key: J[0]
  }, J.map((re) => c(Hh, {
    key: re,
    uppy: i,
    id: e,
    i18n: t,
    resumableUploads: n,
    individualCancellation: T,
    hideRetryButton: s,
    hidePauseResumeButton: a,
    hideCancelButton: l,
    showLinkToFileUploadResult: u,
    showRemoveButtonAfterComplete: p,
    metaFields: d,
    recoveredState: _,
    isSingleFile: h,
    containerWidth: A,
    containerHeight: E,
    toggleFileCard: x,
    handleRequestThumbnail: D,
    handleCancelThumbnail: O,
    role: "listitem",
    openFileEditor: w,
    canEditFile: S,
    toggleAddFilesPanel: P,
    file: o[re]
  })));
  return h ? c("div", {
    class: "uppy-Dashboard-files"
  }, ee(L[0])) : c(ph, {
    class: "uppy-Dashboard-files",
    role: "list",
    data: L,
    renderRow: ee,
    rowHeight: U
  });
}
class du extends at {
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
      return c("input", {
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
      return c("input", {
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
    }, this.renderMyDeviceAcquirer = () => c("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": "MyDevice"
    }, c("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-uppy-super-focusable": !0,
      onClick: this.triggerFileInputClick
    }, c("div", {
      className: "uppy-DashboardTab-inner"
    }, c("svg", {
      className: "uppy-DashboardTab-iconMyDevice",
      "aria-hidden": "true",
      focusable: "false",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32"
    }, c("path", {
      d: "M8.45 22.087l-1.305-6.674h17.678l-1.572 6.674H8.45zm4.975-12.412l1.083 1.765a.823.823 0 00.715.386h7.951V13.5H8.587V9.675h4.838zM26.043 13.5h-1.195v-2.598c0-.463-.336-.75-.798-.75h-8.356l-1.082-1.766A.823.823 0 0013.897 8H7.728c-.462 0-.815.256-.815.718V13.5h-.956a.97.97 0 00-.746.37.972.972 0 00-.19.81l1.724 8.565c.095.44.484.755.933.755H24c.44 0 .824-.3.929-.727l2.043-8.568a.972.972 0 00-.176-.825.967.967 0 00-.753-.38z",
      fill: "currentcolor",
      "fill-rule": "evenodd"
    }))), c("div", {
      className: "uppy-DashboardTab-name"
    }, this.props.i18n("myDevice")))), this.renderPhotoCamera = () => c("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": "MobilePhotoCamera"
    }, c("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-uppy-super-focusable": !0,
      onClick: this.triggerPhotoCameraInputClick
    }, c("div", {
      className: "uppy-DashboardTab-inner"
    }, c("svg", {
      "aria-hidden": "true",
      focusable: "false",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32"
    }, c("path", {
      d: "M23.5 9.5c1.417 0 2.5 1.083 2.5 2.5v9.167c0 1.416-1.083 2.5-2.5 2.5h-15c-1.417 0-2.5-1.084-2.5-2.5V12c0-1.417 1.083-2.5 2.5-2.5h2.917l1.416-2.167C13 7.167 13.25 7 13.5 7h5c.25 0 .5.167.667.333L20.583 9.5H23.5zM16 11.417a4.706 4.706 0 00-4.75 4.75 4.704 4.704 0 004.75 4.75 4.703 4.703 0 004.75-4.75c0-2.663-2.09-4.75-4.75-4.75zm0 7.825c-1.744 0-3.076-1.332-3.076-3.074 0-1.745 1.333-3.077 3.076-3.077 1.744 0 3.074 1.333 3.074 3.076s-1.33 3.075-3.074 3.075z",
      fill: "#02B383",
      "fill-rule": "nonzero"
    }))), c("div", {
      className: "uppy-DashboardTab-name"
    }, this.props.i18n("takePictureBtn")))), this.renderVideoCamera = () => c("div", {
      className: "uppy-DashboardTab",
      role: "presentation",
      "data-uppy-acquirer-id": "MobileVideoCamera"
    }, c("button", {
      type: "button",
      className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
      role: "tab",
      tabIndex: 0,
      "data-uppy-super-focusable": !0,
      onClick: this.triggerVideoCameraInputClick
    }, c("div", {
      className: "uppy-DashboardTab-inner"
    }, c("svg", {
      "aria-hidden": "true",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32"
    }, c("path", {
      fill: "#FF675E",
      fillRule: "nonzero",
      d: "m21.254 14.277 2.941-2.588c.797-.313 1.243.818 1.09 1.554-.01 2.094.02 4.189-.017 6.282-.126.915-1.145 1.08-1.58.34l-2.434-2.142c-.192.287-.504 1.305-.738.468-.104-1.293-.028-2.596-.05-3.894.047-.312.381.823.426 1.069.063-.384.206-.744.362-1.09zm-12.939-3.73c3.858.013 7.717-.025 11.574.02.912.129 1.492 1.237 1.351 2.217-.019 2.412.04 4.83-.03 7.239-.17 1.025-1.166 1.59-2.029 1.429-3.705-.012-7.41.025-11.114-.019-.913-.129-1.492-1.237-1.352-2.217.018-2.404-.036-4.813.029-7.214.136-.82.83-1.473 1.571-1.454z "
    }))), c("div", {
      className: "uppy-DashboardTab-name"
    }, this.props.i18n("recordVideoBtn")))), this.renderBrowseButton = (e, t) => {
      const i = this.props.acquirers.length;
      return c("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-Dashboard-browse",
        onClick: t,
        "data-uppy-super-focusable": i === 0
      }, e);
    }, this.renderDropPasteBrowseTagline = (e) => {
      const t = this.renderBrowseButton(this.props.i18n("browseFiles"), this.triggerFileInputClick), i = this.renderBrowseButton(this.props.i18n("browseFolders"), this.triggerFolderInputClick), o = this.props.fileManagerSelectionType, n = o.charAt(0).toUpperCase() + o.slice(1);
      return c(
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
      return c("div", {
        className: "uppy-DashboardTab",
        role: "presentation",
        "data-uppy-acquirer-id": e.id
      }, c("button", {
        type: "button",
        className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
        role: "tab",
        tabIndex: 0,
        "data-cy": e.id,
        "aria-controls": `uppy-DashboardContent-panel--${e.id}`,
        "aria-selected": ((t = this.props.activePickerPanel) == null ? void 0 : t.id) === e.id,
        "data-uppy-super-focusable": !0,
        onClick: () => this.props.showPanel(e.id)
      }, c("div", {
        className: "uppy-DashboardTab-inner"
      }, e.icon()), c("div", {
        className: "uppy-DashboardTab-name"
      }, e.name)));
    }, this.renderAcquirers = (e) => {
      const t = [...e], i = t.splice(e.length - 2, e.length);
      return c(ft, null, t.map((o) => this.renderAcquirer(o)), c("span", {
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
      const s = "myDevice";
      t || n.push({
        key: s,
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
      }))), n.length === 1 && n[0].key === s && (n = []);
      const l = [...n], u = l.splice(n.length - 2, n.length);
      return c(ft, null, this.renderDropPasteBrowseTagline(n.length), c("div", {
        className: "uppy-Dashboard-AddFiles-list",
        role: "tablist"
      }, l.map((p) => {
        let {
          key: d,
          elements: h
        } = p;
        return c(ft, {
          key: d
        }, h);
      }), c("span", {
        role: "presentation",
        style: {
          "white-space": "nowrap"
        }
      }, u.map((p) => {
        let {
          key: d,
          elements: h
        } = p;
        return c(ft, {
          key: d
        }, h);
      }))));
    };
  }
  [Symbol.for("uppy test: disable unused locale key warning")]() {
    this.props.i18nArray("dropPasteBoth"), this.props.i18nArray("dropPasteFiles"), this.props.i18nArray("dropPasteFolders"), this.props.i18nArray("dropPasteImportBoth"), this.props.i18nArray("dropPasteImportFiles"), this.props.i18nArray("dropPasteImportFolders");
  }
  renderPoweredByUppy() {
    const {
      i18nArray: e
    } = this.props, t = c("span", null, c("svg", {
      "aria-hidden": "true",
      focusable: "false",
      className: "uppy-c-icon uppy-Dashboard-poweredByIcon",
      width: "11",
      height: "11",
      viewBox: "0 0 11 11"
    }, c("path", {
      d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
      fillRule: "evenodd"
    })), c("span", {
      className: "uppy-Dashboard-poweredByUppy"
    }, "Uppy")), i = e("poweredBy", {
      uppy: t
    });
    return c("a", {
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
    return c("div", {
      className: "uppy-Dashboard-AddFiles"
    }, this.renderHiddenInput(!1, (o) => {
      this.fileInput = o;
    }), this.renderHiddenInput(!0, (o) => {
      this.folderInput = o;
    }), e && this.renderHiddenCameraInput("photo", i, (o) => {
      this.mobilePhotoFileInput = o;
    }), t && this.renderHiddenCameraInput("video", i, (o) => {
      this.mobileVideoFileInput = o;
    }), this.renderSourcesList(this.props.acquirers, this.props.disableLocalFiles), c("div", {
      className: "uppy-Dashboard-AddFiles-info"
    }, this.props.note && c("div", {
      className: "uppy-Dashboard-note"
    }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy()));
  }
}
const Vh = (r) => c("div", {
  className: He("uppy-Dashboard-AddFilesPanel", r.className),
  "data-uppy-panelType": "AddFiles",
  "aria-hidden": !r.showAddFilesPanel
}, c("div", {
  className: "uppy-DashboardContent-bar"
}, c("div", {
  className: "uppy-DashboardContent-title",
  role: "heading",
  "aria-level": "1"
}, r.i18n("addingMoreFiles")), c("button", {
  className: "uppy-DashboardContent-back",
  type: "button",
  onClick: () => r.toggleAddFilesPanel(!1)
}, r.i18n("back"))), c(du, r));
function yt(r) {
  const {
    tagName: e
  } = r.target;
  if (e === "INPUT" || e === "TEXTAREA") {
    r.stopPropagation();
    return;
  }
  r.preventDefault(), r.stopPropagation();
}
function Kh(r) {
  let {
    activePickerPanel: e,
    className: t,
    hideAllPanels: i,
    i18n: o,
    state: n,
    uppy: s
  } = r;
  const a = xi(null);
  return c("div", {
    className: He("uppy-DashboardContent-panel", t),
    role: "tabpanel",
    "data-uppy-panelType": "PickerPanel",
    id: `uppy-DashboardContent-panel--${e.id}`,
    onDragOver: yt,
    onDragLeave: yt,
    onDrop: yt,
    onPaste: yt
  }, c("div", {
    className: "uppy-DashboardContent-bar"
  }, c("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, o("importFrom", {
    name: e.name
  })), c("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: i
  }, o("cancel"))), c("div", {
    ref: a,
    className: "uppy-DashboardContent-panelBody"
  }, s.getPlugin(e.id).render(n, a.current)));
}
function Xh(r) {
  const e = r.files[r.fileCardFor], t = () => {
    r.uppy.emit("file-editor:cancel", e), r.closeFileEditor();
  };
  return c("div", {
    className: He("uppy-DashboardContent-panel", r.className),
    role: "tabpanel",
    "data-uppy-panelType": "FileEditor",
    id: "uppy-DashboardContent-panel--editor"
  }, c("div", {
    className: "uppy-DashboardContent-bar"
  }, c("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, r.i18nArray("editing", {
    file: c("span", {
      className: "uppy-DashboardContent-titleFile"
    }, e.meta ? e.meta.name : e.name)
  })), c("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: t
  }, r.i18n("cancel")), c("button", {
    className: "uppy-DashboardContent-save",
    type: "button",
    onClick: r.saveFileEditor
  }, r.i18n("save"))), c("div", {
    className: "uppy-DashboardContent-panelBody"
  }, r.editors.map((i) => r.uppy.getPlugin(i.id).render(r.state))));
}
const Ge = {
  STATE_ERROR: "error",
  STATE_WAITING: "waiting",
  STATE_PREPROCESSING: "preprocessing",
  STATE_UPLOADING: "uploading",
  STATE_POSTPROCESSING: "postprocessing",
  STATE_COMPLETE: "complete",
  STATE_PAUSED: "paused"
};
function Yh(r, e, t, i) {
  if (i === void 0 && (i = {}), r)
    return Ge.STATE_ERROR;
  if (e)
    return Ge.STATE_COMPLETE;
  if (t)
    return Ge.STATE_PAUSED;
  let o = Ge.STATE_WAITING;
  const n = Object.keys(i);
  for (let s = 0; s < n.length; s++) {
    const {
      progress: a
    } = i[n[s]];
    if (a.uploadStarted && !a.uploadComplete)
      return Ge.STATE_UPLOADING;
    a.preprocess && o !== Ge.STATE_UPLOADING && (o = Ge.STATE_PREPROCESSING), a.postprocess && o !== Ge.STATE_UPLOADING && o !== Ge.STATE_PREPROCESSING && (o = Ge.STATE_POSTPROCESSING);
  }
  return o;
}
function Zh(r) {
  let {
    files: e,
    i18n: t,
    isAllComplete: i,
    isAllErrored: o,
    isAllPaused: n,
    inProgressNotPausedFiles: s,
    newFiles: a,
    processingFiles: l
  } = r;
  switch (Yh(o, i, n, e)) {
    case "uploading":
      return t("uploadingXFiles", {
        smart_count: s.length
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
        smart_count: a.length
      });
    case "complete":
      return t("uploadComplete");
    case "error":
      return t("error");
  }
}
function Jh(r) {
  const {
    i18n: e,
    isAllComplete: t,
    hideCancelButton: i,
    maxNumberOfFiles: o,
    toggleAddFilesPanel: n,
    uppy: s
  } = r;
  let {
    allowNewUpload: a
  } = r;
  return a && o && (a = r.totalFileCount < r.maxNumberOfFiles), c("div", {
    className: "uppy-DashboardContent-bar"
  }, !t && !i ? c("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: () => s.cancelAll()
  }, e("cancel")) : c("div", null), c("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, c(Zh, r)), a ? c("button", {
    className: "uppy-DashboardContent-addMore",
    type: "button",
    "aria-label": e("addMoreFiles"),
    title: e("addMoreFiles"),
    onClick: () => n(!0)
  }, c("svg", {
    "aria-hidden": "true",
    focusable: "false",
    className: "uppy-c-icon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15"
  }, c("path", {
    d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
  })), c("span", {
    className: "uppy-DashboardContent-addMoreCaption"
  }, e("addMore"))) : c("div", null));
}
function Qh(r) {
  const {
    computedMetaFields: e,
    requiredMetaFields: t,
    updateMeta: i,
    form: o,
    formState: n
  } = r, s = {
    text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"
  };
  return e.map((a) => {
    const l = `uppy-Dashboard-FileCard-input-${a.id}`, u = t.includes(a.id);
    return c("fieldset", {
      key: a.id,
      className: "uppy-Dashboard-FileCard-fieldset"
    }, c("label", {
      className: "uppy-Dashboard-FileCard-label",
      htmlFor: l
    }, a.name), a.render !== void 0 ? a.render({
      value: n[a.id],
      onChange: (p) => i(p, a.id),
      fieldCSSClasses: s,
      required: u,
      form: o.id
    }, c) : c("input", {
      className: s.text,
      id: l,
      form: o.id,
      type: a.type || "text",
      required: u,
      value: n[a.id],
      placeholder: a.placeholder,
      onInput: (p) => i(p.target.value, a.id),
      "data-uppy-super-focusable": !0
    }));
  });
}
function ef(r) {
  var e;
  const {
    files: t,
    fileCardFor: i,
    toggleFileCard: o,
    saveFileCard: n,
    metaFields: s,
    requiredMetaFields: a,
    openFileEditor: l,
    i18n: u,
    i18nArray: p,
    className: d,
    canEditFile: h
  } = r, x = () => typeof s == "function" ? s(t[i]) : s, D = t[i], O = (e = x()) != null ? e : [], _ = h(D), T = {};
  O.forEach((U) => {
    var L;
    T[U.id] = (L = D.meta[U.id]) != null ? L : "";
  });
  const [m, w] = Ui(T), S = nh((U) => {
    U.preventDefault(), n(m, i);
  }, [n, m, i]), P = (U, L) => {
    w({
      ...m,
      [L]: U
    });
  }, A = () => {
    o(!1);
  }, [E] = Ui(() => {
    const U = document.createElement("form");
    return U.setAttribute("tabindex", "-1"), U.id = Bn(), U;
  });
  return an(() => (document.body.appendChild(E), E.addEventListener("submit", S), () => {
    E.removeEventListener("submit", S), document.body.removeChild(E);
  }), [E, S]), c("div", {
    className: He("uppy-Dashboard-FileCard", d),
    "data-uppy-panelType": "FileCard",
    onDragOver: yt,
    onDragLeave: yt,
    onDrop: yt,
    onPaste: yt
  }, c("div", {
    className: "uppy-DashboardContent-bar"
  }, c("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, p("editing", {
    file: c("span", {
      className: "uppy-DashboardContent-titleFile"
    }, D.meta ? D.meta.name : D.name)
  })), c("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    form: E.id,
    title: u("finishEditingFile"),
    onClick: A
  }, u("cancel"))), c("div", {
    className: "uppy-Dashboard-FileCard-inner"
  }, c("div", {
    className: "uppy-Dashboard-FileCard-preview",
    style: {
      backgroundColor: Hn(D.type).color
    }
  }, c(lu, {
    file: D
  }), _ && c("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",
    onClick: (U) => {
      S(U), l(D);
    }
  }, u("editImage"))), c("div", {
    className: "uppy-Dashboard-FileCard-info"
  }, c(Qh, {
    computedMetaFields: O,
    requiredMetaFields: a,
    updateMeta: P,
    form: E,
    formState: m
  })), c("div", {
    className: "uppy-Dashboard-FileCard-actions"
  }, c("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
    type: "submit",
    form: E.id
  }, u("saveChanges")), c("button", {
    className: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
    type: "button",
    onClick: A,
    form: E.id
  }, u("cancel")))));
}
const qt = "uppy-transition-slideDownUp", ka = 250;
function yi(r) {
  let {
    children: e
  } = r;
  const [t, i] = Ui(null), [o, n] = Ui(""), s = xi(), a = xi(), l = xi(), u = () => {
    n(`${qt}-enter`), cancelAnimationFrame(l.current), clearTimeout(a.current), a.current = void 0, l.current = requestAnimationFrame(() => {
      n(`${qt}-enter ${qt}-enter-active`), s.current = setTimeout(() => {
        n("");
      }, ka);
    });
  }, p = () => {
    n(`${qt}-leave`), cancelAnimationFrame(l.current), clearTimeout(s.current), s.current = void 0, l.current = requestAnimationFrame(() => {
      n(`${qt}-leave ${qt}-leave-active`), a.current = setTimeout(() => {
        i(null), n("");
      }, ka);
    });
  };
  return an(() => {
    const d = ut(e)[0];
    t !== d && (d && !t ? u() : t && !d && !a.current && p(), i(d));
  }, [e, t]), an(() => () => {
    clearTimeout(s.current), clearTimeout(a.current), cancelAnimationFrame(l.current);
  }, []), t ? Ul(t, {
    className: He(o, t.props.className)
  }) : null;
}
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t) ({}).hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, Xt.apply(null, arguments);
}
const Fa = 900, Da = 700, Oo = 576, Ta = 330;
function tf(r) {
  const e = r.totalFileCount === 0, t = r.totalFileCount === 1, i = r.containerWidth > Oo, o = r.containerHeight > Ta, n = He({
    "uppy-Dashboard": !0,
    "uppy-Dashboard--isDisabled": r.disabled,
    "uppy-Dashboard--animateOpenClose": r.animateOpenClose,
    "uppy-Dashboard--isClosing": r.isClosing,
    "uppy-Dashboard--isDraggingOver": r.isDraggingOver,
    "uppy-Dashboard--modal": !r.inline,
    "uppy-size--md": r.containerWidth > Oo,
    "uppy-size--lg": r.containerWidth > Da,
    "uppy-size--xl": r.containerWidth > Fa,
    "uppy-size--height-md": r.containerHeight > Ta,
    // We might want to enable this in the future
    // 'uppy-size--height-lg': props.containerHeight > HEIGHT_LG,
    // 'uppy-size--height-xl': props.containerHeight > HEIGHT_XL,
    "uppy-Dashboard--isAddFilesPanelVisible": r.showAddFilesPanel,
    "uppy-Dashboard--isInnerWrapVisible": r.areInsidesReadyToBeVisible,
    // Only enable “centered single file” mode when Dashboard is tall enough
    "uppy-Dashboard--singleFile": r.singleFileFullScreen && t && o
  });
  let s = 1;
  r.containerWidth > Fa ? s = 5 : r.containerWidth > Da ? s = 4 : r.containerWidth > Oo && (s = 3);
  const a = r.showSelectedFiles && !e, l = r.recoveredState ? Object.keys(r.recoveredState.files).length : null, u = r.files ? Object.keys(r.files).filter((h) => r.files[h].isGhost).length : 0, p = () => u > 0 ? r.i18n("recoveredXFiles", {
    smart_count: u
  }) : r.i18n("recoveredAllFiles");
  return c("div", {
    className: n,
    "data-uppy-theme": r.theme,
    "data-uppy-num-acquirers": r.acquirers.length,
    "data-uppy-drag-drop-supported": !r.disableLocalFiles && wh(),
    "aria-hidden": r.inline ? "false" : r.isHidden,
    "aria-disabled": r.disabled,
    "aria-label": r.inline ? r.i18n("dashboardTitle") : r.i18n("dashboardWindowTitle"),
    onPaste: r.handlePaste,
    onDragOver: r.handleDragOver,
    onDragLeave: r.handleDragLeave,
    onDrop: r.handleDrop
  }, c("div", {
    "aria-hidden": "true",
    className: "uppy-Dashboard-overlay",
    tabIndex: -1,
    onClick: r.handleClickOutside
  }), c("div", {
    className: "uppy-Dashboard-inner",
    "aria-modal": !r.inline && "true",
    role: r.inline ? void 0 : "dialog",
    style: {
      width: r.inline && r.width ? r.width : "",
      height: r.inline && r.height ? r.height : ""
    }
  }, r.inline ? null : c("button", {
    className: "uppy-u-reset uppy-Dashboard-close",
    type: "button",
    "aria-label": r.i18n("closeModal"),
    title: r.i18n("closeModal"),
    onClick: r.closeModal
  }, c("span", {
    "aria-hidden": "true"
  }, "×")), c("div", {
    className: "uppy-Dashboard-innerWrap"
  }, c("div", {
    className: "uppy-Dashboard-dropFilesHereHint"
  }, r.i18n("dropHint")), a && c(Jh, r), l && c("div", {
    className: "uppy-Dashboard-serviceMsg"
  }, c("svg", {
    className: "uppy-Dashboard-serviceMsg-icon",
    "aria-hidden": "true",
    focusable: "false",
    width: "21",
    height: "16",
    viewBox: "0 0 24 19"
  }, c("g", {
    transform: "translate(0 -1)",
    fill: "none",
    fillRule: "evenodd"
  }, c("path", {
    d: "M12.857 1.43l10.234 17.056A1 1 0 0122.234 20H1.766a1 1 0 01-.857-1.514L11.143 1.429a1 1 0 011.714 0z",
    fill: "#FFD300"
  }), c("path", {
    fill: "#000",
    d: "M11 6h2l-.3 8h-1.4z"
  }), c("circle", {
    fill: "#000",
    cx: "12",
    cy: "17",
    r: "1"
  }))), c("strong", {
    className: "uppy-Dashboard-serviceMsg-title"
  }, r.i18n("sessionRestored")), c("div", {
    className: "uppy-Dashboard-serviceMsg-text"
  }, p())), a ? c(Gh, {
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
    itemsPerRow: s,
    containerWidth: r.containerWidth,
    containerHeight: r.containerHeight
  }) : c(du, {
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
  }), c(yi, null, r.showAddFilesPanel ? c(Vh, Xt({
    key: "AddFiles"
  }, r, {
    isSizeMD: i
  })) : null), c(yi, null, r.fileCardFor ? c(ef, Xt({
    key: "FileCard"
  }, r)) : null), c(yi, null, r.activePickerPanel ? c(Kh, Xt({
    key: "Picker"
  }, r)) : null), c(yi, null, r.showFileEditor ? c(Xh, Xt({
    key: "Editor"
  }, r)) : null), c("div", {
    className: "uppy-Dashboard-progressindicators"
  }, r.progressindicators.map((h) => r.uppy.getPlugin(h.id).render(r.state))))));
}
const rf = {
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
var of = 0;
function xe(r) {
  return "__private_" + of++ + "_" + r;
}
const nf = {
  version: "4.3.3"
}, Ao = xa.default || xa, Ia = 9, sf = 27;
function Ca() {
  const r = {};
  return r.promise = new Promise((e, t) => {
    r.resolve = e, r.reject = t;
  }), r;
}
const af = {
  target: "body",
  metaFields: [],
  thumbnailWidth: 280,
  thumbnailType: "image/jpeg",
  waitForThumbnailsBeforeUpload: !1,
  defaultPickerIcon: dh,
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
var wt = /* @__PURE__ */ xe("disabledNodes"), Ye = /* @__PURE__ */ xe("generateLargeThumbnailIfSingleFile"), xr = /* @__PURE__ */ xe("openFileEditorWhenFilesAdded"), _t = /* @__PURE__ */ xe("attachRenderFunctionToTarget"), Eo = /* @__PURE__ */ xe("isTargetSupported"), Uo = /* @__PURE__ */ xe("getAcquirers"), Ro = /* @__PURE__ */ xe("getProgressIndicators"), Ze = /* @__PURE__ */ xe("getEditors"), Mo = /* @__PURE__ */ xe("addSpecifiedPluginsFromOptions"), $o = /* @__PURE__ */ xe("autoDiscoverPlugins"), xt = /* @__PURE__ */ xe("addSupportedPluginIfNoTarget"), Sr = /* @__PURE__ */ xe("getStatusBarOpts"), Pr = /* @__PURE__ */ xe("getThumbnailGeneratorOpts"), zo = /* @__PURE__ */ xe("getInformerOpts"), kr = /* @__PURE__ */ xe("getStatusBarId"), Fr = /* @__PURE__ */ xe("getThumbnailGeneratorId"), No = /* @__PURE__ */ xe("getInformerId");
class cu extends Rt {
  // Timeouts
  constructor(e, t) {
    var i, o, n;
    const s = (i = t == null ? void 0 : t.autoOpen) != null ? i : null;
    super(e, {
      ...af,
      ...t,
      autoOpen: s
    }), Object.defineProperty(this, No, {
      value: hf
    }), Object.defineProperty(this, Fr, {
      value: cf
    }), Object.defineProperty(this, kr, {
      value: df
    }), Object.defineProperty(this, zo, {
      value: pf
    }), Object.defineProperty(this, Pr, {
      value: uf
    }), Object.defineProperty(this, Sr, {
      value: lf
    }), Object.defineProperty(this, wt, {
      writable: !0,
      value: void 0
    }), this.modalName = `uppy-Dashboard-${Bn()}`, this.superFocus = vh(), this.ifFocusedOnUppyRecently = !1, this.removeTarget = (a) => {
      const u = this.getPluginState().targets.filter((p) => p.id !== a.id);
      this.setPluginState({
        targets: u
      });
    }, this.addTarget = (a) => {
      const l = a.id || a.constructor.name, u = a.title || l, p = a.type;
      if (p !== "acquirer" && p !== "progressindicator" && p !== "editor")
        return this.uppy.log("Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor", "error"), null;
      const d = {
        id: l,
        name: u,
        type: p
      }, x = this.getPluginState().targets.slice();
      return x.push(d), this.setPluginState({
        targets: x
      }), this.el;
    }, this.hideAllPanels = () => {
      var a;
      const l = this.getPluginState(), u = {
        activePickerPanel: void 0,
        showAddFilesPanel: !1,
        activeOverlayType: null,
        fileCardFor: null,
        showFileEditor: !1
      };
      l.activePickerPanel === u.activePickerPanel && l.showAddFilesPanel === u.showAddFilesPanel && l.showFileEditor === u.showFileEditor && l.activeOverlayType === u.activeOverlayType || (this.setPluginState(u), this.uppy.emit("dashboard:close-panel", (a = l.activePickerPanel) == null ? void 0 : a.id));
    }, this.showPanel = (a) => {
      const {
        targets: l
      } = this.getPluginState(), u = l.find((p) => p.type === "acquirer" && p.id === a);
      this.setPluginState({
        activePickerPanel: u,
        activeOverlayType: "PickerPanel"
      }), this.uppy.emit("dashboard:show-panel", a);
    }, this.canEditFile = (a) => {
      const {
        targets: l
      } = this.getPluginState();
      return Q(this, Ze)[Ze](l).some((p) => this.uppy.getPlugin(p.id).canEditFile(a));
    }, this.openFileEditor = (a) => {
      const {
        targets: l
      } = this.getPluginState(), u = Q(this, Ze)[Ze](l);
      this.setPluginState({
        showFileEditor: !0,
        fileCardFor: a.id || null,
        activeOverlayType: "FileEditor"
      }), u.forEach((p) => {
        this.uppy.getPlugin(p.id).selectFile(a);
      });
    }, this.closeFileEditor = () => {
      const {
        metaFields: a
      } = this.getPluginState();
      a && a.length > 0 ? this.setPluginState({
        showFileEditor: !1,
        activeOverlayType: "FileCard"
      }) : this.setPluginState({
        showFileEditor: !1,
        fileCardFor: null,
        activeOverlayType: "AddFiles"
      });
    }, this.saveFileEditor = () => {
      const {
        targets: a
      } = this.getPluginState();
      Q(this, Ze)[Ze](a).forEach((u) => {
        this.uppy.getPlugin(u.id).save();
      }), this.closeFileEditor();
    }, this.openModal = () => {
      const {
        promise: a,
        resolve: l
      } = Ca();
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
      return this.opts.browserBackButtonClose && this.updateBrowserHistory(), document.addEventListener("keydown", this.handleKeyDownInModal), this.uppy.emit("dashboard:modal-open"), a;
    }, this.closeModal = (a) => {
      var l;
      const u = (l = a == null ? void 0 : a.manualClose) != null ? l : !0, {
        isHidden: p,
        isClosing: d
      } = this.getPluginState();
      if (p || d)
        return;
      const {
        promise: h,
        resolve: x
      } = Ca();
      if (this.opts.disablePageScrollWhenModalOpen && document.body.classList.remove("uppy-Dashboard-isFixed"), this.opts.animateOpenClose) {
        this.setPluginState({
          isClosing: !0
        });
        const O = () => {
          this.setPluginState({
            isHidden: !0,
            isClosing: !1
          }), this.superFocus.cancel(), this.savedActiveElement.focus(), this.el.removeEventListener("animationend", O, !1), x();
        };
        this.el.addEventListener("animationend", O, !1);
      } else
        this.setPluginState({
          isHidden: !0
        }), this.superFocus.cancel(), this.savedActiveElement.focus(), x();
      if (document.removeEventListener("keydown", this.handleKeyDownInModal), u && this.opts.browserBackButtonClose) {
        var D;
        (D = history.state) != null && D[this.modalName] && history.back();
      }
      return this.uppy.emit("dashboard:modal-closed"), h;
    }, this.isModalOpen = () => !this.getPluginState().isHidden || !1, this.requestCloseModal = () => this.opts.onRequestCloseModal ? this.opts.onRequestCloseModal() : this.closeModal(), this.setDarkModeCapability = (a) => {
      const {
        capabilities: l
      } = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...l,
          darkMode: a
        }
      });
    }, this.handleSystemDarkModeChange = (a) => {
      const l = a.matches;
      this.uppy.log(`[Dashboard] Dark mode is ${l ? "on" : "off"}`), this.setDarkModeCapability(l);
    }, this.toggleFileCard = (a, l) => {
      const u = this.uppy.getFile(l);
      a ? this.uppy.emit("dashboard:file-edit-start", u) : this.uppy.emit("dashboard:file-edit-complete", u), this.setPluginState({
        fileCardFor: a ? l : null,
        activeOverlayType: a ? "FileCard" : null
      });
    }, this.toggleAddFilesPanel = (a) => {
      this.setPluginState({
        showAddFilesPanel: a,
        activeOverlayType: a ? "AddFiles" : null
      });
    }, this.addFiles = (a) => {
      const l = a.map((u) => ({
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
      this.resizeObserver = new ResizeObserver((a) => {
        const l = a[0], {
          width: u,
          height: p
        } = l.contentRect;
        this.setPluginState({
          containerWidth: u,
          containerHeight: p,
          areInsidesReadyToBeVisible: !0
        });
      }), this.resizeObserver.observe(this.el.querySelector(".uppy-Dashboard-inner")), this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(() => {
        const a = this.getPluginState(), l = !this.opts.inline && a.isHidden;
        // We might want to enable this in the future
        // if ResizeObserver hasn't yet fired,
        !a.areInsidesReadyToBeVisible && // and it's not due to the modal being closed
        !l && (this.uppy.log("[Dashboard] resize event didn’t fire on time: defaulted to mobile layout", "warning"), this.setPluginState({
          areInsidesReadyToBeVisible: !0
        }));
      }, 1e3);
    }, this.stopListeningToResize = () => {
      this.resizeObserver.disconnect(), clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
    }, this.recordIfFocusedOnUppyRecently = (a) => {
      this.el.contains(a.target) ? this.ifFocusedOnUppyRecently = !0 : (this.ifFocusedOnUppyRecently = !1, this.superFocus.cancel());
    }, this.disableInteractiveElements = (a) => {
      var l;
      const u = ["a[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", '[role="button"]:not([disabled])'], p = (l = Q(this, wt)[wt]) != null ? l : Mr(this.el.querySelectorAll(u)).filter((d) => !d.classList.contains("uppy-Dashboard-close"));
      for (const d of p)
        d.tagName === "A" ? d.setAttribute("aria-disabled", a) : d.disabled = a;
      a ? Q(this, wt)[wt] = p : Q(this, wt)[wt] = null, this.dashboardIsDisabled = a;
    }, this.updateBrowserHistory = () => {
      var a;
      (a = history.state) != null && a[this.modalName] || history.pushState({
        // eslint-disable-next-line no-restricted-globals
        ...history.state,
        [this.modalName]: !0
      }, ""), window.addEventListener("popstate", this.handlePopState, !1);
    }, this.handlePopState = (a) => {
      var l;
      this.isModalOpen() && (!a.state || !a.state[this.modalName]) && this.closeModal({
        manualClose: !1
      }), !this.isModalOpen() && (l = a.state) != null && l[this.modalName] && history.back();
    }, this.handleKeyDownInModal = (a) => {
      a.keyCode === sf && this.requestCloseModal(), a.keyCode === Ia && au(a, this.getPluginState().activeOverlayType, this.el);
    }, this.handleClickOutside = () => {
      this.opts.closeModalOnClickOutside && this.requestCloseModal();
    }, this.handlePaste = (a) => {
      this.uppy.iteratePlugins((u) => {
        u.type === "acquirer" && (u.handleRootPaste == null || u.handleRootPaste(a));
      });
      const l = Mr(a.clipboardData.files);
      l.length > 0 && (this.uppy.log("[Dashboard] Files pasted"), this.addFiles(l));
    }, this.handleInputChange = (a) => {
      a.preventDefault();
      const l = Mr(a.currentTarget.files || []);
      l.length > 0 && (this.uppy.log("[Dashboard] Files selected through input"), this.addFiles(l));
    }, this.handleDragOver = (a) => {
      a.preventDefault(), a.stopPropagation();
      const l = () => {
        let h = !0;
        return this.uppy.iteratePlugins((x) => {
          x.canHandleRootDrop != null && x.canHandleRootDrop(a) && (h = !0);
        }), h;
      }, u = () => {
        const {
          types: h
        } = a.dataTransfer;
        return h.some((x) => x === "Files");
      }, p = l(), d = u();
      if (!p && !d || this.opts.disabled || // opts.disableLocalFiles should only be taken into account if no plugins
      // can handle the datatransfer
      this.opts.disableLocalFiles && (d || !p) || !this.uppy.getState().allowNewUpload) {
        a.dataTransfer.dropEffect = "none";
        return;
      }
      a.dataTransfer.dropEffect = "copy", this.setPluginState({
        isDraggingOver: !0
      }), this.opts.onDragOver(a);
    }, this.handleDragLeave = (a) => {
      a.preventDefault(), a.stopPropagation(), this.setPluginState({
        isDraggingOver: !1
      }), this.opts.onDragLeave(a);
    }, this.handleDrop = async (a) => {
      a.preventDefault(), a.stopPropagation(), this.setPluginState({
        isDraggingOver: !1
      }), this.uppy.iteratePlugins((d) => {
        d.type === "acquirer" && (d.handleRootDrop == null || d.handleRootDrop(a));
      });
      let l = !1;
      const u = (d) => {
        this.uppy.log(d, "error"), l || (this.uppy.info(d.message, "error"), l = !0);
      };
      this.uppy.log("[Dashboard] Processing dropped files");
      const p = await ih(a.dataTransfer, {
        logDropError: u
      });
      p.length > 0 && (this.uppy.log("[Dashboard] Files dropped"), this.addFiles(p)), this.opts.onDrop(a);
    }, this.handleRequestThumbnail = (a) => {
      this.opts.waitForThumbnailsBeforeUpload || this.uppy.emit("thumbnail:request", a);
    }, this.handleCancelThumbnail = (a) => {
      this.opts.waitForThumbnailsBeforeUpload || this.uppy.emit("thumbnail:cancel", a);
    }, this.handleKeyDownInInline = (a) => {
      a.keyCode === Ia && mh(a, this.getPluginState().activeOverlayType, this.el);
    }, this.handlePasteOnBody = (a) => {
      this.el.contains(document.activeElement) && this.handlePaste(a);
    }, this.handleComplete = (a) => {
      let {
        failed: l
      } = a;
      this.opts.closeAfterFinish && !(l != null && l.length) && this.requestCloseModal();
    }, this.handleCancelRestore = () => {
      this.uppy.emit("restore-canceled");
    }, Object.defineProperty(this, Ye, {
      writable: !0,
      value: () => {
        if (this.opts.disableThumbnailGenerator)
          return;
        const a = 600, l = this.uppy.getFiles();
        if (l.length === 1) {
          const u = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
          u == null || u.setOptions({
            thumbnailWidth: a
          });
          const p = {
            ...l[0],
            preview: void 0
          };
          u == null || u.requestThumbnail(p).then(() => {
            u == null || u.setOptions({
              thumbnailWidth: this.opts.thumbnailWidth
            });
          });
        }
      }
    }), Object.defineProperty(this, xr, {
      writable: !0,
      value: (a) => {
        const l = a[0], {
          metaFields: u
        } = this.getPluginState(), p = u && u.length > 0, d = this.canEditFile(l);
        p && this.opts.autoOpen === "metaEditor" ? this.toggleFileCard(!0, l.id) : d && this.opts.autoOpen === "imageEditor" && this.openFileEditor(l);
      }
    }), this.initEvents = () => {
      if (this.opts.trigger && !this.opts.inline) {
        const a = ca(this.opts.trigger);
        a ? a.forEach((l) => l.addEventListener("click", this.openModal)) : this.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself", "warning");
      }
      this.startListeningToResize(), document.addEventListener("paste", this.handlePasteOnBody), this.uppy.on("plugin-added", Q(this, xt)[xt]), this.uppy.on("plugin-remove", this.removeTarget), this.uppy.on("file-added", this.hideAllPanels), this.uppy.on("dashboard:modal-closed", this.hideAllPanels), this.uppy.on("complete", this.handleComplete), this.uppy.on("files-added", Q(this, Ye)[Ye]), this.uppy.on("file-removed", Q(this, Ye)[Ye]), document.addEventListener("focus", this.recordIfFocusedOnUppyRecently, !0), document.addEventListener("click", this.recordIfFocusedOnUppyRecently, !0), this.opts.inline && this.el.addEventListener("keydown", this.handleKeyDownInInline), this.opts.autoOpen && this.uppy.on("files-added", Q(this, xr)[xr]);
    }, this.removeEvents = () => {
      const a = ca(this.opts.trigger);
      !this.opts.inline && a && a.forEach((l) => l.removeEventListener("click", this.openModal)), this.stopListeningToResize(), document.removeEventListener("paste", this.handlePasteOnBody), window.removeEventListener("popstate", this.handlePopState, !1), this.uppy.off("plugin-added", Q(this, xt)[xt]), this.uppy.off("plugin-remove", this.removeTarget), this.uppy.off("file-added", this.hideAllPanels), this.uppy.off("dashboard:modal-closed", this.hideAllPanels), this.uppy.off("complete", this.handleComplete), this.uppy.off("files-added", Q(this, Ye)[Ye]), this.uppy.off("file-removed", Q(this, Ye)[Ye]), document.removeEventListener("focus", this.recordIfFocusedOnUppyRecently), document.removeEventListener("click", this.recordIfFocusedOnUppyRecently), this.opts.inline && this.el.removeEventListener("keydown", this.handleKeyDownInInline), this.opts.autoOpen && this.uppy.off("files-added", Q(this, xr)[xr]);
    }, this.superFocusOnEachUpdate = () => {
      const a = this.el.contains(document.activeElement), l = document.activeElement === document.body || document.activeElement === null, u = this.uppy.getState().info.length === 0, p = !this.opts.inline;
      // If update is connected to showing the Informer - let the screen reader calmly read it.
      u && // If we are in a modal - always superfocus without concern for other elements
      // on the page (user is unlikely to want to interact with the rest of the page)
      (p || // If we are already inside of Uppy, or
      a || // If we are not focused on anything BUT we have already, at least once, focused on uppy
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
    }, this.saveFileCard = (a, l) => {
      this.uppy.setFileMeta(l, a), this.toggleFileCard(!1, l);
    }, Object.defineProperty(this, _t, {
      writable: !0,
      value: (a) => {
        const l = this.uppy.getPlugin(a.id);
        return {
          ...a,
          icon: l.icon || this.opts.defaultPickerIcon,
          render: l.render
        };
      }
    }), Object.defineProperty(this, Eo, {
      writable: !0,
      value: (a) => {
        const l = this.uppy.getPlugin(a.id);
        return typeof l.isSupported != "function" ? !0 : l.isSupported();
      }
    }), Object.defineProperty(this, Uo, {
      writable: !0,
      value: Ao((a) => a.filter((l) => l.type === "acquirer" && Q(this, Eo)[Eo](l)).map(Q(this, _t)[_t]))
    }), Object.defineProperty(this, Ro, {
      writable: !0,
      value: Ao((a) => a.filter((l) => l.type === "progressindicator").map(Q(this, _t)[_t]))
    }), Object.defineProperty(this, Ze, {
      writable: !0,
      value: Ao((a) => a.filter((l) => l.type === "editor").map(Q(this, _t)[_t]))
    }), this.render = (a) => {
      const l = this.getPluginState(), {
        files: u,
        capabilities: p,
        allowNewUpload: d
      } = a, {
        newFiles: h,
        uploadStartedFiles: x,
        completeFiles: D,
        erroredFiles: O,
        inProgressFiles: _,
        inProgressNotPausedFiles: T,
        processingFiles: m,
        isUploadStarted: w,
        isAllComplete: S,
        isAllPaused: P
      } = this.uppy.getObjectOfFilesPerState(), A = Q(this, Uo)[Uo](l.targets), E = Q(this, Ro)[Ro](l.targets), U = Q(this, Ze)[Ze](l.targets);
      let L;
      return this.opts.theme === "auto" ? L = p.darkMode ? "dark" : "light" : L = this.opts.theme, ["files", "folders", "both"].indexOf(this.opts.fileManagerSelectionType) < 0 && (this.opts.fileManagerSelectionType = "files", console.warn(`Unsupported option for "fileManagerSelectionType". Using default of "${this.opts.fileManagerSelectionType}".`)), tf({
        state: a,
        isHidden: l.isHidden,
        files: u,
        newFiles: h,
        uploadStartedFiles: x,
        completeFiles: D,
        erroredFiles: O,
        inProgressFiles: _,
        inProgressNotPausedFiles: T,
        processingFiles: m,
        isUploadStarted: w,
        isAllComplete: S,
        isAllPaused: P,
        totalFileCount: Object.keys(u).length,
        totalProgress: a.totalProgress,
        allowNewUpload: d,
        acquirers: A,
        theme: L,
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
        progressindicators: E,
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
        recoveredState: a.recoveredState,
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
    }, Object.defineProperty(this, Mo, {
      writable: !0,
      value: () => {
        const {
          plugins: a
        } = this.opts;
        a.forEach((l) => {
          const u = this.uppy.getPlugin(l);
          u ? u.mount(this, u) : this.uppy.log(`[Uppy] Dashboard could not find plugin '${l}', make sure to uppy.use() the plugins you are specifying`, "warning");
        });
      }
    }), Object.defineProperty(this, $o, {
      writable: !0,
      value: () => {
        this.uppy.iteratePlugins(Q(this, xt)[xt]);
      }
    }), Object.defineProperty(this, xt, {
      writable: !0,
      value: (a) => {
        var l;
        const u = ["acquirer", "editor"];
        a && !((l = a.opts) != null && l.target) && u.includes(a.type) && (this.getPluginState().targets.some((d) => a.id === d.id) || a.mount(this, a));
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
        inline: a,
        closeAfterFinish: l
      } = this.opts;
      if (a && l)
        throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");
      const {
        allowMultipleUploads: u,
        allowMultipleUploadBatches: p
      } = this.uppy.opts;
      (u || p) && l && this.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploadBatches` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true", "warning");
      const {
        target: d
      } = this.opts;
      d && this.mount(d, this), this.opts.disableStatusBar || this.uppy.use(Ll, {
        id: Q(this, kr)[kr](),
        target: this,
        ...Q(this, Sr)[Sr]()
      }), this.opts.disableInformer || this.uppy.use(ql, {
        id: Q(this, No)[No](),
        target: this,
        ...Q(this, zo)[zo]()
      }), this.opts.disableThumbnailGenerator || this.uppy.use(Jl, {
        id: Q(this, Fr)[Fr](),
        ...Q(this, Pr)[Pr]()
      }), this.darkModeMediaQuery = typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
      const h = this.darkModeMediaQuery ? this.darkModeMediaQuery.matches : !1;
      if (this.uppy.log(`[Dashboard] Dark mode is ${h ? "on" : "off"}`), this.setDarkModeCapability(h), this.opts.theme === "auto") {
        var x;
        (x = this.darkModeMediaQuery) == null || x.addListener(this.handleSystemDarkModeChange);
      }
      Q(this, Mo)[Mo](), Q(this, $o)[$o](), this.initEvents();
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
        plugins: a
      } = this.opts;
      if (a.forEach((u) => {
        const p = this.uppy.getPlugin(u);
        p && p.unmount();
      }), this.opts.theme === "auto") {
        var l;
        (l = this.darkModeMediaQuery) == null || l.removeListener(this.handleSystemDarkModeChange);
      }
      this.opts.disablePageScrollWhenModalOpen && document.body.classList.remove("uppy-Dashboard-isFixed"), this.unmount(), this.removeEvents();
    }, this.id = this.opts.id || "Dashboard", this.title = "Dashboard", this.type = "orchestrator", this.defaultLocale = rf, this.opts.doneButtonHandler === void 0 && (this.opts.doneButtonHandler = () => {
      this.uppy.clear(), this.requestCloseModal();
    }), (n = (o = this.opts).onRequestCloseModal) != null || (o.onRequestCloseModal = () => this.closeModal()), this.i18nInit();
  }
  setOptions(e) {
    var t, i;
    super.setOptions(e), (t = this.uppy.getPlugin(Q(this, kr)[kr]())) == null || t.setOptions(Q(this, Sr)[Sr]()), (i = this.uppy.getPlugin(Q(this, Fr)[Fr]())) == null || i.setOptions(Q(this, Pr)[Pr]());
  }
}
function lf() {
  const {
    hideUploadButton: r,
    hideRetryButton: e,
    hidePauseResumeButton: t,
    hideCancelButton: i,
    showProgressDetails: o,
    hideProgressAfterFinish: n,
    locale: s,
    doneButtonHandler: a
  } = this.opts;
  return {
    hideUploadButton: r,
    hideRetryButton: e,
    hidePauseResumeButton: t,
    hideCancelButton: i,
    showProgressDetails: o,
    hideAfterFinish: n,
    locale: s,
    doneButtonHandler: a
  };
}
function uf() {
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
function pf() {
  return {
    // currently no options
  };
}
function df() {
  return `${this.id}:StatusBar`;
}
function cf() {
  return `${this.id}:ThumbnailGenerator`;
}
function hf() {
  return `${this.id}:Informer`;
}
cu.VERSION = nf.version;
function pn(r) {
  "@babel/helpers - typeof";
  return pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pn(r);
}
function ff(r, e, t) {
  return Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function yf(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function mf(r, e, t) {
  return e = Xr(e), gf(r, Wn() ? Reflect.construct(e, t || [], Xr(r).constructor) : e.apply(r, t));
}
function gf(r, e) {
  if (e && (pn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bf(r);
}
function bf(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function vf(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Kr(r, e);
}
function dn(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return dn = function(i) {
    if (i === null || !_f(i)) return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(i)) return e.get(i);
      e.set(i, o);
    }
    function o() {
      return wf(i, arguments, Xr(this).constructor);
    }
    return o.prototype = Object.create(i.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), Kr(o, i);
  }, dn(r);
}
function wf(r, e, t) {
  if (Wn()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, e);
  var o = new (r.bind.apply(r, i))();
  return t && Kr(o, t.prototype), o;
}
function Wn() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Wn = function() {
    return !!r;
  })();
}
function _f(r) {
  try {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  } catch {
    return typeof r == "function";
  }
}
function Kr(r, e) {
  return Kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, Kr(r, e);
}
function Xr(r) {
  return Xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Xr(r);
}
var mi = /* @__PURE__ */ function(r) {
  function e(t) {
    var i, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    if (yf(this, e), i = mf(this, e, [t]), i.originalRequest = n, i.originalResponse = s, i.causingError = o, o != null && (t += ", caused by ".concat(o.toString())), n != null) {
      var a = n.getHeader("X-Request-ID") || "n/a", l = n.getMethod(), u = n.getURL(), p = s ? s.getStatus() : "n/a", d = s ? s.getBody() || "" : "n/a";
      t += ", originated from request (method: ".concat(l, ", url: ").concat(u, ", response code: ").concat(p, ", response text: ").concat(d, ", request id: ").concat(a, ")");
    }
    return i.message = t, i;
  }
  return vf(e, r), ff(e);
}(/* @__PURE__ */ dn(Error));
function Yr(r) {
  "@babel/helpers - typeof";
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Yr(r);
}
function xf(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Sf(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, kf(i.key), i);
  }
}
function Pf(r, e, t) {
  return e && Sf(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function kf(r) {
  var e = Ff(r, "string");
  return Yr(e) == "symbol" ? e : e + "";
}
function Ff(r, e) {
  if (Yr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Yr(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Df = /* @__PURE__ */ function() {
  function r() {
    xf(this, r);
  }
  return Pf(r, [{
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
const hu = "3.7.7", Tf = hu, sr = typeof Buffer == "function", Ba = typeof TextDecoder == "function" ? new TextDecoder() : void 0, Oa = typeof TextEncoder == "function" ? new TextEncoder() : void 0, If = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Br = Array.prototype.slice.call(If), gi = ((r) => {
  let e = {};
  return r.forEach((t, i) => e[t] = i), e;
})(Br), Cf = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, _e = String.fromCharCode.bind(String), Aa = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (r) => new Uint8Array(Array.prototype.slice.call(r, 0)), fu = (r) => r.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), yu = (r) => r.replace(/[^A-Za-z0-9\+\/]/g, ""), mu = (r) => {
  let e, t, i, o, n = "";
  const s = r.length % 3;
  for (let a = 0; a < r.length; ) {
    if ((t = r.charCodeAt(a++)) > 255 || (i = r.charCodeAt(a++)) > 255 || (o = r.charCodeAt(a++)) > 255)
      throw new TypeError("invalid character found");
    e = t << 16 | i << 8 | o, n += Br[e >> 18 & 63] + Br[e >> 12 & 63] + Br[e >> 6 & 63] + Br[e & 63];
  }
  return s ? n.slice(0, s - 3) + "===".substring(s) : n;
}, Gn = typeof btoa == "function" ? (r) => btoa(r) : sr ? (r) => Buffer.from(r, "binary").toString("base64") : mu, cn = sr ? (r) => Buffer.from(r).toString("base64") : (r) => {
  let t = [];
  for (let i = 0, o = r.length; i < o; i += 4096)
    t.push(_e.apply(null, r.subarray(i, i + 4096)));
  return Gn(t.join(""));
}, Pi = (r, e = !1) => e ? fu(cn(r)) : cn(r), Bf = (r) => {
  if (r.length < 2) {
    var e = r.charCodeAt(0);
    return e < 128 ? r : e < 2048 ? _e(192 | e >>> 6) + _e(128 | e & 63) : _e(224 | e >>> 12 & 15) + _e(128 | e >>> 6 & 63) + _e(128 | e & 63);
  } else {
    var e = 65536 + (r.charCodeAt(0) - 55296) * 1024 + (r.charCodeAt(1) - 56320);
    return _e(240 | e >>> 18 & 7) + _e(128 | e >>> 12 & 63) + _e(128 | e >>> 6 & 63) + _e(128 | e & 63);
  }
}, Of = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, gu = (r) => r.replace(Of, Bf), Ea = sr ? (r) => Buffer.from(r, "utf8").toString("base64") : Oa ? (r) => cn(Oa.encode(r)) : (r) => Gn(gu(r)), Jt = (r, e = !1) => e ? fu(Ea(r)) : Ea(r), Ua = (r) => Jt(r, !0), Af = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, Ef = (r) => {
  switch (r.length) {
    case 4:
      var e = (7 & r.charCodeAt(0)) << 18 | (63 & r.charCodeAt(1)) << 12 | (63 & r.charCodeAt(2)) << 6 | 63 & r.charCodeAt(3), t = e - 65536;
      return _e((t >>> 10) + 55296) + _e((t & 1023) + 56320);
    case 3:
      return _e((15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2));
    default:
      return _e((31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1));
  }
}, bu = (r) => r.replace(Af, Ef), vu = (r) => {
  if (r = r.replace(/\s+/g, ""), !Cf.test(r))
    throw new TypeError("malformed base64.");
  r += "==".slice(2 - (r.length & 3));
  let e, t = "", i, o;
  for (let n = 0; n < r.length; )
    e = gi[r.charAt(n++)] << 18 | gi[r.charAt(n++)] << 12 | (i = gi[r.charAt(n++)]) << 6 | (o = gi[r.charAt(n++)]), t += i === 64 ? _e(e >> 16 & 255) : o === 64 ? _e(e >> 16 & 255, e >> 8 & 255) : _e(e >> 16 & 255, e >> 8 & 255, e & 255);
  return t;
}, Vn = typeof atob == "function" ? (r) => atob(yu(r)) : sr ? (r) => Buffer.from(r, "base64").toString("binary") : vu, wu = sr ? (r) => Aa(Buffer.from(r, "base64")) : (r) => Aa(Vn(r).split("").map((e) => e.charCodeAt(0))), _u = (r) => wu(xu(r)), Uf = sr ? (r) => Buffer.from(r, "base64").toString("utf8") : Ba ? (r) => Ba.decode(wu(r)) : (r) => bu(Vn(r)), xu = (r) => yu(r.replace(/[-_]/g, (e) => e == "-" ? "+" : "/")), hn = (r) => Uf(xu(r)), Rf = (r) => {
  if (typeof r != "string")
    return !1;
  const e = r.replace(/\s+/g, "").replace(/={0,2}$/, "");
  return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e);
}, Su = (r) => ({
  value: r,
  enumerable: !1,
  writable: !0,
  configurable: !0
}), Pu = function() {
  const r = (e, t) => Object.defineProperty(String.prototype, e, Su(t));
  r("fromBase64", function() {
    return hn(this);
  }), r("toBase64", function(e) {
    return Jt(this, e);
  }), r("toBase64URI", function() {
    return Jt(this, !0);
  }), r("toBase64URL", function() {
    return Jt(this, !0);
  }), r("toUint8Array", function() {
    return _u(this);
  });
}, ku = function() {
  const r = (e, t) => Object.defineProperty(Uint8Array.prototype, e, Su(t));
  r("toBase64", function(e) {
    return Pi(this, e);
  }), r("toBase64URI", function() {
    return Pi(this, !0);
  }), r("toBase64URL", function() {
    return Pi(this, !0);
  });
}, Mf = () => {
  Pu(), ku();
}, $f = {
  version: hu,
  VERSION: Tf,
  atob: Vn,
  atobPolyfill: vu,
  btoa: Gn,
  btoaPolyfill: mu,
  fromBase64: hn,
  toBase64: Jt,
  encode: Jt,
  encodeURI: Ua,
  encodeURL: Ua,
  utob: gu,
  btou: bu,
  decode: hn,
  isValid: Rf,
  fromUint8Array: Pi,
  toUint8Array: _u,
  extendString: Pu,
  extendUint8Array: ku,
  extendBuiltins: Mf
};
var Lo, Ra;
function zf() {
  return Ra || (Ra = 1, Lo = function(e, t) {
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
  }), Lo;
}
var bi = {}, Ma;
function Nf() {
  if (Ma) return bi;
  Ma = 1;
  var r = Object.prototype.hasOwnProperty, e;
  function t(s) {
    try {
      return decodeURIComponent(s.replace(/\+/g, " "));
    } catch {
      return null;
    }
  }
  function i(s) {
    try {
      return encodeURIComponent(s);
    } catch {
      return null;
    }
  }
  function o(s) {
    for (var a = /([^=?#&]+)=?([^&]*)/g, l = {}, u; u = a.exec(s); ) {
      var p = t(u[1]), d = t(u[2]);
      p === null || d === null || p in l || (l[p] = d);
    }
    return l;
  }
  function n(s, a) {
    a = a || "";
    var l = [], u, p;
    typeof a != "string" && (a = "?");
    for (p in s)
      if (r.call(s, p)) {
        if (u = s[p], !u && (u === null || u === e || isNaN(u)) && (u = ""), p = i(p), u = i(u), p === null || u === null) continue;
        l.push(p + "=" + u);
      }
    return l.length ? a + l.join("&") : "";
  }
  return bi.stringify = n, bi.parse = o, bi;
}
var jo, $a;
function Lf() {
  if ($a) return jo;
  $a = 1;
  var r = zf(), e = Nf(), t = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, i = /[\n\r\t]/g, o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, n = /:\d+$/, s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, a = /^[a-zA-Z]:/;
  function l(m) {
    return (m || "").toString().replace(t, "");
  }
  var u = [
    ["#", "hash"],
    // Extract from the back.
    ["?", "query"],
    // Extract from the back.
    function(w, S) {
      return h(S.protocol) ? w.replace(/\\/g, "/") : w;
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
  function d(m) {
    var w;
    typeof window < "u" ? w = window : typeof ht < "u" ? w = ht : typeof self < "u" ? w = self : w = {};
    var S = w.location || {};
    m = m || S;
    var P = {}, A = typeof m, E;
    if (m.protocol === "blob:")
      P = new O(unescape(m.pathname), {});
    else if (A === "string") {
      P = new O(m, {});
      for (E in p) delete P[E];
    } else if (A === "object") {
      for (E in m)
        E in p || (P[E] = m[E]);
      P.slashes === void 0 && (P.slashes = o.test(m.href));
    }
    return P;
  }
  function h(m) {
    return m === "file:" || m === "ftp:" || m === "http:" || m === "https:" || m === "ws:" || m === "wss:";
  }
  function x(m, w) {
    m = l(m), m = m.replace(i, ""), w = w || {};
    var S = s.exec(m), P = S[1] ? S[1].toLowerCase() : "", A = !!S[2], E = !!S[3], U = 0, L;
    return A ? E ? (L = S[2] + S[3] + S[4], U = S[2].length + S[3].length) : (L = S[2] + S[4], U = S[2].length) : E ? (L = S[3] + S[4], U = S[3].length) : L = S[4], P === "file:" ? U >= 2 && (L = L.slice(2)) : h(P) ? L = S[4] : P ? A && (L = L.slice(2)) : U >= 2 && h(w.protocol) && (L = S[4]), {
      protocol: P,
      slashes: A || h(P),
      slashesCount: U,
      rest: L
    };
  }
  function D(m, w) {
    if (m === "") return w;
    for (var S = (w || "/").split("/").slice(0, -1).concat(m.split("/")), P = S.length, A = S[P - 1], E = !1, U = 0; P--; )
      S[P] === "." ? S.splice(P, 1) : S[P] === ".." ? (S.splice(P, 1), U++) : U && (P === 0 && (E = !0), S.splice(P, 1), U--);
    return E && S.unshift(""), (A === "." || A === "..") && S.push(""), S.join("/");
  }
  function O(m, w, S) {
    if (m = l(m), m = m.replace(i, ""), !(this instanceof O))
      return new O(m, w, S);
    var P, A, E, U, L, ee, J = u.slice(), re = typeof w, C = this, ie = 0;
    for (re !== "object" && re !== "string" && (S = w, w = null), S && typeof S != "function" && (S = e.parse), w = d(w), A = x(m || "", w), P = !A.protocol && !A.slashes, C.slashes = A.slashes || P && w.slashes, C.protocol = A.protocol || w.protocol || "", m = A.rest, (A.protocol === "file:" && (A.slashesCount !== 2 || a.test(m)) || !A.slashes && (A.protocol || A.slashesCount < 2 || !h(C.protocol))) && (J[3] = [/(.*)/, "pathname"]); ie < J.length; ie++) {
      if (U = J[ie], typeof U == "function") {
        m = U(m, C);
        continue;
      }
      E = U[0], ee = U[1], E !== E ? C[ee] = m : typeof E == "string" ? (L = E === "@" ? m.lastIndexOf(E) : m.indexOf(E), ~L && (typeof U[2] == "number" ? (C[ee] = m.slice(0, L), m = m.slice(L + U[2])) : (C[ee] = m.slice(L), m = m.slice(0, L)))) : (L = E.exec(m)) && (C[ee] = L[1], m = m.slice(0, L.index)), C[ee] = C[ee] || P && U[3] && w[ee] || "", U[4] && (C[ee] = C[ee].toLowerCase());
    }
    S && (C.query = S(C.query)), P && w.slashes && C.pathname.charAt(0) !== "/" && (C.pathname !== "" || w.pathname !== "") && (C.pathname = D(C.pathname, w.pathname)), C.pathname.charAt(0) !== "/" && h(C.protocol) && (C.pathname = "/" + C.pathname), r(C.port, C.protocol) || (C.host = C.hostname, C.port = ""), C.username = C.password = "", C.auth && (L = C.auth.indexOf(":"), ~L ? (C.username = C.auth.slice(0, L), C.username = encodeURIComponent(decodeURIComponent(C.username)), C.password = C.auth.slice(L + 1), C.password = encodeURIComponent(decodeURIComponent(C.password))) : C.username = encodeURIComponent(decodeURIComponent(C.auth)), C.auth = C.password ? C.username + ":" + C.password : C.username), C.origin = C.protocol !== "file:" && h(C.protocol) && C.host ? C.protocol + "//" + C.host : "null", C.href = C.toString();
  }
  function _(m, w, S) {
    var P = this;
    switch (m) {
      case "query":
        typeof w == "string" && w.length && (w = (S || e.parse)(w)), P[m] = w;
        break;
      case "port":
        P[m] = w, r(w, P.protocol) ? w && (P.host = P.hostname + ":" + w) : (P.host = P.hostname, P[m] = "");
        break;
      case "hostname":
        P[m] = w, P.port && (w += ":" + P.port), P.host = w;
        break;
      case "host":
        P[m] = w, n.test(w) ? (w = w.split(":"), P.port = w.pop(), P.hostname = w.join(":")) : (P.hostname = w, P.port = "");
        break;
      case "protocol":
        P.protocol = w.toLowerCase(), P.slashes = !S;
        break;
      case "pathname":
      case "hash":
        if (w) {
          var A = m === "pathname" ? "/" : "#";
          P[m] = w.charAt(0) !== A ? A + w : w;
        } else
          P[m] = w;
        break;
      case "username":
      case "password":
        P[m] = encodeURIComponent(w);
        break;
      case "auth":
        var E = w.indexOf(":");
        ~E ? (P.username = w.slice(0, E), P.username = encodeURIComponent(decodeURIComponent(P.username)), P.password = w.slice(E + 1), P.password = encodeURIComponent(decodeURIComponent(P.password))) : P.username = encodeURIComponent(decodeURIComponent(w));
    }
    for (var U = 0; U < u.length; U++) {
      var L = u[U];
      L[4] && (P[L[1]] = P[L[1]].toLowerCase());
    }
    return P.auth = P.password ? P.username + ":" + P.password : P.username, P.origin = P.protocol !== "file:" && h(P.protocol) && P.host ? P.protocol + "//" + P.host : "null", P.href = P.toString(), P;
  }
  function T(m) {
    (!m || typeof m != "function") && (m = e.stringify);
    var w, S = this, P = S.host, A = S.protocol;
    A && A.charAt(A.length - 1) !== ":" && (A += ":");
    var E = A + (S.protocol && S.slashes || h(S.protocol) ? "//" : "");
    return S.username ? (E += S.username, S.password && (E += ":" + S.password), E += "@") : S.password ? (E += ":" + S.password, E += "@") : S.protocol !== "file:" && h(S.protocol) && !P && S.pathname !== "/" && (E += "@"), (P[P.length - 1] === ":" || n.test(S.hostname) && !S.port) && (P += ":"), E += P + S.pathname, w = typeof S.query == "object" ? m(S.query) : S.query, w && (E += w.charAt(0) !== "?" ? "?" + w : w), S.hash && (E += S.hash), E;
  }
  return O.prototype = { set: _, toString: T }, O.extractProtocol = x, O.location = d, O.trimLeft = l, O.qs = e, jo = O, jo;
}
var jf = Lf();
const qf = /* @__PURE__ */ zt(jf);
function Hf() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    var e = Math.random() * 16 | 0, t = r === "x" ? e : e & 3 | 8;
    return t.toString(16);
  });
}
function fn() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  fn = function() {
    return e;
  };
  var r, e = {}, t = Object.prototype, i = t.hasOwnProperty, o = Object.defineProperty || function(y, f, g) {
    y[f] = g.value;
  }, n = typeof Symbol == "function" ? Symbol : {}, s = n.iterator || "@@iterator", a = n.asyncIterator || "@@asyncIterator", l = n.toStringTag || "@@toStringTag";
  function u(y, f, g) {
    return Object.defineProperty(y, f, { value: g, enumerable: !0, configurable: !0, writable: !0 }), y[f];
  }
  try {
    u({}, "");
  } catch {
    u = function(g, F, B) {
      return g[F] = B;
    };
  }
  function p(y, f, g, F) {
    var B = f && f.prototype instanceof T ? f : T, I = Object.create(B.prototype), W = new ie(F || []);
    return o(I, "_invoke", { value: ee(y, g, W) }), I;
  }
  function d(y, f, g) {
    try {
      return { type: "normal", arg: y.call(f, g) };
    } catch (F) {
      return { type: "throw", arg: F };
    }
  }
  e.wrap = p;
  var h = "suspendedStart", x = "suspendedYield", D = "executing", O = "completed", _ = {};
  function T() {
  }
  function m() {
  }
  function w() {
  }
  var S = {};
  u(S, s, function() {
    return this;
  });
  var P = Object.getPrototypeOf, A = P && P(P(le([])));
  A && A !== t && i.call(A, s) && (S = A);
  var E = w.prototype = T.prototype = Object.create(S);
  function U(y) {
    ["next", "throw", "return"].forEach(function(f) {
      u(y, f, function(g) {
        return this._invoke(f, g);
      });
    });
  }
  function L(y, f) {
    function g(B, I, W, R) {
      var V = d(y[B], y, I);
      if (V.type !== "throw") {
        var ce = V.arg, K = ce.value;
        return K && Mt(K) == "object" && i.call(K, "__await") ? f.resolve(K.__await).then(function(ye) {
          g("next", ye, W, R);
        }, function(ye) {
          g("throw", ye, W, R);
        }) : f.resolve(K).then(function(ye) {
          ce.value = ye, W(ce);
        }, function(ye) {
          return g("throw", ye, W, R);
        });
      }
      R(V.arg);
    }
    var F;
    o(this, "_invoke", { value: function(I, W) {
      function R() {
        return new f(function(V, ce) {
          g(I, W, V, ce);
        });
      }
      return F = F ? F.then(R, R) : R();
    } });
  }
  function ee(y, f, g) {
    var F = h;
    return function(B, I) {
      if (F === D) throw Error("Generator is already running");
      if (F === O) {
        if (B === "throw") throw I;
        return { value: r, done: !0 };
      }
      for (g.method = B, g.arg = I; ; ) {
        var W = g.delegate;
        if (W) {
          var R = J(W, g);
          if (R) {
            if (R === _) continue;
            return R;
          }
        }
        if (g.method === "next") g.sent = g._sent = g.arg;
        else if (g.method === "throw") {
          if (F === h) throw F = O, g.arg;
          g.dispatchException(g.arg);
        } else g.method === "return" && g.abrupt("return", g.arg);
        F = D;
        var V = d(y, f, g);
        if (V.type === "normal") {
          if (F = g.done ? O : x, V.arg === _) continue;
          return { value: V.arg, done: g.done };
        }
        V.type === "throw" && (F = O, g.method = "throw", g.arg = V.arg);
      }
    };
  }
  function J(y, f) {
    var g = f.method, F = y.iterator[g];
    if (F === r) return f.delegate = null, g === "throw" && y.iterator.return && (f.method = "return", f.arg = r, J(y, f), f.method === "throw") || g !== "return" && (f.method = "throw", f.arg = new TypeError("The iterator does not provide a '" + g + "' method")), _;
    var B = d(F, y.iterator, f.arg);
    if (B.type === "throw") return f.method = "throw", f.arg = B.arg, f.delegate = null, _;
    var I = B.arg;
    return I ? I.done ? (f[y.resultName] = I.value, f.next = y.nextLoc, f.method !== "return" && (f.method = "next", f.arg = r), f.delegate = null, _) : I : (f.method = "throw", f.arg = new TypeError("iterator result is not an object"), f.delegate = null, _);
  }
  function re(y) {
    var f = { tryLoc: y[0] };
    1 in y && (f.catchLoc = y[1]), 2 in y && (f.finallyLoc = y[2], f.afterLoc = y[3]), this.tryEntries.push(f);
  }
  function C(y) {
    var f = y.completion || {};
    f.type = "normal", delete f.arg, y.completion = f;
  }
  function ie(y) {
    this.tryEntries = [{ tryLoc: "root" }], y.forEach(re, this), this.reset(!0);
  }
  function le(y) {
    if (y || y === "") {
      var f = y[s];
      if (f) return f.call(y);
      if (typeof y.next == "function") return y;
      if (!isNaN(y.length)) {
        var g = -1, F = function B() {
          for (; ++g < y.length; ) if (i.call(y, g)) return B.value = y[g], B.done = !1, B;
          return B.value = r, B.done = !0, B;
        };
        return F.next = F;
      }
    }
    throw new TypeError(Mt(y) + " is not iterable");
  }
  return m.prototype = w, o(E, "constructor", { value: w, configurable: !0 }), o(w, "constructor", { value: m, configurable: !0 }), m.displayName = u(w, l, "GeneratorFunction"), e.isGeneratorFunction = function(y) {
    var f = typeof y == "function" && y.constructor;
    return !!f && (f === m || (f.displayName || f.name) === "GeneratorFunction");
  }, e.mark = function(y) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(y, w) : (y.__proto__ = w, u(y, l, "GeneratorFunction")), y.prototype = Object.create(E), y;
  }, e.awrap = function(y) {
    return { __await: y };
  }, U(L.prototype), u(L.prototype, a, function() {
    return this;
  }), e.AsyncIterator = L, e.async = function(y, f, g, F, B) {
    B === void 0 && (B = Promise);
    var I = new L(p(y, f, g, F), B);
    return e.isGeneratorFunction(f) ? I : I.next().then(function(W) {
      return W.done ? W.value : I.next();
    });
  }, U(E), u(E, l, "Generator"), u(E, s, function() {
    return this;
  }), u(E, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(y) {
    var f = Object(y), g = [];
    for (var F in f) g.push(F);
    return g.reverse(), function B() {
      for (; g.length; ) {
        var I = g.pop();
        if (I in f) return B.value = I, B.done = !1, B;
      }
      return B.done = !0, B;
    };
  }, e.values = le, ie.prototype = { constructor: ie, reset: function(f) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(C), !f) for (var g in this) g.charAt(0) === "t" && i.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = r);
  }, stop: function() {
    this.done = !0;
    var f = this.tryEntries[0].completion;
    if (f.type === "throw") throw f.arg;
    return this.rval;
  }, dispatchException: function(f) {
    if (this.done) throw f;
    var g = this;
    function F(ce, K) {
      return W.type = "throw", W.arg = f, g.next = ce, K && (g.method = "next", g.arg = r), !!K;
    }
    for (var B = this.tryEntries.length - 1; B >= 0; --B) {
      var I = this.tryEntries[B], W = I.completion;
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
  }, abrupt: function(f, g) {
    for (var F = this.tryEntries.length - 1; F >= 0; --F) {
      var B = this.tryEntries[F];
      if (B.tryLoc <= this.prev && i.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
        var I = B;
        break;
      }
    }
    I && (f === "break" || f === "continue") && I.tryLoc <= g && g <= I.finallyLoc && (I = null);
    var W = I ? I.completion : {};
    return W.type = f, W.arg = g, I ? (this.method = "next", this.next = I.finallyLoc, _) : this.complete(W);
  }, complete: function(f, g) {
    if (f.type === "throw") throw f.arg;
    return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && g && (this.next = g), _;
  }, finish: function(f) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var F = this.tryEntries[g];
      if (F.finallyLoc === f) return this.complete(F.completion, F.afterLoc), C(F), _;
    }
  }, catch: function(f) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var F = this.tryEntries[g];
      if (F.tryLoc === f) {
        var B = F.completion;
        if (B.type === "throw") {
          var I = B.arg;
          C(F);
        }
        return I;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(f, g, F) {
    return this.delegate = { iterator: le(f), resultName: g, nextLoc: F }, this.method === "next" && (this.arg = r), _;
  } }, e;
}
function za(r, e, t, i, o, n, s) {
  try {
    var a = r[n](s), l = a.value;
  } catch (u) {
    t(u);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(i, o);
}
function Wf(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(i, o) {
      var n = r.apply(e, t);
      function s(l) {
        za(n, i, o, s, a, "next", l);
      }
      function a(l) {
        za(n, i, o, s, a, "throw", l);
      }
      s(void 0);
    });
  };
}
function Fu(r, e) {
  return Kf(r) || Vf(r, e) || Du(r, e) || Gf();
}
function Gf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vf(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var i, o, n, s, a = [], l = !0, u = !1;
    try {
      if (n = (t = t.call(r)).next, e !== 0) for (; !(l = (i = n.call(t)).done) && (a.push(i.value), a.length !== e); l = !0) ;
    } catch (p) {
      u = !0, o = p;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function Kf(r) {
  if (Array.isArray(r)) return r;
}
function Mt(r) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mt(r);
}
function Xf(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = Du(r)) || e) {
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
  var n = !0, s = !1, a;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var u = t.next();
    return n = u.done, u;
  }, e: function(u) {
    s = !0, a = u;
  }, f: function() {
    try {
      !n && t.return != null && t.return();
    } finally {
      if (s) throw a;
    }
  } };
}
function Du(r, e) {
  if (r) {
    if (typeof r == "string") return Na(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Na(r, e);
  }
}
function Na(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, i = new Array(e); t < e; t++) i[t] = r[t];
  return i;
}
function La(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Ht(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? La(Object(t), !0).forEach(function(i) {
      Yf(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : La(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Yf(r, e, t) {
  return e = Tu(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Zf(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ja(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Tu(i.key), i);
  }
}
function Jf(r, e, t) {
  return e && ja(r.prototype, e), t && ja(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Tu(r) {
  var e = Qf(r, "string");
  return Mt(e) == "symbol" ? e : e + "";
}
function Qf(r, e) {
  if (Mt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Mt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var ki = "tus-v1", Fi = "ietf-draft-03", Or = "ietf-draft-05", ey = {
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
  onShouldRetry: Iu,
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
  protocol: ki
}, Ri = /* @__PURE__ */ function() {
  function r(e, t) {
    Zf(this, r), "resume" in t && console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."), this.options = t, this.options.chunkSize = Number(this.options.chunkSize), this._urlStorage = this.options.urlStorage, this.file = e, this.url = null, this._req = null, this._fingerprint = null, this._urlStorageKey = null, this._offset = null, this._aborted = !1, this._size = null, this._source = null, this._retryAttempt = 0, this._retryTimeout = null, this._offsetBeforeRetry = 0, this._parallelUploads = null, this._parallelUploadUrls = null;
  }
  return Jf(r, [{
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
      if (![ki, Fi, Or].includes(this.options.protocol)) {
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
        for (var n = 0, s = ["uploadUrl", "uploadSize", "uploadLengthDeferred"]; n < s.length; n++) {
          var a = s[n];
          if (this.options[a]) {
            this._emitError(new Error("tus: cannot use the ".concat(a, " option when parallelUploads is enabled")));
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
      var s = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads, a = (t = this.options.parallelUploadBoundaries) !== null && t !== void 0 ? t : ry(this._source.size, s);
      this._parallelUploadUrls && a.forEach(function(p, d) {
        p.uploadUrl = i._parallelUploadUrls[d] || null;
      }), this._parallelUploadUrls = new Array(a.length);
      var l = a.map(function(p, d) {
        var h = 0;
        return i._source.slice(p.start, p.end).then(function(x) {
          var D = x.value;
          return new Promise(function(O, _) {
            var T = Ht(Ht({}, i.options), {}, {
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
              headers: Ht(Ht({}, i.options.headers), {}, {
                "Upload-Concat": "partial"
              }),
              // Reject or resolve the promise if the upload errors or completes.
              onSuccess: O,
              onError: _,
              // Based in the progress for this partial upload, calculate the progress
              // for the entire final upload.
              onProgress: function(S) {
                n = n - h + S, h = S, i._emitProgress(n, o);
              },
              // Wait until every partial upload has an upload URL, so we can add
              // them to the URL storage.
              onUploadUrlAvailable: function() {
                i._parallelUploadUrls[d] = m.url, i._parallelUploadUrls.filter(function(S) {
                  return !!S;
                }).length === a.length && i._saveUploadInUrlStorage();
              }
            }), m = new r(D, T);
            m.start(), i._parallelUploads.push(m);
          });
        });
      }), u;
      Promise.all(l).then(function() {
        u = i._openRequest("POST", i.options.endpoint), u.setHeader("Upload-Concat", "final;".concat(i._parallelUploadUrls.join(" ")));
        var p = qa(i.options.metadata);
        return p !== "" && u.setHeader("Upload-Metadata", p), i._sendRequest(u, null);
      }).then(function(p) {
        if (!Vt(p.getStatus(), 200)) {
          i._emitHttpError(u, p, "tus: unexpected response while creating upload");
          return;
        }
        var d = p.getHeader("Location");
        if (d == null) {
          i._emitHttpError(u, p, "tus: invalid or missing Location header");
          return;
        }
        i.url = Va(i.options.endpoint, d), "Created upload at ".concat(i.url), i._emitSuccess(p);
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
        var o = Xf(this._parallelUploads), n;
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var s = n.value;
            s.abort(t);
          }
        } catch (a) {
          o.e(a);
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
      this._emitError(new mi(o, n, t, i));
    }
  }, {
    key: "_emitError",
    value: function(t) {
      var i = this;
      if (!this._aborted) {
        if (this.options.retryDelays != null) {
          var o = this._offset != null && this._offset > this._offsetBeforeRetry;
          if (o && (this._retryAttempt = 0), Ga(t, this._retryAttempt, this.options)) {
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
      var o = qa(this.options.metadata);
      o !== "" && i.setHeader("Upload-Metadata", o);
      var n;
      this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred ? (this._offset = 0, n = this._addChunkToRequest(i)) : ((this.options.protocol === Fi || this.options.protocol === Or) && i.setHeader("Upload-Complete", "?0"), n = this._sendRequest(i, null)), n.then(function(s) {
        if (!Vt(s.getStatus(), 200)) {
          t._emitHttpError(i, s, "tus: unexpected response while creating upload");
          return;
        }
        var a = s.getHeader("Location");
        if (a == null) {
          t._emitHttpError(i, s, "tus: invalid or missing Location header");
          return;
        }
        if (t.url = Va(t.options.endpoint, a), "Created upload at ".concat(t.url), typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._size === 0) {
          t._emitSuccess(s), t._source.close();
          return;
        }
        t._saveUploadInUrlStorage().then(function() {
          t.options.uploadDataDuringCreation ? t._handleUploadResponse(i, s) : (t._offset = 0, t._performUpload());
        });
      }).catch(function(s) {
        t._emitHttpError(i, null, "tus: failed to create upload", s);
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
        var s = n.getStatus();
        if (!Vt(s, 200)) {
          if (s === 423) {
            t._emitHttpError(i, n, "tus: upload is currently locked; retry later");
            return;
          }
          if (Vt(s, 400) && t._removeFromUrlStorage(), !t.options.endpoint) {
            t._emitHttpError(i, n, "tus: unable to resume upload (new upload cannot be created without an endpoint)");
            return;
          }
          t.url = null, t._createUpload();
          return;
        }
        var a = Number.parseInt(n.getHeader("Upload-Offset"), 10);
        if (Number.isNaN(a)) {
          t._emitHttpError(i, n, "tus: invalid or missing offset value");
          return;
        }
        var l = Number.parseInt(n.getHeader("Upload-Length"), 10);
        if (Number.isNaN(l) && !t.options.uploadLengthDeferred && t.options.protocol === ki) {
          t._emitHttpError(i, n, "tus: invalid or missing length value");
          return;
        }
        typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._saveUploadInUrlStorage().then(function() {
          if (a === l) {
            t._emitProgress(l, l), t._emitSuccess(n);
            return;
          }
          t._offset = a, t._performUpload();
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
          if (!Vt(n.getStatus(), 200)) {
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
      return t.setProgressHandler(function(s) {
        i._emitProgress(o + s, i._size);
      }), this.options.protocol === ki ? t.setHeader("Content-Type", "application/offset+octet-stream") : this.options.protocol === Or && t.setHeader("Content-Type", "application/partial-upload"), (n === Number.POSITIVE_INFINITY || n > this._size) && !this.options.uploadLengthDeferred && (n = this._size), this._source.slice(o, n).then(function(s) {
        var a = s.value, l = s.done, u = a != null && a.size ? a.size : 0;
        i.options.uploadLengthDeferred && l && (i._size = i._offset + u, t.setHeader("Upload-Length", "".concat(i._size)));
        var p = i._offset + u;
        return !i.options.uploadLengthDeferred && l && p !== i._size ? Promise.reject(new Error("upload was configured with a size of ".concat(i._size, " bytes, but the source is done after ").concat(p, " bytes"))) : a === null ? i._sendRequest(t) : ((i.options.protocol === Fi || i.options.protocol === Or) && t.setHeader("Upload-Complete", l ? "?1" : "?0"), i._emitProgress(i._offset, i._size), i._sendRequest(t, a));
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
      var o = Ha(t, i, this.options);
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
      return Wa(t, i, this.options);
    }
  }], [{
    key: "terminate",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = Ha("DELETE", t, i);
      return Wa(o, null, i).then(function(n) {
        if (n.getStatus() !== 204)
          throw new mi("tus: unexpected response while terminating upload", null, o, n);
      }).catch(function(n) {
        if (n instanceof mi || (n = new mi("tus: failed to terminate upload", n, o, null)), !Ga(n, 0, i))
          throw n;
        var s = i.retryDelays[0], a = i.retryDelays.slice(1), l = Ht(Ht({}, i), {}, {
          retryDelays: a
        });
        return new Promise(function(u) {
          return setTimeout(u, s);
        }).then(function() {
          return r.terminate(t, l);
        });
      });
    }
  }]);
}();
function qa(r) {
  return Object.entries(r).map(function(e) {
    var t = Fu(e, 2), i = t[0], o = t[1];
    return "".concat(i, " ").concat($f.encode(String(o)));
  }).join(",");
}
function Vt(r, e) {
  return r >= e && r < e + 100;
}
function Ha(r, e, t) {
  var i = t.httpStack.createRequest(r, e);
  t.protocol === Fi ? i.setHeader("Upload-Draft-Interop-Version", "5") : t.protocol === Or ? i.setHeader("Upload-Draft-Interop-Version", "6") : i.setHeader("Tus-Resumable", "1.0.0");
  for (var o = t.headers || {}, n = 0, s = Object.entries(o); n < s.length; n++) {
    var a = Fu(s[n], 2), l = a[0], u = a[1];
    i.setHeader(l, u);
  }
  if (t.addRequestId) {
    var p = Hf();
    i.setHeader("X-Request-ID", p);
  }
  return i;
}
function Wa(r, e, t) {
  return yn.apply(this, arguments);
}
function yn() {
  return yn = Wf(/* @__PURE__ */ fn().mark(function r(e, t, i) {
    var o;
    return fn().wrap(function(s) {
      for (; ; ) switch (s.prev = s.next) {
        case 0:
          if (typeof i.onBeforeRequest != "function") {
            s.next = 3;
            break;
          }
          return s.next = 3, i.onBeforeRequest(e);
        case 3:
          return s.next = 5, e.send(t);
        case 5:
          if (o = s.sent, typeof i.onAfterResponse != "function") {
            s.next = 9;
            break;
          }
          return s.next = 9, i.onAfterResponse(e, o);
        case 9:
          return s.abrupt("return", o);
        case 10:
        case "end":
          return s.stop();
      }
    }, r);
  })), yn.apply(this, arguments);
}
function ty() {
  var r = !0;
  return typeof navigator < "u" && navigator.onLine === !1 && (r = !1), r;
}
function Ga(r, e, t) {
  return t.retryDelays == null || e >= t.retryDelays.length || r.originalRequest == null ? !1 : t && typeof t.onShouldRetry == "function" ? t.onShouldRetry(r, e, t) : Iu(r);
}
function Iu(r) {
  var e = r.originalResponse ? r.originalResponse.getStatus() : 0;
  return (!Vt(e, 400) || e === 409 || e === 423) && ty();
}
function Va(r, e) {
  return new qf(e, r).toString();
}
function ry(r, e) {
  for (var t = Math.floor(r / e), i = [], o = 0; o < e; o++)
    i.push({
      start: t * o,
      end: t * (o + 1)
    });
  return i[e - 1].end = r, i;
}
Ri.defaultOptions = ey;
var Cu = function() {
  return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
};
function iy(r) {
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
var oy = function() {
  return typeof window < "u" && (typeof window.PhoneGap < "u" || typeof window.Cordova < "u" || typeof window.cordova < "u");
};
function ny(r) {
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
function Zr(r) {
  "@babel/helpers - typeof";
  return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Zr(r);
}
function sy(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ay(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, uy(i.key), i);
  }
}
function ly(r, e, t) {
  return e && ay(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function uy(r) {
  var e = py(r, "string");
  return Zr(e) == "symbol" ? e : e + "";
}
function py(r, e) {
  if (Zr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Zr(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Ka = /* @__PURE__ */ function() {
  function r(e) {
    sy(this, r), this._file = e, this.size = e.size;
  }
  return ly(r, [{
    key: "slice",
    value: function(t, i) {
      if (oy())
        return ny(this._file.slice(t, i));
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
function Jr(r) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Jr(r);
}
function dy(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function cy(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, fy(i.key), i);
  }
}
function hy(r, e, t) {
  return e && cy(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function fy(r) {
  var e = yy(r, "string");
  return Jr(e) == "symbol" ? e : e + "";
}
function yy(r, e) {
  if (Jr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Jr(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function Xa(r) {
  return r === void 0 ? 0 : r.size !== void 0 ? r.size : r.length;
}
function my(r, e) {
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
var gy = /* @__PURE__ */ function() {
  function r(e) {
    dy(this, r), this._buffer = void 0, this._bufferOffset = 0, this._reader = e, this._done = !1;
  }
  return hy(r, [{
    key: "slice",
    value: function(t, i) {
      return t < this._bufferOffset ? Promise.reject(new Error("Requested data is before the reader's current offset")) : this._readUntilEnoughDataOrDone(t, i);
    }
  }, {
    key: "_readUntilEnoughDataOrDone",
    value: function(t, i) {
      var o = this, n = i <= this._bufferOffset + Xa(this._buffer);
      if (this._done || n) {
        var s = this._getDataFromBuffer(t, i), a = s == null ? this._done : !1;
        return Promise.resolve({
          value: s,
          done: a
        });
      }
      return this._reader.read().then(function(l) {
        var u = l.value, p = l.done;
        return p ? o._done = !0 : o._buffer === void 0 ? o._buffer = u : o._buffer = my(o._buffer, u), o._readUntilEnoughDataOrDone(t, i);
      });
    }
  }, {
    key: "_getDataFromBuffer",
    value: function(t, i) {
      t > this._bufferOffset && (this._buffer = this._buffer.slice(t - this._bufferOffset), this._bufferOffset = t);
      var o = Xa(this._buffer) === 0;
      return this._done && o ? null : this._buffer.slice(0, i - t);
    }
  }, {
    key: "close",
    value: function() {
      this._reader.cancel && this._reader.cancel();
    }
  }]);
}();
function $t(r) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $t(r);
}
function mn() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  mn = function() {
    return e;
  };
  var r, e = {}, t = Object.prototype, i = t.hasOwnProperty, o = Object.defineProperty || function(y, f, g) {
    y[f] = g.value;
  }, n = typeof Symbol == "function" ? Symbol : {}, s = n.iterator || "@@iterator", a = n.asyncIterator || "@@asyncIterator", l = n.toStringTag || "@@toStringTag";
  function u(y, f, g) {
    return Object.defineProperty(y, f, { value: g, enumerable: !0, configurable: !0, writable: !0 }), y[f];
  }
  try {
    u({}, "");
  } catch {
    u = function(g, F, B) {
      return g[F] = B;
    };
  }
  function p(y, f, g, F) {
    var B = f && f.prototype instanceof T ? f : T, I = Object.create(B.prototype), W = new ie(F || []);
    return o(I, "_invoke", { value: ee(y, g, W) }), I;
  }
  function d(y, f, g) {
    try {
      return { type: "normal", arg: y.call(f, g) };
    } catch (F) {
      return { type: "throw", arg: F };
    }
  }
  e.wrap = p;
  var h = "suspendedStart", x = "suspendedYield", D = "executing", O = "completed", _ = {};
  function T() {
  }
  function m() {
  }
  function w() {
  }
  var S = {};
  u(S, s, function() {
    return this;
  });
  var P = Object.getPrototypeOf, A = P && P(P(le([])));
  A && A !== t && i.call(A, s) && (S = A);
  var E = w.prototype = T.prototype = Object.create(S);
  function U(y) {
    ["next", "throw", "return"].forEach(function(f) {
      u(y, f, function(g) {
        return this._invoke(f, g);
      });
    });
  }
  function L(y, f) {
    function g(B, I, W, R) {
      var V = d(y[B], y, I);
      if (V.type !== "throw") {
        var ce = V.arg, K = ce.value;
        return K && $t(K) == "object" && i.call(K, "__await") ? f.resolve(K.__await).then(function(ye) {
          g("next", ye, W, R);
        }, function(ye) {
          g("throw", ye, W, R);
        }) : f.resolve(K).then(function(ye) {
          ce.value = ye, W(ce);
        }, function(ye) {
          return g("throw", ye, W, R);
        });
      }
      R(V.arg);
    }
    var F;
    o(this, "_invoke", { value: function(I, W) {
      function R() {
        return new f(function(V, ce) {
          g(I, W, V, ce);
        });
      }
      return F = F ? F.then(R, R) : R();
    } });
  }
  function ee(y, f, g) {
    var F = h;
    return function(B, I) {
      if (F === D) throw Error("Generator is already running");
      if (F === O) {
        if (B === "throw") throw I;
        return { value: r, done: !0 };
      }
      for (g.method = B, g.arg = I; ; ) {
        var W = g.delegate;
        if (W) {
          var R = J(W, g);
          if (R) {
            if (R === _) continue;
            return R;
          }
        }
        if (g.method === "next") g.sent = g._sent = g.arg;
        else if (g.method === "throw") {
          if (F === h) throw F = O, g.arg;
          g.dispatchException(g.arg);
        } else g.method === "return" && g.abrupt("return", g.arg);
        F = D;
        var V = d(y, f, g);
        if (V.type === "normal") {
          if (F = g.done ? O : x, V.arg === _) continue;
          return { value: V.arg, done: g.done };
        }
        V.type === "throw" && (F = O, g.method = "throw", g.arg = V.arg);
      }
    };
  }
  function J(y, f) {
    var g = f.method, F = y.iterator[g];
    if (F === r) return f.delegate = null, g === "throw" && y.iterator.return && (f.method = "return", f.arg = r, J(y, f), f.method === "throw") || g !== "return" && (f.method = "throw", f.arg = new TypeError("The iterator does not provide a '" + g + "' method")), _;
    var B = d(F, y.iterator, f.arg);
    if (B.type === "throw") return f.method = "throw", f.arg = B.arg, f.delegate = null, _;
    var I = B.arg;
    return I ? I.done ? (f[y.resultName] = I.value, f.next = y.nextLoc, f.method !== "return" && (f.method = "next", f.arg = r), f.delegate = null, _) : I : (f.method = "throw", f.arg = new TypeError("iterator result is not an object"), f.delegate = null, _);
  }
  function re(y) {
    var f = { tryLoc: y[0] };
    1 in y && (f.catchLoc = y[1]), 2 in y && (f.finallyLoc = y[2], f.afterLoc = y[3]), this.tryEntries.push(f);
  }
  function C(y) {
    var f = y.completion || {};
    f.type = "normal", delete f.arg, y.completion = f;
  }
  function ie(y) {
    this.tryEntries = [{ tryLoc: "root" }], y.forEach(re, this), this.reset(!0);
  }
  function le(y) {
    if (y || y === "") {
      var f = y[s];
      if (f) return f.call(y);
      if (typeof y.next == "function") return y;
      if (!isNaN(y.length)) {
        var g = -1, F = function B() {
          for (; ++g < y.length; ) if (i.call(y, g)) return B.value = y[g], B.done = !1, B;
          return B.value = r, B.done = !0, B;
        };
        return F.next = F;
      }
    }
    throw new TypeError($t(y) + " is not iterable");
  }
  return m.prototype = w, o(E, "constructor", { value: w, configurable: !0 }), o(w, "constructor", { value: m, configurable: !0 }), m.displayName = u(w, l, "GeneratorFunction"), e.isGeneratorFunction = function(y) {
    var f = typeof y == "function" && y.constructor;
    return !!f && (f === m || (f.displayName || f.name) === "GeneratorFunction");
  }, e.mark = function(y) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(y, w) : (y.__proto__ = w, u(y, l, "GeneratorFunction")), y.prototype = Object.create(E), y;
  }, e.awrap = function(y) {
    return { __await: y };
  }, U(L.prototype), u(L.prototype, a, function() {
    return this;
  }), e.AsyncIterator = L, e.async = function(y, f, g, F, B) {
    B === void 0 && (B = Promise);
    var I = new L(p(y, f, g, F), B);
    return e.isGeneratorFunction(f) ? I : I.next().then(function(W) {
      return W.done ? W.value : I.next();
    });
  }, U(E), u(E, l, "Generator"), u(E, s, function() {
    return this;
  }), u(E, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(y) {
    var f = Object(y), g = [];
    for (var F in f) g.push(F);
    return g.reverse(), function B() {
      for (; g.length; ) {
        var I = g.pop();
        if (I in f) return B.value = I, B.done = !1, B;
      }
      return B.done = !0, B;
    };
  }, e.values = le, ie.prototype = { constructor: ie, reset: function(f) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(C), !f) for (var g in this) g.charAt(0) === "t" && i.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = r);
  }, stop: function() {
    this.done = !0;
    var f = this.tryEntries[0].completion;
    if (f.type === "throw") throw f.arg;
    return this.rval;
  }, dispatchException: function(f) {
    if (this.done) throw f;
    var g = this;
    function F(ce, K) {
      return W.type = "throw", W.arg = f, g.next = ce, K && (g.method = "next", g.arg = r), !!K;
    }
    for (var B = this.tryEntries.length - 1; B >= 0; --B) {
      var I = this.tryEntries[B], W = I.completion;
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
  }, abrupt: function(f, g) {
    for (var F = this.tryEntries.length - 1; F >= 0; --F) {
      var B = this.tryEntries[F];
      if (B.tryLoc <= this.prev && i.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
        var I = B;
        break;
      }
    }
    I && (f === "break" || f === "continue") && I.tryLoc <= g && g <= I.finallyLoc && (I = null);
    var W = I ? I.completion : {};
    return W.type = f, W.arg = g, I ? (this.method = "next", this.next = I.finallyLoc, _) : this.complete(W);
  }, complete: function(f, g) {
    if (f.type === "throw") throw f.arg;
    return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && g && (this.next = g), _;
  }, finish: function(f) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var F = this.tryEntries[g];
      if (F.finallyLoc === f) return this.complete(F.completion, F.afterLoc), C(F), _;
    }
  }, catch: function(f) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var F = this.tryEntries[g];
      if (F.tryLoc === f) {
        var B = F.completion;
        if (B.type === "throw") {
          var I = B.arg;
          C(F);
        }
        return I;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(f, g, F) {
    return this.delegate = { iterator: le(f), resultName: g, nextLoc: F }, this.method === "next" && (this.arg = r), _;
  } }, e;
}
function Ya(r, e, t, i, o, n, s) {
  try {
    var a = r[n](s), l = a.value;
  } catch (u) {
    t(u);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(i, o);
}
function by(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(i, o) {
      var n = r.apply(e, t);
      function s(l) {
        Ya(n, i, o, s, a, "next", l);
      }
      function a(l) {
        Ya(n, i, o, s, a, "throw", l);
      }
      s(void 0);
    });
  };
}
function vy(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wy(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, xy(i.key), i);
  }
}
function _y(r, e, t) {
  return e && wy(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function xy(r) {
  var e = Sy(r, "string");
  return $t(e) == "symbol" ? e : e + "";
}
function Sy(r, e) {
  if ($t(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if ($t(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Py = /* @__PURE__ */ function() {
  function r() {
    vy(this, r);
  }
  return _y(r, [{
    key: "openFile",
    value: function() {
      var e = by(/* @__PURE__ */ mn().mark(function i(o, n) {
        var s;
        return mn().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!(Cu() && o && typeof o.uri < "u")) {
                l.next = 11;
                break;
              }
              return l.prev = 1, l.next = 4, iy(o.uri);
            case 4:
              return s = l.sent, l.abrupt("return", new Ka(s));
            case 8:
              throw l.prev = 8, l.t0 = l.catch(1), new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));
            case 11:
              if (!(typeof o.slice == "function" && typeof o.size < "u")) {
                l.next = 13;
                break;
              }
              return l.abrupt("return", Promise.resolve(new Ka(o)));
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
              return l.abrupt("return", Promise.resolve(new gy(o, n)));
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
function ky(r, e) {
  return Cu() ? Promise.resolve(Fy(r, e)) : Promise.resolve(["tus-br", r.name, r.type, r.size, r.lastModified, e.endpoint].join("-"));
}
function Fy(r, e) {
  var t = r.exif ? Dy(JSON.stringify(r.exif)) : "noexif";
  return ["tus-rn", r.name || "noname", r.size || "nosize", t, e.endpoint].join("/");
}
function Dy(r) {
  var e = 0;
  if (r.length === 0)
    return e;
  for (var t = 0; t < r.length; t++) {
    var i = r.charCodeAt(t);
    e = (e << 5) - e + i, e &= e;
  }
  return e;
}
function Qr(r) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qr(r);
}
function Kn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ty(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Iy(i.key), i);
  }
}
function Xn(r, e, t) {
  return e && Ty(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Iy(r) {
  var e = Cy(r, "string");
  return Qr(e) == "symbol" ? e : e + "";
}
function Cy(r, e) {
  if (Qr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Qr(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var By = /* @__PURE__ */ function() {
  function r() {
    Kn(this, r);
  }
  return Xn(r, [{
    key: "createRequest",
    value: function(t, i) {
      return new Oy(t, i);
    }
  }, {
    key: "getName",
    value: function() {
      return "XHRHttpStack";
    }
  }]);
}(), Oy = /* @__PURE__ */ function() {
  function r(e, t) {
    Kn(this, r), this._xhr = new XMLHttpRequest(), this._xhr.open(e, t, !0), this._method = e, this._url = t, this._headers = {};
  }
  return Xn(r, [{
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
          o(new Ay(t._xhr));
        }, t._xhr.onerror = function(s) {
          n(s);
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
}(), Ay = /* @__PURE__ */ function() {
  function r(e) {
    Kn(this, r), this._xhr = e;
  }
  return Xn(r, [{
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
function ei(r) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ei(r);
}
function Ey(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Uy(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, My(i.key), i);
  }
}
function Ry(r, e, t) {
  return e && Uy(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function My(r) {
  var e = $y(r, "string");
  return ei(e) == "symbol" ? e : e + "";
}
function $y(r, e) {
  if (ei(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (ei(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var gn = !1;
try {
  gn = "localStorage" in window;
  var qo = "tusSupport", Za = localStorage.getItem(qo);
  localStorage.setItem(qo, Za), Za === null && localStorage.removeItem(qo);
} catch (r) {
  if (r.code === r.SECURITY_ERR || r.code === r.QUOTA_EXCEEDED_ERR)
    gn = !1;
  else
    throw r;
}
var zy = gn, Ny = /* @__PURE__ */ function() {
  function r() {
    Ey(this, r);
  }
  return Ry(r, [{
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
            var s = JSON.parse(localStorage.getItem(n));
            s.urlStorageKey = n, i.push(s);
          } catch {
          }
      }
      return i;
    }
  }]);
}();
function rr(r) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, rr(r);
}
function Ly(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jy(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Ou(i.key), i);
  }
}
function qy(r, e, t) {
  return t && jy(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Hy(r, e, t) {
  return e = Mi(e), Wy(r, Bu() ? Reflect.construct(e, t || [], Mi(r).constructor) : e.apply(r, t));
}
function Wy(r, e) {
  if (e && (rr(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gy(r);
}
function Gy(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Bu() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Bu = function() {
    return !!r;
  })();
}
function Mi(r) {
  return Mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Mi(r);
}
function Vy(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && bn(r, e);
}
function bn(r, e) {
  return bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, bn(r, e);
}
function Ja(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Yt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ja(Object(t), !0).forEach(function(i) {
      Ky(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ja(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Ky(r, e, t) {
  return e = Ou(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Ou(r) {
  var e = Xy(r, "string");
  return rr(e) == "symbol" ? e : e + "";
}
function Xy(r, e) {
  if (rr(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (rr(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var vn = Yt(Yt({}, Ri.defaultOptions), {}, {
  httpStack: new By(),
  fileReader: new Py(),
  urlStorage: zy ? new Ny() : new Df(),
  fingerprint: ky
}), Yy = /* @__PURE__ */ function(r) {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Ly(this, e), i = Yt(Yt({}, vn), i), Hy(this, e, [t, i]);
  }
  return Vy(e, r), qy(e, null, [{
    key: "terminate",
    value: function(i) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return o = Yt(Yt({}, vn), o), Ri.terminate(i, o);
    }
  }]);
}(Ri);
function Je(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var Zy = 0;
function Au(r) {
  return "__private_" + Zy++ + "_" + r;
}
var Se = /* @__PURE__ */ Au("uppy"), Dr = /* @__PURE__ */ Au("events");
class Jy {
  constructor(e) {
    Object.defineProperty(this, Se, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Dr, {
      writable: !0,
      value: []
    }), Je(this, Se)[Se] = e;
  }
  on(e, t) {
    return Je(this, Dr)[Dr].push([e, t]), Je(this, Se)[Se].on(e, t);
  }
  remove() {
    for (const [e, t] of Je(this, Dr)[Dr].splice(0))
      Je(this, Se)[Se].off(e, t);
  }
  onFilePause(e, t) {
    this.on("upload-pause", (i, o) => {
      e === (i == null ? void 0 : i.id) && t(o);
    });
  }
  onFileRemove(e, t) {
    this.on("file-removed", (i) => {
      e === i.id && t(i.id);
    });
  }
  onPause(e, t) {
    this.on("upload-pause", (i, o) => {
      e === (i == null ? void 0 : i.id) && t(o);
    });
  }
  onRetry(e, t) {
    this.on("upload-retry", (i) => {
      e === (i == null ? void 0 : i.id) && t();
    });
  }
  onRetryAll(e, t) {
    this.on("retry-all", () => {
      Je(this, Se)[Se].getFile(e) && t();
    });
  }
  onPauseAll(e, t) {
    this.on("pause-all", () => {
      Je(this, Se)[Se].getFile(e) && t();
    });
  }
  onCancelAll(e, t) {
    var i = this;
    this.on("cancel-all", function() {
      Je(i, Se)[Se].getFile(e) && t(...arguments);
    });
  }
  onResumeAll(e, t) {
    this.on("resume-all", () => {
      Je(this, Se)[Se].getFile(e) && t();
    });
  }
}
class Qy extends Error {
  constructor(e, t) {
    t === void 0 && (t = null), super("This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."), this.cause = e, this.isNetworkError = !0, this.request = t;
  }
}
function em(r) {
  return r ? r.readyState !== 0 && r.readyState !== 4 || r.status === 0 : !1;
}
function G(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var tm = 0;
function Be(r) {
  return "__private_" + tm++ + "_" + r;
}
function rm(r) {
  return new Error("Cancelled", {
    cause: r
  });
}
function Qa(r) {
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
var Ee = /* @__PURE__ */ Be("activeRequests"), Te = /* @__PURE__ */ Be("queuedHandlers"), Oe = /* @__PURE__ */ Be("paused"), St = /* @__PURE__ */ Be("pauseTimer"), Pe = /* @__PURE__ */ Be("downLimit"), Pt = /* @__PURE__ */ Be("upperLimit"), Qe = /* @__PURE__ */ Be("rateLimitingTimer"), $r = /* @__PURE__ */ Be("call"), nt = /* @__PURE__ */ Be("queueNext"), wn = /* @__PURE__ */ Be("next"), Ho = /* @__PURE__ */ Be("queue"), _n = /* @__PURE__ */ Be("dequeue"), Wo = /* @__PURE__ */ Be("resume"), kt = /* @__PURE__ */ Be("increaseLimit");
class im {
  constructor(e) {
    Object.defineProperty(this, _n, {
      value: lm
    }), Object.defineProperty(this, Ho, {
      value: am
    }), Object.defineProperty(this, wn, {
      value: sm
    }), Object.defineProperty(this, nt, {
      value: nm
    }), Object.defineProperty(this, $r, {
      value: om
    }), Object.defineProperty(this, Ee, {
      writable: !0,
      value: 0
    }), Object.defineProperty(this, Te, {
      writable: !0,
      value: []
    }), Object.defineProperty(this, Oe, {
      writable: !0,
      value: !1
    }), Object.defineProperty(this, St, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Pe, {
      writable: !0,
      value: 1
    }), Object.defineProperty(this, Pt, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Qe, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Wo, {
      writable: !0,
      value: () => this.resume()
    }), Object.defineProperty(this, kt, {
      writable: !0,
      value: () => {
        if (G(this, Oe)[Oe]) {
          G(this, Qe)[Qe] = setTimeout(G(this, kt)[kt], 0);
          return;
        }
        G(this, Pe)[Pe] = this.limit, this.limit = Math.ceil((G(this, Pt)[Pt] + G(this, Pe)[Pe]) / 2);
        for (let t = G(this, Pe)[Pe]; t <= this.limit; t++)
          G(this, nt)[nt]();
        G(this, Pt)[Pt] - G(this, Pe)[Pe] > 3 ? G(this, Qe)[Qe] = setTimeout(G(this, kt)[kt], 2e3) : G(this, Pe)[Pe] = Math.floor(G(this, Pe)[Pe] / 2);
      }
    }), typeof e != "number" || e === 0 ? this.limit = 1 / 0 : this.limit = e;
  }
  run(e, t) {
    return !G(this, Oe)[Oe] && G(this, Ee)[Ee] < this.limit ? G(this, $r)[$r](e) : G(this, Ho)[Ho](e, t);
  }
  wrapSyncFunction(e, t) {
    var i = this;
    return function() {
      for (var o = arguments.length, n = new Array(o), s = 0; s < o; s++)
        n[s] = arguments[s];
      const a = i.run(() => (e(...n), queueMicrotask(() => a.done()), () => {
      }), t);
      return {
        abortOn: Qa,
        abort() {
          a.abort();
        }
      };
    };
  }
  wrapPromiseFunction(e, t) {
    var i = this;
    return function() {
      for (var o = arguments.length, n = new Array(o), s = 0; s < o; s++)
        n[s] = arguments[s];
      let a;
      const l = new Promise((u, p) => {
        a = i.run(() => {
          let d, h;
          try {
            h = Promise.resolve(e(...n));
          } catch (x) {
            h = Promise.reject(x);
          }
          return h.then((x) => {
            d ? p(d) : (a.done(), u(x));
          }, (x) => {
            d ? p(d) : (a.done(), p(x));
          }), (x) => {
            d = rm(x);
          };
        }, t);
      });
      return l.abort = (u) => {
        a.abort(u);
      }, l.abortOn = Qa, l;
    };
  }
  resume() {
    G(this, Oe)[Oe] = !1, clearTimeout(G(this, St)[St]);
    for (let e = 0; e < this.limit; e++)
      G(this, nt)[nt]();
  }
  /**
   * Freezes the queue for a while or indefinitely.
   *
   * @param {number | null } [duration] Duration for the pause to happen, in milliseconds.
   *                                    If omitted, the queue won't resume automatically.
   */
  pause(e) {
    e === void 0 && (e = null), G(this, Oe)[Oe] = !0, clearTimeout(G(this, St)[St]), e != null && (G(this, St)[St] = setTimeout(G(this, Wo)[Wo], e));
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
    clearTimeout(G(this, Qe)[Qe]), this.pause(e), this.limit > 1 && Number.isFinite(this.limit) && (G(this, Pt)[Pt] = this.limit - 1, this.limit = G(this, Pe)[Pe], G(this, Qe)[Qe] = setTimeout(G(this, kt)[kt], e));
  }
  get isPaused() {
    return G(this, Oe)[Oe];
  }
}
function om(r) {
  G(this, Ee)[Ee] += 1;
  let e = !1, t;
  try {
    t = r();
  } catch (i) {
    throw G(this, Ee)[Ee] -= 1, i;
  }
  return {
    abort: (i) => {
      e || (e = !0, G(this, Ee)[Ee] -= 1, t == null || t(i), G(this, nt)[nt]());
    },
    done: () => {
      e || (e = !0, G(this, Ee)[Ee] -= 1, G(this, nt)[nt]());
    }
  };
}
function nm() {
  queueMicrotask(() => G(this, wn)[wn]());
}
function sm() {
  if (G(this, Oe)[Oe] || G(this, Ee)[Ee] >= this.limit || G(this, Te)[Te].length === 0)
    return;
  const r = G(this, Te)[Te].shift();
  if (r == null)
    throw new Error("Invariant violation: next is null");
  const e = G(this, $r)[$r](r.fn);
  r.abort = e.abort, r.done = e.done;
}
function am(r, e) {
  const t = {
    fn: r,
    priority: (e == null ? void 0 : e.priority) || 0,
    abort: () => {
      G(this, _n)[_n](t);
    },
    done: () => {
      throw new Error("Cannot mark a queued request as done: this indicates a bug");
    }
  }, i = G(this, Te)[Te].findIndex((o) => t.priority > o.priority);
  return i === -1 ? G(this, Te)[Te].push(t) : G(this, Te)[Te].splice(i, 0, t), t;
}
function lm(r) {
  const e = G(this, Te)[Te].indexOf(r);
  e !== -1 && G(this, Te)[Te].splice(e, 1);
}
function Go(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
function um(r) {
  const e = (t) => "error" in t && !!t.error;
  return r.filter((t) => !e(t));
}
function pm(r) {
  return r.filter((e) => {
    var t;
    return !((t = e.progress) != null && t.uploadStarted) || !e.isRestored;
  });
}
function dm(r, e) {
  return r === !0 ? Object.keys(e) : Array.isArray(r) ? r : [];
}
function cm() {
  return typeof window < "u" && // @ts-expect-error may exist
  (typeof window.PhoneGap < "u" || // @ts-expect-error may exist
  typeof window.Cordova < "u" || // @ts-expect-error may exist
  typeof window.cordova < "u");
}
function hm() {
  return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
}
function fm(r) {
  return (e, t) => {
    if (cm() || hm())
      return vn.fingerprint(e, t);
    const i = ["tus", r.id, t.endpoint].join("-");
    return Promise.resolve(i);
  };
}
function At(r, e) {
  if (!{}.hasOwnProperty.call(r, e)) throw new TypeError("attempted to use private field on non-instance");
  return r;
}
var ym = 0;
function ii(r) {
  return "__private_" + ym++ + "_" + r;
}
const mm = {
  version: "4.2.2"
}, Eu = {
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
}, gm = {
  limit: 20,
  retryDelays: Eu.retryDelays,
  withCredentials: !1,
  allowedMetaFields: !0
};
var zr = /* @__PURE__ */ ii("retryDelayIterator"), xn = /* @__PURE__ */ ii("uploadLocalFile"), Sn = /* @__PURE__ */ ii("getCompanionClientArgs"), Vo = /* @__PURE__ */ ii("uploadFiles"), Tr = /* @__PURE__ */ ii("handleUpload");
class Uu extends $l {
  constructor(e, t) {
    var i, o;
    if (super(e, {
      ...gm,
      ...t
    }), Object.defineProperty(this, Vo, {
      value: wm
    }), Object.defineProperty(this, Sn, {
      value: vm
    }), Object.defineProperty(this, xn, {
      value: bm
    }), Object.defineProperty(this, zr, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, Tr, {
      writable: !0,
      value: async (n) => {
        if (n.length === 0) {
          this.uppy.log("[Tus] No files to upload");
          return;
        }
        this.opts.limit === 0 && this.uppy.log("[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0", "warning"), this.uppy.log("[Tus] Uploading...");
        const s = this.uppy.getFilesByIds(n);
        await At(this, Vo)[Vo](s);
      }
    }), this.type = "uploader", this.id = this.opts.id || "Tus", (t == null ? void 0 : t.allowedMetaFields) === void 0 && "metaFields" in this.opts)
      throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.");
    if ("autoRetry" in t)
      throw new Error("The `autoRetry` option was deprecated and has been removed.");
    this.requests = (i = this.opts.rateLimitedQueue) != null ? i : new im(this.opts.limit), At(this, zr)[zr] = (o = this.opts.retryDelays) == null ? void 0 : o.values(), this.uploaders = /* @__PURE__ */ Object.create(null), this.uploaderEvents = /* @__PURE__ */ Object.create(null);
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
    }), this.uppy.addUploader(At(this, Tr)[Tr]);
  }
  uninstall() {
    this.uppy.setState({
      capabilities: {
        ...this.uppy.getState().capabilities,
        resumableUploads: !1
      }
    }), this.uppy.removeUploader(At(this, Tr)[Tr]);
  }
}
function bm(r) {
  return this.resetUploaderReferences(r.id), new Promise((e, t) => {
    let i, o, n;
    const s = {
      ...this.opts,
      ...r.tus || {}
    };
    typeof s.headers == "function" && (s.headers = s.headers(r));
    const {
      onShouldRetry: a,
      onBeforeRequest: l,
      ...u
    } = s, p = {
      ...Eu,
      ...u
    };
    p.fingerprint = fm(r), p.onBeforeRequest = async (_) => {
      const T = _.getUnderlyingObject();
      T.withCredentials = !!s.withCredentials;
      let m;
      if (typeof l == "function" && (m = l(_, r)), Go(i, "shouldBeRequeued")) {
        if (!i.shouldBeRequeued) return Promise.reject();
        let w;
        const S = new Promise((P) => {
          w = P;
        });
        i = this.requests.run(() => (r.isPaused && i.abort(), w(), () => {
        })), await Promise.all([S, m]);
        return;
      }
      return m;
    }, p.onError = (_) => {
      var T;
      this.uppy.log(_);
      const m = _.originalRequest != null ? _.originalRequest.getUnderlyingObject() : null;
      em(m) && (_ = new Qy(_, m)), this.resetUploaderReferences(r.id), (T = i) == null || T.abort(), typeof s.onError == "function" && s.onError(_), t(_);
    }, p.onProgress = (_, T) => {
      var m;
      this.onReceiveUploadUrl(r, n.url), typeof s.onProgress == "function" && s.onProgress(_, T);
      const w = this.uppy.getFile(r.id);
      this.uppy.emit("upload-progress", w, {
        uploadStarted: (m = w.progress.uploadStarted) != null ? m : 0,
        bytesUploaded: _,
        bytesTotal: T
      });
    }, p.onSuccess = (_) => {
      var T;
      const m = {
        uploadURL: (T = n.url) != null ? T : void 0,
        status: 200,
        body: {
          // We have to put `as XMLHttpRequest` because tus-js-client
          // returns `any`, as the type differs in Node.js and the browser.
          // In the browser it's always `XMLHttpRequest`.
          xhr: _.lastResponse.getUnderlyingObject()
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
      typeof s.onSuccess == "function" && s.onSuccess(_), e(n);
    };
    const d = (_) => {
      var T;
      const m = _ == null || (T = _.originalResponse) == null ? void 0 : T.getStatus();
      if (m === 429) {
        if (!this.requests.isPaused) {
          var w;
          const S = (w = At(this, zr)[zr]) == null ? void 0 : w.next();
          if (S == null || S.done)
            return !1;
          this.requests.rateLimit(S.value);
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
    a != null ? p.onShouldRetry = (_, T) => a(_, T, s, d) : p.onShouldRetry = d;
    const h = (_, T, m) => {
      Go(_, T) && !Go(_, m) && (_[m] = _[T]);
    }, x = {};
    dm(s.allowedMetaFields, r.meta).forEach((_) => {
      x[_] = String(r.meta[_]);
    }), h(x, "type", "filetype"), h(x, "name", "filename"), p.metadata = x, n = new Yy(r.data, p), this.uploaders[r.id] = n;
    const O = new Jy(this.uppy);
    this.uploaderEvents[r.id] = O, o = () => (r.isPaused || n.start(), () => {
    }), n.findPreviousUploads().then((_) => {
      const T = _[0];
      T && (this.uppy.log(`[Tus] Resuming upload of ${r.id} started at ${T.creationTime}`), n.resumeFromPreviousUpload(T)), i = this.requests.run(o);
    }), O.onFileRemove(r.id, (_) => {
      i.abort(), this.resetUploaderReferences(r.id, {
        abort: !!n.url
      }), e(`upload ${_} was removed`);
    }), O.onPause(r.id, (_) => {
      i.abort(), _ ? n.abort() : i = this.requests.run(o);
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
function vm(r) {
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
async function wm(r) {
  const e = um(r), t = pm(e);
  this.uppy.emit("upload-start", t), await Promise.allSettled(e.map((i) => {
    if (i.isRemote) {
      const o = () => this.requests, n = new AbortController(), s = (l) => {
        l.id === i.id && n.abort();
      };
      this.uppy.on("file-removed", s);
      const a = this.uppy.getRequestClientForFile(i).uploadRemoteFile(i, At(this, Sn)[Sn](i), {
        signal: n.signal,
        getQueue: o
      });
      return this.requests.wrapSyncFunction(() => {
        this.uppy.off("file-removed", s);
      }, {
        priority: -1
      })(), a;
    }
    return At(this, xn)[xn](i);
  }));
}
Uu.VERSION = mm.version;
const _m = ".uppy-Root{box-sizing:border-box;color:#333;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Segoe UI Symbol,Segoe UI Emoji,Apple Color Emoji,Roboto,Helvetica,Arial,sans-serif;line-height:1;position:relative;text-align:left;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.uppy-Root[dir=rtl],[dir=rtl] .uppy-Root{text-align:right}.uppy-Root *,.uppy-Root :after,.uppy-Root :before{box-sizing:inherit}.uppy-Root [hidden]{display:none}.uppy-u-reset{all:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Segoe UI Symbol,Segoe UI Emoji,Apple Color Emoji,Roboto,Helvetica,Arial,sans-serif;line-height:1}[dir=rtl] .uppy-u-reset{text-align:right}.uppy-c-textInput{background-color:#fff;border:1px solid #ddd;border-radius:4px;font-family:inherit;font-size:14px;line-height:1.5;padding:6px 8px}.uppy-size--md .uppy-c-textInput{padding:8px 10px}.uppy-c-textInput:focus{border-color:#1269cf99;box-shadow:0 0 0 3px #1269cf26;outline:none}[data-uppy-theme=dark] .uppy-c-textInput{background-color:#333;border-color:#333;color:#eaeaea}[data-uppy-theme=dark] .uppy-c-textInput:focus{border-color:#525252;box-shadow:none}.uppy-c-icon{display:inline-block;max-height:100%;max-width:100%;overflow:hidden;fill:currentColor}.uppy-c-btn{align-items:center;color:inherit;display:inline-flex;font-family:inherit;font-size:inherit;font-weight:500;justify-content:center;line-height:1;transition-duration:.3s;transition-property:background-color,color;-webkit-user-select:none;user-select:none;white-space:nowrap}.uppy-c-btn,[dir=rtl] .uppy-c-btn{text-align:center}.uppy-c-btn:not(:disabled):not(.disabled){cursor:pointer}.uppy-c-btn::-moz-focus-inner{border:0}.uppy-c-btn-primary{background-color:#1269cf;border-radius:4px;color:#fff;font-size:14px;padding:10px 18px}.uppy-c-btn-primary:not(:disabled):hover{background-color:#0e51a0}.uppy-c-btn-primary:focus{box-shadow:0 0 0 3px #1269cf66;outline:none}.uppy-size--md .uppy-c-btn-primary{padding:13px 22px}[data-uppy-theme=dark] .uppy-c-btn-primary{color:#eaeaea}[data-uppy-theme=dark] .uppy-c-btn-primary:focus{outline:none}[data-uppy-theme=dark] .uppy-c-btn-primary::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-c-btn-primary:focus{box-shadow:0 0 0 2px #aae1ffd9}.uppy-c-btn-primary.uppy-c-btn--disabled{background-color:#8eb2db}.uppy-c-btn-link{background-color:initial;border-radius:4px;color:#525252;font-size:14px;line-height:1;padding:10px 15px}.uppy-c-btn-link:hover{color:#333}.uppy-c-btn-link:focus{box-shadow:0 0 0 3px #1269cf40;outline:none}.uppy-size--md .uppy-c-btn-link{padding:13px 18px}[data-uppy-theme=dark] .uppy-c-btn-link{color:#eaeaea}[data-uppy-theme=dark] .uppy-c-btn-link:focus{outline:none}[data-uppy-theme=dark] .uppy-c-btn-link::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-c-btn-link:focus{box-shadow:0 0 0 2px #aae1ffd9}[data-uppy-theme=dark] .uppy-c-btn-link:hover{color:#939393}", xm = `@charset "UTF-8";.uppy-Informer{bottom:60px;left:0;position:absolute;right:0;text-align:center;z-index:1005}.uppy-Informer span>div{margin-bottom:6px}.uppy-Informer-animated{opacity:0;transform:translateY(350%);transition:all .3s ease-in;z-index:-1000}.uppy-Informer p{background-color:#757575;border-radius:18px;color:#fff;display:inline-block;font-size:12px;font-weight:400;line-height:1.4;margin:0;max-width:90%;padding:6px 15px}.uppy-size--md .uppy-Informer p{font-size:14px;line-height:1.3;max-width:500px;padding:10px 20px}[data-uppy-theme=dark] .uppy-Informer p{background-color:#333}[dir=ltr] .uppy-Informer p span{left:3px}[dir=rtl] .uppy-Informer p span{right:3px}[dir=ltr] .uppy-Informer p span{margin-left:-1px}[dir=rtl] .uppy-Informer p span{margin-right:-1px}.uppy-Informer p span{background-color:#fff;border-radius:50%;color:#525252;display:inline-block;font-size:10px;height:13px;line-height:12px;position:relative;top:-1px;vertical-align:middle;width:13px}.uppy-Informer p span:hover{cursor:help}.uppy-Informer p span:after{line-height:1.3;word-wrap:break-word}.uppy-Root [aria-label][role~=tooltip]{position:relative}.uppy-Root [aria-label][role~=tooltip]:after,.uppy-Root [aria-label][role~=tooltip]:before{-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box;opacity:0;pointer-events:none;position:absolute;transform:translateZ(0);transform-origin:top;transition:all var(--microtip-transition-duration,.18s) var(--microtip-transition-easing,ease-in-out) var(--microtip-transition-delay,0s);will-change:transform;z-index:10}.uppy-Root [aria-label][role~=tooltip]:before{background-size:100% auto!important;content:""}.uppy-Root [aria-label][role~=tooltip]:after{background:#111111e6;border-radius:4px;box-sizing:initial;color:#fff;content:attr(aria-label);font-size:var(--microtip-font-size,13px);font-weight:var(--microtip-font-weight,normal);padding:.5em 1em;text-transform:var(--microtip-text-transform,none);white-space:nowrap}.uppy-Root [aria-label][role~=tooltip]:focus:after,.uppy-Root [aria-label][role~=tooltip]:focus:before,.uppy-Root [aria-label][role~=tooltip]:hover:after,.uppy-Root [aria-label][role~=tooltip]:hover:before{opacity:1;pointer-events:auto}.uppy-Root [role~=tooltip][data-microtip-position|=top]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='12'%3E%3Cpath fill='rgba(17, 17, 17, 0.9)' d='M2.658 0h32.004c-6 0-11.627 12.002-16.002 12.002S8.594 0 2.658 0'/%3E%3C/svg%3E") no-repeat;bottom:100%;height:6px;left:50%;margin-bottom:5px;transform:translate3d(-50%,0,0);width:18px}.uppy-Root [role~=tooltip][data-microtip-position|=top]:after{bottom:100%;left:50%;margin-bottom:11px;transform:translate3d(-50%,0,0)}.uppy-Root [role~=tooltip][data-microtip-position=top]:hover:after,.uppy-Root [role~=tooltip][data-microtip-position|=top]:hover:before{transform:translate3d(-50%,-5px,0)}.uppy-Root [role~=tooltip][data-microtip-position=top-left]:after{bottom:100%;transform:translate3d(calc(-100% + 16px),0,0)}.uppy-Root [role~=tooltip][data-microtip-position=top-left]:hover:after{transform:translate3d(calc(-100% + 16px),-5px,0)}.uppy-Root [role~=tooltip][data-microtip-position=top-right]:after{bottom:100%;transform:translate3d(-16px,0,0)}.uppy-Root [role~=tooltip][data-microtip-position=top-right]:hover:after{transform:translate3d(-16px,-5px,0)}.uppy-Root [role~=tooltip][data-microtip-position|=bottom]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='12'%3E%3Cpath fill='rgba(17, 17, 17, 0.9)' d='M33.342 12H1.338c6 0 11.627-12.002 16.002-12.002S27.406 12 33.342 12'/%3E%3C/svg%3E") no-repeat;bottom:auto;height:6px;left:50%;margin-bottom:0;margin-top:5px;top:100%;transform:translate3d(-50%,-10px,0);width:18px}.uppy-Root [role~=tooltip][data-microtip-position|=bottom]:after{left:50%;margin-top:11px;top:100%;transform:translate3d(-50%,-10px,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom]:hover:after,.uppy-Root [role~=tooltip][data-microtip-position|=bottom]:hover:before{transform:translate3d(-50%,0,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom-left]:after{top:100%;transform:translate3d(calc(-100% + 16px),-10px,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom-left]:hover:after{transform:translate3d(calc(-100% + 16px),0,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom-right]:after{top:100%;transform:translate3d(-16px,-10px,0)}.uppy-Root [role~=tooltip][data-microtip-position=bottom-right]:hover:after{transform:translate3d(-16px,0,0)}.uppy-Root [role~=tooltip][data-microtip-position=left]:after,.uppy-Root [role~=tooltip][data-microtip-position=left]:before{bottom:auto;left:auto;right:100%;top:50%;transform:translate3d(10px,-50%,0)}.uppy-Root [role~=tooltip][data-microtip-position=left]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='36'%3E%3Cpath fill='rgba(17, 17, 17, 0.9)' d='M0 33.342V1.338c0 6 12.002 11.627 12.002 16.002S0 27.406 0 33.342'/%3E%3C/svg%3E") no-repeat;height:18px;margin-bottom:0;margin-right:5px;width:6px}.uppy-Root [role~=tooltip][data-microtip-position=left]:after{margin-right:11px}.uppy-Root [role~=tooltip][data-microtip-position=left]:hover:after,.uppy-Root [role~=tooltip][data-microtip-position=left]:hover:before{transform:translate3d(0,-50%,0)}.uppy-Root [role~=tooltip][data-microtip-position=right]:after,.uppy-Root [role~=tooltip][data-microtip-position=right]:before{bottom:auto;left:100%;top:50%;transform:translate3d(-10px,-50%,0)}.uppy-Root [role~=tooltip][data-microtip-position=right]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='36'%3E%3Cpath fill='rgba(17, 17, 17, 0.9)' d='M12 2.658v32.004c0-6-12.002-11.627-12.002-16.002S12 8.594 12 2.658'/%3E%3C/svg%3E") no-repeat;height:18px;margin-bottom:0;margin-left:5px;width:6px}.uppy-Root [role~=tooltip][data-microtip-position=right]:after{margin-left:11px}.uppy-Root [role~=tooltip][data-microtip-position=right]:hover:after,.uppy-Root [role~=tooltip][data-microtip-position=right]:hover:before{transform:translate3d(0,-50%,0)}.uppy-Root [role~=tooltip][data-microtip-size=small]:after{white-space:normal;width:80px}.uppy-Root [role~=tooltip][data-microtip-size=medium]:after{white-space:normal;width:150px}.uppy-Root [role~=tooltip][data-microtip-size=large]:after{white-space:normal;width:260px}.uppy-StatusBar{background-color:#fff;color:#fff;display:flex;font-size:12px;font-weight:400;height:46px;line-height:40px;position:relative;transition:height .2s;z-index:1001}[data-uppy-theme=dark] .uppy-StatusBar{background-color:#1f1f1f}.uppy-StatusBar:before{background-color:#eaeaea;bottom:0;content:"";height:2px;left:0;position:absolute;right:0;top:0;width:100%}[data-uppy-theme=dark] .uppy-StatusBar:before{background-color:#757575}.uppy-StatusBar[aria-hidden=true]{height:0;overflow-y:hidden}.uppy-StatusBar.is-complete .uppy-StatusBar-progress{background-color:#1bb240}.uppy-StatusBar.is-error .uppy-StatusBar-progress{background-color:#e32437}.uppy-StatusBar.is-complete .uppy-StatusBar-statusIndicator{color:#1bb240}.uppy-StatusBar.is-error .uppy-StatusBar-statusIndicator{color:#e32437}.uppy-StatusBar:not([aria-hidden=true]).is-waiting{background-color:#fff;border-top:1px solid #eaeaea;height:65px}[data-uppy-theme=dark] .uppy-StatusBar:not([aria-hidden=true]).is-waiting{background-color:#1f1f1f;border-top:1px solid #333}.uppy-StatusBar-progress{background-color:#1269cf;height:2px;position:absolute;transition:background-color,width .3s ease-out;z-index:1001}.uppy-StatusBar-progress.is-indeterminate{animation:uppy-StatusBar-ProgressStripes 1s linear infinite;background-image:linear-gradient(45deg,#0000004d 25%,#0000 0,#0000 50%,#0000004d 0,#0000004d 75%,#0000 0,#0000);background-size:64px 64px}@keyframes uppy-StatusBar-ProgressStripes{0%{background-position:0 0}to{background-position:64px 0}}.uppy-StatusBar.is-postprocessing .uppy-StatusBar-progress,.uppy-StatusBar.is-preprocessing .uppy-StatusBar-progress{background-color:#f6a623}.uppy-StatusBar.is-waiting .uppy-StatusBar-progress{display:none}[dir=ltr] .uppy-StatusBar-content{padding-left:10px}[dir=rtl] .uppy-StatusBar-content{padding-right:10px}.uppy-StatusBar-content{align-items:center;color:#333;display:flex;height:100%;position:relative;text-overflow:ellipsis;white-space:nowrap;z-index:1002}[dir=ltr] .uppy-size--md .uppy-StatusBar-content{padding-left:15px}[dir=rtl] .uppy-size--md .uppy-StatusBar-content{padding-right:15px}[data-uppy-theme=dark] .uppy-StatusBar-content{color:#eaeaea}[dir=ltr] .uppy-StatusBar-status{padding-right:.3em}[dir=rtl] .uppy-StatusBar-status{padding-left:.3em}.uppy-StatusBar-status{display:flex;flex-direction:column;font-weight:400;justify-content:center;line-height:1.4}.uppy-StatusBar-statusPrimary{display:flex;font-weight:500;line-height:1}.uppy-StatusBar-statusPrimary button.uppy-StatusBar-details{margin-left:5px}[data-uppy-theme=dark] .uppy-StatusBar-statusPrimary{color:#eaeaea}.uppy-StatusBar-statusSecondary{color:#757575;display:inline-block;font-size:11px;line-height:1.2;margin-top:1px;white-space:nowrap}[data-uppy-theme=dark] .uppy-StatusBar-statusSecondary{color:#bbb}[dir=ltr] .uppy-StatusBar-statusSecondaryHint{margin-right:5px}[dir=rtl] .uppy-StatusBar-statusSecondaryHint{margin-left:5px}.uppy-StatusBar-statusSecondaryHint{display:inline-block;line-height:1;vertical-align:middle}[dir=ltr] .uppy-size--md .uppy-StatusBar-statusSecondaryHint{margin-right:8px}[dir=rtl] .uppy-size--md .uppy-StatusBar-statusSecondaryHint{margin-left:8px}[dir=ltr] .uppy-StatusBar-statusIndicator{margin-right:7px}[dir=rtl] .uppy-StatusBar-statusIndicator{margin-left:7px}.uppy-StatusBar-statusIndicator{color:#525252;position:relative;top:1px}.uppy-StatusBar-statusIndicator svg{vertical-align:text-bottom}[dir=ltr] .uppy-StatusBar-actions{right:10px}[dir=rtl] .uppy-StatusBar-actions{left:10px}.uppy-StatusBar-actions{align-items:center;bottom:0;display:flex;position:absolute;top:0;z-index:1004}.uppy-StatusBar.is-waiting .uppy-StatusBar-actions{background-color:#fafafa;height:100%;padding:0 15px;position:static;width:100%}[data-uppy-theme=dark] .uppy-StatusBar.is-waiting .uppy-StatusBar-actions{background-color:#1f1f1f}.uppy-StatusBar:not([aria-hidden=true]).is-waiting.has-ghosts{flex-direction:column;height:90px}.uppy-size--md .uppy-StatusBar:not([aria-hidden=true]).is-waiting.has-ghosts{flex-direction:row;height:65px}.uppy-StatusBar:not([aria-hidden=true]).is-waiting.has-ghosts .uppy-StatusBar-actions{flex-direction:column;justify-content:center}.uppy-size--md .uppy-StatusBar:not([aria-hidden=true]).is-waiting.has-ghosts .uppy-StatusBar-actions{flex-direction:row;justify-content:normal}.uppy-StatusBar-actionCircleBtn{cursor:pointer;line-height:1;margin:3px;opacity:.9}.uppy-StatusBar-actionCircleBtn:focus{outline:none}.uppy-StatusBar-actionCircleBtn::-moz-focus-inner{border:0}.uppy-StatusBar-actionCircleBtn:focus{box-shadow:0 0 0 3px #1269cf80}[data-uppy-theme=dark] .uppy-StatusBar-actionCircleBtn:focus{outline:none}[data-uppy-theme=dark] .uppy-StatusBar-actionCircleBtn::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-StatusBar-actionCircleBtn:focus{box-shadow:0 0 0 2px #aae1ffd9}.uppy-StatusBar-actionCircleBtn:hover{opacity:1}.uppy-StatusBar-actionCircleBtn:focus{border-radius:50%}.uppy-StatusBar-actionCircleBtn svg{vertical-align:bottom}.uppy-StatusBar-actionBtn{color:#1269cf;display:inline-block;font-size:10px;line-height:inherit;vertical-align:middle}.uppy-size--md .uppy-StatusBar-actionBtn{font-size:11px}.uppy-StatusBar-actionBtn--disabled{opacity:.4}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--disabled{opacity:.7}[dir=ltr] .uppy-StatusBar-actionBtn--retry{margin-right:6px}[dir=rtl] .uppy-StatusBar-actionBtn--retry{margin-left:6px}.uppy-StatusBar-actionBtn--retry{background-color:#ff4b23;border-radius:8px;color:#fff;height:16px;line-height:1;padding:1px 6px 3px 18px;position:relative}.uppy-StatusBar-actionBtn--retry:focus{outline:none}.uppy-StatusBar-actionBtn--retry::-moz-focus-inner{border:0}.uppy-StatusBar-actionBtn--retry:focus{box-shadow:0 0 0 3px #1269cf80}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--retry:focus{outline:none}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--retry::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--retry:focus{box-shadow:0 0 0 2px #aae1ffd9}.uppy-StatusBar-actionBtn--retry:hover{background-color:#f92d00}[dir=ltr] .uppy-StatusBar-actionBtn--retry svg{left:6px}[dir=rtl] .uppy-StatusBar-actionBtn--retry svg{right:6px}.uppy-StatusBar-actionBtn--retry svg{position:absolute;top:3px}.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload{background-color:#1bb240;color:#fff;font-size:14px;line-height:1;padding:15px 10px;width:100%}.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload:hover{background-color:#189c38}[data-uppy-theme=dark] .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload{background-color:#1c8b37}[data-uppy-theme=dark] .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload:hover{background-color:#18762f}.uppy-size--md .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload{padding:13px 22px;width:auto}.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload.uppy-StatusBar-actionBtn--disabled:hover{background-color:#1bb240;cursor:not-allowed}[data-uppy-theme=dark] .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload.uppy-StatusBar-actionBtn--disabled:hover{background-color:#1c8b37}.uppy-StatusBar:not(.is-waiting) .uppy-StatusBar-actionBtn--upload{background-color:initial;color:#1269cf}[dir=ltr] .uppy-StatusBar-actionBtn--uploadNewlyAdded{padding-right:3px}[dir=ltr] .uppy-StatusBar-actionBtn--uploadNewlyAdded,[dir=rtl] .uppy-StatusBar-actionBtn--uploadNewlyAdded{padding-left:3px}[dir=rtl] .uppy-StatusBar-actionBtn--uploadNewlyAdded{padding-right:3px}.uppy-StatusBar-actionBtn--uploadNewlyAdded{border-radius:3px;padding-bottom:1px}.uppy-StatusBar-actionBtn--uploadNewlyAdded:focus{outline:none}.uppy-StatusBar-actionBtn--uploadNewlyAdded::-moz-focus-inner{border:0}.uppy-StatusBar-actionBtn--uploadNewlyAdded:focus{box-shadow:0 0 0 3px #1269cf80}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--uploadNewlyAdded:focus{outline:none}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--uploadNewlyAdded::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--uploadNewlyAdded:focus{box-shadow:0 0 0 2px #aae1ffd9}.uppy-StatusBar.is-postprocessing .uppy-StatusBar-actionBtn--uploadNewlyAdded,.uppy-StatusBar.is-preprocessing .uppy-StatusBar-actionBtn--uploadNewlyAdded{display:none}.uppy-StatusBar-actionBtn--done{border-radius:3px;line-height:1;padding:7px 8px}.uppy-StatusBar-actionBtn--done:focus{outline:none}.uppy-StatusBar-actionBtn--done::-moz-focus-inner{border:0}.uppy-StatusBar-actionBtn--done:hover{color:#0e51a0}.uppy-StatusBar-actionBtn--done:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--done:focus{background-color:#333}[data-uppy-theme=dark] .uppy-StatusBar-actionBtn--done{color:#02baf2}.uppy-size--md .uppy-StatusBar-actionBtn--done{font-size:14px}.uppy-StatusBar-serviceMsg{color:#000;font-size:11px;line-height:1.1;padding-left:10px}.uppy-size--md .uppy-StatusBar-serviceMsg{font-size:14px;padding-left:15px}[data-uppy-theme=dark] .uppy-StatusBar-serviceMsg{color:#eaeaea}.uppy-StatusBar-serviceMsg-ghostsIcon{left:6px;opacity:.5;position:relative;top:2px;vertical-align:text-bottom;width:10px}.uppy-size--md .uppy-StatusBar-serviceMsg-ghostsIcon{left:10px;top:1px;width:15px}[dir=ltr] .uppy-StatusBar-details{left:2px}[dir=rtl] .uppy-StatusBar-details{right:2px}.uppy-StatusBar-details{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#939393;border-radius:50%;color:#fff;cursor:help;display:inline-block;font-size:10px;font-weight:600;height:13px;line-height:12px;position:relative;text-align:center;top:0;vertical-align:middle;width:13px}.uppy-StatusBar-details:after{line-height:1.3;word-wrap:break-word}[dir=ltr] .uppy-StatusBar-spinner{margin-right:10px}[dir=rtl] .uppy-StatusBar-spinner{margin-left:10px}.uppy-StatusBar-spinner{animation-duration:1s;animation-iteration-count:infinite;animation-name:uppy-StatusBar-spinnerAnimation;animation-timing-function:linear;fill:#1269cf}.uppy-StatusBar.is-postprocessing .uppy-StatusBar-spinner,.uppy-StatusBar.is-preprocessing .uppy-StatusBar-spinner{fill:#f6a623}@keyframes uppy-StatusBar-spinnerAnimation{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.uppy-ProviderBrowser-viewType--grid ul.uppy-ProviderBrowser-list,.uppy-ProviderBrowser-viewType--unsplash ul.uppy-ProviderBrowser-list{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;padding:6px}.uppy-ProviderBrowser-viewType--grid ul.uppy-ProviderBrowser-list:after,.uppy-ProviderBrowser-viewType--unsplash ul.uppy-ProviderBrowser-list:after{content:"";flex:auto}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem{margin:0;position:relative;width:50%}.uppy-size--md .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem,.uppy-size--md .uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem{width:33.3333%}.uppy-size--lg .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem,.uppy-size--lg .uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem{width:25%}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem:before,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem:before{content:"";display:block;padding-top:100%}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--selected img,.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--selected svg,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--selected img,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--selected svg{opacity:.85}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--disabled,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--disabled{opacity:.5}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner{background-color:#93939333}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner,[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--noPreview .uppy-ProviderBrowserItem-inner{background-color:#eaeaea33}.uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview svg,.uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--noPreview svg{height:30%;width:30%;fill:#000000b3}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--grid li.uppy-ProviderBrowserItem--noPreview svg,[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--unsplash li.uppy-ProviderBrowserItem--noPreview svg{fill:#fffc}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-inner{border-radius:4px;bottom:7px;height:calc(100% - 14px);left:7px;overflow:hidden;position:absolute;right:7px;text-align:center;top:7px;width:calc(100% - 14px)}@media (hover:none){.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-inner .uppy-ProviderBrowserItem-author{display:block}}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner,[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-inner{box-shadow:0 0 0 3px #aae1ffb3}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-inner img,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-inner img{border-radius:4px;height:100%;object-fit:cover;width:100%}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-author{background:#0000004d;bottom:0;color:#fff;display:none;font-size:12px;font-weight:500;left:0;margin:0;padding:5px;position:absolute;text-decoration:none;width:100%}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-author:hover,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-author:hover{background:#0006;text-decoration:underline}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox{background-color:#1269cf;border-radius:50%;height:26px;opacity:0;position:absolute;right:16px;top:16px;width:26px;z-index:1002}[dir=ltr] .uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox:after,[dir=ltr] .uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox:after{left:7px}[dir=rtl] .uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox:after,[dir=rtl] .uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox:after{right:7px}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox:after,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox:after{height:7px;top:8px;width:12px}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox{opacity:1}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:focus+label .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:hover+label .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:focus+label .uppy-ProviderBrowserItem-author,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:hover+label .uppy-ProviderBrowserItem-author{display:block}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:focus+label,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:focus+label{box-shadow:0 0 0 3px #1269cf80}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:focus+label:focus,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:focus+label:focus{outline:none}.uppy-ProviderBrowser-viewType--grid .uppy-ProviderBrowserItem-checkbox--grid:focus+label::-moz-focus-inner,.uppy-ProviderBrowser-viewType--unsplash .uppy-ProviderBrowserItem-checkbox--grid:focus+label::-moz-focus-inner{border:0}.uppy-ProviderBrowser-viewType--list{background-color:#fff}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--list{background-color:#1f1f1f}.uppy-ProviderBrowser-viewType--list li.uppy-ProviderBrowserItem{align-items:center;display:flex;margin:0;padding:7px 15px}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--list li.uppy-ProviderBrowserItem{color:#eaeaea}.uppy-ProviderBrowser-viewType--list li.uppy-ProviderBrowserItem--disabled{opacity:.6}[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox{margin-right:15px}[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox{margin-left:15px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox{background-color:#fff;border:1px solid #cfcfcf;border-radius:3px;height:17px;width:17px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:focus{border:1px solid #1269cf;box-shadow:0 0 0 3px #1269cf40;outline:none}[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:after{left:3px}[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:after{right:3px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:after{height:5px;opacity:0;top:4px;width:9px}[data-uppy-theme=dark] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-checkbox:focus{border-color:#02baf2b3;box-shadow:0 0 0 3px #02baf233}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox,.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--is-partial .uppy-ProviderBrowserItem-checkbox{background-color:#1269cf;border-color:#1269cf}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox:after,.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--is-partial .uppy-ProviderBrowserItem-checkbox:after{opacity:1}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner{align-items:center;color:inherit;display:flex;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Segoe UI Symbol,Segoe UI Emoji,Apple Color Emoji,Roboto,Helvetica,Arial,sans-serif;overflow:hidden;padding:2px;text-overflow:ellipsis;white-space:nowrap}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner:focus{outline:none;text-decoration:underline}[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner img,[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner svg{margin-right:8px}[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner img,[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner svg{margin-left:8px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-inner span{line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem--disabled .uppy-ProviderBrowserItem-inner{cursor:default}[dir=ltr] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-iconWrap{margin-right:7px}[dir=rtl] .uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-iconWrap{margin-left:7px}.uppy-ProviderBrowser-viewType--list .uppy-ProviderBrowserItem-iconWrap{width:20px}.uppy-ProviderBrowserItem-checkbox{cursor:pointer;flex-shrink:0;position:relative}.uppy-ProviderBrowserItem-checkbox:disabled,.uppy-ProviderBrowserItem-checkbox:disabled:after{cursor:default}[data-uppy-theme=dark] .uppy-ProviderBrowserItem-checkbox{background-color:#1f1f1f;border-color:#939393}[data-uppy-theme=dark] .uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox{background-color:#333}.uppy-ProviderBrowserItem--is-checked .uppy-ProviderBrowserItem-checkbox:after{border-bottom:2px solid #eaeaea;border-left:2px solid #eaeaea;content:"";cursor:pointer;position:absolute;transform:rotate(-45deg)}.uppy-ProviderBrowserItem--is-partial .uppy-ProviderBrowserItem-checkbox:after{background-color:#eaeaea!important;content:""!important;height:2px!important;left:20%!important;position:absolute!important;right:20%!important;top:50%!important;transform:translateY(-50%)!important}.uppy-SearchProvider{align-items:center;display:flex;flex:1;flex-direction:column;height:100%;justify-content:center;width:100%}[data-uppy-theme=dark] .uppy-SearchProvider{background-color:#1f1f1f}.uppy-SearchProvider-input{margin-bottom:15px;max-width:650px;width:90%}.uppy-size--md .uppy-SearchProvider-input{margin-bottom:20px}.uppy-SearchProvider-input::-webkit-search-cancel-button{display:none}.uppy-SearchProvider-searchButton{padding:13px 25px}.uppy-size--md .uppy-SearchProvider-searchButton{padding:13px 30px}.uppy-DashboardContent-panelBody{align-items:center;display:flex;flex:1;justify-content:center}[data-uppy-theme=dark] .uppy-DashboardContent-panelBody{background-color:#1f1f1f}.uppy-Provider-auth,.uppy-Provider-empty,.uppy-Provider-error,.uppy-Provider-loading{align-items:center;color:#939393;display:flex;flex:1;flex-flow:column wrap;justify-content:center}.uppy-Provider-empty{color:#939393}.uppy-Provider-authIcon svg{height:75px;width:100px}.uppy-Provider-authTitle{color:#757575;font-size:17px;font-weight:400;line-height:1.4;margin-bottom:30px;max-width:500px;padding:0 15px;text-align:center}.uppy-size--md .uppy-Provider-authTitle{font-size:20px}[data-uppy-theme=dark] .uppy-Provider-authTitle{color:#cfcfcf}.uppy-Provider-btn-google{align-items:center;background:#4285f4;display:flex;padding:8px 12px!important}.uppy-Provider-btn-google:hover{background-color:#1266f1}.uppy-Provider-btn-google:focus{box-shadow:0 0 0 3px #4285f466;outline:none}.uppy-Provider-btn-google svg{margin-right:8px}[dir=ltr] .uppy-Provider-breadcrumbs{text-align:left}[dir=rtl] .uppy-Provider-breadcrumbs{text-align:right}.uppy-Provider-breadcrumbs{color:#525252;flex:1;font-size:12px;margin-bottom:10px}.uppy-size--md .uppy-Provider-breadcrumbs{margin-bottom:0}[data-uppy-theme=dark] .uppy-Provider-breadcrumbs{color:#eaeaea}[dir=ltr] .uppy-Provider-breadcrumbsIcon{margin-right:4px}[dir=rtl] .uppy-Provider-breadcrumbsIcon{margin-left:4px}.uppy-Provider-breadcrumbsIcon{color:#525252;display:inline-block;line-height:1;vertical-align:middle}.uppy-Provider-breadcrumbsIcon svg{height:13px;width:13px;fill:#525252}.uppy-Provider-breadcrumbs button{border-radius:3px;display:inline-block;line-height:inherit;padding:4px}.uppy-Provider-breadcrumbs button:focus{outline:none}.uppy-Provider-breadcrumbs button::-moz-focus-inner{border:0}.uppy-Provider-breadcrumbs button:hover{color:#0e51a0}.uppy-Provider-breadcrumbs button:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-Provider-breadcrumbs button:focus{background-color:#333}.uppy-Provider-breadcrumbs button:not(:last-of-type){text-decoration:underline}.uppy-Provider-breadcrumbs button:last-of-type{color:#333;cursor:normal;font-weight:500;pointer-events:none}.uppy-Provider-breadcrumbs button:hover{cursor:pointer}[data-uppy-theme=dark] .uppy-Provider-breadcrumbs button{color:#eaeaea}.uppy-ProviderBrowser{display:flex;flex:1;flex-direction:column;font-size:14px;font-weight:400;height:100%}.uppy-ProviderBrowser-user{color:#333;font-weight:500;margin:0 8px 0 0}[data-uppy-theme=dark] .uppy-ProviderBrowser-user{color:#eaeaea}[dir=ltr] .uppy-ProviderBrowser-user:after{left:4px}[dir=rtl] .uppy-ProviderBrowser-user:after{right:4px}.uppy-ProviderBrowser-user:after{color:#939393;content:"·";font-weight:400;position:relative}.uppy-ProviderBrowser-header{border-bottom:1px solid #eaeaea;position:relative;z-index:1001}[data-uppy-theme=dark] .uppy-ProviderBrowser-header{border-bottom:1px solid #333}.uppy-ProviderBrowser-headerBar{background-color:#fafafa;color:#757575;font-size:12px;line-height:1.4;padding:7px 15px;z-index:1001}.uppy-size--md .uppy-ProviderBrowser-headerBar{align-items:center;display:flex}[data-uppy-theme=dark] .uppy-ProviderBrowser-headerBar{background-color:#1f1f1f}.uppy-ProviderBrowser-headerBar--simple{display:block;justify-content:center;text-align:center}.uppy-ProviderBrowser-headerBar--simple .uppy-Provider-breadcrumbsWrap{display:inline-block;flex:none;vertical-align:middle}.uppy-ProviderBrowser-searchFilter{align-items:center;display:flex;height:30px;margin-bottom:15px;margin-top:15px;padding-left:8px;padding-right:8px;position:relative;width:100%}[dir=ltr] .uppy-ProviderBrowser-searchFilterInput{padding-left:30px}[dir=ltr] .uppy-ProviderBrowser-searchFilterInput,[dir=rtl] .uppy-ProviderBrowser-searchFilterInput{padding-right:30px}[dir=rtl] .uppy-ProviderBrowser-searchFilterInput{padding-left:30px}.uppy-ProviderBrowser-searchFilterInput{background-color:#eaeaea;border:0;border-radius:4px;color:#333;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Segoe UI Symbol,Segoe UI Emoji,Apple Color Emoji,Roboto,Helvetica,Arial,sans-serif;font-size:13px;height:30px;line-height:1.4;outline:0;width:100%;z-index:1001}.uppy-ProviderBrowser-searchFilterInput::-webkit-search-cancel-button{display:none}[data-uppy-theme=dark] .uppy-ProviderBrowser-searchFilterInput{background-color:#1f1f1f;color:#eaeaea}.uppy-ProviderBrowser-searchFilterInput:focus{background-color:#cfcfcf;border:0}[data-uppy-theme=dark] .uppy-ProviderBrowser-searchFilterInput:focus{background-color:#333}[dir=ltr] .uppy-ProviderBrowser-searchFilterIcon{left:16px}[dir=rtl] .uppy-ProviderBrowser-searchFilterIcon{right:16px}.uppy-ProviderBrowser-searchFilterIcon{color:#757575;height:12px;position:absolute;width:12px;z-index:1002}.uppy-ProviderBrowser-searchFilterInput::placeholder{color:#939393;opacity:1}[dir=ltr] .uppy-ProviderBrowser-searchFilterReset{right:16px}[dir=rtl] .uppy-ProviderBrowser-searchFilterReset{left:16px}.uppy-ProviderBrowser-searchFilterReset{border-radius:3px;color:#939393;cursor:pointer;height:22px;padding:6px;position:absolute;width:22px;z-index:1002}.uppy-ProviderBrowser-searchFilterReset:focus{outline:none}.uppy-ProviderBrowser-searchFilterReset::-moz-focus-inner{border:0}.uppy-ProviderBrowser-searchFilterReset:focus{box-shadow:0 0 0 3px #1269cf80}.uppy-ProviderBrowser-searchFilterReset:hover{color:#757575}.uppy-ProviderBrowser-searchFilterReset svg{vertical-align:text-top}.uppy-ProviderBrowser-userLogout{border-radius:3px;color:#1269cf;cursor:pointer;line-height:inherit;padding:4px}.uppy-ProviderBrowser-userLogout:focus{outline:none}.uppy-ProviderBrowser-userLogout::-moz-focus-inner{border:0}.uppy-ProviderBrowser-userLogout:hover{color:#0e51a0}.uppy-ProviderBrowser-userLogout:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-ProviderBrowser-userLogout:focus{background-color:#333}.uppy-ProviderBrowser-userLogout:hover{text-decoration:underline}[data-uppy-theme=dark] .uppy-ProviderBrowser-userLogout{color:#eaeaea}.uppy-ProviderBrowser-body{flex:1;position:relative}.uppy-ProviderBrowser-list{background-color:#fff;border-spacing:0;bottom:0;display:block;flex:1;height:100%;left:0;list-style:none;margin:0;overflow-x:hidden;overflow-y:auto;padding:0;position:absolute;right:0;top:0;width:100%;-webkit-overflow-scrolling:touch}[data-uppy-theme=dark] .uppy-ProviderBrowser-list{background-color:#1f1f1f}.uppy-ProviderBrowser-list:focus{outline:none}.uppy-ProviderBrowserItem-inner{cursor:pointer;font-size:13px;font-weight:500}.uppy-ProviderBrowser-footer{align-items:center;background-color:#fff;border-top:1px solid #eaeaea;display:flex;justify-content:space-between;padding:15px}[dir=ltr] .uppy-ProviderBrowser-footer button{margin-right:8px}[dir=rtl] .uppy-ProviderBrowser-footer button{margin-left:8px}[data-uppy-theme=dark] .uppy-ProviderBrowser-footer{background-color:#1f1f1f;border-top:1px solid #333}.uppy-ProviderBrowser-footer-buttons{flex-shrink:0}.uppy-ProviderBrowser-footer-error{color:#e32437;line-height:18px}@media (max-width:426px){.uppy-ProviderBrowser-footer{align-items:stretch;flex-direction:column-reverse}.uppy-ProviderBrowser-footer-error{padding-bottom:10px}}.picker-dialog-bg{z-index:20000!important}.picker-dialog{z-index:20001!important}.uppy-Dashboard-Item-previewInnerWrap{align-items:center;border-radius:3px;box-shadow:0 0 2px #0006;display:flex;flex-direction:column;height:100%;justify-content:center;overflow:hidden;position:relative;width:100%}.uppy-size--md .uppy-Dashboard-Item-previewInnerWrap{box-shadow:0 1px 2px #00000026}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-previewInnerWrap{box-shadow:none}.uppy-Dashboard-Item-previewInnerWrap:after{background-color:#000000a6;bottom:0;content:"";display:none;left:0;position:absolute;right:0;top:0;z-index:1001}.uppy-Dashboard-Item-previewLink{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1002}.uppy-Dashboard-Item-previewLink:focus{box-shadow:inset 0 0 0 3px #579df0}[data-uppy-theme=dark] .uppy-Dashboard-Item-previewLink:focus{box-shadow:inset 0 0 0 3px #016c8d}.uppy-Dashboard-Item-preview img.uppy-Dashboard-Item-previewImg{border-radius:3px;height:100%;object-fit:cover;transform:translateZ(0);width:100%}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-preview img.uppy-Dashboard-Item-previewImg{height:auto;max-height:100%;max-width:100%;object-fit:contain;padding:10px;width:auto}.uppy-Dashboard-Item-progress{color:#fff;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition:all .35 ease;width:120px;z-index:1002}.uppy-Dashboard-Item-progressIndicator{color:#fff;display:inline-block;height:38px;opacity:.9;width:38px}.uppy-size--md .uppy-Dashboard-Item-progressIndicator{height:55px;width:55px}button.uppy-Dashboard-Item-progressIndicator{cursor:pointer}button.uppy-Dashboard-Item-progressIndicator:focus{outline:none}button.uppy-Dashboard-Item-progressIndicator::-moz-focus-inner{border:0}button.uppy-Dashboard-Item-progressIndicator:focus .uppy-Dashboard-Item-progressIcon--bg,button.uppy-Dashboard-Item-progressIndicator:focus .uppy-Dashboard-Item-progressIcon--retry{fill:#579df0}.uppy-Dashboard-Item-progressIcon--circle{height:100%;width:100%}.uppy-Dashboard-Item-progressIcon--bg{stroke:#fff6}.uppy-Dashboard-Item-progressIcon--progress{transition:stroke-dashoffset .5s ease-out;stroke:#fff}.uppy-Dashboard-Item-progressIcon--play{transition:all .2s;fill:#fff;stroke:#fff}.uppy-Dashboard-Item-progressIcon--cancel{transition:all .2s;fill:#fff}.uppy-Dashboard-Item-progressIcon--pause{transition:all .2s;fill:#fff;stroke:#fff}.uppy-Dashboard-Item-progressIcon--check{transition:all .2s;fill:#fff}.uppy-Dashboard-Item-progressIcon--retry{fill:#fff}[dir=ltr] .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{right:-8px}[dir=rtl] .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{left:-8px}[dir=ltr] .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{left:auto}[dir=rtl] .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{right:auto}.uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progress{top:-9px;transform:none;width:auto}.uppy-Dashboard-Item.is-error .uppy-Dashboard-Item-progressIndicator{height:18px;width:18px}.uppy-size--md .uppy-Dashboard-Item.is-error .uppy-Dashboard-Item-progressIndicator{height:28px;width:28px}.uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progressIndicator{height:18px;opacity:1;width:18px}.uppy-size--md .uppy-Dashboard-Item.is-complete .uppy-Dashboard-Item-progressIndicator{height:22px;width:22px}.uppy-Dashboard-Item.is-processing .uppy-Dashboard-Item-progress{opacity:0}[dir=ltr] .uppy-Dashboard-Item-fileInfo{padding-right:5px}[dir=rtl] .uppy-Dashboard-Item-fileInfo{padding-left:5px}[dir=ltr] .uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfo{padding-right:10px}[dir=rtl] .uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfo{padding-left:10px}[dir=ltr] .uppy-size--md.uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfo{padding-right:15px}[dir=rtl] .uppy-size--md.uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfo{padding-left:15px}.uppy-Dashboard-Item-name{font-size:12px;font-weight:500;line-height:1.3;margin-bottom:5px;word-wrap:anywhere;word-break:break-all}[data-uppy-theme=dark] .uppy-Dashboard-Item-name{color:#eaeaea}.uppy-size--md.uppy-Dashboard--singleFile .uppy-Dashboard-Item-name{font-size:14px;line-height:1.4}.uppy-Dashboard-Item-fileName{align-items:baseline;display:flex}.uppy-Dashboard-Item-fileName button{margin-left:5px}.uppy-Dashboard-Item-author{color:#757575;display:inline-block;font-size:11px;font-weight:400;line-height:1;margin-bottom:5px;vertical-align:bottom}.uppy-Dashboard-Item-author a{color:#757575}.uppy-Dashboard-Item-status{color:#757575;font-size:11px;font-weight:400;line-height:1}[data-uppy-theme=dark] .uppy-Dashboard-Item-status{color:#bbb}.uppy-Dashboard-Item-statusSize{display:inline-block;margin-bottom:5px;text-transform:uppercase;vertical-align:bottom}.uppy-Dashboard-Item-reSelect{color:#1269cf;font-family:inherit;font-size:inherit;font-weight:600}.uppy-Dashboard-Item-errorMessage{background-color:#fdeff1;color:#a51523;font-size:11px;font-weight:500;line-height:1.3;padding:5px 6px}.uppy-Dashboard-Item-errorMessageBtn{color:#a51523;cursor:pointer;font-size:11px;font-weight:500;text-decoration:underline}.uppy-Dashboard-Item-preview .uppy-Dashboard-Item-errorMessage{display:none}.uppy-size--md .uppy-Dashboard-Item-preview .uppy-Dashboard-Item-errorMessage{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top:1px solid #f7c2c8;bottom:0;display:block;left:0;line-height:1.4;padding:6px 8px;position:absolute;right:0}.uppy-Dashboard-Item-fileInfo .uppy-Dashboard-Item-errorMessage{border:1px solid #f7c2c8;border-radius:3px;display:inline-block;position:static}.uppy-size--md .uppy-Dashboard-Item-fileInfo .uppy-Dashboard-Item-errorMessage{display:none}.uppy-Dashboard-Item-action{color:#939393;cursor:pointer}.uppy-Dashboard-Item-action:focus{outline:none}.uppy-Dashboard-Item-action::-moz-focus-inner{border:0}.uppy-Dashboard-Item-action:focus{box-shadow:0 0 0 3px #1269cf80}.uppy-Dashboard-Item-action:hover{color:#1f1f1f;opacity:1}[data-uppy-theme=dark] .uppy-Dashboard-Item-action{color:#cfcfcf}[data-uppy-theme=dark] .uppy-Dashboard-Item-action:focus{outline:none}[data-uppy-theme=dark] .uppy-Dashboard-Item-action::-moz-focus-inner{border:0}[data-uppy-theme=dark] .uppy-Dashboard-Item-action:focus{box-shadow:0 0 0 2px #aae1ffd9}[data-uppy-theme=dark] .uppy-Dashboard-Item-action:hover{color:#eaeaea}.uppy-Dashboard-Item-action--remove{color:#1f1f1f;opacity:.95}.uppy-Dashboard-Item-action--remove:hover{color:#000;opacity:1}[dir=ltr] .uppy-size--md .uppy-Dashboard-Item-action--remove{right:-8px}[dir=rtl] .uppy-size--md .uppy-Dashboard-Item-action--remove{left:-8px}.uppy-size--md .uppy-Dashboard-Item-action--remove{height:18px;padding:0;position:absolute;top:-8px;width:18px;z-index:1002}.uppy-size--md .uppy-Dashboard-Item-action--remove:focus{border-radius:50%}[dir=ltr] .uppy-Dashboard--singleFile.uppy-size--height-md .uppy-Dashboard-Item-action--remove{right:8px}[dir=rtl] .uppy-Dashboard--singleFile.uppy-size--height-md .uppy-Dashboard-Item-action--remove{left:8px}.uppy-Dashboard--singleFile.uppy-size--height-md .uppy-Dashboard-Item-action--remove{position:absolute;top:8px}[data-uppy-theme=dark] .uppy-Dashboard-Item-action--remove{color:#525252}[data-uppy-theme=dark] .uppy-Dashboard-Item-action--remove:hover{color:#333}.uppy-Dashboard:not(.uppy-size--md):not(.uppy-Dashboard--singleFile.uppy-size--height-md) .uppy-Dashboard-Item-actionWrapper{align-items:center;display:flex}.uppy-Dashboard:not(.uppy-size--md):not(.uppy-Dashboard--singleFile.uppy-size--height-md) .uppy-Dashboard-Item-action{height:22px;margin-left:3px;padding:3px;width:22px}.uppy-Dashboard:not(.uppy-size--md):not(.uppy-Dashboard--singleFile.uppy-size--height-md) .uppy-Dashboard-Item-action:focus{border-radius:3px}.uppy-size--md .uppy-Dashboard-Item-action--copyLink,.uppy-size--md .uppy-Dashboard-Item-action--edit{height:16px;padding:0;width:16px}.uppy-size--md .uppy-Dashboard-Item-action--copyLink:focus,.uppy-size--md .uppy-Dashboard-Item-action--edit:focus{border-radius:3px}.uppy-Dashboard-Item{align-items:center;border-bottom:1px solid #eaeaea;display:flex;padding:10px}[dir=ltr] .uppy-Dashboard:not(.uppy-Dashboard--singleFile) .uppy-Dashboard-Item{padding-right:0}[dir=rtl] .uppy-Dashboard:not(.uppy-Dashboard--singleFile) .uppy-Dashboard-Item{padding-left:0}[data-uppy-theme=dark] .uppy-Dashboard-Item{border-bottom:1px solid #333}[dir=ltr] .uppy-size--md .uppy-Dashboard-Item{float:left}[dir=rtl] .uppy-size--md .uppy-Dashboard-Item{float:right}.uppy-size--md .uppy-Dashboard-Item{border-bottom:0;display:block;height:215px;margin:5px 15px;padding:0;position:relative;width:calc(33.333% - 30px)}.uppy-size--lg .uppy-Dashboard-Item{height:190px;margin:5px 15px;padding:0;width:calc(25% - 30px)}.uppy-size--xl .uppy-Dashboard-Item{height:210px;padding:0;width:calc(20% - 30px)}.uppy-Dashboard--singleFile .uppy-Dashboard-Item{border-bottom:0;display:flex;flex-direction:column;height:100%;max-width:400px;padding:15px;position:relative;width:100%}.uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-previewInnerWrap{opacity:.2}.uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-name{opacity:.7}.uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-preview:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='39' viewBox='0 0 35 39'%3E%3Cpath fill='%2523000' d='M1.708 38.66c1.709 0 3.417-3.417 6.834-3.417s5.125 3.417 8.61 3.417c3.348 0 5.056-3.417 8.473-3.417 4.305 0 5.125 3.417 6.833 3.417.889 0 1.709-.889 1.709-1.709v-19.68C34.167-5.757 0-5.757 0 17.271v19.68c0 .82.888 1.709 1.708 1.709m8.542-17.084a3.383 3.383 0 0 1-3.417-3.416 3.383 3.383 0 0 1 3.417-3.417 3.383 3.383 0 0 1 3.417 3.417 3.383 3.383 0 0 1-3.417 3.416m13.667 0A3.383 3.383 0 0 1 20.5 18.16a3.383 3.383 0 0 1 3.417-3.417 3.383 3.383 0 0 1 3.416 3.417 3.383 3.383 0 0 1-3.416 3.416'/%3E%3C/svg%3E");background-position:50% 10px;background-repeat:no-repeat;background-size:25px;bottom:0;content:"";left:0;opacity:.5;position:absolute;right:0;top:0;z-index:1005}.uppy-size--md .uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-preview:before{background-position:50% 50%;background-size:40px}.uppy-Dashboard--singleFile .uppy-Dashboard-Item.is-ghost .uppy-Dashboard-Item-preview:before{background-position:50% 50%;background-size:30%}.uppy-Dashboard-Item-preview{flex-grow:0;flex-shrink:0;height:50px;position:relative;width:50px}.uppy-size--md .uppy-Dashboard-Item-preview{height:140px;width:100%}.uppy-size--lg .uppy-Dashboard-Item-preview{height:120px}.uppy-size--xl .uppy-Dashboard-Item-preview{height:140px}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-preview{flex-grow:1;max-height:75%;width:100%}.uppy-Dashboard--singleFile.uppy-size--md .uppy-Dashboard-Item-preview{max-height:100%}[dir=ltr] .uppy-Dashboard-Item-fileInfoAndButtons{padding-right:8px}[dir=rtl] .uppy-Dashboard-Item-fileInfoAndButtons{padding-left:8px}[dir=ltr] .uppy-Dashboard-Item-fileInfoAndButtons{padding-left:12px}[dir=rtl] .uppy-Dashboard-Item-fileInfoAndButtons{padding-right:12px}.uppy-Dashboard-Item-fileInfoAndButtons{align-items:center;display:flex;flex-grow:1;justify-content:space-between}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfoAndButtons,.uppy-size--md .uppy-Dashboard-Item-fileInfoAndButtons{align-items:flex-start;padding:9px 0 0}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-fileInfoAndButtons{flex-grow:0;width:100%}.uppy-Dashboard-Item-fileInfo{flex-grow:1;flex-shrink:1}.uppy-Dashboard-Item-actionWrapper{flex-grow:0;flex-shrink:0}.uppy-Dashboard-Item.is-error .uppy-Dashboard-Item-previewInnerWrap:after,.uppy-Dashboard-Item.is-inprogress .uppy-Dashboard-Item-previewInnerWrap:after{display:block}[dir=ltr] .uppy-Dashboard-Item-errorDetails{left:2px}[dir=rtl] .uppy-Dashboard-Item-errorDetails{right:2px}.uppy-Dashboard-Item-errorDetails{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#939393;border:none;border-radius:50%;color:#fff;cursor:help;flex-shrink:0;font-size:10px;font-weight:600;height:13px;line-height:12px;position:relative;text-align:center;top:0;width:13px}.uppy-Dashboard-Item-errorDetails:after{line-height:1.3;word-wrap:break-word}.uppy-Dashboard-FileCard{background-color:#fff;border-radius:5px;bottom:0;box-shadow:0 0 10px 4px #0000001a;display:flex;flex-direction:column;height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:1005}.uppy-Dashboard-FileCard .uppy-DashboardContent-bar{border-top-left-radius:5px;border-top-right-radius:5px}.uppy-Dashboard-FileCard .uppy-Dashboard-FileCard-actions{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.uppy-Dashboard-FileCard-inner{display:flex;flex-direction:column;flex-grow:1;flex-shrink:1;height:100%;min-height:0}.uppy-Dashboard-FileCard-preview{align-items:center;border-bottom:1px solid #eaeaea;display:flex;flex-grow:0;flex-shrink:1;height:60%;justify-content:center;min-height:0;position:relative}[data-uppy-theme=dark] .uppy-Dashboard-FileCard-preview{background-color:#333;border-bottom:0}.uppy-Dashboard-FileCard-preview img.uppy-Dashboard-Item-previewImg{border-radius:3px;box-shadow:0 3px 20px #00000026;flex:0 0 auto;max-height:90%;max-width:90%;object-fit:cover}[dir=ltr] .uppy-Dashboard-FileCard-edit{right:10px}[dir=rtl] .uppy-Dashboard-FileCard-edit{left:10px}.uppy-Dashboard-FileCard-edit{background-color:#00000080;border-radius:50px;color:#fff;font-size:13px;padding:7px 15px;position:absolute;top:10px}.uppy-Dashboard-FileCard-edit:focus{outline:none}.uppy-Dashboard-FileCard-edit::-moz-focus-inner{border:0}.uppy-Dashboard-FileCard-edit:focus{box-shadow:0 0 0 3px #1269cf80}.uppy-Dashboard-FileCard-edit:hover{background-color:#000c}.uppy-Dashboard-FileCard-info{flex-grow:0;flex-shrink:0;height:40%;overflow-y:auto;padding:30px 20px 20px;-webkit-overflow-scrolling:touch}[data-uppy-theme=dark] .uppy-Dashboard-FileCard-info{background-color:#1f1f1f}.uppy-Dashboard-FileCard-fieldset{border:0;font-size:0;margin:auto auto 12px;max-width:640px;padding:0}.uppy-Dashboard-FileCard-label{color:#525252;display:inline-block;font-size:12px;vertical-align:middle;width:22%}.uppy-size--md .uppy-Dashboard-FileCard-label{font-size:14px}[data-uppy-theme=dark] .uppy-Dashboard-FileCard-label{color:#eaeaea}.uppy-Dashboard-FileCard-input{display:inline-block;vertical-align:middle;width:78%}.uppy-Dashboard-FileCard-actions{align-items:center;background-color:#fafafa;border-top:1px solid #eaeaea;display:flex;flex-grow:0;flex-shrink:0;height:55px;padding:0 15px}.uppy-size--md .uppy-Dashboard-FileCard-actions{height:65px}[data-uppy-theme=dark] .uppy-Dashboard-FileCard-actions{background-color:#1f1f1f;border-top:1px solid #333}[dir=ltr] .uppy-Dashboard-FileCard-actionsBtn{margin-right:10px}[dir=rtl] .uppy-Dashboard-FileCard-actionsBtn{margin-left:10px}.uppy-transition-slideDownUp-enter{opacity:.01;transform:translate3d(0,-105%,0);transition:transform .25s ease-in-out,opacity .25s ease-in-out}.uppy-transition-slideDownUp-enter.uppy-transition-slideDownUp-enter-active{opacity:1;transform:translateZ(0)}.uppy-transition-slideDownUp-leave{opacity:1;transform:translateZ(0);transition:transform .25s ease-in-out,opacity .25s ease-in-out}.uppy-transition-slideDownUp-leave.uppy-transition-slideDownUp-leave-active{opacity:.01;transform:translate3d(0,-105%,0)}@keyframes uppy-Dashboard-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes uppy-Dashboard-fadeOut{0%{opacity:1}to{opacity:0}}@keyframes uppy-Dashboard-slideDownAndFadeIn{0%{opacity:0;transform:translate3d(-50%,-70%,0)}to{opacity:1;transform:translate3d(-50%,-50%,0)}}@keyframes uppy-Dashboard-slideDownAndFadeIn--small{0%{opacity:0;transform:translate3d(0,-20%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uppy-Dashboard-slideUpFadeOut{0%{opacity:1;transform:translate3d(-50%,-50%,0)}to{opacity:0;transform:translate3d(-50%,-70%,0)}}@keyframes uppy-Dashboard-slideUpFadeOut--small{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(0,-20%,0)}}.uppy-Dashboard--modal{z-index:1001}.uppy-Dashboard--modal[aria-hidden=true]{display:none}.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose>.uppy-Dashboard-inner{animation:uppy-Dashboard-slideDownAndFadeIn--small .3s cubic-bezier(0,0,.2,1)}@media only screen and (min-width:820px){.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose>.uppy-Dashboard-inner{animation:uppy-Dashboard-slideDownAndFadeIn .3s cubic-bezier(0,0,.2,1)}}.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose>.uppy-Dashboard-overlay{animation:uppy-Dashboard-fadeIn .3s cubic-bezier(0,0,.2,1)}.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing>.uppy-Dashboard-inner{animation:uppy-Dashboard-slideUpFadeOut--small .3s cubic-bezier(0,0,.2,1)}@media only screen and (min-width:820px){.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing>.uppy-Dashboard-inner{animation:uppy-Dashboard-slideUpFadeOut .3s cubic-bezier(0,0,.2,1)}}.uppy-Dashboard--modal.uppy-Dashboard--animateOpenClose.uppy-Dashboard--isClosing>.uppy-Dashboard-overlay{animation:uppy-Dashboard-fadeOut .3s cubic-bezier(0,0,.2,1)}.uppy-Dashboard-isFixed{height:100vh;overflow:hidden}.uppy-Dashboard--modal .uppy-Dashboard-overlay{background-color:#00000080;bottom:0;left:0;position:fixed;right:0;top:0;z-index:1001}.uppy-Dashboard-inner{background-color:#f4f4f4;border:1px solid #eaeaea;border-radius:5px;max-height:100%;max-width:100%;outline:none;position:relative}.uppy-size--md .uppy-Dashboard-inner{min-height:auto}@media only screen and (min-width:820px){.uppy-Dashboard-inner{height:500px;width:650px}}.uppy-Dashboard--modal .uppy-Dashboard-inner{z-index:1002}[data-uppy-theme=dark] .uppy-Dashboard-inner{background-color:#1f1f1f}.uppy-Dashboard--isDisabled .uppy-Dashboard-inner{cursor:not-allowed}.uppy-Dashboard-innerWrap{border-radius:5px;display:flex;flex-direction:column;height:100%;opacity:0;overflow:hidden;position:relative}.uppy-Dashboard--isInnerWrapVisible .uppy-Dashboard-innerWrap{opacity:1}.uppy-Dashboard--isDisabled .uppy-Dashboard-innerWrap{cursor:not-allowed;filter:grayscale(100%);opacity:.6;-webkit-user-select:none;user-select:none}.uppy-Dashboard--isDisabled .uppy-ProviderIconBg{fill:#9f9f9f}.uppy-Dashboard--isDisabled [aria-disabled],.uppy-Dashboard--isDisabled [disabled]{cursor:not-allowed;pointer-events:none}.uppy-Dashboard--modal .uppy-Dashboard-inner{border:none;bottom:15px;left:15px;position:fixed;right:15px;top:35px}@media only screen and (min-width:820px){.uppy-Dashboard--modal .uppy-Dashboard-inner{box-shadow:0 5px 15px 4px #00000026;left:50%;right:auto;top:50%;transform:translate(-50%,-50%)}}[dir=ltr] .uppy-Dashboard-close{right:-2px}[dir=rtl] .uppy-Dashboard-close{left:-2px}.uppy-Dashboard-close{color:#ffffffe6;cursor:pointer;display:block;font-size:27px;position:absolute;top:-33px;z-index:1005}.uppy-Dashboard-close:focus{outline:none}.uppy-Dashboard-close::-moz-focus-inner{border:0}.uppy-Dashboard-close:focus{color:#6eabf2}@media only screen and (min-width:820px){[dir=ltr] .uppy-Dashboard-close{right:-35px}[dir=rtl] .uppy-Dashboard-close{left:-35px}.uppy-Dashboard-close{font-size:35px;top:-10px}}.uppy-Dashboard-serviceMsg{background-color:#fffbf7;border-bottom:1px solid #edd4b9;border-top:1px solid #edd4b9;font-size:12px;font-weight:500;line-height:1.3;padding:12px 0;position:relative;top:-1px;z-index:1004}.uppy-size--md .uppy-Dashboard-serviceMsg{font-size:14px;line-height:1.4}[data-uppy-theme=dark] .uppy-Dashboard-serviceMsg{background-color:#1f1f1f;border-bottom:1px solid #333;border-top:1px solid #333;color:#eaeaea}.uppy-Dashboard-serviceMsg-title{display:block;line-height:1;margin-bottom:4px;padding-left:42px}.uppy-Dashboard-serviceMsg-text{padding:0 15px}.uppy-Dashboard-serviceMsg-actionBtn{color:#1269cf;font-size:inherit;font-weight:inherit;vertical-align:initial}[data-uppy-theme=dark] .uppy-Dashboard-serviceMsg-actionBtn{color:#02baf2e6}.uppy-Dashboard-serviceMsg-icon{left:15px;position:absolute;top:10px}.uppy-Dashboard-AddFiles{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;position:relative;text-align:center}[data-uppy-drag-drop-supported=true] .uppy-Dashboard-AddFiles{border:1px dashed #dfdfdf;border-radius:3px;height:calc(100% - 14px);margin:7px}.uppy-Dashboard-AddFilesPanel .uppy-Dashboard-AddFiles{border:none;height:calc(100% - 54px)}.uppy-Dashboard--modal .uppy-Dashboard-AddFiles{border-color:#cfcfcf}[data-uppy-theme=dark] .uppy-Dashboard-AddFiles{border-color:#757575}.uppy-Dashboard-AddFiles-info{display:none;margin-top:auto;padding-bottom:15px;padding-top:15px}.uppy-size--height-md .uppy-Dashboard-AddFiles-info{display:block}.uppy-size--md .uppy-Dashboard-AddFiles-info{bottom:25px;left:0;padding-bottom:0;padding-top:30px;position:absolute;right:0}[data-uppy-num-acquirers="0"] .uppy-Dashboard-AddFiles-info{margin-top:0}.uppy-Dashboard-browse{color:#1269cf;cursor:pointer}.uppy-Dashboard-browse:focus{outline:none}.uppy-Dashboard-browse::-moz-focus-inner{border:0}.uppy-Dashboard-browse:focus,.uppy-Dashboard-browse:hover{border-bottom:1px solid #1269cf}[data-uppy-theme=dark] .uppy-Dashboard-browse{color:#02baf2e6}[data-uppy-theme=dark] .uppy-Dashboard-browse:focus,[data-uppy-theme=dark] .uppy-Dashboard-browse:hover{border-bottom:1px solid #02baf2}.uppy-Dashboard-browseBtn{display:block;font-size:14px;font-weight:500;margin-bottom:5px;margin-top:8px;width:100%}.uppy-size--md .uppy-Dashboard-browseBtn{font-size:15px;margin:15px auto;padding:13px 44px;width:auto}.uppy-Dashboard-AddFiles-list{display:flex;flex:1;flex-direction:column;margin-top:2px;overflow-y:auto;padding:2px 0;width:100%;-webkit-overflow-scrolling:touch}.uppy-size--md .uppy-Dashboard-AddFiles-list{flex:none;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-top:15px;max-width:600px;overflow-y:visible;padding-top:0}.uppy-DashboardTab{border-bottom:1px solid #eaeaea;text-align:center;width:100%}[data-uppy-theme=dark] .uppy-DashboardTab{border-bottom:1px solid #333}.uppy-size--md .uppy-DashboardTab{border-bottom:none;display:inline-block;margin-bottom:10px;width:auto}.uppy-DashboardTab-btn{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:initial;color:#525252;cursor:pointer;flex-direction:row;height:100%;justify-content:left;padding:12px 15px;width:100%}.uppy-DashboardTab-btn:focus{outline:none}[dir=ltr] .uppy-size--md .uppy-DashboardTab-btn{margin-right:1px}[dir=rtl] .uppy-size--md .uppy-DashboardTab-btn{margin-left:1px}.uppy-size--md .uppy-DashboardTab-btn{border-radius:5px;flex-direction:column;padding:10px 3px;width:86px}[data-uppy-theme=dark] .uppy-DashboardTab-btn{color:#eaeaea}.uppy-DashboardTab-btn::-moz-focus-inner{border:0}.uppy-DashboardTab-btn:hover{background-color:#e9ecef}[data-uppy-theme=dark] .uppy-DashboardTab-btn:hover{background-color:#333}.uppy-DashboardTab-btn:active,.uppy-DashboardTab-btn:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-DashboardTab-btn:active,[data-uppy-theme=dark] .uppy-DashboardTab-btn:focus{background-color:#525252}.uppy-DashboardTab-btn svg{display:inline-block;max-height:100%;max-width:100%;overflow:hidden;transition:transform .15s ease-in-out;vertical-align:text-top}[dir=ltr] .uppy-DashboardTab-inner{margin-right:10px}[dir=rtl] .uppy-DashboardTab-inner{margin-left:10px}.uppy-DashboardTab-inner{align-items:center;background-color:#fff;border-radius:8px;box-shadow:0 1px 1px #0000001a,0 1px 2px #0000001a,0 2px 3px #00000005;display:flex;height:32px;justify-content:center;width:32px}[dir=ltr] .uppy-size--md .uppy-DashboardTab-inner{margin-right:0}[dir=rtl] .uppy-size--md .uppy-DashboardTab-inner{margin-left:0}[data-uppy-theme=dark] .uppy-DashboardTab-inner{background-color:#323232;box-shadow:0 1px 1px #0003,0 1px 2px #0003,0 2px 3px #00000014}.uppy-DashboardTab-name{font-size:14px;font-weight:400}.uppy-size--md .uppy-DashboardTab-name{font-size:12px;line-height:15px;margin-bottom:0;margin-top:8px}.uppy-DashboardTab-iconMyDevice{color:#1269cf}[data-uppy-theme=dark] .uppy-DashboardTab-iconMyDevice{color:#02baf2}.uppy-DashboardTab-iconBox{color:#0061d5}[data-uppy-theme=dark] .uppy-DashboardTab-iconBox{color:#eaeaea}.uppy-DashboardTab-iconDropbox{color:#0061fe}[data-uppy-theme=dark] .uppy-DashboardTab-iconDropbox{color:#eaeaea}.uppy-DashboardTab-iconUnsplash{color:#111}[data-uppy-theme=dark] .uppy-DashboardTab-iconUnsplash{color:#eaeaea}.uppy-DashboardTab-iconWebdav{color:#111}[data-uppy-theme=dark] .uppy-DashboardTab-iconWebdav{color:#eaeaea}.uppy-DashboardTab-iconScreenRec{color:#2c3e50}[data-uppy-theme=dark] .uppy-DashboardTab-iconScreenRec{color:#eaeaea}.uppy-DashboardTab-iconAudio{color:#8030a3}[data-uppy-theme=dark] .uppy-DashboardTab-iconAudio{color:#bf6ee3}.uppy-Dashboard-input{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}.uppy-DashboardContent-bar{align-items:center;background-color:#fafafa;border-bottom:1px solid #eaeaea;display:flex;flex-shrink:0;height:40px;justify-content:space-between;padding:0 10px;position:relative;width:100%;z-index:1004}.uppy-size--md .uppy-DashboardContent-bar{height:50px;padding:0 15px}[data-uppy-theme=dark] .uppy-DashboardContent-bar{background-color:#1f1f1f;border-bottom:1px solid #333}.uppy-DashboardContent-title{font-size:12px;font-weight:500;left:0;line-height:40px;margin:auto;max-width:170px;overflow-x:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0;white-space:nowrap;width:100%}.uppy-size--md .uppy-DashboardContent-title{font-size:14px;line-height:50px;max-width:300px}[data-uppy-theme=dark] .uppy-DashboardContent-title{color:#eaeaea}[dir=ltr] .uppy-DashboardContent-back,[dir=ltr] .uppy-DashboardContent-save{margin-left:-6px}[dir=rtl] .uppy-DashboardContent-back,[dir=rtl] .uppy-DashboardContent-save{margin-right:-6px}.uppy-DashboardContent-back,.uppy-DashboardContent-save{-webkit-appearance:none;background:none;border:0;border-radius:3px;color:inherit;color:#1269cf;cursor:pointer;font-family:inherit;font-size:inherit;font-size:12px;font-weight:400;line-height:1;margin:0;padding:7px 6px}.uppy-DashboardContent-back:focus,.uppy-DashboardContent-save:focus{outline:none}.uppy-DashboardContent-back::-moz-focus-inner,.uppy-DashboardContent-save::-moz-focus-inner{border:0}.uppy-DashboardContent-back:hover,.uppy-DashboardContent-save:hover{color:#0e51a0}.uppy-DashboardContent-back:focus,.uppy-DashboardContent-save:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-DashboardContent-back:focus,[data-uppy-theme=dark] .uppy-DashboardContent-save:focus{background-color:#333}.uppy-size--md .uppy-DashboardContent-back,.uppy-size--md .uppy-DashboardContent-save{font-size:14px}[data-uppy-theme=dark] .uppy-DashboardContent-back,[data-uppy-theme=dark] .uppy-DashboardContent-save{color:#02baf2}[dir=ltr] .uppy-DashboardContent-addMore{margin-right:-5px}[dir=rtl] .uppy-DashboardContent-addMore{margin-left:-5px}.uppy-DashboardContent-addMore{-webkit-appearance:none;background:none;border:0;border-radius:3px;color:inherit;color:#1269cf;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:500;height:29px;line-height:1;margin:0;padding:7px 8px;width:29px}.uppy-DashboardContent-addMore:focus{outline:none}.uppy-DashboardContent-addMore::-moz-focus-inner{border:0}.uppy-DashboardContent-addMore:hover{color:#0e51a0}.uppy-DashboardContent-addMore:focus{background-color:#dfe6f1}[data-uppy-theme=dark] .uppy-DashboardContent-addMore:focus{background-color:#333}[dir=ltr] .uppy-size--md .uppy-DashboardContent-addMore{margin-right:-8px}[dir=rtl] .uppy-size--md .uppy-DashboardContent-addMore{margin-left:-8px}.uppy-size--md .uppy-DashboardContent-addMore{font-size:14px;height:auto;width:auto}[data-uppy-theme=dark] .uppy-DashboardContent-addMore{color:#02baf2}[dir=ltr] .uppy-DashboardContent-addMore svg{margin-right:4px}[dir=rtl] .uppy-DashboardContent-addMore svg{margin-left:4px}.uppy-DashboardContent-addMore svg{vertical-align:initial}.uppy-size--md .uppy-DashboardContent-addMore svg{height:11px;width:11px}.uppy-DashboardContent-addMoreCaption{display:none}.uppy-size--md .uppy-DashboardContent-addMoreCaption{display:inline}.uppy-DashboardContent-panel{background-color:#f5f5f5;flex:1}.uppy-Dashboard-AddFilesPanel,.uppy-DashboardContent-panel{border-radius:5px;bottom:0;display:flex;flex-direction:column;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:1005}.uppy-Dashboard-AddFilesPanel{background:#fafafa;background:linear-gradient(0deg,#fafafa 35%,#fafafad9);box-shadow:0 0 10px 5px #00000026}[data-uppy-theme=dark] .uppy-Dashboard-AddFilesPanel{background-color:#333;background-image:linear-gradient(0deg,#1f1f1f 35%,#1f1f1fd9)}.uppy-Dashboard--isAddFilesPanelVisible .uppy-Dashboard-files{filter:blur(2px)}.uppy-Dashboard-progress{bottom:0;height:12%;left:0;position:absolute;width:100%}.uppy-Dashboard-progressBarContainer.is-active{height:100%;left:0;position:absolute;top:0;width:100%;z-index:1004}.uppy-Dashboard-filesContainer{flex:1;margin:0;overflow-y:hidden;position:relative}.uppy-Dashboard-filesContainer:after{clear:both;content:"";display:table}.uppy-Dashboard-files{flex:1;margin:0;overflow-y:auto;padding:0 0 10px;-webkit-overflow-scrolling:touch}.uppy-size--md .uppy-Dashboard-files{padding-top:10px}.uppy-Dashboard--singleFile .uppy-Dashboard-filesInner{align-items:center;display:flex;height:100%;justify-content:center}.uppy-Dashboard-dropFilesHereHint{align-items:center;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath fill='%231269CF' d='M24 1v1C11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22S36.15 2 24 2zm0 0V0c13.254 0 24 10.746 24 24S37.254 48 24 48 0 37.254 0 24 10.746 0 24 0zm7.707 19.293a.999.999 0 1 1-1.414 1.414L25 16.414V34a1 1 0 1 1-2 0V16.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E");background-position:50% 50%;background-repeat:no-repeat;border:1px dashed #1269cf;border-radius:3px;bottom:7px;color:#757575;display:flex;font-size:16px;justify-content:center;left:7px;padding-top:90px;position:absolute;right:7px;text-align:center;top:7px;visibility:hidden;z-index:2000}[data-uppy-theme=dark] .uppy-Dashboard-dropFilesHereHint{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath fill='%2302BAF2' d='M24 1v1C11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22S36.15 2 24 2zm0 0V0c13.254 0 24 10.746 24 24S37.254 48 24 48 0 37.254 0 24 10.746 0 24 0zm7.707 19.293a.999.999 0 1 1-1.414 1.414L25 16.414V34a1 1 0 1 1-2 0V16.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E");border-color:#02baf2;color:#bbb}.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-dropFilesHereHint{pointer-events:none;visibility:visible}.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-files,.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-progressindicators,.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-serviceMsg,.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-DashboardContent-bar{opacity:.15}.uppy-Dashboard.uppy-Dashboard--isDraggingOver .uppy-Dashboard-AddFiles{opacity:.03}.uppy-Dashboard-AddFiles-title{color:#000;font-size:17px;font-weight:500;line-height:1.35;margin-bottom:5px;margin-top:15px;padding:0 15px;text-align:inline-start;width:100%}.uppy-size--md .uppy-Dashboard-AddFiles-title{font-size:21px;font-weight:400;margin-top:5px;max-width:480px;padding:0 35px;text-align:center}[data-uppy-num-acquirers="0"] .uppy-Dashboard-AddFiles-title{text-align:center}[data-uppy-theme=dark] .uppy-Dashboard-AddFiles-title{color:#eaeaea}.uppy-Dashboard-AddFiles-title button{font-weight:500}.uppy-size--md .uppy-Dashboard-AddFiles-title button{font-weight:400}.uppy-Dashboard-note{color:#757575;font-size:14px;line-height:1.25;margin:auto;max-width:350px;padding:0 15px;text-align:center}.uppy-size--md .uppy-Dashboard-note{line-height:1.35;max-width:600px}[data-uppy-theme=dark] .uppy-Dashboard-note{color:#cfcfcf}a.uppy-Dashboard-poweredBy{color:#939393;display:inline-block;font-size:11px;margin-top:8px;text-align:center;text-decoration:none}.uppy-Dashboard-poweredByIcon{margin-left:1px;margin-right:1px;opacity:.9;position:relative;top:1px;vertical-align:text-top;fill:none;stroke:#939393}.uppy-Dashboard-Item-previewIcon{height:25px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:25px;z-index:100}.uppy-size--md .uppy-Dashboard-Item-previewIcon{height:38px;width:38px}.uppy-Dashboard-Item-previewIcon svg{height:100%;width:100%}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-previewIcon{height:100%;max-height:60%;max-width:60%;width:100%}.uppy-Dashboard-Item-previewIconWrap{height:76px;max-height:75%;position:relative}.uppy-Dashboard--singleFile .uppy-Dashboard-Item-previewIconWrap{height:100%;width:100%}.uppy-Dashboard-Item-previewIconBg{filter:drop-shadow(rgba(0,0,0,.1) 0 1px 1px);height:100%;width:100%}.uppy-Dashboard-upload{height:50px;position:relative;width:50px}.uppy-size--md .uppy-Dashboard-upload{height:60px;width:60px}.uppy-Dashboard-upload .uppy-c-icon{position:relative;top:1px;width:50%}[dir=ltr] .uppy-Dashboard-uploadCount{right:-12px}[dir=rtl] .uppy-Dashboard-uploadCount{left:-12px}.uppy-Dashboard-uploadCount{background-color:#1bb240;border-radius:50%;color:#fff;font-size:8px;height:16px;line-height:16px;position:absolute;top:-12px;width:16px}.uppy-size--md .uppy-Dashboard-uploadCount{font-size:9px;height:18px;line-height:18px;width:18px}`;
var Sm = Object.defineProperty, Pm = Object.getOwnPropertyDescriptor, Ru = (r) => {
  throw TypeError(r);
}, gt = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? Pm(e, t) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (o = (i ? s(e, t, o) : s(o)) || o);
  return i && o && Sm(e, t, o), o;
}, Mu = (r, e, t) => e.has(r) || Ru("Cannot " + t), km = (r, e, t) => (Mu(r, e, "read from private field"), t ? t.call(r) : e.get(r)), Fm = (r, e, t) => e.has(r) ? Ru("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), Dm = (r, e, t, i) => (Mu(r, e, "write to private field"), e.set(r, t), t), Di;
let Ke = class extends Yu {
  constructor() {
    super(), Fm(this, Di), this.endpoint = "", this.selector = "drag-drop-area", this.chunkSize = 52428800, this.maxSize = 1024 * 1024 * 1024 * 25, this.resumable = !1, this.height = 360, this.width = 640, this.consumeContext(Zu, (r) => {
      Dm(this, Di, r);
    });
  }
  render() {
    return De`
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
      var n;
      const i = await ((n = km(this, Di)) == null ? void 0 : n.getLatestToken());
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
    new zi({
      debug: !1,
      autoProceed: !1,
      allowMultipleUploadBatches: !1,
      restrictions: {
        maxFileSize: this.maxSize,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ["video/*"]
      }
    }).use(cu, {
      target: this.uppyElement,
      inline: !0,
      height: this.height,
      width: this.width,
      singleFileFullScreen: !0,
      proudlyDisplayPoweredByUppy: !1
    }).use(Uu, {
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
Di = /* @__PURE__ */ new WeakMap();
Ke.styles = [Ti(xm), Ti(_m), Fn`
        .uppy-Dashboard-browse {
            color: #2bc37c;
        }

        .uppy-Dashboard-browse:hover {
            border-bottom: 1px solid #2bc37c;
        }
    `];
gt([
  Re()
], Ke.prototype, "endpoint", 2);
gt([
  vp(".uppy")
], Ke.prototype, "uppyElement", 2);
gt([
  Re()
], Ke.prototype, "chunkSize", 2);
gt([
  Re()
], Ke.prototype, "maxSize", 2);
gt([
  Re()
], Ke.prototype, "resumable", 2);
gt([
  Re()
], Ke.prototype, "height", 2);
gt([
  Re()
], Ke.prototype, "width", 2);
Ke = gt([
  Cn("uppy-upload")
], Ke);
var Tm = Object.defineProperty, Im = Object.getOwnPropertyDescriptor, Li = (r, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? Im(e, t) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (o = (i ? s(e, t, o) : s(o)) || o);
  return i && o && Tm(e, t, o), o;
};
let ir = class extends Zt {
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
    return De`
            <div class="alert alert-${this.type}">
                ${this.icon() ? De`
                            <div class="alert-icon">${this.icon()}</div>
                        ` : ae}
                <div class="alert-content">
                    ${this.headline ? De`
                                <p class="alert-heading">${this.headline}</p>
                            ` : ae}
                    <slot name="content"></slot>
                </div>
            </div>`;
  }
};
ir.styles = [
  ml,
  Fn`
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
Li([
  Re()
], ir.prototype, "type", 2);
Li([
  Re()
], ir.prototype, "hideIcon", 2);
Li([
  Re()
], ir.prototype, "headline", 2);
ir = Li([
  Cn("rr-alert")
], ir);
//# sourceMappingURL=index.js.map
