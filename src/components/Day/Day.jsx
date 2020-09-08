import React, { Component } from "react";
import Note from "../Note";
import NewNoteInput from "../NewNoteInput"
import "./style.css";

class Day extends Component {

  constructor(props){
    super(props);
    this.state = {
      showNewNoteInput: false
    }
  }

  _addNote(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.addNote(this.props.day.numberDay);
    const showNewNoteInputTrue = {
      showNewNoteInput: true
    }
    this.setState(showNewNoteInputTrue);
  }

  render() {
    return (
      <li className="day">
        <h2 className="description">{this.props.day.numberDay}</h2>
        <button onClick={this._addNote.bind(this)}>Add</button>
        <ul>
          {this.props.day.notes.map((item, index) => (
            <li className="notes" key={index}>
              <Note noteProps={item} />
            </li>
          ))}
        </ul>
        <NewNoteInput show={this.state.showNewNoteInput}/>
      </li>
    );
  }
}

export default Day;
