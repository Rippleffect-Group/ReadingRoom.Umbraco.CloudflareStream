import { LitElement, html, nothing, PropertyValues, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HttpRequest, HttpResponse } from "tus-js-client";
import { CloudflareStreamService } from "../services/cloudflareStreamService.ts";
import { CloudflareStreamMediaStatus } from "../models/cloudflareStreamMediaStatus.ts";
import { Result } from "../models/result.ts";
import { Status } from "../models/status.ts";
import { Meta, Body, UppyFile } from "@uppy/core";
import byteSize from 'byte-size';
import { UUITextStyles } from '@umbraco-ui/uui-css';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { cfStreamUploadState } from '../common/cf-stream-upload-context.ts';
import { UMB_AUTH_CONTEXT, UmbAuthContext } from "@umbraco-cms/backoffice/auth";
import { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/property-editor";
import { UMB_NOTIFICATION_CONTEXT, type UmbNotificationDefaultData } from "@umbraco-cms/backoffice/notification";

interface CloudflareStreamValue {
    id: string;
    name: string;
    size: number;
    width: number;
    height: number;
    uploadDate?: string;
    duration: number;
    extension: string;
    isSigned?: boolean;
}

@customElement('cf-stream-editor')
export default class CloudflareStreamEditor extends UmbElementMixin(LitElement)
    implements UmbPropertyEditorUiElement {

    #authContext?: UmbAuthContext | undefined;
    #notificationContext?: typeof UMB_NOTIFICATION_CONTEXT.TYPE;
    
    @property({ attribute: false })
    public value?: CloudflareStreamValue;
    
    constructor() {
        super();

        this.consumeContext(UMB_AUTH_CONTEXT, (instance) => {
            this.#authContext = instance;
        });

        this.consumeContext(UMB_NOTIFICATION_CONTEXT, (instance) => {
            this.#notificationContext = instance;
        });
    }

    private _lockSave() {
        cfStreamUploadState.setUploading(true);
    }

    private _unlockSave() {
        cfStreamUploadState.setUploading(false);
    }

    @property()
    public videoId: string = '';
    @property()
    public customerDomain: string = '';
    @property()
    public dataTypeKey: string = "";

    @state()
    private details?: Result;
    @state()
    private uploadStatus?: Status;
    @state()
    private pendingVideoId?: string;
    @state()
    private loading: boolean = false;
    @state()
    private extension: string = "";
    @state()
    private notFound: boolean = false;
    @state()
    private previousVideoId: string = '';
    @state()
    private showDebug: boolean = false;
    @state()
    private enableDebug: boolean = false;

    private refreshInterval: number = 1000;
    private uploadUrl = CloudflareStreamService.initialiseEndpoint;
    private timeout?: number;

    static styles = [
        UUITextStyles,
        css
            `
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

    protected firstUpdated(_changedProperties: PropertyValues) {
        if (this.value?.id) {
            this.videoId = this.value.id;
            this._getStatus(this.videoId);
        }
    }

    protected updated(_changedProperties: PropertyValues) {
        if (_changedProperties.has('details')) {
            this._onModelChange();
        }

        if (_changedProperties.has('uploadStatus')) {
            const status = this.uploadStatus;
            if (status != null) {
                if (this._isUploadProcessing(status)) {
                    if (!this.timeout) {
                        this.timeout = setTimeout(async () => {
                            this.timeout = undefined;
                            await this._getStatus(this.videoId, false);
                        }, this.refreshInterval)
                    }
                }
            }
        }
    }

    private _beforeRequest(event: CustomEvent) {
        const request = event.detail.request as HttpRequest;
        const file = event.detail.file as UppyFile<Meta, Body>;
        if (request.getURL() === this.uploadUrl) {
            this.previousVideoId = '';
            this.extension = file.extension;
            this._lockSave();
            this.dispatchEvent(new CustomEvent('cf-stream-editor-uploading', {
                detail: {},
                bubbles: true,
                composed: true
            }));
        }
    }

    private async _uploadSuccess(event: CustomEvent) {
        event.stopPropagation();
        this._unlockSave();

        this.dispatchEvent(new CustomEvent('cf-stream-editor-uploaded', {
            detail: {
                videoId: this.pendingVideoId
            },
            bubbles: true,
            composed: true
        }));

        if (this.pendingVideoId) {
            await this._getStatus(this.pendingVideoId);
            this.requestUpdate();
        }
    }

    private _afterResponse(event: CustomEvent) {
        const response = event.detail.response as HttpResponse;
        this.pendingVideoId = response.getHeader('stream-media-id');
    }

    private _isUploadProcessing(status: Status) {
        return status?.State === CloudflareStreamMediaStatus.IN_PROGRESS || status?.State === CloudflareStreamMediaStatus.QUEUED
    }
    
    //@ts-ignore
    private _onError(event: CustomEvent) {
        const data: UmbNotificationDefaultData = {
            headline: `Upload Issue!`,
            message: `There has been an issue uploading your video to Cloudflare Stream. Check your configuration and try again.`,
        };
        this.#notificationContext?.peek("danger", { data });
        this._unlockSave();
    }

    private _undoCurrentVideo() {
        this.videoId = this.previousVideoId;
        this.previousVideoId = '';
        this._getStatus(this.videoId);
    }

    private _removeCurrentVideo() {
        this.previousVideoId = this.videoId;
        this.videoId = ''
        this.details = undefined;
        this.notFound = false;
        this.value = undefined;
        const event = new CustomEvent('cf-stream-editor-removed', {
            detail: {},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    private async _getStatus(videoId: string, toggleLoading: boolean = true) {
        if (toggleLoading) {
            this.loading = true;
        }
        
        let result: Result | undefined;
        try {
            const token = await this.#authContext?.getLatestToken();
            const response = await CloudflareStreamService.getVideoDetails(videoId, token ?? '');
            result = response?.Result;
        }
        catch (e: unknown)
        {
            const data: UmbNotificationDefaultData = {
                headline: `Cloudflare Stream Issue!`,
                message: `There was an issue retrieving the video details, please try again later.`,
            };
            this.#notificationContext?.peek("danger", { data });
            return;
        }
        

        if (toggleLoading) {
            this.loading = false;
        }

        if (!result) {
            this.notFound = true;
            return;
        }

        this.uploadStatus = result.Status;
        this.details = result;
        this.videoId = result.Uid
    }

    private _onModelChange() {
        const data = this.details;
        if (!data) {
            return;
        }
        const detail: CloudflareStreamValue = {
            id: data.Uid,
            size: data.Size,
            name: data.Meta.Name,
            width: data.Input.Width,
            height: data.Input.Height,
            uploadDate: data.Uploaded.toString(),
            duration: data.Duration,
            extension: this.extension
        };
        this._setValue(detail);
        
        const event = new CustomEvent('cf-stream-editor-updated', {
            detail: detail,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    private _setValue(newValue: CloudflareStreamValue) {
        this.value = newValue;
        this.dispatchEvent(new CustomEvent('property-value-change'));
    }

    private _renderUpload() {
        return html
            `
                <uui-box headline="Upload">
                    <uppy-upload endpoint="${this.uploadUrl}" 
                         @after-response="${this._afterResponse}"
                         @before-request="${this._beforeRequest}"
                         @upload-success="${this._uploadSuccess}"
                         @upload-error="${this._onError}">
                    </uppy-upload>
                </uui-box>
            `
    }

    private _renderVideo(data: Result) {
        const url = data.Playback.Frame;
        const size = `${byteSize(data.Size)}`
        return html
            `
                <uui-box headline="${data.Meta.Name} | ${size}">
                    <div class="cf-player-wrapper">
                        <iframe class="cf-player" src="${url}"
                                allow="accelerometer; gyroscope; autoplay; encrypted-media;">
                        </iframe>
                    </div>
                    <div class="cf-player-footer">
                        ${this._renderRemoveButton()}
                    </div>
                </uui-box>
            `
    }

    private _renderDebug() {
        if (!this.enableDebug) {
            return nothing;
        }
        const text = this.showDebug ? 'Hide Debug' : 'Show Debug';
        const button = html`
            <uui-button @click="${() => this.showDebug = !this.showDebug}" label="${text}"></uui-button>
        `;
        let content = null;
        if (this.showDebug) {
            content = html`
                <div class="alert alert-info">
                    <strong>Cloudflare API</strong>
                    <pre>${JSON.stringify(this.details, null, 2)}</pre>
                </div>
            `
        }
        return html`
            <uui-box style="margin-top: 30px">
                ${button}
                ${content}
            </uui-box>
        `;
    }

    private _renderRemoveButton() {
        return html`
            <uui-button @click="${this._removeCurrentVideo}" look="primary" color="danger" label="Remove"></uui-button>
        `
    }

    private _renderUndoAlert() {
        return html`
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
        `
    }

    protected render() {
        if (this.notFound) {
            return html
                `
                    <rr-alert type="danger" headline="Video not found" hideIcon="true">
                        <div slot="content">
                            <p>The video may have been deleted from Cloudflare</p>
                        </div>
                    </rr-alert>
                    ${this._renderRemoveButton()}
                `;
        }

        if (this.uploadStatus && this._isUploadProcessing(this.uploadStatus)) {
            let progress = parseInt(this.uploadStatus.PctComplete) || 0;
            let x = 5
            progress = Math.round(progress / x) * x;
            return html
                `
                    <uui-box headline="Processing ${progress}%">
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
                        <uui-loader-bar animationDuration="1.5" progress="${progress}"></uui-loader-bar>
                    </uui-box>
                `;
        }
        if (this.loading) {
            return html
                `
                    <uui-loader-bar animationDuration="1.5"></uui-loader-bar>
                `;
        }

        const showUpload = this.videoId === '';
        const data = this.details;
        return html
            `
                ${this.previousVideoId ? this._renderUndoAlert() : nothing}
                ${data ? this._renderVideo(data) : nothing}
                ${showUpload ? this._renderUpload() : nothing}
                ${this._renderDebug()}
            `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'cf-stream-editor': CloudflareStreamEditor;
    }
}