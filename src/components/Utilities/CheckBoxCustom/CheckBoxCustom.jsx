import React from "react";
import iconcheck from "../../..//assets/iconcheck.svg";
function CheckBoxCustom() {
  return (
    <label className="relative">
      <input
        type="checkbox"
        className=" appearance-none border-2 border-second form-checkbox h-5 w-5 text-second rounded-md focus:ring-second focus:ring-opacity-50"
      />

      <img
        src={iconcheck}
        className="absolute -top-1.5 left-0.4 text-opacity-0 check_1"
      />
    </label>
  );
}

export default CheckBoxCustom;
