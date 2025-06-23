<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import List from 'phosphor-svelte/lib/List';
	import X from 'phosphor-svelte/lib/X';
	import Logo from './Logo.svelte';
	import GitHubStats from './GitHubStats.svelte';

	let currentPath = $derived(() => page.url.pathname);
	let isOpen = $state(false);

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

	function toggleMenu() {
		isOpen = !isOpen;
		toggleBodyScroll(isOpen);
	}

	function closeMenu() {
		isOpen = false;
		toggleBodyScroll(false);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			closeMenu();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	onDestroy(() => {
		if (browser) {
			toggleBodyScroll(false);
		}
	});

	const navItems = [
		{ text: 'Sources', href: '/' },
		{ text: 'Modules', href: '/modules' }
	];
</script>

<header class="sticky top-0 z-50 border-b border-slate-200 bg-white transition-all duration-300">
	<div class="container mx-auto flex h-20 items-center justify-between px-4">
		<a href="/" class="flex items-center gap-2">
			<Logo class="w-50 text-gray-900" />
		</a>

		<nav class="hidden items-center space-x-8 md:flex">
			{#each navItems as item (item.text)}
				<a
					href={item.href}
					class="group relative text-gray-600 transition-colors hover:text-orange-600 {currentPath() ===
					item.href
						? 'text-orange-600'
						: ''}"
				>
					{item.text}
					<div
						class="absolute -bottom-1 left-0 h-px bg-orange-500 transition-all {currentPath() ===
						item.href
							? 'w-full'
							: 'w-0 group-hover:w-full'}"
					></div>
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-4 md:flex">
			<GitHubStats variant="desktop" />
		</div>

		<button
			class="text-gray-600 hover:text-gray-900 focus:outline-none md:hidden"
			onclick={toggleMenu}
			type="button"
			aria-label="Toggle menu"
			aria-expanded={isOpen}
		>
			{#if isOpen}
				<X size={24} weight="bold" />
			{:else}
				<List size={24} weight="bold" />
			{/if}
		</button>
	</div>

	{#if isOpen}
		<div class="border-t border-gray-200 bg-white/95 backdrop-blur-md md:hidden">
			<div class="container mx-auto px-4 py-6">
				<nav class="flex flex-col space-y-4">
					{#each navItems as item (item.text)}
						<a
							href={item.href}
							onclick={closeMenu}
							class="border-b border-gray-200 py-2 text-gray-600 transition-colors last:border-b-0 hover:text-orange-600 {currentPath() ===
							item.href
								? 'text-orange-600'
								: ''}"
						>
							{item.text}
						</a>
					{/each}

					<GitHubStats variant="mobile" />
				</nav>
			</div>
		</div>
	{/if}
</header>

{#if isOpen}
	<button
		class="fixed inset-0 z-40 bg-white/30 backdrop-blur-sm md:hidden"
		onclick={closeMenu}
		onkeydown={(e) => e.key === 'Enter' && closeMenu()}
		tabindex="0"
		aria-label="Close menu"
	></button>
{/if}
