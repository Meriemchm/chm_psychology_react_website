import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function LogIn() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center  w-full m-auto">
      <div className="flex flex-row justify-center items-center w-full m-16 md:m-auto lg:m-16">
        <div className="hidden justify-center items-center md:flex bg-secondvariant md:w-6/12 lg:w-full">
          <div className="flex flex-col justify-center items-start bg-white/50 mx-20 my-40 p-16">
            <h1 className="flex flex-col text-5xl font-bold text-primary py-5 w-full">
              Get help anytime, <span className=" py-2">anywhere!</span>
            </h1>
            <p className="text-six">
              Lorem ipsum, dolor sagni voluptas! Voluptas est .
            </p>
          </div>
        </div>
        <div className="flex flex-col  w-full justify-center items-center">
          <div className="flex md:w-1/2 flex-col my-5 justify-start items-start ">
            <h3 className="font-bold text-4xl my-5 text-start">Welcome</h3>
            <p>Enter the information you entered while registering.</p>
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-full md:w-1/2"
          >
            <div className="flex flex-col">
              <div className="flex flex-col">
                <label className="capitalize my-3">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col my-5">
                <label className="capitalize my-3 ">Password</label>
                <input
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
                <input type="checkbox" className="" />
                <label className="capitalize ml-2  text-xs ">Remember me</label>
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
            {error && <span className="text-red-500">{error}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
