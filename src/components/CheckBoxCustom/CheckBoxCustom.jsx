import React from "react";
import { FaCheck } from "react-icons/fa6";
function CheckBoxCustom() {
  return (
    <label className="relative">
      <input
        type="checkbox"
        className=" appearance-none border-2 border-second form-checkbox h-5 w-5 text-second rounded-md focus:ring-second focus:ring-opacity-50"
      />
      <FaCheck className="absolute -top-1 left-0.5 text-white text-opacity-0 check_1" />
    </label>
  );
}

export default CheckBoxCustom;
