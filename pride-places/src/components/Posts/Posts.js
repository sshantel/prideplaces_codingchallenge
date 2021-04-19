import React, { Component } from "react";
import "./Posts.css";

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
          <div className="card">
            <p id="post-id"> {post.id}</p>
            <p id="post-user-id">{post.userId}</p>
            <p id="post-title">{post.title}</p>
            <p id="post-body">{post.body}</p>
          </div>
        ))}
      </p>
    );
  }
}
export default Posts;
