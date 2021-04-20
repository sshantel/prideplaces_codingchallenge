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
