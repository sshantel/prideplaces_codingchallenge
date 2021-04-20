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
        console.log(result);
        this.setState({
          cards: result,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
export default App;
