import React from "react";
import Day from "./day"

const weekstyle = {
  display: "inline-block",
  overflow: "auto",
  overflowY: "hidden",
  maxWidth: "100%",
  margin: "1",
  whiteSpace: "nowrap"
}

const Week = ({ days }) => (<ul style={weekstyle}>{days.map(item => (<Day day={item}/>))}</ul>);


export default Week;
