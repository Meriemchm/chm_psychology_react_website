// src/App.js
import React from "react";
import NavBar from "../NavBar/NavBar";
import AboutUs from "./AboutUs/AboutUs";
import HeaderHome from "./HeaderHome/HeaderHome";
import Presentation from "./Presentation/Presentation";
import Questions from "./Questions/Questions";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
      <div>
        <NavBar />
        <HeaderHome/>
        <AboutUs/>
        <Presentation/>
        <Questions/>
        <Footer/>
      </div>
    );
  };
  
  export default Home;