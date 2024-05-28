// Sidebar.js
import React from 'react';
import { NavDashData } from '../Data/Data';
import { NavLink } from "react-router-dom";
import userPic from "../../assets/userPic.svg"

const NavBarDash = () => {
  return (
    <div className="py-5 w-full">


    <ul className="w-full flex items-center justify-around">


    <div className='flex items-center'>
    <p>
        <NavLink
        className='px-8 hover:scale-105 text-lg duration-200 capitalize text-second underline'
                    to='/'
                    activeClassName="  " 
                  >
                    upgrade
        </NavLink>
        </p>
        <div className=" border-2 border-black-200 xl:text-xl p-5  rounded-[20rem] ">
          <span className='text-primary'> Credits: </span> 10,250 DA

      </div>
      </div>
        {NavDashData.map(({ id, link,style ,src}) => {
          return (
            <li
              key={id}
              className={` px-8 cursor-pointer text-lg text-five hover:scale-105 duration-200 capitalize ${style}`}
            >

              <NavLink
                to={src}
                activeClassName="text-blue-500" 
              >
                {link}
              </NavLink>
         
            </li>
          );
        })}

      <div className="flex flex-row justify-center items-center  border-2 border-black-200 xl:text-xl p-1  rounded-[20rem]  ">
          <img src={userPic} alt="" />
          <p className='px-5'>Hey there, user!</p>

      </div>
      </ul>
      
      </div>


  );
};

export default NavBarDash;
