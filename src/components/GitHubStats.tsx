import { useQuery } from '@tanstack/react-query';
import { Star, Users } from '@phosphor-icons/react';
import { githubApi, formatStars } from '../lib/github';
import { asimovModulesOrgUrl, asimovPlatformOrgUrl } from '../lib/config';
import { queryClient } from '../store';

interface GitHubStatsProps {
  variant?: 'desktop' | 'mobile';
}

export default function GitHubStats({ variant = 'desktop' }: GitHubStatsProps) {
  const githubStatsQuery = useQuery({
    queryKey: ['github-stats'],
    queryFn: () => githubApi.fetchGitHubStats(),
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 20 * 60 * 1000, // 20 minutes
    retry: 1
  }, queryClient);

  const containerClass =
    variant === 'desktop'
      ? 'flex items-center gap-3'
      : 'flex items-center justify-center gap-4 py-2';

  const linkClass =
    variant === 'desktop'
      ? 'group flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white/80 px-3 py-1.5 text-sm transition-all hover:border-orange-200 hover:bg-orange-50'
      : 'flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm';

  const iconClass =
    variant === 'desktop' ? 'text-gray-500 group-hover:text-orange-600' : 'text-gray-500';

  const textClass =
    variant === 'desktop'
      ? 'font-medium text-gray-700 group-hover:text-orange-700'
      : 'font-medium text-gray-700';

  const loadingContainerClass =
    variant === 'desktop'
      ? 'flex items-center gap-3'
      : 'flex items-center justify-center gap-4 py-2';

  if (githubStatsQuery.data) {
    return (
      <div className={containerClass}>
        <a
          href={asimovModulesOrgUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <Star size={14} className={iconClass} />
          <span className={textClass}>
            {formatStars(githubStatsQuery.data.stars)}
          </span>
        </a>
        <a
          href={asimovPlatformOrgUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <Users size={14} className={iconClass} />
          <span className={textClass}>
            {formatStars(githubStatsQuery.data.followers)}
          </span>
        </a>
      </div>
    );
  }

  if (githubStatsQuery.isLoading) {
    return (
      <div className={loadingContainerClass}>
        <div className="animate-pulse rounded-lg bg-gray-200 px-3 py-1.5">
          <div className="h-4 w-8 rounded bg-gray-300"></div>
        </div>
        <div className="animate-pulse rounded-lg bg-gray-200 px-3 py-1.5">
          <div className="h-4 w-8 rounded bg-gray-300"></div>
        </div>
      </div>
    );
  }
  return null;
}
