// Sidebar.js
import React, { useContext, useState } from "react";
import { NavDashData } from "../../Data/Data";
import { NavLink } from "react-router-dom";
import userPic from "../../../assets/userPic.svg";
import { AuthContext } from "../../../context/AuthContext";
import { SideBarData } from "../../Data/Data";
import bars from "../../../assets/bars.svg";
import times from "../../../assets/times.svg";

const NavBarDash = () => {
  const [show, setShow] = useState(false);
  const { userData } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-between pt-5 md:pt-0">
        <div
          onClick={() => setShow(!show)}
          className="cursor-pointer  z-50 text-gray-500 xl:hidden  px-5  pt-5  "
        >
          {show ? <img src={times} size={30} /> : <img src={bars} size={30} />}
        </div>
        {show && (
          <ul className="flex flex-col justify-center items-start p-5 absolute top-0 z-10 left-0  w-1/2 h-screen bg-secondvariant text-black">
            {SideBarData.map(({ id, link, src }) => {
              return (
                <li
                  key={id}
                  className="px-4 py-4 cursor-pointer hover:scale-105 duration-200 capitalize"
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
        )}
        <div className="flex flex-row md:hidden justify-center items-center  border-2 border-black-200 xl:text-xl p-1  rounded-[20rem]  ">
          {userData[0] && userData[0].profilePicture && (
            <img
              src={userData[0].profilePicture}
              className="h-16 w-16"
              alt=""
            />
          )}

          <p className="px-5">
            Hey there,{" "}
            {userData[0] && (
              <span className="text-six">{userData[0].username}</span>
            )}{" "}
            !
          </p>
        </div>
      </div>
      <div className="py-5 w-full md:pr-4 ">
        <ul className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center">
            <p>
              <NavLink
                className="px-8 hover:scale-105 text-lg duration-200 capitalize text-second underline"
                to="/dashboard"
              >
                upgrade
              </NavLink>
            </p>
            <div className=" border-2 border-black-200 text-sm md:text-base xl:text-xl p-5  rounded-[20rem] ">
              <span className="text-primary"> Credits: </span> 10,250 DA
            </div>
            {NavDashData.map(({ id, link, style, src }) => {
              return (
                <li
                  key={id}
                  className={`text-base px-8 cursor-pointer md:text-lg text-five hover:scale-105 duration-200 capitalize ${style}`}
                >
                  <NavLink to={src}>{link}</NavLink>
                </li>
              );
            })}
          </div>

          <div className="hidden xl:flex flex-row justify-center items-center  border-2 border-black-200 xl:text-xl p-1  rounded-[20rem]  ">
            {userData[0] && userData[0].profilePicture && (
              <img
                src={userData[0].profilePicture}
                className="h-16 w-16"
                alt=""
              />
            )}

            <p className="px-5">
              Hey there,{" "}
              {userData[0] && (
                <span className="text-six">{userData[0].username}</span>
              )}{" "}
              !
            </p>
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavBarDash;
