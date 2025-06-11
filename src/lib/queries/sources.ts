import { createQuery } from '@tanstack/svelte-query';
import type { DataSource } from '$lib/types';

export function createSourcesQuery() {
	return createQuery({
		queryKey: ['sources'],
		queryFn: async (): Promise<{ sources: DataSource[]; total: number }> => {
			const response = await fetch('/api/sources');

			if (!response.ok) {
				throw new Error(`Failed to fetch sources: ${response.statusText}`);
			}

			return response.json();
		},
		staleTime: 5 * 60 * 1000, // 5 minutes
		gcTime: 10 * 60 * 1000 // 10 minutes
	});
}
