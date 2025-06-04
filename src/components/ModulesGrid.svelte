<script lang="ts">
  import ModuleCard from './ModuleCard.svelte';
  import ModuleCardSkeleton from './ModuleCardSkeleton.svelte';
  import type { GitHubModule } from '../lib/types';

  export let modules: GitHubModule[] = [];
  export let loading = false;
  export let error: string | null = null;

  const skeletonCount = 12;
</script>

<div class="w-full">
  {#if error}
    <div class="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
      <p class="text-red-600 font-medium mb-2">Failed to load modules</p>
      <p class="text-red-500 text-sm">{error}</p>
    </div>
  {:else if loading}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each Array(skeletonCount) as _}
        <ModuleCardSkeleton />
      {/each}
    </div>
  {:else if modules.length === 0}
    <div class="rounded-lg border border-sSlate-200 bg-sSlate-100 p-12 text-center">
      <p class="text-sSlate-600 font-medium mb-2">No modules found</p>
      <p class="text-sSlate-400 text-sm">Try adjusting your search or filters</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each modules as module (module.id)}
        <ModuleCard {module} />
      {/each}
    </div>
  {/if}
</div>
