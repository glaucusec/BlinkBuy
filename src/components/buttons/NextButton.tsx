import React from "react";

type NextButtonProps = {
  onClick: (() => void) | undefined;
};

function NextButton({ onClick }: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      className="z-10 shadow-xl cursor-pointer absolute top-1/2 w-auto p-2 transition duration-600 ease-out rounded-full bg-white hover:bg-transparent right-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 sm:w-6 sm:h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
}

export default NextButton;
