import React from "react";
import moment from "moment";

function CalenderForm({
  showModal,
  newEvent,
  setNewEvent,
  setShowModal,
  handleAddEvent,
  handleEditEvent, 
  handleDeleteEvent,
}) {
  React.useEffect(() => {
    const handleScroll = (e) => {
      if (showModal) {
        e.preventDefault();
      }
    };

    document.body.style.overflow = showModal ? "hidden" : "auto";
    document.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("scroll", handleScroll);
    };
  }, [showModal]);

  const isEditing = newEvent.id !== undefined;

  const handleSubmit = () => {
    if (isEditing) {
      handleEditEvent();
    } else {
      handleAddEvent();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-md">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Event" : "Add Event"}
        </h2>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="border p-2 mb-4 w-full"
        />
        <label>Start Time:</label>
        <input
          type="datetime-local"
          value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
          onChange={(e) =>
            setNewEvent({ ...newEvent, start: new Date(e.target.value) })
          }
          className="border p-2 mb-4 w-full"
        />
        <label>End Time:</label>
        <input
          type="datetime-local"
          value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
          onChange={(e) =>
            setNewEvent({ ...newEvent, end: new Date(e.target.value) })
          }
          className="border p-2 mb-4 w-full"
        />
        <button
          onClick={handleSubmit} // Call handleSubmit for both add and edit
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          {isEditing ? "Save Changes" : "Add Event"}
        </button>
        {isEditing && (
          <button
            onClick={handleDeleteEvent} // Call handleDeleteEvent when delete button is clicked
            className="ml-2 bg-red-500 text-white p-2 rounded-md"
          >
            Delete Event
          </button>
        )}
        <button
          onClick={() => setShowModal(false)}
          className="ml-2 bg-gray-500 text-white p-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CalenderForm;
