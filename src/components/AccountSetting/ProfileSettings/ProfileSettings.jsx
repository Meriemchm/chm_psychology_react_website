import React from "react";
import FormSettings from "./FormSettings/FormSettings";
import ChangePicture from "./ChangePicture/ChangePicture";

const ProfileSettings = ({setFormData}) => {

  return (
    <div>
      <h1 className="font-bold text-2xl pb-2">Profile Picture</h1>
      <ChangePicture />
      <div>
        <h2 className="font-bold text-2xl pt-10">Personal Information</h2>
        <FormSettings setFormData={setFormData} />
      </div>
    </div>
  );
};

export default ProfileSettings;
