'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Breadcrumbs context type
interface BreadcrumbContextType {
  currentDataset: string;
  setCurrentDataset: (dataset: string) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(
  undefined,
);

// Breadcrumb provider
export const BreadcrumbProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentDataset, setCurrentDataset] = useState<string>('');

  return (
    <BreadcrumbContext.Provider value={{ currentDataset, setCurrentDataset }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

// Hook to use breadcrumb context
export const useBreadcrumbContext = (): BreadcrumbContextType => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error(
      'useBreadcrumbContext must be used within a BreadcrumbProvider',
    );
  }
  return context;
};
