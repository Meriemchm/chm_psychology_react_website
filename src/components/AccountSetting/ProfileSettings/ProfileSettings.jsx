import React from "react";
import PFP from "../../../assets/PFP.svg";
import FormSettings from "./FormSettings/FormSettings";


const ProfileSettings = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl pb-2">Profile Picture</h1>
      <div className="flex gap-10 justify-start items-center ">
        <img src={PFP} alt="userPic" />

        <div className="flex flex-col justify-center items-center gap-2">
          <button className=" bg-white border-2 border-primary xl:text-base text-primary px-5 xl:px-12  py-2 rounded-3xl ">
            Change Picture
          </button>
          <button className=" xl:text-base text-primaryvariant rounded-3xl  underline">
            Remove picture
          </button>
        </div>
      </div>
      <div>
        {" "}
        <h2 className="font-bold text-2xl pt-10">Personal Information</h2>
        <FormSettings />
      </div>

      
    </div>
  );
};

export default ProfileSettings;
