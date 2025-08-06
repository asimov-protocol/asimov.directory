import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { SortOption } from '../types';
import ModulesGrid from './ModulesGrid';
import { createModulesQuery } from '../lib/queries/modules';
import { queryClient } from '../store';
import { CaretDown } from '@phosphor-icons/react';

interface ModulesAppProps {
  initialSort: SortOption;
}

export default function ModulesApp({ initialSort }: ModulesAppProps) {
  const [sortOption, setSortOption] = useState<SortOption>(initialSort);

  const { data, isLoading: loading, error } = useQuery(createModulesQuery(sortOption), queryClient);

  const modules = data?.modules || [];

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value as SortOption;
    setSortOption(newSort);

    const url = new URL(window.location.href);
    url.searchParams.set('sort', newSort);
    window.history.replaceState({}, '', url);
  };

  const sortOptions = [
    { value: 'relevant' as const, label: 'Most Relevant' },
    { value: 'popular' as const, label: 'Most Popular' },
    { value: 'newest' as const, label: 'Newest' },
    { value: 'updated' as const, label: 'Recently Updated' }
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

      <ModulesGrid modules={modules} loading={loading} error={error?.message || null} />
    </div>
  );
}
