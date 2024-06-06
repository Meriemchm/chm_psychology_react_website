// src/App.js
import React from "react";
import About from "../../Utilities/About/About";
import Services from "./Services/Services";

const AboutUs = () => {
    return (
        <div  className=" h-full w-full bg-fourvariant ">
        <div className="md:px-20 mx-auto p-4 flex flex-col  w-full h-full items-center justify-cente ">
          <div className="flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-bold  text-center py-8 ">
                About our platform
            </p>
          </div>
          <div className="">
            <About />
          </div>
          <div className="">
            <Services />
          </div>
          <p className="text-seven underline">Join as a psychologist</p>
        </div>
      </div>
    );
  };
  
  export default AboutUs;