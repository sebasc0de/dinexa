import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Project imports
import { v4 as uuid } from "uuid";
import { useField } from "../../hooks/useField";
import { Repository } from "../../modules/spend/application/Repositories";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { Spend } from "../../types";
import { ToastContainer } from "react-toastify";
import { create } from "../../modules/spend/application/ReduxService";

function BasicExample({ repository }: { repository: Repository }) {
  const dispatch = useAppDispatch();

  const { values, onChangeHandler } = useField<Spend>({
    category: "",
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

    // Repository
    // const create = await CreateMoneyMovement(repository, inputValue);
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

      {/* Category */}
      <Form.Label>Category:</Form.Label>
      <Form.Select
        onChange={onChangeHandler}
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

      <Button
        style={{ borderRadius: "50px" }}
        className="dinexa-button"
        type="submit"
      >
        Save spend
      </Button>
    </Form>
  );
}

export default BasicExample;
