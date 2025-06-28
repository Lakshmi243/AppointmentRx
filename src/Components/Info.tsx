import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

const services = [
  {
    title: "Emergency Care",
    icon: faTruckMedical,
    description: "24/7 immediate response from experienced professionals.",
  },
  {
    title: "Heart Health",
    icon: faHeartPulse,
    description: "Cardiology checkups and treatments for a healthy heart.",
  },
  {
    title: "Dental Care",
    icon: faTooth,
    description: "Comprehensive dental treatments and cosmetic care.",
  },
];

const Info = () => {
  return (
    <section className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our Services</span>
        </h3>
        <p className="info-description">
          Trusted medical services at your fingertips – accessible, affordable, and reliable.
        </p>
      </div>

      <div className="info-grid">
        {services.map((service, index) => (
          <div className="info-card" key={index}>
            <div className="info-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h4 className="info-card-title">{service.title}</h4>
            <p className="info-card-description">{service.description}</p>
            <button className="info-card-button">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;