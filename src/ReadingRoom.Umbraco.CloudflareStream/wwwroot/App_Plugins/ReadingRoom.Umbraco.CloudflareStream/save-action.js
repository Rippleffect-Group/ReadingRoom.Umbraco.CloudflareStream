import { UmbSubmitWorkspaceAction as i } from "@umbraco-cms/backoffice/workspace";
import { c as t } from "./shared-DtVjuqT4.js";
class c extends i {
  constructor(e, s) {
    super(e, s), this.observe(t.uploading, (a) => {
      this.#e(a ?? !1);
    }, "cfStreamUploadingObserver");
  }
  _gotWorkspaceContext() {
    this.observe(this._workspaceContext?.unique, (e) => {
      e === void 0 ? this.disable() : this.#e(t.getUploading());
    }, "saveWorkspaceActionUniqueObserver");
  }
  #e(e) {
    e ? this.disable() : this.enable();
  }
}
export {
  c as api
};
//# sourceMappingURL=save-action.js.map
