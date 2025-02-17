import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Monaco } from '@monaco-editor/react';

// Dynamically import the Monaco Editor so it only loads in the browser
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
});

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

  const handleLoadEditor = (_editor: any, monaco: Monaco) => {
    if (!monaco) {
      console.error('Monaco is undefined');
      return;
    }

    monaco.editor.defineTheme('myCoolTheme', {
      base: 'vs-dark',
      rules: [],
      inherit: true,
      colors: {
        'editor.background': '#05122e',
        'editor.foreground': '#f6f6f6',
        'editorWidget.border': '#f6f6f6',
      },
    });

    monaco.editor.setTheme('myCoolTheme');
  };

  return (
    <div className="space-y-4 flex items-start flex-col border border-gray-800 rounded-lg p-4">
      <MonacoEditor
        theme="myCoolTheme"
        language="sparql"
        height="300px"
        width="100%"
        defaultLanguage="sql"
        value={query}
        onChange={(value) => setQuery(value || '')}
        onMount={handleLoadEditor}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
        }}
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
