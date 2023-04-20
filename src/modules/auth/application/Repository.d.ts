import { AuthLoginData, AuthRegisterData } from "../../../types";

export interface Repository {
  createUser: (user: AuthRegisterData) => void;
  loginUser: (user: AuthLoginData) => void;
}
