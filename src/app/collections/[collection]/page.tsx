import React from "react";
import NotFound from "../../../components/NotFound";
import prisma from "../../../lib/prisma";
import Product from "../../../components/Product";

type collectionsDataType = {
  [key: string]: { bannerURL: string; tag: string };
};

const collectionData: collectionsDataType = {
  "fashion-joggers-men": { bannerURL: "", tag: "fashion-joggers-men" },
  "best-selling-co-ord-sets": { bannerURL: "", tag: "men_co_ords" },
  "men-oversized-t-shirts": { bannerURL: "", tag: "mens_oversized_tshirts" },
  "pick-printed-t-shirts": { bannerURL: "", tag: "mens_tshirts" },
  "mens-shorts-collection": { bannerURL: "", tag: "mens_shorts" },
  "women-t-shirts": { bannerURL: "", tag: "womens_tshirts" },
  "women-co-ords": { bannerURL: "", tag: "women-co-ords" },
  "joggers-for-women": { bannerURL: "", tag: "joggers-for-women" },
  "women-t-shirt-dress": { bannerURL: "", tag: "women_t_shirt_dress" },
  "women-shorts": { bannerURL: "", tag: "women-shorts" },
};

async function fetchProductsByCollection(collectionKey: string) {
  const collectionInfo = collectionData[collectionKey];
  if (!collectionInfo) {
    throw new Error(`Collection Key ${collectionKey} not found!`);
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        tags: {
          some: {
            name: collectionInfo.tag,
          },
        },
      },
      include: {
        images: true,
      },
    });

    const productsWithFirstImage = products.map(({ images, ...product }) => ({
      ...product,
      image: images[0].url,
    }));

    return productsWithFirstImage;
  } catch (error) {
    console.log("Error fetching products on collection's age");
    throw error;
  }
}

export default async function page({
  params,
}: {
  params: { collection: string };
}) {
  const collection = params.collection;

  if (!(collection in collectionData)) {
    return <NotFound />;
  }

  const products = await fetchProductsByCollection(collection);
  console.log(products)

  return (
    <div className="py-6 px-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {products.map((product) => {
        return (
          <Product
            id={product.id}
            image_url={product.image}
            title={product.title}
            discounted_price={product.discountedPrice}
            price={product.price}
            key={product.id}
            bestseller={product.isBestSeller}
          />
        );
      })}
    </div>
  );
}
