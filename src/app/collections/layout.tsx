import React from "react";

function CollectionLayout({ children }: { children: JSX.Element }) {
  return <div className="container mx-auto">{children}</div>;
}

export default CollectionLayout;
