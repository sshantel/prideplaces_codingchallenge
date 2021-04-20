import React from "react";
import "./Cards.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.cards.map((card) => (
        <h3 key={card.id}>
          {card.name}
          {card.body}
          {card.title}
        </h3>
      ))}
    </div>
  );
};
