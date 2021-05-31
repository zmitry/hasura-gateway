import { fetch } from 'cross-fetch';
import { print } from 'graphql';

// Builds a remote schema executor function,
// customize any way that you need (auth, headers, etc).
// Expects to receive an object with "document" and "variable" params,
// and asynchronously returns a JSON response from the remote.
export function makeRemoteExecutor(url: any, secret:string) {
  return async ({ document, variables, context }: any) => {
    const query = typeof document === 'string' ? document : print(document);
    const fetchResult = await fetch(url, {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': secret,
        Authorization: context.authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });
    return fetchResult.json();
  };
}
