import { Routes, Route } from "react-router-dom";
import { RouterPath } from "./routes/route-type";
import { LoginForm } from "./components/form-login/loginForm";
import { Login } from "./components/login/login";
import { Home } from "./pages/home/home";

export function Router() {
  return (
    <Routes>
      <Route path={RouterPath.LOGIN} element={<Login />} />
      <Route path={RouterPath.REGISTRATION} element={<LoginForm />} />
      <Route path={RouterPath.HOME} element={<Home />} />
    </Routes>
  )
}
