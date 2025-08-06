import type { APIRoute } from 'astro';
import { githubApi } from '../../lib/github';
import type { DataSource } from '../../types';

export const GET: APIRoute = async ({ url }) => {
  try {
    const searchParams = url.searchParams;
    const search = searchParams.get('search') || '';

    const sources = await githubApi.fetchDataSources();

    // Filter sources based on search query if provided
    let filteredSources = sources;
    if (search.trim()) {
      const query = search.toLowerCase();
      filteredSources = sources.filter(
        (source: DataSource) =>
          source.dataset.toLowerCase().includes(query) ||
          source.url_prefix.toLowerCase().includes(query) ||
          source.module_label.toLowerCase().includes(query) ||
          source.module_name.toLowerCase().includes(query) ||
          source.flows.some((flow: string) => flow.toLowerCase().includes(query))
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          sources: filteredSources,
          total: filteredSources.length
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error fetching sources:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch data sources'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
