import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import MyModal from "../MyModal";
import "./style.css";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      setShow: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  getHour = (date) => new Date(date).getHours();

  onDragStart(e) {
    console.log('comecou a arrastar: ' + e.target.id)
    e.dataTransfer.setData("text", e.target.id);
  }

  render() {
    //console.log(this.props)
    return (
      <li //list item encapsulate a note
        id={this.props.id}
        className="notes"
        key={this.props.index}
        onDragStart={this.onDragStart}
        draggable="true"
      >
        <div aria-label="note">
          <Button
            variant="secondary"
            onClick={this.handleShow}
            className="note"
          >
            <h3 className="title">{this.props.note.title }</h3>
          </Button>

          <MyModal
            show={this.state.show}
            handleClose={this.handleClose}
            title={this.props.note.title}
            description={this.props.note.description}
          />
        </div>
      </li>
    );
  }
}

export default Note;
