import React, { useContext, useState } from "react";
import LogInForm from "./LogInForm/LogInForm";
import NavBarHelp from "../Utilities/NavBarHelp/NavBarHelp";

function LogIn() {
  return (
    <div className="h-screen p-10">
      <NavBarHelp title='Get Help'/>
      <LogInForm />
    </div>
  );
}

export default LogIn;
