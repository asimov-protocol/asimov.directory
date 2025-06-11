import { createQuery } from '@tanstack/svelte-query';
import type { GitHubModule, SortOption } from '$lib/types';

export function createModulesQuery(sortOption: SortOption = 'relevant') {
	return createQuery({
		queryKey: ['modules', sortOption],
		queryFn: async (): Promise<{ modules: GitHubModule[]; total: number; sort: SortOption }> => {
			const response = await fetch(`/api/modules?sort=${sortOption}`);

			if (!response.ok) {
				throw new Error(`Failed to fetch modules: ${response.statusText}`);
			}

			return response.json();
		},
		staleTime: 5 * 60 * 1000, // 5 minutes
		gcTime: 10 * 60 * 1000 // 10 minutes
	});
}
