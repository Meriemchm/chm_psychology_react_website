// src/App.js
import React from "react";
import { AboutSpacialist } from "../../../Data/Data";

const Specialist = () => {
    return (
        <div className=" flex flex-col justify-center items-center py-10">
        <h2 className="text-2xl font-bold  ">Our specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 text-center py-8 justify-center items-center">
          {AboutSpacialist.map(({ id, title, src,description, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-center items-center p-5 ${style} xl:w-96 w-80 h-80 xl:h-96 mx-auto border-2 border-gray rounded-xl`}
            >
              <div className=" flex ">
                <div className=" xl:w-44 w-36 h-36 xl:h-44 flex justify-center items-center">
                  <img className="self-center object-cover" src={src} alt="service" />
                </div>
              </div>
              <p className={`pt-5  font-bold text-md text-center `}>{title}</p>
              <p className={`pt-3 text-sm text-center `}>{description}</p>
            </div>
          ))}
        </div>
      </div>

    );
  };
  
  export default Specialist;