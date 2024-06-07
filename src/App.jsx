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
const App = () => {
  const { currentUser } = useContext(AuthContext);
  const Requireauth = ({ children }) => {
    return currentUser ? children : <Navigate to="/logIn" />;
  };
  const Requirenotauth = ({ children }) => {
    return !currentUser ? children : <Navigate to="/dashboard" />;
  };

  return (
    <Router>
      <Routes>
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
        <Route
          path="/dashboard"
          element={
            <Requireauth>
              <SideBar />
            </Requireauth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/history" element={<HistoryDashboard />} />
          <Route
            path="/dashboard/accountSettings"
            element={<AccountSetting />}
          />
          <Route
            path="/dashboard/explore"
            element={<Explore />}
          />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
