import React, { useState } from "react";
import SearchInput from "../Utilities/SearchInput/SearchInput";
import ContentExplore from "./ContentExplore/ContentExplore";
import { ProfileDrData } from "../Data/Data";
function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredDr = ProfileDrData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="flex flex-col md:px-10 px-5 py-5 h-full">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between">
        <h2 className="font-bold text-2xl">Explore</h2>
        <div>
          <SearchInput onSearch={handleSearch} />
        </div>
      </div>
      <ContentExplore data={filteredDr} />
    </div>
  );
}

export default Explore;
