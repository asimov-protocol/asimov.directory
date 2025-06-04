import type { GitHubModule } from './types';

const GITHUB_API_BASE = 'https://api.github.com';
const ORG_NAME = 'asimov-modules';
const EXCLUDED_REPOS = ['.github'];

export class GitHubAPI {
  private token?: string;

  constructor(token?: string) {
    this.token = token;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'asimov-directory'
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  private shouldIncludeRepo(repo: any): boolean {
    if (EXCLUDED_REPOS.includes(repo.name)) {
      return false;
    }

    if (repo.fork) {
      return false;
    }

    if (repo.archived) {
      return false;
    }

    // Exclude private repos (they shouldn't appear in org API anyway, but just in case)
    if (repo.private) {
      return false;
    }

    return true;
  }

  async fetchOrganizationRepos(): Promise<GitHubModule[]> {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/orgs/${ORG_NAME}/repos?sort=updated&per_page=100`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        // Log rate limit info for debugging
        const rateLimit = response.headers.get('X-RateLimit-Remaining');
        const resetTime = response.headers.get('X-RateLimit-Reset');
        console.warn(`GitHub API rate limit remaining: ${rateLimit}, resets at: ${resetTime ? new Date(parseInt(resetTime) * 1000) : 'unknown'}`);

        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const repos = await response.json();
      const filteredRepos = repos.filter(this.shouldIncludeRepo);

      const modulesWithContributors = await Promise.all(
        filteredRepos.map(async (repo: any) => {
          const contributorsCount = await this.getContributorsCount(repo.full_name);

          return {
            id: repo.id,
            name: repo.name,
            full_name: repo.full_name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            language: repo.language,
            topics: repo.topics || [],
            updated_at: repo.updated_at,
            contributors_count: contributorsCount,
            owner: {
              login: repo.owner.login,
              avatar_url: repo.owner.avatar_url
            }
          } as GitHubModule;
        })
      );

      return modulesWithContributors;
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  }

  private async getContributorsCount(repoFullName: string): Promise<number> {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/repos/${repoFullName}/contributors?per_page=1`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        console.warn(`Failed to fetch contributors for ${repoFullName}: ${response.status}`);
        return 0;
      }

      const linkHeader = response.headers.get('Link');
      if (linkHeader) {
        const lastPageMatch = linkHeader.match(/page=(\d+).*?rel="last"/);
        if (lastPageMatch) {
          return parseInt(lastPageMatch[1], 10);
        }
      }

      const contributors = await response.json();
      return contributors.length;
    } catch (error) {
      console.warn(`Error fetching contributors for ${repoFullName}:`, error);
      return 0;
    }
  }

  // Method to check current rate limit status
  async getRateLimit() {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/rate_limit`,
        { headers: this.getHeaders() }
      );

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn('Failed to get rate limit info:', error);
    }
    return null;
  }
}

// Create instance with token from environment variable
const githubToken = typeof import.meta.env !== 'undefined' ? import.meta.env.GITHUB_TOKEN : undefined;
export const githubApi = new GitHubAPI(githubToken);
