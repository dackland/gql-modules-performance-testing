import { createModule, gql } from "graphql-modules";
const data = require("../../movies.json");

export const MovieModule = createModule({
  id: "movies",
  dirname: __dirname,
  typeDefs: gql`
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
