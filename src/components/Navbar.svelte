<script lang="ts">
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;
</script>

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
					class="text-gGray-500 hover:text-sSlate-800 transition-colors"
					aria-label="Toggle mobile menu"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>
