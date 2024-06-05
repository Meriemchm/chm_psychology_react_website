import React, { useState } from "react";
import CardDash from "../CardDash/CardDash";
import CalenderDash from "../CalenderDash/CalenderDash";

const ContentDash = () => {
  const [events, setEvent] = useState([]);

  return (
    <div className="grid grid-cols-4 gap-4 py-20 w-full h-full">
      <div className="rounded-lg shadow-md p-4 w-full col-span-3">
        <CalenderDash events={events} />
      </div>
      <div className="w-full h-full xl:px-4 px-2 col-span-1">
        <CardDash setEvent={setEvent} />
      </div>
    </div>
  );
};

export default ContentDash;
