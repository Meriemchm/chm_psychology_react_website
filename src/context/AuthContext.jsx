import React, { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")),
  token: localStorage.getItem("token"),
  role: JSON.parse(localStorage.getItem("role")),
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", JSON.stringify(state.role));
  }, [state.currentUser, state.token, state.role]);

  return (
    <AuthContext.Provider value={{ 
      ...state,
      userData: state.currentUser,
      token: state.token,
      role: state.role,
      dispatch,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
