import React, { Component } from "react";
import Day from "../Day/Day"
import "./style.css"

class Week extends Component {
  render() {
    return (
      <ul className="week">
        <Day day={this.props.days[0]} />
        <Day day={this.props.days[1]} />
        <Day day={this.props.days[2]} />
        <Day day={this.props.days[3]} />
        <Day day={this.props.days[4]} />
        <Day day={this.props.days[5]} />
        <Day day={this.props.days[6]} />
      </ul>
    );
  }
}

export default Week;
