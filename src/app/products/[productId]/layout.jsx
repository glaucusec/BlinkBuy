import React from "react";

function layout({ children }) {
  return (
    <div className="container mx-auto sm:p-1 md:px-2 md:py-4 lg:px-4 lg:py-6 xl:px-12 xl:py-8 2xl:px-24 3xl:px-0">
      {children}
    </div>
  );
}

export default layout;
