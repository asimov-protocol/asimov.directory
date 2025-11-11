type PrimaryLanguage = {
  name: string;
}

export interface Repository {
  name: string;
  description: string;
  stargazerCount: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  primaryLanguage: PrimaryLanguage| null;
}

export interface GraphQLPagination {
  endCursor: string | null;
  hasNextPage: boolean;
}
