import React, { useState } from "react";
import CardDash from "../CardDash/CardDash";
import CalenderDash from "../CalenderDash/CalenderDash";

const ContentDash = () => {
  const [events, setEvents] = useState([
    {
      title: "Dr. Omar",
      start: new Date("2024-06-08T12:30:00"),
    },
    {
      title: "Dr. Fatima",
      start: new Date("2024-06-10T12:30:00"),
    },
    {
      title: "Dr. Ahmed",
      start: new Date("2024-06-10T12:30:00"),
    },
    {
      title: "Dr. Ahmed",
      start: new Date("2024-06-07T12:30:00"),
    },
  ]);
  
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="grid grid-cols-4 gap-4 py-20 w-full h-full">
      <div className="rounded-lg shadow-md p-4 w-full col-span-3">
        <CalenderDash events={events} />
      </div>
      <div className="w-full h-full xl:px-4 px-2 col-span-1">
        <CardDash addEvent={addEvent} />
      </div>
    </div>
  );
};

export default ContentDash;
