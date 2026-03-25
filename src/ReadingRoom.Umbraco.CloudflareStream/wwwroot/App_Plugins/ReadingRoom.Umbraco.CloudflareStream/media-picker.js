import { x as y, b as r, n as m, t as c } from "./state-DBYjh2Ug.js";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as v } from "@umbraco-cms/backoffice/validation";
import { UMB_PROPERTY_CONTEXT as f } from "@umbraco-cms/backoffice/property";
import "@umbraco-cms/backoffice/media";
var C = Object.defineProperty, E = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, s = (e, t, i, l) => {
  for (var o = l > 1 ? void 0 : l ? E(t, i) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (o = (l ? p(t, i, o) : p(o)) || o);
  return l && o && C(t, i, o), o;
}, M = (e, t, i) => t.has(e) || h("Cannot " + i), P = (e, t, i) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), $ = (e, t, i) => (M(e, t, "access private method"), i), d, _;
const g = "cf-stream-media-picker";
let a = class extends v(u) {
  constructor() {
    super(), P(this, d), this.mandatoryMessage = "", this.readonly = !1, this._allowedMediaTypes = [], this._focalPointEnabled = !1, this._preselectedCrops = [], this._multiple = !1, this._min = 0, this._max = 1 / 0, this.consumeContext(f, (e) => {
      this.observe(e?.alias, (t) => this._alias = t), this.observe(e?.variantId, (t) => this._variantId = t?.toString() || "invariant");
    });
  }
  set config(e) {
    if (!e) return;
    this._allowedMediaTypes = e.getValueByAlias("filter")?.split(",") ?? [], this._focalPointEnabled = !!e.getValueByAlias("enableLocalFocalPoint"), this._multiple = !!e.getValueByAlias("multiple"), this._preselectedCrops = e.getValueByAlias("crops") ?? [];
    const t = e.getValueByAlias("startNodeId") ?? "";
    this._startNode = t ? { unique: t, entityType: "media" } : void 0;
    const i = e.getValueByAlias("validationLimit");
    this._min = i?.min ?? 0, this._max = i?.max ?? 1 / 0;
  }
  render() {
    return y`
            <umb-input-rich-media
                .alias=${this._alias}
                .allowedContentTypeIds=${this._allowedMediaTypes}
                .focalPointEnabled=${this._focalPointEnabled}
                .value=${this.value ?? []}
                .max=${this._max}
                .min=${this._min}
                .preselectedCrops=${this._preselectedCrops}
                .startNode=${this._startNode}
                .variantId=${this._variantId}
                .required=${this.mandatory}
                .requiredMessage=${this.mandatoryMessage}
                ?multiple=${this._multiple}
                @change=${$(this, d, _)}
                ?readonly=${this.readonly}>
            </umb-input-rich-media>
        `;
  }
};
d = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  const t = e.target, i = t.value?.length === 0;
  this.value = i ? void 0 : t.value, this.dispatchEvent(new Event("change"));
};
s([
  m({ type: Boolean })
], a.prototype, "mandatory", 2);
s([
  m({ type: String })
], a.prototype, "mandatoryMessage", 2);
s([
  m({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
s([
  r()
], a.prototype, "_allowedMediaTypes", 2);
s([
  r()
], a.prototype, "_focalPointEnabled", 2);
s([
  r()
], a.prototype, "_preselectedCrops", 2);
s([
  r()
], a.prototype, "_multiple", 2);
s([
  r()
], a.prototype, "_min", 2);
s([
  r()
], a.prototype, "_max", 2);
s([
  r()
], a.prototype, "_startNode", 2);
s([
  r()
], a.prototype, "_alias", 2);
s([
  r()
], a.prototype, "_variantId", 2);
a = s([
  c(g)
], a);
const T = a;
export {
  a as CfStreamMediaPickerElement,
  T as default
};
//# sourceMappingURL=media-picker.js.map
