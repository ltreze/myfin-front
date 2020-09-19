import React, { Component } from "react";
import Day from "../Day";
import Backlog from "../Backlog";
import "./style.css";

class Week extends Component {
  render() {
    return (
      <ul className="week">
        <Backlog 
          backlog={this.props.backlog} 
          addNoteToBacklog={this.props.addNoteToBacklog.bind(this)}
        /> 
        <Day day={this.props.weekDays[0]} />
        <Day day={this.props.weekDays[1]} />
        <Day day={this.props.weekDays[2]} />
        <Day day={this.props.weekDays[3]} />
        <Day day={this.props.weekDays[4]} />
        <Day day={this.props.weekDays[5]} />
        <Day day={this.props.weekDays[6]} />
      </ul>
    );
  }
}

export default Week;
