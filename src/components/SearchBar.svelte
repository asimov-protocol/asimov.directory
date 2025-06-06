<script lang="ts">
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
	import X from 'phosphor-svelte/lib/X';

	export let value = '';
	export let placeholder = 'Search data sources...';

	let inputElement: HTMLInputElement;

	function clearSearch() {
		value = '';
		inputElement.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			clearSearch();
		}
	}
</script>

<div class="relative">
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		<MagnifyingGlass class="text-gGray-400 h-4 w-4" />
	</div>

	<input
		bind:this={inputElement}
		bind:value
		onkeydown={handleKeydown}
		type="text"
		{placeholder}
		class="border-sSlate-200 focus:ring-oOrange-500 focus:border-oOrange-500 text-sSlate-800 placeholder-gGray-400 block w-full rounded-lg border bg-white py-3 pr-10 pl-10 transition-colors focus:ring-2"
	/>

	{#if value}
		<button
			onclick={clearSearch}
			class="text-gGray-400 hover:text-sSlate-600 absolute inset-y-0 right-0 flex items-center pr-3 transition-colors"
		>
			<X class="h-4 w-4" />
		</button>
	{/if}
</div>
