import React, { Component } from "react";
import Note from "../Note";
import NewNoteInput from "../NewNoteInput";
import "./style.css";

const show = {
  fontSize: "20px",
  display: "block",
};
const hide = {
  fontSize: "20px",
  display: "none",
};

class Backlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewNoteInput: false,
    };
  }

  _addNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      showNewNoteInput: true,
    });
  }

  render() {
    return (
      <li className="backlog">
        <h2 className="description">Backlog</h2>
        <button style={this.state.showNewNoteInput ? hide : show} className="header_coisa" onClick={this._addNote.bind(this)}>Add</button>
        <NewNoteInput 
          show={this.state.showNewNoteInput} 
          addNoteToBacklog={this.props.addNoteToBacklog.bind(this)}
          />
        <ul>
          {this.props.backlog.map((item, index) => (
            <li className="notes" key={index}>
              <Note note={item} />
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default Backlog;
