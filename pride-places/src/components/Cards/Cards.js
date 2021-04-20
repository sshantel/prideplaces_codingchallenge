import React, { Component } from "react";
import "./Cards.css";

export const CardList = (props) => {
  console.log(props);
  return <div className="card-list">{props.children}</div>;
};
