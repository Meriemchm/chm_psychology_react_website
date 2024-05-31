import React from "react";
import iconBack from "../../../assets/iconBack.svg";
import { NavLink } from "react-router-dom";
const NavBarHelp = () => {
  return (
    <div className="flex flex-row justify-between pb-10">
      <NavLink to="/">
        <img src={iconBack} alt="iconBack" />
      </NavLink>

      <h1 className="knewave-regular font-extrabold text-3xl ml-2 md:text-4xl text-second">
        Rameem
      </h1>

      <NavLink
        className="text-primary md:px-8 cursor-pointer text-lg  hover:scale-105 duration-200 capitalize"
        to="/"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default NavBarHelp;
