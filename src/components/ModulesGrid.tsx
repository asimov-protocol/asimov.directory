import type { Repository } from '../types';
import ModuleCard from './ModuleCard';
import ModuleCardSkeleton from './ModuleCardSkeleton';

interface ModulesGridProps {
  modules?: Repository[];
  loading?: boolean;
  error?: string | null;
}

export default function ModulesGrid({
  modules = [],
  loading = false,
  error = null
}: ModulesGridProps) {
  const skeletonCount = 12;
  const skeletonArray = Array.from({ length: skeletonCount }, (_, index) => index);

  if (error) {
    return (
      <div className="w-full">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <p className="mb-2 font-medium text-red-600">Failed to load modules</p>
          <p className="text-sm text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skeletonArray.map((index) => (
            <ModuleCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (modules.length === 0) {
    return (
      <div className="w-full">
        <div className="border-sSlate-200 bg-sSlate-100 rounded-lg border p-12 text-center">
          <p className="text-sSlate-600 mb-2 font-medium">No modules found</p>
          <p className="text-sSlate-400 text-sm">Try adjusting your search or filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard key={module.name} module={module} />
        ))}
      </div>
    </div>
  );
}
