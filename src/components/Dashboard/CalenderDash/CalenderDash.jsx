// CalenderDash.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalenderForm from "./CalenderForm/CalenderForm";

const CalenderDash = () => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ ...newEvent, start, end });
    setShowModal(true);
  };

  const handleSelectEvent = (event) => {
    setNewEvent(event);
    setShowModal(true);
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setShowModal(false);
  };

  const handleEditEvent = () => {
    const updatedEvents = events.map((event) => {
      if (
        event.start.getTime() === newEvent.start.getTime() &&
        event.end.getTime() === newEvent.end.getTime()
      ) {
        return newEvent;
      } else {
        return event;
      }
    });
    setEvents(updatedEvents);
    setShowModal(false);
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.filter(
      (event) =>
        event.start.getTime() !== newEvent.start.getTime() ||
        event.end.getTime() !== newEvent.end.getTime()
    );
    setEvents(updatedEvents);
    setShowModal(false);
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

      {showModal && (
        <CalenderForm
          showModal={showModal}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          handleAddEvent={handleAddEvent}
          handleEditEvent={handleEditEvent}
          handleDeleteEvent={handleDeleteEvent}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default CalenderDash;
