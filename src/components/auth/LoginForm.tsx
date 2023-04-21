import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Auth imports
import { AuthLoginData } from "../../types";
import { login } from "../../modules/auth/application/Service";
import { SupabaseRepository } from "../../modules/auth/infraestructure/SupabaseRepository";
import { useField } from "../../hooks/useField";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { setUserSession } from "../../redux/slices/auth-slice";

// Supabase repository
const repository = SupabaseRepository();

function LoginForm() {
  const dispatch = useAppDispatch();

  const { values, onChangeHandler } = useField<AuthLoginData>({
    email: "",
    password: "",
  });

  const submitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const loginUser = await login(repository, values);
    loginUser && dispatch(setUserSession(loginUser));
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

      <Button className="cofi-button w-100" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
