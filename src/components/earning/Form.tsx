import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Project imports
import { v4 as uuid } from "uuid";
import { useField } from "../../hooks/useField";

// Redux
import { Earning } from "../../types";
import { ToastContainer } from "react-toastify";
import { create } from "../../modules/earning/application/ReduxService";

function BasicExample() {
  const { values, onChangeHandler } = useField<Earning>({
    id: uuid(),
    name: "",
    total: 0,
  });

  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    create(values);

    // Validate

    // Create spend in redux store

    // Update wallet
  };

  return (
    <Form className="dinexa-form" onSubmit={(e) => onSubmitHandler(e)}>
      <ToastContainer toastClassName="cofi-toast" position="bottom-left" />

      {/* Name */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          name="name"
          autoComplete="off"
          onChange={onChangeHandler}
          type="text"
        />
      </Form.Group>

      {/* Amount - total */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Total:</Form.Label>
        <Form.Control
          name="total"
          autoComplete="off"
          onChange={onChangeHandler}
          type="text"
        />
      </Form.Group>

      <Button
        style={{ borderRadius: "50px" }}
        className="dinexa-button"
        type="submit"
      >
        Save earning
      </Button>
    </Form>
  );
}

export default BasicExample;
