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
      backlogNotes: [],
    };
    this._novasNotas = this._novasNotas.bind(this);
  }

  _novasNotas(backlogNotes) {
    this.setState({ ...this.state, backlogNotes });
  }

  componentDidMount() {
    this._novasNotas(this.props.backlogNotesProp.itens);
    this.props.backlogNotesProp.inscrever(this._novasNotas);
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

  render() {
    //console.log(this.props)
    return (
      <li id={this.props.id} className="backlog">
        <h2 className="description">Backlog</h2>
        <div className="backlog_botoes">
          <button
            style={this.state.showNewNoteInput ? hide : show}
            className="header_coisa"
            onClick={this._addNote.bind(this)}
          >
            Add
          </button>
          <NewNoteInput
            show={this.state.showNewNoteInput}
            criarNota={this.props.addNoteProp}
            hide={this._hide.bind(this)}
          />
        </div>
        <div>
          <ul id="NOTAS_DO_BACKLOG">
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
