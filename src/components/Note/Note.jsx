import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import MyModal from "../MyModal";
import "./style.css";

class Note extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      show: false,
      setShow: false
    }
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  getHour = date => new Date(date).getHours();
  
  render() {
    return (
      <>
        <Button variant="secondary" onClick={this.handleShow} className="note">
          <h3 className="title">{this.props.note.title}</h3>
        </Button>

        <MyModal
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.props.note.title}
          description={this.props.note.description}
        />
      </>
    );
  }
}

export default Note;
