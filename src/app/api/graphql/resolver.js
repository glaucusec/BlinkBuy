import prisma from "../../../lib/prisma";

export const GQLResolver = {
  Query: {
    products: async (_, args) => {
      const { q, take, page } = args;

      // fetch the products related
      const products = await prisma.product.findMany({
        where: {
          tags: {
            some: {
              name: {
                startsWith: q,
              },
            },
          },
        },
        include: {
          images: {
            select: {
              url: true,
            },
          },
        },
        take: take,
        skip: page * take - take,
      });
      const formattedProducts = products.map((product) => {
        const formattedUrls = product.images.map((image) => image.url);
        return { ...product, images: formattedUrls };
      });
      // fetch the total number of the products
      const totalNumberOfProducts = await prisma.product.count();

      return {
        results: formattedProducts,
        hasMore: totalNumberOfProducts - page * take > 0,
        totalHits: totalNumberOfProducts,
      };
    },
    product: async (_, args) => {
      const { id } = args;
      const product = await prisma.product.findUnique({
        where: {
          id: id,
        },
      });
      return product;
    },
  },
};
