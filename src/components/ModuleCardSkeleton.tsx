export default function ModuleCardSkeleton() {
  return (
    <div className="border-sSlate-200 overflow-hidden rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gGray-100 h-8 w-8 animate-pulse rounded-full"></div>
          <div>
            <div className="bg-gGray-100 mb-1 h-4 w-24 animate-pulse rounded"></div>
            <div className="bg-gGray-100 h-3 w-16 animate-pulse rounded"></div>
          </div>
        </div>
        <div className="bg-gGray-100 h-4 w-8 animate-pulse rounded"></div>
      </div>

      <div className="mb-4 space-y-2">
        <div className="bg-gGray-100 h-3 w-full animate-pulse rounded"></div>
        <div className="bg-gGray-100 h-3 w-3/4 animate-pulse rounded"></div>
      </div>

      <div className="mb-4 flex space-x-2">
        <div className="bg-gGray-100 h-5 w-16 animate-pulse rounded-full"></div>
        <div className="bg-gGray-100 h-5 w-20 animate-pulse rounded-full"></div>
        <div className="bg-gGray-100 h-5 w-12 animate-pulse rounded-full"></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gGray-100 h-3 w-12 animate-pulse rounded"></div>
          <div className="bg-gGray-100 h-3 w-16 animate-pulse rounded"></div>
        </div>
        <div className="bg-gGray-100 h-3 w-10 animate-pulse rounded"></div>
      </div>
    </div>
  );
}
