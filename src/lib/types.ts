export interface GitHubModule {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	stargazers_count: number;
	language: string | null;
	topics: string[];
	updated_at: string;
	contributors_count?: number;
	owner: {
		login: string;
		avatar_url: string;
	};
}

export interface GitHubContributor {
	login: string;
	avatar_url: string;
	contributions: number;
}

export interface DataSource {
	dataset: string;
	url_prefix: string;
	json: boolean;
	rdf: boolean;
}

export type SortOption = 'relevant' | 'popular' | 'newest' | 'updated';
