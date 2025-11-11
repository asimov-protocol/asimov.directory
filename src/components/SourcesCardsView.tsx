import { useState, createElement } from 'react';
import { Globe, Package, Check, Copy, GithubLogo } from '@phosphor-icons/react';

import { generateDisplayName, getDomainIcon } from '../lib/utils';
import type { DataSource } from '../types';

interface SourcesCardsViewProps {
  sources: DataSource[];
}

export default function SourcesCardsView({ sources }: SourcesCardsViewProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sources.map(({ dataset, endpoints }) => {
        const uniqueModules = new Set<string>();

        endpoints.forEach((endpoint) => {
          endpoint.modules.forEach((module) => uniqueModules.add(module.name));
        });

        return (
          <div
            key={`cards-view-${dataset}`}
            className="border-sSlate-200 overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-md"
          >
            <div className="border-sSlate-100 border-b p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700">
                    {createElement(getDomainIcon(dataset), { className: 'text-xl' })}
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sSlate-900 mb-1 text-lg font-semibold">
                    {generateDisplayName(dataset)}
                  </h3>
                  <p className="text-gGray-500 bg-gGray-100 inline-block rounded px-2 py-0.5 font-mono text-sm">
                    {dataset}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gGray-50/50 px-4 py-3">
              <div className="text-gGray-600 flex items-center justify-between text-sm">
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

            <div className="max-h-48 space-y-3 overflow-y-auto p-4">
              {endpoints.map((endpoint, endpointIndex) => (
                <div key={endpoint.url} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-sSlate-700 bg-sSlate-50 mr-2 flex-1 truncate rounded px-2 py-1 font-mono text-xs">
                      {endpoint.url}
                    </code>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          copyToClipboard(endpoint.url, `card-${dataset}-${endpointIndex}`)
                        }
                        className="border-sSlate-200 text-gGray-500 hover:bg-gGray-50 hover:text-sSlate-700 hover:border-sSlate-300 rounded border bg-white p-1 transition-colors"
                        title="Copy endpoint URL"
                      >
                        {copiedItem === `card-${dataset}-${endpointIndex}` ? (
                          <Check className="text-xs text-green-600" />
                        ) : (
                          <Copy className="text-xs" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {endpoint.modules.map((module) => (
                      <a
                        key={`cards-view-module-${module.name}`}
                        href={`https://github.com/asimov-modules/asimov-${module.name}-module`}
                        className="inline-flex items-center space-x-1 rounded border border-orange-200 bg-orange-50 px-2 py-0.5 text-xs text-orange-700 transition-colors hover:border-orange-300 hover:bg-orange-100 hover:text-orange-800"
                        title={`asimov-${module.name}-module`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubLogo />
                        <span className="max-w-[80px] truncate">{module.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
