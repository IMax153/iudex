import { HttpLink } from 'apollo-link-http';

const uri = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/graphql';

export const httpLink = new HttpLink({
  uri,
  credentials: 'include',
});
