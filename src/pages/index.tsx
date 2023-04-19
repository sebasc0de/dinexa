// data imports
import { BenefitsOneData } from "../data/homepage/BenefitsOneData";
import MoneyCategories from "../data/moneyMovement/categories";

// Components
import { BenefitsOne } from "../components/UI/Benefits/BenefitsOne";
import { HeroSectionOne } from "../components/UI/HeroSections/HeroSectionOne";
import { Public } from "../components/layouts/Public";
import CategoriesGrid from "../components/posts/CategoriesGrid";

// Translations
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation(["homepage"]);

  return (
    <Public>
      <HeroSectionOne
        title={t("heroSectionOne.title")}
        desc={t("heroSectionOne.desc")}
        gradientText={t("heroSectionOne.highlight")}
      />
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
    </Public>
  );
};

export default index;
