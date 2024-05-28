import React from "react";
import PFP from '../../../assets/PFP.svg'

const ProfileSettings = () => {
    return (
        <div className="py-10 rounded-lg shadow-md">
            <h1 className="font-bold">Profile Picture</h1>
            <div>
                <img src={PFP} alt="" />
            </div>

      </div>
    );
  };
  
  export default ProfileSettings;