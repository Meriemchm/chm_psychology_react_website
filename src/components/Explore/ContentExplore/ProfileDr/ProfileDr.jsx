import React from "react";
import PFP from "../../../../assets/PFP.svg";
import { useLocation } from "react-router-dom";

function ProfileDr({ profile }) {
  const location = useLocation();
  const selectedProfile = location.state
    ? location.state.selectedProfile
    : null;
  const username = profile?.username || selectedProfile?.username;

  if (!profile && !selectedProfile) {
    return (
      <div className="flex justify-center items-center  h-full">
        Select a doctor to see the details
      </div>
    );
  }

  const testSkills = [
    {
      id: 1,
      title: "lorem lorem",
    },
    {
      id: 2,
      title: "lorem lorem",
    },
    {
      id: 3,
      title: "lorem lorem",
    },
  ];

  return (
    <div className="flex flex-col ">
      <div className="bg-third/40 md:h-60 h-44 relative">
        <div className="flex absolute -bottom-16 md:left-8 left-2">
          <img src={PFP} alt={username} className="md:h-40" />
          <h2 className="font-bold mt-20 md:text-2xl text-xl self-center px-6">
            {username}
          </h2>
        </div>
      </div>
      <div className="py-14 md:px-14 px-5">
        <div>
          <h3 className="font-meduim md:text-3xl text-2xl pt-10 pb-4">Pitch</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            impedit suscipit odit. Ea sed ex deleniti obcaecati aliquid. Vel
            minus et labore adipisci nisi? Mollitia aliquid dolores officia
            ratione est.
          </p>
        </div>

        <div className=" flex flex-col">
          <h3 className="font-meduim md:text-3xl text-2xl  pt-10 pb-4">Skills</h3>
          <div className="flex gap-3 flex-wrap">
            {testSkills.map(({ id, title }) => (
              <div
                key={id}
                className="border-2 rounded-xl bg-gray-100 px-4 py-2"
              >
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDr;
