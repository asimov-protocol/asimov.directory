<script lang="ts">
  import { Star, Users, Calendar } from 'phosphor-svelte';
  import type { GitHubModule } from '$lib/types.js';

  export let module: GitHubModule;

  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function getLanguageColor(language: string | null): string {
    const colors: Record<string, string> = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      Go: '#00ADD8',
      Rust: '#dea584',
      PHP: '#4F5D95'
    };
    return colors[language || ''] || '#6a7ca2';
  }
</script>

<div class="group relative overflow-hidden rounded-lg border border-sSlate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-sSlate-300">
  <!-- Header -->
  <div class="mb-4 flex items-start justify-between">
    <div class="flex items-center space-x-3">
      <img
        src={module.owner.avatar_url}
        alt={module.owner.login}
        class="h-8 w-8 rounded-full"
      />
      <div>
        <h3 class="font-medium text-sSlate-800 group-hover:text-oOrange-500 transition-colors">
          {module.name}
        </h3>
        <p class="text-sm text-gGray-400">{module.owner.login}</p>
      </div>
    </div>

    <!-- Stars -->
    <div class="flex items-center space-x-1 text-gGray-400">
      <Star size={16} />
      <span class="text-sm font-medium">{module.stargazers_count}</span>
    </div>
  </div>

  <!-- Description -->
  <p class="mb-4 text-sm text-gGray-500 line-clamp-2 leading-relaxed">
    {module.description || 'No description available'}
  </p>

  <!-- Topics/Tags -->
  {#if module.topics.length > 0}
    <div class="mb-4 flex flex-wrap gap-2">
      {#each module.topics.slice(0, 3) as topic}
        <span class="inline-flex items-center rounded-full bg-sSlate-100 px-2.5 py-0.5 text-xs font-medium text-sSlate-600">
          {topic}
        </span>
      {/each}
      {#if module.topics.length > 3}
        <span class="inline-flex items-center rounded-full bg-gGray-100 px-2.5 py-0.5 text-xs font-medium text-gGray-400">
          +{module.topics.length - 3}
        </span>
      {/if}
    </div>
  {/if}

  <!-- Footer -->
  <div class="flex items-center justify-between text-xs text-gGray-400">
    <div class="flex items-center space-x-4">
      {#if module.language}
        <div class="flex items-center space-x-1">
          <div
            class="h-3 w-3 rounded-full"
            style="background-color: {getLanguageColor(module.language)}"
          ></div>
          <span>{module.language}</span>
        </div>
      {/if}

      {#if module.contributors_count}
        <div class="flex items-center space-x-1">
          <Users size={12} />
          <span>{module.contributors_count}</span>
        </div>
      {/if}
    </div>

    <div class="flex items-center space-x-1">
      <Calendar size={12} />
      <span>Updated {formatDate(module.updated_at)}</span>
    </div>
  </div>

  <!-- Click overlay -->
  <a
    href={module.html_url}
    target="_blank"
    rel="noopener noreferrer"
    class="absolute inset-0 z-10"
    aria-label="View {module.name} on GitHub"
  ></a>
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
