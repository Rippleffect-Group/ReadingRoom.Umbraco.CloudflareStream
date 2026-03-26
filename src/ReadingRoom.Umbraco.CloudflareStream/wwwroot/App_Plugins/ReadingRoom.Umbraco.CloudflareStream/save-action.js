import { UmbSubmitWorkspaceAction as t } from "@umbraco-cms/backoffice/workspace";
import { c as i } from "./shared-DtVjuqT4.js";
class p extends t {
  #e = !1;
  constructor(e, s) {
    super(e, s), this.observe(i.uploading, (a) => {
      this.#e = a ?? !1, this.#e ? this._isDisabled.setValue(!0) : this._isDisabled.setValue(!1);
    }, "cfStreamUploadingObserver");
  }
  enable() {
    this.#e || super.enable();
  }
}
export {
  p as api
};
//# sourceMappingURL=save-action.js.map
