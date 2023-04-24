import React, { useState } from "react";
import { Container, Row, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function InitialConfigModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Image
            src="/wallet/Wallet_config.gif"
            style={{ maxWidth: "500px" }}
            alt=""
          />
          <h3 className="text-center title--2">Configure your wallet now</h3>
          <p className="desc text-center text-lg">Message here</p>
          <Button className="cofi-button mt-3" onClick={handleShow}>
            Set up now!
          </Button>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InitialConfigModal;
