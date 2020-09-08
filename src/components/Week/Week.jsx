import React, { Component } from "react";
import Day from "../Day";
import "./style.css";

class Week extends Component {
  render() {
    return (
      <ul className="week">
        <Day day={this.props.weekDays[0]} addNote={this.props.addNote} />
        <Day day={this.props.weekDays[1]} addNote={this.props.addNote} />
        <Day day={this.props.weekDays[2]} addNote={this.props.addNote} />
        <Day day={this.props.weekDays[3]} addNote={this.props.addNote} />
        <Day day={this.props.weekDays[4]} addNote={this.props.addNote} />
        <Day day={this.props.weekDays[5]} addNote={this.props.addNote} />
        <Day day={this.props.weekDays[6]} addNote={this.props.addNote} />
      </ul>
    );
  }
}

export default Week;
