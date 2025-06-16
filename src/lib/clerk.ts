import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Clerk } from '@clerk/clerk-js';

export const clerk = writable<Clerk | null>(null);
export const user = writable<Clerk['user'] | null>(null);
export const isLoaded = writable(false);
export const isSignedIn = writable(false);

let clerkInstance: Clerk | null = null;

export async function initializeClerk() {
	if (!browser || clerkInstance) return clerkInstance;

	const { Clerk } = await import('@clerk/clerk-js');

	clerkInstance = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

	await clerkInstance.load();

	clerk.set(clerkInstance);
	user.set(clerkInstance.user);
	isSignedIn.set(!!clerkInstance.user);
	isLoaded.set(true);

	clerkInstance.addListener(({ user: updatedUser }) => {
		user.set(updatedUser);
		isSignedIn.set(!!updatedUser);
	});

	return clerkInstance;
}

export function getClerk() {
	return clerkInstance;
}
