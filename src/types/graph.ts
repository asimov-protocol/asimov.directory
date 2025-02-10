export interface GraphContext {
  '@context': {
    dcat: string;
    rdfs: string;
  };
}
/** The complete file is expected to have a top-level @graph property. */
export interface GraphData {
  '@graph': GraphItem[];
}

/** Each item in the @graph array represents a dataset from the ontology. */
export interface GraphItem {
  id: string;
  '@type': string;
  'rdfs:label': LocalizedLabel;
  'rdfs:isDefinedBy': Reference;
}

/**
 * The label may either be a single localized string,
 * or an array of localized strings.
 */
export type LocalizedLabel = LocalizedString | LocalizedString[];

/** A localized string has a language tag and a value. */
export interface LocalizedString {
  '@language': string;
  '@value': string;
}

/** A reference is just an object with an "@id" string. */
export interface Reference {
  '@id': string;
}
