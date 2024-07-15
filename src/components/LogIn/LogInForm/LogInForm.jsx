import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { isExpired, decodeToken } from "react-jwt";

function LogInForm() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch, role } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/api/users/login", {
        email,
        password,
      });

      const { user, psychologist, token } = response.data;
      const users = user || psychologist;

      const decodedToken = decodeToken(token);

      const role = decodedToken.role;
      const isTokenExpired = isExpired(token);

      dispatch({ type: "LOGIN", payload: { users, token, role } });
      localStorage.setItem("role", JSON.stringify(role));
      localStorage.setItem("user", JSON.stringify(users));
      localStorage.setItem("token", token);

      setError(false);
      if (role === "user") {
        navigate("/main");
      } else {
        navigate("/main/dashboard");
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-row justify-center items-center w-full md:py-8 md:m-auto p-10">
        {/* ogin form */}
        <div className="hidden justify-center items-center xl:flex bg-secondvariant md:w-6/12 lg:w-full">
          <div className="flex flex-col justify-center items-start bg-secondvariant mx-20 my-40 p-16">
            <h1 className="flex flex-col text-5xl font-bold text-primary py-5 w-full">
              Get help anytime, <span className="py-2">anywhere!</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 xl:w-full justify-center items-center">
          <div className="flex xl:w-1/2 flex-col my-5 justify-start items-start w-full">
            <h3 className="font-bold text-4xl my-5 text-start">Welcome</h3>
            <p>Enter the information you entered while registering.</p>
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-full xl:w-1/2"
          >
            {error && (
              <span className="text-red-500">Wrong email or password</span>
            )}
            <div className="flex flex-col">
              <div className="flex flex-col">
                <label htmlFor="email" className="capitalize my-3">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="password" className="capitalize my-3">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <input type="checkbox" className="" id="rememberme" />
                <label className="capitalize ml-2 text-xs" htmlFor="rememberme">
                  Remember me
                </label>
              </div>
              <a
                href=""
                className="text-xs mt-1 text-transparent bg-clip-text bg-second"
              >
                Forget password?
              </a>
            </div>
            <button
              type="submit"
              className="my-4 bg-primary rounded-md py-3 text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInForm;
