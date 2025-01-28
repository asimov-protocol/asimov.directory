import { DatasetList } from "@/types/dataset";
import { useState, useEffect } from "react";

export function useDatasets(page: number = 0, per_page: number = 24) {
  const [datasetList, setDatasetList] = useState<DatasetList | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDatasets = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({
          page: page.toString(),
          per_page: per_page.toString(),
        });

        const response = await fetch(`http://localhost:8000/datasets?${params}`);
        if (!response.ok) {
          throw new Error(
            `HTTP error (status: ${response.status}): ${await response.text()}`
          );
        }
        const data: DatasetList = await response.json();
        setDatasetList(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatasets();
  }, [page, per_page]);

  return { datasetList, loading, error };
}
