import { Col, Row } from "react-bootstrap";
import { List } from "../UI/List";
import { listTitle, data } from "../../data/loginModal.json";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RegisterForm from "./RegisterForm";

function registerModal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className="dinexa-button" onClick={() => setModalShow(true)}>
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
          <Modal.Title className="title--2" id="contained-modal-title-vcenter">
            Create account
          </Modal.Title>
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
