import React from "react";
import ImageGallery from "./ImageGallery";
import ProductPanel from "./ProductPanel";
import prisma from "../../../lib/prisma";

type DataType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  discountedPrice: number;
  handle?: string;
  reviewsAverage?: number;
  reviewsCount?: number;
  price: number;
  isActive: boolean;
  isBestSeller?: boolean;
  published?: boolean;
  images: { url: string }[];
  sizes: { name: string }[];
};

async function getProductData(productId: string): Promise<DataType | null> {
  // fetch the images;
  const data = await prisma.product.findUnique({
    where: { id: productId },
    include: {
      images: { select: { url: true } },
      sizes: { select: { name: true } },
    },
  });

  if (!data) {
    return null;
  }

  const images = data.images.map((image) => image.url);
  const sizes = data.sizes.map((size) => size.name);

  const product: DataType = { ...data, sizes, images };
  return product;
}

async function page({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const product = await getProductData(productId);
  const images = product.images;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
      <ImageGallery images={images} />
      <ProductPanel product={product} />
    </div>
  );
}

export default page;
