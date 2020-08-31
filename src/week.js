import React from "react";
import List from "./list"

const weekstyle = {
  display: "inline-block",
  overflow: "auto",
  overflowY: "hidden",
  maxWidth: "100%",
  margin: "1",
  whiteSpace: "nowrap"
}

const Week = ({ days }) => (
  <ul style={weekstyle}>
    {days.map(item => (
      <List list={item}/>
    ))}
  </ul>
);

export default Week;
