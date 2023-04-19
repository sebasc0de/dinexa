// Project imports
import { heroSectionOneData } from "../data/homepage/HeroSectionOneData";
import { BenefitsOneData } from "../data/homepage/BenefitsOneData";
import MoneyCategories from "../data/moneyMovement/categories";
import Posts from "../data/posts/data";

import { BenefitsOne } from "../components/UI/Benefits/BenefitsOne";
import { HeroSectionOne } from "../components/UI/HeroSections/HeroSectionOne";
import { Public } from "../components/layouts/Public";
import CategoriesGrid from "../components/posts/CategoriesGrid";
import PostCarrousel from "../components/posts/Carrousel";

const index = () => {
  return (
    <Public>
      <HeroSectionOne data={heroSectionOneData} />
      <BenefitsOne
        title="Create and sell your NFTs"
        subtitle="Here are a few reasons why you should choose Neftify"
        data={BenefitsOneData}
      />
      <CategoriesGrid
        categories={MoneyCategories}
        sectionTitle="Categorize your expenses"
        sectionDesc="Your expenses sorted by categories"
      />
      <PostCarrousel data={Posts} />
    </Public>
  );
};

export default index;
