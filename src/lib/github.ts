import type { GitHubModule, ModuleMetadata, SortOption, DataSource } from '../types';
import { load as yamlLoad } from 'js-yaml';
import { ZUPLO_API_BASE, ASIMOV_MODULES_ORG_NAME, ASIMOV_PLATFORM_ORG_NAME } from './config';

// Types for the API response
interface ApiModuleInfo {
	name: string;
	description: string | null;
	stars: number;
	starsPretty: string;
	url: string;
	language: string;
	topics: string[];
	manifestYAML?: string | null;
	contributors: number;
	createdAt: string;
	updatedAt: string;
}

interface ApiMetricsResponse {
	fetchedAt: string;
	orgFollowers: number | null;
	totalStars: number;
	repositories: ApiModuleInfo[];
	pinnedRepositories: ApiModuleInfo[];
}

interface PlatformMetricsResponse {
	fetchedAt: string;
	orgFollowers: number | null;
	totalStars: number;
	repositories: any[]; // We don't need the detailed structure for platform repos
}

export class GitHubAPI {
	private async fetchMetricsData(): Promise<ApiMetricsResponse> {
		try {
			const response = await fetch(`${ZUPLO_API_BASE}/metrics/${ASIMOV_MODULES_ORG_NAME}`);

			if (!response.ok) {
				throw new Error(`API error: ${response.status} ${response.statusText}`);
			}

			return await response.json();
		} catch (error) {
			console.error('Error fetching modules data:', error);
			throw error;
		}
	}

	private async fetchPlatformData(): Promise<PlatformMetricsResponse> {
		try {
			const response = await fetch(`${ZUPLO_API_BASE}/metrics/${ASIMOV_PLATFORM_ORG_NAME}`);
			if (!response.ok) {
				throw new Error(`Platform API error: ${response.status} ${response.statusText}`);
			}
			return await response.json();
		} catch (error) {
			console.error('Error fetching platform data:', error);
			throw error;
		}
	}

	private parseModuleMetadata(manifestYAML: string | null): ModuleMetadata | null {
		if (!manifestYAML) return null;

		try {
			const parsedYaml = yamlLoad(manifestYAML) as any;

			return {
				name: parsedYaml.name || '',
				label: parsedYaml.label || '',
				summary: parsedYaml.summary || '',
				links: Array.isArray(parsedYaml.links) ? parsedYaml.links : [],
				provides: parsedYaml.provides || {},
				handles: parsedYaml.handles || {}
			};
		} catch (error) {
			console.warn('Failed to parse module metadata YAML:', error);
			return null;
		}
	}
	private convertApiModuleToGitHubModule(apiModule: ApiModuleInfo): GitHubModule {
		const metadata = this.parseModuleMetadata(apiModule.manifestYAML || null);

		return {
			id: Math.abs(this.hashCode(apiModule.name)),
			name: apiModule.name,
			full_name: `asimov-modules/${apiModule.name}`,
			description: apiModule.description,
			html_url: apiModule.url,
			stargazers_count: apiModule.stars,
			language: apiModule.language,
			topics: apiModule.topics,
			created_at: apiModule.createdAt,
			updated_at: apiModule.updatedAt,
			contributors_count: apiModule.contributors,
			owner: {
				login: 'asimov-modules',
				avatar_url: 'https://github.com/asimov-modules.png'
			},
			metadata: metadata || undefined
		};
	}

	private hashCode(str: string): number {
		let hash = 0;
		if (str.length === 0) return hash;
		for (let i = 0; i < str.length; i++) {
			const char = str.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	}

	private sortModulesClientSide(modules: GitHubModule[], sortOption: SortOption): GitHubModule[] {
		const sorted = [...modules];

		switch (sortOption) {
			case 'popular':
				return sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
			case 'newest':
				return sorted.sort(
					(a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
				);
			case 'updated':
				return sorted.sort(
					(a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
				);
			case 'relevant':
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
		const hasMetadata = module.metadata ? 1 : 0;
		const contributors = module.contributors_count || 0;

		// Days since last update (recent = higher score)
		const daysSinceUpdate =
			(Date.now() - new Date(module.updated_at).getTime()) / (1000 * 60 * 60 * 24);
		const recencyScore = Math.max(0, 365 - daysSinceUpdate) / 365; // Higher score for more recent updates

		return (
			stars * 2 +
			contributors * 1.5 +
			hasDescription * 10 +
			hasTopics * 5 +
			hasMetadata * 15 +
			recencyScore * 20
		);
	}

	async fetchOrganizationRepos(sortOption: SortOption = 'relevant'): Promise<GitHubModule[]> {
		try {
			const data = await this.fetchMetricsData();
			const modules = data.repositories.map((apiModule) =>
				this.convertApiModuleToGitHubModule(apiModule)
			);

			return this.sortModulesClientSide(modules, sortOption);
		} catch (error) {
			console.error('Error fetching organization repositories:', error);
			throw error;
		}
	}

	async fetchDataSources(): Promise<DataSource[]> {
		try {
			const modules = await this.fetchOrganizationRepos();
			const dataSources: DataSource[] = [];
			const seenPrefixes = new Set<string>();

			for (const module of modules) {
				const handles = module.metadata?.handles;
				if (!handles || !module.metadata) continue;

				if (handles.url_prefixes) {
					for (const urlPrefix of handles.url_prefixes) {
						// Create a unique key for deduplication
						const uniqueKey = `${module.name}-${urlPrefix}`;
						if (!seenPrefixes.has(uniqueKey)) {
							seenPrefixes.add(uniqueKey);
							dataSources.push({
								id: uniqueKey, // Use the unique key as ID
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

				if (handles.url_patterns) {
					for (const urlPattern of handles.url_patterns) {
						// Convert patterns like "https://google.com/search?q=:query" to prefixes
						// Find the first parameter placeholder (starting with :)
						const parameterIndex = urlPattern.indexOf(':', urlPattern.indexOf('://') + 3); // Skip the :// in protocol

						if (parameterIndex > 0) {
							const prefix = urlPattern.substring(0, parameterIndex);
							// Only add if it's a valid URL prefix (not just a protocol)
							if (prefix.includes('://') && prefix.length > 8) {
								// "https://" is 8 chars
								const uniqueKey = `${module.name}-${prefix}`;
								if (!seenPrefixes.has(uniqueKey)) {
									seenPrefixes.add(uniqueKey);
									dataSources.push({
										id: uniqueKey,
										dataset: this.getDomainFromUrl(prefix),
										url_prefix: prefix,
										json: true,
										rdf: false,
										module_name: module.name,
										module_label: module.metadata.label || module.name,
										flows: module.metadata.provides?.flows || []
									});
								}
							}
						}
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
			const [modulesData, platformData] = await Promise.all([
				this.fetchMetricsData(),
				this.fetchPlatformData()
			]);

			return {
				stars: modulesData.totalStars,
				followers: platformData.orgFollowers || 0
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

export const githubApi = new GitHubAPI();
