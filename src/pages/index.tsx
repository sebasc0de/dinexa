import Table from "../components/moneyMovement/Table";

// Project imports
import { Public } from "../components/layouts/Public";

const index = () => {
  return (
    <Public>
      <h4 className="text-center my-5">Money movements</h4>
      <Table />
    </Public>
  );
};

export default index;
