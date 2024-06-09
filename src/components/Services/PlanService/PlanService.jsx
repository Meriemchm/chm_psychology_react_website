// src/App.js
import React from "react";
import Plans from "./Plans/Plans";

const PlanService = () => {
  return (
    <div className=" mx-auto  flex flex-col  w-full h-full px-4 md:px-20 pb-10">
      <div className="flex items-center justify-center pb-8">
        <p className="text-2xl md:text-4xl font-bold  text-center  ">Plans</p>
      </div>
      <div className=" p-5 w-full shadow-gray rounded-[2rem] shadow-lg ">
        <Plans />
      </div>
    </div>
  );
};

export default PlanService;
