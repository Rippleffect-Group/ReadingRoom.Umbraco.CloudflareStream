import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UmbFormControlMixin } from '@umbraco-cms/backoffice/validation';
import { UMB_PROPERTY_CONTEXT } from '@umbraco-cms/backoffice/property';
import type { UmbPropertyEditorConfigCollection, UmbPropertyEditorUiElement } from '@umbraco-cms/backoffice/property-editor';

import '@umbraco-cms/backoffice/media';

const elementName = 'cf-stream-media-picker';

@customElement(elementName)
export class CfStreamMediaPickerElement
    extends UmbFormControlMixin(UmbLitElement)
    implements UmbPropertyEditorUiElement
{
    @property({ type: Boolean }) mandatory?: boolean;
    @property({ type: String }) mandatoryMessage = '';
    @property({ type: Boolean, reflect: true }) readonly = false;

    @state() private _allowedMediaTypes: string[] = [];
    @state() private _focalPointEnabled = false;
    @state() private _preselectedCrops: any[] = [];
    @state() private _multiple = false;
    @state() private _min = 0;
    @state() private _max = Infinity;
    @state() private _startNode?: { unique: string; entityType: string };
    @state() private _alias?: string;
    @state() private _variantId?: string;

    set config(config: UmbPropertyEditorConfigCollection | undefined) {
        if (!config) return;
        this._allowedMediaTypes = config.getValueByAlias<string>('filter')?.split(',') ?? [];
        this._focalPointEnabled = Boolean(config.getValueByAlias('enableLocalFocalPoint'));
        this._multiple = Boolean(config.getValueByAlias('multiple'));
        this._preselectedCrops = config.getValueByAlias('crops') ?? [];
        const startNodeId = config.getValueByAlias<string>('startNodeId') ?? '';
        this._startNode = startNodeId ? { unique: startNodeId, entityType: 'media' } : undefined;
        const minMax = config.getValueByAlias<any>('validationLimit');
        this._min = minMax?.min ?? 0;
        this._max = minMax?.max ?? Infinity;
    }

    constructor() {
        super();
        this.consumeContext(UMB_PROPERTY_CONTEXT, (context: any) => {
            this.observe(context?.alias, (alias: string) => (this._alias = alias));
            this.observe(context?.variantId, (variantId: any) => (this._variantId = variantId?.toString() || 'invariant'));
        });
    }

    #onChange(event: Event) {
        const target = event.target as any;
        const isEmpty = target.value?.length === 0;
        this.value = isEmpty ? undefined : target.value;
        this.dispatchEvent(new Event('change'));
    }

    render() {
        return html`
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
                @change=${this.#onChange}
                ?readonly=${this.readonly}>
            </umb-input-rich-media>
        `;
    }
}

export default CfStreamMediaPickerElement;
