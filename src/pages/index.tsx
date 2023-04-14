import Table from "../components/moneyMovement/Table";
import Modal from "../components/moneyMovement/Modal";

// Project imports
import { Public } from "../components/layouts/Public";
import { MegaTitleOne } from "../components/UI/Titles/MegaTitleOne";

const index = () => {
  return (
    <Public>
      <MegaTitleOne
        title="Meet tu vieja"
        subtitle="Control and metric your spends"
        desc="Description here"
        Component={Modal}
      />
      <Table />
    </Public>
  );
};

export default index;
