import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [showScrollUp, setShowScrollUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-text">
          <p className="hero-subtitle">❤️ Your Health, Our Priority</p>
          <h1 className="hero-title">
            Find Your Perfect Doctor <br /> & Book Appointment Easily
          </h1>
          <p className="hero-description">
            Connect with experienced doctors online and get quick medical advice,
            prescriptions, and support — all from the comfort of your home.
            Trusted healthcare at your fingertips.
          </p>
          <button
            className="hero-btn"
            type="button"
            onClick={handleBookAppointmentClick}
            aria-label="Book Appointment"
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>

          <div className="hero-stats">
            <div className="stat-card">
              <p className="stat-number">145k+</p>
              <p className="stat-label">Happy Patients</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">50+</p>
              <p className="stat-label">Expert Doctors</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">10+</p>
              <p className="stat-label">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={Doctor} alt="Friendly doctor smiling" />
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollUp ? "visible" : ""}`}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </section>
  );
};

export default Hero;
