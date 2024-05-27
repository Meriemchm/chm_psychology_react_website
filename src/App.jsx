import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import NavBar from "./components/NavBar/NavBar";
import GetHelp from "./components/GetHelp/GetHelp";
import Footer from "./components/Footer/Footer";
import { useLocation } from 'react-router-dom';

const NavBarShow = () => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(true);

  useEffect(() => {
    setShowNavBar(!location.pathname.includes('getHelp'));
  }, [location]);

  if (!showNavBar) {
    return null; 
  }

  return (
    <NavBar /> 
  );
};
const App = () =>{
  return (
    <Router>
      <NavBarShow /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/getHelp" element={<GetHelp />} />         
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
