// src/App.js
import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import HeaderHome from "./HeaderHome/HeaderHome";
import Presentation from "./Presentation/Presentation";
import CostService from "../Utilities/CostService/CostService.jsx"
import Questions from "./Questions/Questions";
import { ComparisonData } from "../Data/Data"; 


const Home = () => {
    return (
      <div>

        <HeaderHome/>
        <AboutUs/>
        <Presentation/>
        {/* <CostService dataItem={ComparisonData} title='Comparison' /> */}
        <Questions/>

      </div>
    );
  };
  
  export default Home;