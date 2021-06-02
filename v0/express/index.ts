import { GraphQLModule } from "@graphql-modules/core";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { MovieModule } from "./movie";

const { schema } = new GraphQLModule({
  imports: [MovieModule],
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Listening on 4000"));
