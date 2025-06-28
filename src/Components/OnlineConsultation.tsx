import React from "react";
import "../Styles/OnlineConsultation.css";

// Import your specialty images (place them in /Assets/Specialties/)
import cardiologyImg from "../Assets/Specialties/cardiology.png";
import dermatologyImg from "../Assets/Specialties/dermatology.png";
import pediatricsImg from "../Assets/Specialties/pediatrics.png";
import neurologyImg from "../Assets/Specialties/neurology.png";
import coldcoughImg from "../Assets/Specialties/coldcough.png";
import gynecologyImg from "../Assets/Specialties/gynecology.png";

const specialties = [
  { name: "Cardiology", image: cardiologyImg },
  { name: "Dermatology", image: dermatologyImg },
  { name: "Pediatrics", image: pediatricsImg },
  { name: "Neurology", image: neurologyImg },
  { name: "ColdCough", image: coldcoughImg },
  { name: "Gynecology", image: gynecologyImg },
];

const OnlineConsultation = () => {
  return (
    <section className="consult-section">
      <div className="consult-text-container">
        <h2 className="consult-title">
          Consult top doctors online for any health concern
        </h2>
        <p className="consult-description">
          Private online consultations with verified doctors in all specialists
        </p>
      </div>

      <div className="consult-specialties-container">
        {specialties.map((spec, index) => (
          <div className="consult-specialty-card" key={index}>
            <img
              src={spec.image}
              alt={spec.name}
              className="consult-specialty-image"
            />
            <p className="consult-specialty-name">{spec.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnlineConsultation;