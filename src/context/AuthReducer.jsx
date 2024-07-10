const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload.users,
        token: action.payload.token,
        role: action.payload.role, 
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role"); 
      return {
        ...state,
        currentUser: null,
        token: null,
        role: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
