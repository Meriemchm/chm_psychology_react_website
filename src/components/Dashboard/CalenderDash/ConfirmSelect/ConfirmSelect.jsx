import React from "react";
import { useSessions } from "../../../../context/SessionContext";

function ConfirmSelect({ handleConfirmation,setSelectedEvent, questionword, labeltitle }) {
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-md">
        <p>
          Do you want to <span className="font-bold">{questionword}</span> this
          event?
        </p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setSelectedEvent(null)}
            className="bg-gray-300 px-4 py-2 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmation}
            className={`${
              questionword === "Delete" || questionword === "Cancel"
                ? "bg-red-400"
                : "bg-third"
            } text-white px-4 py-2 rounded-md`}
          >
            {labeltitle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmSelect;
