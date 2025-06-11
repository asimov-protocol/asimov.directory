import { json } from '@sveltejs/kit';
import { GitHubAPI } from '../../../lib/github';
import { env } from '$env/dynamic/private';

const githubApi = new GitHubAPI(env.GITHUB_TOKEN ?? undefined);

export async function GET() {
	try {
		const sources = await githubApi.fetchDataSources();

		return json({
			sources,
			total: sources.length
		});
	} catch (error) {
		console.error('API Error:', error);

		return json(
			{
				error: 'Failed to fetch data sources',
				message: error instanceof Error ? error.message : 'Unknown error'
			},
			{ status: 500 }
		);
	}
}
