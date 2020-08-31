import React, { Component } from "react";
import Day from "./day"

const weekstyle = {
  display: "inline-block",
  overflow: "auto",
  overflowY: "hidden",
  maxWidth: "100%",
  margin: "1",
  whiteSpace: "nowrap"
}

class Week extends Component {
  render() {
    return (
      <ul style={weekstyle}>
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
