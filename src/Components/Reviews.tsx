import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
  };

  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
  };

  const { name: rName, location: rLocation, message: rMessage } = customerReviews[review];

  return (
    <section className="info-section" id="reviews">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What Our Clients Say</span>
        </h3>
        <p className="info-description">
          More than <strong>1500+</strong> satisfied customers — hear it directly from them.
        </p>
      </div>

      <div className="review-card">
        <p className="review-message">
          <span className="review-quote">“</span>
          {rMessage}
          <span className="review-quote">”</span>
        </p>

        <div className="review-footer">
          <div className="review-author">
            <p className="review-name">{rName}</p>
            <p className="review-location">{rLocation}</p>
          </div>

          <div className="review-nav">
            <button className="review-btn" onClick={backBtnClick} aria-label="Previous Review">
              ←
            </button>
            <button className="review-btn" onClick={frontBtnClick} aria-label="Next Review">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
