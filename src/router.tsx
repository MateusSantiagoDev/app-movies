import { Routes, Route } from "react-router-dom";
import { RouterPath } from "./routes/route-type";
import { LoginForm } from "./components/form-login/loginForm";
import { Login } from "./components/login/login";
import { Home } from "./pages/home/home";
import { Movie } from "./pages/movie/movie"
import { Form } from "./components/form/form";
import { Serie } from "./pages/serie/serie";
import { Anime } from './pages/anime/anime'
import { useState } from "react";
import { Profiles } from './pages/perfils/profile'

export function Router() {

  const [ isValue, setIsValue ] = useState(null)
  const [ isValueId, setIsValueId ] = useState(null)

  return (
    <Routes>
      <Route path={RouterPath.LOGIN} element={<Login />} />
      <Route path={RouterPath.REGISTRATION} element={<LoginForm />} />
      <Route path={RouterPath.HOME} element={<Home />} />
      <Route path={RouterPath.PROFILES} element={<Profiles />} />
      <Route path={RouterPath.MOVIES} element={<Movie />} />
      <Route path={RouterPath.SERIES} element={<Serie eventHandler={(e:any) => setIsValue(e)} eventHandlerId={(e:any) => setIsValueId(e)}/>} />
      <Route path={RouterPath.ANIMES} element={<Anime eventHandler={(e:any) => setIsValue(e)} eventHandlerId={(e:any) => setIsValueId(e)}/>} />
      <Route path={RouterPath.FORM} element={<Form isValid={isValue} />} />
      <Route path={RouterPath.FORM_UPDATE} element={<Form isValid={isValue} isValidId={isValueId}/>} />
    </Routes>
  )
}
