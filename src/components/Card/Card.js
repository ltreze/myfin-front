import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import MyModal from "../MyModal";
import "./style.css";

class Card extends Component {
  
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
        <div className="date-schedule">
          {this.getHour(this.props.card.dateScheduled)}
          </div>
        <Button variant="secondary" onClick={this.handleShow} className="cardd">
          <h3 className="title">{this.props.card.title}</h3>
        </Button>

        <MyModal
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.props.card.title}
          description={this.props.card.description}
        />
      </>
    );
  }
}

export default Card;
