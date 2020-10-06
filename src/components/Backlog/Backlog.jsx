import React, { Component } from "react";
import Note from "../Note";
import NewNoteInput from "../NewNoteInput";
import "./style.css";
import Button from "react-bootstrap/Button";

class Backlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewNoteInput: false,
      backlogNotes: [],
    };
    this._newNotes = this._newNotes.bind(this);
    this._tellBacklogThatNoteWasAddedToIt = this._tellBacklogThatNoteWasAddedToIt.bind(
      this
    );
    this._onDrop = this._onDrop.bind(this);
  }

  _newNotes(backlogNotes) {
    this.setState({ ...this.state, backlogNotes });
  }

  componentDidMount() {
    this._newNotes(this.props.backlogNotesProp.itens);
    this.props.backlogNotesProp.inscrever(this._newNotes);
  }

  _addNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      showNewNoteInput: true,
    });
  }

  _hide() {
    this.setState({
      showNewNoteInput: false,
    });
  }

  _tellBacklogThatNoteWasAddedToIt(noteId) {
    console.log("this.props.backlogNotesProp");
    console.log(this.props.backlogNotesProp);
    this.props.backlogNotesProp.putOnBacklog(noteId);
    // this.state.backlogNotes.forEach((note) => {
    //   if (note.id == noteId) {
    //     //console.log('app JSnote');
    //     //console.log(note);
    //     note.setIsBacklog(false)
    //     note.setWeekDay(weekDay)
    //   }
    // })
  }

  _onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const noteId = e.dataTransfer.getData("text");
    const noteElement = document.getElementById(noteId);

    if (e.currentTarget.id.startsWith("NOTAS_DO_BACKLOG")) {
      e.currentTarget.appendChild(noteElement);
    } else if (e.currentTarget.id.startsWith("backlog")) {
      e.currentTarget.children[1].appendChild(noteElement);
    } else if (e.currentTarget.id.startsWith("h2-")) {
      console.log("soltou em cima do h2");
      console.log(e.currentTarget);
      e.currentTarget.parentElement.children[1].appendChild(noteElement);
    }
    console.log("noteId");
    console.log(noteId);
    this._tellBacklogThatNoteWasAddedToIt(noteId);
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    //console.log(this.props)
    return (
      <li
        className="backlog"
        id="backlog"
        onDrop={this._onDrop}
        onDragOver={this.onDragOver}
      >
        <h2
          className="description"
          id={"h2-"}
          onDrop={this._onDrop}
          onDragOver={this.onDragOver}
        >
          Backlog
        </h2>

        <div>
          <ul
            id="NOTAS_DO_BACKLOG"
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
          >
            <Button
              style={this.state.showNewNoteInput ? hide : show}
              // className="backlog_newnoteinput"
              className="backlog_fakenote"
              onClick={this._addNote.bind(this)}
            >
              + Add Note
            </Button>
            <NewNoteInput
              show={this.state.showNewNoteInput}
              criarNota={this.props.addNoteProp}
              hide={this._hide.bind(this)}
            />
            {this.state.backlogNotes.map((item) => (
              <Note note={item} key={item.id} id={item.id} />
            ))}
          </ul>
        </div>
      </li>
    );
  }
}

export default Backlog;

const show = {
  display: "inline-block",
};
const hide = {
  display: "none",
};
