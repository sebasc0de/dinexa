import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "./Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAppSelector } from "../../redux/hooks";

function Example() {
  const { user } = useAppSelector((state) => state.auth);

  // Modal state
  const [show, setShow] = useState(false);

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
          {user && <Form user_id={user.id} />}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
