// src/App.js
import React from "react";
import Table from "./Table/Table";
import { PlansData } from "../../../Data/Data";


const AboutUs = () => {
    return (

        <div className=" mx-auto  flex flex-col  w-full h-full items-center justify-center ">
          <div className="flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-bold  text-center py-4 ">
                Plans
            </p>
          </div>
          <div className="flex xl:flex-row flex-col  shadow-gray rounded-[2rem] shadow-lg p-20 xl:gap-0 gap-6">
            <div className="md:self-center xl:self-start">
          <img
            src={Illustration_service_two}
            alt="MyProfile"
            className=" object-cover w-96 "
                />
          </div>
            <Table />
            
          </div>

     
      </div>
    );
  };
  
  export default AboutUs;