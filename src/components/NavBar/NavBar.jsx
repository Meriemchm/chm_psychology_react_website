import React, { useState,useEffect } from "react";
import { NavlinkData } from "../Data/Data";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import bars from '../../assets/bars.svg'
import times from '../../assets/times.svg'

import rameemLogo from "../../assets/rameem-logo.svg"

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100; // seuil de défilement à partir duquel la couleur de fond est modifiée

    if (scrollY > threshold) {
      setBgColor('bg-fourvariant ');

    } else {
      setBgColor('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <div onScroll={handleScroll} className={`flex justify-between items-center w-full h-20 text-white px-4 lg:px-20 ${bgColor} fixed z-10`}    >
      <div>
      <img
        src={rameemLogo}
        alt="Rameem"
        style={{ width: '6rem' }}
      />
      </div>

      <ul className="hidden lg:flex ">
        {NavlinkData.map(({ id, link,style ,src}) => {
          return (
            <li
              key={id}
              className={` px-8 cursor-pointer text-lg text-five hover:scale-105 duration-200 capitalize ${style}`}
            >

              <NavLink
                to={src}
                className={({ isActive }) =>
                  isActive
                    ? "text-six "
                    : "text-second"
                }
              >
                {link}
              </NavLink>
         
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer  z-10 text-gray-500 lg:hidden"
      >
        {show ? <img src={times} size={30} /> : <img src={bars} size={30} />}
      </div>
      {show && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-third text-white/80">
          {NavlinkData.map(({ id, link,src }) => {
            return (
              <li
                key={id}
                className="px-4 py-4 cursor-pointer text-4xl text-five hover:scale-105 duration-200 capitalize"
              >
                <NavLink
                  to={src}
                  className="text-white"
                  onClick={() => setShow(!show)}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
    <div>
      {<Outlet/>}
      </div>
    </>
  );
};

export default NavBar;