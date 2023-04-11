import { MoneyMovement } from "../../../../types";
import { Repository } from "./Repository";

class Service implements Repository {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  create(data: MoneyMovement) {
    return this.repository.create(data);
  }

  getAll() {
    return this.repository.getAll();
  }
}

export default Service;
