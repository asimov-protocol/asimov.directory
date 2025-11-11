export default function SourcesCardsViewSkeleton() {
  const skeletonCards = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skeletonCards.map((index) => (
        <div
          key={`skeleton-card-${index}`}
          className="border-sSlate-200 overflow-hidden rounded-lg border bg-white"
        >
          <div className="border-sSlate-100 border-b p-4">
            <div className="flex items-start space-x-3">
              <div className="size-12 flex-shrink-0 animate-pulse rounded-lg bg-gray-200" />

              <div className="min-w-0 flex-1">
                <div className="mb-2 h-5 w-32 animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>

          <div className="bg-gGray-50/50 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="size-4 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
              </div>
              <div className="flex items-center space-x-2">
                <div className="size-4 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>

          <div className="space-y-3 p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="mr-2 h-6 flex-1 animate-pulse rounded bg-gray-200" />
                <div className="size-7 animate-pulse rounded border bg-gray-200" />
              </div>

              <div className="flex flex-wrap gap-1">
                <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />
                <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
                <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
              </div>
            </div>

            {index % 3 === 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="mr-2 h-6 flex-1 animate-pulse rounded bg-gray-200" />
                  <div className="size-7 animate-pulse rounded border bg-gray-200" />
                </div>

                <div className="flex flex-wrap gap-1">
                  <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
                  <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
