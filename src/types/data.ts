export type SortOption = 'created_at' | 'updated_at';

interface AsimovModuleConfig {
  variables: Array<{
    name: string;
    environment: string;
    default?: string;
  }>;
}

interface AsimovModuleProvides {
  programs: string[];
}

interface AsimovModuleHandles {
  url_protocols?: string[] | null;
  url_prefixes?: string[] | null;
  url_patterns?: string[] | null;
  file_extensions?: string[] | null;
  content_types?: string[] | null;
}

interface AsimovModuleUses {
  env_variables?: string[];
}

export interface AsimovModule {
  '@type': 'AsimovModule';
  name: string;
  label: string;
  title?: string;
  summary: string;
  links: string[];
  config?: AsimovModuleConfig;
  provides?: AsimovModuleProvides;
  handles?: AsimovModuleHandles;
  uses?: AsimovModuleUses;
}

export interface AsimovModulesIndex {
  [moduleName: string]: AsimovModule;
}

interface DataSourceEndpoint {
  url: string;
  modules: {
    name: AsimovModule['name'];
    label: AsimovModule['label'];
  }[];
}

export interface DataSource {
  dataset: string;
  endpoints: DataSourceEndpoint[];
}
