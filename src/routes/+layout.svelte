<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { queryClient } from '$lib/queryClient';
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<QueryClientProvider client={queryClient}>
	<div class="min-h-screen bg-white">
		<Navbar />
		<main>
			<slot />
		</main>
	</div>
</QueryClientProvider>
