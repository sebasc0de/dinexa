import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Auth imports
import { AuthRegisterData } from "../../types";
import { create } from "../../modules/auth/application/Service";
import { SupabaseRepository } from "../../modules/auth/infraestructure/SupabaseRepository";
import { useField } from "../../hooks/useField";

// Supabase repository
const repository = SupabaseRepository();

function RegisterForm() {
  const { values, onChangeHandler } = useField<AuthRegisterData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const createUser = await create(repository, values);
  };

  return (
    <Form onSubmit={submitHandler} className="cofi-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" onChange={onChangeHandler} type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          onChange={onChangeHandler}
          type="password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm password:</Form.Label>
        <Form.Control
          name="confirmPassword"
          onChange={onChangeHandler}
          type="password"
        />
      </Form.Group>

      <Button className="cofi-button" type="submit">
        Create account
      </Button>
    </Form>
  );
}

export default RegisterForm;
