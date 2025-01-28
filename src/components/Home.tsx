'use client';

import { useState } from 'react';
import { useDatasets } from '@/hooks/useDatasets';
import Link from 'next/link';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { datasetList, loading, error } = useDatasets(currentPage, 24);

  // Derived values for pagination
  const maxPage = datasetList ? Math.ceil(datasetList.pagination.total / datasetList.pagination.per_page) : 1;
  const showPage = currentPage + 1;

  // Event Handlers
  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < maxPage - 1) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl lg:text-balance text-left">
        Datasets
      </h1>
      <p className="text-lg/8 text-gray-600 dark:text-gray-200 text-left">
        A robust collection of high-quality, tamper-proof datasets designed for LLM-agnostic AI training, empowering developers to enhance model performance and reliability.
      </p>

      <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
        {loading && <p>Loading datasets...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && datasetList && (
          <>
            {/* Dataset Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Creator</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {datasetList.datasets.map((dataset) => (
                    <tr
                      key={dataset.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-900 divide-y divide-gray-200 transition-colors"
                    >
                      <td className="px-4 py-2 font-semibold">
                        <Link
                          href={`/dataset/${dataset.id}`}
                          className="text-sky-500 hover:text-sky-700 transition-colors"
                        >
                          {dataset.name}
                        </Link>
                      </td>
                      <td className="px-4 py-2">{dataset.creator || 'N/A'}</td>
                      <td className="px-4 py-2">{dataset.short_description}</td>
                      <td className="px-4 py-2">
                        {new Date(dataset.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {maxPage > 1 && (
              <div className="mt-4 flex justify-end items-center gap-x-4 border-t border-gray-200 pt-4">
                <button
                  className="px-4 py-2 bg-white rounded-md hover:not-disabled:bg-gray-300 hover:not-disabled:border hover:border-gray-300 disabled:text-gray-300 disabled:border-none disabled:cursor-not-allowed focus-within:outline-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:not-disabled:bg-gray-600 dark:hover:not-disabled:border-gray-600 dark:disable:text-gray-600 dark:disable:border-none"
                  onClick={handlePrevPage}
                  disabled={currentPage <= 0}
                >
                  Previous
                </button>

                <div className="text-sm">
                  Page {showPage} of {maxPage}
                </div>

                <button
                  className="px-4 py-2 bg-white rounded-md hover:not-disabled:bg-gray-300 hover:not-disabled:border hover:border-gray-300 disabled:text-gray-300 disabled:border-none disabled:cursor-not-allowed focus-within:outline-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:not-disabled:bg-gray-600 dark:hover:not-disabled:border-gray-600 dark:disable:text-gray-600 dark:disable:border-none"
                  onClick={handleNextPage}
                  disabled={currentPage >= maxPage - 1}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
