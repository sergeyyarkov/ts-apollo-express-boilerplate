import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import depthLimit from 'graphql-depth-limit';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schema';

const PORT = process.env.PORT || 4000;

const startServer = (): void => {
  try {
    const app: Application = express();

    const server: ApolloServer = new ApolloServer({
      schema,
      validationRules: [depthLimit(10)],
      playground: true,
    });

    app.use('*', cors());
    app.get('/', (req: Request, res: Response) => res.send('GraphQL API'));

    server.applyMiddleware({ app });

    app.listen({ port: PORT }, () =>
      console.log(`🚀 Server ready on port: ${PORT}`)
    );
  } catch (err) {
    console.log(`❌  Something went wrong: \n ${err}`);
  }
};

startServer();
