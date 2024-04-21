// src/App.js
import React from "react";
import NavBar from "../NavBar/NavBar";
import AboutUs from "./AboutUs/AboutUs";
import HeaderHome from "./HeaderHome/HeaderHome";
import Presentation from "./Presentation/Presentation";
import Questions from "./Questions/Questions";



const Home = () => {
    return (
      <div>

        <HeaderHome/>
        <AboutUs/>
        <Presentation/>
        <Questions/>

      </div>
    );
  };
  
  export default Home;