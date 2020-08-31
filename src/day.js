import React, { Component } from "react";
import Card from "./card";

class Day extends Component {
  render() {
    return (
      <li style={daystyle}>
        <h2 style={descriptionstyle}>{this.props.day.numberDay}</h2>
        <ul>
          {this.props.day.cards.map(item => (
            <li style={liststyle}>
              <Card card={item} />
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

const daystyle = {
  verticalAlign: "top", 
  display: "inline-block", 
  padding: 16, 
  border: 1, 
  borderColor: "black", 
  borderStyle: "solid",
  margin: 1
}
const liststyle = {
  verticalAlign: "top", 
  margin: 2, 
  padding: 0,
  listStyle: "none"
}
const descriptionstyle = {
  margin: 0,
  fontSize: 16,
  padding: 0
}

export default Day;
