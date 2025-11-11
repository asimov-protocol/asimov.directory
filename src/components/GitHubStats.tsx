import { useQuery } from '@tanstack/react-query';
import { Star, Users } from '@phosphor-icons/react';
import { fetchTotalModuleStars, fetchOrgFollowers } from '../lib/github';
import { asimovModulesOrgUrl, asimovPlatformOrgUrl } from '../lib/config';
import { formatStars } from '../lib/utils';
import { queryClient } from '../store';

import MetricsBadge from './MetricsBadge';

interface GitHubStatsProps {
  variant?: 'desktop' | 'mobile';
}

export default function GitHubStats({ variant = 'desktop' }: GitHubStatsProps) {
  const { data: stars, isLoading: isStarsLoading } = useQuery({
    queryKey: ['asimov-modules-stars'],
    queryFn: fetchTotalModuleStars,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 20 * 60 * 1000, // 20 minutes
    retry: 2
  }, queryClient);

  const { data: followers, isLoading: isFollowersLoading } = useQuery({
    queryKey: ['asimov-platform-followers'],
    queryFn: fetchOrgFollowers,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 20 * 60 * 1000, // 20 minutes
    retry: 2
  }, queryClient);

  const containerClass =
    variant === 'desktop'
      ? 'flex items-center gap-3'
      : 'flex items-center justify-center gap-4 py-2';

  return (
    <div className={containerClass}>
      <MetricsBadge
        value={formatStars(stars ?? 0)}
        href={asimovModulesOrgUrl}
        icon={Star}
        variant={variant}
        loading={isStarsLoading}
      />
      <MetricsBadge
        value={formatStars(followers ?? 0)}
        href={asimovPlatformOrgUrl}
        icon={Users}
        variant={variant}
        loading={isFollowersLoading}
      />
    </div>
  );
}
