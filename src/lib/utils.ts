import type { ComponentType } from 'react';
import {
  House,
  Storefront,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
  GoogleLogo,
  Briefcase,
  ShoppingBag,
  Rocket,
  ChartLineUp,
  Globe
} from '@phosphor-icons/react';

import { Crates, Github, Npm, PyPi, RubyGems } from '../components/icons';

import { ZUPLO_API_BASE } from './config';

export const DOMAIN_ICONS: Record<string, ComponentType<any>> = {
  'airbnb.com': House,
  'amazon.com': Storefront,
  'facebook.com': FacebookLogo,
  'instagram.com': InstagramLogo,
  'linkedin.com': LinkedinLogo,
  'twitter.com': XLogo,
  'x.com': XLogo,
  'youtube.com': YoutubeLogo,
  'google.com': GoogleLogo,
  'indeed.com': Briefcase,
  'ebay.com': ShoppingBag,
  'crunchbase.com': Rocket,
  'walmart.com': ShoppingBag,
  'yahoo.com': ChartLineUp
};

const DOMAIN_NAMES: Record<string, string> = {
  'twitter.com': 'X (Twitter)',
  'x.com': 'X (Twitter)',
  'ebay.com': 'eBay',
  'linkedin.com': 'LinkedIn',
  '*.linkedin.com': 'LinkedIn',
  'duckduckgo.com': 'DuckDuckGo',
  'youtube.com': 'YouTube'
};

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

const getHostname = (url: string): string => {
  try {
    return new URL(url).hostname;
  } catch {
    return 'External Link';
  }
};

export const getProviderInfo = (url: string) => {
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

export const getLanguageColor = (language: string): string => {
  return LANGUAGE_COLORS[language] || '#6B7280';
};

export const getDomainIcon = (domain: string): React.ComponentType<any> => {
  const IconComponent = DOMAIN_ICONS[domain.toLowerCase()] || Globe;
  return IconComponent;
};

export const generateDisplayName = (domain: string): string => {
  const lowerDomain = domain.toLowerCase();

  // Check if we have a custom name for this domain
  if (DOMAIN_NAMES[lowerDomain]) {
    return DOMAIN_NAMES[lowerDomain];
  }

  // Default logic: capitalize each part separated by hyphens
  const domainName = domain.split('.')[0];
  return domainName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

export const formatStars = (count: number): string => {
  if (count >= 1000) {
    const thousands = count / 1000;
    return Number.isInteger(thousands) ? `${thousands}k` : `${thousands.toFixed(1)}k`;
  }
  return count.toString();
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const fetchWithFallback = async <T>(endpoint: string, fallbackData: T): Promise<T> => {
  try {
    const apiUrl = `${ZUPLO_API_BASE}/${endpoint}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error(`Failed to fetch from ${endpoint}:`, err);
    return fallbackData;
  }
};
