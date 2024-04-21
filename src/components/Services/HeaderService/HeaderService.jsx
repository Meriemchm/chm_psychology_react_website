// src/App.js
import React from "react";
import Illustration_service_header from "../../../assets/Illustration_service_header.svg"


const HeaderService = () => {
    return (
        <div className="grid xl:grid-cols-2 h-screen">
        <div className="bg-four flex flex-col justify-center items-start xl:p-2 py-5 order-2 xl:order-1">
        <div className="bg-primaryvariant p-5 rounded-tl-3xl rounded-br-3xl"> 
                <p className="text-five pt-5 xl:pt-10 pb-8 lg:pr-10 md:w-full text-md md:text-2xl">
                    Lorem ipsum mi proin aliquam ut diam ad elit, adipiscing amet sem interdum vehicula imperdiet.
                </p>
                </div>
            </div>
            <div className=" xl:p-20 xl:pt-0 pt-20 p-5 flex justify-center items-center order-1 xl:order-2">
                <img
                    src={Illustration_service_header}
                    alt="MyProfile"
                    className="rounded-lg object-cover"
                />
            </div>
        </div>
    );
  };
  
  export default HeaderService;