import React, { Component } from "react";
import "./style.css";

const show = {
  fontSize: "20px",
  display: "block"
}
const hide = {
  fontSize: "20px",
  display: "none"
}

class NewNoteInput extends Component {

  foo(show){
    console.log('show');
    console.log(show);

    return { color: "red" }
  }
//style={this.foo(this.props.show)} 
  render() {
    return (
      <input type="text" style={this.props.show ? show : hide} placeholder="text here" />
    );
  }
}

export default NewNoteInput;
