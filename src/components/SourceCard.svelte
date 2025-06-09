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
		House
	} from 'phosphor-svelte';
	import type { DataSource } from '../lib/types';

	export let sources: DataSource[] = [];
	export let dataset: string;

	let showAll = false;
	let copiedStates: { [key: string]: boolean } = {};

	function getSourceIcon(dataset: string) {
		const iconComponents: Record<string, any> = {
			Airbnb: House,
			Amazon: AmazonLogo,
			Facebook: FacebookLogo,
			Instagram: InstagramLogo,
			LinkedIn: LinkedinLogo,
			'X (Twitter)': TwitterLogo,
			YouTube: YoutubeLogo,
			Google: GoogleLogo,
			Indeed: Briefcase,
			eBay: ShoppingBag,
			Crunchbase: Rocket,
			Walmart: ShoppingBag,
			Yahoo: ChartLineUp
		};
		return iconComponents[dataset] || Globe;
	}

	function getDomainFromUrl(url: string): string {
		try {
			return new URL(url).hostname.replace('www.', '');
		} catch {
			return url;
		}
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

	$: IconComponent = getSourceIcon(dataset);
	$: hasRdf = sources.some((s) => s.rdf);
	$: hasJson = sources.some((s) => s.json);
	$: firstSource = sources[0];
	$: displayedSources = showAll ? sources : sources.slice(0, 2);
	$: hasMore = sources.length > 2;
</script>

{#if sources.length > 0 && firstSource}
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
							{dataset}
						</h3>
						<p class="text-gGray-500 text-sm">{getDomainFromUrl(firstSource.url_prefix)}</p>
					</div>
				</div>

				<div class="flex items-center space-x-4">
					<div class="flex items-center space-x-2">
						{#if hasJson}
							<div
								class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600"
							>
								<FileJs size={14} />
							</div>
						{/if}
						{#if hasRdf}
							<div
								class="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-50 text-purple-600"
							>
								<GraphicsCard size={14} />
							</div>
						{/if}
					</div>

					<div class="text-right">
						<div class="text-sSlate-800 text-lg font-bold">{sources.length}</div>
						<div class="text-gGray-400 -mt-1 text-xs">
							endpoint{sources.length !== 1 ? 's' : ''}
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
						View all {sources.length}
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
			<div class="space-y-1">
				{#each displayedSources as source, index}
					<div
						class="group/endpoint border-sSlate-100 bg-sSlate-50/50 hover:border-sSlate-200 relative flex items-center rounded-lg border p-3 transition-all hover:bg-white hover:shadow-sm"
					>
						<div class="mr-3 min-w-0 flex-1">
							<code class="text-sSlate-700 block truncate font-mono text-sm"
								>{source.url_prefix}</code
							>
						</div>

						<div class="flex items-center space-x-2">
							<div class="flex items-center space-x-1">
								{#if source.json}
									<div class="h-1.5 w-1.5 rounded-full bg-blue-500" title="JSON"></div>
								{/if}
								{#if source.rdf}
									<div class="h-1.5 w-1.5 rounded-full bg-purple-500" title="RDF"></div>
								{/if}
							</div>

							<button
								on:click={() => copyToClipboard(source.url_prefix, `${dataset}-${index}`)}
								class="border-sSlate-200 text-gGray-500 hover:text-sSlate-700 hover:border-sSlate-300 flex h-8 w-8 items-center justify-center rounded-lg border bg-white opacity-0 transition-all group-hover/endpoint:opacity-100"
								title="Copy endpoint"
							>
								{#if copiedStates[`${dataset}-${index}`]}
									<Check size={14} class="text-green-600" />
								{:else}
									<Copy size={14} />
								{/if}
							</button>
						</div>
					</div>
				{/each}

				{#if hasMore && !showAll}
					<div class="flex items-center justify-center py-2">
						<div class="text-gGray-400 flex items-center space-x-2">
							<div class="bg-gGray-300 h-1 w-1 rounded-full"></div>
							<div class="bg-gGray-300 h-1 w-1 rounded-full"></div>
							<div class="bg-gGray-300 h-1 w-1 rounded-full"></div>
							<span class="text-xs">+{sources.length - 2} more</span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
