import { json } from '@sveltejs/kit';
import { githubApi } from '../../../lib/github';
import type { SortOption } from '../../../lib/types';

export async function GET({ url }) {
	try {
		const sortParam = url.searchParams.get('sort') as SortOption;
		const sort: SortOption = ['relevant', 'popular', 'newest', 'updated'].includes(sortParam)
			? sortParam
			: 'relevant';

		const modules = await githubApi.fetchOrganizationRepos(sort);

		return json({
			modules,
			total: modules.length,
			sort
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
