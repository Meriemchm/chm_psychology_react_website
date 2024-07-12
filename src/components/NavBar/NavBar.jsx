import React, { useState, useEffect } from "react";
import { NavlinkData } from "../Data/Data";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import bars from "../../assets/bars.svg";
import times from "../../assets/times.svg";

import rameemLogo from "../../assets/rameem-logo.svg";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;

    if (scrollY > threshold) {
      setBgColor("bg-fourvariant ");
    } else {
      setBgColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        onScroll={handleScroll}
        className={`flex justify-between items-center w-full h-20 text-white px-4 lg:px-20 ${bgColor} fixed z-10`}
      >
        <div>
          <img src={rameemLogo} alt="Rameem" style={{ width: "5rem" }} />
        </div>

        <ul className="hidden lg:flex ">
          {NavlinkData.map(({ id, link, style, src }) => {
            return (
              
                <li
                  key={id}
                  className={` px-8 cursor-pointer text-lg text-five hover:scale-105 duration-200 capitalize ${style}`}
                >
                  <NavLink
                    to={src}
                    className={({ isActive }) =>
                      isActive ? "text-six " : "text-second"
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
          className="cursor-pointer  z-50 text-gray-500 lg:hidden "
        >
          {show ? <img src={times} size={30} /> : <img src={bars} size={30} />}
        </div>
        {show && (
          <div className="flex fixed flex-col justify-start items-start p-5  top-0 z-10 right-0  w-1/2 h-screen bg-secondvariant ">
            <ul className="py-36 ">
              {NavlinkData.map(({ id, link, src, style }) => {
                return (
               
                    <li
                      key={id}
                      className={`px-4 py-4 text-second cursor-pointer hover:scale-105 duration-200 capitalize ${style} `}
                    >
                      <NavLink
                        to={src}
                        className="text-xl"
                        onClick={() => setShow(!show)}
                      >
                        {link}
                      </NavLink>
                    </li>
                 
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div>{<Outlet />}</div>
    </>
  );
};

export default NavBar;
