import React from "react";
import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import ContentDash from "./ContentDash/ContentDash";
const Dashboard = () => {
  return (
    <div className="2xl:p-20 p-10 ">
      <HeaderDashboard />
      <ContentDash />
    </div>
  );
};

export default Dashboard;
