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
      notas: []
    };
    this._novasNotas = this._novasNotas.bind(this)
  }

  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas)
  }

  _novasNotas(notas){
    console.log(notas)
    this.setState({...this.state, notas})
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
    this.state.notas.forEach((e)=>{console.log(e.title)})
    return (
      <li id={this.props.id} className="backlog">
        <h2 className="description">Backlog</h2>
        <button
          style={this.state.showNewNoteInput ? hide : show}
          className="header_coisa"
          onClick={this._addNote.bind(this)}
        >
          Add
        </button>
        <NewNoteInput
          show={this.state.showNewNoteInput}
          criarNota={this.props.criarNota}
          hide={this._hide.bind(this)}
        />
        <ul id="NOTAS_DO_BACKLOG">
          {this.state.notas.map((item, index) => (
            <Note note={item} key={index} />            
          ))}
        </ul>
      </li>
    );
  }
}

export default Backlog;
