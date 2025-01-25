import { mount } from 'svelte'
import { Buffer } from 'buffer';
import '@near-wallet-selector/modal-ui-js/styles.css';
import './app.css'
import App from './App.svelte'

if (typeof global === "undefined") {
  window.global = window as unknown as typeof globalThis & NodeJS.Global;
}
window.Buffer = Buffer;

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
