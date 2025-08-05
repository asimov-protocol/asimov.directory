import { useMemo, useState } from 'react';
import React from 'react';
import type { GroupedSource } from './sourcesUtils';
import { generateDisplayName, getDomainIcon } from './sourcesUtils';
import { Globe, Package, Check, Copy, GithubLogo, CaretRight, CaretDown, CaretUp } from '@phosphor-icons/react';

interface SourcesTableViewProps {
  groups: GroupedSource[];
}

export default function SourcesTableView({ groups }: SourcesTableViewProps) {
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
    <div className="space-y-2">
      {groups.map((group) => {
        const isExpanded = expandedItems.has(group.dataset);

        return (
          <div key={group.dataset} className="border border-sSlate-200 rounded-lg bg-white overflow-hidden">
            {/* Main Source Row - Always Visible */}
            <div
              className="p-4 hover:bg-gGray-50/50 transition-colors cursor-pointer"
              onClick={() => toggleExpanded(group.dataset)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1 min-w-0">
                  {/* Expand/Collapse Icon */}
                  <button className="flex-shrink-0 p-1 rounded hover:bg-gGray-100 transition-colors">
                    {isExpanded ?
                      <CaretDown className="text-gGray-400 transition-transform duration-200" /> :
                      <CaretRight className="text-gGray-400 transition-transform duration-200" />
                    }
                  </button>

                  {/* Avatar & Basic Info */}
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 relative">
                      {React.createElement(getDomainIcon(group.dataset), { className: "text-lg" })}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title Row */}
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="text-lg font-semibold text-sSlate-900 hover:text-oOrange-600 transition-colors">
                        {generateDisplayName(group.dataset)}
                      </h3>
                      <span className="text-sm text-gGray-500 font-mono bg-gGray-100 px-2 py-0.5 rounded">
                        {group.dataset}
                      </span>

                      {/* Format badges */}
                      <div className="flex items-center space-x-1">
                        {group.hasJson && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            JSON
                          </span>
                        )}
                        {group.hasRdf && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            RDF
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center space-x-6 text-sm text-gGray-600">
                      <div className="flex items-center space-x-1">
                        <Globe className="text-sm" />
                        <span>{group.endpoints.length} endpoint{group.endpoints.length !== 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Package className="text-sm" />
                        <span>{group.totalSources} module{group.totalSources !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand indicator */}
                <div className="flex items-center text-gGray-400">
                  <span className="text-sm mr-2">
                    {isExpanded ? 'Hide details' : 'View endpoints'}
                  </span>
                  {isExpanded ?
                    <CaretUp className="transition-transform duration-200" /> :
                    <CaretDown className="transition-transform duration-200" />
                  }
                </div>
              </div>
            </div>

            {/* Collapsible Endpoints Section */}
            {isExpanded && (
              <div className="border-t border-sSlate-100 bg-gGray-50/30 animate-in slide-in-from-top-2 duration-200">
                <div className="p-4 space-y-3">
                  {group.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpoint.url_prefix} className="flex items-start justify-between p-3 bg-white rounded-lg border border-sSlate-100 hover:border-sSlate-200 transition-colors">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <code className="text-sm font-mono text-sSlate-700 bg-sSlate-50 px-2 py-1 rounded">
                            {endpoint.url_prefix}
                          </code>

                          {/* Format indicators */}
                          <div className="flex items-center space-x-1">
                            {endpoint.sources.some(s => s.json) && (
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" title="JSON support"></div>
                            )}
                            {endpoint.sources.some(s => s.rdf) && (
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-500" title="RDF support"></div>
                            )}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(endpoint.url_prefix, `${group.dataset}-${endpointIndex}`);
                            }}
                            className="p-1.5 rounded border border-sSlate-200 bg-white text-gGray-500 hover:bg-gGray-50 hover:text-sSlate-700 hover:border-sSlate-300 transition-colors"
                            title="Copy endpoint URL"
                          >
                            {copiedItem === `${group.dataset}-${endpointIndex}` ? (
                              <Check className="text-green-600 text-xs" />
                            ) : (
                              <Copy className="text-xs" />
                            )}
                          </button>
                        </div>

                        {/* Modules */}
                        <div className="flex flex-wrap gap-1">
                          {endpoint.sources.map((source) => (
                            <a
                              key={source.id}
                              href={`https://github.com/asimov-modules/${source.module_name}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center space-x-1 text-xs text-orange-700 hover:text-orange-800 bg-orange-50 hover:bg-orange-100 px-2 py-1 rounded border border-orange-200 hover:border-orange-300 transition-colors"
                              title={`Flows: ${source.flows.join(', ') || 'None specified'}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GithubLogo />
                              <span>{source.module_label}</span>
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
