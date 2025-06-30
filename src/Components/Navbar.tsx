import React, { useState, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import HealthConnect from "../Assets/HeathConnect.png";
import { Link } from "react-router-dom";
import { toast, ToastPosition } from "react-toastify";

const Navbar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isChatBtnDisabled, setIsChatBtnDisabled] = useState(false);
  const toastPosition: ToastPosition = "top-center";

  const toggleMobileNav = (): void => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const handleMobileNavKey = (event: KeyboardEvent<HTMLDivElement | HTMLButtonElement>): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMobileNav();
    }
  };

  const handleChatClick = (): void => {
    if (!isChatBtnDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toastPosition,
        onOpen: () => setIsChatBtnDisabled(true),
        onClose: () => setIsChatBtnDisabled(false),
      });
    }
  };

  return (
    <>
      <nav className="navbar-section" aria-label="Main Navigation">
        <h1 className="navbar-title">
          <Link to="/" aria-label="Home">
            <img src={HealthConnect} alt="Health Connect Logo" className="navbar-logo" />
          </Link>
        </h1>

        <ul className="navbar-items">
          <li><a href="" className="navbar-links">Home</a></li>
          <li><a href="#services" className="navbar-links">Services</a></li>
          <li><a href="#about" className="navbar-links">About</a></li>
          <li><a href="#reviews" className="navbar-links">Reviews</a></li>
          <li><a href="#doctors" className="navbar-links">Doctors</a></li>
        </ul>

        <button
          className="navbar-btn"
          type="button"
          disabled={isChatBtnDisabled}
          aria-disabled={isChatBtnDisabled}
          aria-label="Live chat support"
          onClick={handleChatClick}
        >
          <FontAwesomeIcon icon={faCommentDots} /> Live Chat
        </button>

        {/* Mobile navigation panel */}
        <aside
          className={`mobile-navbar ${isMobileNavOpen ? "open-nav" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isMobileNavOpen}
        >
          <div
            className="mobile-navbar-close"
            role="button"
            tabIndex={0}
            aria-label="Close mobile menu"
            onClick={toggleMobileNav}
            onKeyDown={handleMobileNavKey}
          >
            <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
          </div>

          <ul className="mobile-navbar-links">
            <li><Link onClick={toggleMobileNav} to="/">Home</Link></li>
            <li><a onClick={toggleMobileNav} href="#services">Services</a></li>
            <li><a onClick={toggleMobileNav} href="#about">About</a></li>
            <li><a onClick={toggleMobileNav} href="#reviews">Reviews</a></li>
            <li><a onClick={toggleMobileNav} href="#doctors">Doctors</a></li>
            <li><a onClick={toggleMobileNav} href="#contact">Contact</a></li>
          </ul>
        </aside>

        {/* Mobile hamburger menu icon */}
        <button
          className="mobile-nav-btn"
          aria-label="Open mobile menu"
          aria-expanded={isMobileNavOpen}
          onClick={toggleMobileNav}
          onKeyDown={handleMobileNavKey}
          type="button"
        >
          <FontAwesomeIcon icon={faBars} className="hamb-icon" />
        </button>
      </nav>

      {/* Scrolling contact banner */}
      <div className="scrolling-banner" role="region" aria-label="Contact Information">
        <p>📞 Call Us: +1 (900) 123-4567 — 24/7 Emergency & Appointment Support</p>
      </div>
    </>
  );
};

export default Navbar;