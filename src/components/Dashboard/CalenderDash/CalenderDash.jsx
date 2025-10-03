import React, { useState, useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Selector from "../../Utilities/Selector/Selector";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ConfirmSelect from "./ConfirmSelect/ConfirmSelect";
import { AuthContext } from "../../../context/AuthContext";
import { PsychologistsContext } from "../../../context/PsychologistsContext";
import { useSessions } from "../../../context/SessionContext";

const CalenderDash = ({}) => {
  //context
  const { psyData } = useContext(PsychologistsContext);
  console.log(psyData);
  const { userData, role } = useContext(AuthContext);
  const {
    events,
    handleConfirmation,
    handleDelete,
    handleEventSelect,
    selectedEvent,
    setSelectedEvent,
    deletingEvent,
    setDeletingEvent,
  } = useSessions();

  //calender stuff
  const localizer = momentLocalizer(moment);
  const currentMonth = moment().format("MMMM YYYY");

  //filter doctors
  const [dataselector, setDataselector] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const filteredEvents =
    selectedDoctor && selectedDoctor !== "All"
      ? events.filter((event) => event.title === selectedDoctor)
      : events;

  useEffect(() => {
    const updatedData = [
      "All",
      ...psyData.map((item) => "Dr." + item?.username),
    ];
    setDataselector(updatedData);
  }, [psyData]);

  //events status change
  const eventStyleGetter = (event) => {
    let style = {};
    if (event.status === "free") {
      style.backgroundColor = "#FFFFFF";
    } else if (event.status === "taken") {
      //taken
      style.backgroundColor = "#FDCDD6";
      style.color = "#900F26";
    } else if (event.status === "chosen") {
      style.backgroundColor = "#8AE3CC";
    }
    else if (event.status === false) {
      style.backgroundColor = "#FFFFFF";
    }
    else if (event.status === true) {
      style.backgroundColor = "#8AE3CC";
    }
    return {
      style,
    };
  };

  const handleConfirmationClick = () => {
    handleConfirmation(selectedEvent);
  };

  const handleDeleteConfirmation = () => {
    handleDelete(deletingEvent);
    setDeletingEvent(null);
    
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-between relative">
        <h2 className="font-bold rbc-toolbar-label md:text-xl ">
          {currentMonth}
        </h2>
        {userData && role === "user" && (
          <div className="p-2 absolute rounded-md right-1 -top-5 z-50 xs:w-1/2 md:text-base text-sm">
            <Selector
              data={dataselector}
              title={"select a doctor"}
              value={selectedDoctor}
              onChange={(doctorName) => setSelectedDoctor(doctorName)}
            />
          </div>
        )}
      </div>

      <div className="py-5 ">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="start"
          selectable
          style={{ height: 500 }}
          className="overflow-x-scroll md:overflow-hidden"
          eventPropGetter={eventStyleGetter}
          onSelectEvent={handleEventSelect}
        />
      </div>

      {deletingEvent && (
        <ConfirmSelect
          setSelectedEvent={setDeletingEvent}
          handleConfirmation={handleDeleteConfirmation}
          labeltitle="Delete"
          questionword="Delete"
        />
      )}

      {selectedEvent && (
        <ConfirmSelect
          setSelectedEvent={setSelectedEvent}
          handleConfirmation={handleConfirmationClick}
          labeltitle="Confirm"
          questionword={selectedEvent.status === "free" ? "Choose" : "Cancel"}
        />
      )}
    </div>
  );
};

export default CalenderDash;
