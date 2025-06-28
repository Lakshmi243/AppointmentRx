import React, { useState } from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCalendarCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";
import AppointmentForm from "./AppointmentForm"; // Import the form component

const BookAppointment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Restore scroll
  };

  return (
    <section className="info-section" id="book-appointment">
      <div className="book-grid">
        {/* Left: Image */}
        <div className="book-image-container">
          <img src={Doctor} alt="Doctor Booking" className="book-image" />
        </div>

        {/* Right: Text Content */}
        <div className="book-text-container">
          <h3 className="info-title">
            <span>Why Choose Health</span>
          </h3>
          <p className="info-description">
            Discover the reasons to choose Health Connect for your healthcare needs.
            Experience expert care, convenience, and personalized solutions,
            making your well-being our top priority. Join us on a journey to
            better health and a happier life.
          </p>

          <ul className="book-checklist">
            {[
              "Best Professional Doctors",
              "Emergency Care",
              "24/7 Support Live Chat",
              "Enrollment Easy and Quick",
            ].map((item, index) => (
              <li key={index} className="book-check-item">
                <FontAwesomeIcon icon={faCircleCheck} className="book-check-icon" />
                {item}
              </li>
            ))}
          </ul>

          <button
            className="info-card-button"
            type="button"
            onClick={openModal}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modalTitle" tabIndex={-1}>
          <div className="modal-content">
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close appointment form"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h2 id="modalTitle" className="modal-title">Book Appointment Online</h2>
            {/* Render the form inside the modal */}
            <AppointmentForm isModal={true} onClose={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default BookAppointment;
