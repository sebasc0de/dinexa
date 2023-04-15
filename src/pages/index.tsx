import Table from "../components/moneyMovement/Table";

// Project imports
import { heroSectionOneData } from "../data/homepage/HeroSectionOneData";
import { Public } from "../components/layouts/Public";
import { HeroSectionOne } from "../components/UI/HeroSections/HeroSectionOne";

const index = () => {
  return (
    <Public>
      <HeroSectionOne data={heroSectionOneData} />

      <Table />
    </Public>
  );
};

export default index;
