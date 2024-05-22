import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto pb-16">{children}</div>;
}

export default layout;
