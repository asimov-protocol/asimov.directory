import { QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import type { DehydratedState } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { queryClient } from '../store/index';

interface QueryProviderProps {
  dehydratedState?: DehydratedState;
  children: ReactNode;
}

export default function QueryProvider({ dehydratedState, children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
}
