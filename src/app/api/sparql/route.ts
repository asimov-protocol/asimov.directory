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
    const body = await request.json();
    const { query, endpoint } = body;

    if (!query) {
      return NextResponse.json(
        { error: 'No SPARQL query provided.' },
        { status: 400 },
      );
    }

    if (!endpoint) {
      return NextResponse.json(
        { error: 'No endpoint provided.' },
        { status: 400 },
      );
    }

    const url = `${endpoint}?query=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url, {
        headers: {
          Accept: request.headers.get('accept') || 'application/json',
        },
      });

      if (!response.ok) {
        return NextResponse.json(
          {
            error: `SPARQL endpoint error: ${response.status} ${response.statusText}`,
          },
          { status: response.status },
        );
      }

      const data = await response.json();
      return NextResponse.json(data);
    } catch (fetchError: any) {
      return NextResponse.json(
        { error: `Fetch error: ${fetchError.message}` },
        { status: 500 },
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      { error: `Server error: ${err.message || 'Internal Server Error'}` },
      { status: 500 },
    );
  }
}
