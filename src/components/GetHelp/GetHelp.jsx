// src/App.js
import React from "react";
import ProgressForm from "./ProgressForm/ProgressForm";
import NavBarHelp from "../Utilities/NavBarHelp/NavBarHelp";

const GetHelp = () => {
  return (
    <div className="h-screen w-full p-10 mb-52">
      <NavBarHelp title='Log In' />
      <ProgressForm />
    </div>
  );
};

export default GetHelp;
