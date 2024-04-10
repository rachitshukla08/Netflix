import React, { useState } from "react";
import { Header } from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="custom-bg-login h-lvh">
      <div className="container max-w-7xl m-auto">
        <Header />
        <div className="form-container max-w-md m-auto py-2">
          <form className="px-16 py-16 bg-black bg-opacity-65 min-h-[500px] rounded">
            <div className="flex flex-col gap-6 text-white">
              <p className="text-3xl text-white font-bold ">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </p>
              {isSignInForm || (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-4 bg-black bg-opacity-70 text-white border border-gray-500 rounded"
                />
              )}
              <input
                type="text"
                placeholder="Email"
                className="px-4 py-4 bg-black bg-opacity-70 text-white border border-gray-500 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-4 bg-black bg-opacity-70 text-white border border-gray-500 rounded"
              />
              <button
                type="submit"
                className="p-2 bg-red-600 hover:bg-red-800 transition-all text-white rounded"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p className="mt-2">
                {isSignInForm ? (
                  <>
                    <span className="text-gray-300">New to Netflix?</span>{" "}
                    <span
                      className="font-medium hover:cursor-pointer"
                      onClick={toggleForm}
                    >
                      Sign up now.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-gray-300">Already a user?</span>{" "}
                    <span
                      className="font-medium hover:cursor-pointer"
                      onClick={toggleForm}
                    >
                      Login.
                    </span>
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
