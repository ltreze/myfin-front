import React from "react";
import Card from "./card";

const daystyle = {
  verticalAlign: "top", 
  display: "inline-block", 
  padding: 16, 
  border: 1, 
  borderColor: "black", 
  borderStyle: "solid"
}

const List = ({ list }) => (
  <li style={daystyle}>
    <h2>{list.description}</h2>
    <ul>
      {list.cards.map(item => (
        <li>
          <Card card={item}/>
        </li>
      ))}
    </ul> 
  </li>
);

export default List;
