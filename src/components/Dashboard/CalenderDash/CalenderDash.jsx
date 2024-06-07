import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Selector from "../../Utilities/Selector/Selector";
import { doctorData } from "../../Data/Data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ConfirmSelect from "./ConfirmSelect/ConfirmSelect";

const CalenderDash = ({ events }) => {
  const localizer = momentLocalizer(moment);
  const currentMonth = moment().format("MMMM YYYY");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents =
    selectedDoctor && selectedDoctor !== "All"
      ? events.filter((event) => event.title === selectedDoctor)
      : events;

  const eventStyleGetter = (event, start, end, isSelected) => {
    let style = {};
    if (event.status === "free") {
      style.backgroundColor = "#FFFFFF";
    } else if (event.status === "missed") {
      style.backgroundColor = "#FDCDD6";
      style.color = "#900F26";
    } else if (event.status === "chosen") {
      style.backgroundColor = "#D5FBF5";
    }
    return {
      style,
    };
  };

  const handleEventSelect = (event) => {
    if (event.status === "free") {
      setSelectedEvent(event);
    }
  };

  const handleConfirmation = () => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) =>
        event === selectedEvent ? { ...event, status: "chosen" } : event
      );
      setSelectedEvent(null);
      setEvents(updatedEvents);
    }
  };

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
            value={selectedDoctor}
            onChange={(doctorName) => setSelectedDoctor(doctorName)}
          />
        </div>
      </div>

      <div className="py-5">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="start"
          selectable
          style={{ height: 500 }}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={handleEventSelect}
        />
      </div>

      {selectedEvent && (
        <ConfirmSelect setSelectedEvent={setSelectedEvent} handleConfirmation={handleConfirmation} />
      )}
    </div>
  );
};

export default CalenderDash;
