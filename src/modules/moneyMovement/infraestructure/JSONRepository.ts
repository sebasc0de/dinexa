import { MoneyMovement } from "../../../types";
import { Repository } from "../application/Repository";

class JSONRepository implements Repository {
  public data: MoneyMovement[] = [];

  create(data: MoneyMovement) {
    // Push money movements to data array
    this.data.push(data);

    return data.id;
  }

  getAll() {
    return this.data;
  }
}

export default JSONRepository;
