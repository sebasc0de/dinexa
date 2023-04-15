import Table from "../components/moneyMovement/Table";
import Modal from "../components/moneyMovement/Modal";

// Project imports
import { Public } from "../components/layouts/Public";
import { HeroSectionOne } from "../components/UI/HeroSections/HeroSectionOne";

const index = () => {
  return (
    <Public>
      <HeroSectionOne />
      <Table />
    </Public>
  );
};

export default index;
