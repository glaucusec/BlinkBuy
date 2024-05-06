import React from "react";

function SizeButton({ size, onClick, checked }) {
  const checkedClass = checked ? "bg-blinkSizeBtn border-[#9f8728]" : "";
  return (
    <button
      onClick={onClick}
      className={`py-1 border rounded-3xl w-full ${checkedClass} `}
    >
      {size}
    </button>
  );
}

export default SizeButton;
