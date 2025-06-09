<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import List from 'phosphor-svelte/lib/List';
	import X from 'phosphor-svelte/lib/X';
	import { onMount, onDestroy } from 'svelte';

	$: currentPath = $page.url.pathname;
	let mobileMenuOpen = false;

	function toggleBodyScroll(disable: boolean) {
		if (!browser) return;

		if (disable) {
			document.body.style.overflow = 'hidden';
			document.body.style.touchAction = 'none';
		} else {
			document.body.style.overflow = '';
			document.body.style.touchAction = '';
		}
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		toggleBodyScroll(mobileMenuOpen);
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		toggleBodyScroll(false);
	}

	onDestroy(() => {
		if (browser) {
			toggleBodyScroll(false);
		}
	});

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileMenuOpen) {
			closeMobileMenu();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<svelte:head>
	{#if mobileMenuOpen}
		<style>
			body {
				overflow: hidden !important;
			}
		</style>
	{/if}
</svelte:head>

<nav class="border-sSlate-200 sticky top-0 z-50 border-b bg-white">
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center space-x-8">
				<a
					href="/"
					class="text-sSlate-800 hover:text-oOrange-500 text-xl font-bold transition-colors"
				>
					ASIMOV.Directory
				</a>

				<div class="hidden items-center space-x-6 md:flex">
					<a
						href="/"
						class="text-sm font-medium transition-colors {currentPath === '/'
							? 'text-oOrange-500'
							: 'text-gGray-500 hover:text-sSlate-800'}"
					>
						Sources
					</a>
					<a
						href="/modules"
						class="text-sm font-medium transition-colors {currentPath === '/modules'
							? 'text-oOrange-500'
							: 'text-gGray-500 hover:text-sSlate-800'}"
					>
						Modules
					</a>
				</div>
			</div>

			<div class="md:hidden">
				<button
					type="button"
					onclick={toggleMobileMenu}
					class="text-gGray-500 hover:text-sSlate-800 transition-colors"
					aria-label="Toggle mobile menu"
				>
					{#if mobileMenuOpen}
						<X size={24} />
					{:else}
						<List size={24} />
					{/if}
				</button>
			</div>
		</div>

		{#if mobileMenuOpen}
			<div class="border-sSlate-200 border-t pt-2 pb-3 md:hidden">
				<a
					href="/"
					onclick={closeMobileMenu}
					class="block rounded-lg px-4 py-2 text-base font-medium transition-colors {currentPath ===
					'/'
						? 'bg-oOrange-50 text-oOrange-500'
						: 'text-gGray-500 hover:bg-sSlate-50 hover:text-sSlate-800'}"
				>
					Sources
				</a>
				<a
					href="/modules"
					onclick={closeMobileMenu}
					class="block rounded-lg px-4 py-2 text-base font-medium transition-colors {currentPath ===
					'/modules'
						? 'bg-oOrange-50 text-oOrange-500'
						: 'text-gGray-500 hover:bg-sSlate-50 hover:text-sSlate-800'}"
				>
					Modules
				</a>
			</div>
		{/if}
	</div>
</nav>

{#if mobileMenuOpen}
	<button
		type="button"
		class="fixed inset-0 z-40 border-0 bg-white/30 backdrop-blur-sm md:hidden"
		onclick={closeMobileMenu}
		onkeydown={(e) => e.key === 'Escape' && closeMobileMenu()}
		aria-label="Close menu"
	></button>
{/if}
