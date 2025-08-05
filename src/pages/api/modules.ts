import type { APIRoute } from 'astro';
import { githubApi } from '../../lib/github';
import type { SortOption } from '../../types';

export const GET: APIRoute = async ({ url }) => {
  try {
    const sortParam = url.searchParams.get('sort') as SortOption;
    const sortOption: SortOption = sortParam || 'relevant';

    const modules = await githubApi.fetchOrganizationRepos(sortOption);

    return new Response(JSON.stringify({
      success: true,
      data: {
        modules,
        count: modules.length,
        sort: sortOption
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    });
  } catch (error) {
    console.error('API Error:', error);

    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch modules',
      data: null
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
