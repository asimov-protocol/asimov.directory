import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { CaretDown } from '@phosphor-icons/react';
import InfiniteScroll from 'react-infinite-scroll-component';

import type { SortOption } from '../types';
import ModulesGrid from './ModulesGrid';
import { createModulesQuery } from '../lib/queries/modules';
import { queryClient } from '../store';
import { WHITELISTED_MODULES } from '../lib/config';

interface ModulesAppProps {
  initialSort: SortOption;
}

export default function ModulesApp({ initialSort }: ModulesAppProps) {
  const rxModule = /^asimov-.+-module$/i;
  const [sortOption, setSortOption] = useState<SortOption>(initialSort);

  const {
    data,
    isLoading: loading,
    error,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery(createModulesQuery(sortOption), queryClient);

  const modules = data?.pages.flatMap(
    (page) => page.repositories.filter(({ name }) => rxModule.test(name) && !WHITELISTED_MODULES.includes(name)) || []
  ) || [];

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value as SortOption;
    setSortOption(newSort);

    const url = new URL(window.location.href);
    url.searchParams.set('sort', newSort);
    window.history.replaceState({}, '', url);
  };

  const sortOptions = [
    { value: 'created_at' as const, label: 'Newest' },
    { value: 'updated_at' as const, label: 'Recently Updated' }
  ];

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="text-gGray-500 order-2 text-sm sm:order-1">
          {!loading && !error && (
            <span>
              {modules.length} module{modules.length !== 1 ? 's' : ''} found
            </span>
          )}
        </div>
        <div className="order-1 flex justify-start sm:order-2 sm:justify-end">
          <div className="relative w-fit">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border-sSlate-200 focus:ring-oOrange-500 focus:border-oOrange-500 text-sSlate-800 w-auto appearance-none rounded-lg border bg-white px-4 py-2 pr-10 text-sm transition-colors focus:ring-2"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <CaretDown className="text-gGray-400 text-sm" />
            </div>
          </div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={modules.length}
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={<h4>Loading...</h4>}
      >
        <ModulesGrid modules={modules} loading={loading} error={error?.message || null} />
      </InfiniteScroll>

    </div>
  );
}
