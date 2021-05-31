import { print } from 'graphql';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import ws from 'ws';

// builds an AsyncIterator wrapper around a WS client
// see https://github.com/enisdenjo/graphql-ws#async-iterator
export function makeRemoteSubscriber(url: any, { headers }: { headers: Record<string, string> }) {
  const config = {
    url: url,
    webSocketImpl: ws,
    connectionParams: { headers },
  };

  const client = new SubscriptionClient(
    config.url,
    {
      reconnect: true,
      connectionParams: config.connectionParams,
    },
    config.webSocketImpl,
  );

  client.on('error', (v) => {
    console.error(v);
    console.dir(v);
  });
  client.on('message', console.error);

  return async ({ document, variables }: any) => {
    const pending = [] as any[];
    let deferred = null as any;
    let error = null as any;
    let done = false;
    const query = print(document);
    console.log(query, variables);

    const dispose = client
      .request({
        query,
        variables: variables,
      })
      .subscribe({
        next: (data: any) => {
          pending.push(data);
          deferred?.resolve(false);
        },
        error: (err: any) => {
          console.log(err);
          error = err;
          deferred.reject(error);
        },
        complete: () => {
          done = true;
          deferred.resolve(true);
        },
      });

    return {
      [Symbol.asyncIterator]() {
        return this;
      },
      async next() {
        if (done) return { done: true as const, value: undefined };
        if (error) throw error;
        if (pending.length) return { value: pending.shift() };
        return (await new Promise((resolve, reject) => (deferred = { resolve, reject })))
          ? ({ done: true, value: undefined } as const)
          : { value: pending.shift() };
      },
      async return() {
        dispose.unsubscribe();
        return { done: true as const, value: undefined };
      },
    };
  };
}
