const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      localStorage.setItem("userData", null);
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
