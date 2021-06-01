const { ApolloServer, gql } = require("apollo-server");
import { COUNTRIES } from "./constants/countries";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  "A medium of exchange in common use."
  type Currency {
    "Currency code."
    code: ID!

    "Symbol used to denote that a number is a monetary value."
    symbol: String!

    "Plain-language representation."
    name: String!

    "Plural version of currency name."
    plural: String!

    "Expresses the relationship between a major currency unit and its minor currency unit. The number of digits found to the right of the decimal place to represent the fractional part of this currency (assumes a base of 10)."
    exponent: Int!
  }

  "A country."
  type Country {
    "Country code."
    code: ID!

    "Plain-language representation."
    name: String!

    "Default currency of the country."
    currency: Currency!

    "Name of the country with the appropriate article."
    nameWithArticle: String!

    "List of principal subdivisions."
    provinces: [Province!]!
  }

  "A state/county/province/region."
  type Province {
    "Informal name for identification."
    slug: String

    "[ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) identifier."
    code: String!

    "Plain-lanuage representaton."
    name: String!
  }

  type Query {
    "List countries."
    countries: [Country!]!
  }
`;

const resolvers = {
  Query: {
    countries: () => Object.values(COUNTRIES),
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(() => {
  console.log(`🚀  Server ready`);
});
