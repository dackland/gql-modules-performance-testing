import express from "express";
import { graphqlHTTP } from "express-graphql";
import { MovieModule } from "./movie";
import { createApplication } from "graphql-modules";

const server = express();
const app = createApplication({
  modules: [MovieModule],
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
