import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

// Define props type
interface SolutionStepProps {
  title: string;
  description: string;
}

const SolutionStep: React.FC<SolutionStepProps> = ({ title, description }) => {
  return (
    <div className="about-text-step">
      <p className="about-text-sTitle">
        <span>
          <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
          {title}
        </span>
      </p>
      <p className="about-text-description">{description}</p>
    </div>
  );
};

export default SolutionStep;