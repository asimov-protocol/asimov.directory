import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
	base: '/',
	plugins: [
		tailwindcss(),
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					src: path.resolve(__dirname, 'CNAME'),
					dest: '.'
				}
			]
		})
	]
});
