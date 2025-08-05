import { useState } from 'react';
import SourcesTable from './SourcesTable';
import SourcesSearch from './SourcesSearch';

export default function SourcesApp() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      {/* Search */}
      <SourcesSearch
        value={searchQuery}
        onChange={setSearchQuery}
      />

      {/* Sources Table */}
      <SourcesTable
        searchQuery={searchQuery}
      />
    </div>
  );
}
