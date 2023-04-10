import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav-controller">
            <Link to="/" className='Block'>
                <a></a>
            </Link>

            <Link to="/Control_sistema/Empleado" className='Block'>
                <a>| Registrar empleado |</a>
            </Link>

            <Link to="/Control_sistema/Menu" className='Block'>
                <a>| Carga de menu |</a>
            </Link>

            <Link to="/Control_Sistema/Producto" className='Block'>
                <a>| Carga de Productos |</a>
            </Link>

            <Link to="/Iniciar-sesion" className='Block' >
                <a>| Cerrar sesion</a>
            </Link>

            <Link to="/" className='Block' >
                <a></a>
            </Link>
        </nav>
    )
}

export default Nav;