import React from "react";
import { IconCarambola } from "@tabler/icons-react";

function ReviewRating({ reviewsAverage, reviewsCount }) {
  return (
    <span className="flex flex-rows justify-center items-center gap-1 border rounded-xl p-1 text-xs font-semibold">
      <span>
        <IconCarambola width={12} height={12} stroke="#d8ba43" fill="#d8ba43" />
      </span>
      <span>{reviewsAverage}</span>
      <span>|</span>
      <span>{reviewsCount}</span>
    </span>
  );
}

export default ReviewRating;
