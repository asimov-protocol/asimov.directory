import { json } from '@sveltejs/kit';
import { githubApi } from '../../../lib/github';

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
