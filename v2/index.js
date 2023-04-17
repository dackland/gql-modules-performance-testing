const { createApplication, createModule, gql } = require("graphql-modules");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const data = require("../movies.json");

const app = createApplication({
  modules: [
    createModule({
      id: "movies",
      typeDefs: gql`
        type Movie {
          title: String!
          year: Int!
          cast: [String!]!
          genres: [String!]!
        }
        type Query {
          movies: [Movie!]!
          movie(title: String): Movie
        }
      `,
      resolvers: {
        Query: {
          movies: () => data,
          movie: (root, args, context, info) => {
            return data.find((movie) => movie.title === args.title);
          },
        },
      },
    }),
  ],
});

const server = new ApolloServer({
  // schema: application.createSchemaForApollo() // graphql-modules has marked this deprecated, but works with Apollo Server 4.
  // Recommended approach is to use gateway:
  gateway: {
    async load() {
      return { executor: app.createApolloExecutor() };
    },
    onSchemaLoadOrUpdate(callback) {
      callback({ apiSchema: app.schema });
      return () => {};
    },
    async stop() {},
  },
});
(async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);
})();
