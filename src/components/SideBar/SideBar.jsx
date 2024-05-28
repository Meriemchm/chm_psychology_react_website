// Sidebar.js
import React from 'react';
import { SideBarData } from '../Data/Data';
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBarDash from '../NavBarDash/NavBarDash';
const SideBar = () => {
  return (
    <div className='flex flex-row h-screen w-full'>
    <div className=" w-96 bg-secondvariant py-10 ">
        <h1 className="knewave-regular px-10 pb-10  font-extrabold text-3xl ml-2 md:text-4xl text-primary">
          Rameem
        </h1>
      
      <ul className="py-10">
        {SideBarData.map(({ id, link,style,img ,src}) => {
          return (
            <li
              key={id}
              className={`flex flex-row gap-3 py-5 px-8 cursor-pointer text-lg  hover:scale-105 duration-200 capitalize ${style}`}
            >
                {img}

              <NavLink
                to={src}
                className='self-center'
                activeClassName="text-second" 
              >
                {link}
              </NavLink>
         
            </li>
          );
        })}
        <div className='p-5 flex flex-col justify-center items-center'>
        <button className="bg-primary border-1 border-primary xl:text-lg text-four px-10 xl:px-16 py-3 rounded-2xl font-bold duration-200 hover:scale-105">
          <a href="/" target="_blank" rel="noopener noreferrer">
          Contact a therapist
          </a>
      </button>
      <p className=' py-2 text-sm self-center text-primary font-bold'>Find therapists according to your needs.</p>
      </div>
      </ul>
    </div>

    <div className='p-4'>

      <NavBarDash/>
      <div>{<Outlet/>}</div>
      
      </div>
      
    </div>
  );
};

export default SideBar;
