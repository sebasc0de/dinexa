import { MoneyMovement } from "../../../types";
import { Repository } from "../application/Repository";
import {
  getFromLocalStorage,
  saveOnLocalStorage,
} from "./LocalStorageRepository";

class JSONRepository implements Repository {
  public data: MoneyMovement[] = [];

  create(data: MoneyMovement) {
    // Push money movements to data array
    this.data.push(data);

    // Save on local storage
    saveOnLocalStorage(this.data);

    return data.id;
  }

  getAll() {
    // Get data from local storage
    const storage = getFromLocalStorage();

    if (storage) return storage;

    return this.data;
  }
}

export default JSONRepository;
