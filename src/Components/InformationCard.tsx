import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // import icon type
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InformationCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

function InformationCard({ icon, title, description }: InformationCardProps)  {
  return (
    <div className="info-cards">
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={icon} />
      </span>
      <p className="info-card-title">{title}</p>
      <p className="info-card-description">{description}</p>
    </div>
  );
}

export default InformationCard;