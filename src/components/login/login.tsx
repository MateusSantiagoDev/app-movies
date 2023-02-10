import './login.css'
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
    if (response) {
      navigate(RouterPath.HOME) 
    }   
  }

  return (
    <div className="div_login">
      <div>
      <h2>Login</h2>
      <form className="form_login" onSubmit={handleSubmit}>
        <input type="email" placeholder="email" name="email"/>
        <input type="password" placeholder="password" name="password"/>
        <div>
          <button className="button_form_login" type="submit">Entrar</button>
        </div>
      </form>
      <div className="div_link-login">
        <Link to={RouterPath.REGISTRATION}>Cadastre-se</Link>
      </div>
      </div>
    </div>
  )
}
