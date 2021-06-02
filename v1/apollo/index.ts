import "reflect-metadata";
import { createApplication } from "graphql-modules";
import { MovieModule } from "./movie";

import { ApolloServer } from "apollo-server";
const application = createApplication({
  modules: [MovieModule],
});

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
