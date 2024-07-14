import React, { useContext, useState } from "react";
import CardDash from "../CardDash/CardDash";
import CalenderDash from "../CalenderDash/CalenderDash";

const ContentDash = () => {
  return (
    <div className="grid xl:grid-cols-4 grid-cols-1 md:gap-4 py-20 w-full h-full">
      <div className="rounded-lg shadow-md md:p-4 p-1 w-full col-span-3 order-2 xl:order-1">
        <CalenderDash />
      </div>
      <div className="w-full h-full xl:px-4 px-2 col-span-1 order-1 xl:order-2">
        <CardDash />
      </div>
    </div>
  );
};

export default ContentDash;
