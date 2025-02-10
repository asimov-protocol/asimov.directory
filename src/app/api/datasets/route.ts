import { NextResponse } from 'next/server';
import { Buffer } from 'buffer';
import jsonld, { type JsonLdDocument } from 'jsonld';
import type { JsonLdObj, JsonLdArray } from 'jsonld/jsonld-spec';
import { CompactedNode } from '@/types/dataset';
import { context } from '../utils';

/**
 * GET /api/datasets?limit=24&after=<datasetId>
 *
 * Returns JSON:
 * {
 *   "catalog": { ... },
 *   "items": [ ... ], // array of dataset nodes
 *   "nextCursor": string | null,
 *   "total": number  // total dataset count
 * }
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get('limit') || '24';
  const after = searchParams.get('after');
  const q = searchParams.get('q')?.toLowerCase() || '';
  const limit = parseInt(limitParam, 10);

  const ghUrl = process.env.GITHUB_DATASETS_API_URL;
  if (!ghUrl) {
    return NextResponse.json(
      { error: 'GITHUB_DATASETS_API_URL not set in environment.' },
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
      { error: 'No content found in GitHub response.' },
      { status: 500 },
    );
  }

  const decoded = Buffer.from(ghData.content, 'base64').toString('utf-8');
  let originalJsonLd: JsonLdDocument;
  try {
    originalJsonLd = JSON.parse(decoded);
  } catch (err: any) {
    return NextResponse.json(
      { error: `JSON.parse error: ${err.message}` },
      { status: 500 },
    );
  }

  let expanded: JsonLdArray;
  try {
    expanded = await jsonld.expand(originalJsonLd);
  } catch (err: any) {
    return NextResponse.json(
      { error: `jsonld.expand error: ${err.message}` },
      { status: 500 },
    );
  }

  let compacted: JsonLdObj;
  try {
    compacted = await jsonld.compact(expanded, context);
  } catch (err: any) {
    return NextResponse.json(
      { error: `jsonld.compact error: ${err.message}` },
      { status: 500 },
    );
  }

  const graph = Array.isArray(compacted['@graph'])
    ? (compacted['@graph'] as CompactedNode[])
    : [];

  const catalogNode =
    graph.find((node) => node.type === 'dcat:Catalog') || null;
  let datasetNodes = graph.filter((node) => node.type === 'dcat:Dataset');

  if (q) {
    datasetNodes = datasetNodes.filter((item) => {
      const idMatch = ((item.id as string) || '').toLowerCase().includes(q);

      // Label match? (if item.label is array)
      let labelMatch = false;
      if (Array.isArray(item.label)) {
        labelMatch = item.label.some((lab) => {
          if (lab.value) {
            return lab.value.toLowerCase().includes(decodeURIComponent(q));
          }
          return false;
        });
      } else if (item.label && item.label.value) {
        // label is single object like { "@value", "@language" }
        labelMatch = item.label.value
          .toLowerCase()
          .includes(decodeURIComponent(q));
      }

      // isDefinedBy match? (if item.isDefinedBy is array)
      let defMatch = false;
      if (item.isDefinedBy && item.isDefinedBy.id) {
        // single object
        defMatch = item.isDefinedBy.id
          .toLowerCase()
          .includes(decodeURIComponent(q));
      }

      return idMatch || labelMatch || defMatch;
    });
  }

  datasetNodes.sort((a, b) => (a.id ?? '').localeCompare(b.id ?? ''));

  let startIndex = 0;
  if (after) {
    const idx = datasetNodes.findIndex((item) => item.id === after);
    if (idx >= 0) {
      startIndex = idx + 1;
    }
  }

  const items = datasetNodes.slice(startIndex, startIndex + limit);

  let nextCursor: string | null = null;
  if (startIndex + limit < datasetNodes.length) {
    const lastItem = items[items.length - 1];
    nextCursor = (lastItem?.id as string) || null;
  }

  return NextResponse.json({
    catalog: catalogNode,
    items,
    nextCursor,
    total: datasetNodes.length,
  });
}
