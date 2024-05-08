import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { netflixLogo } from "../utils/constants";
import { showHomePage, toggleGPTSearch } from "../store/gptSlice";
import DropDown from "./Header/DropDown";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        // Navigate to error page
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearch());
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between items-center relative  ">
      <img
        src={netflixLogo}
        alt="logo"
        className="w-48 ml-[3%] cursor-pointer"
        onClick={() => {
          dispatch(showHomePage());
        }}
      />
      {user && (
        <div className="flex text-nowrap gap-8 mr-8">
          <button
            className="text-white hover:scale-[1.02] flex items-center gap-3"
            onClick={handleGPTSearchClick}
          >
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              width="16"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                fillRule="nonzero"
                stroke="white"
                fill="white"
              />
            </svg>
            Search
          </button>
          <DropDown user={user} signOut={handleSignOut} />
        </div>
      )}
    </div>
  );
};
