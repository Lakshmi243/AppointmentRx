import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

const About: React.FC = () => {
  return (
    <section className="info-section" id="about">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>About Us</span>
        </h3>
        <p className="info-description">
          Welcome to Health Connect, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text-container">
          <h4 className="info-card-title">Your Solutions</h4>

          <div className="info-grid">
            <div className="info-card">
              <SolutionStep
                title="Choose a Specialist"
                description="Find your perfect specialist and book with ease at Health Connect. Expert doctors prioritize your health, offering tailored care."
              />
            </div>
            <div className="info-card">
              <SolutionStep
                title="Make a Schedule"
                description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
              />
            </div>
            <div className="info-card">
              <SolutionStep
                title="Get Your Solutions"
                description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
              />
            </div>
          </div>
        </div>

        <div className="about-image-container">
          <img src={Doctor} alt="Doctor Group" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
