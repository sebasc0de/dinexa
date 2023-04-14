import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Project imports
import { v4 as uuid } from "uuid";
import { useField } from "../../hooks/useField";
import { Repository } from "../../modules/moneyMovement/application/Repository";
import { create as CreateMoneyMovement } from "../../modules/moneyMovement/application/Service";

// Redux
import { setMoneyMovement } from "../../redux/slices/moneyMovement-slice";
import { useAppDispatch } from "../../redux/hooks";
import { MoneyMovement } from "../../types";

function BasicExample({ repository }: { repository: Repository }) {
  const dispatch = useAppDispatch();

  const { inputValue, onChangeHandler } = useField<MoneyMovement>({
    category: "",
    id: uuid(),
    name: "",
    total: "",
  });

  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const create = await CreateMoneyMovement(repository, inputValue);
    create && dispatch(setMoneyMovement(inputValue));
  };

  return (
    <Form className="cofi-form" onSubmit={(e) => onSubmitHandler(e)}>
      {/* Name */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          name="name"
          autoComplete="off"
          onChange={(e) => onChangeHandler(e.target as any)}
          type="text"
        />
      </Form.Group>

      {/* Amount - total */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Total:</Form.Label>
        <Form.Control
          name="total"
          autoComplete="off"
          onChange={(e) => onChangeHandler(e.target as any)}
          type="text"
        />
      </Form.Group>

      {/* Category */}
      <Form.Label>Category:</Form.Label>
      <Form.Select
        onChange={(e) => onChangeHandler(e.target as any)}
        className="mb-3"
        autoComplete="off"
        name="category"
        aria-label="Default select example"
      >
        <option>Select category</option>
        <option value="food">Food</option>
        <option value="videogames">Videogames</option>
        <option value="streaming">Streaming</option>
      </Form.Select>

      <Button className="cofi-button" type="submit">
        Save spend
      </Button>
    </Form>
  );
}

export default BasicExample;