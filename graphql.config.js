require('dotenv/config');
const { GRAPHQL_HASURA_ENDPOINT, HASURA_GRAPHQL_ADMIN_SECRET, GRAPHQL_GATEWAY_ENDPOINT } = process.env;
const schemaSource = {
  [GRAPHQL_HASURA_ENDPOINT]: {
    headers: {
      'x-hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET,
    },
  },
};

const schemaSourceBackend = {
  [GRAPHQL_GATEWAY_ENDPOINT]: {
    // todo add authentication
    headers: {},
  },
};

const sharedConfig = {
  config: {
    scalars: {
      DateTime: 'Date',
      JSON: '{ [key: string]: any }',
      timestamptz: 'string',
      numeric: 'number',
    },
  },
  overwrite: true,
};
const lintIgnore = { add: { content: '// prettier-ignore' } };

module.exports = {
  projects: {
    backend: {
      schema: './apps/hasura/hasura.graphql',
      documents: './apps/backend/src/db/**/*.{gql,graphql}',
      extensions: {
        codegen: {
          ...sharedConfig,
          generates: {
            // generate graphql api from gateway
            // './apps/backend/api.graphql': {
            //   schema: [schemaSourceBackend],
            //   plugins: ['schema-ast'],
            // },
            // generate hasura schema from running hasura server
            './apps/hasura/hasura.graphql': {
              schema: [schemaSource],
              plugins: ['schema-ast'],
            },
          },
        },
      },
    },
    backendResolvers: {
      extensions: {
        codegen: {
          ...sharedConfig,
          generates: {
            // generate resolvers code from sub schema
            './apps/backend/src/gen/resolvers.types.ts': {
              schema: './apps/backend/src/schema.graphql',
              plugins: ['typescript', 'typescript-resolvers', lintIgnore],
              config: {
                useIndexSignature: true,
              },
            },
            // generate hasura sdk from backend queries
            './apps/backend/src/gen/hasura.types.ts': {
              // todo should we use hasura here or generated schema?
              schema: './apps/hasura/hasura.graphql',
              documents: ['./apps/backend/src/db/**/*.gql'],
              plugins: ['typescript', 'typescript-operations', 'typed-document-node', lintIgnore],
              config: {
                documentMode: 'documentNode',
              },
            },
          },
        },
      },
    },
    // frontend: {
    //   // validate frontend queries from getaway schema
    //   schema: './apps/backend/api.graphql',
    //   documents: './apps/frontend/src/**/*.{gql,graphql}',
    //   extensions: {
    //     codegen: {
    //       ...sharedConfig,
    //       generates: {
    //         // generate frontend api
    //         './apps/frontend/src/gen/api.types.ts': {
    //           plugins: ['typescript', 'typescript-operations', 'typed-document-node', lintIgnore],
    //         },
    //         // generate introspection schema for urql
    //         './apps/frontend/src/gen/schema.json': {
    //           plugins: ['introspection'],
    //         },
    //       },
    //     },
    //   },
    // },
  },
};
