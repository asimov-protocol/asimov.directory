<script lang="ts">
	import SourceCard from './SourceCard.svelte';
	import SearchBar from './SearchBar.svelte';
	import type { DataSource } from '../lib/types';

	export let sources: DataSource[] = [];
	export let loading = false;
	export let error: string | null = null;

	let searchQuery = '';

	$: groupedSources = sources.reduce(
		(acc, source) => {
			if (!acc[source.dataset]) {
				acc[source.dataset] = [];
			}
			acc[source.dataset].push(source);
			return acc;
		},
		{} as Record<string, DataSource[]>
	);

	$: filteredGroups = Object.entries(groupedSources).filter(([dataset, sources]) => {
		if (!searchQuery.trim()) return true;

		const query = searchQuery.toLowerCase();
		return (
			dataset.toLowerCase().includes(query) ||
			sources.some(
				(source) =>
					source.url_prefix.toLowerCase().includes(query) ||
					source.dataset.toLowerCase().includes(query)
			)
		);
	});

	$: totalSources = filteredGroups.length;
	$: totalEndpoints = filteredGroups.reduce((sum, [, sources]) => sum + sources.length, 0);
</script>

<div class="w-full space-y-6">
	<div class="max-w-md">
		<SearchBar bind:value={searchQuery} placeholder="Search data sources and endpoints..." />
	</div>

	{#if !loading && !error}
		<div class="flex items-center justify-between">
			<div class="text-gGray-500 text-sm">
				{#if searchQuery}
					Found <span class="text-sSlate-800 font-medium">{totalSources}</span> sources with
					<span class="text-sSlate-800 font-medium">{totalEndpoints}</span> endpoints
				{:else}
					Showing <span class="text-sSlate-800 font-medium">{totalSources}</span> sources with
					<span class="text-sSlate-800 font-medium">{totalEndpoints}</span> endpoints
				{/if}
			</div>
		</div>
	{/if}

	{#if error}
		<div class="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
			<p class="mb-2 font-medium text-red-600">Failed to load data sources</p>
			<p class="text-sm text-red-500">{error}</p>
		</div>
	{:else if loading}
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each [...Array(12).keys()] as index (index)}
				<div class="border-sSlate-200 overflow-hidden rounded-lg border bg-white p-6 shadow-sm">
					<div class="mb-4 flex items-start justify-between">
						<div class="flex items-center space-x-3">
							<div class="bg-gGray-100 h-10 w-10 animate-pulse rounded-lg"></div>
							<div>
								<div class="bg-gGray-100 mb-1 h-4 w-24 animate-pulse rounded"></div>
								<div class="bg-gGray-100 h-3 w-16 animate-pulse rounded"></div>
							</div>
						</div>
						<div class="bg-gGray-100 h-4 w-8 animate-pulse rounded"></div>
					</div>
					<div class="bg-gGray-100 mb-4 h-3 w-full animate-pulse rounded"></div>
					<div class="flex items-center justify-between">
						<div class="flex space-x-3">
							<div class="bg-gGray-100 h-3 w-12 animate-pulse rounded"></div>
							<div class="bg-gGray-100 h-3 w-12 animate-pulse rounded"></div>
						</div>
						<div class="bg-gGray-100 h-3 w-8 animate-pulse rounded"></div>
					</div>
				</div>
			{/each}
		</div>
	{:else if filteredGroups.length === 0}
		<div class="border-sSlate-200 bg-sSlate-100 rounded-lg border p-12 text-center">
			{#if searchQuery}
				<p class="text-sSlate-600 mb-2 font-medium">No sources found</p>
				<p class="text-sSlate-400 text-sm">Try adjusting your search terms</p>
			{:else}
				<p class="text-sSlate-600 mb-2 font-medium">No data sources found</p>
				<p class="text-sSlate-400 text-sm">Check back later for available sources</p>
			{/if}
		</div>
	{:else}
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredGroups as [dataset, sources] (dataset)}
				<SourceCard {sources} {dataset} />
			{/each}
		</div>
	{/if}
</div>
