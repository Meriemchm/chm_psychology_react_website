// src/App.js
import React from "react";
import ProgressForm from './ProgressForm/ProgressForm';

const GetHelp = () => {
    return (
        <div className="h-full w-full p-20">
        <h1 className="text-3xl font-bold text-center my-8">Progress Form</h1>
        <ProgressForm />
      </div>
    );
  };
  
  export default GetHelp;