import { j as json } from './index2-BIAFQWR9.js';

const GITHUB_API_BASE = "https://api.github.com";
const ORG_NAME = "asimov-modules";
const EXCLUDED_REPOS = [".github"];
class GitHubAPI {
  token;
  constructor(token) {
    this.token = token;
  }
  getHeaders() {
    const headers = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "asimov-directory"
    };
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    return headers;
  }
  shouldIncludeRepo(repo) {
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
  getGitHubSort(sortOption) {
    switch (sortOption) {
      case "popular":
        return "sort=stargazers&direction=desc";
      case "newest":
        return "sort=created&direction=desc";
      case "updated":
        return "sort=updated&direction=desc";
      case "relevant":
      default:
        return "sort=updated&direction=desc";
    }
  }
  sortModulesClientSide(modules, sortOption) {
    const sorted = [...modules];
    switch (sortOption) {
      case "popular":
        return sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
      case "newest":
        return sorted.sort(
          (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
      case "updated":
        return sorted.sort(
          (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
      case "relevant":
        return sorted.sort((a, b) => {
          const aScore = this.calculateRelevanceScore(a);
          const bScore = this.calculateRelevanceScore(b);
          return bScore - aScore;
        });
      default:
        return sorted;
    }
  }
  calculateRelevanceScore(module) {
    const stars = module.stargazers_count || 0;
    const hasDescription = module.description ? 1 : 0;
    const hasTopics = module.topics.length > 0 ? 1 : 0;
    const contributors = module.contributors_count || 0;
    const daysSinceUpdate = (Date.now() - new Date(module.updated_at).getTime()) / (1e3 * 60 * 60 * 24);
    const recencyScore = Math.max(0, 365 - daysSinceUpdate) / 365;
    return stars * 2 + // Stars are important
    contributors * 1.5 + // Contributors indicate activity
    hasDescription * 10 + // Having description is important
    hasTopics * 5 + // Topics help categorization
    recencyScore * 20;
  }
  async fetchOrganizationRepos(sortOption = "relevant") {
    try {
      const sortParam = this.getGitHubSort(sortOption);
      const response = await fetch(
        `${GITHUB_API_BASE}/orgs/${ORG_NAME}/repos?${sortParam}&per_page=100`,
        { headers: this.getHeaders() }
      );
      if (!response.ok) {
        const rateLimit = response.headers.get("X-RateLimit-Remaining");
        const resetTime = response.headers.get("X-RateLimit-Reset");
        console.warn(
          `GitHub API rate limit remaining: ${rateLimit}, resets at: ${resetTime ? new Date(parseInt(resetTime) * 1e3) : "unknown"}`
        );
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      const repos = await response.json();
      const filteredRepos = repos.filter(this.shouldIncludeRepo);
      const modulesWithContributors = await Promise.all(
        filteredRepos.map(async (repo) => {
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
          };
        })
      );
      return this.sortModulesClientSide(modulesWithContributors, sortOption);
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      throw error;
    }
  }
  async getContributorsCount(repoFullName) {
    try {
      const response = await fetch(
        `${GITHUB_API_BASE}/repos/${repoFullName}/contributors?per_page=1`,
        { headers: this.getHeaders() }
      );
      if (!response.ok) {
        console.warn(`Failed to fetch contributors for ${repoFullName}: ${response.status}`);
        return 0;
      }
      const linkHeader = response.headers.get("Link");
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
      const response = await fetch(`${GITHUB_API_BASE}/rate_limit`, { headers: this.getHeaders() });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn("Failed to get rate limit info:", error);
    }
    return null;
  }
}
const GITHUB_TOKEN = "ghs_itXj8KzMl0e2AIePLml4lAzulrqtTm0D3wUj";
const githubApi = new GitHubAPI(GITHUB_TOKEN);
async function GET({ url }) {
  try {
    const sortParam = url.searchParams.get("sort");
    const sort = ["relevant", "popular", "newest", "updated"].includes(sortParam) ? sortParam : "relevant";
    const rateLimit = await githubApi.getRateLimit();
    if (rateLimit) {
      console.log(
        `GitHub API rate limit: ${rateLimit.resources.core.remaining}/${rateLimit.resources.core.limit}`
      );
    }
    const modules = await githubApi.fetchOrganizationRepos(sort);
    return json({
      modules,
      total: modules.length,
      sort,
      rateLimit: rateLimit?.resources.core
    });
  } catch (error) {
    console.error("API Error:", error);
    return json(
      {
        error: "Failed to fetch modules",
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

export { GET };
//# sourceMappingURL=_server.ts-D7GhPQlr.js.map
