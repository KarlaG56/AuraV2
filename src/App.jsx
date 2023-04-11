import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Page/Login";
import Register from "./componentes/Page/Register";
import Control_menu from "./componentes/Page/control_menu";
import Cartelera from "./componentes/Page/Cartelera"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Register/>}/>
        <Route path="/Control_Sistema/Pelicula" element={<Control_menu/>}/>
        <Route path="/" element={<Cartelera/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
