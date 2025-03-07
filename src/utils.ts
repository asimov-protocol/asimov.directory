import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

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
  try {
    const res = await fetch(url, init);
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
    }
    return res.json();
  } catch (err: any) {
    throw new Error(`Error fetching data: ${err.message}`);
  }
}

/**
 * Fetches data from the SPARQL API.
 */
export function sparqlFetcher(params: [string, string, string, string]) {
  console.log({ params });
  const [apiUrl, query, endpoint, method = 'POST'] = params;
  try {
    if (!query) {
      throw new Error('No SPARQL query provided.');
    }
    return fetcher(apiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/sparql-results+json',
      },
      body: JSON.stringify({ query, endpoint }),
    });
  } catch (err: any) {
    throw new Error(err.message || 'Internal Server Error');
  }
}

/**
 * Recursively flattens an input.
 * If an object has a "value" key (and optionally a "type" key), it returns that value.
 * Otherwise, it processes arrays and objects recursively.
 */
export function flatten(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.map(flatten);
  }
  if (input !== null && typeof input === 'object') {
    const obj = input as Record<string, unknown>;

    if ('value' in obj && 'type' in obj) {
      return obj.value;
    }

    const output: Record<string, unknown> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        output[key] = flatten(obj[key]);
      }
    }
    return output;
  }
  return input;
}

export function exportToCSV(data: any, fileName = 'data.csv') {
  const flattenedData = data.map(flatten);
  // Convert JSON data to a worksheet
  const worksheet = XLSX.utils.json_to_sheet(flattenedData);
  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Write the workbook to a binary string in CSV format
  const csvOutput = XLSX.write(workbook, { bookType: 'csv', type: 'array' });

  // Create a Blob from the CSV data and trigger a download
  const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, fileName);
}

export function exportJSON(data: any, fileName = 'data.json') {
  // Stringify the original JSON data (preserving its structure)
  const jsonString = JSON.stringify(data, null, 2);
  // Create a Blob from the JSON string
  const blob = new Blob([jsonString], {
    type: 'application/json;charset=utf-8',
  });
  // Trigger the download
  saveAs(blob, fileName);
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

// TODO: remove this after implementing the actual API
export const wikiAPI = 'https://qlever.cs.uni-freiburg.de/api/wikidata';
export const osmPlanetAPI = 'https://qlever.cs.uni-freiburg.de/api/osm-planet';

export const ukraineAPI = 'https://test-indexer.asimovprotocol.dev/query';

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

export const osmQueryExample2 = `PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX osmway: <https://www.openstreetmap.org/way/>
PREFIX osmrel: <https://www.openstreetmap.org/relation/>
SELECT ?way_id ?way_pos ?node_id ?node_pos ?geometry WHERE {
  osmrel:51477 osmrel:member ?way_member .
  ?way_member osmrel:member_id ?way_id .
  ?way_member osmrel:member_role "outer" .
  ?way_member osmrel:member_pos ?way_pos .
  ?way_id osmway:member ?node_member .
  ?node_member osmway:member_id ?node_id .
  ?node_member osmway:member_pos ?node_pos .
  ?node_id geo:hasGeometry/geo:asWKT ?geometry .
}
ORDER BY ?way_pos ?node_pos`;

export const ukraineQueryExample = `SELECT ?s ?p ?o WHERE {
  ?s ?p ?o .
}
LIMIT 10`;

export const ukraineQueryExample2 = `PREFIX osm2rdf: <https://osm2rdf.cs.uni-freiburg.de/rdf#>
PREFIX osmrel: <https://www.openstreetmap.org/relation/>
PREFIX osmway: <https://www.openstreetmap.org/way/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT ?relation ?way ?geometry WHERE {
  ?relation osm2rdf:hasCompleteGeometry "false"^^xsd:boolean .
  ?relation osmrel:member ?member .
  ?member osmrel:member_id ?way ;
          osmrel:member_role "outer" .
  ?way geo:hasGeometry/geo:asWKT ?geometry .
}
LIMIT 10
`;

// if make this query using https://qlever.cs.uni-freiburg.de/api/osm-planet API it returns all streets from the Poltava, city in Ukraine
export const ukraineQueryExample3 = `PREFIX ogc: <http://www.opengis.net/rdf#>
PREFIX osmrel: <https://www.openstreetmap.org/relation/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX osm: <https://www.openstreetmap.org/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX osmkey: <https://www.openstreetmap.org/wiki/Key:>
SELECT ?osm_id ?shape WHERE {
  osmrel:1641691 ogc:sfContains ?osm_id .
  ?osm_id osmkey:highway ?highway .
  ?osm_id rdf:type osm:way .
  ?osm_id geo:hasGeometry/geo:asWKT ?shape
}`;
