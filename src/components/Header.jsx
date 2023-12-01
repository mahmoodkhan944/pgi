import React from "react";
//import { Link } from "react-router-dom";
//import image  from " ";
//import ContactInformation from "./ContactInformation";

const Header = () => {
  return (
    <nav>
      <h1>
        <img src="" alt="" />
      </h1>
      <div className="headerLeft">
        <a
          href="https://www.facebook.com/mahmood.tahiri/" target="_blank" rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <i className="facebook fa-brands fa-square-facebook"></i>
        </a>
        <a
          href="https://twitter.com/Electroozz1" target="_blank" rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <i className="twitter fa-brands fa-square-twitter"></i>
        </a>
        <a
          href="https://in.pinterest.com/mahmoodkhan944/" target="_blank" rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <i className="pinterest fa-brands fa-square-pinterest"></i>
        </a>
        <a
          href="https://www.instagram.com/shopping_hunk/" target="_blank" rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <i className="instagram fa-brands fa-square-instagram"></i>
        </a>
      </div>
      <main>
        <a href={"/#"}>Home</a>
        <a href={"/#aboutus"}>About Us</a>
        <a href={"/#companystrategy"}>Company Strategy</a>
        <a href={"/#corevalues"}>Core Values</a>
        <a href={"/#objectives"}>Objectives</a>
        <a href={"/#experience"}>Experience</a>
        <a href={"/projects"}>Projects</a>
        <a href={"/contactinfo"}>Contact Information</a>
      </main>
    </nav>
  );
};

export default Header;
