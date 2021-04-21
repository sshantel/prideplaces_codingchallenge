import React from "react";
import "./Cards.css";

export const CardList = (props) => (
  <div className="card-list key={card.id}">
    {props.cards.map((card) => (
      <h3 key={card.userId}>{card.title}</h3>
    ))}
  </div>
);
