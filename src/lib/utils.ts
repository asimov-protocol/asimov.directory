import React from 'react';
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

export const DOMAIN_ICONS: Record<string, React.ComponentType<any>> = {
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
  'youtube.com': 'YouTube',
};

export function getDomainIcon(domain: string): React.ComponentType<any> {
  const IconComponent = DOMAIN_ICONS[domain.toLowerCase()] || Globe;
  return IconComponent;
}

export function generateDisplayName(domain: string): string {
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
}

/**
 * Removes wildcard prefix from dataset names for consistent grouping.
 * @param dataset - The dataset string that may contain wildcard prefixes
 * @returns The normalized dataset string without wildcard prefixes
 */
export function normalizeDataset(dataset: string): string {
  // Remove wildcard prefix if present
  if (dataset.startsWith('*.')) {
    return dataset.substring(2);
  }
  return dataset;
}

export interface GroupedSource {
  dataset: string;
  endpoints: {
    url_prefix: string;
    sources: import('../types').DataSource[];
  }[];
  totalSources: number;
  hasJson: boolean;
  hasRdf: boolean;
}
