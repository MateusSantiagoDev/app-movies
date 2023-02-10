import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../../data/api/api";
import { RouterPath } from "../../routes/route-type";
import { LoginTypes } from "./types/login";

export function Login() {
    const navigate = useNavigate()
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const LoginPayload: LoginTypes = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    const response = await Api.login(LoginPayload)
    if(!response) {
        console.error(response.message)
    }
    navigate(RouterPath.HOME)
    
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
      <div>
        <Link to={RouterPath.REGISTRATION}>Cadastre-se</Link>
      </div>
    </div>
  )
}
