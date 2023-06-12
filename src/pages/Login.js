import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="h-screen w-screen bg-[--bg-main] flex justify-center">
      <div className="pt-16 w-[90%] sm:w-60% md:w-45% lg:max-w-[30%]">
        <div className="bg-[--bg-card]  t-[50%] rounded shadow-sm py-10 px-8">
          <div className="flex justify-center">
            <Logo />
          </div>

          <div className="text-center text-3xl mb-4 mt-6">
            <h2>{isRegister ? "Register" : "Login"}</h2>
          </div>
          <div>
            <form className="flex flex-col gap-4">
              {isRegister && (
                <div className="flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="input-field"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-field"
                />
              </div>
              <div className="flex flex-col">
                <label className="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-field"
                />
              </div>
              <Link to="/dashboard" className="flex mt-5">
                <button className="submit-button">
                  Submit
                </button>
              </Link>
              <div className="flex justify-center mt-2">
                <p>
                  Not a member yet?{" "}
                  <span className="cursor-pointer text-[--card-title] font-bold hover:text-[--card-hover] hover:transition-all hover:ease-linear">
                    {isRegister ? (
                      <span
                        onClick={() => {
                          setIsRegister(!isRegister);
                        }}
                      >
                        Login
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          setIsRegister(!isRegister);
                        }}
                      >
                        Register
                      </span>
                    )}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
