import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "./Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAppSelector } from "../../redux/hooks";
import { Alert } from "react-bootstrap";

function Example() {
  // Redux
  const { user } = useAppSelector((state) => state.auth);
  const { savingPercentage } = useAppSelector((state) => state.wallet.settings);

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

          {/* Show message if saving percentage is not configured */}
          {/* {!savingPercentage && (
            <Alert variant="warning" className="mt-3 text-sm">
              Set your saving percentage so that Dinexa automatically saves your
              savings in your wallet.
            </Alert>
          )} */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
