<script lang="ts">
	import {
		Copy,
		Check,
		Globe,
		FileJs,
		GraphicsCard,
		AmazonLogo,
		FacebookLogo,
		GoogleLogo,
		InstagramLogo,
		LinkedinLogo,
		TwitterLogo,
		YoutubeLogo,
		ShoppingBag,
		Briefcase,
		Rocket,
		ChartLineUp,
		House,
		Package
	} from 'phosphor-svelte';
	import * as psl from 'psl';
	import type { DataSource } from '../lib/types';

	export let sources: DataSource[] = [];
	export let dataset: string;

	let showAll = false;
	let copiedStates: { [key: string]: boolean } = {};

	type DomainConfigType = {
		[key: string]: { name?: string; icon: typeof Globe };
	};

	const DOMAIN_CONFIG: DomainConfigType = {
		'airbnb.com': { icon: House },
		'amazon.com': { icon: AmazonLogo },
		'facebook.com': { icon: FacebookLogo },
		'instagram.com': { icon: InstagramLogo },
		'linkedin.com': { icon: LinkedinLogo },
		'twitter.com': { name: 'X (Twitter)', icon: TwitterLogo },
		'x.com': { name: 'X (Twitter)', icon: TwitterLogo },
		'youtube.com': { icon: YoutubeLogo },
		'google.com': { icon: GoogleLogo },
		'indeed.com': { icon: Briefcase },
		'ebay.com': { name: 'eBay', icon: ShoppingBag },
		'crunchbase.com': { icon: Rocket },
		'walmart.com': { icon: ShoppingBag },
		'yahoo.com': { icon: ChartLineUp }
	};

	function generateDisplayName(domain: string): string {
		try {
			const parsed = psl.parse(domain.toLowerCase().replace(/^www\./, ''));

			if (parsed.error || !parsed.domain) {
				return domain.charAt(0).toUpperCase() + domain.slice(1);
			}

			const domainName = parsed.domain.split('.')[0];

			return domainName
				.split('-')
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join(' ');
		} catch {
			return domain.charAt(0).toUpperCase() + domain.slice(1);
		}
	}

	function getDomainConfig(domain: string) {
		try {
			const parsed = psl.parse(domain.toLowerCase().replace(/^www\./, ''));
			const actualDomain = parsed.error || !parsed.domain ? domain : parsed.domain;

			const config = DOMAIN_CONFIG[actualDomain.toLowerCase()] || {};
			return {
				name: config.name || generateDisplayName(domain),
				icon: config.icon || Globe
			};
		} catch {
			const config = DOMAIN_CONFIG[domain.toLowerCase()] || {};
			return {
				name: config.name || generateDisplayName(domain),
				icon: config.icon || Globe
			};
		}
	}

	function groupSourcesByEndpoint(sources: DataSource[]) {
		const grouped: Record<string, DataSource[]> = {};
		for (const source of sources) {
			if (!grouped[source.url_prefix]) {
				grouped[source.url_prefix] = [];
			}
			grouped[source.url_prefix].push(source);
		}
		return Object.entries(grouped);
	}

	async function copyToClipboard(text: string, key: string) {
		try {
			await navigator.clipboard.writeText(text);
			copiedStates[key] = true;
			setTimeout(() => {
				copiedStates[key] = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}

	$: domainConfig = getDomainConfig(dataset);
	$: IconComponent = domainConfig.icon;
	$: displayName = domainConfig.name;
	$: hasRdf = sources.some((s) => s.rdf);
	$: hasJson = sources.some((s) => s.json);
	$: groupedEndpoints = groupSourcesByEndpoint(sources);
	$: displayedEndpoints = showAll ? groupedEndpoints : groupedEndpoints.slice(0, 3);
	$: hasMore = groupedEndpoints.length > 3;
	$: totalEndpoints = groupedEndpoints.length;
</script>

{#if sources.length > 0}
	<div
		class="group border-sSlate-200 hover:border-sSlate-300 relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-200 hover:shadow-md"
	>
		<div class="p-6 pb-4">
			<div class="mb-3 flex items-start justify-between">
				<div class="flex items-center space-x-3">
					<div
						class="from-sSlate-100 to-sSlate-200 text-sSlate-700 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br"
					>
						<svelte:component this={IconComponent} size={24} />
					</div>
					<div>
						<h3
							class="text-sSlate-900 group-hover:text-oOrange-600 font-semibold transition-colors"
						>
							{displayName}
						</h3>
						<p class="text-gGray-500 text-sm">{dataset}</p>
					</div>
				</div>

				<div class="flex items-center space-x-4">
					<div class="flex items-center space-x-2">
						{#if hasJson}
							<div
								class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600"
								title="JSON support"
							>
								<FileJs size={14} />
							</div>
						{/if}
						{#if hasRdf}
							<div
								class="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-50 text-purple-600"
								title="RDF support"
							>
								<GraphicsCard size={14} />
							</div>
						{/if}
					</div>

					<div class="text-right">
						<div class="text-sSlate-800 text-lg font-bold">{totalEndpoints}</div>
						<div class="text-gGray-400 -mt-1 text-xs">
							endpoint{totalEndpoints !== 1 ? 's' : ''}
						</div>
					</div>
				</div>
			</div>

			<div class="mb-4 flex items-center justify-between">
				<div class="flex items-center space-x-2">
					<div class="h-2 w-2 rounded-full bg-green-500"></div>
					<span class="text-gGray-500 text-xs">Live endpoints</span>
				</div>

				{#if hasMore && !showAll}
					<button
						on:click={() => (showAll = true)}
						class="text-oOrange-500 hover:text-oOrange-600 text-xs font-medium transition-colors"
					>
						View all {totalEndpoints}
					</button>
				{:else if showAll}
					<button
						on:click={() => (showAll = false)}
						class="text-gGray-500 hover:text-sSlate-600 text-xs font-medium transition-colors"
					>
						Show less
					</button>
				{/if}
			</div>
		</div>

		<div class="px-6 pb-6">
			<div class="space-y-3">
				{#each displayedEndpoints as [urlPrefix, endpointSources], index (urlPrefix)}
					<div
						class="group/endpoint border-sSlate-100 bg-sSlate-50/50 hover:border-sSlate-200 relative rounded-lg border p-4 transition-all hover:bg-white hover:shadow-sm"
					>
						<div class="mb-3 flex items-center justify-between">
							<code class="text-sSlate-700 block truncate font-mono text-sm">{urlPrefix}</code>
							<button
								on:click={() => copyToClipboard(urlPrefix, `${dataset}-${index}`)}
								class="border-sSlate-200 text-gGray-500 hover:text-sSlate-700 hover:border-sSlate-300 flex h-8 w-8 items-center justify-center rounded-lg border bg-white opacity-0 transition-all group-hover/endpoint:opacity-100"
								title="Copy endpoint"
								aria-label="Copy endpoint to clipboard"
							>
								{#if copiedStates[`${dataset}-${index}`]}
									<Check size={14} class="text-green-600" />
								{:else}
									<Copy size={14} />
								{/if}
							</button>
						</div>

						<div class="flex flex-wrap items-center gap-2">
							<span class="text-gGray-500 text-xs">Modules:</span>
							{#each endpointSources as source (source.module_name)}
								<a
									href="https://github.com/asimov-modules/{source.module_name}"
									class="bg-oOrange-50 text-oOrange-700 border-oOrange-200 hover:bg-oOrange-100 hover:border-oOrange-300 flex items-center space-x-1 rounded-full border px-2 py-1 text-xs transition-colors"
									title="Flows: {source.flows.join(', ') || 'None specified'}"
									target="_blank"
								>
									<Package size={12} />
									<span>{source.module_label}</span>
								</a>
							{/each}
						</div>

						<div class="mt-2 flex items-center space-x-2">
							{#each endpointSources as source (source.module_name)}
								<div class="flex items-center space-x-1">
									{#if source.json}
										<div class="h-1.5 w-1.5 rounded-full bg-blue-500" title="JSON"></div>
									{/if}
									{#if source.rdf}
										<div class="h-1.5 w-1.5 rounded-full bg-purple-500" title="RDF"></div>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/each}

				{#if hasMore && !showAll}
					<div class="flex items-center justify-center py-2">
						<div class="text-gGray-400 flex items-center space-x-2">
							<div class="bg-gGray-300 h-1 w-1 rounded-full"></div>
							<div class="bg-gGray-300 h-1 w-1 rounded-full"></div>
							<div class="bg-gGray-300 h-1 w-1 rounded-full"></div>
							<span class="text-xs">+{totalEndpoints - 3} more</span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
