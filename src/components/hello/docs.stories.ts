// src/components/button/button.stories.ts
import { html } from 'lit';
import './component.ts'; // Importe o componente

export default {
  title: 'Components/Hello', // Título da sua história
  argTypes: {}, // Argumentos ou configurações opcionais do Storybook
};

export const Default = () => html`
  <my-hello></my-hello>
`;