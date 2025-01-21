//pub struct Dataset {
//    pub id: i32,
//    pub name: String,
//    pub short_description: String,
//    pub long_description: Option<String>,
//    pub creator: Option<String>,
//    pub updated_at: i64,
//    pub created_at: i64,
//}
export interface Dataset {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string | null;
  creator: string | null;
  updatedAt: number;
  createdAt: number;
}

//pub struct Pagination {
//    pub page: i32,
//    pub per_page: i32,
//    pub total: i32,
//}
export interface Pagination {
  page: number;
  per_page: number;
  total: number;
}

//pub struct DatasetList {
//    pub pagination: Pagination,
//    pub datasets: Vec<Dataset>,
//}
export interface DatasetList {
  pagination: Pagination;
  datasets: Dataset[];
}

export async function getDataset(id: number): Promise<Dataset> {
  const params = new URLSearchParams({ id: id.toString() });

  const response = await fetch(`/datasets?${params}`);
  if (!response.ok) {
    throw new Error(
      `HTTP error (status: ${response.status}): ${response.text()}`,
    );
  }

  return response.json();
}

export async function getDatasets(
  page: number = 0,
  per_page: number = 25,
): Promise<DatasetList> {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: per_page.toString(),
  });

  const response = await fetch(`/datasets?${params}`);
  if (!response.ok) {
    throw new Error(
      `HTTP error (status: ${response.status}): ${response.text()}`,
    );
  }

  return response.json();
}
