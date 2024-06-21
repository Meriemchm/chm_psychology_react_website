// src/App.js
import React from "react";
import Illustration_service_header from "../../../assets/Illustration_service_header.svg";

const HeaderService = () => {
  return (
    <div className="flex xl:flex-row flex-col h-full pt-20 xl:pt-36 justify-center items-center">
      <div className="xl:py-0 py-10 order-2 xl:order-1">
        <div className=" bg-primaryvariant p-2  rounded-tl-[4rem] rounded-br-[4rem]  ">
          <p className=" text-four xl:pt-10 pb-8 lg:pr-10 md:w-full text-md md:text-2xl ">
            We offer our services to help you with treatment and
            self-improvement, providing personalized support and expert guidance
            for your mental health and well-being.
          </p>
        </div>
      </div>
      <div className=" md:px-0 px-20 xl:p-20 xl:pt-0 p-5 order-1 xl:order-2 ">
        <img
          src={Illustration_service_header}
          alt="MyProfile"
          className=" rounded-lg object-cover "
        />
      </div>
    </div>
  );
};

export default HeaderService;
