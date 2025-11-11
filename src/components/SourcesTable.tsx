import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { WarningCircle, List, GridFour, MagnifyingGlass, Database } from '@phosphor-icons/react';

import SourcesTableView from './SourcesTableView';
import SourcesCardsView from './SourcesCardsView';
import SourcesTableViewSkeleton from './SourcesTableViewSkeleton';
import SourcesCardsViewSkeleton from './SourcesCardsViewSkeleton';
import { generateDisplayName } from '../lib/utils';
import { createSourcesQuery } from '../lib/queries/sources';
import { queryClient } from '../store';

interface SourcesTableProps {
  searchQuery?: string;
}

export default function SourcesTable({ searchQuery = '' }: SourcesTableProps) {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const { data, isLoading: loading, error } = useQuery(createSourcesQuery(), queryClient);

  const dataSources = useMemo(() => {
    const filteredGroups =
      data?.filter((dataSource) => {
        if (!searchQuery) return true;

        const searchLower = searchQuery.toLowerCase();
        return (
          dataSource.dataset.toLowerCase().includes(searchLower) ||
          generateDisplayName(dataSource.dataset).toLowerCase().includes(searchLower) ||
          dataSource.endpoints.some(
            (endpoint) =>
              endpoint.url.toLowerCase().includes(searchLower) ||
              endpoint.modules.some(
                (module) =>
                  module.name.toLowerCase().includes(searchLower) ||
                  module.label.toLowerCase().includes(searchLower)
              )
          )
        );
      }) ?? [];

    return filteredGroups.sort((a, b) => {
      if (b.endpoints.length !== a.endpoints.length) {
        return b.endpoints.length - a.endpoints.length;
      }
      return a.dataset.localeCompare(b.dataset);
    });
  }, [data, searchQuery]);

  const totalModules = useMemo(() => {
    const uniqueModules = new Set<string>();
    for (const source of dataSources) {
      source.endpoints.forEach((endpoint) => {
        endpoint.modules.forEach((module) => uniqueModules.add(module.name));
      });
    }
    return uniqueModules.size;
  }, [dataSources]);

  if (loading) {
    return (
      <>
        {viewMode === 'table' && <SourcesTableViewSkeleton />}

        {viewMode === 'cards' && <SourcesCardsViewSkeleton />}
      </>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <div className="mb-2 text-red-600">
          <WarningCircle className="text-2xl" />
        </div>
        <h3 className="text-sSlate-900 mb-1 text-lg font-medium">Failed to load data sources</h3>
        <p className="text-gGray-600">{error?.message || 'An error occurred'}</p>
      </div>
    );
  }

  if (dataSources.length === 0) {
    const isSearching = searchQuery.length > 0;
    return (
      <div className="py-12 text-center">
        <div className="text-gGray-400 mb-4">
          {isSearching ? (
            <MagnifyingGlass className="text-4xl" />
          ) : (
            <Database className="text-4xl" />
          )}
        </div>
        <h3 className="text-sSlate-900 mb-1 text-lg font-medium">
          {isSearching ? 'No matching data sources' : 'No data sources found'}
        </h3>
        <p className="text-gGray-600">
          {isSearching
            ? `No data sources match "${searchQuery}". Try a different search term.`
            : 'No data sources are currently available.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-gGray-600 flex items-center justify-between text-sm">
        <span>
          {dataSources.length} data source{dataSources.length !== 1 ? 's' : ''} • {totalModules}{' '}
          unique modules
        </span>

        <div className="flex items-center space-x-4">
          {searchQuery && (
            <span>
              Search results for &quot;
              <span className="text-sSlate-700 font-medium">{searchQuery}</span>
              &quot;
            </span>
          )}

          <div className="bg-gGray-100 flex items-center rounded-lg p-1">
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center justify-center rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === 'table'
                  ? 'text-sSlate-700 bg-white shadow-sm'
                  : 'text-gGray-600 hover:text-sSlate-700'
              }`}
            >
              <List className="mr-1" />
              Table
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center justify-center rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === 'cards'
                  ? 'text-sSlate-700 bg-white shadow-sm'
                  : 'text-gGray-600 hover:text-sSlate-700'
              }`}
            >
              <GridFour className="mr-1" />
              Cards
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'table' && <SourcesTableView sources={dataSources} />}

      {viewMode === 'cards' && <SourcesCardsView sources={dataSources} />}
    </div>
  );
}
