const { createApplication, createModule, gql } = require("graphql-modules");
const { ApolloServer } = require("apollo-server");
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

// const server = new ApolloServer({
//   schema: app.createSchemaForApollo(),
// });

const contextDestroyMap = new WeakMap();
const server = new ApolloServer({
  typeDefs: app.typeDefs,
  resolvers: app.resolvers,
  context: (inputContext) => {
    const { context, destroy } = app.createOperationController({
      inputContext,
    });
    contextDestroyMap.set(context, destroy);
    return context;
  },
  formatResponse: (res, { context }) => {
    //  const destroy = contextDestroyMap.get(context);
    //  destroy();
    //  contextDestroyMap.delete(context);
    return res;
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
