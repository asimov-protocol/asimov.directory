import { useTabContext } from '@/context/TabsContext';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';

import 'graphiql/graphiql.css';

const QuerySection = () => {
  const { activeTab } = useTabContext();

  if (activeTab !== "query") {
    return null;
  }
  // This is an example of how to use GraphiQL with a custom fetcher
  // https://github.com/graphql/graphiql/tree/main/packages/graphiql#graphiql
  const fetcher = createGraphiQLFetcher({
    url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    headers: { 'X-Example-Header': 'foo' },
  });

  return <GraphiQL forcedTheme="dark" fetcher={fetcher} />;
};

export default QuerySection;
