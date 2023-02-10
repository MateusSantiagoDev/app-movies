import './login.css'

export function Login () {
    return (
    <div>
      <div>
        <h3>Cadastro de usuário</h3>
        <form>
            <input type='text' name='name' placeholder='nome completo'/>
            <input type='text' name='cpf' placeholder='cpf'/>
            <input type='text' name='email' placeholder='email'/>
            <input type='number' name='idade' placeholder='idade'/>
            <input type='text' name='password' placeholder='digite uma senha'/>  
            <input type='text' name='confirmPassword' placeholder='confirme a senha'/> 
            <div>
                <button>Enviar</button>
            </div>         
        </form>
      </div>
    </div>
    )
}