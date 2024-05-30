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

  const filteredAppointments = appointments.filter((appointment) =>
    Object.values(appointment).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

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
      <HistoryTable data={filteredAppointments} />
    </div>
  );
};

export default HistoryDashboard;
