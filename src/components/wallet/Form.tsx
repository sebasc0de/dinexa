import Form from "react-bootstrap/Form";
import InformativeToolTip from "../UI/Tooltips/Informative";

function BasicExample() {
  return (
    <Form className="wallet-form">
      <Form.Group className="row mb-3">
        <Form.Label>
          Monthly income
          <InformativeToolTip text="Text here" />
        </Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="row ">
        <Form.Label>
          Money alert
          <InformativeToolTip text="Text here" />
        </Form.Label>
        <Form.Control type="password" />
      </Form.Group>
    </Form>
  );
}

export default BasicExample;
