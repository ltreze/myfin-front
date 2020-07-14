import React from "react";
import Day from "./day"

const Week = ({ days }) => (
  <ul>
    {days.map(item => (
      <li><Day day={item}/></li>
    ))}
  </ul>
);

export default Week;
