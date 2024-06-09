import { useState } from "react";
import { SideBarData } from "../Data/Data";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBarDash from "./NavBarDash/NavBarDash";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import bars from "../../assets/bars.svg";
import times from "../../assets/times.svg";
const SideBar = () => {
  const { dispatch, userData } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const handleItemClick = (id, link) => {
    setActiveItem(id);
    if (link === "Logout") {
      handleLogout();
    }
  };

  return (
    <div className="flex h-full w-full overflow-hidden ">
      <div className="xl:w-96 w-72 bg-secondvariant py-10 hidden xl:flex ">
        <h1 className="knewave-regular px-10  font-extrabold text-3xl ml-2 md:text-4xl text-primary fixed">
          Rameem
        </h1>

        <ul className="py-28 fixed ">
          {SideBarData.filter(
            (item) =>
              !(userData[0] && userData[0].status !== "client" && item.id === 2)
          ).map(({ id, link, style, img, src }) => {
            return (
              <NavLink
                key={id}
                to={src}
                className={({ isActive }) =>
                  isActive ? "text-second " : "text-greendash"
                }
                end
              >
                <li
                  className={`flex flex-row gap-3 py-5 px-8 cursor-pointer text-lg capitalize ${
                    currentPath === src.split("/").pop()
                      ? "bg-gradient-to-r from-second/30 to-secondvariant"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveItem(id), handleItemClick(id, link);
                  }}
                >
                  {img}
                  <p className={`self-center ${style} `}>{link}</p>
                </li>
              </NavLink>
            );
          })}
          {/* 
          <div className="p-5 flex flex-col justify-center items-center">
            <button className="bg-primary border-1 border-primary xl:text-lg text-four px-10 xl:px-16 py-3 rounded-2xl font-bold duration-200 hover:scale-105">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Contact a therapist
              </a>
            </button>
            <p className="py-2 text-sm self-center text-primary font-bold">
              Find therapists according to your needs.
            </p>
          </div> */}
        </ul>
      </div>



      {/* the outlets
       */}

      <div className="flex flex-col flex-1">
        <NavBarDash />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
