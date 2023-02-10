export type LoginRequest = {
  email: string
  password: string
}

export interface UserRequest {
  name: string
  cpf: string
  email: string
  idade: number
  role: string
  password: string
  confirmPassword: string
}

export type CardRequest = {
  title: string;
  description: string;
  avaliation: number;
  image: string;
};

export type CardDataRequest = {
  id: string;
  title: string;
  description: string;
  avaliation: number;
  image: string;
};
