import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const PsychologistsContext = createContext();

export const PsychologistsProvider = ({ children }) => {
  const [psyData, setPsyData] = useState([]);
  const [sessionData, setSessionData] = useState([]);

  // const registerUser = async () => {
  //   const userData = {
  //     name: "anna",
  //     last_name: "m",
  //     xp: 20,
  //     email: "anna@example.com",
  //     password: "password123",
  //     address: "123 Main St, Anytown",
  //     birthdate: "1994-06-1",
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
      console.log(data)
    } catch (error) {
      console.error("Error fetching psychologists:", error);
    }
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  // const fetchSession = async () => {
  //   try {
  //     const response = await fetch(`/api/api/sessions`);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     setSessionData(data);
  //   } catch (error) {
  //     console.error("Error fetching session:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchSession();
  // }, []);

  return (
    <PsychologistsContext.Provider value={{ psyData, sessionData }}>
      {children}
    </PsychologistsContext.Provider>
  );
};
