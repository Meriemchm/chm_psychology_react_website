import React, { createContext,useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const PsychologistsContext = createContext();

export const PsychologistsProvider = ({ children }) => {
  const { userData } = useContext(AuthContext);
  const [psyData, setPsyData] = useState([]);
  const [sessionData, setSessionData] = useState([]);

  // const registerUser = async () => {
  //   const userData = {
  //     username: "Ahmed",
  //     xp: 20,
  //     email: "Ahmed@example.com",
  //     password: "123456",
  //     birthdate: "1994-06-1",
  //     genre: 'male',
  //   };

  //   try {
  //     const response = await axios.post(
  //       "/api/api/Psychologists/Register",
  //       userData
  //     );
  //     console.log("User registered successfully:", response.data);
  //   } catch (error) {
  //     if (error.response) {
  //       console.log("Server responded with error:", error.response.data);
  //       console.log("Status code:", error.response.status);
  //     } else if (error.request) {
  //       console.error("No response received:", error.request);
  //     } else {
  //       console.error("Error setting up the request:", error.message);
  //     }
  //   }
  // };
  // useEffect(() => {
  //   registerUser();
  // }, []);

  const fetchPsychologists = async () => {
    try {
      const response = await fetch(`/api/api/psychologists`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPsyData(data);
    } catch (error) {
      console.error("Error fetching psychologists:", error);
    }
  };

  useEffect(() => {
    if (userData) {
      fetchPsychologists();
    }
  }, []);

  return (
    <PsychologistsContext.Provider value={{ psyData, sessionData }}>
      {children}
    </PsychologistsContext.Provider>
  );
};
