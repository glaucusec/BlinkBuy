import React from "react";
import Image from "next/image";

function CollectionCard({ card__image__url, card__title }) {
  return (
    <div className="flex collection-container relative">
      <figure className="collection-image flex">
        <Image src={card__image__url} width={360} height={360} alt="Image" />
      </figure>
      <div className="absolute top-3/4 inline-flex w-full items-center justify-center">
        <button className="collection-button bg-blinkblue px-4 py-3 text-white text-wrap">
          {card__title}
        </button>
      </div>
    </div>
  );
}

export default CollectionCard;
