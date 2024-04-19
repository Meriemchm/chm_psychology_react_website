// src/App.js
import React from "react";
import {presentationData} from "../../Data/Data";
import shape from "../../../assets/shape.svg"

const Presentation = () => {
    return (
      <div className="h-full flex flex-col items-center justify-start">      
        <h2 className=" text-2xl md:text-4xl font-bold py-14">
        Who are we ?
        </h2>
      <div className="flex flex-col xl:flex-row ">

      <div className="xl:p-20 xl:pt-0 pt-20 p-5 flex justify-center items-center ">
          <img
              src={shape}
              alt="Logo"
              className="rounded-lg object-cover"
          />
      </div>
      <fieldset className="border-l border-slate-200">
    </fieldset>
      <div className="flex flex-col justify-start items-start xl:ml-16 xl:p-8 p-5 md:p-14">
          <p className="text-five text-2xl pb-10  ">
          Lorem ipsum in gravida pulvinar nostra elementum inceptos curae inceptos accumsan condimentum leo:
          </p>
          {presentationData.map(({id,description})=>(
            
              <li key={id} className="text-xl">
                {description}
              </li>

            )
          )}

      </div>

  </div>
  </div>
    );
  };
  
  export default Presentation;