export interface Dataset {
  id: number;
  name: string;
  short_description: string;
  long_description: string | null;
  creator: string | null;
  updated_at: number;
  created_at: number;
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
