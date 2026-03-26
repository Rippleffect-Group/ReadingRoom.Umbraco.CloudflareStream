import { UmbSubmitWorkspaceAction } from '@umbraco-cms/backoffice/workspace';
import { cfStreamUploadState } from '../common/cf-stream-upload-context.ts';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import type { UmbWorkspaceActionArgs, MetaWorkspaceAction } from '@umbraco-cms/backoffice/workspace';

export class CfStreamSaveWorkspaceAction extends UmbSubmitWorkspaceAction {

    #isUploading = false;
    
    constructor(host: UmbControllerHost, args: UmbWorkspaceActionArgs<MetaWorkspaceAction>) {
        super(host, args);

        this.observe(cfStreamUploadState.uploading, (uploading) => {
            this.#isUploading = uploading ?? false;
            if (this.#isUploading) {
                this._isDisabled.setValue(true);
            } else {
                // Only re-enable if the base class wouldn't have it disabled
                // (i.e., the workspace has a unique/is not new)
                this._isDisabled.setValue(false);
            }
        }, 'cfStreamUploadingObserver');
    }

    override enable(): void {
        if (!this.#isUploading) {
            super.enable();
        }
    }
}