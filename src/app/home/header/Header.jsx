import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconMenu2,
  IconSearch,
  IconUser,
  IconShoppingBag,
} from "@tabler/icons-react";

import MensHoverMenu from "./MensHoverMenu";
import WomensHoverMenu from "./WomenHoverMenu";

function Header() {
  return (
    <nav className="border-b border-solid grid grid-cols-3 lg:grid-cols-[3fr_2fr] lg:gap-26 sticky top-0 z-20 bg-white px-4 2xl:px-24 h-14 lg:h-16">
      {/* Grid #1 */}
      <div className="mobile-hamburger-menu flex items-center justify-start lg:hidden">
        <a href="#">
          <IconMenu2 stroke={2} />
        </a>
      </div>

      {/* Grid #2 */}
      <div className="flex justify-center lg:justify-around hover:text-gray-300">
        <div className="flex items-center">
          <Link href="/" className="website-logo  h-8 w-12">
            <Image src="/logo.svg" alt="Website Logo" height={32} width={48} />
          </Link>
        </div>

        <div className="group flex items-center hover:border-b-2 border-b-orange-700 hover:text-black">
          <a href="#" className="font-bold hidden lg:block">
            Men
          </a>
          <MensHoverMenu />
        </div>
        <div className="group flex items-center hover:border-b-2 border-b-orange-700 hover:text-black">
          <a href="#" className="font-bold hidden lg:block">
            Women
          </a>
          <WomensHoverMenu />
        </div>
        <div className="flex items-center">
          <a href="#" className="font-bold hidden lg:block hover:text-black">
            Oversized T-Shirts
          </a>
        </div>
        <div className="flex items-center">
          <a href="#" className="font-bold hidden lg:block hover:text-black">
            Summer T-Shirts
          </a>
        </div>
      </div>

      {/* Grid #3 */}
      <div className="cart-user-menu flex items-center justify-end">
        <ol className="flex flex-row items-center justify-center">
          <li className="xl:border-2 border-solid">
            <div className="flex p-1">
              <IconSearch />
              <input
                type="text"
                className="border-none focus:outline-none hidden xl:block"
                placeholder="Search..."
              />
            </div>
          </li>
          <li className="pl-4 hidden md:block">
            <IconUser stroke={2} />
          </li>
          <li className="pl-4">
            <IconShoppingBag stroke={2} />
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Header;
