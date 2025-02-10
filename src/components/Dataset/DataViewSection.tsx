'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// import { testJson } from '@/data/test';
import { useTabContext } from '@/context/TabsContext';

const DataViewSection = () => {
  const { activeTab } = useTabContext();

  if (activeTab !== 'viewer') {
    return null;
  }

  const data = `@prefix ex: <http://example.org/> .
  @prefix foaf: <http://xmlns.com/foaf/0.1/> .

  ex:person1 a foaf:Person ;
      foaf:name "Alice Doe" ;
      foaf:age 30 ;
      foaf:mbox <mailto:alice@example.org> ;
      foaf:knows ex:person2 .

  ex:person2 a foaf:Person ;
      foaf:name "Bob Smith" ;
      foaf:age 35 ;
      foaf:mbox <mailto:bob@example.org> ;
      foaf:knows ex:person1, ex:person3 .

  ex:person3 a foaf:Person ;
      foaf:name "Charlie Johnson" ;
      foaf:age 28 ;
      foaf:mbox <mailto:charlie@example.org> .
`;
  return (
    <div>
      <SyntaxHighlighter
        language="turtle"
        style={atomOneDark}
        customStyle={{ background: 'transparent' }}
        showLineNumbers
      >
        {data}
      </SyntaxHighlighter>
    </div>
  );
};

export default DataViewSection;
