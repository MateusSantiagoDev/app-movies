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