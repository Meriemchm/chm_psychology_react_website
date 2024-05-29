import React from "react";
import PFP from "../../../assets/PFP.svg";
import FormSettings from "./FormSettings/FormSettings";
import ButtonsSettings from "../ButtonsSettings/ButtonsSettings";

const ProfileSettings = () => {
  return (
    <div className="py-10 rounded-lg shadow-md">
      <h1 className="font-bold">Profile Picture</h1>
      <div>
        <img src={PFP} alt="" />
        <p></p>
        <p></p>
      </div>
      <div>
        {" "}
        <h2></h2>
        <FormSettings/>
      </div>

      <ButtonsSettings/>

    </div>
  );
};

export default ProfileSettings;
