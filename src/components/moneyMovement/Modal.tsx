import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "./Form";

// Project imports
import { SupabaseRepository } from "../../modules/moneyMovement/infraestructure/SupabaseRepository";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const repository = SupabaseRepository();

  return (
    <>
      <Button
        className="cofi-button"
        style={{ borderRadius: "50px" }}
        onClick={handleShow}
      >
        Create spend
      </Button>

      <Offcanvas
        backdropClassName="simple-modal"
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header className="simple-modal--header">
          <Offcanvas.Title className="title--2">
            Create a custom spend
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="simple-modal--body">
          <Form repository={repository} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
