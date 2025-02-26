import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * POST /api/sparql
 * Expects JSON like:
 * {
 *   "query": "SELECT ?s ?p ?o WHERE { ?s ?p ?o } LIMIT 10"
 * }
 * Returns JSON with a mock SPARQL result.
 * Replace the mock data section with a real call to QLever or any other SPARQL service.
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      query?: string;
      endpoint?: string;
    };
    const { query, endpoint } = body;
    if (!query) {
      return NextResponse.json(
        { error: 'No SPARQL query provided.' },
        { status: 400 },
      );
    }
    const url = `${endpoint}?query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
