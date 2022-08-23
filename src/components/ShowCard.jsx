import React from "react";

const ShowCard = ({ data }) => {
  return (
    <div className="show_card">
      <h2>{data.name}</h2>
    </div>
  );
};

export default ShowCard;
