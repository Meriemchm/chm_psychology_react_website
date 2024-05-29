// src/App.js
import React from "react";
import Table from "../Table/Table";

const CostService = ({ dataItem, title }) => {
  return (
    <div className=" mx-auto  flex flex-col  w-full h-full px-8 md:px-20 pb-10 ">
      <p className=" py-5 font-bold text-xl">{title}</p>

      <div className="py-8 w-full shadow-gray rounded-[2rem] shadow-lg ">
        <div className="flex xl:flex-row flex-cols items-center justify-center ">
          <Table dataItem={dataItem} />
        </div>
      </div>
    </div>
  );
};

export default CostService;
