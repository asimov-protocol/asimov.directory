export interface ModuleMetadata {
	name: string;
	label: string;
	summary: string;
	links?: string[];
	provides?: {
		flows?: string[];
	};
	handles?: {
		url_protocols?: string[];
		url_prefixes?: string[];
		url_patterns?: string[];
		file_extensions?: string[];
		content_types?: string[];
	};
}

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
	metadata?: ModuleMetadata;
}

export interface GitHubContributor {
	login: string;
	avatar_url: string;
	contributions: number;
}

export interface DataSource {
	dataset: string; // This will be the domain (e.g., "amazon.com", "facebook.com")
	url_prefix: string;
	json: boolean;
	rdf: boolean;
	module_name: string;
	module_label: string;
	flows: string[];
}

export type SortOption = 'relevant' | 'popular' | 'newest' | 'updated';
