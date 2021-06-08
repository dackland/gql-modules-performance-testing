const { ApolloServer, makeExecutableSchema } = require("apollo-server");
const data = require("../movies.json");

const schema = makeExecutableSchema({
  typeDefs: `
    type Movie {
      title: String!
      year: Int!
      cast: [String!]!
      genres: [String!]!
    }
    type Query {
      movies: [Movie!]!
    }
  `,
  resolvers: {
    Query: {
      movies: () => data,
    },
  },
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
