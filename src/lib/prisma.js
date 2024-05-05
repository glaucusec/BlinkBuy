import { PrismaClient } from "@prisma/client";
import { mens_joggers } from "../tests/main";

// let prisma = new PrismaClient();

async function main() {
  await prisma.color.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.size.deleteMany();
  await prisma.image.deleteMany();
  await prisma.product.deleteMany();
  for (let p of mens_joggers) {
    const user = await prisma.product.create({
      data: {
        title: p.title,
        discountedPrice: p.discountedPrice,
        price: p.price,
        reviewsAverage: p.reviewsAverage,
        reviewsCount: p.reviewsCount,
        colors: {
          create: p.colors.map((color) => ({ color: color })),
        },
        images: {
          create: p.images.map((url) => ({ url: url })),
        },
        tags: {
          create: p.tags.map((tag) => ({
            name: tag,
          })),
        },
      },
    });
  }
}

// main();

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
