import { LitElement, html, unsafeCSS } from 'lit'
// import { customElement } from 'lit/decorators.js'

import styles from './styles.scss?inline';

// @customElement('my-hello')
export class MyHello extends LitElement {

  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="hello">Hello Component</div>
    `
  }

}
customElements.define('my-hello', MyHello);