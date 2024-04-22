// src/App.js
import React from "react";
import HeaderService from "./HeaderService/HeaderService";
import PlanService from "./PlanService/PlanService";
import Table from "./CostService/Table/Table";



const Services = () => {
    return (
      <div>

        <HeaderService/>
        <PlanService/>
        <Table/>

      </div>
    );
  };
  
  export default Services;