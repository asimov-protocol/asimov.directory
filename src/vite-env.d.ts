/// <reference types="svelte" />
/// <reference types="vite/client" />

declare global {
  interface Window {
    Buffer: typeof Buffer;
    global: typeof globalThis;
  }
}

export {};
