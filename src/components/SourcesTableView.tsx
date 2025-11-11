import { useState, createElement } from 'react';
import {
  Globe,
  Package,
  Check,
  Copy,
  GithubLogo,
  CaretRight,
  CaretDown,
  CaretUp
} from '@phosphor-icons/react';

import { generateDisplayName, getDomainIcon } from '../lib/utils';

import type { DataSource } from '../types';

interface SourcesTableViewProps {
  sources: DataSource[];
}

export default function SourcesTableView({ sources }: SourcesTableViewProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const toggleExpanded = (dataset: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(dataset)) {
      newExpanded.delete(dataset);
    } else {
      newExpanded.add(dataset);
    }
    setExpandedItems(newExpanded);
  };

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-3">
      {sources.map(({ dataset, endpoints }) => {
        const isExpanded = expandedItems.has(dataset);
        const uniqueModules = new Set<string>();

        endpoints.forEach((endpoint) => {
          endpoint.modules.forEach((module) => uniqueModules.add(module.name));
        });

        return (
          <div
            key={`table-view-${dataset}`}
            className="border-sSlate-200 overflow-hidden rounded-lg border bg-white"
          >
            <div
              className="cursor-pointer p-3 transition-colors hover:bg-gGray-50/50 sm:p-4"
              onClick={() => toggleExpanded(dataset)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleExpanded(dataset);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${generateDisplayName(dataset)}`}
            >
              <div className="block sm:hidden">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700">
                        {createElement(getDomainIcon(dataset), { className: 'text-sm' })}
                      </div>
                    </div>
                    <h3 className="text-sSlate-900 text-base font-semibold">
                      {generateDisplayName(dataset)}
                    </h3>
                  </div>
                  <button className="hover:bg-gGray-100 flex-shrink-0 rounded p-1 transition-colors">
                    {isExpanded ? (
                      <CaretDown className="text-gGray-400 h-4 w-4" />
                    ) : (
                      <CaretRight className="text-gGray-400 h-4 w-4" />
                    )}
                  </button>
                </div>

                <div className="mb-2 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-gGray-500 bg-gGray-100 rounded px-2 py-0.5 font-mono">
                      {dataset}
                    </span>
                  </div>
                  <div className="text-gGray-600 flex items-center space-x-3 text-xs">
                    <div className="flex items-center space-x-1">
                      <Globe className="h-3 w-3" />
                      <span>{endpoints.length}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Package className="h-3 w-3" />
                      <span>{uniqueModules.size}</span>
                    </div>
                  </div>
                </div>

                <div className="text-gGray-400 text-center text-xs">
                  {isExpanded ? 'Tap to hide endpoints' : 'Tap to view endpoints'}
                </div>
              </div>

              <div className="hidden sm:flex sm:items-center sm:justify-between">
                <div className="flex min-w-0 flex-1 items-center space-x-4">
                  <button className="hover:bg-gGray-100 flex-shrink-0 rounded p-1 transition-colors">
                    {isExpanded ? (
                      <CaretDown className="text-gGray-400 transition-transform duration-200" />
                    ) : (
                      <CaretRight className="text-gGray-400 transition-transform duration-200" />
                    )}
                  </button>

                  <div className="flex-shrink-0">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700">
                      {createElement(getDomainIcon(dataset), { className: 'text-lg' })}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center space-x-3">
                      <h3 className="text-sSlate-900 hover:text-oOrange-600 text-lg font-semibold transition-colors">
                        {generateDisplayName(dataset)}
                      </h3>
                      <span className="text-gGray-500 bg-gGray-100 rounded px-2 py-0.5 font-mono text-sm">
                        {dataset}
                      </span>
                    </div>

                    <div className="text-gGray-600 flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-1">
                        <Globe className="text-sm" />
                        <span>
                          {endpoints.length} endpoint{endpoints.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Package className="text-sm" />
                        <span>
                          {uniqueModules.size} module{uniqueModules.size !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-gGray-400 flex items-center">
                  <span className="mr-2 text-sm">
                    {isExpanded ? 'Hide details' : 'View endpoints'}
                  </span>
                  {isExpanded ? (
                    <CaretUp className="transition-transform duration-200" />
                  ) : (
                    <CaretDown className="transition-transform duration-200" />
                  )}
                </div>
              </div>
            </div>

            {isExpanded && (
              <div className="border-sSlate-100 bg-gGray-50/30 animate-in slide-in-from-top-2 border-t duration-200">
                <div className="space-y-3 p-3 sm:p-4">
                  {endpoints.map((endpoint, endpointIndex) => (
                    <div
                      key={endpoint.url}
                      className="border-sSlate-100 hover:border-sSlate-200 rounded-lg border bg-white p-3 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        {/* Mobile Endpoint Layout */}
                        <div className="block sm:hidden">
                          <div className="mb-2">
                            <code className="text-sSlate-700 bg-sSlate-50 block w-full truncate rounded px-2 py-1 font-mono text-xs">
                              {endpoint.url}
                            </code>
                          </div>

                          <div className="mb-2 flex items-center justify-between">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(
                                  endpoint.url,
                                  `${dataset}-${endpointIndex}`
                                );
                              }}
                              className="border-sSlate-200 text-gGray-500 hover:bg-gGray-50 hover:text-sSlate-700 hover:border-sSlate-300 rounded border bg-white p-1.5 transition-colors"
                              title="Copy endpoint URL"
                            >
                              {copiedItem === `${dataset}-${endpointIndex}` ? (
                                <Check className="h-3 w-3 text-green-600" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Desktop Endpoint Layout */}
                        <div className="mb-2 hidden items-center space-x-3 sm:flex">
                          <code className="text-sSlate-700 bg-sSlate-50 rounded px-2 py-1 font-mono text-sm">
                            {endpoint.url}
                          </code>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(
                                endpoint.url,
                                `${dataset}-${endpointIndex}`
                              );
                            }}
                            className="border-sSlate-200 text-gGray-500 hover:bg-gGray-50 hover:text-sSlate-700 hover:border-sSlate-300 rounded border bg-white p-1.5 transition-colors"
                            title="Copy endpoint URL"
                          >
                            {copiedItem === `${dataset}-${endpointIndex}` ? (
                              <Check className="text-xs text-green-600" />
                            ) : (
                              <Copy className="text-xs" />
                            )}
                          </button>
                        </div>

                        {/* Modules - Mobile Optimized */}
                        <div className="flex flex-wrap gap-1">
                          {endpoint.modules.map((module) => (
                            <a
                              key={`table-view-module-${module.name}`}
                              href={`https://github.com/asimov-modules/asimov-${module.name}-module`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center space-x-1 rounded border border-orange-200 bg-orange-50 px-2 py-1 text-xs text-orange-700 transition-colors hover:border-orange-300 hover:bg-orange-100 hover:text-orange-800"
                              title={`asimov-${module.name}-module`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GithubLogo className="h-3 w-3 sm:h-4 sm:w-4" />
                              <span className="max-w-[100px] truncate sm:max-w-none">{module.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
