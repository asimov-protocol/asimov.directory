import { x as push, M as escape_html, z as pop, N as getContext } from './index-BIOYGULa.js';
import { s as stores } from './client-ysh9z5eC.js';
import './exports-CbhJovf4.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-CyDSrxao.js.map
