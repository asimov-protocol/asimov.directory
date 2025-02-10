/**
 * Converts a string into a "pretty key" format.
 * Example: "English Wikipedia" -> "english_wikipedia"
 *
 * @param input - The input string to convert
 * @returns The formatted key string
 */
export function prettyKey(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '_');
}

/**
 * Formats a date string into a human-readable format.
 * Example: "2021-09-01T00:00:00.000Z" -> "Jan 1, 2021"
 *
 * @param date - The date number in milliseconds
 * @returns The formatted date string
 */
export function formatDate(date: number): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Fetcher function for useSWR to fetch data from an API.
 */
export async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

// TODO: remove this after implementing the actual API
export const labels = [
  'History',
  'Timeline',
  'Science',
  'Tech',
  'Fact-checking',
  'Emerging industries',
];

export const datasetTabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Data viewer', value: 'viewer' },
  // { label: "Query", value: "query" },
  { label: 'Annotation', value: 'annotation' },
  { label: 'History', value: 'history' },
] as const;
