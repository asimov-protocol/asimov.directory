import QueryProvider from './QueryProvider';
import SourcesApp from './SourcesApp';

export default function SourcesAppWithQuery() {
  return (
    <QueryProvider>
      <SourcesApp />
    </QueryProvider>
  );
}
