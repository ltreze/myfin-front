import React, { Component } from "react";
import Note from "../Note";
import "./style.css";

class Day extends Component {

  constructor(){
    super()
    this.state = { notes: [] }
    this._novasNotas = this._novasNotas.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  _novasNotas(notes){
    this.setState({...this.state, notes})
  }

  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const noteId = e.dataTransfer.getData("text");
    const noteElement = document.getElementById(noteId);

    if (e.currentTarget.id.startsWith('ul-lista-de-notas')) {
      e.currentTarget.appendChild(noteElement);
    } else if (e.currentTarget.id.startsWith('dia')){
      e.currentTarget.children[1].appendChild(noteElement);
    } else if (e.currentTarget.id.startsWith('h2-')){
      console.log('soltou em cima do h2')
      console.log(e.currentTarget)
      e.currentTarget.parentElement.children[1].appendChild(noteElement)
    }
    this.props.tellWeekNoteWasAddedToThisDay(noteId, this.props.weekDay)
  }

  onDragOver(e){
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    //console.log(this.props.notesProp)
    return (
      <li 
        className="day" 
        id={"dia_" + this.props.weekDay}
        onDrop={this.onDrop} 
        onDragOver={this.onDragOver} >
        <h2 
          className="day_description"
          id={"h2-" + this.props.weekDay}
          onDrop={this.onDrop} 
          onDragOver={this.onDragOver}>
          {this.props.weekDay} - {this.props.notesOfThisDay.numberDay}
        </h2>
        <ul 
          className="ul_notas" 
          id={"ul-lista-de-notas-" + this.props.weekDay} 
          onDrop={this.onDrop} 
          onDragOver={this.onDragOver} >
          {this.props.notesOfThisDay.map((item) => (
            <Note note={item} key={item.id} id={item.id} idParent={this.props.id} 
            />
          ))}
        </ul>
      </li>
    );
  }
}

export default Day;
