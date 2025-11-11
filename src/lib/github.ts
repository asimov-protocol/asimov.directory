import type {
  Repository,
  Repositories,
  GraphQLPagination,
  AsimovModulesIndex,
  DataSource,
  SortOption
} from '../types';
import { ASIMOV_MODULES_ORG_NAME, ASIMOV_PLATFORM_ORG_NAME } from './config';
import { fetchWithFallback } from './utils';


export const fetchTotalModuleStars = async (): Promise<number> => {
  try {
    const response = await fetchWithFallback(
      `metrics/github/repositories?org=${ASIMOV_MODULES_ORG_NAME}&limit=100`,
      {
        repositories: [],
        meta: { endCursor: null, hasNextPage: false }
      }
    ) as { repositories: Repository[]; meta: GraphQLPagination };
    return response.repositories.reduce((sum, repo) => sum + repo.stargazerCount, 0);
  } catch (error) {
    console.error('Error fetching total module stars:', error);
    throw error;
  }
};

export const fetchOrgFollowers = async (): Promise<number> => {
  try {
    const response = await fetchWithFallback(
      `metrics/github/organisation?org=${ASIMOV_PLATFORM_ORG_NAME}`,
      {
        followers: 0
      }
    );
    return response.followers;
  } catch (error) {
    console.error('Error fetching organization followers:', error);
    throw error;
  }
};

export const fetchGithubRepositories = async (
  after: string | null = null,
  orderBy: SortOption = 'created_at',
  limit: number = 10
): Promise<Repositories> => {
  try {
    const response = await fetchWithFallback(
      `metrics/github/repositories?org=asimov-modules&manifest=true&limit=${limit}${after && `&after=${after}`}${orderBy && `&order=${orderBy}`}`, {
      repositories: [],
      meta: { endCursor: null, hasNextPage: false }
    }) as { repositories: Repository[]; meta: GraphQLPagination };

    return response;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};

export const fetchDataSources = async (): Promise<DataSource[]> => {
  try {
    const response = await fetchWithFallback(
      'metrics/github/asimov-modules-list',
      {}
    ) as AsimovModulesIndex;

    const data = response ? Object.values(response) : [];

    const dataSourceMap = new Map<string, DataSource>();

    for (const module of data) {
      if (module.handles && (module.handles.url_prefixes || module.handles.url_patterns)) {
        const urlGroup = [
          ...module.handles.url_prefixes ?? [],
          ...module.handles.url_patterns ?? []
        ];

        for (const urlPrefix of urlGroup) {
          try {
            const url = new URL(urlPrefix);
            const hostname = url.hostname.startsWith('*.')
              ? url.hostname.substring(2)
              : url.hostname;

            if (!dataSourceMap.has(hostname)) {
              dataSourceMap.set(hostname, {
                dataset: hostname,
                endpoints: [
                  {
                    url: urlPrefix,
                    modules: [{ name: module.name, label: module.label }]
                  }
                ],
              });
            } else {
              const existingDataSource = dataSourceMap.get(hostname)!;
              const existingEndpoint = existingDataSource.endpoints.find(
                (endpoint) => endpoint.url === urlPrefix
              );

              if (existingEndpoint) {
                const moduleExists = existingEndpoint.modules.some(
                  m => m.name === module.name
                );
                if (!moduleExists) {
                  existingEndpoint.modules.push({
                    name: module.name,
                    label: module.label
                  });
                }
              } else {
                existingDataSource.endpoints.push({
                  url: urlPrefix,
                  modules: [{ name: module.name, label: module.label }]
                });
              }
            }
          } catch (error) {
            console.warn(`Invalid URL: ${urlPrefix}`, error);
            continue;
          }
        }
      }
    }

    const dataSourceList = [...dataSourceMap.values()];
    return dataSourceList;
  } catch (error) {
    console.error('Error fetching data sources:', error);
    throw error;
  }
};
