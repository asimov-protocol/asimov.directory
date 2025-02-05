import { datasetTabs } from "@/utils";

// export interface Dataset {
//   id: number;
//   name: string;
//   short_description: string;
//   long_description: string | null;
//   creator: string | null;
//   updated_at: number;
//   created_at: number;
// }

type DatasetLabel = {
  '@language': string;
  '@value': string;
}

export interface Dataset {
  id: string;
  isDefinedBy: { id: string };
  label: DatasetLabel | DatasetLabel[];
  type: string;
}

export interface Pagination {
  page: number;
  per_page: number;
  total: number;
}

export interface DatasetList {
  pagination: Pagination;
  datasets: Dataset[];
}

export type DatasetTabValue = (typeof datasetTabs)[number]["value"];
