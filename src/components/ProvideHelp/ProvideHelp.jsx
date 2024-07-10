import React from "react";
import ProvideForm from "./ProvideForm/ProvideForm";
import NavBarHelp from "../Utilities/NavBarHelp/NavBarHelp";

const ProvideHelp = () => {
  // sign for doctors side
  return (
    <div className="min-h-screen md:p-10 p-4 mt-5 mb:mt-0 xl:mt-0 ">
      <NavBarHelp title='Log In' srclien='/logIn' />
      <ProvideForm />
    </div>
  );
};

export default ProvideHelp;
