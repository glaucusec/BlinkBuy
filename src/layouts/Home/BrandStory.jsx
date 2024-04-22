import React from "react";
import Image from "next/image";

function BrandStory() {
  return (
    <div className="my-16">
      <Image
        src={`/about-us/brand_story.webp`}
        alt="Our Story"
        className="w-full"
        width={1024} height={266.925}
      />
    </div>
  );
}

export default BrandStory;
