import React from "react";

function UserMenu() {
  return (
    <div className="invisible absolute w-64 top-14 right-10 p-3 rounded-xl bg-white shadow-xl group-hover:visible z-20">
      <ol className="font-semibold">
        <li className="border-b-2 p-2">Track Order</li>
        <li className="border-b-2 p-2">Return / Exchange</li>
        <li className="border-b-2 p-2">Contact Us</li>
        <li className="border-b-2 p-2">Reviews</li>
        <li className="flex justify-center items-center p-2">
          <button className="bg-blinkblue text-white text-sm rounded-full px-8 py-2">
            Log In or Sign Up
          </button>
        </li>
      </ol>
    </div>
  );
}

export default UserMenu;
