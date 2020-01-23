import { makeSchema } from 'nexus';
import { nexusPrismaPlugin } from 'nexus-prisma';

export const schema = makeSchema({
  types: [],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: `${__dirname}/../generated/schema.graphql`,
    typegen: `${__dirname}/../generated/nexus.ts`,
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'client',
      },
      {
        source: require.resolve('../context'),
        alias: 'Context',
      },
    ],
    contextType: 'Context.Context',
  },
});
