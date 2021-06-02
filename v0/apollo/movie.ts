import { GraphQLModule } from "@graphql-modules/core";
const data = require("../../movies.json");

export const MovieModule = new GraphQLModule({
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
});
