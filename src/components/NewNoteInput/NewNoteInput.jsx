import React, { Component } from "react";
import "./style.css";

const show = {
  fontSize: "20px",
  display: "block",
};
const hide = {
  fontSize: "20px",
  display: "none",
};

class NewNoteInput extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidUpdate(){
    this.myRef.current.focus()
  }

  _blur(e) {
    if (this.props.show) {
      if (!e.target.value) {
        this.props.hide()
      } else {
        this._add(e)
      }
    }
  }

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      this._add(e)
    }
  }

  _add(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(' NewNoteInput esta chamando criarNota  ')
    this.props.criarNota(e.target.value);
    e.target.value = ''
    this.props.hide()
  }


  render() {
    return (
      <input
        ref={this.myRef}
        type="text"
        style={this.props.show ? show : hide}
        placeholder="text here" 
        onBlur={this._blur.bind(this)}
        onKeyUp={this._handleEventoInput.bind(this)}
      />
    );
  }
}

export default NewNoteInput;
