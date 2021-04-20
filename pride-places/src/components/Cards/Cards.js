import React, { Component } from "react";
import "./Cards.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          cards: result,
        });
      });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="card">
        {cards.map((card) => (
          <div className="flex-container">
            <p id="post-id"> {card.id}</p>
            <p id="post-user-id">{card.userId}</p>
            <p id="post-title">{card.title}</p>
            <p id="post-body">{card.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Cards;
