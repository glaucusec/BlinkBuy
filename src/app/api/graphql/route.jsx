import { createYoga, createSchema } from "graphql-yoga";
import { GQLSchema } from "./schema";
import { GQLResolver } from "./resolver";

const schema = createSchema({
  typeDefs: GQLSchema,
  resolvers: GQLResolver,
});

const handleRequest = createYoga({
  schema: schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
