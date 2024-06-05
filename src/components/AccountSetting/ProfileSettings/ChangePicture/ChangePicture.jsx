import React, { useState, useRef } from "react";
import PFP from "../../../../assets/PFP.svg";
const ChangePicture = () => {
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const removeProfilePic = () => {
    setProfilePic(null);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex gap-10 justify-start items-center">
      {profilePic ? (
        <img
          src={profilePic}
          alt="userPic"
          className="h-32 w-32 rounded-full"
        />
      ) : (
        <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
          <img src={PFP} alt="userpic" />
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-2">
        <button
          className="bg-white border-2 border-primary xl:text-base text-primary px-5 xl:px-12 py-2 rounded-3xl cursor-pointer"
          onClick={handleButtonClick}
        >
          Change Picture
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        {profilePic && (
          <button
            className="xl:text-base text-primaryvariant rounded-3xl  underline cursor-pointer"
            onClick={removeProfilePic}
          >
            Remove picture
          </button>
        )}
      </div>
    </div>
  );
};

export default ChangePicture;
