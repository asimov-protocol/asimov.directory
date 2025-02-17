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
    // 1. Parse the incoming JSON body
    const body = (await request.json()) as { query?: string };
    const { query } = body;

    // 2. Validate the "query" field
    if (!query) {
      return NextResponse.json(
        { error: 'No SPARQL query provided.' },
        { status: 400 },
      );
    }

    // 3. (Demo) Return mock SPARQL-like data.
    //    You can replace this with an actual call to QLever, for example:
    //
    //    const endpoint = 'http://localhost:7001';
    //    const url = `${endpoint}?query=${encodeURIComponent(query)}`;
    //    const response = await fetch(url);
    //    const data = await response.json();
    //    return NextResponse.json(data);
    //
    // For now, we'll just return a static JSON structure:
    const mockData = {
      head: { vars: ['s', 'p', 'o'] },
      results: {
        bindings: [
          {
            s: { type: 'uri', value: 'http://example.org/subject1' },
            p: { type: 'uri', value: 'http://example.org/predicate1' },
            o: { type: 'literal', value: 'Mock object 1' },
          },
          {
            s: { type: 'uri', value: 'http://example.org/subject2' },
            p: { type: 'uri', value: 'http://example.org/predicate2' },
            o: { type: 'literal', value: 'Mock object 2' },
          },
        ],
      },
    };

    // 4. Return JSON response
    return NextResponse.json(mockData, { status: 200 });
  } catch (err: any) {
    // Catch any unexpected errors (JSON parse errors, fetch errors, etc.)
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
