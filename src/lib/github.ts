import type { GitHubModule, ModuleMetadata, SortOption, DataSource } from './types';
import { load as yamlLoad } from 'js-yaml';
import {
	GITHUB_API_BASE,
	ASIMOV_PROTOCOL_ORG_NAME,
	ASIMOV_MODULES_ORG_NAME,
	ASIMOV_DIRECTORY_REPO_NAME,
	EXCLUDED_REPOS
} from './config';

export class GitHubAPI {
	private token?: string;

	constructor(token?: string) {
		this.token = token;
	}

	private getHeaders(): HeadersInit {
		const headers: HeadersInit = {
			Accept: 'application/vnd.github.v3+json',
			'User-Agent': ASIMOV_DIRECTORY_REPO_NAME
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
				return sorted.sort(
					(a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
				);
			case 'updated':
				return sorted.sort(
					(a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
				);
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
		const daysSinceUpdate =
			(Date.now() - new Date(module.updated_at).getTime()) / (1000 * 60 * 60 * 24);
		const recencyScore = Math.max(0, 365 - daysSinceUpdate) / 365; // Higher score for more recent updates

		// Weighted relevance score
		return (
			stars * 2 + // Stars are important
			contributors * 1.5 + // Contributors indicate activity
			hasDescription * 10 + // Having description is important
			hasTopics * 5 + // Topics help categorization
			recencyScore * 20 // Recent activity is valuable
		);
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
			const response = await fetch(`${GITHUB_API_BASE}/rate_limit`, { headers: this.getHeaders() });

			if (response.ok) {
				return await response.json();
			}
		} catch (error) {
			console.warn('Failed to get rate limit info:', error);
		}
		return null;
	}

	async fetchModuleMetadata(owner: string, repo: string): Promise<ModuleMetadata | null> {
		try {
			const response = await fetch(
				`${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/.asimov/module.yaml`,
				{
					headers: this.getHeaders()
				}
			);

			if (!response.ok) {
				return null;
			}

			const data = await response.json();
			// Use Buffer instead of atob for Node.js compatibility
			const content = Buffer.from(data.content, 'base64').toString('utf-8');

			// Parse YAML using js-yaml
			const parsedYaml = yamlLoad(content) as any;

			// Validate and transform to our ModuleMetadata type
			const metadata: ModuleMetadata = {
				name: parsedYaml.name || '',
				label: parsedYaml.label || '',
				summary: parsedYaml.summary || '',
				links: Array.isArray(parsedYaml.links) ? parsedYaml.links : [],
				provides: parsedYaml.provides || {},
				handles: parsedYaml.handles || {}
			};

			return metadata;
		} catch (error) {
			console.warn(`Failed to fetch metadata for ${owner}/${repo}:`, error);
			return null;
		}
	}

	async fetchOrganizationRepos(sortOption: SortOption = 'relevant'): Promise<GitHubModule[]> {
		try {
			const sortParam = this.getGitHubSort(sortOption);
			const response = await fetch(
				`${GITHUB_API_BASE}/orgs/${ASIMOV_MODULES_ORG_NAME}/repos?${sortParam}&per_page=100`,
				{ headers: this.getHeaders() }
			);

			if (!response.ok) {
				const rateLimit = response.headers.get('X-RateLimit-Remaining');
				const resetTime = response.headers.get('X-RateLimit-Reset');
				console.warn(
					`GitHub API rate limit remaining: ${rateLimit}, resets at: ${resetTime ? new Date(parseInt(resetTime) * 1000) : 'unknown'}`
				);

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
						created_at: repo.created_at,
						updated_at: repo.updated_at,
						contributors_count: contributorsCount,
						owner: {
							login: repo.owner.login,
							avatar_url: repo.owner.avatar_url
						}
					} as GitHubModule;
				})
			);

			// Fetch metadata for each module
			const modulesWithMetadata = await Promise.all(
				modulesWithContributors.map(async (module) => {
					const metadata = await this.fetchModuleMetadata(module.owner.login, module.name);
					return { ...module, metadata };
				})
			);

			// Apply client-side sorting for better control
			return this.sortModulesClientSide(modulesWithMetadata, sortOption);
		} catch (error) {
			console.error('Error fetching GitHub repositories:', error);
			throw error;
		}
	}

	async fetchDataSources(): Promise<DataSource[]> {
		try {
			const modules = await this.fetchOrganizationRepos();
			const dataSources: DataSource[] = [];

			for (const module of modules) {
				if (module.metadata?.handles?.url_prefixes) {
					for (const urlPrefix of module.metadata.handles.url_prefixes) {
						dataSources.push({
							dataset: this.getDomainFromUrl(urlPrefix),
							url_prefix: urlPrefix,
							json: true,
							rdf: false,
							module_name: module.name,
							module_label: module.metadata.label || module.name,
							flows: module.metadata.provides?.flows || []
						});
					}
				}
			}

			return dataSources;
		} catch (error) {
			console.error('Error fetching data sources:', error);
			throw error;
		}
	}

	private getDomainFromUrl(url: string): string {
		try {
			return new URL(url).hostname.replace('www.', '');
		} catch {
			return url.split('/')[0].replace('www.', '');
		}
	}

	async fetchGitHubStats(): Promise<{ stars: number; followers: number }> {
		try {
			const [repoResponse, orgResponse] = await Promise.all([
				fetch(
					`${GITHUB_API_BASE}/repos/${ASIMOV_PROTOCOL_ORG_NAME}/${ASIMOV_DIRECTORY_REPO_NAME}`,
					{
						headers: this.getHeaders()
					}
				),
				fetch(`${GITHUB_API_BASE}/orgs/${ASIMOV_PROTOCOL_ORG_NAME}`, {
					headers: this.getHeaders()
				})
			]);

			if (!repoResponse.ok || !orgResponse.ok) {
				throw new Error('Failed to fetch GitHub stats');
			}

			const [repoData, orgData] = await Promise.all([repoResponse.json(), orgResponse.json()]);

			return {
				stars: repoData.stargazers_count || 0,
				followers: orgData.followers || 0
			};
		} catch (error) {
			console.error('Error fetching GitHub stats:', error);
			throw error;
		}
	}
}

export function formatStars(count: number): string {
	if (count >= 1000) {
		const thousands = count / 1000;
		return Number.isInteger(thousands) ? `${thousands}k` : `${thousands.toFixed(1)}k`;
	}
	return count.toString();
}

const githubToken =
	typeof import.meta.env !== 'undefined' ? import.meta.env.GITHUB_TOKEN : undefined;
export const githubApi = new GitHubAPI(githubToken);
