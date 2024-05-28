import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import NavBar from "./components/NavBar/NavBar";
import GetHelp from "./components/GetHelp/GetHelp";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import NavBarDash from "./components/NavBarDash/NavBarDash";
import AccountSetting from "./components/AccountSetting/AccountSetting";
import HistoryDashboard from "./components/HistoryDashboard/HistoryDashboard";
import { useLocation } from 'react-router-dom';

const NavBarShow = () => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setShowNavBar(!location.pathname.includes('getHelp') && !location.pathname.includes('logIn'));
    setShowSidebar(location.pathname.includes('logIn'));
  }, [location]);

  if (showSidebar) {
    return (
      <>
        <div>
        <SideBar />
        <NavBarDash />
        </div>
        
      </>
    );
  }

  if (!showNavBar) {
    return null;
  }

  return <NavBar />;
};
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
