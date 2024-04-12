import React, { useEffect } from "react";
import userIcon from "../assets/usericon.jpg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { netflixLogo } from "../utils/constants";

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
      console.log("unsubbed");
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out");
      })
      .catch((error) => {
        console.log(error);
        // Navigate to error page
        navigate("/error");
      });
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <img src={netflixLogo} alt="logo" className="w-48" />
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
