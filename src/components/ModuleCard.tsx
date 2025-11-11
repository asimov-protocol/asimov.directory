import { parse } from 'yaml';
import { Star, Calendar } from '@phosphor-icons/react';

import type { Repository, Manifest } from '../types';

import { getLanguageColor, getProviderInfo, formatDate, formatNumber } from '../lib/utils';

interface ModuleCardProps {
  module: Repository;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const manifest = parse(module.manifest.text) as Manifest | undefined;

  const moduleName = manifest?.title || module.name;
  const moduleDescription = manifest?.summary || module.description || 'No description available';
  const moduleLinks = manifest?.links || [];

  const stars = formatNumber(module.stargazerCount);
  const languageColor = module.primaryLanguage
    ? getLanguageColor(module.primaryLanguage?.name || '')
    : null;
  const updatedDate = formatDate(module.updatedAt);

  console.log(manifest);

  return (
    <div className="group border-sSlate-200 hover:border-sSlate-300 relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={`https://github.com/asimov-modules.png`}
            alt="asimov-modules avatar"
            className="h-8 w-8 rounded-full"
          />
          <div>
            <h3 className="text-sSlate-800 group-hover:text-oOrange-500 font-medium transition-colors">
              {moduleName}
            </h3>
            <p className="text-gGray-400 text-sm">asimov-modules</p>
          </div>
        </div>
        <div className="text-gGray-400 flex items-center space-x-1">
          <Star className="text-base" />
          <span className="text-sm font-medium">{stars}</span>
        </div>
      </div>

      <p className="text-gGray-500 mb-4 line-clamp-2 text-sm leading-relaxed">
        {moduleDescription}
      </p>

      {moduleLinks && moduleLinks.length > 0 && (
        <div className="mb-4 flex items-center space-x-2">
          <span className="text-gGray-400 text-xs font-medium">Links:</span>
          <div className="flex items-center space-x-2">
            {moduleLinks.map((link) => {
              const provider = getProviderInfo(link);
              return (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative z-20 transition-transform hover:scale-110 ${provider.color}`}
                  title={provider.title}
                >
                  <provider.icon className="h-5 w-5 text-xs" />
                </a>
              );
            })}
          </div>
        </div>
      )}

      <div className="text-gGray-400 flex w-full items-center justify-between text-xs">
        <div className="flex items-center space-x-4">
          {module.primaryLanguage && (
            <div className="flex items-center space-x-1">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: languageColor || '#6B7280' }}
              ></div>
              <span className="text-gGray-500 text-xs">{module.primaryLanguage.name}</span>
            </div>
          )}

          {/* TODO: collect this data */}
          {/* {module.contributors_count && module.contributors_count > 0 && (
            <div className="flex items-center space-x-1">
              <Users size={12} />
              <span>{module.contributors_count}</span>
            </div>
          )} */}
        </div>
        <div className="text-gGray-400 flex items-center space-x-1">
          <Calendar className="text-xs" />
          <span className="text-xs">Updated: {updatedDate}</span>
        </div>
      </div>
      <a
        href={module.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`View ${module.name} on GitHub`}
      ></a>
    </div>
  );
}
