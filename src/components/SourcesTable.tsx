import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { DataSource } from '../types';
import SourcesTableView from './SourcesTableView';
import SourcesCardsView from './SourcesCardsView';
import { generateDisplayName, normalizeDataset, type GroupedSource } from '../lib/utils';
import { createSourcesQuery } from '../lib/queries/sources';
import { WarningCircle, List, GridFour, MagnifyingGlass, Database } from '@phosphor-icons/react';
import { queryClient } from '../store';

interface SourcesTableProps {
  searchQuery?: string;
}

export default function SourcesTable({ searchQuery = '' }: SourcesTableProps) {
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const { data, isLoading: loading, error } = useQuery(createSourcesQuery(), queryClient);

  const sources = useMemo(() => data?.sources || [], [data?.sources]);

  const groupedSources: GroupedSource[] = useMemo(() => {
    if (!Array.isArray(sources)) return [];

    return sources.reduce((groups: GroupedSource[], source: DataSource) => {
      const normalizedDataset = normalizeDataset(source.dataset);
      const existing = groups.find((g: GroupedSource) => g.dataset === normalizedDataset);

      if (existing) {
        const existingEndpoint = existing.endpoints.find(
          (e: any) => e.url_prefix === source.url_prefix
        );
        if (existingEndpoint) {
          existingEndpoint.sources.push(source);
        } else {
          existing.endpoints.push({
            url_prefix: source.url_prefix, // Keep original URL prefix (may contain wildcards)
            sources: [source]
          });
        }
        existing.totalSources++;
        if (source.json) existing.hasJson = true;
        if (source.rdf) existing.hasRdf = true;
      } else {
        groups.push({
          dataset: normalizedDataset, // Use normalized dataset for grouping and display
          endpoints: [
            {
              url_prefix: source.url_prefix, // Keep original URL prefix (may contain wildcards)
              sources: [source]
            }
          ],
          totalSources: 1,
          hasJson: !!source.json,
          hasRdf: !!source.rdf
        });
      }

      return groups;
    }, [] as GroupedSource[]);
  }, [sources]);

  const sortedGroups = useMemo(() => {
    const filteredGroups = groupedSources.filter((group) => {
      if (!searchQuery) return true;

      const searchLower = searchQuery.toLowerCase();
      return (
        group.dataset.toLowerCase().includes(searchLower) ||
        generateDisplayName(group.dataset).toLowerCase().includes(searchLower) ||
        group.endpoints.some(
          (endpoint) =>
            endpoint.url_prefix.toLowerCase().includes(searchLower) ||
            endpoint.sources.some(
              (source) =>
                source.module_label.toLowerCase().includes(searchLower) ||
                source.module_name.toLowerCase().includes(searchLower)
            )
        )
      );
    });

    return filteredGroups.sort((a, b) => {
      if (b.totalSources !== a.totalSources) {
        return b.totalSources - a.totalSources;
      }
      return a.dataset.localeCompare(b.dataset);
    });
  }, [groupedSources, searchQuery]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center space-x-3 text-gray-600">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-orange-500 border-t-transparent"></div>
          <span>Loading data sources...</span>
        </div>
      </div>
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

  if (sortedGroups.length === 0) {
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
          {sortedGroups.length} data source{sortedGroups.length !== 1 ? 's' : ''} •{' '}
          {sortedGroups.reduce((total, group) => total + group.totalSources, 0)} total modules
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

      {viewMode === 'table' && <SourcesTableView groups={sortedGroups} />}

      {viewMode === 'cards' && <SourcesCardsView groups={sortedGroups} />}
    </div>
  );
}
