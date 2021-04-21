import React from "react";
import "./Cards.css";

function showModal() { 
  const showModal: false;
}

function handleClick = (e) => {
  this.setState({ showModal: !this.state.showModal });
};

return (
  <p>
    {cards.map((card=> (
      <>
      <div key = "card.id" onClick = {this.handleClick} className="cards">
        <h3>{card.id}</h3>
        <p> {card.userId}</p>
        <p> {card.title}</p>
        <p> {card.body}</p>
      </div>
      {this.state.showModal? <Modal title={card.title}/> : null}
      </>
    ))}
  </p>
  );
}