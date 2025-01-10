import React from "react";
//import { Link } from "react-router-dom";
import image from "../assets/download.jpeg";
//import ContactInformation from "./ContactInformation";
import "../styles/header.scss";

const Header = () => {
  return (
    <nav>
      <h1>
        <img src="" alt="" />
      </h1>
      <div className="headerLeft">
        {/* <img src={image} alt="logo" id="/#aboutus" /> */}
        <a href="/#">
          <img src={image} alt="" />
        </a>
      </div>
      <main>
        <a href={"/#"}>Home</a>
        <a href={"/aboutus"}>About Us</a>
        <a href={"/companystrategy"}>Company Strategy</a>
        <a href={"/corevalues"}>Core Values</a>
        <a href={"/objectives"}>Objectives</a>
        <a href={"/experience"}>Experience</a>
        <a href={"/projects"}>Projects</a>
        <a href={"/contactinfo"}>Contact Information</a>
        <a href={"/login"}>Login/Signup</a>
      </main>
    </nav>
  );
};

export default Header;
