import path from 'path';

const { PORT, HASURA_ENDPOINT_URL, HASURA_WS_URL, HASURA_GRAPHQL_ADMIN_SECRET } = process.env;

export const appConfig = {
  hasuraEndpoint: {
    http: HASURA_ENDPOINT_URL || 'http://localhost:8080/v1/graphql',
    ws: HASURA_WS_URL || 'ws://localhost:8080/v1/graphql',
  },
  hasuraSchemaPath: path.resolve(__dirname, '../../hasura/hasura.graphql'),
  appSchemaPath: path.resolve(__dirname, './schema.graphql'),
  hasuraSecret: HASURA_GRAPHQL_ADMIN_SECRET || 'secret',
  port: PORT || 3001,
  logLevel: 'debug' as const,
  jwtCookieName: 'jwt_token',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtSecure: process.env.JWT_SECURE === 'true' || false,
  authAllowList: process.env.AUTH_ALLOW_LIST?.toLowerCase().split(',') || [],
};
