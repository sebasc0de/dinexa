import { SyntheticEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "../../../../components/Toast/index";

// Project imports
import { useField } from "../../../../hooks/useField";
import { MoneyMovement } from "../../../../types";

// Redux
import { setMoneyMovement } from "../../../../redux/slices/moneyMovement-slice";
import { useAppDispatch } from "../../../../redux/hooks";

function BasicExample() {
  const [showToast, setShowToast] = useState(false);

  const { inputValue, onChangeHandler } = useField<MoneyMovement>({
    category: "",
    id: uuid(),
    name: "",
    total: 0,
  });

  const dispatch = useAppDispatch();

  const onSubmitHandler = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(setMoneyMovement(inputValue));

    setShowToast(true);
  };

  return (
    <Form onSubmit={(e) => onSubmitHandler(e)}>
      <Toast
        title="Data loaded"
        text="Refresh the page to view new data"
        show={showToast}
        setShow={setShowToast}
      />
      {/* Name */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          name="name"
          onChange={(e) => onChangeHandler(e.target as any)}
          type="text"
        />
      </Form.Group>

      {/* Amount - total */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Total:</Form.Label>
        <Form.Control
          name="total"
          onChange={(e) => onChangeHandler(e.target as any)}
          type="text"
        />
      </Form.Group>

      {/* Category */}
      <Form.Label>Category:</Form.Label>
      <Form.Select
        onChange={(e) => onChangeHandler(e.target as any)}
        className="mb-3"
        name="category"
        aria-label="Default select example"
      >
        <option>Select category</option>
        <option value="food">Food</option>
        <option value="videogames">Videogames</option>
        <option value="streaming">Streaming</option>
      </Form.Select>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
