import React, { Component } from "react";
import Card from "../Card";
import "./style.css"

class Day extends Component {
  render() {
    return (
      <li className="day">
        <h2 className="description">{this.props.day.numberDay}</h2>
        <ul>
          {this.props.day.cards.map((item, index) => (
            <li className="cards" key={index}>
              <Card card={item} />
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default Day;
