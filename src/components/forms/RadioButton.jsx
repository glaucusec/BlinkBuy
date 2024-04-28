import React from "react";

function RadioButton({ onClick, labelText, checked }) {
  return (
    <label className="flex items-center mb-3">
      <input
        readOnly={true}
        onClick={onClick}
        id="default-checkbox"
        type="radio"
        value=""
        checked={checked}
        className="cursor-pointer w-5 h-5 rounded-md text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
      />
      <span className="cursor-pointer ms-2 text-sm font-medium text-gray-600">
        {labelText}
      </span>
    </label>
  );
}

export default RadioButton;
