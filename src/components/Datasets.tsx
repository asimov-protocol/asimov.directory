"use client";

import { useState, useEffect } from "react";
import DatasetList from "@/components/Datasets/List";
import Search from "@/components/Search";
import { labels, prettyKey } from "@/utils";
import { DatasetCategory } from "./Datasets/Category";
import useDebounce from "@/hooks/useDebounce";
import { Spinner } from "@phosphor-icons/react";

export default function Datasets() {
  const [datasets, setDatasets] = useState<any[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [totalDatasets, setTotalDatasets] = useState(null);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 250);

  useEffect(() => {
    fetchPage(null, debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const fetchPage = async (cursor: string | null, q: string) => {
    setLoading(true);
    setError("");

    try {
      const limit = 24;
      let url = `/api/datasets?limit=${limit}`;

      if (cursor) {
        url += `&after=${encodeURIComponent(cursor)}`;
      }

      if (q) {
        url += `&q=${encodeURIComponent(q)}`;
      }

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error fetching datasets: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      if (!cursor) {
        setDatasets(data.items);
      } else {
        setDatasets((prev) => [...prev, ...data.items]);
      }

      setNextCursor(data.nextCursor);
      setTotalDatasets(data.total);
    } catch (err: any) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  }

  function loadMore() {
    if (nextCursor) {
      fetchPage(nextCursor, searchTerm);
    }
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);
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
        <Search onChange={handleSearchChange} placeholder={`Search ${totalDatasets ?? ''} datasets by name`} />
        <div className="flex gap-2 flex-wrap">
          {labels.map((label) => (
            <DatasetCategory key={prettyKey(label)} category={label} />
          ))}
        </div>
      </div>

      {error && <p className="text-red-500">Error: {error}</p>}

      {!error && datasets.length > 0 && (
        <>
          <DatasetList datasets={datasets} />

          {nextCursor && (
            <div className="flex justify-center">
              <button
                onClick={loadMore}
                className="px-4 py-2 rounded-md disabled:bg-transparent disabled:cursor-not-allowed border border-neutral-300 text-gGray-300 cursor-pointer hover:not-disabled:text-white"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {loading && (
        <div className="flex justify-center">
          <Spinner className="mr-3 size-5 animate-spin" />
          <p>Loading datasets...</p>
        </div>
      )}


      {!loading && !error && datasets.length === 0 && <p>No datasets found.</p>}
    </div>
  );
}
