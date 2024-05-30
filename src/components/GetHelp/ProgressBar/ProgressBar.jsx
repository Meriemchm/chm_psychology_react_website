import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="relative w-full md:w-1/2 h-2 bg-gray-300 rounded-full">
      <div
        className="h-full bg-primary rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
      <p
        style={{ marginLeft: `${progress}%` }}
        className="-top-6 text-primary font-semibold absolute"
      >
        {progress === 100 ? "Complete!" : `${progress}%`}
      </p>
    </div>
  );
}

export default ProgressBar;
