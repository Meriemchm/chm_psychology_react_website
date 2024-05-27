// src/App.js
import React from "react";
import Table from "../../Table/Table";
import { ComparisonData } from "../../Data/Data"; 


const ComparisonService = () => {
    return (
      <div className=" mx-auto  flex flex-col  w-full h-full  px-20 pb-10 ">
        
      <p className=" py-5 font-bold text-xl">
            Comparison
        </p>

      <div className="py-8 w-full shadow-gray rounded-[2rem] shadow-lg ">
        <div className="flex xl:flex-row flex-cols  items-center justify-center ">
      <Table dataItem={ComparisonData}/>
        </div> 
      </div>

</div>

    );
  };
  
  export default ComparisonService;