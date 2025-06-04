import { browser } from '$app/environment';

// Get GitHub token from environment variables (server-side only)
export const GITHUB_TOKEN = browser ? undefined : import.meta.env.VITE_GITHUB_TOKEN;

// Rate limit info
export const RATE_LIMITS = {
  UNAUTHENTICATED: 60, // requests per hour
  AUTHENTICATED: 5000  // requests per hour
} as const;
