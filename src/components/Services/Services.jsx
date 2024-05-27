// src/App.js
import React from "react";
import HeaderService from "./HeaderService/HeaderService";
import PlanService from "./PlanService/PlanService";
import CostService from "./CostService/CostService";
import ComparisonService from "./ComparisonService/ComparisonService";



const Services = () => {
    return (
      <div>

        <HeaderService/>
        <PlanService/>
        <CostService/>
        <ComparisonService/>

      </div>
    );
  };
  
  export default Services;