import React, { useContext, useState } from "react";
import LogInForm from "./LogInForm/LogInForm";
import NavBarHelp from "../Utilities/NavBarHelp/NavBarHelp";

function LogIn() {
  return (
    <div className="h-full md:p-10 mt-10 md:mt-0 xl:mt-0 p-4">
      <NavBarHelp title='Get Help'/>
      <LogInForm />
    </div>
  );
}

export default LogIn;
