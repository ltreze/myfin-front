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
    e.dataTransfer.setData("text", e.target.id);
  }

  render() {
    return (
      <li
        id={"SOURCE_"+this.props.id+this.props.idParent}
        className="notes"
        key={this.props.index}
        onDragStart={this.onDragStart}
        draggable="true"
      >
        <div>
          <Button
            variant="secondary"
            onClick={this.handleShow}
            className="note"
          >
            <h3 className="title">{this.props.note.title}</h3>
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
