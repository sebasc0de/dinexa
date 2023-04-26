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

// User
export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  phone: string;
  confirmation_sent_at: Date;
  app_metadata: AppMetadata;
  user_metadata: UserMetadata;
  identities: Identity[];
  created_at: Date;
  updated_at: Date;
}

export interface AppMetadata {
  provider: string;
  providers: string[];
}

export interface Identity {
  id: string;
  user_id: string;
  identity_data: IdentityData;
  provider: string;
  last_sign_in_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface IdentityData {
  email: string;
  sub: string;
}

export interface UserMetadata {}

// Wallet
export interface Wallet {
  minMoneyAlert: number;
  secureMonthlyIncome: number;
  savingPercentage: number;
}

export interface WalletForm {
  secureMonthlyIncome: number;
  minMoneyAlert: number;
}
