import { ApolloLink } from 'apollo-link';

import { authLink } from './authLink';
import { authRefreshLink } from './authRefreshLink';
import { errorLink } from './errorLink';
import { httpLink } from './httpLink';

export const link = ApolloLink.from([authRefreshLink, errorLink, authLink, httpLink]);
