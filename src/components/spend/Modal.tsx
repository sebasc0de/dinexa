import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "./Form";
import Offcanvas from "react-bootstrap/Offcanvas";

function Example() {
  // Modal state
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="dinexa-button" onClick={() => setShow(true)}>
        New spend
      </Button>

      <Offcanvas
        backdropClassName="simple-modal"
        placement="end"
        show={show}
        onHide={() => setShow(false)}
      >
        <Offcanvas.Header closeButton className="simple-modal--header">
          <Offcanvas.Title className="title--2">
            Create a custom spend
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="simple-modal--body">
          <Form />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
