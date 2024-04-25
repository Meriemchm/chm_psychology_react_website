import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import NavBar from "./components/NavBar/NavBar";
import GetHelp from "./components/GetHelp/GetHelp"; // Supposons que vous avez un composant Navbar
import Footer from "./components/Footer/Footer";
const App = () =>{
  return (
    <Router>
      <NavBar /> {/* Inclure la navbar ici pour qu'elle soit présente dans tous les composants */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/getHelp" element={<GetHelp />} />         /* Ajouter une route pour la page "services" */
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
