import { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "../../../../components/Toast/index";

// Project imports
import Service from "../Service";
import { Repository } from "../Repository";

function BasicExample({ repository }: { repository: Repository }) {
  const [showToast, setShowToast] = useState(true);

  const service = new Service(repository);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    service.create({
      category: "Comida",
      id: 2,
      name: "Papas fritas",
      total: 231,
    });
  };

  return (
    <Form onSubmit={(e) => onSubmitHandler(e)}>
      <Toast
        title="Hello world"
        text="dsa"
        show={showToast}
        setShow={setShowToast}
      />
      {/* Name */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      {/* Amount - total */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Total:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      {/* Category */}
      <Form.Label>Category:</Form.Label>
      <Form.Select className="mb-3" aria-label="Default select example">
        <option>Select category</option>
        <option value="1">Food</option>
        <option value="2">Videogames</option>
        <option value="3">Streaming</option>
      </Form.Select>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
