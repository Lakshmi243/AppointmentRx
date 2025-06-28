import React, { useState, ChangeEvent } from "react";
import { ToastContainer, toast , ToastPosition} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribeNewsletter: React.FC = () => {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const position: ToastPosition = "top-center";
  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      if (emailRegex.test(inputEmail)) {
        toast.success("Subscribed to Newsletter !", {
           position: "top-center",
          onOpen: () => {
            setIsButtonDisabled(true);
            setInputEmail("");
          },
          onClose: () => setIsButtonDisabled(false),
        });
      } else {
        toast.error("Invalid Email Address !", {
           position: "top-center",
          onOpen: () => setIsButtonDisabled(true),
          onClose: () => setIsButtonDisabled(false),
        });
      }
    }
  };

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Stay Update to our Newsletter</p>
      <input
        type="text"
        inputMode="email"
        className="ft-input"
        placeholder="Enter your email address"
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      />
      <button
        className="text-appointment-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleBookAppointmentClick}
      >
        Subscribe
      </button>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
};

export default SubscribeNewsletter;