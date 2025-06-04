<script lang="ts">
  import { onMount } from 'svelte';
  import ModulesGrid from '../components/ModulesGrid.svelte';
  import type { GitHubModule } from '$lib/types.js';

  let modules: GitHubModule[] = [];
  let loading = true;
  let error: string | null = null;

  async function loadModules() {
    try {
      loading = true;
      error = null;

      const response = await fetch('/api/modules');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to load modules');
      }

      modules = data.modules;
    } catch (err) {
      console.error('Error loading modules:', err);
      error = err instanceof Error ? err.message : 'Failed to load modules';
      modules = [];
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadModules();
  });
</script>

<div class="min-h-screen bg-gGray-100">
  <div class="container mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-sSlate-800 mb-4">ASIMOV Modules</h1>
      <p class="text-lg text-gGray-500 max-w-2xl">
        Discover and explore our collection of modules from the ASIMOV ecosystem
      </p>
    </div>

    <!-- Modules Grid -->
    <ModulesGrid {modules} {loading} {error} />
  </div>
</div>
