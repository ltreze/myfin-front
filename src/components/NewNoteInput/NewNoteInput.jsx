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
  // _blur() {
  //   if (this.props.show) {
  //     console.log("perdi o foco")
  //   }
  // }
  _handleEventoInput(e) {
    if (e.key === "Enter") {
      let title = e.target.value;
      this.props.addNoteToBacklog(title);
    }
  }
  render() {
    return (
      <input
        type="text"
        style={this.props.show ? show : hide}
        placeholder="text here" 
        // onBlur={this._blur()}
        onMouseDown={()=>console.log("fui clicado")}
        onKeyUp={this._handleEventoInput.bind(this)}
      />
    );
  }
}

export default NewNoteInput;
