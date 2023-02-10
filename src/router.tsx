import { Routes, Route } from 'react-router-dom'
import { RouterPath } from './routes/route-type'
import { LoginForm } from './components/form-login/loginForm'

export function Router() {
  return (
    <Routes>
      <Route path={RouterPath.REGISTRATION} element={<LoginForm/>}/>
    </Routes>
  )
}
