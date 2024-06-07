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
    <div className="flex flex-col px-10 py-5 h-screen">
      <div className="flex justify-between">
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
