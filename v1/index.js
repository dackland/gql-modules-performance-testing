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
          movies: [Movie!]!,
          movie(title: String): Movie
        }
      `,
      resolvers: {
        Query: {
          movies: () => data,
          movie: (root, args, context, info) => {
            return data.find(movie => movie.title === args.title);
          }
        },
      },
    }),
  ],
});

const server = new ApolloServer({
  schema: app.createSchemaForApollo(),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
