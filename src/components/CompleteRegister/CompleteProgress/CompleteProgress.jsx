import React , { useState } from "react";
import ProgressBar from "../../GetHelp/ProgressBar/ProgressBar";
import CompleteForm from "../CompleteForm/CompleteForm";

const CompleteProgress = () => {
  const [progress, setProgress] = useState(100);
  return (
    <div className="flex flex-col items-center justify-center ">
      <ProgressBar progress={progress} />
      <h1 className="text-3xl font-bold text-center pt-10">
        Welcome to Rameem!
      </h1>
      <CompleteForm />
    </div>
  );
};

export default CompleteProgress;
