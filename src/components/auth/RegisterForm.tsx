import { SyntheticEvent, useState } from "react";
import Form from "react-bootstrap/Form";

// Auth imports
import { AuthRegisterData } from "../../types";
import { create } from "../../modules/auth/application/Service";
import { SupabaseRepository } from "../../modules/auth/infraestructure/SupabaseRepository";
import { useField } from "../../hooks/useField";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { setUserSession } from "../../redux/slices/auth-slice";
import { HaveAccountButton } from "./HaveAccountButton";
import ButtonWithLoader from "../UI/Buttons/ButtonWithLoader";
import { useRouter } from "next/router";

// Supabase repository
const repository = SupabaseRepository();

function RegisterForm() {
  // Button loading state
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      const createUser = await create(repository, values);

      if (createUser) {
        setLoading(false);
        dispatch(setUserSession(createUser));
        router.push("/get-started");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
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
      </Form.Group>

      <ButtonWithLoader loading={loading} className="w-100" type="submit">
        Create account
      </ButtonWithLoader>

      <HaveAccountButton />
    </Form>
  );
}

export default RegisterForm;
