import { queryOptions } from '@tanstack/react-query';
import type { DataSource } from '../../types';

export function createSourcesQuery() {
	return queryOptions({
		queryKey: ['sources'],
		queryFn: async (): Promise<{ sources: DataSource[]; total: number }> => {
			const response = await fetch('/api/sources');

			if (!response.ok) {
				throw new Error(`Failed to fetch sources: ${response.statusText}`);
			}

			const result = await response.json();

			// Handle the API response structure: { success: true, data: { sources: [...], total: ... } }
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
