// Data source and general application types
export interface DataSource {
	id: string; // Unique identifier for the data source
	dataset: string; // This will be the domain (e.g., "amazon.com", "facebook.com")
	url_prefix: string;
	json: boolean;
	rdf: boolean;
	module_name: string;
	module_label: string;
	flows: string[];
}

export type SortOption = 'relevant' | 'popular' | 'newest' | 'updated';
