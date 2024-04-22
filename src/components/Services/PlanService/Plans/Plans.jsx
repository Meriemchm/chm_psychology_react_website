// src/App.js
import React from "react";
import { PlansData } from "../../../Data/Data";
const Plans= () => {
    return (
        <div className=" flex ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-10 px-5 text-center justify-center items-center">
          {PlansData.map(({ id, title, description}) => (
            <div
              key={id}
              className={` flex flex-col  xl:flex-row items-center justify-center `}
            >
              
            <div className=" xl:w-96 xl:h-74 border-t-2 md:border-t-0 md:border-l-2 xl:p-5 flex flex-col justify-center items-center gap-6 ">
            <p className={`py-3 xl:text-xl  font-bold text-md text-start `}> {title}</p>
            <p className="">{description}</p>
            <button className="bg-primary border-1 border-primary xl:text-xl text-four px-10 xl:px-16 py-3 rounded-2xl font-bold duration-200 hover:scale-105">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                    Get Started
                    </a>
                </button>
                </div> 
            </div>
          ))}
        </div>
      </div>

    );
  };
  
  export default Plans;