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

export function formatStars(count: number): string {
  if (count >= 1000) {
    const thousands = count / 1000;
    return Number.isInteger(thousands) ? `${thousands}k` : `${thousands.toFixed(1)}k`;
  }
  return count.toString();
}

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
