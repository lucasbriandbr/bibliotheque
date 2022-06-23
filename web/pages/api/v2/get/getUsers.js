import { PrismaClient } from '@prisma/client'
import  express  from 'express'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

const prisma = new PrismaClient();

const typeDefs = `
  type User {
    email: String!
    name: String
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    }
  }
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();
app.use('/api/v2/get/getUsers', graphqlHTTP({
  schema,
}));

app.listen(4000);