import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"

export function App () {
  return (
     <div>
        <BrowserRouter>
        <Router/>
        </BrowserRouter>
     </div>
  )
}