import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import WalletInitialMessage from "./WalletInitialMessage";

function InitialConfigModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body>
        {/* Initial message */}
        <WalletInitialMessage />

        {/* Wallet form */}
      </Modal.Body>
    </Modal>
  );
}

export default InitialConfigModal;
