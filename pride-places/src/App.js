import React, { Component } from "react";
import { Modal } from "./components/Modal/Modal";
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
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data }));
  }

  render() {
    const { cards } = this.state;

    return (
      <React.Fragment>
        <div className="App">
          <CardList cards={this.state.cards}>
            {" "}
            {this.state.cards.map((card) => (
              <h3 key={card.id}>
                {card.userId}
                {card.body}
                {card.title}
              </h3>
            ))}
          </CardList>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
