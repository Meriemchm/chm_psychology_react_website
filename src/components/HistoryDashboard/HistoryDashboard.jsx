import React from "react";
import HistoryTable from "./HistoryTable/HistoryTable";
import SearchInput from "../SearchInput/SearchInput";
import IconSort from "../../assets/IconSort.svg";
import IconEye from "../../assets/IconEye.svg";
const HistoryDashboard = () => {
  return (
    <div className="flex flex-col px-10 gap-10 py-5 h-screen ">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">My History</h2>
        <div>
          <SearchInput />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <div className="p-3">
            <img src={IconSort} alt="iconSearch" />
          </div>
          <p>Sort</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-3">
            <img src={IconEye} alt="iconSearch" />
          </div>
          <p>Show</p>
        </div>
      </div>
      <HistoryTable />
    </div>
  );
};

export default HistoryDashboard;
