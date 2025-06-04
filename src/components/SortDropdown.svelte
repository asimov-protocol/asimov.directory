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

  $: selectedOption = sortOptions.find(option => option.value === value) || sortOptions[0];
</script>

<div class="sort-dropdown relative">
  <button
    type="button"
    class="flex items-center justify-between w-full px-4 py-2.5 gap-2 text-sm font-medium text-sSlate-700 bg-white border border-sSlate-200 rounded-lg hover:bg-sSlate-50 focus:outline-none focus:ring-2 focus:ring-oOrange-500 focus:border-transparent transition-colors"
    onclick={toggleDropdown}
  >
    <div class="flex items-center space-x-2 cursor-pointer">
      <span class="text-gGray-500">Sort by:</span>
      <span class="text-sSlate-800">{selectedOption.label}</span>
    </div>
    <CaretDown
      size={16}
      class="text-gGray-400 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
    />
  </button>

  {#if isOpen}
    <div class="absolute right-0 z-50 w-64 mt-2 bg-white border border-sSlate-200 rounded-lg shadow-lg">
      <div class="py-2">
        {#each sortOptions as option}
          <button
            type="button"
            class="w-full px-4 py-3 text-left hover:bg-sSlate-50 transition-colors {value === option.value ? 'bg-sSlate-100' : ''}"
            onclick={() => handleSelect(option.value)}
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="text-sm font-medium text-sSlate-800">
                  {option.label}
                </div>
                <div class="text-xs text-gGray-500 mt-0.5">
                  {option.description}
                </div>
              </div>
              {#if value === option.value}
                <div class="w-2 h-2 bg-oOrange-500 rounded-full"></div>
              {/if}
            </div>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
