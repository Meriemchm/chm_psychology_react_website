// CalenderDash.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Selector from "../../Utilities/Selector/Selector";
import { doctorData } from "../../Data/Data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalenderDash = ({ events }) => {
  const localizer = momentLocalizer(moment);
  const currentMonth = moment().format("MMMM YYYY");
  // const [newEvent, setNewEvent] = useState({ title: "", start: "" });

  // const handleSelectSlot = ({ start }) => {
  //   setNewEvent({ ...newEvent, start });
  // };

  // const handleSelectEvent = (event) => {
  //   setNewEvent(event);
  // };


  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-between relative">
        <h2 className="font-bold rbc-toolbar-label md:text-xl ">
          {currentMonth}
        </h2>
        <div className="p-2 absolute rounded-md right-1 -top-5 z-50 ">
          <Selector
            data={doctorData}
            title={"select a doctor"}
            value={events.title}
            onChange={(selectedDoctor) =>
              setEvents({ ...events, title: selectedDoctor })
            }
          />
        </div>
      </div>

 <div className="py-5">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="start" 
          selectable
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default CalenderDash;
