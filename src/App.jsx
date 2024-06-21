import { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import NavBar from "./components/NavBar/NavBar";
import GetHelp from "./components/GetHelp/GetHelp";
import ProvideHelp from "./components/ProvideHelp/ProvideHelp";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import AccountSetting from "./components/AccountSetting/AccountSetting";
import HistoryDashboard from "./components/HistoryDashboard/HistoryDashboard";
import LogIn from "./components/LogIn/LogIn";
import { AuthContext } from "./context/AuthContext";
import Explore from "./components/Explore/Explore";
import ScrollToTop from './ScrollToTop';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  //link protection
  const Requireauth = ({ children }) => {
    return currentUser ? children : <Navigate to="/logIn" />;
  };
  const Requirenotauth = ({ children }) => {
    return !currentUser ? children : <Navigate to="/main" />;
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/*Home side */}
        <Route
          path="/"
          element={
            <Requirenotauth>
              <NavBar />
            </Requirenotauth>
          }
        >
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Route>
        {/*independent route from navbar  */}
        <Route path="/logIn" element={<LogIn />} />
        <Route
          path="/getHelp"
          element={
            <Requirenotauth>
              <GetHelp />
            </Requirenotauth>
          }
        />
        <Route
          path="/provideHelp"
          element={
            <Requirenotauth>
              <ProvideHelp />
            </Requirenotauth>
          }
        />
        {/*user side */}
        <Route
          path="/main"
          element={
            <Requireauth>
              <SideBar />
            </Requireauth>
          }
        >
          <Route index element={<Explore />} />
          <Route path="/main/history" element={<HistoryDashboard />} />
          <Route
            path="/main/accountSettings"
            element={<AccountSetting />}
          />
          <Route path="/main/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
