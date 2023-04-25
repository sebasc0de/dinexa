import Form from "react-bootstrap/Form";
import ButtonWithLoader from "../UI/Buttons/ButtonWithLoader";
import SavingStylesSelector from "./SavingStylesSelector";

function WalletForm() {
  return (
    <Form className="dinexa-form">
      <SavingStylesSelector />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your secure monthly income:</Form.Label>
        <Form.Control type="text" placeholder="$600.00" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter a money amount for alert:</Form.Label>
        <Form.Control type="text" placeholder="$200.00" />
      </Form.Group>

      <ButtonWithLoader className="w-100" loading={false}>
        Save wallet settings
      </ButtonWithLoader>
    </Form>
  );
}

export default WalletForm;
