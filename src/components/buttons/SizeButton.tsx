import React from "react";

type SizeButtonProps = {
  size: string;
  onClick: () => void;
  checked: boolean;
  available: boolean;
};

function SizeButton({
  size,
  onClick,
  checked,
  available = true,
}: SizeButtonProps) {
  const checkedclassName = checked ? "bg-blinkSizeBtn border-[#9f8728]" : "";
  const disabledStyles = !available ? "text-gray-300" : "";

  return (
    <label className="flex flex-col items-center w-full">
      <button
        disabled={!available}
        onClick={onClick}
        className={`relative py-1 border rounded-3xl w-full ${disabledStyles} ${checkedclassName} `}
      >
        {size}
        {!available && <div className="absolute top-1/2 w-full border"></div>}
      </button>
      {!available && (
        <span className="text-xs text-red-500 font-semibold">Sold out</span>
      )}
    </label>
  );
}

export default SizeButton;
