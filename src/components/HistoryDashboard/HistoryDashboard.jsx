import React, { useState } from "react";
import HistoryTable from "./HistoryTable/HistoryTable";
import SearchInput from "../Utilities/SearchInput/SearchInput";
import IconSort from "../../assets/IconSort.svg";
import IconEye from "../../assets/IconEye.svg";
const HistoryDashboard = () => {
  const appointments = [
    {
      doctor: "Dr. Nabil",
      location: "Online",
      date: "August 15th, 2024",
      cost: "2200 DA",
      status: "Missed",
    },
    {
      doctor: "Dr. Nabil",
      location: "Online",
      date: "August 8th, 2024",
      cost: "2200 DA",
      status: "Complete",
    },
    {
      doctor: "Dr. Nabil",
      location: "Online",
      date: "August 1st, 2024",
      cost: "2200 DA",
      status: "Complete",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const handleSortClick = () => {
    if (sortType === "missed") {
      setSortType("complete");
    } else {
      setSortType("missed");
    }
  };
  const filteredAppointments = appointments
    .filter((appointment) =>
      Object.values(appointment).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortType === "missed") {
        return a.status === "Missed" ? -1 : 1;
      } else if (sortType === "complete") {
        return a.status === "Complete" ? -1 : 1;
      }
      return 0;
    });

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="flex flex-col px-10 gap-10 py-5 h-screen ">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">My History</h2>
        <div>
          <SearchInput onSearch={handleSearch} />
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className="flex justify-center items-center cursor-pointer shadow-md rounded-3xl"
          onClick={handleSortClick}
        >
          <div className="p-3">
            <img src={IconSort} alt="iconSearch" />
          </div>
          <p className="pr-5 font-medium ">
            Sort <span className={`px-5 border-l-2  ${sortType === "missed" ? "text-red-500" : "text-green-500" } `}> {sortType === "missed" ? "Missed" : "Complete"}</span>
          </p>
        </div>

        {/* <div className="flex justify-center items-center">
          <div className="p-3">
            <img src={IconEye} alt="iconSearch" />
          </div>
          <p>Show</p>
        </div> */}
      </div>
      <HistoryTable data={filteredAppointments} />
    </div>
  );
};

export default HistoryDashboard;
