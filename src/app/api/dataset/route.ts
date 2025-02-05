import { NextResponse } from "next/server";
import { Buffer } from "buffer";
import jsonld from "jsonld";

/**
 * GET /api/dataset?id=<datasetId>
 *
 * Returns JSON:
 * {
 *   "dataset": { ... } // single dataset node
 * }
 */
export async function GET(request: Request) {
  // 1. Parse query params
  const { searchParams } = new URL(request.url);
  let id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing required 'id' query parameter." },
      { status: 400 },
    );
  }

  id = Buffer.from(id, "base64").toString("utf-8");

  console.log(`Fetching dataset with id: ${id}`);

  // 2. Fetch the JSON-LD file from GitHub
  const ghUrl = process.env.GITHUB_DATASETS_API_URL;
  if (!ghUrl) {
    return NextResponse.json(
      { error: "GITHUB_DATASETS_API_URL not set in environment." },
      { status: 500 },
    );
  }
  const response = await fetch(ghUrl, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    return NextResponse.json(
      { error: `GitHub fetch failed: ${errorBody}` },
      { status: 500 },
    );
  }

  const ghData = await response.json();
  if (!ghData.content) {
    return NextResponse.json(
      { error: "No content found in GitHub response." },
      { status: 500 },
    );
  }

  // 3. Decode base64 & parse JSON
  const decoded = Buffer.from(ghData.content, "base64").toString("utf-8");
  let originalJsonLd: any;
  try {
    originalJsonLd = JSON.parse(decoded);
  } catch (err: any) {
    return NextResponse.json(
      { error: `JSON.parse error: ${err.message}` },
      { status: 500 },
    );
  }

  // 4. Expand and compact the JSON-LD
  let expanded: any;
  try {
    expanded = await jsonld.expand(originalJsonLd);
  } catch (err: any) {
    return NextResponse.json(
      { error: `jsonld.expand error: ${err.message}` },
      { status: 500 },
    );
  }

  const context = {
    "id": "@id",
    "type": "@type",
    "label": "http://www.w3.org/2000/01/rdf-schema#label",
    "isDefinedBy": "http://www.w3.org/2000/01/rdf-schema#isDefinedBy",
    "dcat": "http://www.w3.org/ns/dcat#"
  };

  let compacted: any;
  try {
    compacted = await jsonld.compact(expanded, context);
  } catch (err: any) {
    return NextResponse.json(
      { error: `jsonld.compact error: ${err.message}` },
      { status: 500 },
    );
  }

  // 5. Locate the dataset node with the specified ID
  const graph = Array.isArray(compacted["@graph"]) ? compacted["@graph"] : [];
  const datasetNode = graph.find(
    (node: any) => node.type === "dcat:Dataset" && node.id === id
  );

  if (!datasetNode) {
    return NextResponse.json(
      { error: `Dataset with id '${id}' not found.` },
      { status: 404 },
    );
  }

  // 6. Return the dataset node
  return NextResponse.json({
    dataset: datasetNode,
  });
}
