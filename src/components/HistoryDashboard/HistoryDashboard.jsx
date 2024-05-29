import React from "react";
import HistoryTable from "./HistoryTable/HistoryTable";

const HistoryDashboard = () => {
  return (
    <div className="flex flex-col px-10 gap-10 py-5 h-screen ">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">My History</h2>
        <div>
          <p>Search for anything...</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Sort</p>
        <p>Show</p>
      </div>
      <HistoryTable />
    </div>
  );
};

export default HistoryDashboard;
