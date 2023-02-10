import { LoginForm } from "./components/form-login/loginForm"
import { BrowserRouter } from "react-router-dom"

export function App () {
  return (
     <div>
        <BrowserRouter>
        <LoginForm/>
        </BrowserRouter>
     </div>
  )
}