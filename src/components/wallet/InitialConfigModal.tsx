import InitialConfigForm from "./InitialConfigForm";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import WalletInitialMessage from "./WalletInitialMessage";

function InitialConfigModal({ walletInitialized }: Props) {
  const [showModal, setShowModal] = useState(walletInitialized);
  const [step, setStep] = useState(1);

  return (
    <Modal
      show={!showModal}
      onHide={() => setShowModal(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        {step === 1 ? (
          <WalletInitialMessage onStepComplete={() => setStep(2)} />
        ) : (
          <InitialConfigForm />
        )}
      </Modal.Body>
    </Modal>
  );
}

interface Props {
  walletInitialized: boolean;
}

export default InitialConfigModal;
