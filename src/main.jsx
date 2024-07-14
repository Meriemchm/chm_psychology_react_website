import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { PsychologistsProvider } from "./context/PsychologistsContext"; // Adjust the path as per your project structure
import { SessionProvider } from "./context/SessionContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PsychologistsProvider>
        <SessionProvider>
          <App />
        </SessionProvider>
      </PsychologistsProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
