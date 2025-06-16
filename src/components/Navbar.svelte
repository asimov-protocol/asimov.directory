<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import List from 'phosphor-svelte/lib/List';
	import X from 'phosphor-svelte/lib/X';
	import { onMount, onDestroy } from 'svelte';
	import Logo from './Logo.svelte';
	import { user, isSignedIn, isLoaded, getClerk } from '$lib/clerk';

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

	async function handleSignIn() {
		const clerk = getClerk();
		if (clerk) {
			await clerk.openSignIn();
		}
	}

	async function handleSignOut() {
		const clerk = getClerk();
		if (clerk) {
			await clerk.signOut();
		}
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

<nav class="border-sSlate-200 sticky top-0 z-50 border-b bg-white">
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center space-x-8">
				<a
					href="/"
					class="text-sSlate-800 hover:text-oOrange-500 text-xl font-bold transition-colors"
				>
					<Logo style="w-50" />
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

			<!-- Desktop Auth -->
			<div class="hidden md:flex md:items-center md:space-x-4">
				{#if $isLoaded}
					{#if $isSignedIn && $user}
						<div class="flex items-center space-x-3">
							<span class="text-gGray-500 text-sm">
								Hello {$user.firstName || $user.emailAddresses?.[0]?.emailAddress || 'User'}
							</span>
							<button
								on:click={handleSignOut}
								class="text-gGray-500 hover:text-sSlate-800 text-sm font-medium transition-colors"
							>
								Sign Out
							</button>
						</div>
					{:else}
						<button
							on:click={handleSignIn}
							class="bg-oOrange-500 hover:bg-oOrange-600 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
						>
							Sign In
						</button>
					{/if}
				{/if}
			</div>

			<!-- Mobile menu button -->
			<button
				on:click={toggleMobileMenu}
				class="text-gGray-500 hover:text-sSlate-800 md:hidden"
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

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="border-sSlate-200 border-t bg-white md:hidden">
			<div class="space-y-1 px-4 py-3">
				<a
					href="/"
					on:click={closeMobileMenu}
					class="text-gGray-500 hover:text-sSlate-800 block rounded-lg px-3 py-2 text-base font-medium transition-colors {currentPath ===
					'/'
						? 'bg-oOrange-50 text-oOrange-500'
						: ''}"
				>
					Sources
				</a>
				<a
					href="/modules"
					on:click={closeMobileMenu}
					class="text-gGray-500 hover:text-sSlate-800 block rounded-lg px-3 py-2 text-base font-medium transition-colors {currentPath ===
					'/modules'
						? 'bg-oOrange-50 text-oOrange-500'
						: ''}"
				>
					Modules
				</a>

				<!-- Mobile Auth -->
				{#if $isLoaded}
					<div class="border-sSlate-200 border-t pt-3">
						{#if $isSignedIn && $user}
							<div class="space-y-2 px-3">
								<div class="text-gGray-500 text-sm">
									Signed in as {$user.emailAddresses?.[0]?.emailAddress ||
										$user.firstName ||
										'User'}
								</div>
								<button
									on:click={handleSignOut}
									class="text-gGray-500 hover:text-sSlate-800 text-sm font-medium"
								>
									Sign Out
								</button>
							</div>
						{:else}
							<button
								on:click={handleSignIn}
								class="bg-oOrange-500 hover:bg-oOrange-600 mx-3 w-[calc(100%-1.5rem)] rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
							>
								Sign In
							</button>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</nav>

{#if mobileMenuOpen}
	<button
		type="button"
		class="fixed inset-0 z-40 border-0 bg-white/30 backdrop-blur-sm md:hidden"
		on:click={closeMobileMenu}
		aria-label="Close menu"
	></button>
{/if}
