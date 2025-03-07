'use client';

import useSWR from 'swr';
import { useTabContext } from '@/context/TabsContext';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import SparqlEditor from '@/components/SparqlEditor';
// import GraphView from '@/components/GraphView';
import { exportToCSV, exportJSON, sparqlFetcher } from '@/utils';
import useClickOutside from '@/hooks/useClickOutside';
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
// import {
//   osmQueryExample as queryExample,
//   osmPlanetAPI as endpoint,
// } from '@/utils';
import {
  ukraineQueryExample2 as queryExample,
  ukraineAPI as endpoint,
} from '@/utils';
// import {
//   wikiQueryExample as queryExample,
//   wikiAPI as endpoint,
// } from '@/utils';
import DataMapView from '@/components/DataMapView/MapView';
import Editor from '@/components/Editor';

type DataView = 'table' | 'json' | 'map';

const LIMIT = 100;

const DataViewSection = () => {
  const { activeTab } = useTabContext();
  const [runQuery, setRunQuery] = useState<string | undefined>(undefined);
  const [dataView, setDataView] = useState<DataView>('table');
  const [limit, setLimit] = useState(LIMIT);
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const isOSMQuery = useMemo(
    () => runQuery && runQuery.includes('osm'),
    [runQuery],
  );
  const dropdownRef = useRef(null!);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { data, error, isLoading } = useSWR(
    runQuery ? ['/api/sparql', runQuery, endpoint] : null,
    sparqlFetcher,
  );

  const handleRunQuery = useCallback((query: string) => {
    setRunQuery(query.replace(/\s+/g, ' '));
  }, []);

  useEffect(() => {
    if (runQuery) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [runQuery, data]);

  useClickOutside(dropdownRef, () => setDropdownToggle(false));

  if (activeTab !== 'viewer') {
    return null;
  }

  const handleSelectView = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDataView(e.currentTarget.value as DataView);
  };

  const handleExportCSV = () => {
    if (data) {
      exportToCSV(data.results.bindings);
    }
  };

  const handleExportJSON = () => {
    if (data) {
      exportJSON(data.results.bindings);
    }
  };

  const toggleDropdown = () => {
    setDropdownToggle(!dropdownToggle);
  };

  if (error) {
    console.error(error);
  }

  return (
    <div className="space-y-4">
      <SparqlEditor initialQuery={queryExample} onRunQuery={handleRunQuery} />

      {isLoading && (
        <div className="flex justify-center">
          <Spinner className="mr-3 size-5 animate-spin" />
          <p>Loading query...</p>
        </div>
      )}

      {/* {error && <p style={{ color: 'red' }}>Error: {error}</p>} */}

      {data && (
        <>
          <section
            ref={sectionRef}
            className="border border-gray-800 rounded-lg p-4 overflow-y-auto max-h-svh"
          >
            <div className="flex gap-1 relative">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Query results</h2>
                <p>
                  Found {data.results.bindings.length} lines.{' '}
                  {data.results.bindings.length > LIMIT
                    ? `Limited to ${LIMIT}.`
                    : null}{' '}
                  {data.results.bindings.length > LIMIT && (
                    <button
                      onClick={() => setLimit(data.results.bindings.length)}
                      className="underline inline-flex"
                    >
                      View all
                    </button>
                  )}
                </p>
              </div>
              <div
                className="flex gap-2 items-center ml-auto relative"
                ref={dropdownRef}
              >
                {[
                  { label: 'Table', value: 'table' },
                  { label: 'Json', value: 'json' },
                  { label: 'Map', value: 'map', disabled: !isOSMQuery },
                ]
                  .filter((item) => !item.disabled)
                  .map((item) => (
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
                <button
                  onClick={toggleDropdown}
                  className="px-4 py-2 font-arges text-2xl font-semibold tracking-wider text-white bg-oOrange-500 hover:bg-orange-600 rounded-lg shadow transition-colors hover:bg-oOrange-600"
                  aria-expanded={dropdownToggle}
                  aria-haspopup="true"
                >
                  Export
                </button>
                {dropdownToggle && (
                  <div
                    className="absolute top-full right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 ring-1 ring-black/5 focus:outline-hidden shadow-lg"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    {[
                      { label: 'CSV', onClick: handleExportCSV },
                      { label: 'JSON', onClick: handleExportJSON },
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={item.onClick}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 bg-transparent border-none rounded-none transition-colors"
                        role="menuitem"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
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
                    .slice(0, limit)
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
                  data.results.bindings.slice(0, limit),
                  null,
                  2,
                )}
                options={{
                  readOnly: true,
                  automaticLayout: true,
                }}
              />
            )}
            {dataView === 'map' && (
              <DataMapView
                data={{
                  ...data,
                  results: {
                    ...data.results,
                    bindings: data.results.bindings.slice(0, limit),
                  },
                }}
              />
            )}
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
