import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function InitialConfigModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body>
        I will not close if you click outside me. Don't even try to press escape
        key.
      </Modal.Body>
    </Modal>
  );
}

export default InitialConfigModal;
