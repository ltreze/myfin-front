import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const MyModal = ({ show, handleClose, handleChangePoints, handleChangeDescription, handleChangeTitle, note }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>
        <input type="text" defaultValue={note.title} onChange={handleChangeTitle.bind(note)} />
      </Modal.Title>
    </Modal.Header>
     <Container>
          <Row>
            <Col xs={12} md={12}>
              <input type="text" defaultValue={note.description} onChange={handleChangeDescription.bind(note)} />
            </Col>
            <Col xs={6} md={4}> 
              <input type="text" defaultValue={note.points} onChange={handleChangePoints.bind(note)} />
            </Col>
          </Row>
        </Container>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
);

export default MyModal;
