import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import NavBar from "./components/NavBar/NavBar";
import GetHelp from "./components/GetHelp/GetHelp";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import AccountSetting from "./components/AccountSetting/AccountSetting";
import HistoryDashboard from "./components/HistoryDashboard/HistoryDashboard";

const App = () =>{
  return (
    <Router>
      <Routes>

        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} /> 
          <Route path="/services" element={<Services />} /> 
        </Route> 

        <Route path="/getHelp" element={<GetHelp />} /> 

        <Route path="/logIn" element={<SideBar />} >
            <Route index element={<Dashboard/>} />
            <Route path="/logIn/history" element={<HistoryDashboard/>} /> 
            <Route path="/logIn/accountSettings" element={<AccountSetting/>} />   
        </Route>  
          
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
