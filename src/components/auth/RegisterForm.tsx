import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegisterForm() {
  return (
    <Form className="cofi-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm password:</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Button className="cofi-button" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegisterForm;
