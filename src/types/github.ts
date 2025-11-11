type PrimaryLanguage = {
  name: string;
}

type ManifestRaw = {
  text: string;
}

export interface Manifest {
  name: string;
  label: string;
  title: string;
  summary: string;
  links: string[];
  provides: {
    programs: string[];
  };
  handles: {
    url_protocols: string[];
    file_extensions: string[];
    content_types: string[];
  };
}

export interface Repository {
  name: string;
  description: string;
  stargazerCount: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  primaryLanguage: PrimaryLanguage| null;
  manifest: ManifestRaw;
}

export interface GraphQLPagination {
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface Repositories {
  repositories: Repository[];
  meta: GraphQLPagination;
}
