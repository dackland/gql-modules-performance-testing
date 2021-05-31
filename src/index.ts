declare global {
  namespace GraphQLModules {
    interface GlobalContext {
      request: any;
    }
  }
}

import "reflect-metadata";
import { createApplication } from "graphql-modules";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GeographyModule } from "./app/geography/geography.module";

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
