import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import MyModal from './myModal'

const Card = ({ card }) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={datescheduletstyle}>{getHour(card.dateScheduled)}</div>
      <Button variant="secondary" onClick={handleShow} style={cardstyle}>
        <h3 style={titlestyle}>{card.title}</h3>
      </Button>

      <MyModal 
        show={show} 
        handleClose={handleClose} 
        title={card.title} 
        description={card.description} />
    </>
  );
};

function getHour(date){
  return new Date(date).getHours()
}

const cardstyle = {
  height: "70px",
  width: "160px",
  margin: 0
}
const titlestyle = {
  fontSize: 13
}
const datescheduletstyle = {
  float: "left"
}

export default Card;
