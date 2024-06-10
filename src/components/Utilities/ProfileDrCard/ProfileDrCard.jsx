import React from "react";
import { Link, useLocation } from "react-router-dom";
import userpic from "../../../assets/userPic.svg";
import chevrondown from "../../../assets/chevrondown.svg";

const ProfileDrCard = ({ data, onCardClick }) => {
  const location = useLocation();
  const isExplorePage = location.pathname === "/dashboard/explore";

  return (
    <div className="h-full flex flex-col w-full rounded-lg shadow-md md:px-3 justify-start overflow-x-scroll md:overflow-hidden ">
      <div className="flex justify-between py-4">
        <h2 className="font-bold text-xl ">Doctors</h2>
        {!isExplorePage && (
          <Link to="explore">
            <p className="text-sm text-primary cursor-pointer hover:text-second">
              View More
            </p>
          </Link>
        )}
      </div>
      <div className="flex w-full xl:flex-col md:gap-0 gap-8">
        {data.map(({ id, username, src }) => (
          <div
            key={id}
            className={`cursor-pointer py-3 flex justify-between md:px-0  px-2 ${
              id !== 1 ? "md:border-t border-l md:border-l-0" : ""
            }`}
            onClick={() => onCardClick({ id, username, src })}
          >
            <div className="flex flex-row gap-3">
              <img src={userpic} alt="drpic" />
              <h3 className="font-bold md:text-base text-sm self-center">
                {username}
              </h3>
            </div>
            <img src={chevrondown} alt="" className="hidden md:flex -rotate-90" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDrCard;
