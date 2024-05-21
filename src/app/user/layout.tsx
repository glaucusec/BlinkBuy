"use client";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="py-8 flex flex-col items-center justify-center">
      <div className="min-w-96 md:min-w-min md:max-w-max">{children}</div>
    </div>
  );
}

export default Layout;
