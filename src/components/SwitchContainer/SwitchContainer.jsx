// Switch.js
import React, { useState } from "react";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? "bg-second" : "bg-white border-2 border-second"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform ${
          isOn ? "translate-x-6 " : "translate-x-0 border-2 border-second"
        }`}
      />
    </div>
  );
};

const SwitchContainer = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex  gap-4">
      <Switch isOn={isOn} handleToggle={handleToggle} />
    </div>
  );
};

export default SwitchContainer;
