<script lang="ts">
  import { onMount } from 'svelte';
  import ModulesGrid from '../components/ModulesGrid.svelte';
  import SortDropdown from '../components/SortDropdown.svelte';
  import type { GitHubModule } from '$lib/types.js';

  let modules: GitHubModule[] = [];
  let loading = true;
  let error: string | null = null;
  let currentSort = 'relevant';

  async function loadModules(sort: string = 'relevant') {
    try {
      loading = true;
      error = null;

      const params = new URLSearchParams();
      params.set('sort', sort);

      const response = await fetch(`/api/modules?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to load modules');
      }

      modules = data.modules;
      currentSort = sort;
    } catch (err) {
      console.error('Error loading modules:', err);
      error = err instanceof Error ? err.message : 'Failed to load modules';
      modules = [];
    } finally {
      loading = false;
    }
  }

  function handleSortChange(newSort: string) {
    if (newSort !== currentSort) {
      loadModules(newSort);
    }
  }

  onMount(() => {
    loadModules();
  });
</script>

<div class="min-h-screen bg-gGray-100">
  <div class="container mx-auto px-4 py-8">

    <div class="mb-8">
      <h1 class="text-4xl font-bold text-sSlate-800 mb-4">ASIMOV Modules</h1>
      <p class="text-lg text-gGray-500 max-w-2xl">
        Discover and explore our collection of modules from the ASIMOV ecosystem
      </p>
    </div>

    <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="flex justify-end">
        <SortDropdown
          value={currentSort}
          onChange={handleSortChange}
        />
      </div>
      <div class="text-sm text-gGray-500">
        {#if !loading && !error}
          {modules.length} module{modules.length !== 1 ? 's' : ''} found
        {/if}
      </div>
    </div>

    <ModulesGrid {modules} {loading} {error} />
  </div>
</div>
