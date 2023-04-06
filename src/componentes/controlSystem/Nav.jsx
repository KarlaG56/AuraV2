import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav-controller">
            <Link to="/" className='Block'>
                <a></a>
            </Link>

            <Link to="/" className='Block'>
                <a>| Registrar empleado |</a>
            </Link>

            <Link to="/" className='Block'>
                <a>| Carga de menu |</a>
            </Link>

            <Link to="/" className='Block'>
                <a>| Carga de Productos |</a>
            </Link>

            <Link to="/" className='Block' >
                <a>| Cerrar sesion</a>
            </Link>

            <Link to="/" className='Block' >
                <a></a>
            </Link>
        </nav>
    )
}

export default Nav;