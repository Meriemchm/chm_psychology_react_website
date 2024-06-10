import React from "react";
import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import ContentDash from "./ContentDash/ContentDash";
const Dashboard = () => {
  return (
    <div className="2xl:px-20 py-20 md:px-10  ">
      <HeaderDashboard />
      <ContentDash />
    </div>
  );
};

export default Dashboard;
