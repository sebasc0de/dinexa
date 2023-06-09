import { AuthLoginData, AuthRegisterData } from "../../../types";

export interface Repository {
  createUser: (user: AuthRegisterData) => Promise<User>;
  loginUser: (user: AuthLoginData) => Promise<User>;
  getUser: () => Promise<unknown>;
}
