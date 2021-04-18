import React, { Component } from "react";

const API = "https://jsonplaceholder.typicode.com/posts";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result,
        });
      });
  }

  render() {
    const { items } = this.state;

    return (
      <ul>
        {items.map((item) => (
          <li key={item.userId}>
            <h3>{item.id}</h3>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Posts;
