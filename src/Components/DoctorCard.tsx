import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface DoctorCardProps {
  img: string;
  name: string;
  title: string;
  stars: number | string;
  reviews: number | string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ img, name, title, stars, reviews }) => {
  return (
    <div className="doctor-card">
      <img src={img} alt={name} className="doctor-card-img" />
      <p className="doctor-card-name">{name}</p>
      <p className="doctor-card-title">{title}</p>
      <p className="doctor-card-stars">
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#F7BB50", marginRight: "6px" }}
        />
        <span>{stars}</span>
        <span className="doctor-card-reviews"> ({reviews}+ Reviews)</span>
      </p>
    </div>
  );
};

export default DoctorCard;
