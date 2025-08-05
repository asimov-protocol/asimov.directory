import { queryOptions } from '@tanstack/react-query';
import type { GitHubModule, SortOption } from '../../types';

export function createModulesQuery(sortOption: SortOption = 'relevant') {
	return queryOptions({
		queryKey: ['modules', sortOption],
		queryFn: async (): Promise<{ modules: GitHubModule[]; total: number; sort: SortOption }> => {
			const response = await fetch(`/api/modules?sort=${sortOption}`);

			if (!response.ok) {
				throw new Error(`Failed to fetch modules: ${response.statusText}`);
			}

			const result = await response.json();

			// Handle the API response structure: { success: true, data: { modules: [...], total: ..., sort: ... } }
			if (result.success && result.data) {
				return result.data;
			} else if (result.success === false) {
				throw new Error(result.error || 'API returned error');
			} else {
				throw new Error('Invalid data format received from server');
			}
		},
		staleTime: 5 * 60 * 1000, // 5 minutes
		gcTime: 10 * 60 * 1000 // 10 minutes
	});
}
