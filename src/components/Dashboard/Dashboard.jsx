import React from "react";
import HeaderDashboard from "./HeaderDashboard/HeaderDashboard";
import ContentDash from "./ContentDash/ContentDash";
const Dashboard = () => {
  return (
    <div className="p-20">
      <HeaderDashboard />
      <ContentDash />
    </div>
  );
};

export default Dashboard;
