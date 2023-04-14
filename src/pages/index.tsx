import Form from "../components/moneyMovement/Form";
import Table from "../components/moneyMovement/Table";

// Project imports
import { SupabaseRepository } from "../modules/moneyMovement/infraestructure/SupabaseRepository";
import { Public } from "../components/layouts/Public";

const index = () => {
  const repository = SupabaseRepository();

  return (
    <Public>
      <h4 className="text-center my-5">Money movements</h4>
      <Table />
      <Form repository={repository} />
    </Public>
  );
};

export default index;
