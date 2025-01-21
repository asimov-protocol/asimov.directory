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
  short_description: string;
  long_description: string | null;
  creator: string | null;
  updated_at: number;
  created_at: number;
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

export class DatasetsAPI {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getDataset(id: number): Promise<Dataset> {
    const response = await fetch(`${this.baseUrl}/datasets/${id}`);

    if (!response.ok) {
      throw new Error(
        `HTTP error (status: ${response.status}): ${await response.text()}`,
      );
    }

    return response.json();
  }

  async getDatasets(
    page: number = 0,
    per_page: number = 25,
  ): Promise<DatasetList> {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: per_page.toString(),
    });

    const response = await fetch(`${this.baseUrl}/datasets?${params}`);

    if (!response.ok) {
      throw new Error(
        `HTTP error (status: ${response.status}): ${await response.text()}`,
      );
    }

    return response.json();
  }
}

export default new DatasetsAPI("http://localhost:8000");
