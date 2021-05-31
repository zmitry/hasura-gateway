import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLClient } from 'graphql-request';

export class TypedGraphQLClient extends GraphQLClient {
  fetch<T = any, V = any>(
    document: DocumentNode<T, V>,
    variables?: V,
    requestHeaders?: Record<string, any>,
  ): Promise<T> {
    return this.request(document, variables, requestHeaders);
  }

  fetchObj<T = any, V = any>({
    document,
    variables,
    requestHeaders,
  }: {
    document: DocumentNode<T, V>;
    variables?: V;
    requestHeaders?: Record<string, any>;
  }): Promise<T> {
    return this.request(document, variables, requestHeaders);
  }
}
