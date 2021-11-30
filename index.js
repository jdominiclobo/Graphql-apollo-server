const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

// Type definitions
const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;
// Resolvers
const resolvers = {
  Query: {
    sayHi: () => "Hello World",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 3080 }).then((res) => {
  console.log(`Server running at ${res.url}`);
});
