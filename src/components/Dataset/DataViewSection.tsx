'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// import { testJson } from '@/data/test';
import { useTabContext } from '@/context/TabsContext';
import { useState } from 'react';
import SparqlEditor from '@/components/SparqlEditor';

interface MockSparqlResponse {
  head: { vars: string[] };
  results: {
    bindings: Array<{
      [key: string]: {
        type: string;
        value: string;
      };
    }>;
  };
}

const DataViewSection = () => {
  const { activeTab } = useTabContext();
  const [results, setResults] = useState<MockSparqlResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (activeTab !== 'viewer') {
    return null;
  }

  const handleRunQuery = async (query: string) => {
    try {
      setError(null);
      setResults(null);

      const response = await fetch('/api/sparql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data: MockSparqlResponse = await response.json();
      setResults(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Unknown error');
    }
  };

  return (
    <div className="space-y-4">
      <SparqlEditor
        initialQuery="SELECT ?s ?p ?o WHERE { ?s ?p ?o } LIMIT 10"
        onRunQuery={handleRunQuery}
      />

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {results && (
        <section className="border border-gray-800 rounded-lg p-4">
          <h2 className="text-2xl font-bold">Query results</h2>
          <SyntaxHighlighter
            language="json"
            style={atomOneDark}
            customStyle={{ background: 'transparent' }}
            showLineNumbers
          >
            {JSON.stringify(results, null, 2)}
          </SyntaxHighlighter>
        </section>
      )}
    </div>
  );
};

export default DataViewSection;
