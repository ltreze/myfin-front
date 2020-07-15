import React from "react";

const Card = ({ card }) => {
  return (
    <button>
      <h3>{card.description}</h3>
    </button>
  );
};

export default Card;
