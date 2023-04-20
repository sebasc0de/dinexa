import { AuthLoginData, AuthRegisterData } from "../../../types";

export interface Repository {
  createUser: (authRegister: AuthRegisterData) => void;
  loginUser: (authLogin: AuthLoginData) => void;
}
