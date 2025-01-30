export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

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
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "_");
}

// TODO: remove this after implementing the actual API
export const labels = ["History", "Timeline", "Science", "Tech", "Fact-checking", "Emerging industries"];
