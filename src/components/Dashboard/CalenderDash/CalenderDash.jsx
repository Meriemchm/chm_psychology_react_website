// CalenderDash.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalenderDash = ({ events }) => {
  const localizer = momentLocalizer(moment);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ ...newEvent, start, end });
  };

  const handleSelectEvent = (event) => {
    setNewEvent(event);
  };

  const currentMonth = moment().format("MMMM YYYY");

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-between ">
        <h2 className="font-bold rbc-toolbar-label md:text-xl ">
          {currentMonth}
        </h2>
        <div className="p-2 bg-yellowdash rounded-md">
          <p className="text-lg">
            Remaining Sessions: <span className="font-bold">2</span>
          </p>
        </div>
      </div>

      <div className="py-5">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default CalenderDash;
