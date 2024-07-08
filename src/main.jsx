import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { PsychologistsProvider } from "./context/PsychologistsContext"; // Adjust the path as per your project structure

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PsychologistsProvider>
        <App />
      </PsychologistsProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
