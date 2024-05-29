import React from "react";

function ButtonsSettings() {
  return (

      <div className="flex  justify-between items-center gap-2 p-4">
        <button className=" xl:text-lg font-bold text-six rounded-3xl  underline">
          Cancel
        </button>
        <button className=" bg-primary border-2 border-primary xl:text-lg text-white px-4 xl:px-5  py-2 rounded-lg ">
          Save
        </button>
      </div>

  );
}

export default ButtonsSettings;
