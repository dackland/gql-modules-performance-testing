import { GraphQLModule } from "@graphql-modules/core";
import { ApolloServer } from "apollo-server";
import { MovieModule } from "./movie";

const MyGraphQLModule = new GraphQLModule({
  imports: [MovieModule],
});

const server = new ApolloServer({
  schema: MyGraphQLModule.schema,
  context: (session) => session,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
