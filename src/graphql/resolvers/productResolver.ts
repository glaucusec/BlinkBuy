import prisma from "../../lib/prisma";

export type ProductType = {
  id: string;
  title: string;
  discountedPrice: number;
  reviewsAverage: number;
  reviewsCount: number;
  price: number;
  isActive: boolean;
  isBestSeller: boolean;
  published: boolean;
};

export type Image = {
  url: string;
};

export type Size = {
  name: string;
};

export type ProductResponseType = ProductType & {
  images: Image[];
  sizes: Size[];
};

export type GQLProductsArgType = {
  q: string;
  prices: string[];
  colors: string[];
  sizes: string[];
  take: number;
  page: number;
};

export const GQLResolver = {
  Query: {
    products: async (_: unknown, args: GQLProductsArgType) => {
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

      const priceRangeFilters: Record<string, { lt?: number; gt?: number }> = {
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
      }, [] as { discountedPrice: { lt?: number; gt?: number } }[]);

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
    product: async (_: { _: unknown }, args: { id: string }) => {
      const { id } = args;
      const product = await prisma.product.findUnique({
        where: {
          id: id,
        },
      });
      return product;
    },
    latest_items: async (_: { _: unknown; args: unknown }) => {
      const products = await prisma.product.findMany({
        orderBy: {
          updatedAt: "desc",
        },
        include: { images: true },
        take: 8,
      });

      const updatedProducts = products.reduce((acc, product) => {
        const updatedProduct = { ...product, image: product.images[0].url };
        delete updatedProduct.images;
        acc.push(updatedProduct);
        return acc;
      }, []);

      return updatedProducts;
    },
  },
};
