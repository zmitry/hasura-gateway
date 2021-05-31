import Fastify from 'fastify';
import cookie, { FastifyCookieOptions } from 'fastify-cookie';
import cors, { FastifyCorsOptions } from 'fastify-cors';
import { makeRemoteSubscriber } from 'lib/stiching/makeRemoteSubscriber';

import { appConfig } from './config';
import { UsersRepository } from './db/users.repository';
import { addGraphqlGateway } from './gateways/graphql';
import { TypedGraphQLClient } from './lib/gql-client';
import { AuthService } from './services/auth/auth.service';

require('dotenv').config();

function main() {
  const app = Fastify();

  app.register(cookie, {
    secret: process.env.COOKIE_SECRET,
    parseOptions: {},
  } as FastifyCookieOptions);

  app.register(cors, {
    origin: true,
    credentials: true,
  } as FastifyCorsOptions);

  const hasuraHttpClient = new TypedGraphQLClient(appConfig.hasuraEndpoint.http, {
    headers: {
      'x-hasura-admin-secret': appConfig.hasuraSecret,
    } as any,
  });
  const hasuraWSclient = makeRemoteSubscriber(appConfig.hasuraEndpoint.ws, {
    headers: {
      'x-hasura-admin-secret': appConfig.hasuraSecret,
    },
  });

  const authRepository = new UsersRepository(hasuraHttpClient);
  const authService = new AuthService(authRepository);

  addGraphqlGateway(app, { auth: authService }, { hasuraHttpClient, hasuraWSclient });

  app.listen(appConfig.port, '0.0.0.0');
  console.log(`staring at ${appConfig.port}`);
}

main();
