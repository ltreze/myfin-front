import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import MyModal from './myModal'

const cardstyle = {
  height: "150px"
}

const Card = ({ card }) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} style={cardstyle}>
        <h3>{card.title}</h3>
      </Button>

      <MyModal 
        show={show} 
        handleClose={handleClose} 
        title={card.title} 
        description={card.description} />
    </>
  );
};

export default Card;
