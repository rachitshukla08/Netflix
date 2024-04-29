import React, { useEffect, useState } from "react";

const DropDown = ({ user, signOut }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [dropdownHideTimer, setDropDownHideTimer] = useState();

  const hideDropDown = () => {
    const timer = setTimeout(() => {
      setIsDropDownVisible(false);
    }, 1000);
    setDropDownHideTimer(timer);
  };

  const showDropDown = () => {
    setIsDropDownVisible(true);
    clearInterval(dropdownHideTimer);
  };

  const handleSignOutClick = () => {
    signOut();
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={showDropDown}
      onMouseLeave={hideDropDown}
    >
      <img src={user?.photoURL} alt="user-icon" className="max-w-8 link" />
      <div
        className={isDropDownVisible ? "dropdown-menu active" : "dropdown-menu"}
      >
        <div className="flex flex-row items-center py-4 gap-2 cursor-pointer  ">
          <img src={user?.photoURL} alt="user-icon" className="max-w-6 link" />
          <span>{user.displayName}</span>
        </div>
        <p className="py-4"> Dropdown content</p>
        <p className="py-4"> Dropdown content</p>
        <button className="py-4 hover:underline" onClick={handleSignOutClick}>
          {" "}
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default DropDown;
