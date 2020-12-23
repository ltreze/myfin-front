import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import MyModal from "../MyModal/MyModal";
import "./style.css";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      setShow: false
    }
    this.onDragStart = this.onDragStart.bind(this)
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  getHour = (date) => new Date(date).getHours();

  onDragStart(e) {
    e.dataTransfer.setData("id", e.target.id);
    e.dataTransfer.setData("points", this.props.note.points);
  }

  handleChangePoints(e){
    e.preventDefault();
    e.stopPropagation();
    const novoValor = e.target.value;
    this.setPoints(novoValor)
  }

  handleChangeDescription(e){
    e.preventDefault();
    e.stopPropagation();
    const novoValor = e.target.value;
    this.setDescription(novoValor)
  }

  handleChangeTitle(e){
    e.preventDefault();
    e.stopPropagation();
    const novoValor = e.target.value;
    this.setTitle(novoValor)
  }

  render() {
    return (
      <li 
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
            <h3 className="title">{this.props.note.title}</h3>
          </Button>

          <MyModal
            show={this.state.show}
            handleClose={this.handleClose}
            handleChangePoints={this.handleChangePoints}
            handleChangeDescription={this.handleChangeDescription}
            handleChangeTitle={this.handleChangeTitle}

            note={this.props.note}
          />
        </div>
      </li>
    );
  }
}

export default Note;
