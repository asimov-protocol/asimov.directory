'use client';

import { useDataset } from "@/hooks/useDataset";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dataset = ({ id }: { id: string }) => {
  const { dataset, loading, error } = useDataset(Number(id));
  const router = useRouter();

  useEffect(() => {
    if (isNaN(Number(id))) {
      router.push("/");
    }
  }, [id, router]);

  if (loading) {
    return <p>Loading dataset...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!dataset) {
    return <p>No dataset found.</p>;
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
        {dataset.name}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-200">
        {dataset.long_description || "No description available."}
      </p>

      <div className="mt-6">
        <p className="text-sm text-gray-500">
          <strong>Creator:</strong> {dataset.creator || "N/A"}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Created At:</strong> {new Date(dataset.created_at).toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Last Updated:</strong> {new Date(dataset.updated_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default Dataset;
