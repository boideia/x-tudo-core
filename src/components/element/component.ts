import { LitElement, html, unsafeCSS } from 'lit'
// import { customElement } from 'lit/decorators.js'

import styles from './styles.scss?inline';

// @customElement('my-element')
export default class MyElement extends LitElement {

  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="element">Hello Component</div>
    `
  }

}

customElements.define('my-element', MyElement);