import { Container } from "react-bootstrap";
import { SupabaseRepository } from "../modules/moneyMovement/infraestructure/SupabaseRepository";
import Form from "../components/moneyMovement/Form";
import Table from "../components/moneyMovement/Table";

const index = () => {
  const repository = SupabaseRepository();

  return (
    <Container>
      <h4 className="text-center my-5">Money movements</h4>
      <Table />
      <Form repository={repository} />
    </Container>
  );
};

export default index;
