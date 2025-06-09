import { X as hasContext, N as getContext } from './index-BIOYGULa.js';

let contextKey = Symbol("phosphor-svelte");
function getIconContext() {
  if (hasContext(contextKey)) {
    return getContext(contextKey);
  }
  return {};
}

export { getIconContext as g };
//# sourceMappingURL=context-CIYqVsWA.js.map
