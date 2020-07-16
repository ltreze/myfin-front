import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import MyModal from './myModal'

const Card = ({ card }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <h3>{card.description}</h3>
      </Button>

      <MyModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Card;
