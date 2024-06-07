import React, { useState } from "react";
import ProfileDrCard from "../../Utilities/ProfileDrCard/ProfileDrCard";
import ProfileDr from "./ProfileDr/ProfileDr";

function ContentExplore({ data }) {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleCardClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="grid grid-cols-4 gap-4 py-20 w-full h-full">
      <div className="rounded-lg shadow-md p-4 w-full col-span-3">
        <ProfileDr profile={selectedProfile} />
      </div>
      <div className="w-full h-80 xl:px-4 px-2 col-span-1">
        <ProfileDrCard data={data} onCardClick={handleCardClick} />
      </div>
    </div>
  );
}

export default ContentExplore;
