<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import ModulesGrid from '../../components/ModulesGrid.svelte';
	import SortDropdown from '../../components/SortDropdown.svelte';
	import { createModulesQuery } from '$lib/queries/modules';
	import type { SortOption } from '$lib/types';

	$: sortOption = ($page.url.searchParams.get('sort') as SortOption) || 'relevant';

	// Create the query - this handles all the loading, error states, and data fetching
	$: modulesQuery = createModulesQuery(sortOption);

	$: isLoading = $modulesQuery.isLoading;
	$: isError = $modulesQuery.isError;
	$: error = $modulesQuery.error ? $modulesQuery.error.message || 'Unknown error' : null;
	$: data = $modulesQuery.data;
	$: modules = data?.modules || [];

	function handleSortChange(newSort: string) {
		const url = new URL($page.url);
		url.searchParams.set('sort', newSort);
		goto(url.toString(), { replaceState: true });
	}
</script>

<div class="bg-gGray-100 min-h-screen">
	<div class="container mx-auto px-4 py-8">
		<div class="mb-8">
			<h1 class="text-sSlate-800 mb-4 text-4xl font-bold">ASIMOV Modules</h1>
			<p class="text-gGray-500 max-w-2xl text-lg">
				Discover and explore our collection of modules from the ASIMOV ecosystem
			</p>
		</div>

		<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div class="flex justify-end">
				<SortDropdown value={sortOption} onChange={handleSortChange} />
			</div>
			<div class="text-gGray-500 text-sm">
				{#if !isLoading && !isError && data}
					{modules.length} module{modules.length !== 1 ? 's' : ''} found
				{/if}
			</div>
		</div>

		<ModulesGrid {modules} loading={isLoading} error={isError ? error || 'Unknown error' : null} />
	</div>
</div>
