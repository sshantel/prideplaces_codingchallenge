import React, { Component } from "react";
import { CardList } from "./components/Cards/Cards";
import { Modal } from "./components/Modal/Modal";
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
    return (
      <div className="App">
        <Modal />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
export default App;
