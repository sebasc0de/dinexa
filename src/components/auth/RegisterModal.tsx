import { Col, Row } from "react-bootstrap";
import { List } from "../UI/List";
import { listTitle, data } from "../../data/loginModal.json";
import { RegisterForm } from "./RegisterForm";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function registerModal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className="cofi-button" onClick={() => setModalShow(true)}>
        Start now
      </Button>

      <Modal
        show={modalShow}
        size="lg"
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="p-3">
            <Col className="d-none d-lg-block" lg={6}>
              <List data={data} listTitle={listTitle} />
            </Col>
            <Col lg={6}>
              <RegisterForm />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default registerModal;
