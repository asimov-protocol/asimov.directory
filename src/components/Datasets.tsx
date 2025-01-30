'use client';

import { useState } from 'react';
import { useDatasets } from '@/hooks/useDatasets';
import DatasetList from '@/components/Datasets/List';
import Search from '@/components/Search';
import { labels, prettyKey } from '@/utils';
import { DatasetCategory } from './Datasets/Category';

const Datasets = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { datasetList, loading, error } = useDatasets(currentPage, 24);
  const [searchTerm, setSearchTerm] = useState('');

  const maxPage = datasetList ? Math.ceil(datasetList.pagination.total / datasetList.pagination.per_page) : 1;
  const showPage = currentPage + 1;

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < maxPage - 1) setCurrentPage((prev) => prev + 1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = e.target.value;
    setSearchTerm(value);
  };

  console.log({ searchTerm });

  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="text-4xl font-semibold tracking-tight text-pretty text-sStone-100 sm:text-5xl lg:text-balance text-left">
        Explore datasets
      </h1>
      <p className="text-lg/8 text-sStone-200 text-left max-w-2xl">
        A robust collection of high-quality, tamper-proof datasets designed for LLM-agnostic AI training, empowering developers to enhance model performance and reliability.
      </p>

      <div className="flex flex-col w-full gap-4">
        <Search onChange={handleSearchChange} />

        <div className="flex gap-2 flex-wrap">
          {labels.map((label) => (
            <DatasetCategory key={prettyKey(label)} category={label} />
          ))}
        </div>
      </div>

      {loading && <p>Loading datasets...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && datasetList && (
        <>
          <DatasetList datasets={datasetList.datasets} />

          {/* Pagination Controls */}
          {maxPage > 1 && (
            <div className="mt-4 flex justify-end items-center gap-x-4 border-t border-gray-200 pt-4">
              <button
                className="px-4 py-2 rounded-md disabled:bg-transparent disabled:cursor-not-allowed border border-neutral-300 text-gGray-300 cursor-pointer hover:not-disabled:text-white"
                onClick={handlePrevPage}
                disabled={currentPage <= 0}
              >
                Previous
              </button>

              <div className="text-sm">
                Page {showPage} of {maxPage}
              </div>

              <button
                className="px-4 py-2 rounded-md disabled:bg-transparent disabled:cursor-not-allowed border border-neutral-300 text-gGray-300 cursor-pointer hover:not-disabled:text-white"
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
  );
};

export default Datasets;
