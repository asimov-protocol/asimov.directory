import type { GitHubModule } from '../types';
import { Star, Clock, GithubLogo, FileCode, Diamond, Cube } from '@phosphor-icons/react';

interface ModuleCardProps {
  module: GitHubModule;
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95'
};

const PROVIDER_INFO = [
  {
    pattern: 'github.com',
    icon: GithubLogo,
    color: 'text-sSlate-600',
    title: 'GitHub'
  },
  {
    pattern: 'pypi.org',
    icon: FileCode,
    color: 'text-blue-600',
    title: 'PyPI'
  },
  {
    pattern: 'rubygems.org',
    icon: Diamond,
    color: 'text-red-600',
    title: 'RubyGems'
  },
  {
    pattern: 'npmjs.com',
    icon: Cube,
    color: 'text-red-500',
    title: 'npm'
  }
];

export default function ModuleCard({ module }: ModuleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const getProviderInfo = (url: string) => {
    return PROVIDER_INFO.find((provider) => url.includes(provider.pattern));
  };

  const providerInfo = getProviderInfo(module.html_url);

  return (
    <div className="group border-sSlate-200 hover:border-sSlate-300 relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={module.owner.avatar_url}
            alt={module.owner.login}
            className="h-8 w-8 rounded-full"
          />
          <div>
            <h3 className="text-sSlate-800 group-hover:text-oOrange-500 font-medium transition-colors">
              {module.metadata?.label || module.name}
            </h3>
            <p className="text-gGray-400 text-sm">{module.owner.login}</p>
          </div>
        </div>
        <div className="text-gGray-400 flex items-center space-x-1">
          <Star className="text-base" />
          <span className="text-sm font-medium">{formatNumber(module.stargazers_count)}</span>
        </div>
      </div>

      <p className="text-gGray-500 mb-4 line-clamp-2 text-sm leading-relaxed">
        {module.metadata?.summary || module.description || 'No description available'}
      </p>

      {module.topics && module.topics.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {module.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="bg-sSlate-100 text-sSlate-600 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
            >
              {topic}
            </span>
          ))}
          {module.topics.length > 3 && (
            <span className="bg-gGray-100 text-gGray-400 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
              +{module.topics.length - 3}
            </span>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {module.language && (
            <div className="flex items-center space-x-1">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: LANGUAGE_COLORS[module.language] || '#6B7280' }}
              ></div>
              <span className="text-gGray-500 text-xs">{module.language}</span>
            </div>
          )}

          <div className="text-gGray-400 flex items-center space-x-1">
            <Clock className="text-xs" />
            <span className="text-xs">{formatDate(module.updated_at)}</span>
          </div>
        </div>

        {providerInfo && (
          <div className="flex items-center space-x-1">
            <providerInfo.icon className={`${providerInfo.color} text-sm`} />
            <span className="text-gGray-400 text-xs">{providerInfo.title}</span>
          </div>
        )}
      </div>

      <a
        href={module.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`View ${module.name} on GitHub`}
      ></a>
    </div>
  );
}
