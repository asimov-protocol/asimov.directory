import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import nodePolyfills from 'rollup-plugin-polyfill-node';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), nodePolyfills()],
  resolve: {
    alias: {
      buffer: "buffer",
    },
  },
  define: {
    global: "globalThis",
  },
})
