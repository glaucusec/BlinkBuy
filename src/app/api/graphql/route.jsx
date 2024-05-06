import prisma from "../../../lib/prisma";
import { createYoga, createSchema } from "graphql-yoga";

const schema = createSchema({
  typeDefs: /* GraphQL*/ `
    type Query {
      products(q: String): [Products!]!,
      product(id: ID!): Product!
    }
    
    type Products {
      id: ID,
      title: String,
      discountedPrice: Int,
      reviewsAverage: Float,
      reviewsCount: Int,
      price: Float,
      isActive: Boolean,
      images: [String]
    }

    type Product {
      id: ID,
      title: String,
      discountedPrice: Int,
      reviewsAverage: Float,
      reviewsCount: Int,
      price: Float,
      isActive: Boolean,
    }

  `,
  resolvers: {
    Query: {
      products: async (_, { q }) => {
        const products = await prisma.product.findMany({
          include: {
            images: {
              select: {
                url: true,
              },
            },
          },
        });
        const formattedProducts = products.map((product) => {
          const formattedUrls = product.images.map((image) => image.url);
          return { ...product, images: formattedUrls };
        });
        return formattedProducts;
      },
      product: async (_, { id }) =>
        await prisma.product.findUnique({
          where: {
            id: id,
          },
        }),
    },
  },
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
