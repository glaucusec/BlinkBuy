import React, { cloneElement } from "react";
import Image from "next/image";
import collectionsData from "../../data/CollectionsPageData";
import CollectionCard from "../../components/cards/CollectionCard";

function CollectionPage() {
  return (
    <div className="collections-container py-10">
      <h1 className="collections-header text-2xl font-semibold pb-5">Collections</h1>
      <div className="collections-grid grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-4">
        {collectionsData.map((collection) => {
          return (
            <CollectionCard
              card__image__url={collection.card__image__url}
              card__title={collection.card__title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CollectionPage;
