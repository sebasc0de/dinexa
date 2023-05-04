import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Categories from "./CategoriesSelector";

// Project imports
import { v4 as uuid } from "uuid";
import { useField } from "../../hooks/useField";

// Spend categories
import { SupabaseRepository } from "../../modules/spend_category/infraestructure/SupabaseRepository";

// Redux
import { Spend } from "../../types";
import { create } from "../../modules/spend/infraestructure/ReduxRepository";

// Spend categories repository
const repository = SupabaseRepository();

function BasicExample({ user_id }: { user_id: string }) {
  // Form hook
  const { values, onChangeHandler } = useField<Spend>({
    category: "",
    id: uuid(),
    name: "",
    total: 0,
    user_id,
  });

  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    create(values);

    // Validate
  };

  return (
    <Form className="dinexa-form" onSubmit={(e) => onSubmitHandler(e)}>
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

      {/* Spend categories */}
      <Categories repository={repository} onChangeHandler={onChangeHandler} />

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
