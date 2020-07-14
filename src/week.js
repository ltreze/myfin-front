import React from "react";
import Day from "./day"

const Week = ({ days }) => (
  <ul style={{
    display: "inline-block",
    overflow: "auto",
    overflowY: "hidden",
    maxWidth: "100%",
    margin: "0 0 1em",
    whiteSpace: "nowrap"}}>
    {days.map(item => (
      <li style={{verticalAlign: "top", display: "inline-block"}}>
        <Day day={item}/>
      </li>
    ))}
  </ul>
);

export default Week;
