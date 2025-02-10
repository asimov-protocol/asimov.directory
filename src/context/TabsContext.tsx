'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { datasetTabs } from '@/utils';
import { DatasetTabValue } from '@/types/dataset';

interface TabContextType {
  activeTab: DatasetTabValue;
  setActiveTab: (tab: DatasetTabValue) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

const tabs = datasetTabs.map((tab) => tab.value);

export const TabProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') as DatasetTabValue;
  const [activeTab, setActiveTab] = useState<DatasetTabValue>(
    tabs[0] as DatasetTabValue,
  );

  useEffect(() => {
    if (tab && tabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [tab]);

  const changeTab = (tab: DatasetTabValue) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab: changeTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
};
