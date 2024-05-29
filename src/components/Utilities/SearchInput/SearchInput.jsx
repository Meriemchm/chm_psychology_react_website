import React from "react";
import IconSearch from "../../../assets/IconSearch.svg";

const SearchInput = () => {
  return (
    <div className="flex items-center shadow-md rounded-full overflow-hidden">
      <div className="p-3">
       <img src={IconSearch} alt="iconSearch" />
      </div>
      <input
        type="text"
        placeholder="Search for anything..."
        className="py-2 px-4 focus:outline-none flex-grow text-sm w-72"
      />
    </div>
  );
}

export default SearchInput;
