import { infiniteQueryOptions } from '@tanstack/react-query';

import { fetchGithubRepositories } from '../github';
import type { SortOption } from '../../types';

export function createModulesQuery(sortOption: SortOption) {
  return infiniteQueryOptions({
    queryKey: ['modules', 'infinite', sortOption],
    queryFn: ({ pageParam }) => fetchGithubRepositories(pageParam, sortOption),
    getNextPageParam: (lastPage) => {
      return lastPage?.meta?.hasNextPage ? lastPage.meta.endCursor : undefined;
    },
    initialPageParam: '',
    staleTime: 10 * 60 * 1000,
    gcTime: 20 * 60 * 1000
  });
}
