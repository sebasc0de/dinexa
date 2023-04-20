import { AuthLoginData, AuthRegisterData } from "../../../types";
import { Repository } from "./Repository";

export const create = async (
  repository: Repository,
  user: AuthRegisterData
) => {
  return repository.createUser(user);
};

export const login = async (repository: Repository, user: AuthLoginData) => {
  return repository.loginUser(user);
};
