import React from "react";

const ShowCard = ({ title, description, rating }) => {
  return (
    <div className="show_card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{rating}/10</div>
    </div>
  );
};

export default ShowCard;
