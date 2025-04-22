import {LitElement, html, PropertyValues, unsafeCSS, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import Dashboard from "@uppy/dashboard";
import Tus from "@uppy/tus";
import {query} from 'lit/decorators/query.js';
import UppyCss from '@uppy/core/dist/style.min.css?inline';
import UppyDashboardCss from '@uppy/dashboard/dist/style.min.css?inline';
import {HttpRequest, HttpResponse} from "tus-js-client";
import {Meta, Body, Uppy, UppyFile} from "@uppy/core";

@customElement('uppy-upload')
export default class UpplyUpload extends LitElement {

    @property()
    endpoint = '';
    private selector: string = 'drag-drop-area'
    @query(".uppy")
    uppyElement: HTMLElement | undefined;

    @property()
    chunkSize = 52428800;
    @property()
    maxSize = (1024 * 1024 * 1024) * 25; // (1GB) * 25
    @property()
    resumable = false;
    @property()
    height = 360;
    @property()
    width = 640;

    static styles = [unsafeCSS(UppyDashboardCss), unsafeCSS(UppyCss), css`
        .uppy-Dashboard-browse {
            color: #2bc37c;
        }

        .uppy-Dashboard-browse:hover {
            border-bottom: 1px solid #2bc37c;
        }
    `];

    protected render(): unknown {
        return html
            `
                <div class="uppy" id="${this.selector}"></div>
            `
    }

    private onUploadSuccess(file: UppyFile<Meta, Body> | undefined, response: NonNullable<UppyFile<Meta, Body>['response']>) {
        const event =
            new CustomEvent('upload-success', {
                detail: {
                    file: file,
                    response: response
                }
            });
        this.dispatchEvent(event);
    };

    private onAfterResponse(req: HttpRequest, res: HttpResponse): Promise<void> {
        return new Promise((resolve) => {
            const event =
                new CustomEvent('after-response', {
                    detail: {
                        request: req,
                        response: res
                    }
                });
            this.dispatchEvent(event);
            resolve();
        });
    }

    private onBeforeRequest(req: HttpRequest, file: UppyFile<Meta, Body>): Promise<void> {
        return new Promise((resolve) => {
            const event =
                new CustomEvent('before-request', {
                    detail: {
                        request: req,
                        file: file
                    }
                });
            this.dispatchEvent(event);
            resolve();
        });
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        const uppy = new Uppy({
            debug: false,
            autoProceed: false,
            allowMultipleUploadBatches: false,
            restrictions: {
                maxFileSize: this.maxSize,
                maxNumberOfFiles: 1,
                minNumberOfFiles: 1,
                allowedFileTypes: ['video/*']
            }
        });

        uppy
            .use(Dashboard, {
                target: this.uppyElement,
                inline: true,
                height: this.height,
                width: this.width,
                singleFileFullScreen: true,
                proudlyDisplayPoweredByUppy: false,
            })
            .use(Tus, {
                endpoint: this.endpoint,
                chunkSize: this.chunkSize,
                onAfterResponse: (req, res) => this.onAfterResponse(req, res),
                onBeforeRequest: (req, file) => this.onBeforeRequest(req, file),
                // @ts-ignore
                canStoreURLs: this.resumable,
                removeFingerprintOnSuccess: !this.resumable
            })
            .on('upload-success', (file, response) => this.onUploadSuccess(file, response));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'uppy-upload': UpplyUpload;
    }
}