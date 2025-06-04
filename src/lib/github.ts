import type { GitHubModule, SortOption } from './types';

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

    if (repo.private) {
      return false;
    }

    return true;
  }

  private getGitHubSort(sortOption: SortOption): string {
    switch (sortOption) {
      case 'popular':
        return 'sort=stargazers&direction=desc';
      case 'newest':
        return 'sort=created&direction=desc';
      case 'updated':
        return 'sort=updated&direction=desc';
      case 'relevant':
      default:
        return 'sort=updated&direction=desc'; // Default to updated for "relevant"
    }
  }

  private sortModulesClientSide(modules: GitHubModule[], sortOption: SortOption): GitHubModule[] {
    const sorted = [...modules];

    switch (sortOption) {
      case 'popular':
        return sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
      case 'newest':
        return sorted.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
      case 'updated':
        return sorted.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
      case 'relevant':
        // Custom relevance score: combines stars, recent activity, and has description
        return sorted.sort((a, b) => {
          const aScore = this.calculateRelevanceScore(a);
          const bScore = this.calculateRelevanceScore(b);
          return bScore - aScore;
        });
      default:
        return sorted;
    }
  }

  private calculateRelevanceScore(module: GitHubModule): number {
    const stars = module.stargazers_count || 0;
    const hasDescription = module.description ? 1 : 0;
    const hasTopics = module.topics.length > 0 ? 1 : 0;
    const contributors = module.contributors_count || 0;

    // Days since last update (recent = higher score)
    const daysSinceUpdate = (Date.now() - new Date(module.updated_at).getTime()) / (1000 * 60 * 60 * 24);
    const recencyScore = Math.max(0, 365 - daysSinceUpdate) / 365; // Higher score for more recent updates

    // Weighted relevance score
    return (
      stars * 2 +                    // Stars are important
      contributors * 1.5 +           // Contributors indicate activity
      hasDescription * 10 +          // Having description is important
      hasTopics * 5 +               // Topics help categorization
      recencyScore * 20             // Recent activity is valuable
    );
  }

  async fetchOrganizationRepos(sortOption: SortOption = 'relevant'): Promise<GitHubModule[]> {
    try {
      const sortParam = this.getGitHubSort(sortOption);
      const response = await fetch(
        `${GITHUB_API_BASE}/orgs/${ORG_NAME}/repos?${sortParam}&per_page=100`,
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

      // Apply client-side sorting for better control
      return this.sortModulesClientSide(modulesWithContributors, sortOption);
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
