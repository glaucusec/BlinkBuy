import React from "react";

type PopularItemCardType = {
  image__url: string;
  image__alt__text: string;
};

function PopularItemCard({
  image__url,
  image__alt__text,
}: PopularItemCardType) {
  return (
    <section className="px-2 rounded-lg">
      <a>
        <img className="rounded-md" src={image__url} alt={image__alt__text} />
      </a>
    </section>
  );
}

export default PopularItemCard;
