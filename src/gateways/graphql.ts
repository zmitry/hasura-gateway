import { addMocksToSchema } from '@graphql-tools/mock';
import { stitchSchemas } from '@graphql-tools/stitch';
import { FastifyInstance } from 'fastify';
import fs from 'fs';
import { LoginInput, RegisterInput } from 'gen/resolvers.types';
import { buildSchema } from 'graphql';
import { TypedGraphQLClient } from 'lib/gql-client';
import mercurius, { IResolvers } from 'mercurius';
import { AuthService } from 'services/auth/auth.service';

import { appConfig } from '../config';

type Context = { authorization: string; services: { auth: AuthService } };

declare module 'mercurius' {
  interface MercuriusContext extends Context {}
}

export const resolvers: IResolvers<Context> = {
  query_root: {
    hello(_, _1, _2) {
      return 'hello world';
    },
  },
  mutation_root: {
    login: (_, { input }: { input: LoginInput }, ctx) => ctx.services.auth.login(input, ctx.reply),
    register: (_, { input }: { input: RegisterInput }, ctx) => ctx.services.auth.register(input, ctx.reply),
    refreshToken: (_, _1, ctx) => ctx.services.auth.refreshToken(ctx.reply),
    logout: (_, _1, ctx) => ctx.services.auth.logout(ctx.reply),
  },
};

export function addGraphqlGateway(
  app: FastifyInstance,
  services: Context['services'],
  { hasuraHttpClient, hasuraWSclient }: { hasuraHttpClient: TypedGraphQLClient; hasuraWSclient: any },
) {
  const schema = fs.readFileSync(appConfig.appSchemaPath, { encoding: 'utf-8' }).toString();
  const hasuraSchema = fs.readFileSync(appConfig.hasuraSchemaPath, { encoding: 'utf-8' }).toString();
  const appSchema = stitchSchemas<Context>({
    subschemas: [
      {
        schema: addMocksToSchema({ schema: buildSchema(hasuraSchema) }),
        executor: hasuraHttpClient.fetchObj,
        // enable if needed
        subscriber: hasuraWSclient,
      },
    ],
    typeDefs: schema,
  });

  app.register(mercurius, {
    schema: appSchema,
    resolvers: resolvers,
    context: () => ({
      services: services,
    }),
    path: '/api/graphql',
    graphiql: 'playground',
    defineMutation: true,
    subscription: true,
    logLevel: appConfig.logLevel,
  });
  return app;
}
