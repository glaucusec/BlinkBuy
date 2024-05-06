import React from "react";

function ColorButton({ onChange, checked, labelText, hexCode }) {

  // use inline style, [dynamic classes] is not working with tailwind
  const inlineStyle = {
    background: hexCode,
    borderColor: hexCode,
  };

  return (
    <div class="inline-flex flex-col items-center">
      <label
        class="relative flex items-center p-3 cursor-pointer"
        htmlFor="check"
      >
        <input
          onChange={onChange}
          checked={checked}
          type="checkbox"
          style={inlineStyle}
          class="peer relative h-10 w-10 cursor-pointer appearance-none rounded-full border transition-all before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:transition-opacity"
          id="check"
        />
        <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>{" "}
      </label>
      <label
        class="mt-px font-light text-xs text-center text-gray-700 cursor-pointer select-none"
        htmlFor="check"
      >
        {labelText}
      </label>
    </div>
  );
}

export default ColorButton;
