import { SyntheticEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "../../../../components/Toast/index";

// Project imports
import { useField } from "../../../../hooks/useField";
import { Repository } from "../Repository";
import Service from "../Service";

// Redux
import { setMoneyMovement } from "../../../../redux/slices/moneyMovement-slice";
import { useAppDispatch } from "../../../../redux/hooks";
import { MoneyMovement } from "../../../../types";

function BasicExample({ repository }: { repository: Repository }) {
  const service = new Service(repository);

  const [showToast, setShowToast] = useState(false);

  const { inputValue, onChangeHandler } = useField<MoneyMovement>({
    category: "",
    id: "",
    name: "",
    total: "",
  });

  const dispatch = useAppDispatch();

  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const create = await service.create(inputValue);

    create && dispatch(setMoneyMovement(inputValue));

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
