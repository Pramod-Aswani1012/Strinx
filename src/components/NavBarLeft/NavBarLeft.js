import React from "react";
import "./NavBarLeft.css";
import { FaTwitter } from "react-icons/fa";
import {
  BiHash,
  BiHomeCircle,
  BiMessageSquareDetail,
  BiBookmark,
} from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFileList2Line, RiContactsFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import logo from "../images/X_gray.png"
import { Link } from "react-router-dom";

// import { CgMoreO, CgMoreAlt } from "react-icons/cg";

const NavBarLeft = () => {
  return (
    <>
    <div id="Left" className="bg-[#0F1419] text-white ">
      <Link to="/home">
      <div id="TwitterBox" className=" relative top-4">
        <img src={logo} className=" w-8 h-8" />
      </div>
      </Link>
      <button id="box">
        <AiFillHome id="icon"  color="white"/>
        <p id="text-navbar-left">Home</p>
      </button>
      <button id="box">
        <BsSearch id="icon"  color="white"/>
        <p id="text-navbar-left">Explore</p>
      </button>
      <button id="box">
        <IoNotificationsOutline id="icon"  color="white"/>
        <p id="text-navbar-left">notifications</p>
      </button>
      <button id="box">
        <BiMessageSquareDetail id="icon"  color="white"/>
        <p id="text-navbar-left">Message</p>
      </button>
      <button id="box">
        <BiBookmark id="icon"  color="white"/>
        <p id="text-navbar-left">Bookmarks</p>
      </button>
      <button id="box">
        <RiFileList2Line id="icon"  color="white"/>
        <p id="text-navbar-left">Lists</p>
      </button>
      <Link to="/profile">
      <button id="box">
        <RiContactsFill id="icon"  color="white"/>
        <p id="text-navbar-left" className="bold">Profile</p>
      </button>
      </Link>
      <button id="box">
        {/* <CgMoreO id="icon" /> */}
        <p id="text-navbar-left">More</p>
      </button>

      <button id="Tweet">Tweet</button>
      <div id="user">
        <img
          src="https://avatars.githubusercontent.com/u/79017406?s=400&u=afd722bfaa6bde4417c495ac110a8971e77c9432&v=4"
          alt=""
          id="user-img"
        />
        <div id="box-user-names">
          <p id="name" className="mb">default</p>
          <p id="user-name">@defaultuser</p>
        </div>
        {/* <CgMoreAlt id="cg" /> */}
      </div>
    </div>
      
    </>
  );
};

export default NavBarLeft;
