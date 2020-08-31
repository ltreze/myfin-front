import React from "react";
import Card from "./card";

const Day = ({ day }) => (
  <li style={daystyle}>
    <h2 style={descriptionstyle}>{day.description}</h2>
    <ul>
      {day.cards.map(item => (
        <li style={liststyle}>
          <Card card={item} />
        </li>
      ))}
    </ul> 
  </li>
);

const daystyle = {
  verticalAlign: "top", 
  display: "inline-block", 
  padding: 16, 
  border: 1, 
  borderColor: "black", 
  borderStyle: "solid",
  margin: 1
}
const liststyle = {
  verticalAlign: "top", 
  margin: 2, 
  padding: 0,
  listStyle: "none"
}
const descriptionstyle = {
  margin: 0,
  fontSize: 16,
  padding: 0
}

export default Day;
