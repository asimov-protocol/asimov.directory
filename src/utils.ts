/**
 * Converts a string into a "pretty key" format.
 * Example: "English Wikipedia" -> "english_wikipedia"
 *
 * @param input - The input string to convert
 * @returns The formatted key string
 */
export function prettyKey(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '_');
}

/**
 * Formats a date string into a human-readable format.
 * Example: "2021-09-01T00:00:00.000Z" -> "Jan 1, 2021"
 *
 * @param date - The date number in milliseconds
 * @returns The formatted date string
 */
export function formatDate(date: number): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Fetcher function for useSWR to fetch data from an API.
 */
export async function fetcher(url: string, init?: RequestInit) {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

/**
 * Fetches data from the SPARQL API.
 */
export function sparqlFetcher(params: [string, string]) {
  const [apiUrl, query] = params;
  return fetcher(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
}

// TODO: remove this after implementing the actual API
export const labels = [
  'History',
  'Timeline',
  'Science',
  'Tech',
  'Fact-checking',
  'Emerging industries',
];

export const datasetTabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Data viewer', value: 'viewer' },
  // { label: "Query", value: "query" },
  { label: 'Annotation', value: 'annotation' },
  { label: 'History', value: 'history' },
] as const;

export const wikiQueryExample = `PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX psn: <http://www.wikidata.org/prop/statement/value-normalized/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX p: <http://www.wikidata.org/prop/>
SELECT DISTINCT ?country ?country_name ?mountain ?mountain_name ?max_height WHERE {
  { SELECT ?country (MAX(?height) AS ?max_height) WHERE {
    ?mountain wdt:P31/wdt:P279* wd:Q8502 .
    ?mountain p:P2044/psn:P2044/wikibase:quantityAmount ?height .
    ?mountain wdt:P17 ?country .
  } GROUP BY ?country }
  ?mountain wdt:P31/wdt:P279* wd:Q8502 .
  ?mountain p:P2044/psn:P2044/wikibase:quantityAmount ?max_height .
  ?mountain wdt:P17 ?country .
  ?mountain rdfs:label ?mountain_name FILTER (LANG(?mountain_name) = "en")
  ?country rdfs:label ?country_name FILTER (LANG(?country_name) = "en")
}
ORDER BY DESC(?max_height)
`;

export const osmQueryExample = `PREFIX osmkey: <https://www.openstreetmap.org/wiki/Key:>
PREFIX osmrel: <https://www.openstreetmap.org/relation/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX osm: <https://www.openstreetmap.org/>
PREFIX ogc: <http://www.opengis.net/rdf#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
SELECT ?region ?name ?geometry WHERE {
  osmrel:2202162 ogc:sfContains ?region .
  ?region osmkey:boundary "administrative" .
  ?region osmkey:admin_level "4"^^xsd:int .
  ?region rdf:type osm:relation .
  ?region osmkey:name ?name .
  ?region geo:hasGeometry/geo:asWKT ?geometry .
}
`;
