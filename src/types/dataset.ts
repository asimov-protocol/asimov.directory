import { datasetTabs } from "@/utils";
import { type LocalizedString } from "./graph";

export interface Dataset {
  id: string;
  isDefinedBy: { id: string };
  label: LocalizedString | LocalizedString[];
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
