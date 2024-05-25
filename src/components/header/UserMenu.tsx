"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { AuthContext } from "../../context/AuthContext";
import { signout } from "../../lib/actions";

function UserMenu() {
  const { authenticated, removeValueHandler } = useContext(AuthContext);

  return (
    <div className="invisible absolute w-64 top-14 right-10 p-3 rounded-xl bg-white shadow-xl group-hover:visible z-20">
      <ol className="font-semibold">
        {authenticated && (
          <li className="border-b-2 p-2">
            <Link href="/account">My Account</Link>
          </li>
        )}
        <li className="border-b-2 p-2">
          <Link href="#">Track Order</Link>
        </li>
        <li className="border-b-2 p-2">
          <Link href="#">Return / Exchange</Link>
        </li>
        <li className="border-b-2 p-2">
          <Link href="#">Contact Us</Link>
        </li>
        <li className="border-b-2 p-2">
          <Link href="#">Reviews</Link>
        </li>
        {!authenticated && (
          <li className="flex justify-center items-center p-2">
            <Link
              href="/sign_in"
              className="bg-blinkblue text-white text-sm rounded-full px-8 py-2"
            >
              Log In or Sign Up
            </Link>
          </li>
        )}

        {authenticated && (
          <li className="flex justify-center items-center p-2">
            <button
              onClick={async () => {
                const { success, error, message } = await signout();
                if (success) toast.warning(message);
                removeValueHandler();
                setTimeout(() => {
                  location.reload();
                }, 500);
              }}
              className="bg-blinkblue text-white text-sm rounded-full px-8 py-2"
            >
              Log Out
            </button>
          </li>
        )}
      </ol>
    </div>
  );
}

export default UserMenu;
