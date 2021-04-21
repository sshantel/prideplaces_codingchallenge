import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
    };
  }

  render() {
    return (
      <div className="post">
        <h3> {this.state.title}</h3>
      </div>
    );
  }
}
