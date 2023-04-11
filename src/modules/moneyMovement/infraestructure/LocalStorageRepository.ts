import { MoneyMovement } from "../../../types";

const getFromLocalStorage = () => {
  const get = localStorage.getItem("moneyMovements");
  return JSON.parse(get as string) as MoneyMovement[];
};

const saveOnLocalStorage = (data: MoneyMovement[]) => {
  const storage = getFromLocalStorage();

  if (storage) {
    const newData = { ...storage, data };
    localStorage.setItem("moneyMovements", JSON.stringify(newData));
  }

  localStorage.setItem("moneyMovements", JSON.stringify(data));
};

export { getFromLocalStorage, saveOnLocalStorage };
