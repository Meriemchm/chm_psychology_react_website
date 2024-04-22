// src/App.js
import React from "react";
import Illustration_service_header from "../../../assets/Illustration_service_header.svg"


const HeaderService = () => {
    return (
        <div className="grid xl:grid-cols-2 h-full pt-10 xl:pt-36 justify-center items-center">
        <div className="bg-four flex flex-col  xl:p-2 py-5 order-2 xl:order-1">
        <div className="bg-primaryvariant p-2  rounded-tl-[4rem] rounded-br-[4rem]"> 
                <p className="text-four pt-5 xl:pt-10 pb-8 lg:pr-10 md:w-full text-md md:text-2xl">
                Lorem ipsum in gravida pulvinar nostra elementum inceptos aliquam ipsum, diam tortor netus non nostra etiam leo pretium, ornare.  </p>
                </div>
            </div>
            <div className=" xl:p-20 xl:pt-0 pt-20 p-5 flex justify-center items-center order-1 xl:order-2">
                <img
                    src={Illustration_service_header}
                    alt="MyProfile"
                    className=" rounded-lg object-cover w-3/5"
                />
            </div>
        </div>
    );
  };
  
  export default HeaderService;