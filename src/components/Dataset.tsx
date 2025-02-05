'use client';

import { useEffect, useState } from "react";
import DatasetHeroSection from "@/components/Dataset/HeroSection";
import NavigationBar from "@/components/Dataset/NavigationBar";
import { TabProvider } from "@/context/TabsContext";
import OverviewSection from "@/components/Dataset/OverviewSection";
import AsideSection from "@/components/Dataset/AsideSection";
import DataViewSection from "@/components/Dataset/DataViewSection";
import QuerySection from "@/components/Dataset/QuerySection";
import Breadcrumbs from "./Breadcrumbs";
import { useBreadcrumbContext } from "@/context/BreadcrumbContext";
import { type Dataset } from "@/types/dataset";

const Dataset = ({ id }: { id: string }) => {
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [error, setError] = useState("");
  const { setCurrentDataset } = useBreadcrumbContext();

  useEffect(() => {
    fetchDataset(id);
  }, [id]);

  useEffect(() => {
    if (!dataset) {
      return;
    }
    const label = Array.isArray(dataset.label) ? dataset.label : [dataset.label];
    const enLabel = label.find((l) => l['@language'] === 'en')!;
    if (enLabel?.['@value']) {
      setCurrentDataset(enLabel['@value']);
    }
  }, [dataset, setCurrentDataset]);

  const fetchDataset = async (id: string) => {
    setError("");

    try {
      const url = `/api/dataset?id=${id}`;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error fetching dataset: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setDataset(data.dataset);
    } catch (err: any) {
      setError(err.message || "Error fetching data");
    }
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!dataset) {
    return <p>Loading dataset...</p>;
  }

  const label = Array.isArray(dataset.label) ? dataset.label : [dataset.label];
  const enLabel = label.find((l) => l['@language'] === 'en')!;

  return (
    <div className="space-y-6 md:space-y-12">
      <Breadcrumbs />
      <DatasetHeroSection
        name={enLabel?.['@value']}
        description="An RDF dataset representing structured, linked data for semantic web applications, enabling interoperability, data integration, and SPARQL querying."
      />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
        <div className="sm:col-span-3 space-y-10">
          <TabProvider>
            <NavigationBar />

            <OverviewSection />

            <DataViewSection />

            <QuerySection />
          </TabProvider>
        </div>
        <div className="relative">
          <AsideSection />
        </div>
      </div>
    </div>
  );
};

export default Dataset;
