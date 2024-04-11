import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
    email.current.value = "";
    password.current.value = "";
  };

  const handleButtonClick = () => {
    const error = checkValidData(email.current.value, password.current.value);
    setErrorMessage(error);
    if (error) return;

    if (!isSignInForm) {
      // Sign up user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(userCredential);
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          console.log(errorCode, errorMsg);
          setErrorMessage(errorCode + ": " + errorMsg);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(errorCode + ": " + errorMsg);
        });
    }
  };

  return (
    <div className="custom-bg-login h-lvh">
      <div className="container max-w-7xl m-auto">
        <Header />
        <div className="form-container max-w-md m-auto py-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="px-16 py-16 bg-black bg-opacity-65 min-h-[500px] rounded"
          >
            <div className="flex flex-col gap-6 text-white">
              <p className="text-3xl text-white font-bold ">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </p>
              {isSignInForm || (
                <input
                  type="text"
                  placeholder="Full Name"
                  ref={name}
                  className="px-4 py-4 bg-black bg-opacity-70 text-white border border-gray-500 rounded"
                />
              )}
              <input
                type="text"
                placeholder="Email"
                ref={email}
                className="px-4 py-4 bg-black bg-opacity-70 text-white border border-gray-500 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                ref={password}
                className="px-4 py-4 bg-black bg-opacity-70 text-white border border-gray-500 rounded"
              />
              {errorMessage && (
                <pre className="text-xs text-red-600 text-wrap">
                  &#9888; {errorMessage}
                </pre>
              )}

              <button
                type="submit"
                onClick={handleButtonClick}
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
