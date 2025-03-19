import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { authMiddleware } from '@/middlewares/authMiddleware';

import userSchema from '@/schema/userSchema';
import userResolvers from '@/resolvers/userResolvers';

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs: [userSchema],
    resolvers: [userResolvers],
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => authMiddleware({ req }),
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
