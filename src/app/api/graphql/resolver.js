import prisma from "../../../lib/prisma";

export const GQLResolver = {
  Query: {
    products: async (_, args) => {
      const { q, prices, colors, sizes, take, page } = args;
      const whereClause = {
        tags:
          q.length > 0
            ? {
                some: {
                  name: {
                    contains: q,
                  },
                },
              }
            : {},
        sizes:
          sizes.length > 0
            ? {
                some: {
                  name: {
                    in: sizes,
                  },
                },
              }
            : {},
      };

      const priceRangeFilters = {
        "0-500": { lt: 500 },
        "500-1000": { gt: 500, lt: 1000 },
        "1001-1500": { gt: 1001, lt: 1500 },
        "1501-2000": { gt: 1501, lt: 2000 },
        "2000-": { gt: 2000 },
      };

      const priceFilters = prices.reduce((result, priceRange) => {
        const filterCriteria = priceRangeFilters[priceRange];
        if (filterCriteria) {
          result.push({ discountedPrice: filterCriteria });
        }
        return result;
      }, []);

      // fetch the products related
      const products = await prisma.product.findMany({
        where: {
          ...whereClause,
          OR: priceFilters.length > 0 ? priceFilters : undefined,
        },
        include: {
          images: {
            select: {
              url: true,
            },
          },
          sizes: {
            select: {
              name: true,
            },
          },
        },
        take: take,
        skip: page * take - take,
      });

      const formattedProducts = products.map((product) => {
        const formattedUrls = product.images.map((image) => image.url);
        const formattedSizes = product.sizes.map((size) => size.name);
        return {
          ...product,
          images: formattedUrls,
          sizes: formattedSizes,
        };
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
