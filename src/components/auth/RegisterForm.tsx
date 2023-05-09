import { SyntheticEvent, useEffect, useState } from "react";
import { HaveAccountButton } from "./HaveAccountButton";
import { useField } from "../../hooks/useField";
import { useRouter } from "next/router";
import ButtonWithLoader from "../UI/Buttons/ButtonWithLoader";
import Form from "react-bootstrap/Form";

// Types
import { AuthRegisterData } from "../../types";

// Application layer
import { create } from "../../modules/auth/application/Service";
import { Repository } from "../../modules/auth/application/Repository";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { setUserSession } from "../../redux/slices/auth-slice";
import { ensurePasswordIsValid } from "../../modules/auth/domain/ensurePasswordIsValid";

function RegisterForm({ repository }: Props) {
  // Button loading state
  const [loading, setLoading] = useState(false);

  // Password match
  const [error, setError] = useState({
    state: false,
    msg: "",
  });

  // Redux dispatch
  const dispatch = useAppDispatch();

  // Router
  const router = useRouter();

  // Form hook
  const { values, onChangeHandler } = useField<AuthRegisterData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    // Validate password
    const ensurePassword = ensurePasswordIsValid(
      values.password,
      values.confirmPassword
    );

    setError({ state: ensurePassword.isValid, msg: ensurePassword.message });

    if (ensurePassword.isValid) {
      // Loading state in true
      setLoading(true);

      try {
        const createUser = await create(repository, values);

        if (createUser) {
          setLoading(false);
          dispatch(setUserSession(createUser));
          router.push("/get-started");
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Form onSubmit={submitHandler} className="dinexa-form">
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

        {/* Password confirmation message */}
        <small className="text-danger d-block mt-1">{error.msg}</small>
      </Form.Group>

      <ButtonWithLoader loading={loading} className="w-100" type="submit">
        Create account
      </ButtonWithLoader>

      <HaveAccountButton />
    </Form>
  );
}

interface Props {
  repository: Repository;
}

export default RegisterForm;
