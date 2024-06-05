import { createContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      let list = [];
      if (state.currentUser && state.currentUser.uid) {
        try {
          const userDoc = await getDoc(doc(db, "users", state.currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            list.push({ id: userDoc.id, ...userData });
            setData(list);
            dispatch({ type: "LOGIN", payload: userData });
            localStorage.setItem("userData", JSON.stringify(userData));
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [state.currentUser]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setData([storedUserData]);
      dispatch({ type: "LOGIN", payload: storedUserData });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser: state.currentUser, userData: data, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};
