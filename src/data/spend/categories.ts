import { SpendCategory } from "../../types";
import { v4 as uuid } from "uuid";

const categories: SpendCategory[] = [
  {
    id: uuid(),
    title: "house",
    img: "money_categories/house.jpg",
  },
  {
    id: uuid(),
    title: "transportation",
    img: "money_categories/transportation.jpg",
  },
  {
    id: uuid(),
    title: "healthcare",
    img: "/money_categories/healthcare.jpg",
  },
  {
    id: uuid(),
    title: "food",
    img: "/money_categories/food.jpg",
  },
  {
    id: uuid(),
    title: "entertainment",
    img: "/money_categories/entertainament.jpg",
  },
  {
    id: uuid(),
    title: "saving",
    img: "/money_categories/saving.jpg",
  },
];

export default categories;
