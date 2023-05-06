import InitialConfigForm from "./InitialConfigForm";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import WalletInitialMessage from "./WalletInitialMessage";
import { useAppSelector } from "../../redux/hooks";
import SupabaseRepository from "../../modules/wallet/infraestructure/SupabaseRepository";

function InitialConfigModal() {
  // User
  const { user } = useAppSelector((state) => state.auth);

  // Repository
  const repository = SupabaseRepository();

  // Modal states
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
          user && (
            <InitialConfigForm
              repository={repository}
              user_id={user.id}
              onStepComplete={() => setShowModal(false)}
            />
          )
        )}
      </Modal.Body>
    </Modal>
  );
}

export default InitialConfigModal;
