// src/App.js
import React from "react";
import { AboutUsHome } from "../Data/Data";
const About= () => {
    return (
        <div className=" flex ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-56 text-center justify-center items-center">
          {AboutUsHome.map(({ id, title, description,number}) => (
            <div
              key={id}
              className={`flex flex-col justify-center items-center p-5 w-64 mx-auto commonStyle`}
            >
            <p className={`py-3 xl:text-xl  font-bold text-md text-start `}><span className="text-third text-xl xl:text-3xl">{number}</span> {title}</p>
            <p>{description}</p>
              
            </div>
          ))}
        </div>
      </div>

    );
  };
  
  export default About;