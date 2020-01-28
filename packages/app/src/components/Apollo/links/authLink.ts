import { setContext } from 'apollo-link-context';

import { getAccessToken } from '../../../utils/auth';

export const authLink = setContext(request => {
  const token = getAccessToken();

  return token
    ? {
        ...request,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    : request;
});
