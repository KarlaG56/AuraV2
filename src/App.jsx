import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Page/Login";
import Register from "./componentes/Page/Register";
import ControlSystem from "./componentes/Page/controlSystem";
import Control_menu from "./componentes/Page/control_menu";
import Control_Product from "./componentes/Page/Control_Product";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Register/>}/>
        <Route path="/Control_Sistema/Empleado" element={<ControlSystem/>}/>
        <Route path="/Control_Sistema/Menu" element={<Control_menu/>}/>
        <Route path="/Control_Sistema/Producto" element={<Control_Product/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
