import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function RegisterForm() {
  return (
    <Form className="cofi-form ">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control autoFocus type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password:</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Button className="cofi-button w-100" type="submit">
        Create account
      </Button>
    </Form>
  );
}
