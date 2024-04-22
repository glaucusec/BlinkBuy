import React from "react";
import Image from "next/image";
import {
  IconMenu2,
  IconSearch,
  IconUser,
  IconShoppingBag,
} from "@tabler/icons-react";

function Header() {
  return (
    <header className="border-b border-solid grid grid-cols-3 lg:grid-cols-2 pl-6 pr-6 pt-3 pb-3 sticky top-0 z-10 bg-white">
      <a href="#" className="block lg:hidden">
        <IconMenu2 stroke={2} />
      </a>
      <div className="top-0 z-10">
        <ol className="flex justify-around items-center">
          <a href="#" className="h-8 w-12">
            <Image src="/logo.svg" alt="Website Logo" height={32} width={48} />
          </a>
          <a href="#" className="font-bold hidden lg:block">
            Men
          </a>
          <a href="#" className="font-bold hidden lg:block">
            Women
          </a>
          <a href="#" className="font-bold hidden lg:block">
            Oversized T-Shirts
          </a>
          <a href="#" className="font-bold hidden lg:block">
            Summer T-Shirts
          </a>
        </ol>
      </div>

      <div className="">
        <ol className="flex justify-end items-center">
          <li className="md:border-2 border-solid">
            <div className="flex p-1">
              <IconSearch />
              <input
                type="text"
                className="border-none focus:outline-none hidden lg:block"
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
    </header>
  );
}

export default Header;
