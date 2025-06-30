<script lang="ts">
	import SourcesGrid from '../components/SourcesGrid.svelte';
	import { createSourcesQuery } from '$lib/queries/sources';

	const sourcesQuery = createSourcesQuery();

	$: isLoading = $sourcesQuery.isLoading;
	$: isError = $sourcesQuery.isError;
	$: error = $sourcesQuery.error ? $sourcesQuery.error.message || 'Unknown error' : null;
	$: data = $sourcesQuery.data;
	$: sources = data?.sources || [];
</script>

<svelte:head>
	<title>ASIMOV.Directory - Discover ASIMOV Ecosystem Modules & Data Sources</title>
	<meta
		name="description"
		content="Explore our comprehensive collection of supported data sources and endpoints for structured data extraction from ASIMOV modules. Discover APIs, databases, and web services."
	/>
	<meta
		name="keywords"
		content="data sources, API endpoints, data extraction, ASIMOV modules, supported sources, web services, APIs, databases"
	/>
	<link rel="canonical" href="https://asimov.directory/" />

	<meta
		property="og:title"
		content="ASIMOV.Directory - Discover ASIMOV Ecosystem Modules & Data Sources"
	/>
	<meta
		property="og:description"
		content="Explore our comprehensive collection of supported data sources and endpoints for structured data extraction from ASIMOV modules."
	/>
	<meta property="og:url" content="https://asimov.directory/" />

	<meta
		name="twitter:title"
		content="ASIMOV.Directory - Discover ASIMOV Ecosystem Modules & Data Sources"
	/>
	<meta
		name="twitter:description"
		content="Explore our comprehensive collection of supported data sources and endpoints for structured data extraction from ASIMOV modules."
	/>
</svelte:head>

<div class="bg-gGray-100 min-h-screen">
	<div class="container mx-auto px-4 py-8">
		<div class="mb-8">
			<h1 class="text-sSlate-800 mb-4 text-4xl font-bold">Data Sources</h1>
			<p class="text-gGray-500 max-w-2xl text-lg">
				Explore our comprehensive collection of supported data sources and endpoints for structured
				data extraction from ASIMOV modules
			</p>
		</div>

		<SourcesGrid {sources} loading={isLoading} error={isError ? error || 'Unknown error' : null} />
	</div>
</div>
