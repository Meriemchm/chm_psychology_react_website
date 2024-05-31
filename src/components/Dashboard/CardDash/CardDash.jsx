// src/App.js
import React from "react";
import { DashData } from "../../Data/Data";
import { NavLink } from "react-router-dom";
const CardDash = () => {
  return (
    <div className="h-full flex flex-col ">
      {DashData.map(({ id, img, icon, description, title, src }, index) => {
        return (
          <NavLink to={src}>
            <div
              key={id}
              className={`cursor-pointer p-5 rounded-lg shadow-md flex flex-col justify-center items-center ${
                index === DashData.length - 1 ? "mt-auto" : "mb-10"
              }  `}
            >
              <div className="flex flex-row gap-2">
                {icon}
                <h2 className="font-bold text-lg">{title}</h2>
              </div>
              <p className="py-10 text-six md:text-lg">{description}</p>
              {img}
            </div>{" "}
          </NavLink>
        );
      })}
    </div>
  );
};

export default CardDash;
