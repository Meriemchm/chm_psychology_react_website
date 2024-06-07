import React, { useContext } from "react";
import IllustrationDash from "../../../assets/IllustrationDash.svg";
import { AuthContext } from "../../../context/AuthContext";
const HeaderDashboard = () => {
  const { userData } = useContext(AuthContext);
  const side = userData[0] && userData[0].status === 'client' ? 'You are doing great! we’re proud of you.':'People are waiting for you !';
  return (
    <div className="w-full ">
      <div className=" relative bg-graydash bg-opacity-40 p-8 flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">Welcome back!</h1>
          <p className="py-2 text-lg">
            {side}
          </p>
        </div>
        <img
          src={IllustrationDash}
          alt="illustrate"
          className="absolute right-10 -top-20"
        />
      </div>
    </div>
  );
};

export default HeaderDashboard;
