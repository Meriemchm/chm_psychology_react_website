// src/App.js
import React from "react";
import Plans from "./Plans/Plans";
import Illustration_service_two from "../../../assets/Illustration_service_two.svg"


const PlanService = () => {
    return (

        <div className=" mx-auto  flex flex-col  w-full h-full  px-20 ">
          <div className="flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-bold  text-center py-4 ">
                Plans
            </p>
          </div>
          <div className=" p-5 w-full shadow-gray rounded-[2rem] shadow-lg  xl:gap-0 gap-6">
            <div className="flex xl:flex-row flex-cols  items-center justify-center  ">
            <div className="md:self-center xl:self-start">
          <img
            src={Illustration_service_two}
            alt="MyProfile"
            className=" object-cover w-96 "
                />
          </div>
            <Plans />
            </div> 
          </div>

   
      </div>
    );
  };
  
  export default PlanService;