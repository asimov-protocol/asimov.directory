import React from 'react';
import {
  House,
  Storefront,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
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
  'twitter.com': TwitterLogo,
  'x.com': TwitterLogo,
  'youtube.com': YoutubeLogo,
  'google.com': GoogleLogo,
  'indeed.com': Briefcase,
  'ebay.com': ShoppingBag,
  'crunchbase.com': Rocket,
  'walmart.com': ShoppingBag,
  'yahoo.com': ChartLineUp
};

export function getDomainIcon(domain: string): React.ComponentType<any> {
  const IconComponent = DOMAIN_ICONS[domain.toLowerCase()] || Globe;
  return IconComponent;
}

export function generateDisplayName(domain: string): string {
  const domainName = domain.split('.')[0];
  return domainName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
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
