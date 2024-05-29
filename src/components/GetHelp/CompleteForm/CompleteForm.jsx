import React from "react";
import CostService from "../../CostService/CostService";
import { ComparisonData } from "../../Data/Data";
import { CostData } from "../../Data/Data";
import About from "../../About/About";

const CompleteForm = ({}) => {
  return (
    <div className="flex flex-col  items-center">
      <About />
      <p className="w-[50rem] text-center pt-5 justify-center">
        A therapist will be available for your specific needs shortly, meanwhile
        you may proceed to payment. Here are the payment plans available:
      </p>

      <CostService dataItem={ComparisonData} title="Comparison" />
      <CostService dataItem={CostData} title="Cost" />

      <div className="h-screen flex justify-center items-center">
        <p>(Edahabia Predefined Payment Screen)</p>
      </div>
    </div>
  );
};

export default CompleteForm;
