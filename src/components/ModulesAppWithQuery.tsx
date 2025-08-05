import QueryProvider from './QueryProvider';
import ModulesApp from './ModulesApp';
import type { SortOption } from '../types';

interface ModulesAppWithQueryProps {
  initialSort: SortOption;
}

export default function ModulesAppWithQuery({ initialSort }: ModulesAppWithQueryProps) {
  return (
    <QueryProvider>
      <ModulesApp initialSort={initialSort} />
    </QueryProvider>
  );
}
