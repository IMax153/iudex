import Express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { createContext } from './context';
import { schema } from './schema';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;

const app = Express();

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
});

apolloServer.applyMiddleware({ app });

app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
