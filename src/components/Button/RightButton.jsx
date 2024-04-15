import React from "react";

function RightButton({ clickAction }) {
  return (
    <button
      onClick={clickAction}
      class="z-10 next shadow-xl cursor-pointer absolute top-1/2 w-auto p-2 transition duration-600 ease-out rounded-full bg-white hover:bg-transparent right-4"
      onclick="plusSlides(1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
}

export default RightButton;
