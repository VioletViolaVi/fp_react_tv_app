import React from "react";

const ShowCard = ({ data }) => {
  console.log(data);
  return (
    <div className="show_card">
      {/*
        - only run this instruction (on the right) if the code on the left is true
        - same thing as the ternary operator code below 
        - da code:
          - '()' were used as code jumped to new line otherwise, no '()'
        {data.image && (
          <img src={data["image"]["medium"]} alt="Image of tv show." />
        )}
      */}
      <img
        src={data["image"] ? data["image"]["medium"] : ""}
        alt="Image of tv show."
      />
      <h2>{data.name}</h2>
      <p>{data.summary}</p>
    </div>
  );
};

export default ShowCard;
