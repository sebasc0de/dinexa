import MessageOne from "../UI/Messages/MessageOne";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import WalletForm from "./Form";
import SavingStylesSelector from "./SavingStylesSelector";
import SavingStylesResume from "./SavingStylesResume";
import { Button } from "react-bootstrap";

function InitialConfigModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MessageOne
        imgUrl="/wallet/Wallet_config.gif"
        title="Set up your wallet now"
        subtitle="Configure your wallet preferences"
        buttonText="Set up now!"
        buttonAction={handleShow}
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Configuration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SavingStylesSelector />
          <WalletForm />
        </Modal.Body>
        <Modal.Footer>
          <Button className="dinexa-button w-100">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InitialConfigModal;
