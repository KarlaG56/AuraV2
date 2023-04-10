import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Page/Login";
import Register from "./componentes/Page/Register";
import Inicio from "./componentes/Page/Inicio";
import ControlSystem from "./componentes/Page/controlSystem";
import Control_menu from "./componentes/Page/control_menu";
import Control_Product from "./componentes/Page/Control_Product";
import AcercaDeNosotros from "./componentes/Page/AcercaDeNosotros";
import Menu from "./componentes/Page/Menu";
import Servicios from "./componentes/Page/Servicios";
import Buy from "./componentes/Page/Buy";

function App() {

  let sessionId;

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://54.146.85.160:8080/session/session-id", requestOptions)
    .then(response => response.text())
    .then(result => sessionId = result.sessionId)
    .catch(error => console.log('error', error));


  localStorage.setItem("sessionId", sessionId);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path="/Iniciar-sesion" element={<Login />} />
        <Route path="/Registro" element={<Register />} />
        <Route path='/Acerca-de-nosotros' element={<AcercaDeNosotros />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Compra" element={<Buy />} />
        <Route path="/Control_Sistema/Empleado" element={<ControlSystem />} />
        <Route path="/Control_Sistema/Menu" element={<Control_menu />} />
        <Route path="/Control_Sistema/Producto" element={<Control_Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
