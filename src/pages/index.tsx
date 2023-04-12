import { Container } from "react-bootstrap";
import Form from "../modules/moneyMovement/application/create/Form";
import Table from "../modules/moneyMovement/application/getAll/Table";

// Project imports
import Repository from "../modules/moneyMovement/infraestructure/JSONRepository";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../store/index";

const repository = new Repository();

const index = () => {
  const { moneyMovements } = useAppSelector((state: RootState) => state);

  return (
    <Container>
      <h4 className="text-center my-5">Money movements</h4>
      <Table repository={repository} />
      <Form repository={repository} />
    </Container>
  );
};

export default index;
