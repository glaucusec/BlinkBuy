"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2, IconUser, IconShoppingBag } from "@tabler/icons-react";

import Search from "./Search";
import MensHoverMenu from "./MensHoverMenu";
import WomensHoverMenu from "./WomenHoverMenu";

import MobileSideNav from "./MobileSideNav";
import UserMenu from "./UserMenu";

import { CartContext } from "../../context/CartContext";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const { cartOpen, toggleCart, cartItemCount } = useContext(CartContext);

  return (
    <nav className="border-b border-solid grid grid-cols-3 lg:grid-cols-[3fr_2fr] lg:gap-26 sticky top-0 z-20 bg-white px-4 2xl:px-24 h-14 lg:h-16">
      <MobileSideNav
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      {/* Grid #1 */}
      <div className="mobile-hamburger-menu flex items-center justify-start lg:hidden">
        <a href="#">
          <IconMenu2 onClick={() => setShowMobileNav(true)} stroke={2} />
        </a>
      </div>

      {/* Grid #2 */}
      <div className="flex justify-center lg:justify-around hover:text-gray-300">
        <div className="flex items-center">
          <Link href="/" className="website-logo h-8 w-12">
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
        <div className="md:max-w-[200px] lg:max-w-full h-full flex items-center">
          <Search />
        </div>
        <div className="group h-full px-2 hidden md:flex items-center">
          <IconUser stroke={2} />
          <UserMenu />
        </div>
        <div className="px-2 flex items-center h-full">
          <span
            onClick={() => toggleCart(true)}
            className="cursor-pointer relative"
          >
            <IconShoppingBag className="" stroke={2} />
            <span className="flex items-center justify-center text-white text-sm absolute w-4 h-4 top-0 right-0 translate-x-1 -translate-y-1 rounded-full bg-red-500">
              {cartItemCount}
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
