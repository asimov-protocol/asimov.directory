import { queryOptions } from '@tanstack/react-query';
import { fetchDataSources } from '../github';

export function createSourcesQuery() {
  return queryOptions({
    queryKey: ['sources'],
    queryFn: fetchDataSources,
    staleTime: 10 * 60 * 1000, // 5 minutes
    gcTime: 20 * 60 * 1000 // 10 minutes
  });
}
