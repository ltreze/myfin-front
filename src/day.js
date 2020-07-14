import React from "react";
import Card from "./card";

function formatDate(day){
  return day.day + "/" + day.month.toString().padStart(2, '0') + "/" + day.year;
}

const Day = ({ day }) => (
  <div>
    <h2>{formatDate(day)}</h2>
      <ul>
        {day.cards.map(item => (
          <li>
            <Card card={item}/>
          </li>
        ))}
      </ul>
  </div>
);

export default Day;
