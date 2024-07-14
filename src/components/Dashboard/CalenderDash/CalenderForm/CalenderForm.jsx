import React, { useEffect, useContext } from "react";
import moment from "moment";
import { AuthContext } from "../../../../context/AuthContext";
import { useSessions } from "../../../../context/SessionContext";
function CalenderForm({ setShowModal, showModal }) {
  const { userData } = useContext(AuthContext);
  const { handleAddEvent,start, setStart } = useSessions();
  useEffect(() => {
    const handleScroll = (e) => {
      if (showModal) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("wheel", handleScroll, { passive: false });
    document.addEventListener("touchmove", handleScroll, { passive: false });
    document.addEventListener("keydown", (e) => {
      if (
        showModal &&
        (e.key === "ArrowUp" ||
          e.key === "ArrowDown" ||
          e.key === "PageUp" ||
          e.key === "PageDown")
      ) {
        e.preventDefault();
      }
    });

    return () => {
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchmove", handleScroll);
      document.removeEventListener("keydown", handleScroll);
    };
  }, [showModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-md relative md:w-1/3">
        <h2 className="text-xl font-bold pb-20">Add Event</h2>
        <div className="absolute w-full top-16 pr-10">
          <input
            id="doctorname"
            type="text"
            defaultValue={userData ? "Dr." + userData.username : ""}
            className="border-2 p-2 mb-4 w-full text-six border-six rounded-xl"
            readOnly
          />
        </div>
        <label for="StartTime">Start Time:</label>
        <input
          id="StartTime"
          type="datetime-local"
          value={start ? moment(start).format("YYYY-MM-DDTHH:mm") : ""}
          onChange={(e) => setStart(new Date(e.target.value))}
          className="border-2 p-2 mb-4 w-full text-six border-six rounded-xl"
        />
        <div className="flex justify-between py-5">
          <button
            onClick={handleAddEvent}
            className="bg-primary text-white p-2 rounded-md"
          >
            Add Event
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="ml-2 underline text-six p-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalenderForm;
