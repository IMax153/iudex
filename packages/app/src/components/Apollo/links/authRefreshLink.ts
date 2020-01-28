import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';

import { getAccessToken, setAccessToken } from '../../../utils/auth';

export const authRefreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();

    if (!token) return true;

    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp;
    } catch {
      return false;
    }
  },
  fetchAccessToken: async () => {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            refreshSession {
              accessToken
            }
          }
        `,
      }),
      credentials: 'include',
    });

    const json = await response.json();

    return json.data;
  },
  handleFetch: accessToken => setAccessToken(accessToken),
  handleError: () => {
    console.log('Access Forbidden. Please login.');
  },
});
