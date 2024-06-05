// Sidebar.js
import React, { useContext } from "react";
import { NavDashData } from "../../Data/Data";
import { NavLink } from "react-router-dom";
import userPic from "../../../assets/userPic.svg";
import { AuthContext } from "../../../context/AuthContext";

const NavBarDash = () => {
  const { userData } = useContext(AuthContext);
  console.log(userData);
  return (
    <div className="py-5 w-full pr-4">
      <ul className="flex items-center justify-between">
        <div className="flex items-center">
          <p>
            <NavLink
              className="px-8 hover:scale-105 text-lg duration-200 capitalize text-second underline"
              to="/"
            >
              upgrade
            </NavLink>
          </p>
          <div className=" border-2 border-black-200 xl:text-xl p-5  rounded-[20rem] ">
            <span className="text-primary"> Credits: </span> 10,250 DA
          </div>
        </div>
        {NavDashData.map(({ id, link, style, src }) => {
          return (
            <li
              key={id}
              className={` px-8 cursor-pointer text-lg text-five hover:scale-105 duration-200 capitalize ${style}`}
            >
              <NavLink to={src}>{link}</NavLink>
            </li>
          );
        })}

        <div className="flex flex-row justify-center items-center  border-2 border-black-200 xl:text-xl p-1  rounded-[20rem]  ">
          {userData[0] && userData[0].profilePicture && (
            <img
              src={userData[0].profilePicture}
              className="h-16 w-16"
              alt=""
            />
          )}

          <p className="px-5">
            Hey there, {userData[0] && <span className="text-six">{userData[0].username}</span>} !
          </p>
        </div>
      </ul>
    </div>
  );
};

export default NavBarDash;
