import { createYoga, createSchema } from "graphql-yoga";
import { GQLSchema } from "../../../graphql/schemas/productSchema";
import { GQLResolver } from "../../../graphql/resolvers/productResolver";
import { GQLAuthSchema } from "../../../graphql/schemas/authSchema";
import { GQLAuthResolver } from "../../../graphql/resolvers/authResolver";
import { NextResponse, NextRequest } from "next/server";

const schema = createSchema({
  typeDefs: [GQLSchema, GQLAuthSchema],
  resolvers: [GQLResolver, GQLAuthResolver],
});

const handleRequest = createYoga({
  schema: schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request: NextRequest, Response: NextResponse },
});

// Wrapper function to ensure the correct request type is passed
const handleYogaRequest = async (request) => {
  return handleRequest(request);
};

export {
  handleYogaRequest as GET,
  handleYogaRequest as POST,
  handleYogaRequest as OPTIONS,
};
