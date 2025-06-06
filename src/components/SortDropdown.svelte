<script lang="ts">
	import CaretDown from 'phosphor-svelte/lib/CaretDown';

	export let value: string = 'relevant';
	export let onChange: (value: string) => void;

	let isOpen = false;

	const sortOptions = [
		{ value: 'relevant', label: 'Most Relevant', description: 'Best match' },
		{ value: 'popular', label: 'Most Popular', description: 'Most stars' },
		{ value: 'newest', label: 'Newest', description: 'Recently created' },
		{ value: 'updated', label: 'Recently Updated', description: 'Latest activity' }
	];

	function handleSelect(optionValue: string) {
		value = optionValue;
		onChange(optionValue);
		isOpen = false;
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function handleClickOutside(event: Event) {
		const target = event.target as Element;
		if (!target.closest('.sort-dropdown')) {
			isOpen = false;
		}
	}

	$: if (typeof window !== 'undefined') {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}
	}

	$: selectedOption = sortOptions.find((option) => option.value === value) || sortOptions[0];
</script>

<div class="sort-dropdown relative">
	<button
		type="button"
		class="text-sSlate-700 border-sSlate-200 hover:bg-sSlate-50 focus:ring-oOrange-500 flex w-full items-center justify-between gap-2 rounded-lg border bg-white px-4 py-2.5 text-sm font-medium transition-colors focus:border-transparent focus:ring-2 focus:outline-none"
		onclick={toggleDropdown}
	>
		<div class="flex cursor-pointer items-center space-x-2">
			<span class="text-gGray-500">Sort by:</span>
			<span class="text-sSlate-800">{selectedOption.label}</span>
		</div>
		<CaretDown
			size={16}
			class="text-gGray-400 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
		/>
	</button>

	{#if isOpen}
		<div
			class="border-sSlate-200 absolute right-0 z-50 mt-2 w-64 rounded-lg border bg-white shadow-lg"
		>
			<div class="py-2">
				{#each sortOptions as option}
					<button
						type="button"
						class="hover:bg-sSlate-50 w-full px-4 py-3 text-left transition-colors {value ===
						option.value
							? 'bg-sSlate-100'
							: ''}"
						onclick={() => handleSelect(option.value)}
					>
						<div class="flex items-center justify-between">
							<div>
								<div class="text-sSlate-800 text-sm font-medium">
									{option.label}
								</div>
								<div class="text-gGray-500 mt-0.5 text-xs">
									{option.description}
								</div>
							</div>
							{#if value === option.value}
								<div class="bg-oOrange-500 h-2 w-2 rounded-full"></div>
							{/if}
						</div>
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
