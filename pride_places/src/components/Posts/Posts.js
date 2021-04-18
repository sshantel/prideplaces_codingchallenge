import React, { Component } from "react";

const API = "https://jsonplaceholder.typicode.com/posts";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          posts: result,
        });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <p>
        {posts.map((post) => (
          <div className="post">
            <h3>POST ID: {post.id}</h3>
            <p>{post.userId}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </p>
    );
  }
}
export default Posts;
