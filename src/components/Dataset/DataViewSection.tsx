'use client';

import useSWR from 'swr';
import { useTabContext } from '@/context/TabsContext';
import { useState } from 'react';
import SparqlEditor from '@/components/SparqlEditor';
// import GraphView from '@/components/GraphView';
import { sparqlFetcher } from '@/utils';
import { Spinner } from '@phosphor-icons/react';
import {
  Table,
  TableHead,
  Th,
  TableBody,
  TableRow,
  Td,
  TableItem,
} from '@/components/Table';
import { osmQueryExample } from '@/utils';
import DataMapView from '@/components/DataMapView';
import Editor from '@/components/Editor';

type DataView = 'table' | 'json' | 'map';

// TODO: make this LIMIT as a state and allow user to view all results
const LIMIT = 100;

const DataViewSection = () => {
  const { activeTab } = useTabContext();
  const [runQuery, setRunQuery] = useState(null);
  const [dataView, setDataView] = useState<DataView>('table');

  const { data, error, isLoading } = useSWR(
    runQuery ? ['/api/sparql', runQuery] : null,
    sparqlFetcher,
  );

  if (activeTab !== 'viewer') {
    return null;
  }

  const handleRunQuery = (query: string) => {
    setRunQuery(query as any);
  };

  const handleSelectView = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDataView(e.currentTarget.value as DataView);
  };

  console.log({ data, error, isLoading });

  return (
    <div className="space-y-4">
      <SparqlEditor
        initialQuery={osmQueryExample}
        onRunQuery={handleRunQuery}
      />

      {isLoading && (
        <div className="flex justify-center">
          <Spinner className="mr-3 size-5 animate-spin" />
          <p>Loading query...</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {data && (
        <>
          <section className="border border-gray-800 rounded-lg p-4 overflow-y-auto max-h-svh">
            <div className="flex gap-1">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Query results</h2>
                <p>
                  Found {data.results.bindings.length} lines.{' '}
                  {data.results.bindings.length > LIMIT
                    ? `Limited to ${LIMIT}.`
                    : null}
                </p>
              </div>
              <div className="flex gap-2 items-center ml-auto">
                {[
                  { label: 'Table', value: 'table' },
                  { label: 'Json', value: 'json' },
                  { label: 'Map', value: 'map' },
                ].map((item) => (
                  <button
                    key={item.value}
                    className={`px-4 py-2 font-arges text-xl font-semibold tracking-wider text-white rounded-lg shadow transition-colors ${
                      dataView === item.value
                        ? 'bg-oOrange-500 hover:bg-orange-600'
                        : 'bg-sSlate-400 hover:bg-orange-600'
                    }`}
                    value={item.value}
                    onClick={handleSelectView}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            {dataView === 'table' && (
              <Table>
                <TableHead>
                  <Th>{''}</Th>
                  {data.head.vars.map((varName: string) => (
                    <Th key={varName}>{varName}</Th>
                  ))}
                </TableHead>
                <TableBody>
                  {data.results.bindings
                    .slice(0, LIMIT)
                    .map((row: any, index: number) => (
                      <TableRow key={index}>
                        <Td>{index + 1}</Td>
                        {data.head.vars.map((varName: string) => (
                          <Td key={varName}>
                            <TableItem args={row[varName]} />
                          </Td>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            )}
            {dataView === 'json' && (
              <Editor
                height="80vh"
                defaultLanguage="json"
                defaultValue={JSON.stringify(
                  data.results.bindings.slice(0, LIMIT),
                  null,
                  2,
                )}
                options={{
                  readOnly: true,
                  automaticLayout: true,
                }}
              />
            )}
            {dataView === 'map' && <DataMapView data={data} />}
          </section>

          {/* <section className="border border-gray-800 rounded-lg p-4 overflow-hidden relative">
            <h2 className="text-2xl font-bold">Visualization</h2>
            <GraphView />
          </section> */}
        </>
      )}
    </div>
  );
};

export default DataViewSection;
