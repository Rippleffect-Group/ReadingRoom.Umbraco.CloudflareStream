import { UmbBooleanState } from '@umbraco-cms/backoffice/observable-api';

// Module-level singleton — shared directly between the editor and the action
// No DOM context needed since they can't share DOM ancestry
const _uploadingState = new UmbBooleanState(false);

export const cfStreamUploadState = {
    uploading: _uploadingState.asObservable(),
    setUploading: (value: boolean) => _uploadingState.setValue(value),
    getUploading: () => _uploadingState.getValue(),
};