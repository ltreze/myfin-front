import React, { Component } from "react";
import Note from "../Note";
import "./style.css";

class Day extends Component {

  render() {
    return (
      <li className="day">
        <h2 className="description">{this.props.day.numberDay}</h2>
        <ul>
          {this.props.day.notes.map((item, index) => (
            <li className="notes" key={index}>
              <Note note={item} />
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default Day;
