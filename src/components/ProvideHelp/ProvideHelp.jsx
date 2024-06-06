import React from "react";
import ProvideForm from "./ProvideForm/ProvideForm";
import NavBarHelp from "../Utilities/NavBarHelp/NavBarHelp";

const ProvideHelp = () => {
  return (
    <div className="h-screen p-10 ">
      <NavBarHelp title='Log In' />
      <ProvideForm />
    </div>
  );
};

export default ProvideHelp;
