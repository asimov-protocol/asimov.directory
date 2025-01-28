import { Dataset } from "@/types/dataset";
import { useState, useEffect } from "react";

export function useDataset(id: number) {
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataset = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8000/datasets/${id}`);
        if (!response.ok) {
          throw new Error(
            `HTTP error (status: ${response.status}): ${await response.text()}`
          );
        }
        const data: Dataset = await response.json();
        setDataset(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataset();
  }, [id]);

  return { dataset, loading, error };
}
