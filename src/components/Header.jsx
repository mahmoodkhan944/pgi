import React, { useState, useEffect, useRef } from "react";
import image from "../assets/download.jpeg";
import "../styles/header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const panelId = "main-navigation";

  // Close when clicking outside the nav (or the button)
  useEffect(() => {
    function onPointerDown(e) {
      if (!navRef.current) return;
      // if clicked outside the nav container, close
      if (!navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // Close with ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // When menu opens, move focus to first link for accessibility
  useEffect(() => {
    if (open && navRef.current) {
      const firstLink = navRef.current.querySelector(".nav-links.open a");
      if (firstLink) firstLink.focus();
    } else {
      // when closing, return focus to the toggle button
      if (buttonRef.current) buttonRef.current.focus();
    }
  }, [open]);

  const handleToggle = () => setOpen((s) => !s);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav
      className="site-nav"
      aria-label="Main navigation"
      ref={navRef}
      role="navigation"
    >
      <div className="nav-top">
        <div className="headerLeft">
          <a href="/#">
            <img src={image} alt="Company logo" />
          </a>
        </div>

        {/* Desktop links remain visible via CSS; mobile panel is same markup */}
        <main
          id={panelId}
          className={`nav-links ${open ? "open" : ""}`}
          aria-hidden={!open}
          aria-expanded={open}
        >
          <a href={"/#"} onClick={handleLinkClick}>
            Home
          </a>
          <a href={"/aboutus"} onClick={handleLinkClick}>
            About Us
          </a>
          <a href={"/companystrategy"} onClick={handleLinkClick}>
            Company Strategy
          </a>
          <a href={"/corevalues"} onClick={handleLinkClick}>
            Core Values
          </a>
          <a href={"/objectives"} onClick={handleLinkClick}>
            Objectives
          </a>
          <a href={"/experience"} onClick={handleLinkClick}>
            Experience
          </a>
          <a href={"/projects"} onClick={handleLinkClick}>
            Projects
          </a>
          <a href={"/contactinfo"} onClick={handleLinkClick}>
            Contact Information
          </a>
         
        </main>

        <button
          ref={buttonRef}
          className={`menu-toggle${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls={panelId}
          aria-expanded={open}
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Header;
