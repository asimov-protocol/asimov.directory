<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import Star from 'phosphor-svelte/lib/Star';
	import Users from 'phosphor-svelte/lib/Users';
	import { githubApi, formatStars } from '../lib/github';
	import { directoryGithubUrl, asimovProtocolOrgUrl } from '../lib/config';

	interface Props {
		variant?: 'desktop' | 'mobile';
	}

	let { variant = 'desktop' }: Props = $props();

	const githubStatsQuery = createQuery({
		queryKey: ['github-stats'],
		queryFn: () => githubApi.fetchGitHubStats(),
		staleTime: 10 * 60 * 1000,
		gcTime: 20 * 60 * 1000,
		retry: 1
	});

	const containerClass =
		variant === 'desktop'
			? 'flex items-center gap-3'
			: 'flex items-center justify-center gap-4 py-2';

	const linkClass =
		variant === 'desktop'
			? 'group flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white/80 px-3 py-1.5 text-sm transition-all hover:border-orange-200 hover:bg-orange-50'
			: 'flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm';

	const iconClass =
		variant === 'desktop' ? 'text-gray-500 group-hover:text-orange-600' : 'text-gray-500';

	const textClass =
		variant === 'desktop'
			? 'font-medium text-gray-700 group-hover:text-orange-700'
			: 'font-medium text-gray-700';

	const loadingContainerClass =
		variant === 'desktop'
			? 'flex items-center gap-3'
			: 'flex items-center justify-center gap-4 py-2';
</script>

{#if $githubStatsQuery.data}
	<div class={containerClass}>
		<a href={directoryGithubUrl} target="_blank" rel="noopener noreferrer" class={linkClass}>
			<Star size={14} class={iconClass} />
			<span class={textClass}>
				{formatStars($githubStatsQuery.data.stars)}
			</span>
		</a>
		<a href={asimovProtocolOrgUrl} target="_blank" rel="noopener noreferrer" class={linkClass}>
			<Users size={14} class={iconClass} />
			<span class={textClass}>
				{formatStars($githubStatsQuery.data.followers)}
			</span>
		</a>
	</div>
{:else if $githubStatsQuery.isLoading}
	<div class={loadingContainerClass}>
		<div class="animate-pulse rounded-lg bg-gray-200 px-3 py-1.5">
			<div class="h-4 w-8 rounded bg-gray-300"></div>
		</div>
		<div class="animate-pulse rounded-lg bg-gray-200 px-3 py-1.5">
			<div class="h-4 w-8 rounded bg-gray-300"></div>
		</div>
	</div>
{/if}
