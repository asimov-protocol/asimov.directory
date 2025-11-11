export default function SourcesTableViewSkeleton() {
  const skeletonItems = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="space-y-3">
      {skeletonItems.map((index) => (
        <div
          key={`skeleton-${index}`}
          className="border-sSlate-200 overflow-hidden rounded-lg border bg-white"
        >
          <div className="p-3 sm:p-4">
            <div className="block sm:hidden">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="size-7 animate-pulse rounded-lg bg-gray-200" />
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                </div>
                <div className="size-4 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="mb-2 flex items-center justify-between text-xs">
                <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
                <div className="flex items-center space-x-3">
                  <div className="h-4 w-8 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-8 animate-pulse rounded bg-gray-200" />
                </div>
              </div>

              <div className="mx-auto h-3 w-36 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-between">
              <div className="flex min-w-0 flex-1 items-center space-x-4">
                <div className="size-5 animate-pulse rounded bg-gray-200" />

                {/* Icon skeleton */}
                <div className="size-10 flex-shrink-0 animate-pulse rounded-lg bg-gray-200" />

                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center space-x-3">
                    <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
                    <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
