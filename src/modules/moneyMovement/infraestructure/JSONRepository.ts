import { MoneyMovement } from "../../../types";
import { Repository } from "../application/Repository";

class JSONRepository implements Repository {
  public data: MoneyMovement[] = [
    { id: 2, name: "Gasto 1", category: "Comida", total: 1325 },
  ];

  create(data: MoneyMovement) {
    const create = this.data.push(data);
    return data.id;
  }

  getAll() {
    return this.data;
  }
}

export default JSONRepository;
