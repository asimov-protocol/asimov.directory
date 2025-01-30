'use client';

import { useDataset } from "@/hooks/useDataset";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DatasetHeroSection from "@/components/Dataset/HeroSection";
import NavigationBar from "@/components/Dataset/NavigationBar";
import { TabProvider } from "@/context/TabsContext";
import OverviewSection from "@/components/Dataset/OverviewSection";
import AsideSection from "@/components/Dataset/AsideSection";

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
    <div className="space-y-6 md:space-y-12">
      <DatasetHeroSection
        name={dataset.name}
        description={dataset.long_description}
      />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
        <div className="sm:col-span-3 space-y-10">
          <TabProvider>
            <NavigationBar />

            <OverviewSection />
          </TabProvider>
        </div>
        <div>
          <AsideSection dataset={dataset} />
        </div>
      </div>
    </div>
  );
}

export default Dataset;
