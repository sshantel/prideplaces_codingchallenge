import React, { Component } from "react";
import { CardList } from "./components/Cards/Cards";
import "./App.css";

class App extends Component {
  constructor() {
    super();
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
      <div className="App">
        {cards.map((card) => (
          <div className="flex-container">
            <CardList name={card.userId}>
              <h1> poop</h1>
            </CardList>
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
export default App;
