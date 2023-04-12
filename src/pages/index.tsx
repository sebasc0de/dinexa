import { Container } from "react-bootstrap";
import Form from "../modules/moneyMovement/application/create/Form";
import Table from "../modules/moneyMovement/application/getAll/Table";

const index = () => {
  return (
    <Container>
      <h4 className="text-center my-5">Money movements</h4>
      <Table />
      <Form />
    </Container>
  );
};

export default index;
