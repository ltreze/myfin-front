import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import MyModal from "../../myModal";
import "./style.css";

const Card = ({ card }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="date-schedule">
        {getHour(card.dateScheduled)}
        </div>
      <Button variant="secondary" onClick={handleShow} 
      className="cardd">
        <h3 className="title">{card.title}</h3>
      </Button>

      <MyModal
        show={show}
        handleClose={handleClose}
        title={card.title}
        description={card.description}
      />
    </>
  );
};

function getHour(date) {
  return new Date(date).getHours();
}

export default Card;
