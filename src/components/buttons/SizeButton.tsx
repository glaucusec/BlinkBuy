import React from "react";

type SizeButtonProps = {
  size: string;
  available?: boolean;
  changeSizeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedSize: string;
};

function SizeButton({
  size,
  available,
  changeSizeHandler,
  selectedSize,
}: SizeButtonProps) {
  const checkedclassName =
    selectedSize == size ? "bg-blinkSizeBtn border-[#9f8728]" : "";
  const disabledStyles = !available ? "text-gray-300 cursor-not-allowed" : "";

  return (
    <div className="flex flex-col items-center w-full">
      <input
        disabled={!available}
        onChange={changeSizeHandler}
        type="radio"
        id={size}
        name="size"
        value={size}
        className="hidden"
      />
      <label
        className={`flex items-center justify-center relative py-1 border rounded-3xl w-full ${disabledStyles} ${checkedclassName} cursor-pointer`}
        htmlFor={size}
      >
        {size}
      </label>
      {!available && (
        <span className="text-xs text-red-500 font-semibold">Sold out</span>
      )}
    </div>
  );
}

export default SizeButton;
