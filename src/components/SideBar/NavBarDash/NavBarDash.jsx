// Sidebar.js
import React, { useContext, useState } from "react";
import { NavDashData } from "../../Data/Data";
import { NavLink, useNavigate } from "react-router-dom";
import userPic from "../../../assets/userPic.svg";
import { AuthContext } from "../../../context/AuthContext";
import { SideBarData } from "../../Data/Data";
import bars from "../../../assets/bars.svg";
import times from "../../../assets/times.svg";

const NavBarDash = () => {
  const [show, setShow] = useState(false);
  const { dispatch, userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const handleItemClick = (id, link) => {
    if (link === "Logout") {
      handleLogout();
    }
  };

  return (
    <>
      <div className="flex justify-between pt-5 xl:pt-0">
        <div
          onClick={() => setShow(!show)}
          className="cursor-pointer  z-50 text-gray-500 xl:hidden   px-5  pt-5  "
        >
          {show ? <img src={times} size={30} /> : <img src={bars} size={30} />}
        </div>
        {show && (
          <div className="flex fixed flex-col justify-start items-start p-5  top-0 z-10 left-0  w-1/2 h-screen bg-secondvariant ">
          <ul className="py-36 ">
            {SideBarData.map(({ id, link, src,style }) => {
              return (
                <li
                  key={id}
                  className={`px-4 py-4 text-second cursor-pointer hover:scale-105 duration-200 capitalize ${style} `}
                  onClick={() => {
                    handleItemClick(id, link);
                  }}
                >
                  <NavLink
                    to={src}
                    className="md:text-xl text-base"
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
        <div className="flex flex-row xl:hidden pr-3 justify-center items-center  md:border-2 border-black-200 xl:text-xl p-1  rounded-[20rem]  ">
          {userData[0] && userData[0].profilePicture && (
            <img
              src={userData[0].profilePicture}
              className="md:h-16 md:w-16 h-14 w-14 order-2 md:order-1"
              alt=""
            />
          )}

          <p className="px-5 text-sm md:text-base order-1 md:order-2">
            Hey there,{" "}
            {userData[0] && (
              <span className="text-six">{userData[0].username}</span>
            )}{" "}
            !
          </p>
        </div>
      </div>
      <div className="py-5 w-full md:pr-4 ">
        <ul className="flex flex-col md:flex-row items-start md:items-center justify-between ">
          <div className="flex items-center">
            {/* <p>
              <NavLink
                className="px-8 hover:scale-105 md:text-lg text-sm duration-200 capitalize text-second underline"
                to="/dashboard"
              >
                upgrade
              </NavLink>
            </p>
            <div className=" border-2 border-black-200 text-sm md:text-base xl:text-xl md:p-5 p-2 rounded-[20rem] ">
              <span className="text-primary  md:text-lg text-sm "> Credits: </span> 10,250 DA
            </div> */}
            {NavDashData.map(({ id, link, style, src }) => {
              return (
                <li
                  key={id}
                  className={` px-8 cursor-pointer md:text-lg text-lg text-five hover:scale-105 duration-200 capitalize ${style}`}
                >
                   <NavLink to={src}>{(userData[0] && userData[0].status === 'client') ? link : 'Book a session' }</NavLink>
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
