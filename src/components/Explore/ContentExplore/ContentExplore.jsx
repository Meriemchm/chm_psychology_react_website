import React, { useState } from "react";
import ProfileDrCard from "../../Utilities/ProfileDrCard/ProfileDrCard";
import ProfileDr from "./ProfileDr/ProfileDr";

function ContentExplore({ data }) {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleCardClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="grid xl:grid-cols-4 grid-cols-1  md:gap-4 md:py-20 py-10 w-full h-full">
      <div className="rounded-lg h-screen shadow-md md:p-4 w-full col-span-3 order-2 xl:order-1">
        <ProfileDr profile={selectedProfile} />
      </div>
      <div className="w-full md:h-80 xl:px-4  md:col-span-1 order-1 xl:order-2 mb-5 md:mb-0">
        <ProfileDrCard data={data} onCardClick={handleCardClick} />
      </div>
    </div>
  );
}

export default ContentExplore;
