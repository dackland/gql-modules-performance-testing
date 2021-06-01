declare global {
  namespace GraphQLModules {
    interface GlobalContext {
      request: any;
    }
  }
}

// import "reflect-metadata";
// import { createApplication } from "graphql-modules";
// import { GeographyModule } from "./app/geography/geography.module";

// import { ApolloServer } from "apollo-server";
// const application = createApplication({
//   modules: [GeographyModule],
// });

// const schema = application.createSchemaForApollo();

// const server = new ApolloServer({
//   schema,
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

// Express

import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GeographyModule } from "./app/geography/geography.module";
import { createApplication } from "graphql-modules";

const server = express();
const app = createApplication({
  modules: [GeographyModule],
});
const execute = app.createExecution();

server.use(
  "/graphql",
  graphqlHTTP((request: any) => ({
    schema: app.schema,
    graphiql: true,
    customExecuteFn: execute as any,
    context: { request },
  }))
);

server.listen(4000, () => {
  console.log("Live http://localhost:4000/graphql");
});
