import { x as y, b as s, n as l, t as c } from "./state-DBYjh2Ug.js";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as v } from "@umbraco-cms/backoffice/validation";
import { UMB_PROPERTY_CONTEXT as f } from "@umbraco-cms/backoffice/property";
import "@umbraco-cms/backoffice/media";
var g = Object.defineProperty, C = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, i = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? C(t, r) : t, p = e.length - 1, d; p >= 0; p--)
    (d = e[p]) && (o = (n ? d(t, r, o) : d(o)) || o);
  return n && o && g(t, r, o), o;
}, E = (e, t, r) => t.has(e) || h("Cannot " + r), M = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r) => (E(e, t, "access private method"), r), _, m;
let a = class extends v(u) {
  constructor() {
    super(), M(this, _), this.mandatoryMessage = "", this.readonly = !1, this._allowedMediaTypes = [], this._focalPointEnabled = !1, this._preselectedCrops = [], this._multiple = !1, this._min = 0, this._max = 1 / 0, this.consumeContext(f, (e) => {
      this.observe(e?.alias, (t) => this._alias = t), this.observe(e?.variantId, (t) => this._variantId = t?.toString() || "invariant");
    });
  }
  set config(e) {
    if (!e) return;
    this._allowedMediaTypes = e.getValueByAlias("filter")?.split(",") ?? [], this._focalPointEnabled = !!e.getValueByAlias("enableLocalFocalPoint"), this._multiple = !!e.getValueByAlias("multiple"), this._preselectedCrops = e.getValueByAlias("crops") ?? [];
    const t = e.getValueByAlias("startNodeId") ?? "";
    this._startNode = t ? { unique: t, entityType: "media" } : void 0;
    const r = e.getValueByAlias("validationLimit");
    this._min = r?.min ?? 0, this._max = r?.max ?? 1 / 0;
  }
  get config() {
    return this._config;
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
                @change=${P(this, _, m)}
                ?readonly=${this.readonly}>
            </umb-input-rich-media>
        `;
  }
};
_ = /* @__PURE__ */ new WeakSet();
m = function(e) {
  const t = e.target, r = t.value?.length === 0;
  this.value = r ? void 0 : t.value, this.dispatchEvent(new Event("change"));
};
i([
  l({ type: Boolean })
], a.prototype, "mandatory", 2);
i([
  l({ type: String })
], a.prototype, "mandatoryMessage", 2);
i([
  l({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
i([
  s()
], a.prototype, "_config", 2);
i([
  s()
], a.prototype, "_allowedMediaTypes", 2);
i([
  s()
], a.prototype, "_focalPointEnabled", 2);
i([
  s()
], a.prototype, "_preselectedCrops", 2);
i([
  s()
], a.prototype, "_multiple", 2);
i([
  s()
], a.prototype, "_min", 2);
i([
  s()
], a.prototype, "_max", 2);
i([
  s()
], a.prototype, "_startNode", 2);
i([
  s()
], a.prototype, "_alias", 2);
i([
  s()
], a.prototype, "_variantId", 2);
i([
  l({ attribute: !1 })
], a.prototype, "config", 1);
a = i([
  c("cf-stream-media-picker")
], a);
const I = a;
export {
  a as CfStreamMediaPickerElement,
  I as default
};
//# sourceMappingURL=media-picker.js.map
