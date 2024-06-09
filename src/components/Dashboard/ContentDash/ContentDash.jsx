import React, { useState } from "react";
import CardDash from "../CardDash/CardDash";
import CalenderDash from "../CalenderDash/CalenderDash";

const ContentDash = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    {
      title: "Dr. Omar",
      start: new Date("2024-06-08T12:30:00"),
      status: "free",
    },
    {
      title: "Dr. Fatima",
      start: new Date("2024-06-10T12:30:00"),
      status: "missed",
    },
    {
      title: "Dr. Fatima",
      start: new Date("2024-06-10T12:30:00"),
      status: "missed",
    },
    {
      title: "Dr. Ahmed",
      start: new Date("2024-06-10T12:30:00"),
      status: "chosen",
    },
    {
      title: "Dr. Ahmed",
      start: new Date("2024-06-07T12:30:00"),
      status: "free",
    },
    {
      title: "Dr. Ahmed",
      start: new Date("2024-07-04T12:30:00"),
      status: "free",
    },
  ]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleConfirmation = () => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) =>
        event === selectedEvent
          ? { ...event, status: event.status === "chosen" ? "free" : "chosen" }
          : event
      );
      setSelectedEvent(null);
      setEvents(updatedEvents);
    }
  };

  const handleDelete = (event) => {
    const updatedEvents = events.filter((e) => e !== event);
    setEvents(updatedEvents);
  };

  return (
    <div className="grid xl:grid-cols-4  md:gap-4 py-20 w-full h-full">
      <div className="rounded-lg shadow-md md:p-4 p-1 w-full col-span-3 order-2 xl:order-1">
      <CalenderDash
          events={events}
          handleConfirmation={handleConfirmation}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          handleDelete={handleDelete}
        />
      </div>
      <div className="w-full h-full xl:px-4 px-2 col-span-1  order-1 xl:order-2">
        <CardDash addEvent={addEvent} />
      </div>
    </div>
  );
};

export default ContentDash;
