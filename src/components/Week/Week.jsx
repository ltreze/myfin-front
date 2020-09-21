import React, { Component } from "react";
import Day from "../Day";
import Backlog from "../Backlog";
import "./style.css";

class Week extends Component {
  render() {
    return (
      <ul className="week">
        <Backlog id={"backlog"}
          backlog={this.props.backlog} 
          addNoteToBacklog={this.props.addNoteToBacklog.bind(this)}
        /> 
        <Day day={this.props.weekDays[0]} id={"dom"} />
        <Day day={this.props.weekDays[1]} id={"seg"}/>
        <Day day={this.props.weekDays[2]} id={"ter"}/>
        <Day day={this.props.weekDays[3]} id={"qua"}/>
        <Day day={this.props.weekDays[4]} id={"qui"}/>
        <Day day={this.props.weekDays[5]} id={"sex"}/>
        <Day day={this.props.weekDays[6]} id={"sab"}/>
      </ul>
    );
  }
}

export default Week;
