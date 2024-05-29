// src/App.js
import React from "react";
import { DashData } from "../../Data/Data";

const CardDash = () => {
    return (
      <div className="h-full flex flex-col justify-around">
        {DashData.map(({ id, img,icon,description,title ,style}) => {
            return (
              <div
                key={id}
                className={`cursor-pointer p-5 rounded-lg shadow-md flex flex-col justify-center items-center mb-10`}
              >
                <div className="flex flex-row gap-2">
                  {icon}
                  <h2 className="font-bold text-lg">{title}</h2>
                </div>
                <p className="py-10 text-six md:text-lg">{description}</p>
                {img}
              </div>
            );
          })}
      </div>
    );
  };
  
  export default CardDash;