import { createYoga, createSchema } from "graphql-yoga";
import { GQLSchema } from "../../../graphql/schemas/productSchema";
import { GQLResolver } from "../../../graphql/resolvers/productResolver";
import { NextResponse, NextRequest } from "next/server";

const schema = createSchema({
  typeDefs: [GQLSchema],
  resolvers: [GQLResolver],
});

const handleRequest = createYoga({
  schema: schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request: NextRequest, Response: NextResponse },
});

// Wrapper function to ensure the correct request type is passed
const handleYogaRequest = async (request: NextRequest) => {
  return handleRequest(request);
};

export {
  handleYogaRequest as GET,
  handleYogaRequest as POST,
  handleYogaRequest as OPTIONS,
};
