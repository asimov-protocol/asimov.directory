import { json } from '@sveltejs/kit';
import { GitHubAPI } from '../../../lib/github';
import type { SortOption } from '../../../lib/types';
import { env } from '$env/dynamic/private';

const githubApi = new GitHubAPI(env.GITHUB_TOKEN ?? undefined);

export async function GET({ url }) {
	try {
		const sortParam = url.searchParams.get('sort') as SortOption;
		const sort: SortOption = ['relevant', 'popular', 'newest', 'updated'].includes(sortParam)
			? sortParam
			: 'relevant';

		const rateLimit = await githubApi.getRateLimit();
		if (rateLimit) {
			console.log(
				`GitHub API rate limit: ${rateLimit.resources.core.remaining}/${rateLimit.resources.core.limit}`
			);
		}

		const modules = await githubApi.fetchOrganizationRepos(sort);

		return json({
			modules,
			total: modules.length,
			sort,
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
