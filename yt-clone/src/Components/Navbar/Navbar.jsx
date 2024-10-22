import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCameraVideo } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

// -----------------------
import "./Navbar.css";
import profile_photo from "../../assets/profile.png";
// --------------------------

const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex">
      <div className="left-div flex">
        <IoMenu
          className="menu icon-h1 hover"
          onClick={() => {
            setSidebar((prev) => (prev === false ? true : false));
          }}
        />
        <div className="flex">
          <FaYoutube className="yt-icon icon-h1" />
          <h1>YouTube</h1>
        </div>
      </div>

      <div className="middle-div flex">
        <div className="search-bar flex">
          <input type="text" placeholder="Search" className="search-input" />
          <CiSearch className="search-icon" />
        </div>
        <FaMicrophone className="mic-icon" />
      </div>

      <div className="right-div flex">
        <BsCameraVideo className="icon-h2" />
        <CiBellOn className="icon-h2" />
        <img src={profile_photo} alt="Profile Photo" />
      </div>
    </nav>
  );
};

export default Navbar;
