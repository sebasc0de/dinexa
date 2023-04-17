import Table from "../components/moneyMovement/Table";

// Project imports
import { heroSectionOneData } from "../data/homepage/HeroSectionOneData";
import { BenefitsOneData } from "../data/homepage/BenefitsOneData";

import { Public } from "../components/layouts/Public";
import { HeroSectionOne } from "../components/UI/HeroSections/HeroSectionOne";
import { BenefitsOne } from "../components/UI/Benefits/BenefitsOne";

const index = () => {
  return (
    <Public>
      <HeroSectionOne data={heroSectionOneData} />
      <BenefitsOne
        title="Create and sell your NFTs"
        subtitle="Here are a few reasons why you should choose Neftify"
        data={BenefitsOneData}
      />
      <Table />
    </Public>
  );
};

export default index;
