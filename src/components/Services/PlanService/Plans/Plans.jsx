// src/App.js
import React from "react";
import { PlansData } from "../../../Data/Data";
import Illustration_service_two from "../../../../assets/Illustration_service_two.svg";
const Plans = () => {
  return (
    <div className="grid grid-cols-1  xl:grid-cols-3 text-center justify-center items-center">
      <div className="flex justify-center items-center h-full">
        <img
          src={Illustration_service_two}
          alt="MyProfile"
          className="object-cover w-96"
        />
      </div>

      {PlansData.map(({ id, title, description }) => (
        <div key={id} className={` flex flex-col xl:flex-row  `}>
          <div className=" w-full xl:w-0 xl:h-64 border-t-2 xl:border-t-0 xl:border-l-2 py-2 "></div>
          <div className={` flex flex-col items-center justify-center px-10 md:mx-auto `}>
            <p className={`py-3 md:text-xl  font-bold text-lg text-start `}>
              {" "}
              {title}
            </p>
            <p className="my-5 md:my-14 w-80 md:text-xl text-sm  ">{description}</p>
            <div className="pb-4">
              <button className=" bg-primary border-1 border-primary md:text-xl text-four px-5 md:px-16 py-3 rounded-2xl font-bold duration-200 hover:scale-105">
                <a href="/" className="" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
