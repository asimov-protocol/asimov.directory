import { datasetTabs } from '@/utils';

export interface Pagination {
  page: number;
  per_page: number;
  total: number;
}

export interface DatasetList {
  pagination: Pagination;
  datasets: CompactedNode[];
}

export type DatasetTabValue = (typeof datasetTabs)[number]['value'];

export type LabelValue = {
  value: string;
  language: string;
};

/**
 * "isDefinedBy" often references an object with "@id",
 * but can also be a string or array.
 */
export type IsDefinedByValue = {
  id: string;
};

/**
 * A minimal shape of one node from the JSON-LD graph *after* compaction.
 * The code references .id, .type, .label, .isDefinedBy, so we list them.
 */
export interface CompactedNode {
  id?: string; // from "@id"
  type?: string | string[]; // from "@type"
  label?: LabelValue | LabelValue[];
  isDefinedBy?: IsDefinedByValue;
}

/**
 * The final shape of the JSON returned by this route:
 * - "catalog" is a node of type dcat:Catalog (or null)
 * - "items" is an array of nodes of type dcat:Dataset
 * - "nextCursor" is the next pagination key
 * - "total" is the total dataset count
 */
export interface DatasetsApiResponse {
  catalog: CompactedNode | null;
  items: CompactedNode[];
  nextCursor: string | null;
  total: number;
}

export interface SparqlBinding {
  [key: string]: {
    value: string;
    type: string;
    datatype?: string;
  };
}

export interface SparqlData {
  results: {
    bindings: SparqlBinding[];
  };
}

export interface DataMapViewProps {
  data: SparqlData;
}

/**
 * This map stores a mapping between some ID (e.g. feature name)
 * and a WKT string to be exported as GeoJSON.
 */
export type GeoDataMap = Map<string, string>;

/**
 * A small helper interface to describe the label objects
 * we store in the feature's 'labels' property.
 */
export interface LabelInfo {
  key: string;
  type: string;
  value: string;
  datatype: boolean;
}
