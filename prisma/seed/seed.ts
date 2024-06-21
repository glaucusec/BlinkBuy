const { PrismaClient } = require("@prisma/client");

import { joggers, co_ords, oversized_tshirts } from "./men";
import { w_tshirts } from "./data/w_tshirts";

// https://github.com/prisma/prisma/discussions/2222
const prisma = new PrismaClient();

async function main() {
  await prisma.color.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.size.deleteMany();
  await prisma.image.deleteMany();
  await prisma.product.deleteMany();

  await seedToDatabase(joggers);
  await seedToDatabase(co_ords);
  await seedToDatabase(oversized_tshirts);
  await seedToDatabase(w_tshirts);
}

async function seedToDatabase(arr: any[]) {
  try {
    console.log("Starting seeding to database...");
    // Delete any data; if exists

    // Loop through product data and insert each of them.
    for (let p of arr) {
      const product = await prisma.product.create({
        data: {
          title: p.title,
          discountedPrice: p.discountedPrice,
          price: p.price,
          reviewsAverage: parseInt(p.reviewsAverage),
          reviewsCount: parseInt(p.reviewsCount),
          images: {
            create: p.images.map((url: string) => ({ url: url })),
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
      if (p.colors && p.colors != null) {
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
