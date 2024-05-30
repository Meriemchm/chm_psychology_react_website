import React, { useState } from "react";
import IconSearch from "../../../assets/IconSearch.svg";

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center shadow-md rounded-full overflow-hidden">
        <button type="submit" className="p-3">
          <img src={IconSearch} alt="iconSearch" />
        </button>
        <input
          type="text"
          placeholder="Search for anything..."
          value={searchTerm}
          onChange={handleChange}
          className="py-2 px-4 focus:outline-none flex-grow text-sm w-72"
        />
      </div>
    </form>
  );
};

export default SearchInput;
