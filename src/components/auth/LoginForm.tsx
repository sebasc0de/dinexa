import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Auth imports
import { AuthLoginData } from "../../types";
import { login } from "../../modules/auth/application/Service";
import { useField } from "../../hooks/useField";

// Redux
import { Repository } from "../../modules/auth/application/Repository";
import { setUserSession } from "../../redux/slices/auth-slice";
import { useAppDispatch } from "../../redux/hooks";
import { useRouter } from "next/router";

function LoginForm({ repository }: { repository: Repository }) {
  // Redux dispatch
  const dispatch = useAppDispatch();

  // Next router
  const router = useRouter();

  const { values, onChangeHandler } = useField<AuthLoginData>({
    email: "",
    password: "",
  });

  const submitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    try {
      const loginUser = await login(repository, values);

      if (loginUser) {
        dispatch(setUserSession(loginUser));
        router.push("dashboard");
      }
    } catch (e) {
      console.log(e);
    }
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

      <Button className="dinexa-button w-100" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
