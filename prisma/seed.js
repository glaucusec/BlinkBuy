import { PrismaClient } from "@prisma/client";
import { mens_joggers } from "./data.js";
import { co_ords } from "./data.js";

const prisma = new PrismaClient();

export async function main() {
  try {
    console.log("Starting seeding of database...");
    // Delete any data; if exists
    await prisma.color.deleteMany();
    await prisma.tag.deleteMany();
    await prisma.size.deleteMany();
    await prisma.image.deleteMany();
    await prisma.product.deleteMany();

    // Loop through product data and insert each of them.
    for (let p of mens_joggers) {
      const product = await prisma.product.create({
        data: {
          title: p.title,
          discountedPrice: p.discountedPrice,
          price: p.price,
          reviewsAverage: p.reviewsAverage,
          reviewsCount: p.reviewsCount,
          images: {
            create: p.images.map((url) => ({ url: url })),
          },
        },
      });

      // product =><= size (m-n) relationship
      const productId = product.id;
      for (let s of p.sizes) {
        let sizeId = null;
        const size = await prisma.size.findFirst({ where: { name: s } });
        sizeId = size ? size.id : "";

        await prisma.product.update({
          where: { id: productId },
          data: {
            sizes: {
              connectOrCreate: {
                where: { id: sizeId },
                create: { name: s },
              },
            },
          },
        });
      }
      // colors =><= size(m-n) relationship
      for (let c of p.colors) {
        let colorId = null;
        const color = await prisma.color.findFirst({ where: { name: c } });
        colorId = color ? color.id : "";

        await prisma.product.update({
          where: { id: productId },
          data: {
            colors: {
              connectOrCreate: {
                where: { id: colorId },
                create: { name: c },
              },
            },
          },
        });
      }

      // tags =><= size(m-n) relationship
      for (let t of p.tags) {
        let tagId = null;
        const tag = await prisma.tag.findFirst({ where: { name: t } });
        tagId = tag ? tag.id : "";

        await prisma.product.update({
          where: { id: productId },
          data: {
            tags: {
              connectOrCreate: {
                where: { id: tagId },
                create: { name: t },
              },
            },
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  } finally {
    console.log("Seeding finished");
    await prisma.$disconnect();
  }
}

main();
