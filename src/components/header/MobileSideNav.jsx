import React from "react";
import { IconX, IconShoppingBag } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

function MobileSideNav({ showMobileNav, setShowMobileNav }) {
  return (
    showMobileNav && (
      <div className="mobile-side-nav lg:hidden fixed top-0 h-full w-full shadow-xl animate-leftToRightSlide bg-white">
        <section className="py-4 w-full bg-blinkblue"></section>
        <div className="flex flex-row justify-between py-4 px-4 border-b">
          <section>
            <IconX
              className="cursor-pointer"
              onClick={() => setShowMobileNav(false)}
              stroke={2}
            />
          </section>
          <section>
            <Link href="/" className="website-logo  h-8 w-12">
              <Image
                src="/logo.svg"
                alt="Website Logo"
                height={32}
                width={48}
              />
            </Link>
          </section>
          <section>
            {" "}
            <IconShoppingBag stroke={2} />
          </section>
        </div>
        <div className="flex flex-col px-4">
          <nav className="flex flex-col">
            <ul>
              <li className="py-6 border-b">
                <a href="#" className="font-bold">
                  Men
                </a>
              </li>
              <li className="py-6 border-b">
                <a href="#" className="font-bold">
                  Women
                </a>
              </li>
              <li className="py-6 border-b">
                <a href="#" className="font-bold">
                  Summer T-Shirts
                </a>
              </li>
              <li className="py-6 border-b">
                <a href="#" className="font-bold">
                  Oversized T-Shirts
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-1/2 flex gap-4 px-4">
          <section>
            <ul className="flex flex-col gap-2">
              <li>Track Order</li>
              <li>Reviews</li>
            </ul>
          </section>
          <section>
            <ul className="flex flex-col gap-2">
              <li>Support</li>
              <li>Return & Exchange</li>
              <li>Contact Us</li>
            </ul>
          </section>
        </div>
        <div className="fixed w-full text-white bottom-10 flex items-center justify-center">
          <button className="rounded-full bg-blinkblue px-16 py-3">
            Log In Or Sign Up
          </button>
        </div>
      </div>
    )
  );
}

export default MobileSideNav;
