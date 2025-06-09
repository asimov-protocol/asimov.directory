<script lang="ts">
	import { onMount } from 'svelte';
	import SourcesGrid from '../components/SourcesGrid.svelte';
	import type { DataSource } from '$lib/types.js';
	import sourcesData from '$lib/data/sources.json';

	let sources: DataSource[] = [];
	let loading = true;
	let error: string | null = null;

	async function loadSources() {
		try {
			loading = true;
			error = null;

			// Simulate API delay for now
			await new Promise((resolve) => setTimeout(resolve, 500));

			sources = sourcesData as DataSource[];
		} catch (err) {
			console.error('Error loading sources:', err);
			error = err instanceof Error ? err.message : 'Failed to load data sources';
			sources = [];
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		loadSources();
	});
</script>

<div class="bg-gGray-100 min-h-screen">
	<div class="container mx-auto px-4 py-8">
		<div class="mb-8">
			<h1 class="text-sSlate-800 mb-4 text-4xl font-bold">Data Sources</h1>
			<p class="text-gGray-500 max-w-2xl text-lg">
				Explore our comprehensive collection of supported data sources and endpoints for structured
				data extraction
			</p>
		</div>

		<SourcesGrid {sources} {loading} {error} />
	</div>
</div>
