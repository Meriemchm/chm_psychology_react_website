import React from "react";
import PFP from "../../../../assets/PFP.svg";

function ProfileDr({ profile }) {
  if (!profile) {
    return <div className="flex justify-center items-center  h-full">Select a doctor to see the details</div>;
  }
  return (
    <div className="flex flex-col">
      <div className="bg-third/40 h-60 relative">
        <div className="flex absolute -bottom-16 left-8">
          <img src={PFP} alt={profile.username} className=" h-40" />
          <h2 className="font-bold mt-20 text-2xl self-center px-6">
            {profile.username}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ProfileDr;
