import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			out: 'build'
		}),
		// Disable CSRF origin checking globally (less secure but fixes the issue)
		csrf: {
			checkOrigin: false
		},
		csp: {
			mode: 'auto'
		}
	}
};

export default config;
