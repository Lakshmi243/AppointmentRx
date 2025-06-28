import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastPosition, toast, ToastContainer } from "react-toastify";

type FormErrors = {
  patientName?: string;
  patientNumber?: string;
  patientGender?: string;
  appointmentTime?: string;
  preferredMode?: string;
};

interface AppointmentFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ isModal, onClose }) => {
  useEffect(() => {
    if (!isModal) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isModal]);

  const position: ToastPosition = "top-center";
  const [patientName, setPatientName] = useState<string>("");
  const [patientNumber, setPatientNumber] = useState<string>("");
  const [patientGender, setPatientGender] = useState<string>("default");
  const [appointmentTime, setAppointmentTime] = useState<string>("");
  const [preferredMode, setPreferredMode] = useState<string>("default");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: FormErrors = {};

    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (!/^\d{10}$/.test(patientNumber)) {
      errors.patientNumber = "Patient phone number must be 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }

    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Clear form
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
      position: "top-center",
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });

    if (isModal && onClose) {
      setTimeout(() => {
        onClose(); // Close modal after success toast
      }, 1500);
    }
  };

  return (
    <div className={`appointment-form-section ${isModal ? "modal-form" : ""}`}>
      {!isModal && (
        <h1 className="legal-siteTitle">
          <Link to="/">
            Health <span className="legal-siteSign">+</span>
          </Link>
        </h1>
      )}

      <div className="form-container">
        {!isModal && (
          <h2 className="form-title">
            <span>Book Appointment Online</span>
          </h2>
        )}

        <form className="form-content" onSubmit={handleSubmit} noValidate>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>

          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>

          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && (
              <p className="error-message">{formErrors.appointmentTime}</p>
            )}
          </label>

          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && (
              <p className="error-message">{formErrors.preferredMode}</p>
            )}
          </label>

          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          {isSubmitted && (
            <p className="success-message">
              Appointment details have been sent via SMS.
            </p>
          )}
        </form>
      </div>

      {!isModal && (
        <div className="legal-footer">
          <p>© 2013–2023 Health+. All rights reserved.</p>
        </div>
      )}

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
};

export default AppointmentForm;
