import InitialConfigForm from "./InitialConfigForm";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import WalletInitialMessage from "./WalletInitialMessage";

function InitialConfigModal() {
  const [showModal, setShowModal] = useState(true);
  const [step, setStep] = useState(1);

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        {step === 1 ? (
          <WalletInitialMessage onStepComplete={() => setStep(2)} />
        ) : (
          <InitialConfigForm onStepComplete={() => setShowModal(false)} />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default InitialConfigModal;
