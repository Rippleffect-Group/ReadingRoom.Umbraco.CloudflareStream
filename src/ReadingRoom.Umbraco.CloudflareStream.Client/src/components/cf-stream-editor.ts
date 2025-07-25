import {LitElement, html, nothing, PropertyValues, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {HttpRequest, HttpResponse} from "tus-js-client";
import {CloudflareStreamService} from "../services/cloudflareStreamService.ts";
import {CloudflareStreamMediaStatus} from "../models/cloudflareStreamMediaStatus.ts";
import {Result} from "../models/result.ts";
import {Status} from "../models/status.ts";
import {Meta, Body, UppyFile} from "@uppy/core";
import byteSize from 'byte-size';
import {UUITextStyles} from '@umbraco-ui/uui-css';

@customElement('cf-stream-editor')
export default class CloudflareStreamEditor extends LitElement {
    constructor() {
        super();
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
        if (this.videoId) {
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
            request.setHeader("Upload-DataType", `${this.dataTypeKey}`);
            this.dispatchEvent(new CustomEvent('cf-stream-editor-uploading', {
                detail: {},
                bubbles: true,
                composed: true
            }));
        }
    }

    private async _uploadSuccess(event: CustomEvent) {
        event.stopPropagation();

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

        const response = await CloudflareStreamService.getVideoDetails(videoId);
        const result = response?.Result;

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
        const event = new CustomEvent('cf-stream-editor-updated', {
            detail: {
                id: data.Uid,
                size: data.Size,
                name: data.Meta.Name,
                width: data.Input.Width,
                height: data.Input.Height,
                uploadDate: data.Uploaded,
                duration: data.Duration,
                extension: this.extension
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    private _renderUpload() {
        return html
            `
                <uui-box headline="Upload">
                    <uppy-upload endpoint="${this.uploadUrl}" @after-response="${this._afterResponse}"
                                 @before-request="${this._beforeRequest}"
                                 @upload-success="${this._uploadSuccess}"></uppy-upload>
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