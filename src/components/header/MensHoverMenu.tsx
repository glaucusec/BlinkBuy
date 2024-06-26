import React from "react";
import Image from "next/image";
import AngleNextIcon from "../icons/AngleNextIcon";
import Link from "next/link";

function MensHoverMenu() {
  return (
    <React.Fragment>
      <div className="invisible absolute font-semibold top-16 left-0 w-full bg-white shadow-2xl group-hover:visible z-20">
        <section className="grid grid-cols-[4fr_2fr] lg:gap-24 xl:gap-44 px-10 ">
          <div className="grid grid-cols-4 xl:grid-cols-5 justify-self-auto py-8">
            <Link href={"/collections/pick-printed-t-shirts"}>
              <div className="cursor-pointer flex flex-col justify-center items-center gap-4">
                <Image
                  src={"/men/item1.webp"}
                  alt="T-Shirts"
                  height={150.663}
                  width={150.663}
                />
                <h3 className="">T-Shirts</h3>
              </div>
            </Link>
            <Link href={"/collections/men-oversized-t-shirts"}>
              <div className="cursor-pointer flex flex-col justify-center items-center gap-4">
                <Image
                  src={"/men/item2.webp"}
                  alt="T-Shirts"
                  height={150.663}
                  width={150.663}
                />
                <h3 className="">Oversized Tees</h3>
              </div>
            </Link>
            <Link href={"/collections/fashion-joggers-men"}>
              <div className="cursor-pointer flex flex-col justify-center items-center gap-4">
                <Image
                  src={"/men/item3.webp"}
                  alt="T-Shirts"
                  height={150.663}
                  width={150.663}
                />
                <h3 className="">Joggers</h3>
              </div>
            </Link>
            <Link href={"/collections/best-selling-co-ord-sets"}>
              <div className="cursor-pointer flex flex-col justify-center items-center gap-4">
                <Image
                  src={"/men/item4.avif"}
                  alt="T-Shirts"
                  height={150.663}
                  width={150.663}
                />
                <h3 className="">Co-Ord Sets</h3>
              </div>
            </Link>
            <Link href={"/collections/mens-shorts-collection"}>
              <div className="cursor-pointer flex flex-col justify-center items-center gap-4">
                <Image
                  src={"/men/item5.avif"}
                  alt="T-Shirts"
                  height={150.663}
                  width={150.663}
                />
                <h3 className="">Shorts</h3>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-around">
            <section className="grid grid-cols-[1fr_4fr_1fr]">
              <Image
                src={"/women/item4.avif"}
                alt="Item Banner"
                width={50}
                height={50}
              />
              <div>
                <h1>See the latest</h1>
                <p className="text-sm text-gray-500 ">
                  Explore fash-leisure must haves
                </p>
              </div>
              <div className="flex justify-center items-center">
                <AngleNextIcon stroke="1" />
              </div>
            </section>
            <section className="grid grid-cols-[1fr_4fr_1fr]">
              <Image
                src={"/women/item5.avif"}
                alt="Item Banner"
                width={50}
                height={50}
              />
              <div>
                <h1>Shop top selling styles</h1>
                <p className="text-sm text-gray-500">
                  The current fan favorites right now
                </p>
              </div>
              <div className="flex justify-center items-center">
                <AngleNextIcon stroke="1" />
              </div>
            </section>
            <section className="grid grid-cols-[1fr_4fr_1fr]">
              <Image
                src={"/men/item1.webp"}
                alt="Item Banner"
                width={50}
                height={50}
              />
              <div>
                <h1>See the latest</h1>
                <p className="text-sm text-gray-500">
                  Explore fash-leisure must haves
                </p>
              </div>
              <div className="flex justify-center items-center">
                <AngleNextIcon stroke="1" />
              </div>
            </section>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default MensHoverMenu;
