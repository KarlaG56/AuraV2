import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Page/Login";
import Register from "./componentes/Page/Register";
import Inicio from "./componentes/Page/Inicio";
import ControlSystem from "./componentes/Page/controlSystem";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Register/>}/>
        <Route path='/Inicio' element={<Inicio />} />
        <Route path="/Control_Sistema" element={<ControlSystem/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
