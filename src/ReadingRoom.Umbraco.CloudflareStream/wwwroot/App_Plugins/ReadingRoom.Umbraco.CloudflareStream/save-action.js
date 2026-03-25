var p = (t) => {
  throw TypeError(t);
};
var b = (t, s, e) => s.has(t) || p("Cannot " + e);
var c = (t, s, e) => s.has(t) ? p("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(t) : s.set(t, e);
var o = (t, s, e) => (b(t, s, "access private method"), e);
import { UmbSubmitWorkspaceAction as d } from "@umbraco-cms/backoffice/workspace";
import { c as n } from "./shared-DtVjuqT4.js";
var a, r;
class u extends d {
  constructor(e, i) {
    super(e, i);
    c(this, a);
    this.observe(n.uploading, (l) => {
      o(this, a, r).call(this, l ?? !1);
    }, "cfStreamUploadingObserver");
  }
  _gotWorkspaceContext() {
    var e;
    this.observe((e = this._workspaceContext) == null ? void 0 : e.unique, (i) => {
      i === void 0 ? this.disable() : o(this, a, r).call(this, n.getUploading());
    }, "saveWorkspaceActionUniqueObserver");
  }
}
a = new WeakSet(), r = function(e) {
  e ? this.disable() : this.enable();
};
export {
  u as api
};
//# sourceMappingURL=save-action.js.map
