// src/App.js
import React from "react";
import { PlansData } from "../../../Data/Data";
import Illustration_service_two from "../../../../assets/Illustration_service_two.svg"
const Plans= () => {
    return (
   
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 text-center justify-center items-center">
          
          <div className="flex justify-center items-center h-full">
            <img
              src={Illustration_service_two}
              alt="MyProfile"
              className="object-cover w-96"
            />
          </div>

          {PlansData.map(({ id, title, description}) => (
            <div
              key={id}
              className={` flex flex-col xl:flex-row  `}
            >
              
              <div className=" w-64 md:w-0 xl:h-64 border-t-2 md:border-t-0 md:border-l-2 py-2 ">
              </div> 
                <div className={` flex flex-col items-center justify-center px-10 `}>
                  <p className={`py-3 xl:text-xl  font-bold text-md text-start `}> {title}</p>
                  <p className="my-8 md:my-14 xl:text-xl  ">{description}</p>
                  <div className="pb-2">
                    <button className=" bg-primary border-1 border-primary xl:text-xl text-four px-10 xl:px-16 py-3 rounded-2xl font-bold duration-200 hover:scale-105">
                            <a href="/" target="_blank" rel="noopener noreferrer">
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