export interface MoneyMovement {
  id?: string;
  name: string;
  total: number;
  category: string;
}

export interface MoneyMovementCategory {
  title: string;
  img: string;
  desc?: string;
}

export interface Post {
  id: string;
  title: string;
  desc: string;
  img: string;
}

// Auth interfaces
export interface AuthRegisterData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthLoginData {
  email: string;
  password: string;
}
