import { makeSchema } from 'nexus';
import { nexusPrismaPlugin } from 'nexus-prisma';
import { join } from 'path';

import * as AuthPayload from './AuthPayload';
import * as Error from './Error';
import * as Form from './Form';
import * as FormField from './FormField';
import * as Query from './Query';
import * as User from './User';

const types = [AuthPayload, Error, Form, FormField, Query, User];

export const schema = makeSchema({
  types,
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: join(__dirname, '../generated/schema.graphql'),
    typegen: join(__dirname, '../generated/nexus.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('../context'),
        alias: 'Context',
      },
    ],
    contextType: 'Context.Context',
  },
});
