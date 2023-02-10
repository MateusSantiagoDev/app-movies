import { FormEvent } from 'react';
import { Api } from '../../data/api/api';
import './loginForm.css'
import { FormLoginTypes } from './types/login-types';
import { useNavigate } from 'react-router-dom' 
import { RouterPath } from '../../routes/route-type';

export function LoginForm () {
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user: FormLoginTypes = {
      name: e.currentTarget.nameUser.value,
      cpf: e.currentTarget.cpf.value,
      email: e.currentTarget.email.value,
      idade: Number(e.currentTarget.idade.value),
      role: "user",
      password: e.currentTarget.password.value,
      confirmPassword: e.currentTarget.confirmPassword.value,
    };

    const response = await Api.createUser(user);
    if (response) {
      navigate(RouterPath.LOGIN)
    }
  }
    return (
    <div className='div-form_user-login'>
      <div className='div_form-user'>
        <h3>Cadastro de usuário</h3>
        <form className='form-user' onSubmit={handleSubmit}>
            <input type='text' name='nameUser' placeholder='nome completo'/>
            <input type='text' name='cpf' placeholder='cpf'/>
            <input type='text' name='email' placeholder='email'/>
            <input type='number' name='idade' placeholder='idade'/>
            <input type='text' name='password' placeholder='digite uma senha'/>  
            <input type='text' name='confirmPassword' placeholder='confirme a senha'/> 
            <div className='div_button_form-user'>
                <button type='submit'>Enviar</button>
                <button type='button' onClick={() => {
                   navigate(RouterPath.LOGIN)
                }}>Voltar</button>
            </div>         
        </form>
      </div>
    </div>
    )
}