import { UmbSubmitWorkspaceAction } from '@umbraco-cms/backoffice/workspace';
import { cfStreamUploadState } from '../common/cf-stream-upload-context.ts';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import type { UmbWorkspaceActionArgs, MetaWorkspaceAction } from '@umbraco-cms/backoffice/workspace';

export class CfStreamSaveWorkspaceAction extends UmbSubmitWorkspaceAction {

    constructor(host: UmbControllerHost, args: UmbWorkspaceActionArgs<MetaWorkspaceAction>) {
        super(host, args);

        this.observe(cfStreamUploadState.uploading, (uploading) => {
            this.#updateDisabledState(uploading ?? false);
        }, 'cfStreamUploadingObserver');
    }

    protected override _gotWorkspaceContext() {
        this.observe(this._workspaceContext?.unique, (unique) => {
            if (unique === undefined) {
                this.disable();
            } else {
                this.#updateDisabledState(cfStreamUploadState.getUploading());
            }
        }, 'saveWorkspaceActionUniqueObserver');
    }

    #updateDisabledState(uploading: boolean) {
        if (uploading) {
            this.disable();
        } else {
            this.enable();
        }
    }
}