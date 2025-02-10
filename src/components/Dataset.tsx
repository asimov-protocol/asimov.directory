'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import DatasetHeroSection from '@/components/Dataset/HeroSection';
import NavigationBar from '@/components/Dataset/NavigationBar';
import { TabProvider } from '@/context/TabsContext';
import OverviewSection from '@/components/Dataset/OverviewSection';
import AsideSection from '@/components/Dataset/AsideSection';
import DataViewSection from '@/components/Dataset/DataViewSection';
// import QuerySection from "@/components/Dataset/QuerySection";
import Breadcrumbs from './Breadcrumbs';
import { useBreadcrumbContext } from '@/context/BreadcrumbContext';
import type { CompactedNode } from '@/types/dataset';
import { fetcher } from '@/utils';

type Props = {
  dataset: CompactedNode;
};

const Dataset = ({ id }: { id: string }) => {
  const { data, error } = useSWR<Props, Error>(
    `/api/dataset?id=${id}`,
    fetcher,
  );

  const dataset = data?.dataset ?? null;
  const { setCurrentDataset } = useBreadcrumbContext();

  useEffect(() => {
    if (dataset) {
      const labels = Array.isArray(dataset.label)
        ? dataset.label
        : [dataset.label];
      const enLabel = labels.find((l) => l!.language === 'en');
      if (enLabel?.value) {
        setCurrentDataset(enLabel.value);
      }
    }
  }, [dataset, setCurrentDataset]);

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  if (!dataset) {
    return <p>Loading dataset...</p>;
  }

  const labelsArray = Array.isArray(dataset.label)
    ? dataset.label
    : [dataset.label];
  const enLabel = labelsArray.find((l) => l!.language === 'en');

  return (
    <div className="space-y-6 md:space-y-12">
      <Breadcrumbs />
      <DatasetHeroSection
        name={enLabel?.value ?? 'Dataset'}
        description="An RDF dataset representing structured, linked data for semantic web applications, enabling interoperability, data integration, and SPARQL querying."
      />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
        <div className="sm:col-span-3 space-y-10">
          <TabProvider>
            <NavigationBar />

            <OverviewSection />

            <DataViewSection />

            {/* <QuerySection /> */}
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
