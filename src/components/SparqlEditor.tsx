import React, { useState } from 'react';
import Editor from '@/components/Editor';

export interface SparqlEditorProps {
  /**
   * The default SPARQL query string shown when the editor initializes.
   */
  initialQuery?: string;

  /**
   * Callback invoked when the user clicks the "Run Query" button.
   * The current editor content is passed as `query`.
   */
  onRunQuery?: (query: string) => void;
}

/**
 * A reusable SPARQL Editor component powered by Monaco Editor.
 * Props:
 *  - initialQuery (string, optional): The default SPARQL query.
 *  - onRunQuery (function, optional): Called with the current query when the "Run Query" button is clicked.
 */
const SparqlEditor: React.FC<SparqlEditorProps> = ({
  initialQuery = '',
  onRunQuery,
}) => {
  const [query, setQuery] = useState<string>(initialQuery);

  const handleRun = () => {
    if (onRunQuery) {
      onRunQuery(query);
    }
  };

  return (
    <div className="space-y-4 flex items-start flex-col border border-gray-800 rounded-lg p-4">
      <Editor
        language="sparql"
        height="300px"
        width="100%"
        value={query}
        onChange={(value) => setQuery(value || '')}
      />
      <button
        onClick={handleRun}
        className="px-4 py-2 font-arges text-2xl font-semibold tracking-wider text-white bg-oOrange-500 hover:bg-orange-600 rounded-lg shadow transition-colors hover:bg-oOrange-600"
      >
        Run Query
      </button>
    </div>
  );
};

export default SparqlEditor;
