import React from "react";
import userIcon from "../assets/usericon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // Navigate to error page
        navigate("/error");
      });
  };
  return (
    <div className="flex flex-row justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-48"
      />
      {user && (
        <div className="mr-4 flex items-center gap-2">
          <img src={user?.photoURL} alt="user-icon" className="max-w-8 " />
          <span>{user?.displayName}</span>
          <button onClick={handleSignOut} className="text-xs">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
