const { GraphQLModule } = require("@graphql-modules/core");
const { ApolloServer } = require("apollo-server");
const data = require("../movies.json");

const ApplicationModule = new GraphQLModule({
  imports: [
    new GraphQLModule({
      name: "movie",
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
    }),
  ],
});

const server = new ApolloServer({
  schema: ApplicationModule.schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
