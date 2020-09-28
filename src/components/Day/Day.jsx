import React, { Component } from "react";
import Note from "../Note";
import "./style.css";

class Day extends Component {
  onDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const element = document.getElementById(data);
    if (e.currentTarget.id.startsWith('lista-de-notas')) {
      e.currentTarget.appendChild(element);
    } else if (e.currentTarget.id.startsWith('dia')){
      e.currentTarget.children[1].appendChild(element);
    }
  }

  onDragOver(e){
    e.preventDefault();
  }

  render() {
    //console.log(this.props.dayProp)
    return (
      <li className="day" id={"dia_" + this.props.id} onDrop={this.onDrop} onDragOver={this.onDragOver} >
        <h2 className="description">
          {this.props.dayProp.numberDay}
        </h2>
        <ul className="ul_notas" id={"lista-de-notas-" + this.props.id} onDrop={this.onDrop} onDragOver={this.onDragOver} >
          {this.props.dayProp.map((item) => (
            <Note note={item} key={item.id} id={item.id} idParent={this.props.id}
            />
          ))}
        </ul>
      </li>
    );
  }
}

export default Day;
