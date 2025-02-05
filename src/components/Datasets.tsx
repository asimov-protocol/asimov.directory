"use client";

import { useState, useEffect } from "react";
import DatasetList from "@/components/Datasets/List";
import Search from "@/components/Search";
import { labels, prettyKey } from "@/utils";
import { DatasetCategory } from "./Datasets/Category";

export default function Datasets() {
  const [catalog, setCatalog] = useState<any>(null);
  const [datasets, setDatasets] = useState<any[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPage(null);
  }, []);

  const fetchPage = async (cursor: string | null) => {
    setLoading(true);
    setError("");
    try {
      const limit = 24;
      let url = `/api/datasets?limit=${limit}`;

      if (cursor) {
        url += `&after=${encodeURIComponent(cursor)}`;
      }
      // If you want server-side search, you'd add a param like:
      // if (searchTerm) {
      //   url += `&q=${encodeURIComponent(searchTerm)}`;
      // }

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch datasets: ${res.status} ${res.statusText}`);
      }

      // Expecting { catalog, items, nextCursor, total }
      const data = await res.json();

      if (!cursor) {
        setCatalog(data.catalog || null);
        setDatasets(data.items);
      } else {
        setDatasets((prev) => [...prev, ...data.items]);
      }

      setNextCursor(data.nextCursor);
    } catch (err: any) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (nextCursor) {
      fetchPage(nextCursor);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="text-4xl font-semibold tracking-tight text-pretty text-sStone-100 sm:text-5xl lg:text-balance text-left">
        Explore datasets
      </h1>
      <p className="text-lg/8 text-sStone-200 text-left max-w-2xl">
        A robust collection of high-quality, tamper-proof datasets designed for LLM-agnostic AI training,
        empowering developers to enhance model performance and reliability.
      </p>

      <div className="flex flex-col w-full gap-4">
        <Search onChange={handleSearchChange} />
        <div className="flex gap-2 flex-wrap">
          {labels.map((label) => (
            <DatasetCategory key={prettyKey(label)} category={label} />
          ))}
        </div>
      </div>

      {/* Loading + Error states */}
      {loading && <p>Loading datasets...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Dataset list */}
      {!loading && !error && datasets.length > 0 && (
        <>
          <DatasetList datasets={datasets} />

          {nextCursor && (
            <div className="mt-4 flex justify-end items-center gap-x-4 border-t border-gray-200 pt-4">
              <button
                className="px-4 py-2 rounded-md border border-neutral-300 text-gGray-300 cursor-pointer hover:text-white"
                onClick={loadMore}
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {/* If no items found */}
      {!loading && !error && datasets.length === 0 && (
        <p>No datasets found.</p>
      )}
    </div>
  );
}
