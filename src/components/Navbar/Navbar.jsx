import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />

        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons" src= {search_icon} alt="" />
        <p>Children</p>
        <img className="icons" src={bell_icon} alt="" />

        <img className="profile" src={profile_img} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
