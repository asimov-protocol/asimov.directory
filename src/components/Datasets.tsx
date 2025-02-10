"use client";

import { useMemo, useState } from "react";
import DatasetList from "@/components/Datasets/List";
import Search from "@/components/Search";
import { labels, prettyKey } from "@/utils";
import { DatasetCategory } from "./Datasets/Category";
import useDebounce from "@/hooks/useDebounce";
import { Spinner } from "@phosphor-icons/react";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "@/utils";
import type { DatasetsApiResponse } from "@/types/dataset";

export default function Datasets() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 250);
  const PAGE_SIZE = 24;

  const {
    data,
    error,
    size,
    setSize,
    isLoading,
    isValidating,
  } = useSWRInfinite<DatasetsApiResponse, Error>(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.nextCursor) return null;
      let url = `/api/datasets?limit=${PAGE_SIZE}`;
      if (pageIndex !== 0 && previousPageData?.nextCursor) {
        url += `&after=${encodeURIComponent(previousPageData.nextCursor)}`;
      }
      if (debouncedSearchTerm) {
        url += `&q=${encodeURIComponent(debouncedSearchTerm)}`;
      }
      return url;
    },
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const datasets = useMemo(() => data ? data.flatMap((page) => page.items) : [], [data]);
  const totalDatasets = useMemo(() => data?.[0]?.total, [data]);
  const nextCursor = data ? data[data.length - 1]?.nextCursor : null;

  const loadMore = () => {
    if (nextCursor) {
      setSize(size + 1);
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="flex flex-col gap-y-8 min-h-screen-content">
      <h1 className="text-4xl font-semibold tracking-tight text-pretty text-sStone-100 sm:text-5xl lg:text-balance text-left">
        Explore datasets
      </h1>
      <p className="text-lg/8 text-sStone-200 text-left max-w-2xl">
        A robust collection of high-quality, tamper-proof datasets designed for LLM-agnostic AI training,
        empowering developers to enhance model performance and reliability.
      </p>

      <div className="flex flex-col w-full gap-4">
        <Search
          onChange={handleSearchChange}
          placeholder={`Search ${totalDatasets ?? ""} datasets by name`}
        />
        <div className="flex gap-2 flex-wrap">
          {labels.map((label) => (
            <DatasetCategory key={prettyKey(label)} category={label} />
          ))}
        </div>
      </div>

      {error && <p className="text-red-500">Error: {error.message}</p>}

      {!error && datasets.length > 0 && (
        <>
          <DatasetList datasets={datasets} />

          {nextCursor && (
            <div className="flex justify-center">
              <button
                onClick={loadMore}
                disabled={isValidating}
                className="px-4 py-2 rounded-md disabled:bg-transparent disabled:cursor-not-allowed border border-neutral-300 text-gGray-300 cursor-pointer hover:not-disabled:text-white"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {(isLoading || isValidating) && (
        <div className="flex justify-center">
          <Spinner className="mr-3 size-5 animate-spin" />
          <p>Loading datasets...</p>
        </div>
      )}

      {!isLoading && !error && datasets.length === 0 && <p>No datasets found.</p>}
    </div>
  );
}
