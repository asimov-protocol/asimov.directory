// Rate limit info
export const RATE_LIMITS = {
	UNAUTHENTICATED: 60, // requests per hour
	AUTHENTICATED: 5000 // requests per hour
} as const;
