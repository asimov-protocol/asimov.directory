'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { testJson } from '@/data/test';
import { useTabContext } from '@/context/TabsContext';

const DataViewSection = () => {
  const { activeTab } = useTabContext();

  if (activeTab !== "viewer") {
    return null;
  }
  return (
    <div>
      <SyntaxHighlighter
        language="json"
        style={atomOneDark}
        customStyle={{ background: "transparent" }}
        showLineNumbers
      >
        {JSON.stringify(testJson, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
};

export default DataViewSection;
