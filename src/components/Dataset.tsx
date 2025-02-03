'use client';

import { useDataset } from "@/hooks/useDataset";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DatasetHeroSection from "@/components/Dataset/HeroSection";
import NavigationBar from "@/components/Dataset/NavigationBar";
import { TabProvider } from "@/context/TabsContext";
import OverviewSection from "@/components/Dataset/OverviewSection";
import AsideSection from "@/components/Dataset/AsideSection";
import DataViewSection from "@/components/Dataset/DataViewSection";
import QuerySection from "@/components/Dataset/QuerySection";
import Breadcrumbs from "./Breadcrumbs";
import { useBreadcrumbContext } from "@/context/BreadcrumbContext";

const Dataset = ({ id }: { id: string }) => {
  const { dataset, loading, error } = useDataset(Number(id));
  const router = useRouter();
  const { setCurrentDataset } = useBreadcrumbContext();

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      router.replace("/");
    }
  }, [id, router]);

  useEffect(() => {
    if (dataset?.name) {
      setCurrentDataset(dataset.name);
    }
  }, [dataset?.name, setCurrentDataset]);

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
    <div className="space-y-6 md:space-y-12">
      <Breadcrumbs />
      <DatasetHeroSection
        name={dataset.name}
        description={dataset.long_description}
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
          <AsideSection dataset={dataset} />
        </div>
      </div>
    </div>
  );
};

export default Dataset;
