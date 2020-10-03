import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const MyModal = ({ show, handleClose, handleChange, note }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{note.title}</Modal.Title>
    </Modal.Header>
    {/* <Modal.Body>{description}</Modal.Body>
     */}
     <Container>
          <Row>
            <Col xs={12} md={12}>
              <input type="text" defaultValue={note.description} />
            </Col>
            <Col xs={6} md={4}> 
              <input type="text" defaultValue={note.points} onChange={handleChange.bind(note)} />
            </Col>
          </Row>
          {/* <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row> */}
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
