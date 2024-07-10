import React, { useState, useContext ,useEffect} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Selector from "../../Utilities/Selector/Selector";
import { doctorData } from "../../Data/Data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ConfirmSelect from "./ConfirmSelect/ConfirmSelect";
import { AuthContext } from "../../../context/AuthContext";
import { PsychologistsContext } from "../../../context/PsychologistsContext"; 
const CalenderDash = ({
  events,
  handleConfirmation,
  selectedEvent,
  setSelectedEvent,
  handleDelete,
}) => {
  const { psyData } = useContext(PsychologistsContext);
  const { userData,role } = useContext(AuthContext);
  const localizer = momentLocalizer(moment);
  const currentMonth = moment().format("MMMM YYYY");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [deletingEvent, setDeletingEvent] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [dataselector, setDataselector] = useState([]);
  const filteredEvents =
    selectedDoctor && selectedDoctor !== "All"
      ? events.filter((event) => event.title === selectedDoctor)
      : events;
      
  useEffect(() => {
    const updatedData = ['All', ...psyData.map(item => 'Dr.'+item?.username)];
    setDataselector(updatedData);
  }, [psyData]);

  const eventStyleGetter = (event, start, end, isSelected) => {
    let style = {};
    if (event.status === "free") {
      style.backgroundColor = "#FFFFFF";
    } else if (event.status === "taken") { //taken
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
    if (userData && role !== "user") {
      setDeletingEvent(event);
      setShowDeleteConfirmation(true);
    } else if (
      (userData &&
        role === "user" &&
        event.status === "free") ||
      event.status === "chosen"
    ) {
      setSelectedEvent(event);
    }
  };

  const handleDeleteConfirmation = () => {
    handleDelete(deletingEvent);
    setDeletingEvent(null);
    setShowDeleteConfirmation(false);
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

      {showDeleteConfirmation && (
        <ConfirmSelect
          setSelectedEvent={setShowDeleteConfirmation}
          handleConfirmation={handleDeleteConfirmation}
          labeltitle="Delete"
          questionword="Delete"
        />
      )}

      {selectedEvent && (
        <ConfirmSelect
          setSelectedEvent={setSelectedEvent}
          handleConfirmation={handleConfirmation}
          labeltitle="Confirm"
          questionword={selectedEvent.status === "free" ? "Choose" : "Cancel"}
        />
      )}
    </div>
  );
};

export default CalenderDash;
