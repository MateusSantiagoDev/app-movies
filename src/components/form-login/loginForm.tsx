import './login.css'

export function LoginForm () {
    return (
    <div className='div-form_user-login'>
      <div className='div_form-user'>
        <h3>Cadastro de usuário</h3>
        <form className='form-user'>
            <input type='text' name='name' placeholder='nome completo'/>
            <input type='text' name='cpf' placeholder='cpf'/>
            <input type='text' name='email' placeholder='email'/>
            <input type='number' name='idade' placeholder='idade'/>
            <input type='text' name='password' placeholder='digite uma senha'/>  
            <input type='text' name='confirmPassword' placeholder='confirme a senha'/> 
            <div className='div_button_form-user'>
                <button>Enviar</button>
            </div>         
        </form>
      </div>
    </div>
    )
}