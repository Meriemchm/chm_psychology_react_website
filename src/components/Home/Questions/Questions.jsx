// src/App.js
import React from "react";
import Accordion from "./Accordion/Accordion";
import { AccordionData } from "../../Data/Data";
import { Link } from "react-router-dom";
const Questions = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center  ">
      <h2 className=" text-xl md:text-2xl font-bold py-8">
        Frequently asked questions
      </h2>

      <div className="mx-auto sm:p-20 p-8">
        <div className="flex flex-col xl:flex-row justify-center gap-6 xl:gap-0 ">
          <div className="flex flex-col xl:w-3/4">
            {AccordionData.map(({ id, question, answer }) => (
              <Accordion key={id} title={question} answer={answer} />
            ))}
          </div>

          <div className=" flex flex-col justify-start items-center xl:w-2/4">
            <p className="md:px-44 px-8  self-center text-center">
              For professional contact or if you have another question, contact
              us at: xyz@domain.com
            </p>
            <p className="py-5">or</p>
            <button className="bg-primary border-1 border-primary xl:text-xl text-four px-10 xl:px-16 py-3 rounded-2xl font-bold duration-200 hover:scale-105">
              <Link to="/getHelp">Get Help Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
