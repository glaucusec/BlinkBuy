import React, { ReactNode } from "react";
import Link from "next/link";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 grid grid-rows-[3fr_6fr] md:grid-rows-1 md:grid-cols-[3fr_6fr] gap-2 md:gap-8">
      <div className="border rounded-xl">
        <ol className="p-4">
          <li className="p-2 border-b">
            <Link href="/account/profile">My Profile</Link>
          </li>
          <li className="p-2 border-b">
            <Link href="/account/orders">My Orders</Link>
          </li>
          <li className="p-2 border-b">
            <Link href="/account/addresses">My Addresses</Link>
          </li>
          <li className="p-2 border-b">
            <Link href="/pages/faqs">Help</Link>
          </li>
          <li className="p-2 border-b">
            <Link href="/account/logout">Logout</Link>
          </li>
        </ol>
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default layout;
