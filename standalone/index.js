const { ApolloServer, makeExecutableSchema } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const data = require("../movies.json");

const typeDefs = `
directive @defer(
  if: Boolean
  label: String
) on FRAGMENT_SPREAD | INLINE_FRAGMENT
directive @stream(if: Boolean, label: String, initialCount: Int = 0) on FIELD
    type Movie {
      title: String!
      year: Int!
      cast: [String!]!
      genres: [String!]!
    }
    type Query {
      movies: [Movie!]!,
      movie(title: String): Movie 
    }
  `;
const resolvers = {
  Query: {
    movies: () => data,
    movie: (root, args, context, info) => {
      return data.find((movie) => movie.title === args.title);
    },
  },
};

(async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);
})();
