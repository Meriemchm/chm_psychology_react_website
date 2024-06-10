const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      localStorage.removeItem("userData");
      return {
        currentUser: null,
        userData: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
