<script lang="ts">
	import type { GitHubModule } from '../lib/types';
	import Star from 'phosphor-svelte/lib/Star';
	import Users from 'phosphor-svelte/lib/Users';
	import Calendar from 'phosphor-svelte/lib/Calendar';
	import Globe from 'phosphor-svelte/lib/Globe';
	import Crates from './icons/Crates.svelte';
	import PyPI from './icons/Pypi.svelte';
	import RubyGems from './icons/Rubygems.svelte';
	import NPM from './icons/Npm.svelte';
	import Github from './icons/Github.svelte';

	export let module: GitHubModule;

	const LANGUAGE_COLORS: Record<string, string> = {
		JavaScript: '#f1e05a',
		TypeScript: '#2b7489',
		Python: '#3572A5',
		Java: '#b07219',
		Go: '#00ADD8',
		Rust: '#dea584',
		PHP: '#4F5D95'
	};

	const LINK_PROVIDERS = [
		{
			pattern: 'github.com',
			icon: Github,
			color: 'text-gray-800',
			title: 'GitHub'
		},
		{
			pattern: 'crates.io',
			icon: Crates,
			color: 'text-green-600',
			title: 'Crates.io'
		},
		{
			pattern: 'pypi.org',
			icon: PyPI,
			color: 'text-blue-600',
			title: 'PyPI'
		},
		{
			pattern: 'rubygems.org',
			icon: RubyGems,
			color: 'text-red-600',
			title: 'RubyGems'
		},
		{
			pattern: 'npmjs.com',
			icon: NPM,
			color: 'text-red-500',
			title: 'npm'
		}
	];

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	function getLanguageColor(language: string | null): string {
		return LANGUAGE_COLORS[language || ''] || '#6a7ca2';
	}

	function getLinkProvider(url: string) {
		const domain = url.toLowerCase();
		const provider = LINK_PROVIDERS.find((p) => domain.includes(p.pattern));

		return (
			provider || {
				icon: Globe,
				color: 'text-gray-500',
				title: getHostname(url)
			}
		);
	}

	function getHostname(url: string): string {
		try {
			return new URL(url).hostname;
		} catch {
			return 'External Link';
		}
	}

	$: displayName = module.metadata?.label || module.name;
	$: description = module.metadata?.summary || module.description || 'No description available';
	$: visibleTopics = module.topics.slice(0, 3);
	$: extraTopicsCount = Math.max(0, module.topics.length - 3);
	$: visibleLinks = module.metadata?.links?.slice(0, 5) || [];
	$: extraLinksCount = Math.max(0, (module.metadata?.links?.length || 0) - 5);
	$: hasTopics = module.topics.length > 0;
	$: hasLinks = module.metadata?.links && module.metadata.links.length > 0;
	$: hasLanguage = !!module.language;
	$: hasContributors = !!module.contributors_count;
</script>

<div
	class="group border-sSlate-200 hover:border-sSlate-300 relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
>
	<div class="mb-4 flex items-start justify-between">
		<div class="flex items-center space-x-3">
			<img src={module.owner.avatar_url} alt={module.owner.login} class="h-8 w-8 rounded-full" />
			<div>
				<h3 class="text-sSlate-800 group-hover:text-oOrange-500 font-medium transition-colors">
					{displayName}
				</h3>
				<p class="text-gGray-400 text-sm">{module.owner.login}</p>
			</div>
		</div>

		<div class="text-gGray-400 flex items-center space-x-1">
			<Star size={16} />
			<span class="text-sm font-medium">{module.stargazers_count}</span>
		</div>
	</div>

	<p class="text-gGray-500 mb-4 line-clamp-2 text-sm leading-relaxed">
		{description}
	</p>

	{#if hasTopics}
		<div class="mb-4 flex flex-wrap gap-2">
			{#each visibleTopics as topic (topic)}
				<span
					class="bg-sSlate-100 text-sSlate-600 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
				>
					{topic}
				</span>
			{/each}
			{#if extraTopicsCount > 0}
				<span
					class="bg-gGray-100 text-gGray-400 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
				>
					+{extraTopicsCount}
				</span>
			{/if}
		</div>
	{/if}

	{#if hasLinks}
		<div class="mb-4 flex items-center space-x-2">
			<span class="text-gGray-400 text-xs font-medium">Links:</span>
			<div class="flex items-center space-x-2">
				{#each visibleLinks as link (link)}
					{@const provider = getLinkProvider(link)}
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						class="relative z-20 transition-transform hover:scale-110 {provider.color}"
						title={provider.title}
						on:click|stopPropagation
					>
						<svelte:component this={provider.icon} className="w-5 h-5" />
					</a>
				{/each}
				{#if extraLinksCount > 0}
					<span class="text-gGray-400 text-xs">+{extraLinksCount}</span>
				{/if}
			</div>
		</div>
	{/if}

	<div class="text-gGray-400 flex items-center justify-between text-xs">
		<div class="flex items-center space-x-4">
			{#if hasLanguage}
				<div class="flex items-center space-x-1">
					<div
						class="h-3 w-3 rounded-full"
						style="background-color: {getLanguageColor(module.language)}"
					></div>
					<span>{module.language}</span>
				</div>
			{/if}

			{#if hasContributors}
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
