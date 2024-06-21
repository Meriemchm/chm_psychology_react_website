// src/App.js
import React from "react";
import ProgressForm from "./ProgressForm/ProgressForm";
import NavBarHelp from "../Utilities/NavBarHelp/NavBarHelp";

const GetHelp = () => {
  return (
    <div className="h-screen w-full md:p-10 p-5 mb-14 mb:mb-52 mt-5 mb:mt-0 xl:mt-0">
      <NavBarHelp title='Log In' srclien='/logIn' />
      <ProgressForm />
    </div>
  );
};

export default GetHelp;
