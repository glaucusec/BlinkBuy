import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="border-b border-solid grid grid-cols-3 lg:grid-cols-2 pl-6 pr-6 pt-3 pb-3 sticky top-0 z-10 bg-white">
      <a href="#" className="block lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </a>
      <div className="top-0 z-10">
        <ol className="flex justify-around items-center">
          <a href="#" className="h-8 w-12">
            <Image src='/logo.svg' alt="Website Logo" height={32} width={48} />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                className="border-none focus:outline-none hidden lg:block"
                placeholder="Search..."
              />
            </div>
          </li>
          <li className="pl-4 hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </li>
          <li className="pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </li>
        </ol>
      </div>
    </header>
  );
}

export default Header;
