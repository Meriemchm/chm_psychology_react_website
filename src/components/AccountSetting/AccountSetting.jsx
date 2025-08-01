import React from "react";
import AccountSideBar from "./AccountSideBar/AccountSideBar";

const AccountSetting = () => {
  return (
    <div className="md:p-5 min-h-screen mb-52">
      <h1 className="text-2xl font-bold px-5 py-5">Profile Settings</h1>
      <div className="flex flex-col md:flex-row">
        {/* AccountSideBar contain every form  */}
        <AccountSideBar />
      </div>
    </div>
  );
};

export default AccountSetting;
