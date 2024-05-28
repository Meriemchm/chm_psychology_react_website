// src/App.js
import React from "react";
import HeaderService from "./HeaderService/HeaderService";
import PlanService from "./PlanService/PlanService";
import CostService from "../CostService/CostService";
import { ComparisonData } from "../Data/Data"; 
import { CostData } from "../Data/Data"; 

const Services = () => {
    return (
      <div>

        <HeaderService/>
        <PlanService/>
        <CostService dataItem={CostData} title='Cost'/>
        <CostService dataItem={ComparisonData} title='Comparison'/>

      </div>
    );
  };
  
  export default Services;