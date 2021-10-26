import React from "react";
import "./Card-small.css";

const CardSmall = ({ icon, pageViews, growth }) => {
  return (
    <div className="card-small">
      <p className="card-small-views">Likes</p>
      <p className="card-small-icon">
        <img src={icon} alt="" />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage is-danger">
        <span>
          <img
            src="image/down-arrow.svg"
            alt="icon-down"
            className="image-down"
          />
          {growth}%
        </span>
      </p>
    </div>
  );
};

export default CardSmall;
