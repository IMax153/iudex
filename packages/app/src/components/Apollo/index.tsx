import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

// import introspectionResult from 'generated/introspection-result';
import { link } from './links';

interface Props {}

// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   introspectionQueryResultData: introspectionResult,
// });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(/* { fragmentMatcher } */),
  connectToDevTools: process.env.NODE_ENV !== 'production',
});

export const Apollo: React.FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
