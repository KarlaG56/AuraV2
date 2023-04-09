import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Page/Login";
import Register from "./componentes/Page/Register";
import Inicio from "./componentes/Page/Inicio";
import ControlSystem from "./componentes/Page/controlSystem";
import AcercaDeNosotros from "./componentes/Page/AcercaDeNosotros";
import Menu from "./componentes/Page/Menu";
import Servicios from "./componentes/Page/Servicios";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Register/>}/>
        <Route path='/Inicio' element={<Inicio />} />
        <Route path='/AcercaDeNosotros' element={<AcercaDeNosotros />} />
        <Route path="/Control_Sistema" element={<ControlSystem/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Servicios" element={<Servicios/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
