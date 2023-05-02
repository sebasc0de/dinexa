import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "./Form";
import Offcanvas from "react-bootstrap/Offcanvas";

// Project imports
import { SupabaseRepository } from "../../modules/spend/infraestructure/SupabaseRepository";

function Example() {
  // Modal state
  const [show, setShow] = useState(false);

  // Repository
  const repository = SupabaseRepository();

  return (
    <>
      <Button className="dinexa-button" onClick={() => setShow(true)}>
        New earning
      </Button>

      <Offcanvas
        backdropClassName="simple-modal"
        placement="end"
        show={show}
        onHide={() => setShow(false)}
      >
        <Offcanvas.Header closeButton className="simple-modal--header">
          <Offcanvas.Title className="title--2">
            Create a new earning
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
