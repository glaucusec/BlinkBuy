import React from "react";
import { IconHome, IconUser, IconCategory } from "@tabler/icons-react";

function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 bg-white w-full shadow-xl py-2">
      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-center items-center">
          <IconHome stroke={1.75} width={20} height={20} />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IconCategory stroke={1.75} width={20} height={20} />
          <span className="text-xs">Category</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IconUser stroke={1.75} width={20} height={20} />
          <span className="text-xs">My Account</span>
        </div>
      </div>
    </div>
  );
}

export default MobileBottomNav;
