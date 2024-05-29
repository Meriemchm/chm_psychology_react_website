import React from "react";
import SecurityForm from "./SecurityForm/SecurityForm";

function Security() {
  return (
    <div>
      <h1 className="font-bold text-2xl pb-2">Security Settings</h1>
      <div className="flex justify-between items-center">
        <h2 className=" font-medium text-xl py-5">Two Factor Authentification</h2>
        <button className=" xl:text-base font-bold text-second rounded-3xl  underline">
        Enable
        </button>
      </div>
      <p className="max-w-md text-six pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi vitae elit fermentum congue non mattis enim.</p>
      <SecurityForm />
    </div>
  );
}

export default Security;
