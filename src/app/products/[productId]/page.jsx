import React from "react";
import ImageGallery from "./ImageGallery";
import ProductPanel from "./ProductPanel";
import prisma from "../../../lib/prisma";

async function getProductData(productId) {
  // fetch the images;
  const data = await prisma.product.findUnique({
    where: { id: productId },
    include: {
      images: { select: { url: true } },
      sizes: { select: { name: true } },
    },
  });
  const images = data.images.map((image) => {
    return image.url;
  });
  const sizes = data.sizes.map((size) => size.name);

  const product = { ...data, sizes, images };
  return product;
}

async function page({ params }) {
  const { productId } = params;
  const product = await getProductData(productId);
  const images = product.images;

  return (
    <div className="grid grid-cols-2 gap-12 py-12">
      <ImageGallery images={images} />
      <ProductPanel product={product} />
    </div>
  );
}

export default page;
