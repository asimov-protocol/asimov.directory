import type { GitHubModule } from '../types';
import { Star, Calendar, Globe, Users } from '@phosphor-icons/react';
import { Crates, Github, Npm, PyPi, RubyGems } from './icons';

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
    icon: Github,
    color: 'text-gray-800',
    title: 'GitHub'
  },
  {
    pattern: 'crates.io',
    icon: Crates,
    color: 'text-green-600',
    title: 'Crates.io'
  },
  {
    pattern: 'pypi.org',
    icon: PyPi,
    color: 'text-blue-600',
    title: 'PyPI'
  },
  {
    pattern: 'rubygems.org',
    icon: RubyGems,
    color: 'text-red-600',
    title: 'RubyGems'
  },
  {
    pattern: 'npmjs.com',
    icon: Npm,
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
    const domain = url.toLowerCase();
    const provider = PROVIDER_INFO.find((p) => domain.includes(p.pattern));

    return (
      provider || {
        icon: Globe,
        color: 'text-gray-500',
        title: getHostname(url)
      }
    );
  };

  const getHostname = (url: string): string => {
    try {
      return new URL(url).hostname;
    } catch {
      return 'External Link';
    }
  };

  return (
    <a
      className="group border-sSlate-200 hover:border-sSlate-300 relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
      aria-label={`View ${module.name} on GitHub`}
      href={module.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
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

      {module.metadata?.links && module.metadata.links.length > 0 && (
        <div className="mb-4 flex items-center space-x-2">
          <span className="text-gGray-400 text-xs font-medium">Links:</span>
          <div className="flex items-center space-x-2">
            {module.metadata.links.map((link) => {
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
          {module.language && (
            <div className="flex items-center space-x-1">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: LANGUAGE_COLORS[module.language] || '#6B7280' }}
              ></div>
              <span className="text-gGray-500 text-xs">{module.language}</span>
            </div>
          )}

          {module.contributors_count && module.contributors_count > 0 && (
            <div className="flex items-center space-x-1">
              <Users size={12} />
              <span>{module.contributors_count}</span>
            </div>
          )}
        </div>
        <div className="text-gGray-400 flex items-center space-x-1">
          <Calendar className="text-xs" />
          <span className="text-xs">Updated: {formatDate(module.updated_at)}</span>
        </div>
      </div>
    </a>
  );
}
