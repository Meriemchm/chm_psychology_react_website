// src/App.js
import React from "react";
import ProgressForm from './ProgressForm/ProgressForm';
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const GetHelp = () => {
    return (
        <div className="h-full w-full p-10">  
          <div className="flex flex-row justify-between pb-10">          
            <NavLink
              to='/'
            >
              <FaArrowLeftLong className="text-third text-2xl" />
            </NavLink>
            <h1 className="knewave-regular font-extrabold text-3xl ml-2 md:text-4xl text-second">
                Rameem
              </h1>
            <NavLink
            className='text-primary px-8 cursor-pointer text-lg  hover:scale-105 duration-200 capitalize'
            to='/'
            >
              Log In
            </NavLink>
        </div>    
        
          <ProgressForm />
      </div>
    );
  };
  
  export default GetHelp;