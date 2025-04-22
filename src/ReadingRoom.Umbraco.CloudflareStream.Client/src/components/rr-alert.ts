import {customElement, property} from "lit/decorators.js";
import {css, html, LitElement, nothing} from "lit";
import {UUITextStyles} from "@umbraco-ui/uui-css";

@customElement('rr-alert')
export class Alert extends LitElement {

    @property()
    type: string = 'info'

    @property()
    hideIcon: boolean = false

    @property()
    headline?: string

    static styles = [
        UUITextStyles,
        css
            `
                .alert {
                    padding: 0.5rem 1rem;
                    border: 1px solid transparent;
                    border-radius: 0.25rem;
                    display: flex;
                    margin-bottom: 1rem;
                }

                .alert-icon {
                    align-self: center;
                    margin-left: -0.25rem;
                    margin-right: 0.5rem;
                    font-size: 1.25rem;
                }

                .alert-info {
                    background-color: #d1ecf1;
                    border-color: #bee5eb;
                    color: #0c5460;
                }
                
                .alert-heading {
                    font-size: 1.25rem;
                    font-weight: bold;
                }

                .alert-warning {
                    background-color: var(--uui-color-warning-emphasis);
                    border-color: var(--uui-color-warning);
                    color: #856404;
                }

                .alert-positive {
                    background-color: #d4edda;
                    border-color: #c3e6cb;
                    color: #155724;
                }

                .alert-danger {
                    background-color: #f8d7da;
                    border-color: #f5c6cb;
                    color: #721c24;
                }
            `
    ];

    private icon() {
        if (this.hideIcon) {
            return undefined;
        }

        switch (this.type) {
            case 'info':
                return '💡'
            case 'warning':
                return '⚠️'
            case 'danger':
                return '❌'
            case 'positive':
                return '✅'
            default:
                return '💡'
        }
    }

    render() {
        return html`
            <div class="alert alert-${this.type}">
                ${this.icon() ? html
                        `
                            <div class="alert-icon">${this.icon()}</div>
                        ` : nothing}
                <div class="alert-content">
                    ${this.headline ? html
                            `
                                <p class="alert-heading">${this.headline}</p>
                            ` : nothing}
                    <slot name="content"></slot>
                </div>
            </div>`
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'rr-alert': Alert;
    }
}