import { json } from '@sveltejs/kit';
import { GitHubAPI } from '../../../lib/github';
import { GITHUB_TOKEN } from '../../../lib/environment';

console.log('GITHUB_TOKEN:', GITHUB_TOKEN ? 'Available' : 'Not set');

// Create API instance with token if available
const githubApi = new GitHubAPI(GITHUB_TOKEN);

export async function GET() {
  try {
    // Optional: Check rate limit before making requests
    const rateLimit = await githubApi.getRateLimit();
    if (rateLimit) {
      console.log(`GitHub API rate limit: ${rateLimit.resources.core.remaining}/${rateLimit.resources.core.limit}`);
    }

    const modules = await githubApi.fetchOrganizationRepos();

    return json({
      modules,
      total: modules.length,
      rateLimit: rateLimit?.resources.core
    });
  } catch (error) {
    console.error('API Error:', error);

    return json(
      {
        error: 'Failed to fetch modules',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
