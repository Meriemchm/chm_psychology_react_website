import React, { useState } from "react";
import { menuAccountItem } from "../../Data/Data";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import Notifications from "../Notifications/Notifications";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import SecurityForm from "../Security/SecurityForm/SecurityForm";

const activeButton = "bg-four";
const activeColor = "bg-four/50";
const activetext = "text-primary/80";
const activeshadow = "shadow-four/30";

const AccountSideBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  console.log(menuAccountItem[activeTab].id);

  return (
    <>
      <div className="md:w-1/3 md:h-96">
        <div className="flex flex-row md:flex-col gap-5 p-2 select-none">
          {menuAccountItem.map(({ title, description, icon, id }, index) => {
            return (
              <div key={id} onClick={() => handleClick(index)}>
                <li
                  className={`flex md:py-5 px-3 py-3 w-full md:px-5 justify-start items-center md:gap-5 gap-2 bg-gray-100/50 shadow-2xl lg:w-5/6 rounded-lg cursor-pointer hover:shadow-secondvariant/30
                  ${activeTab === index ? activeshadow : ""}
                  `}
                >
                  <div className={`flex rounded-lg w-10 h-10`}>
                    <div
                      className={`m-auto rounded-md w-10 h-10 flex justify-center items-center`}
                    >
                      {icon}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-bold capitalize">{title}</h2>
                    <p className="text-sm capitalize text-six">{description}</p>
                  </div>
                </li>
              </div>
            );
          })}
        </div>
      </div>
      <>
        {menuAccountItem[activeTab].title === "Profile Settings" && (
          <ProfileSettings />
        )}
        {menuAccountItem[activeTab].title === "Notifications" && (
          <Notifications />
        )}
        {menuAccountItem[activeTab].title === "Payment Method" && (
          <PaymentMethod />
        )}
        {menuAccountItem[activeTab].title === "Security" && (
          <SecurityForm />
        )}
      </>
    </>
  );
};

export default AccountSideBar;
