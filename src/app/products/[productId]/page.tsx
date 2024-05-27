import React from "react";
import ImageGallery from "./ImageGallery";
import ProductPanel from "./ProductPanel";
import prisma from "../../../lib/prisma";
import NotFound from "../../../components/NotFound";

type ProductType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  discountedPrice: number;
  handle?: string | null;
  reviewsAverage?: number | null;
  reviewsCount?: number | null;
  price: number;
  isActive: boolean | null;
  isBestSeller?: boolean | null;
  published?: boolean | null;
  images: string[];
  sizes: string[];
};

async function getProductData(productId: string): Promise<ProductType | null> {
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

  const product: ProductType = { ...data, sizes, images };
  return product;
}

async function page({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const product: ProductType | null = await getProductData(productId);
  if (product == null) {
    return <NotFound />;
  }
  const images: string[] = product.images;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
      <ImageGallery images={images} />
      <ProductPanel product={product} />
    </div>
  );
}

export default page;
