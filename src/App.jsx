import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Page/Login";
import Register from "./componentes/Page/Register";
import Inicio from "./componentes/Page/Inicio";
import ControlSystem from "./componentes/Page/controlSystem";
import Menu from "./componentes/Page/Menu"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Register/>}/>
        <Route path='/Inicio' element={<Inicio />} />
        <Route path="/Control_Sistema" element={<ControlSystem/>}/>
        <Route path="/Menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
